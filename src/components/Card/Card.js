import React from 'react';

import photo from "../../assets/img/photo_1.jpg";
import cn from './Card.module.scss';




const Card = ({title, description, date}) => {
  return (
    <div className={cn.card}>
      <header className={cn.header_card}>
        <div className={cn.wrapper_img}>
          <img src={photo} alt={photo}/>
        </div>

          <h1 className={`${cn.title} ${cn.card_container}`}>{title}</h1>
      </header>

      <div className={cn.card_container}>
        <div className={cn.description}>{description}</div>
        <hr className={cn.hr}/>
      
        <footer className={cn.card_footer}>
          <div className={cn.date}>{date}</div>
          <button className={cn.btn}>Читать</button>
        </footer>
      </div>

    </div>
  )
}

export default Card;

{/* <div className={cn.wrapper_img}>
<img src={photo} alt={photo}/>
</div>
<div className={cn.card_container}>
<h1 className={cn.title}>{title}</h1>
<div className={cn.description}>{description}</div>
<hr className={cn.hr}/>

<div className={cn.card_footer}>
  <div className={cn.date}>{date}</div>
  <button className={cn.btn}>Читать</button>
</div>

</div> */}