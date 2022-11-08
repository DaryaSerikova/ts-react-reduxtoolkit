import React from 'react';
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs';
import Card from '../../components/Card/Card';
import { CardsInfo } from './NewsListCardsInfo';

import { ReactComponent as Search } from '../../assets/img/search.svg';
import { ReactComponent as PurpleRectangle } from '../../assets/img/rectangle_293.svg';



import cn from "./NewsList.module.scss";



export default function NewsList() {

  const Cards = CardsInfo.map(
    item => <Card 
      title={item.title}
      description={item.description}
      date={item.date}
    />)

  return (
    <div className={`${cn.container} ${cn.news_list}`}>

      {/* <PurpleRectangle /> */}

      <div>
        <BreadCrumbs />
        <div className={cn.title_wrapper}>
          <div className={cn.title}>Новости</div>
          <input className={cn.input} placeholder="Поиск по статьям"></input>
        </div>
      </div>

      <div className={cn.cards}>
        {Cards}
      </div>

      <div className={cn.pagination}>
        <div>1</div>
      </div>

    </div>
  )
}
