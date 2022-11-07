import React from 'react';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import cn from "./Footer.module.scss";




export const Footer = () => {
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
            <div className={cn.item}>Новости</div>
            <div className={cn.item}>Размещение и тарифы </div>
            <div className={cn.item}>Объявления на карте</div>
            <div className={cn.item}>Контакты</div>
          </div>
        </div>

        <div className={cn.wrapper_icons}></div>

      </div>

    </footer>
  )
}
