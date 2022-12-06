import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
// import { useSelector,  useDispatch } from 'react-redux';
import { useAppSelector, useAppDispatch } from '../../store/hook';
import { updateAmountRooms, updatePriceFrom, updatePriceTo, updateSubwayStation, updateNeighborhood, updateCity } from "../../store/filtersSlice";
import { updateAllFlats, updateFilteredFlats } from "../../store/flatsSlice";
import { cityOptionsInfo, roomOptionsInfo, subwayOptionsInfo, neighborhoodOptionsInfo } from './FiltersInfo';
import { Input, WrapperInput } from '../Common/Input/Input';
import { Button } from '../Common/Button/Button';
import { Select } from '../Common/Select/Select';
import { ReactComponent as SetupIcon } from "../../assets/img/main_setup.svg";
import { ReactComponent as LocationIcon } from "../../assets/img/main_location.svg";
import { ReactComponent as ArrowIcon } from "../../assets/img/main_arrow_right_1.svg";
import { dataBackend_2 } from "../../data/data_2";
import cn from "./Filters.module.scss";



export interface IFormValues {
  // "city": string;
  // "amount_rooms": string;
  // "price_from": string;
  // "price_to": string;
  city: string,
  amount_rooms: string,
  price_from: string,
  price_to: string,
}

type FiltersProps = {
  typeFilters: string;
}

const Filters = ({ typeFilters }: FiltersProps) => {

  let navigate = useNavigate();
  // const allFlats = useSelector(state => state.flats.all);
  // const filteredFlats = useSelector(state => state.flats.filtered);
  // const city = useSelector(state => state.filters.city)
  // const dispatch = useDispatch();
  const allFlats = useAppSelector(state => state.flats.all);
  const filteredFlats = useAppSelector(state => state.flats.filtered);
  const city = useAppSelector(state => state.filters.city)
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
  } = useForm<IFormValues>();

  useEffect(() => {
    // dispatch(updateAllFlats(dataBackend['minsk']));
    // if (city !== '') dispatch(updateAllFlats(dataBackend[`${city}`]));
    dispatch(updateAllFlats(dataBackend_2));

  }, []);


  const cityOptions = cityOptionsInfo.map(option =>
    <option key={option.key} value={option.value}>{option.label}</option>);

  const roomOptions = roomOptionsInfo.map(option =>
    <option key={option.key} value={option.value}>{option.label}</option>);

  const subwayOptions = subwayOptionsInfo.map(option =>
    <option key={option.key} value={option.value}>{option.label}</option>);

  const neighborhoodOptions = neighborhoodOptionsInfo.map(option =>
    <option key={option.key} value={option.value}>{option.label}</option>);

  const onReset = () => {
    reset();
  }

  // console.log('allFlats :', allFlats)

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    console.log('data:', data);

    if (data.amount_rooms !== '') dispatch(updateAmountRooms(data.amount_rooms));
    if (data.price_from !== '') dispatch(updatePriceFrom(data.price_from));
    if (data.price_to !== '') dispatch(updatePriceTo(data.price_to));
    // if (data.subway_station !== '') dispatch(updateSubwayStation(data.subway_station));
    // if (data.neighborhood !== '') dispatch(updateNeighborhood(data.neighborhood));
    console.log('data.city :', data.city)


    const getDataCity = (typeFilters: string) => {
      if (typeFilters === "catalog") {
        return city;
      } else {
        return data.city;
      }
    }

    data.city = getDataCity(typeFilters);

    let filteredBase = allFlats.filter(flat => (
      (data.city !== '' ? (flat.city === data.city) : true) &&
      (data.amount_rooms !== '' ? (+flat.amount_rooms === +data.amount_rooms) : true) &&
      (data.price_from !== '' ? (+flat.price >= +data.price_from) : true) &&
      (data.price_to !== '' ? (+flat.price <= +data.price_to) : true) 
      // (data.subway_station !== '' ? (flat.subway_station === data.subway_station) : true) &&
      // (data.neighborhood !== '' ? (flat.neighborhood === data.neighborhood) : true)

    ))
    console.log('filtered(into state, Filters) :', filteredBase);
    dispatch(updateFilteredFlats(filteredBase))

    if (data.city !== '') dispatch(updateCity(data.city));
    if ((data.city !== '') && (typeFilters === "main")) navigate("/catalog");;


    // reset();
  }
  // console.log('typeFilters', typeFilters)

  return (
    <div className={cn.wrapper_filters}>
      <div className={cn.container}>

        <form className={cn.filters} onSubmit={handleSubmit(onSubmit)}>

          <div className={cn.base_filters}>

          {typeFilters === "main" ? <div className={`${cn.filter_main}`}>
              <div className={`${cn.filter_name} ${cn.filter_name_main}`}>Город</div>
              <select
                className={`${cn.select}`}
                // name='city'
                {...register('city')}
              >
                {cityOptions}
              </select>
            </div> : <></>}

            <div className={`${typeFilters === "catalog" ? cn.filter_catalog : cn.filter_main}`}>
              <div className={`${cn.filter_name} ${cn.filter_name_main}`}>Комнаты</div>
              <select
                className={`${cn.select}`}
                // name='amount_rooms'
                {...register('amount_rooms')}
              >
                {roomOptions}
              </select>
            </div>

            <div className={`${typeFilters === "catalog" ? cn.filter_catalog : cn.filter_main} ${cn.inputs}`}>
              <div className={`${cn.filter_name} ${cn.filter_name_main}`}>Цена за сутки (BYN)</div>
              <div className={`${cn.filter} ${cn.wrapper_price}`}>
                <WrapperInput style="w80h37" typeIcon={"От"}>
                    <input
                      className={`${cn.input} ${cn.child_input}`}
                      {...register('price_from')}
                    />
                </WrapperInput>
                <span className={cn.dash}>-</span>
                <WrapperInput style="w80h37" typeIcon={"До"}>
                  <input
                    className={`${cn.input} ${cn.child_input}`}
                    {...register('price_to')}
                  />
                </WrapperInput>
              </div>
            </div>

            <div className={`${cn.filter_catalog} ${cn.btn_more_details}`}>
              <div className={`${cn.filter_name} ${cn.filter_name_moredetails}`}>Больше опций </div>
              <div className={cn.filter}>
                <button type="button" className={`${cn.btn_setup} ${cn.btn}`}><SetupIcon /></button>
              </div>
            </div>

            <div className={`${cn.filter_catalog} ${cn.wrapper_buttons}`}>
              {typeFilters === "main" ?
                <>
                  <button type="button" className={`${cn.btn} ${cn.white}`}>На карте
                  <LocationIcon/>
                  </button>
                  <button type="submit" className={`${cn.btn} ${cn.yellow}`}>
                    {/* <Link to="/catalog"> */}
                      Показать
                      <ArrowIcon />
                    {/* </Link> */}
                  </button>
                </>
                : <></>}

              {typeFilters === "catalog" ?
              <>
                <button type="reset" onClick={onReset} className={`${cn.btn} ${cn.light}`}>Очистить</button>
                <button type="submit" className={`${cn.btn} ${cn.purple}`}>Показать объекты</button>
              </>
                : <></>}

              {/* <Button text='Очистить' style="light" typeButton="without-icon" /> */}
              {/* <Button text='Показать объекты' style="purple" typeButton="right-icon"
                // type="submit" /> */}
            </div>
          </div>

          {typeFilters === "catalog" ? <div className={cn.more_details}>

            {/* <div className={cn.filters_item}>
              <div className={cn.filter_name}>Спальные места</div>
              <select
                className={`${cn.select}`}
              // name='amount_rooms'
              // {...register('amount_rooms')}
              >
                {roomOptions}
              </select>
            </div> */}

            {/* <div className={cn.filters_item}>
              <div className={cn.filter_name}>Район</div>
              <select
                className={`${cn.select}`}
                name='neighborhood'
                {...register('neighborhood')}
              >
                {neighborhoodOptions}
              </select>
            </div>

            <div className={cn.filters_item}>
              <div className={cn.filter_name}>Метро</div>
              <select
                className={`${cn.select}`}
                name='subway_station'
                {...register('subway_station')}
              >
                {subwayOptions}
              </select>
            </div> */}

            <div className={cn.checkboxes}>
              {/* gas_stove "Газовая плита" */}
              {/* oven  "Духовка" */}
              {/* coffee_maker "Кофеварка" */}
              {/* microwave "Микроволновая печь " */}
              {/* tableware "Посуда" */}
              {/* dishwasher "Посудомоечная машина " */}

            </div>
          </div>
            : <></>}

        </form>
      </div>
    </div>
  )
}

export default Filters;
