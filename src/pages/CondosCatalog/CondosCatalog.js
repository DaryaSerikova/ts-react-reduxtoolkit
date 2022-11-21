import React, { useEffect } from 'react';
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs';
import { Filters } from '../../components/Filters/Filters';
import { Tag } from '../../components/Common/Tag/Tag';
import cn from "./CondosCatalog.module.scss";
import CardWithDetails from '../../components/CardWithDetails/CardWithDetails';
import { CardWithDetailsInfo } from '../../components/CardWithDetails/CardWithDetailsInfo';
import { Button } from '../../components/Common/Button/Button';
import { data } from "../../data/data";




export const CondosCatalog = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const tagsInfo = [
    "Недорогие",
    "1-комнатные",
    "2-комнатные",
    "3-комнатные",
    "4-комнатные",
    "5-комнатные",
    "Заводской р.",
    "Ленинский р. ",
    "Московский р. ",
    "Октябрьский р. ",
    "Партизанский р.",
    "Первомайский р.",
    "Советский р.",
    "Фрунзенский р.",
    "Центральный р.",
  ]

  const tags = tagsInfo.map(el => <Tag text={el} style={'light_purple'} />);

  // const cardsWithDetails = CardWithDetailsInfo.map(
  //   el => <CardWithDetails
  //     type_card='list'
  //     gold={el.gold}
  //     price={el.price}
  //     duration={el.duration}
  //     // people={el.people}
  //     amount_rooms={el.amount_rooms}
  //     square={el.square}
  //     city={el.city}
  //     address={el.address} 
  //     subway_station={el.subway_station} 
  //     neighborhood={el.neighborhood} 
  //   />)
  const cardsWithDetails = data['minsk'].map(
    el => <CardWithDetails
      type_card='list'
      gold={el.gold}
      price={el.price}
      duration={el.duration}
      // people={el.people}
      amount_rooms={el.amount_rooms}
      square={el.square}
      city={el.city}
      address={el.address}
      subway_station={el.subway_station}
      neighborhood={el.neighborhood}
    />)

  return (
    <main>
      <header className={cn.parent} >
        <div className={`${cn.purple_bg} ${cn.child_background}`}></div>
        <div className={`${cn.container} ${cn.child_content}`}>
          <div className={cn.wrapper_bread_crumbs}>
            <BreadCrumbs></BreadCrumbs>
          </div>
          <h1 className={cn.title}>Аренда квартир на сутки в Минске</h1>
          <div className={cn.recommendation}>Рекомендуем посмотреть</div>
          <div className={cn.tags}>
            {tags}
          </div>
        </div>

        <Filters />




      </header>

      <article>
        <div className={cn.container}>
          <div className={cn.results}>Найдено 234 результата</div>

          <div className={cn.cards}>
            {cardsWithDetails}
          </div>

          <div className={cn.pagination_with_networks}>
            <div className={cn.pagination}></div>
            <div className={cn.networks}></div>
          </div>
        </div>

      </article>
      <footer>
        <div className={cn.style}>Показать найденные квартиры на карте</div>
        <div className={cn.style}>Ищите новостройки рядом с работой, парком или родственниками</div>
        <Button
          text="Открыть карту"
          style="white"
          typeButton="left-icon"
        />

      </footer>
    </main>
  )
}
