import React from 'react';
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/img/logo.svg';

import { ReactComponent as NetworkIcon1 } from '../../assets/img/network_icon_1.svg';
import { ReactComponent as NetworkIcon2 } from '../../assets/img/network_icon_2.svg';
import { ReactComponent as NetworkIcon3 } from '../../assets/img/network_icon_3.svg';


import { ReactComponent as PaymentIcon1 } from '../../assets/img/payment_icon_1.svg';
import { ReactComponent as PaymentIcon2 } from '../../assets/img/payment_icon_2.svg';
import { ReactComponent as PaymentIcon3 } from '../../assets/img/payment_icon_3.svg';
import { ReactComponent as PaymentIcon4 } from '../../assets/img/payment_icon_4.svg';
import { ReactComponent as PaymentIcon5 } from '../../assets/img/payment_icon_5.svg';
import { ReactComponent as PaymentIcon6 } from '../../assets/img/payment_icon_6.svg';


import cn from "./Footer.module.scss";




const Footer = () => {
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
                <div className={cn.item}>Квартиры в Минске</div>
                <div className={cn.item}>Квартиры в Гомеле</div>
                <div className={cn.item}>Квартиры в Бресте</div>
              </div>
              <div className={cn.column}>
                <div className={cn.item}>Квартиры в Витебске</div>
                <div className={cn.item}>Квартиры в Гродно</div>
                <div className={cn.item}>Квартиры в Могилеве</div>
              </div>

            </div>
          </div>


          <div className={`${cn.column} ${cn.last_column}`}>
            <Link to="/newsList" className={cn.item}>Новости</Link>
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
            <PaymentIcon1 />
            <PaymentIcon2 />
            <PaymentIcon3 />
            <PaymentIcon4 />
            <PaymentIcon5 />
            <PaymentIcon6 />
          </div>
        </div>

      </div>

    </footer>
  )
}

export default Footer;
