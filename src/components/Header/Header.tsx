import React from 'react';
import {  Link, useLocation, useNavigate } from "react-router-dom";
import { Dropdown } from '../Common/Dropdown/Dropdown';
import { ReactComponent as Point } from '../../assets/img/point.svg';
import { ReactComponent as Point2 } from '../../assets/img/point_2.svg';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import { ReactComponent as Heart } from '../../assets/img/heart.svg';
import cn from "./Header.module.scss";




export default function Header() {

  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  // if (localStorage.user) console.log('localStorage.user.parse(): ', localStorage.user.parse())
  // if (localStorage.user) {
  //   let parseUser = localStorage.user.parse()
  //   console.log('parseUser', parseUser)
  // }

  const handlerSignOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    localStorage.removeItem('token');
    localStorage.removeItem('name');

    localStorage.removeItem('user');

    navigate("/");
  }


  return (
    <header className={cn.app_header}>

      <div className={`${cn.up_header}`}>
        <div className={`${cn.container} ${cn.container_up_header}`}>
          <div className={cn.first_up_header}>
            <Link 
              className={`${cn.header_link} ${ path === "/" ? cn.border_top_yellow : ""}`} 
              to="/">
              Главная
            </Link>
            <Link 
              className={`${cn.header_link} ${ path === "/news" ? cn.border_top_yellow : ""}`} 
              to="/news">
              Новости
            </Link>
            <div>Размещение и тарифы</div>
            <div className={cn.wrapper_point}>
              <Point />
              <div className={cn.point_text}>Объявления на карте</div>
            </div>
            <Link 
              className={`${cn.header_link} ${ path === "/contacts" ? cn.border_top_yellow : ""}`} 
              to="/contacts">
              Контакты
            </Link>

          </div>

          <div className={cn.second_up_header}>
            <div className={cn.wrapper_heart}>
              <div className={cn.heart_text}>Закладки</div>
              <Heart />
            </div>

            {!localStorage.token ? 
              <Link
                to="/signin"
                className={cn.sign_in}
                >
                Вход и регистрация 
                </Link>

                : <>
                <div>{localStorage.name}</div>
                <button className={cn.signout} onClick={handlerSignOut}>Выйти</button>
                </>}
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
              {/* <Link to="/catalog" className={cn.point_2_text}>Квартиры на сутки</Link> */}
              <Dropdown />
              
              {/* <Point2 /> */}
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

