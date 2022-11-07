import React from 'react';
import Card from '../../components/Card/Card';
import { CardsInfo } from './CardsInfo';
import { ReactComponent as HomeRun } from '../../assets/img/home_run.svg';
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
        <div className={cn.bread_crumbs}>
          <HomeRun />
          <div>Новости</div>
        </div>

        <div className={cn.title_wrapper}>
          <div className={cn.title}>Новости</div>
          <input/>
        </div>
      </div>

      <div className={cn.cards}>
        {Cards}
      </div>

    </div>
  )
}
