import React from 'react';
import cn from "./AdvertisingCard.module.scss";



const AdvertisingCard = ({ title, text }) => {
  return (
    <div className={cn.advertising_box}>
      <div className={cn.advertising_container}>
        <div className={cn.wrapper_advertising}>
          <div className={cn.advertising_wrapper_title}>
              <div className={cn.advertising_icon}></div>
              <div className={cn.advertising_title}>{title}</div>
            </div>

            <div className={cn.advertising_text}>{text}</div>
            <div className={cn.advertising_btn}>Кнопка</div>
        </div>

      </div>
    </div>
  )
}

export default AdvertisingCard;
