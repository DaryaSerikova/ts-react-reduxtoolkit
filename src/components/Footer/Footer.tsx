import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from '../../store/hook';
import { updateCity, updateAmountRooms, updatePriceFrom, updatePriceTo, updateSubwayStation, updateNeighborhood } from "../../store/filtersSlice";
import { updateAllFlats, updateFilteredFlats } from "../../store/flatsSlice";

import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import { ReactComponent as NetworkIcon1 } from '../../assets/img/network_icon_1.svg';
import { ReactComponent as NetworkIcon2 } from '../../assets/img/network_icon_2.svg';
import { ReactComponent as NetworkIcon3 } from '../../assets/img/network_icon_3.svg';
import PaymentIcon1 from '../../assets/img/payment_1.png';
import PaymentIcon2 from '../../assets/img/payment_2.png';
import PaymentIcon3 from '../../assets/img/payment_3.png';
import PaymentIcon4 from '../../assets/img/payment_4.png';
import PaymentIcon5 from '../../assets/img/payment_5.png';
import PaymentIcon6 from '../../assets/img/payment_6.png';
import cn from "./Footer.module.scss";




const Footer = () => {
  const allFlats = useAppSelector(state => state.flats.all);
  const filteredFlats = useAppSelector(state => state.flats.filtered);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const getFlatsWithCity = (currentCity: string) => allFlats.filter(flat => (flat.city === currentCity));
  const handleCommonClick = (currentCity: string) => {
    // мб делать все через URL, квери параметры и catalog/minsk?
    let flatsWithCity = getFlatsWithCity(currentCity);
    dispatch(updateCity(currentCity));
    dispatch(updateFilteredFlats(flatsWithCity));
    //dispatch reset для остальных пунктов

    navigate("/catalog");
    window.scrollTo(0, 0);
  }

  const handleClickMinsk = (e: React.MouseEvent<HTMLDivElement>) => handleCommonClick("minsk");
  const handleClickVitebsk = (e: React.MouseEvent<HTMLDivElement>) => handleCommonClick("vitebsk");
  const handleClickGrodno = (e: React.MouseEvent<HTMLDivElement>) => handleCommonClick("grodno");
  const handleClickGomel = (e: React.MouseEvent<HTMLDivElement>) => handleCommonClick("gomel");
  const handleClickBrest = (e: React.MouseEvent<HTMLDivElement>) => handleCommonClick("brest");
  const handleClickMogilev = (e: React.MouseEvent<HTMLDivElement>) => handleCommonClick("mogilev");

  

  return (
    <footer className={`${cn.container} ${cn.footer}`}>

      <div className={cn.wrapper_adress}>
        <Logo />
        <div className={cn.ru_name}>СДАЁМ БАЙ</div>
        <div className={cn.contact_details}>
          <div>ИП Шушкевич Андрей Викторович</div>
          <div>УНП 192602485 Минским горисполкомом 10.02.2016</div>
          <div>220068, РБ, г. Минск, ул. Осипенко, 21, кв.23</div>
          <div>+375 29 621 48 33, sdaem@sdaem.by</div>
          <div>Режим работы: 08:00-22:00</div>
        </div>
      </div>


      <div>

        <div className={cn.wrapper_columns}>
          <div className={cn.column}>
            <div className={cn.menu_item}>Коттеджи и усадьбы</div>
            <div className={cn.menu_item}>Бани и сауны</div>
            <div className={cn.menu_item}>Авто на прокат</div>
          </div>

          <div className={cn.column}>
            <div className={cn.menu_item}>Квартиры</div>

            <div className={cn.row}>
              <div className={cn.column}>
                <div className={cn.item} onClick={handleClickMinsk}><span className={cn.item_hidden}>Квартиры </span> в Минске</div>
                <div className={cn.item} onClick={handleClickGomel}><span className={cn.item_hidden}>Квартиры </span> в Гомеле</div>
                <div className={cn.item} onClick={handleClickBrest}><span className={cn.item_hidden}>Квартиры </span> в Бресте</div>
              </div>
              <div className={cn.column}>
                <div className={cn.item} onClick={handleClickVitebsk}><span className={cn.item_hidden}>Квартиры </span> в Витебске</div>
                <div className={cn.item} onClick={handleClickGrodno}><span className={cn.item_hidden}>Квартиры </span> в Гродно</div>
                <div className={cn.item} onClick={handleClickMogilev}><span className={cn.item_hidden}>Квартиры </span> в Могилеве</div>
              </div>

            </div>
          </div>


          <div className={`${cn.column} ${cn.last_column}`}>
            <Link to="/news" className={cn.item}>Новости</Link>
            <div className={cn.item}>Размещение и тарифы </div>
            <div className={cn.item}>Объявления на карте</div>
            <Link to="/contacts" className={cn.item}>Контакты</Link>
          </div>
        </div>


        <div className={cn.wrapper_icons}>
          <div className={cn.wrapper_networks}>
            <div className={cn.networks_text}>Мы в соцсетях</div>
            <div className={cn.networks}>
              <NetworkIcon1 />
              <NetworkIcon2 />
              <NetworkIcon3 />
            </div>
          </div>

          <div className={cn.payments}>
            <img src={PaymentIcon1} alt="PaymentIcon1" className={cn.payment1}/>
            <img src={PaymentIcon2} alt="PaymentIcon2" className={cn.payment2}/>
            <img src={PaymentIcon3} alt="PaymentIcon3" className={cn.payment3}/>
            <img src={PaymentIcon4} alt="PaymentIcon4" className={cn.payment4}/>
            <img src={PaymentIcon5} alt="PaymentIcon5" className={cn.payment5}/>
            <img src={PaymentIcon6} alt="PaymentIcon6" className={cn.payment6}/>

          </div>
        </div>

      </div>

    </footer>
  )
}

export default Footer;
