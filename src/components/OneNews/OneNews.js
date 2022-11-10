import React from 'react';
import cn from "./OneNews.module.scss";


const OneNews = ({ title, date }) => {
  return (
    <div className={cn.one_news}>
      <div className={cn.title}>
        {title}
        {/* Линия Сталина: суровый отдых в усадьбах  на сутки */}
      </div>
      <div className={cn.date}>
        {date}
        {/* 14 Январь */}
      </div>
    </div>
  )
}

export default OneNews;
