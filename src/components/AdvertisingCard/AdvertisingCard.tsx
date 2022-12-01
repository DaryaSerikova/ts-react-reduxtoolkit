import React from 'react';
import { ReactComponent as AdvertisingIcon1 } from "../../assets/img/advertising_icon1.svg";
import { ReactComponent as AdvertisingIcon2 } from "../../assets/img/advertising_icon2.svg";
import cn from "./AdvertisingCard.module.scss";
import { Button } from '../Common/Button/Button';



type TAdvCardProps = {
  typeCard: string;
  id: number;
  key: string;
  title: string;
  text: string;
}


const AdvertisingCard = ({ typeCard, title, text }: TAdvCardProps) => {

  const getIcon = (typeCard: string) => {
    switch(typeCard) {
      case "1":
        return <AdvertisingIcon1 className={cn.icon} />
      case "2":
        return <AdvertisingIcon2 className={cn.icon} />
      case "gold":
        return <></>
      default:
        return <></>
    }
  }

  const getBtn = (typeCard: string) => {
    switch(typeCard) {
      case "1": 
        return <>
        <Button 
          style="yellow"
          text="+  Разместить объявление"
          typeButton="without-icon"
        />
      </>

      case "2":
        return <>
        <Button 
          style="yellow"
          text="Узнать стоимость услуги"
          typeButton="right-icon"
        />
      </>
      case "gold":
        return <>
        <Button 
          style="gradient_purple"
          text="Еще о тарифе Gold"
          typeButton="right-icon"
        />
        </>
      default:
        return <></>
    }
  }

  const icon = getIcon(typeCard);
  const btn = getBtn(typeCard);


  return (
    <div className={cn.advertising_box}>
      <div className={cn.advertising_container}>
        <div className={cn.wrapper_advertising}>
          <div className={cn.advertising_wrapper_title}>
              <div className={cn.advertising_icon}>
                {icon}
              </div>
              <div className={cn.advertising_title}>{title}</div>
            </div>

            <div className={cn.advertising_text}>{text}</div>
            <div className={cn.advertising_btn}>{btn}</div>
        </div>

      </div>
    </div>
  )
}

export default AdvertisingCard;
