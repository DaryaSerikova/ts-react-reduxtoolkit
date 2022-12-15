import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateAllFlats, updateFilteredFlats, updateCurrentPageNumber, TFlat } from "../../store/flatsSlice";
import { useAppSelector, useAppDispatch } from '../../store/hook';
import CardWithDetails from '../../components/CardWithDetails/CardWithDetails';
import Filters from '../../components/Filters/Filters';
import { Tag } from '../../components/Common/Tag/Tag';
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs';
import { CardWithDetailsInfo } from '../../components/CardWithDetails/CardWithDetailsInfo';
import { CatalogPageTagInfo } from '../../components/Common/Tag/MainPageTagInfo';
import { Button } from '../../components/Common/Button/Button';
import cn from "./CatalogPage.module.scss";
import { getCurrentCardsOnPage } from '../../utils/utils_ts';





const CatalogPage = () => {

  const amountRooms = useAppSelector(state => state.filters.amountRooms);
  const priceFrom = useAppSelector(state => state.filters.priceFrom);
  const priceTo = useAppSelector(state => state.filters.priceTo);
  const allFlats = useAppSelector(state => state.flats.all);
  const filteredFlats = useAppSelector(state => state.flats.filtered);
  const currentPageNumber = useAppSelector(state => state.flats.current_page_number);
  const city = useAppSelector(state => state.filters.city)
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    // dispatch(updateAllFlats(dataBackend['minsk']));
    
  }, [])

  const getCityNameRu = (city: string) => {
    switch(city) {
      case "minsk": return "Минске";
      case "vitebsk": return "Витебске";
      case "grodno": return "Гродно";
      case "gomel": return "Гомеле";
      case "brest": return "Бресте";
      case "mogilev": return "Могилеве";
      default: return '"город не выбран"'
    }
  }

  const getAmountRoomsRu = (city: string) => {
    switch(city) {
      case "1": return "1-комнатных";
      case "2": return "2-комнатных";
      case "3": return "3-комнатных";
      case "4": return "4-комнатных";
      case "5": return "5-комнатных";
      default: return ""
    }
  }

  let cityName = getCityNameRu(city);
  let amountRoomsRu = getAmountRoomsRu(amountRooms);


  const tags = CatalogPageTagInfo.map(el => 
    <Tag 
      key={el.key}
      id={el.id}
      text={el.text} 
      value={el.value} 
      style={'light_purple'} 
      typeTag="catalog"/>);


  // getCurrentCardsOnPage(filteredFlats, 2, 9);
  const currentCardsOnPage = getCurrentCardsOnPage(filteredFlats, currentPageNumber, 9);

  const amountPages =  Math.ceil(filteredFlats.length/9); //7

  // const hfjh = [...Array(9).keys()]
  const getPagesRange = (amountPages: number) => {
    let i = 0;
    let pagesRange = [];

    while ( i < amountPages ) {
      i++;
      pagesRange.push(i);
    }

    return pagesRange;
  }

  let pagesRange = getPagesRange(amountPages);
  let pagesNumbers = pagesRange.map(pageNumber => 
    <div className={`${cn.pagination_item} ${currentPageNumber === pageNumber ? cn.active : ''}`}>
      {pageNumber}
    </div>)

  // const cardsWithDetails = data['minsk'].map(
  // const cardsWithDetails = allFlats.map(
  // const flats = filteredFlats.length === 0 ?  allFlats : filteredFlats;
  // const cardsWithDetails = flats.map(

  // const cardsWithDetails = filteredFlats.map(
  const cardsWithDetails = currentCardsOnPage.map(
    el => <CardWithDetails
      type_card='list'
      key={el.key}
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
        <div className={cn.child_content}>
          <div className={cn.container}>
            <div className={cn.wrapper_bread_crumbs}>
              <BreadCrumbs typeBreadCrumbs="/catalog" city={cityName} />
            </div>
            <h1 className={cn.title}>
              Аренда {city === "" ? "" : amountRoomsRu} квартир на сутки в {cityName}
            </h1>
            <div className={cn.recommendation}>Рекомендуем посмотреть</div>
            <div className={cn.tags}>
              {tags}
            </div>
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
            {/* {currentCardsOnPage} */}
            {currentCardsOnPage.length !== 0 ? cardsWithDetails : <></>}
          </div>

          <div className={cn.pagination_with_networks}>
            <div className={cn.pagination}>
              {pagesNumbers}
            </div>
            <div className={cn.networks}>networks</div>
          </div>
        </div>

      </article>
      <footer className={cn.footer}>
        <div className={cn.blue_background}></div>
        <div className={cn.purple_background}></div>

        <div className={cn.white_background}></div>
        <div className={`${cn.container} ${cn.footer_content}`}>
          <div className={cn.map_title}>Показать найденные квартиры на карте</div>
          <div className={cn.map_text}>Ищите новостройки рядом с работой, парком или родственниками</div>
          <div className={cn.wrapper_btn}>
            <Button
              text="Открыть карту"
              style="white"
              typeButton="left-icon"
            />
          </div>

        </div>

      </footer>
    </main>
  )
}

export default CatalogPage;