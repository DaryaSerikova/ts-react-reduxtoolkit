import React from 'react';
import { Link } from "react-router-dom";
import { ReactComponent as ArrowRightIcon } from "../../assets/img/arrow_right.svg";
import cn from "./News.module.scss";
import { CardsInfo } from '../../pages/NewsListPage/NewsListCardsInfo';



const OneNews = ({ title, date }) => {
  return (
    <div className={cn.one_news}>
      <div className={cn.onenews_title}>
        {title}
        {/* Линия Сталина: суровый отдых в усадьбах  на сутки */}
      </div>
      <div className={cn.onenews_date}>
        {date}
        {/* 14 Январь */}
      </div>
    </div>
  )
}


const News = () => {

  const partOfNews = CardsInfo.slice(-5).reverse();
  const news = partOfNews.map(
    el => <OneNews title={el.title} date={el.date} />
  )

  return (
    <div className={cn.news}>
      <div className={cn.news_container}>
        <div className={cn.title_news}>Новости</div>
        {news}
        <button className={cn.view_all}>
          <Link to="/newsList" className={cn.news_btn_text}>Посмотреть все</Link>
          <div className={cn.news_btn_icon}>
            <ArrowRightIcon />
          </div>
        </button>
      </div>

    </div>
  )
}

export default News;
