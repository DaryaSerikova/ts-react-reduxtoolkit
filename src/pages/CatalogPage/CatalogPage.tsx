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
import { getCurrentCardsOnPage, getPagesRange } from '../../utils/utils_ts';
import { ReactComponent as NetworksIcon1 } from "../../assets/img/catalog__networks_icon_1.svg";
import { ReactComponent as NetworksIcon2 } from "../../assets/img/catalog__networks_icon_2.svg";
import { ReactComponent as NetworksIcon3 } from "../../assets/img/catalog__networks_icon_3.svg";
import { ReactComponent as NetworksIcon4 } from "../../assets/img/catalog__networks_icon_4.svg";
import { ReactComponent as NetworksIcon5 } from "../../assets/img/catalog__networks_icon_5.svg";
import { ReactComponent as LocationYellow } from "../../assets/img/main_location_yellow.svg";
import whiteBackground from "../../assets/img/catalog__white_background.png";
import Pagination from '../../components/Pagination/Pagination';
import { getDynamicTitle, getCityNameRu } from '../../utils/title';




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

  let cityName = getCityNameRu(city);
  // let amountRoomsRu = getAmountRoomsRu(amountRooms);
  let dynamicTitle = getDynamicTitle(city, amountRooms);
  // ДИНАМИЧЕСКИЙ TITLE ДОЛЖЕН ОБНОВЛЯТЬСЯ В ЗАВИСИМОСТИ ОТ КОЛИЧЕСТВА КОМНАТ


  const tags = CatalogPageTagInfo.map(el => 
    <Tag 
      key={el.key}
      id={el.id}
      label={el.label} 
      value={el.value} 
      style={'light_purple'} 
      typePage="catalog"/>);


  // getCurrentCardsOnPage(filteredFlats, 2, 9);
  const currentCardsOnPage = getCurrentCardsOnPage(filteredFlats, currentPageNumber, 9);


  const handlerPaginationClick = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log('e: ', e);
    console.log('e.target.innerHTML :', e?.currentTarget?.innerHTML);
    let currentPageNumber = e?.currentTarget?.innerHTML
    // updateCurrentPageNumber(dispatch(+currentPageNumber));
  }

  // const cardsWithDetails = data['minsk'].map(
  // const cardsWithDetails = allFlats.map(
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
              {dynamicTitle}
              {/* Аренда {city === "" ? "" : amountRoomsRu} квартир на сутки в {cityName} */}
            </h1>
            <div className={cn.recommendation}>Рекомендуем посмотреть</div>
            <div className={cn.tags}>
              {tags}
            </div>

          </div>
        </div>

        <Filters typeFilters="catalog" />

      </header>

      <article>
        <div className={cn.container}>
          <div className={cn.results}>Найдено {filteredFlats.length} результата</div>
          <div className={cn.cards}>
            {/* {currentCardsOnPage} */}
            {currentCardsOnPage.length !== 0 ? cardsWithDetails : <></>}
          </div>

          <div className={cn.pagination_with_networks}>
            {/* <div className={cn.pagination}>{pagesNumbers}</div> */}
            <Pagination 
              arrCards={filteredFlats}
              currentPageNumber={currentPageNumber}
              handlerPaginationClick={handlerPaginationClick} 
              />
            <div className={cn.wrapper_networks}>
              <div className={cn.networks_text}>Поделиться</div>
              <div className={cn.networks_icons}>
                <NetworksIcon1 />
                <NetworksIcon2 />
                <NetworksIcon3 />
                <NetworksIcon4 />
                <NetworksIcon5 />
              </div>

            </div>
          </div>
        </div>

      </article>
      <footer className={cn.footer}>
        <div className={cn.blue_background}></div>
        <div className={cn.purple_background}></div>

        <div className={cn.white_background}>
          <img src={whiteBackground} alt="white-background"/>
        </div>
        <div className={`${cn.container} ${cn.footer_content}`}>
          <div className={cn.map_title}>Показать найденные квартиры на карте</div>
          <div className={cn.map_text}>Ищите новостройки рядом с работой, парком или родственниками</div>
          <div className={cn.wrapper_btn}>
            <Button
              text="icon Открыть карту"
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