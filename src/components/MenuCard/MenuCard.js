import React from 'react';
import cn from "./MenuCard.module.scss";



const MenuCard = ({ subtitle, title, cities }) => {
  return (
    <div className={cn.box}>
      <div className={cn.container}>
        <div className={cn.subtitle}>{subtitle}</div>
        <div className={cn.title}>{title}</div>
        <div className={cn.smth}>
          {(cities !== "") ? <div className={cn.cities}></div> : <></>}
          {(cities === "") ? <button className={cn.btn}>icon</button> : <></>}
        </div>

      </div>
    </div>
  )
}

export default MenuCard;
