import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateAmountRooms, updatePriceFrom, updatePriceTo } from "../../store/filtersSlice";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from '../Common/Input/Input';
import { Button } from '../Common/Button/Button';
import { Select } from '../Common/Select/Select';
import { ReactComponent as SetupIcon } from "../../assets/img/main_setup.svg";
import { ReactComponent as LocationIcon } from "../../assets/img/main_location.svg";
import cn from "./Filters.module.scss";



export const Filters = () => {

  const amountRooms = useSelector(state => state.filters.amountRooms);
  const priceFrom = useSelector(state => state.filters.priceFrom);
  const priceTo = useSelector(state => state.filters.priceTo);
  const dispatch = useDispatch();

  const { 
    register, 
    handleSubmit,
    reset,
    control,
  } = useForm();

  const arrOptions = [
    {value: '', label: 'Выберите'},
    {value: 1, label: '1-комн.'},
    {value: 2, label: '2-комн.'},
    {value: 3, label: '3-комн.'},
    {value: 4, label: '4-комн.'},
    {value: 5, label: '5-комн.'},
  ]

  const options = arrOptions.map(option => 
    <option value={option.value}>{option.label}</option>)


  const onSubmit = (data) => {
    console.log('data:', data);
    if (data.amount_rooms !== '') dispatch(updateAmountRooms(amountRooms));
    if (data.price_from !== '') dispatch(updatePriceFrom(priceFrom));
    if (data.price_to !== '') dispatch(updatePriceTo(priceTo));
    reset();
  }
  
  return (
    <div className={cn.wrapper_filters}>
      <div className={cn.container}>


        <form className={cn.filters} onSubmit={handleSubmit(onSubmit)}>

          <div className={cn.filters_item}>
            <div className={cn.filter_name}>Комнаты</div>
            {/* <select className={cn.filter}></select> */}
            {/* <Select arrOptions={arrOpt}/> */}
            <select
              name='amount_rooms'
              {...register('amount_rooms')}
            >
              {options}
            </select>
          </div>

          <div className={cn.filters_item}>
            <div className={cn.filter_name}>Цена за сутки (BYN)</div>
            <div className={cn.filter}>

              {/* <Input style="w100h37" typeInput={"От"} placeholder=" " /> */}
              <div className={`${cn.wrapper_input} ${cn.parent} ${cn.w100h37}`}>
                <div className={`${cn.icon} ${cn.without_icon} `}>От</div>
                <input 
                  className={`${cn.input} ${cn.child_input}`}
                  {...register('price_from')}
                  />
              </div>

              <span className={cn.dash}>-</span>

              {/* <Input style="w100h37" typeInput={"До"} placeholder=" " /> */}
              <div className={`${cn.wrapper_input} ${cn.parent} ${cn.w100h37}`}>
                <div className={`${cn.icon} ${cn.without_icon} `}>До</div>
                <input 
                  className={`${cn.input} ${cn.child_input}`}
                  {...register('price_to')}
                  />
              </div>
            </div>
          </div>

          <div className={cn.filters_item}>
            <div className={cn.filter_name}>Больше опций </div>
            <div className={cn.filter}>
              <button className={cn.btn_setup}><SetupIcon /></button>
            </div>
          </div>

          <div className={cn.filters_item}>

            <Button
              text='Очистить'
              style="light"
              typeButton="without-icon"
            />
            {/* <Button
              text='Показать объекты'
              style="purple"
              typeButton="right-icon"
              // type="submit"
            /> */}

            <button type="submit">Отправить</button>

            {/* <button>Показать объекты icon</button> */}
          </div>

        </form>
      </div>
    </div>


  )
}
