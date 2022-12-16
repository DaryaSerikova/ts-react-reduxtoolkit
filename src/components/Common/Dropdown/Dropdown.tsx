import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from '../../../store/hook';
import { updateCity } from "../../../store/filtersSlice";
import { updateFilteredFlats } from "../../../store/flatsSlice";
import { getCityNameRu } from '../../../utils/title';
import { ReactComponent as Point2 } from '../../../assets/img/point_2.svg';
import cn from "./Dropdown.module.scss";


const citiesInfo = [
  { name: "minsk", label: "Минске", amount: 0 },
  { name: "vitebsk", label: "Витебске", amount: 0 },
  { name: "grodno", label: "Гродно", amount: 0 },
  { name: "gomel", label: "Гомеле", amount: 0 },
  { name: "brest", label: "Бресте", amount: 0 },
  { name: "mogilev", label: "Могилеве", amount: 0 },
]


export const Dropdown = () => {

  // НУЖЕН Click вне Options для закрытия Options

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const allFlats = useAppSelector(state => state.flats.all);
  const city = useAppSelector(state => state.filters.city)


  const [display, setDisplay] = useState(false);
  const [valueButton, setValueButton] = useState("Квартиры на сутки"); 

  useEffect(() => {
    if (city !== '') {
      let res = getCityNameRu(city);
      setValueButton(`Квартиры на сутки в ${res}`);
    } else {
      setValueButton("Квартиры на сутки");
      // setDisplay(false);
    }
  }, [city]);

  let getFilteredBase = (currentCity: string) => allFlats.filter(
    flat => (flat.city === currentCity));
  

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    setDisplay(!display);
  }

  const handleLiValue = (e: React.MouseEvent<HTMLElement>) => {
    console.log('e', e)
    console.log('e.currentTarget', e.currentTarget)
    console.log('e.currentTarget.dataset.value', e.currentTarget.dataset.value)
    console.log('e.currentTarget.innerText', e.currentTarget.innerText)

    let optionDataValue = e.currentTarget.dataset.value;
    let cityName = (optionDataValue) ? optionDataValue : "город не выбран";
    console.log("city", cityName);
    let filteredBase = getFilteredBase(cityName);
    setValueButton(e.currentTarget.innerText);
    dispatch(updateCity(cityName));
    dispatch(updateFilteredFlats(filteredBase))
    setDisplay(!display);
    navigate("/catalog");
  }


  const liItems = citiesInfo.map( city => 
    <li 
      data-value={city.name} 
      className={cn.option}
      onClick={handleLiValue}
      >
      Квартиры на сутки в {city.label}
    </li>)
  


  return (
    <div className={cn.select}>
              
      <button className={cn.select_btn} onClick={handleClose}>
        <div className={cn.flex_row}>
          <div  data-value={valueButton} className={cn.select_btn_text}>{valueButton}</div> 
          <Point2 />
        </div>
      </button>
      <ul className={`${cn.options} ${display ? '' : cn.close}`}>
        {liItems}
      </ul>
    </div>
  )
}
