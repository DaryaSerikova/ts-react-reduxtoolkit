import React from 'react';
import { Link } from "react-router-dom";
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
                <div className={cn.item}><span className={cn.item_hidden}>Квартиры </span> в Минске</div>
                <div className={cn.item}><span className={cn.item_hidden}>Квартиры </span> в Гомеле</div>
                <div className={cn.item}><span className={cn.item_hidden}>Квартиры </span> в Бресте</div>
              </div>
              <div className={cn.column}>
                <div className={cn.item}><span className={cn.item_hidden}>Квартиры </span> в Витебске</div>
                <div className={cn.item}><span className={cn.item_hidden}>Квартиры </span> в Гродно</div>
                <div className={cn.item}><span className={cn.item_hidden}>Квартиры </span> в Могилеве</div>
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
            <img src={PaymentIcon2} alt="PaymentIcon1" className={cn.payment2}/>
            <img src={PaymentIcon3} alt="PaymentIcon1" className={cn.payment3}/>
            <img src={PaymentIcon4} alt="PaymentIcon1" className={cn.payment4}/>
            <img src={PaymentIcon5} alt="PaymentIcon1" className={cn.payment5}/>
            <img src={PaymentIcon6} alt="PaymentIcon1" className={cn.payment6}/>

          </div>
        </div>

      </div>

    </footer>
  )
}

export default Footer;
