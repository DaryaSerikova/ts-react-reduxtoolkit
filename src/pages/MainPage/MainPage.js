import React from 'react';
import AdvertisingCard from '../../components/AdvertisingCard/AdvertisingCard';
import { AdvertisingCardInfo } from '../../components/AdvertisingCard/AdvertisingCardInfo';
import CardWithDetails from '../../components/CardWithDetails/CardWithDetails';
import MenuTextList from '../../components/MenuListItems/MenuTextList';
import News from '../../components/News/News';
import cn from "./MainPage.module.scss";



const MainPage = () => {

  const advertisingCards = AdvertisingCardInfo.map(
    el => <AdvertisingCard title={el.title} text={el.text} />
  )

  return (
    <div className={cn.container}>
      <div className={cn.middle_title}>Sdaem.by - у нас живут ваши объявления</div>
      <div className={cn.choice_smth}></div>
      <div wrapper_menus>
        <div className={cn.menu_cards}></div>
        {/* <MenuTextList /> */}
      </div>




      <div className={cn.rent_titles_with_selects}>
        <div className={cn.rent_titles}>
          <div className={cn.purple_subtitle}>КВАРТИРЫ НА СУТКИ</div>
          <div className={`${cn.rent_title} ${cn.title}`}>Аренда квартир в Минске</div>
        </div>
        <div className={cn.rent_selects}>
          <select className={cn.rent_select}>
            <option className={cn.rent_option}>1option</option>
            <option className={cn.rent_option}>2option</option>
            <option className={cn.rent_option}>3option</option>
          </select>
          <select className={cn.rent_select}>
            <option className={cn.rent_option}>1option</option>
            <option className={cn.rent_option}>2option</option>
            <option className={cn.rent_option}>3option</option>
          </select>
        </div>

      </div>

      <div className={cn.cards_with_details}>
        <CardWithDetails />
        <CardWithDetails />
        <CardWithDetails />
      </div>

      <div className={cn.btns_carousel}>buttons carousel</div>

      <div className={cn.offers_for_minsk}>
        <div className={cn.wrapper_offers}>
          <div className={cn.offers_amount}>341 <span className={cn.plus}>+</span></div>
          <div className={cn.offers_text}>Предложений по Минску</div>
        </div>
        <div className={cn.view_offers}>
          <div className={cn.wrapper_left_border}>
            <button className={cn.btn}>Посмотреть все</button>
          </div>
          

        </div>
      </div>

      <div className={cn.wrapper_search}>
        <div className={`${cn.search_title} ${cn.title}`}>Поиск квартир на карте</div>
        <div className={cn.search_text}>Ищите квартиры на сутки в центре города, возле парка или в живописном районе</div>
        <button className={cn.search_btn}>
          <div>icon</div>
          <div>Поиск квартир на карте</div>
        </button>
      </div>



      <div className={cn.advertising_cards}>
        {advertisingCards}
      </div>

      <div className={cn.apartment_with_news}>
        <div className={cn.apartment_for_day}>
          <div className={cn.purple_subtitle}>ЧТО ТАКОЕ SDAEM.BY</div>
          <div className={`${cn.apartment_title} ${cn.title}`}>Квартира на сутки в Минске</div>
          
          <div className={cn.apartment_img}>img</div>
          <div className={cn.apartment_text}>
            Нужна квартира на сутки в Минске?
            На веб-сайте sdaem.by вас ждет масса выгодных предложений. Каталог насчитывает более 500 квартир. Благодаря удобной навигации вы быстро найдете подходящий вариант.

            В каталоге представлены комфортабельные однокомнатные квартиры на сутки и квартиры с большим количеством комнат в разных районах города, с различной степенью удобства от дешевых до VIP
            с джакузи.
          </div>
          <div className={cn.apartment_text}>Чтобы снять квартиру на сутки в Минске, вам достаточно определиться с выбором и связаться с владельцем для уточнения условий аренды и заключить договор. Заметим, на сайте представлены исключительно квартиры на сутки без посредников, что избавляет посетителей от необходимости взаимодействовать с агентствами, тратя свое время и деньги. Также пользователи сайта могут совершенно бесплатно размещать объявления о готовности сдать квартиру на сутки.    </div>

        </div>
        <News />
      </div>


      


    </div>
  )
}

export default MainPage;
