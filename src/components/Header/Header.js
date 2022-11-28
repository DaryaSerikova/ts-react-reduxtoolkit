import React from 'react';
import { Link } from "react-router-dom";
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
            <Link className={cn.header_link} to="/">Главная</Link>
            <Link className={cn.header_link} to="/news">Новости</Link>
            <div>Размещение и тарифы</div>
            <div className={cn.wrapper_point}>
              <Point />
              <div className={cn.point_text}>Объявления на карте</div>
            </div>
            <Link className={cn.header_link} to="/contacts">Контакты</Link>

          </div>

          <div className={cn.second_up_header}>
            <div className={cn.wrapper_heart}>
              <div className={cn.heart_text}>Закладки</div>
              <Heart />
            </div>
            <Link
              to="/signin"
              className={cn.sign_in}
            >
              Вход и регистрация
            </Link>
          </div>
        </div>
      </div>

      <div className={cn.down_header}>
        <div className={`${cn.container} ${cn.container_down_header}`}>
          <div className={cn.down_header_items}>
            <Link className={cn.header_link} to="/main">
              <Logo className={cn.logo}/>
            </Link>
            <div className={cn.wrapper_point_2}>
              <Link to="/catalog" className={cn.point_2_text}>Квартиры на сутки</Link>
              <Point2 />
            </div>
            <div>Коттеджи и усадьбы</div>
            <div>Бани и Сауны</div>
            <div>Авто напрокат</div>
          </div>

          <button className={cn.btn}>
            <span className={cn.plus}>+</span>
            <span className={cn.plus_text_1}>Разместить</span>
            <span className={cn.plus_text_2}>объявление</span>
            </button>
        </div>
      </div>

    </header>
  )
}

