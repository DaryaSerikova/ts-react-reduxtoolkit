import React from 'react';
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs';
import Card from '../../components/NewsCard/NewsCard';
import { CardsInfo } from './NewsListCardsInfo';

import { ReactComponent as Search } from '../../assets/img/search.svg';
import { ReactComponent as PurpleRectangle } from '../../assets/img/rectangle_293.svg';

import cn from "./NewsListPage.module.scss";



export default function NewsListPage() {

  const Cards = CardsInfo.reverse().map(
    item => <Card
      title={item.title}
      description={item.description}
      date={item.date}
    />)

  return (
    <main className={`${cn.container} ${cn.news_list} `}>

      <div className={cn.parent}>
        <PurpleRectangle className={cn.child_background} />
        <div className={cn.child_content}>
          <header>
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
