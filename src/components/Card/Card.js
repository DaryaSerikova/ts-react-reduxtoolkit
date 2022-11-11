import React from 'react';

import photo from "../../assets/img/photo_1.jpg";
import cn from './Card.module.scss';




const Card = ({title, description, date}) => {
  return (
    <div className={cn.card}>
      <div className={cn.wrapper_img}>
        <img src={photo} alt={photo}/>
      </div>
      <div className={cn.card_container}>
        <div className={cn.title}>{title}</div>
        <div className={cn.description}>{description}</div>
        <hr className={cn.hr}/>

        <div className={cn.card_footer}>
          <div className={cn.date}>{date}</div>
          <button className={cn.btn}>Читать</button>
        </div>

      </div>
    </div>
  )
}

export default Card;

