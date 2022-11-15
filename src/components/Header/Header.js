import React from 'react';
import cn from "./Header.module.scss";
import { ReactComponent as Point } from '../../assets/img/point.svg';
import { ReactComponent as Point2 } from '../../assets/img/point_2.svg';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import { ReactComponent as Heart } from '../../assets/img/heart.svg';




export default function Header() {
  return (
    <header className={cn.app_header}>

      <div className={`${cn.up_header}`}>
        <div className={`${cn.container} ${cn.container_up_header}`}>
          <div className={cn.first_up_header}>
            <div>Главная</div>
            <div>Новости</div>
            <div>Размещение и тарифы</div>
            <div className={cn.wrapper_point}>
              <Point />
              <div className={cn.point_text}>Объявления на карте</div>
            </div>
            <div>Контакты</div>
          </div>

          <div className={cn.second_up_header}>
            <div className={cn.wrapper_heart}>
              <div className={cn.heart_text}>Закладки</div>
              <Heart />
            </div>
            <div className={cn.login}>Вход и регистрация</div>
          </div>
        </div>
      </div>

      <div className={cn.down_header}>
        <div className={`${cn.container} ${cn.container_down_header}`}>
          <div className={cn.down_header_items}>
            <Logo className={cn.logo}/>
            <div className={cn.wrapper_point_2}>
              <div className={cn.point_2_text}>Квартиры на сутки</div>
              <Point2 />
            </div>
            <div>Коттеджи и усадьбы</div>
            <div>Бани и Сауны</div>
            <div>Авто напрокат</div>
          </div>

          <button className={cn.btn}> <span className={cn.plus}>+</span> Разместить объявление</button>
        </div>
      </div>

    </header>
  )
}

