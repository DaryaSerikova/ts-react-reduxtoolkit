import React from 'react';
import { ReactComponent as UserIcon } from "../../assets/img/user.svg";

import { ReactComponent as LocationIcon } from "../../assets/img/point_3.svg";
import { ReactComponent as SubwayIcon } from "../../assets/img/subway.svg";
import { ReactComponent as EllipseIcon } from "../../assets/img/ellipse_52.svg";

import { ReactComponent as PhoneIcon } from "../../assets/img/phone_1.svg";


const CommonCard = () => {
  return (
    <div className={cn.card}>
    <header className={cn.header_card}>
      <div className={cn.wrapper_img}>
        <img src={photo} alt={photo}/>
        {/* {gold ? <div className={cn.gold}>Gold</div> : <></>} */}
      </div>
        {/* <h1 className={`${cn.title} ${cn.card_container}`}>{title}</h1> */}
    </header>

    <div className={cn.card_container}>
      <div className={cn.description}>{description}</div>
      <hr className={cn.hr}/>
    
      <footer className={cn.card_footer}>
        {footer}
      </footer>
    </div>

  </div>
  )
}

export const CommonCards = ({typeCard, array}) => {
  
  getFooter => {
    switch (typeCard) {
      case 'news':
        return (<>
          <div className={cn.date}>{date}</div>
          <button className={cn.btn}>Читать</button>
        </>)

      case 'details':
        return(
          <div className={cn.wrapper_buttons}>
            <button className={cn.button_contacts}>
              {/* <div>icon</div> */}
              <PhoneIcon />
              <div>Контакты</div>
            </button>
            <button className={cn.button_more_details}>Подробнее</button>
          </div>
        )

      // case 'details_list':
      // case 'details_tiles':
  
    }
  }

}
