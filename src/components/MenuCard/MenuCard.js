import React from 'react';
import backgroundImg1 from "../../assets/img/main_menu_card_img1.jpg";
// import backgroundImg2 from "../../assets/img/main_menu_card_img1.jpg";
// import backgroundImg3 from "../../assets/img/main_menu_card_img1.jpg";
// import backgroundImg4 from "../../assets/img/main_menu_card_img1.jpg";

import cn from "./MenuCard.module.scss";



const MenuCard = ({ subtitle, title, cities, id, img: src }) => {
  return (
    <div className={`${cn.box} ${cn.parent}`}>
      <div className={`${cn.child_background} ${cn.wrapper_img}`}>
        <img src={src} alt={`background-img-${id}`} />
      </div>
      <div className={`${cn.child_background} ${cn.black_opacity}`}></div>

      <div className={`${cn.container} ${cn.child_content}`}>
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
