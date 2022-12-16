import React, { useEffect, useState } from 'react';
import { ReactComponent as Point2 } from '../../../assets/img/point_2.svg';
// import { ReactComponent as Point2 } from '../../../';


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

  const [display, setDisplay] = useState(false);
  useEffect(() => {

  }, [display])

  const liItems = citiesInfo.map( city => 
    <li data-value={city.name} className={cn.option}>Квартиры на сутки в {city.label}</li>)
  
  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    setDisplay(!display);
  }

  return (
    <div className={cn.select}>
              
      <button className={cn.select_btn} onClick={handleClose}>
        <div className={cn.flex_row}>
          <div className={cn.select_btn_text}>Квартиры на сутки</div> 
          <Point2 />
        </div>
      </button>
      <ul className={`${cn.options} ${display ? cn.close : ''}`}>
        {liItems}
      </ul>
    </div>
  )
}
