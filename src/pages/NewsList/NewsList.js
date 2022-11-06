import React from 'react';
import Card from '../../components/Card/Card';
import { CardsInfo } from './CardsInfo';

export default function NewsList() {

  const Cards = CardsInfo.map(
    item => <Card 
      title={item.title}
      description={item.description}
      date={item.date}
    />)
  return (
    <div className="news-list-content">
      <div>
        <div className="bread-crumbs">Новости</div>
        <div className="title">Новости</div>
        <input/>
      </div>
      <div className="cards">
        {Cards}
      </div>

    </div>
  )
}
