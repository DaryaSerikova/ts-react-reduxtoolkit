import React from 'react';
import OneNews from '../OneNews/OneNews';
import { OneNewsInfo } from '../OneNews/OneNewsInfo';
import { ReactComponent as ArrowRightIcon } from "../../assets/img/arrow_right.svg";
import cn from "./News.module.scss";



const News = () => {

  const news = OneNewsInfo.map(
    el => <OneNews title={el.title} date={el.date} />
  )

  return (
    <div className={cn.news}>
      <div className={cn.news_container}>
        <div className={cn.title_news}>Новости</div>
        {news}
        <button className={cn.view_all}>
          <div className={cn.news_btn_text}>Посмотреть все</div>
          <div className={cn.news_btn_icon}>
            <ArrowRightIcon />
          </div>
        </button>
      </div>

    </div>
  )
}

export default News;
