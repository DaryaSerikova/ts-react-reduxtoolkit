import React from 'react';
import cn from "./LoginPage.module.scss";



const LoginPage = () => {
  return (
    <div className={cn.wrapper_box}>
      <div className={cn.box}>

        <div className={cn.title}>Авторизация</div>
        <div className={cn.text}>
          Авторизируйтесь, чтобы начать публиковать свои объявления
        </div>

        <div className={`${cn.form} ${cn.container_form}`}>
          <input className={cn.input} placeholder="icon"/>
          <input className={cn.input} placeholder="icon"/>

          <div className={cn.login_settings}>
            <div className={cn.wrapper_settings_remember}>
              <div className={cn.toggle}>icon</div>
              <div className={cn.settings_remember}>Запомнить меня</div>
            </div>
            <div className={cn.settings_password}>Забыли пароль?</div>
          </div>

          <button className={cn.btn}>Войти</button>
          <div className={cn.logup}>Еще нет аккаунта? Создайте акканут</div>

        </div>

      </div>
    </div>
  )
}

export default LoginPage;
