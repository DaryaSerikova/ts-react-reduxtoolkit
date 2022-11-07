import React from 'react';
import Card from '../../components/Card/Card';
import { CardsInfo } from './CardsInfo';
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
      <div>
        <div className="bread-crumbs">Новости</div>
        <div className="title">Новости</div>
        <input/>
      </div>
      <div className={cn.cards}>
        {Cards}
      </div>

    </div>
  )
}
