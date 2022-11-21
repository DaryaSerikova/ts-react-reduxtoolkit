import React from 'react';
import { Link } from "react-router-dom";

import photo from "../../assets/img/photo_1.jpg";
import cn from './NewsCard.module.scss';



const NewsCard = ({title, description, date, id}) => {
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
          <Link to={`/news/${id}`}>
            <button className={cn.btn}>Читать</button>
          </Link>
        </footer>
      </div>

    </div>
  )
}

export default NewsCard;