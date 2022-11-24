import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateAllFlats, updateFilteredFlats } from "../../store/flatsSlice";

import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs';
import Filters from '../../components/Filters/Filters';
import { Tag } from '../../components/Common/Tag/Tag';
import CardWithDetails from '../../components/CardWithDetails/CardWithDetails';
import { CardWithDetailsInfo } from '../../components/CardWithDetails/CardWithDetailsInfo';
import { Button } from '../../components/Common/Button/Button';
import { dataBackend } from "../../data/data";
import cn from "./CatalogPage.module.scss";





const CatalogPage = () => {

  const amountRooms = useSelector(state => state.filters.amountRooms);
  const priceFrom = useSelector(state => state.filters.priceFrom);
  const priceTo = useSelector(state => state.filters.priceTo);
  const allFlats = useSelector(state => state.flats.all);
  const filteredFlats = useSelector(state => state.flats.filtered);


  const dispatch = useDispatch();

  // console.log('amountRooms: ', amountRooms)
  // console.log('priceFrom: ', priceFrom)
  // console.log('priceTo: ', priceTo)

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(updateAllFlats(dataBackend['minsk']));
    
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

  // const cardsWithDetails = data['minsk'].map(
  // const cardsWithDetails = allFlats.map(
  const flats = filteredFlats === [] ?  allFlats : filteredFlats;
  const cardsWithDetails = flats.map(
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

        <Filters typeFilters="catalog"/>


      </header>

      <article>
        <div className={cn.container}>
          <div className={cn.results}>Найдено {filteredFlats.length} результата</div>

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

export default CatalogPage;