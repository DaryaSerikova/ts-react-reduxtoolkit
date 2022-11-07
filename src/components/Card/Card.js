import React from 'react';
// import classes from './Card.module.scss';
import cn from './Card.module.scss';
import { ReactComponent as Photo } from '../../assets/img/photo_1.svg';
// /home/serikova/Projects/Self-Education/TS/ts-react-reduxtoolkit/src/assets/img/photo_1.svg




const Card = ({title, description, date}) => {
  return (
    <div className={cn.card}>
      <div className={cn.wrapper_img}>
        {/* <Photo /> */}
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

