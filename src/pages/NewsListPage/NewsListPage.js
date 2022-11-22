import React, { useState, useEffect, useRef } from 'react';
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs';
import NewsCard from '../../components/NewsCard/NewsCard';
import { CardsInfo } from './NewsListCardsInfo';

import { ReactComponent as Search } from '../../assets/img/search.svg';
import { ReactComponent as PurpleRectangle } from '../../assets/img/rectangle_293.svg';

import cn from "./NewsListPage.module.scss";



export default function NewsListPage() {

  const [ allCards, setAllCards ] = useState([]);
  const [ searchedCards, setSearchedCards] = useState([]);
  const [ searchedValue, setSearchedValue] = useState('');

  
  useEffect(() => {
    window.scrollTo(0, 0);
    setAllCards(CardsInfo);
  }, []);

  const search = (e) => {
    console.log(e.target.value);
    setSearchedValue(e.target.value)
    if (e.target.value.trim()) {
      const searched = CardsInfo.filter((card) => 
        card.title.toLowerCase().includes(e.target.value.toLowerCase()))
      setSearchedCards(searched);
    } else setSearchedCards([...allCards]);
  }

  const viewCards = searchedCards.length === 0 ? allCards : searchedCards;

  const cards = viewCards.reverse().map(
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
              <input 
                className={cn.input} 
                placeholder="Поиск по статьям"
                value={searchedValue}
                onChange={search}
                />
            </div>
          </header>

          <article>
            <div className={cn.cards}>
              {cards}
            </div>

            <div className={cn.pagination}>
              <div>1</div>
            </div>
          </article>

        </div>
      </div>
    </main>
  )
}
