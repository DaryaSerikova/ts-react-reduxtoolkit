import React from 'react';
// import classes from './Card.module.scss';
import cn from './Card.module.scss';



const Card = ({title, description, date}) => {
  return (
    <div className={cn.card}>
      <div className={cn.wrapper_img}></div>
      <div className={cn.title}>{title}</div>
      <div className={cn.mini_description}>{description}</div>
      <div className={cn.date}>{date}</div>
      <button>Читать</button>
    </div>
  )
}

export default Card;

