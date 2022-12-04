import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAppSelector, useAppDispatch } from '../../store/hook';
import { updateAllNews, updateSearched, updateSearchedValue } from '../../store/newsSlice';

import NewsCard from '../../components/NewsCard/NewsCard';
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs';
import { NewsInfo, TNewsCardInfo } from '../../components/NewsCards/NewsCardsInfo';

import { ReactComponent as Search } from '../../assets/img/search.svg';
import { ReactComponent as PurpleRectangle } from '../../assets/img/rectangle_293.svg';
import cn from "./NewsListPage.module.scss";




const NewsListPage = () => {

  // const smth = useSelector(state => state.smth.smth);
  const allNews = useAppSelector(state => state.news.allNews);
  const searchedNews = useAppSelector(state => state.news.searched);
  const searchedValue = useAppSelector(state => state.news.searchedValue);
  const dispatch = useAppDispatch();


  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(updateAllNews(NewsInfo));
  }, []);


  const search = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateSearchedValue(e.target.value));

    if (e.target.value.trim()) {
      const searched = NewsInfo.filter((card) =>
        card.title.toLowerCase().includes(e.target.value.toLowerCase()))
      dispatch(updateSearched(searched))
    } else dispatch(updateSearched([...allNews]));
  }

  console.log(searchedNews);
  let viewCards = searchedNews.length === 0 ? [...allNews] : [...searchedNews];

  const cards = viewCards?.reverse().map(
    item => <NewsCard
      title={item.title}
      description={item.description}
      date={item.date}
      id={item.id}
      key={item.key}
    />);



  return (
    <main className={`${cn.container} ${cn.news_list} ${cn.news_list_page}`}>

      <div className={cn.parent}>
        <PurpleRectangle className={cn.child_background} />

        <div className={`${cn.child_content} ${cn.content}`}>
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

export default NewsListPage;
