import React, { useEffect, useRef } from 'react';
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs';
import NewsCard from '../../components/NewsCard/NewsCard';
import { CardsInfo } from './NewsListCardsInfo';

import { ReactComponent as Search } from '../../assets/img/search.svg';
import { ReactComponent as PurpleRectangle } from '../../assets/img/rectangle_293.svg';

import cn from "./NewsListPage.module.scss";



export default function NewsListPage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])


  const Cards = CardsInfo.reverse().map(
    item => <NewsCard
      title={item.title}
      description={item.description}
      date={item.date}
      id={item.id}
    />)

  return (
    <main className={`${cn.container} ${cn.news_list} ${cn.news_list_page}`}>
       
      <div className={cn.parent}>
        <PurpleRectangle className={cn.child_background} />
        <div className={cn.child_content}>
          <header className={cn.container}>
            <BreadCrumbs />
            <div className={cn.title_wrapper}>
              <h1 className={cn.title}>Новости</h1>
              <input className={cn.input} placeholder="Поиск по статьям"></input>
            </div>
          </header>

          <div className={cn.cards}>
            {Cards}
          </div>

          <div className={cn.pagination}>
            <div>1</div>
          </div>
        </div>
      </div>


    </main>
  )
}
