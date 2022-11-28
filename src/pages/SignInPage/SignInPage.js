import React from 'react';
import { Link } from "react-router-dom";
import background1 from "../../assets/img/sigin_background1.png";
import background2 from "../../assets/img/sigin_background2.png";
import { Input } from '../../components/Common/Input/Input';
import { PurpleBackground } from '../../components/Common/PurpleBackground/PurpleBackground';
import { getFakeJWT } from '../../utils/utils';
import cn from "./SignInPage.module.scss";



const SignInPage = () => {
  const currentDate = new Date();

  return (
    <div className={cn.wrapper_box}>
      <PurpleBackground>
        <img src={background1} alt="background1" />
        <img src={background2} alt="background2" />
      </PurpleBackground>
      <div className={cn.box}>

        <h1 className={cn.title}>Авторизация</h1>
        <div className={cn.text}>
          Авторизируйтесь, чтобы начать публиковать свои объявления
        </div>

        <div className={`${cn.form} ${cn.container_form}`}>
          <div className={cn.wrapper_input} >
            <Input 
                typeInput="user" 
                placeholder="Логин" 
                style="sigin" 

                />
          </div>
          <div className={cn.wrapper_input} >
            <Input 
                typeInput="password" 
                placeholder="Пароль" 
                style="sigin" 

                />
          </div>



          {/* <input className={cn.input} placeholder="icon" /> */}
          {/* <input className={cn.input} placeholder="icon" /> */}

          <div className={cn.login_settings}>
            <div className={cn.wrapper_settings_remember}>
              <div className={cn.toggle}>icon</div>
              <div className={cn.settings_remember}>Запомнить меня</div>
            </div>
            <div className={cn.settings_password}>Забыли пароль?</div>
          </div>

          <button className={cn.btn}><Link to="/">Войти</Link></button>
          <div className={cn.logup}>
            Еще нет аккаунта? <Link to="/signup" className={cn.create_account}>Создайте акканут</Link>
          </div>

        </div>

      </div>
    </div>
  )
}

export default SignInPage;
