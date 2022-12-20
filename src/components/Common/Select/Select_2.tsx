import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from '../../../store/hook';
import { updateCity,
  updateAmountRooms,
  updatePriceFrom,
  updatePriceTo,
  updateSubwayStation,
  updateNeighborhood
} from "../../../store/filtersSlice";
import { updateFilteredFlats } from "../../../store/flatsSlice";
import { getCityNameRu } from '../../../utils/title';
// import { ReactComponent as Point2 } from '../../../assets/img/point_2.svg';
import cn from "./Select_2.module.scss";
import { 
  cityOptionsInfo,
  roomOptionsInfo,
  subwayOptionsInfo,
  neighborhoodOptionsInfo,
 } from '../../Filters/FiltersInfo';


// const citiesInfo = [
//   { name: "minsk", label: "Минске", amount: 0 },
//   { name: "vitebsk", label: "Витебске", amount: 0 },
//   { name: "grodno", label: "Гродно", amount: 0 },
//   { name: "gomel", label: "Гомеле", amount: 0 },
//   { name: "brest", label: "Бресте", amount: 0 },
//   { name: "mogilev", label: "Могилеве", amount: 0 },
// ]

interface IPropsSelect {
  defaultName: string,
  typeUpdateData: string,
}


export const Select = ({defaultName, typeUpdateData}: IPropsSelect) => {

  // НУЖЕН Click вне Options для закрытия Options
  const data = "city";

  const getUpdateData = (typeUpdateData: string, data: string) => {
    switch (typeUpdateData) {
      case "city":
        dispatch(updateCity(data));
        break;
      case "amountRooms":
        dispatch(updateAmountRooms(data));
        break;
      case "priceFrom":
        dispatch(updatePriceFrom(data));
        break;
      case "priceTo":
        dispatch(updatePriceTo(data));
        break;
      case "subwayStation":
        dispatch(updateSubwayStation(data));
        break;
      case "neighborhood":
        dispatch(updateNeighborhood(data));
        break;
    }
  }

  const getOptions = (typeUpdateData: string) => {
    switch (typeUpdateData) {
      case "city":
        return cityOptionsInfo;
      case "amountRooms":
        return roomOptionsInfo;
      case "subwayStation":
        return subwayOptionsInfo;
      case "neighborhood":
        return neighborhoodOptionsInfo;
      default: return [];
    }
  }

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const allFlats = useAppSelector(state => state.flats.all);

  const [display, setDisplay] = useState(false);
  const [valueButton, setValueButton] = useState(`${defaultName}`); 

  let getFilteredBase = (currentCity: string) => allFlats.filter(
    flat => (flat.city === currentCity));

  // let getFilteredWithCity = (currentCity: string, typeUpdateData: string) => {
  //   switch (typeUpdateData) {
  //     case "amountRooms":
  //       let filteredBase = allFlats.filter(flat => (
  //         (flat.city === currentCity) && (+flat.amount_rooms === +data.amount_rooms)
  //       ))
  //       return roomOptionsInfo;
  //     case "subwayStation":
  //       return subwayOptionsInfo;
  //     case "neighborhood":
  //       return neighborhoodOptionsInfo;
  //     default: return [];
  //   }
  // }

  const handleLiValue = (e: React.MouseEvent<HTMLElement>) => {
    console.log('e', e)
    console.log('e.currentTarget', e.currentTarget)
    console.log('e.currentTarget.dataset.value', e.currentTarget.dataset.value)
    console.log('e.currentTarget.innerText', e.currentTarget.innerText)

    let optionDataValue = e.currentTarget.dataset.value;
    let dataValue = (optionDataValue) ? optionDataValue : `${defaultName}`;
    console.log("dataValue", dataValue);


    // let filteredBase = getFilteredBase(dataValue); //?????? react hook form


    setValueButton(e.currentTarget.innerText);

    // // dispatch(updateCity(cityName));
    // getUpdateData(typeUpdateData, dataValue);

    // dispatch(updateFilteredFlats(filteredBase))
    setDisplay(!display);
    // navigate("/catalog");
  }
  
  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    setDisplay(!display);
  }

  const options = getOptions(typeUpdateData);
  const liItems = options.map(option => 
    <li 
      data-value={option.value} 
      className={cn.option}
      onClick={handleLiValue}
      >
      {option.label}
    </li>)
  


  return (
    <div className={cn.select}>
              
      <button 
        className={cn.select_btn} 
        onClick={handleClose}
      >
        <div className={cn.flex_row}>
          <div  data-value={valueButton} className={cn.select_btn_text}>{valueButton}</div> 
        </div>
      </button>
      <ul className={`${cn.options} ${display ? '' : cn.close}`}>
        {liItems}
      </ul>
    </div>
  )
}