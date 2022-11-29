import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateAllFlats, updateFilteredFlats } from "../../store/flatsSlice";

import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs';
import Filters from '../../components/Filters/Filters';
import { Tag } from '../../components/Common/Tag/Tag';
import CardWithDetails from '../../components/CardWithDetails/CardWithDetails';
import { CardWithDetailsInfo } from '../../components/CardWithDetails/CardWithDetailsInfo';
import { CatalogPageTagInfo } from '../../components/Common/Tag/MainPageTagInfo';
import { Button } from '../../components/Common/Button/Button';
// import { dataBackend } from "../../data/data";
import cn from "./CatalogPage.module.scss";





const CatalogPage = () => {

  const amountRooms = useSelector(state => state.filters.amountRooms);
  const priceFrom = useSelector(state => state.filters.priceFrom);
  const priceTo = useSelector(state => state.filters.priceTo);
  const allFlats = useSelector(state => state.flats.all);
  const filteredFlats = useSelector(state => state.flats.filtered);
  const city = useSelector(state => state.filters.city)
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    // dispatch(updateAllFlats(dataBackend['minsk']));
    
  }, [])

  const getCityName = (city) => {
    switch(city) {
      case "minsk": return "Минске";
      case "vitebsk": return "Витебске";
      case "grodno": return "Гродно";
      case "gomel": return "Гомеле";
      case "brest": return "Бресте";
      case "mogilev": return "Могилеве";
      default: return 'не выбран'
    }
  }

  let cityName = getCityName(city);

  const tags = CatalogPageTagInfo.map(el => 
    <Tag 
      key={el.key}
      id={el.id}
      text={el.text} 
      value={el.value} 
      style={'light_purple'} 
      typeTag="catalog"/>);

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
          <h1 className={cn.title}>Аренда квартир на сутки в {cityName}</h1>
          <div className={cn.recommendation}>Рекомендуем посмотреть</div>
          <div className={cn.tags}>
            {tags}
          </div>
        </div>

        <Filters 
          typeFilters="catalog"

          />


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