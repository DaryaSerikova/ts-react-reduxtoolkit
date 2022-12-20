import React from 'react';
import { ReactComponent as AdvertisingIcon1 } from "../../assets/img/advertising_icon1.svg";
import { ReactComponent as AdvertisingIcon2 } from "../../assets/img/advertising_icon2.svg";
import { ReactComponent as GoldStars } from "../../assets/img/advertising__gold_stars.svg";

//advertising__gold_stars.svg
import cn from "./AdvertisingCard.module.scss";
import { Button } from '../Common/Button/Button';


type TAdvCardCommonProps = {
  id: number;
  key?: string;
  title: string;
  text: string;
}

type TAdvCardProps = {
  typeCard: string;
  id: number;
  key: string;
  title: string;
  text: string;
}

const GoldCard = ({ title, text, id }: TAdvCardCommonProps) => {
  return (
    <>
      <div className={cn.advertising_wrapper_gold_title}>
        <div className={cn.advertising_gold_title}>{title}</div>
      </div>

      <div className={cn.advertising_text}>
        <p>
          Приоритетное размещение <b>Gold</b> позволяет <b>закрепить 
          ваше объявление</b> в верхней части каталога!
        </p>
        <p>
          Gold объявления <b>перемещаются каждые 5 мин</b> на 
          1 позицию, что делает размещение одинаковым для всех.
        </p>

      </div>
      <div className={cn.advertising_btn}>
        <Button 
           style="gradient_purple"
           text="Еще о тарифе Gold"
           typeButton="right-icon"
         />
      </div>
    </>
  )
};


const GoldCard_0 = ({ title, text, id }: TAdvCardCommonProps) => {
  return (
    <>
      <div className={cn.advertising_wrapper_gold_title}>
        <div className={cn.advertising_gold_title}>{title}</div>
      </div>

      <div className={cn.advertising_text}>{text}</div>
      <div className={cn.advertising_btn}>
        <Button 
           style="gradient_purple"
           text="Еще о тарифе Gold"
           typeButton="right-icon"
         />
      </div>
    </>
  )
};


const OrdinaryCard = ({ title, text, id }: TAdvCardCommonProps) => {

    const getIcon = (id: number) => {
    switch(id) {
      case 0:
        return <AdvertisingIcon1 className={cn.icon} />
      case 1:
        return <AdvertisingIcon2 className={cn.icon} />
      default:
        return <></>
    }
  }

  const getBtn = (id: number) => {
    switch(id) {
      case 0: 
        return <>
        <Button 
          style="yellow"
          text="+  Разместить объявление"
          typeButton="without-icon"
        />
      </>

      case 1:
        return <>
        <Button 
          style="yellow"
          text="Узнать стоимость услуги"
          typeButton="right-icon"
        />
      </>

      default:
        return <></>
    }
  }

  const icon = getIcon(id);
  const btn = getBtn(id);


  return (
    <>
      <div className={cn.advertising_wrapper_title}>
        <div className={cn.advertising_icon}>
          {icon}
        </div>
        <div className={cn.advertising_title}>{title}</div>
      </div>

      <div className={cn.advertising_text}>{text}</div>
      <div className={cn.advertising_btn}>{btn}</div>
    </>
  )

}


const AdvertisingCard = ({ typeCard, id, title, text }: TAdvCardProps) => {

  // const getIcon = (typeCard: string) => {
  //   switch(typeCard) {
  //     case "1":
  //       return <AdvertisingIcon1 className={cn.icon} />
  //     case "2":
  //       return <AdvertisingIcon2 className={cn.icon} />
  //     case "gold":
  //       return <></>
  //     default:
  //       return <></>
  //   }
  // }

  // const getBtn = (typeCard: string) => {
  //   switch(typeCard) {
  //     case "1": 
  //       return <>
  //       <Button 
  //         style="yellow"
  //         text="+  Разместить объявление"
  //         typeButton="without-icon"
  //       />
  //     </>

  //     case "2":
  //       return <>
  //       <Button 
  //         style="yellow"
  //         text="Узнать стоимость услуги"
  //         typeButton="right-icon"
  //       />
  //     </>
  //     case "gold":
  //       return <>
  //       <Button 
  //         style="gradient_purple"
  //         text="Еще о тарифе Gold"
  //         typeButton="right-icon"
  //       />
  //       </>
  //     default:
  //       return <></>
  //   }
  // }

  // const icon = getIcon(typeCard);
  // const btn = getBtn(typeCard);


  // return (
  //   <div className={cn.advertising_box}>
  //     <div className={cn.advertising_container}>
  //       <div className={cn.wrapper_advertising}>
  //         <div className={cn.advertising_wrapper_title}>
  //             <div className={cn.advertising_icon}>
  //               {icon}
  //             </div>
  //             <div className={cn.advertising_title}>{title}</div>
  //           </div>

  //           <div className={cn.advertising_text}>{text}</div>
  //           <div className={cn.advertising_btn}>{btn}</div>
  //       </div>

  //     </div>
  //   </div>
  // )

  let getAdvCard = (typeCard: string) => {
    switch (typeCard) {
      case "ordinary":
        return <OrdinaryCard title={title} text={text} id={id}/>
      case "gold":
        return <GoldCard title={title} text={text} id={id}/>
    }
  }

  let advCard = getAdvCard(typeCard);


  return (
    <div className={`${cn.advertising_box} ${typeCard === "gold" ? cn.gold_box : ''}`}>
      <div className={cn.advertising_container}>
        <div className={cn.wrapper_advertising}>
          {advCard}
        </div>
      </div>
    </div>
  )
}

export default AdvertisingCard;
