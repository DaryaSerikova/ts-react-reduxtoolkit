import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { PurpleBackground } from '../../components/Common/PurpleBackground/PurpleBackground';
import { Input } from '../../components/Common/Input/Input';
import { getFakeJWT } from '../../utils/utils';
import background1 from "../../assets/img/sigin_background1.png";
import background2 from "../../assets/img/sigin_background2.png";
import cn from "./SignInPage.module.scss";



const SignInPage = () => {
  const currentDate = new Date();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
  } = useForm();


  const onSubmit = (data) => {
    console.log('data:', data);
    reset();
    navigate("/");
  }

  return (
    <main className={cn.wrapper_box}>
      <PurpleBackground>
        <div className={cn.wrapper_bg_img}>
          <img src={background1} alt="background1" />
          <img src={background2} alt="background2" className={cn.bg_2} />
        </div>
      </PurpleBackground>
      <div className={cn.box}>
        <header>
          <h1 className={cn.title}>Авторизация</h1>
          <div className={cn.text}>
            Авторизируйтесь, чтобы начать публиковать свои объявления
          </div>
        </header>
        <form
          className={`${cn.form} ${cn.container_form}`}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={cn.wrapper_input} >
            <Input
              typeIcon="user"
              placeholder="Логин"
              style="sigin"
              register={register}
              label="login"
              required
            />
          </div>
          <div className={cn.wrapper_input} >
            <Input
              typeIcon="password"
              placeholder="Пароль"
              style="sigin"
              register={register}
              label="password"
              typeInput="password"
              required
            />
          </div>


          <div className={cn.login_settings}>
            <div className={cn.wrapper_settings_remember}>
              <div className={cn.toggle}>icon</div>
              <div className={cn.settings_remember}>Запомнить меня</div>
            </div>
            <div className={cn.settings_password}>Забыли пароль?</div>
          </div>

          <button className={cn.btn}>Войти</button>

          <div className={cn.logup}>
            Еще нет аккаунта? <Link to="/signup" className={cn.create_account}>Создайте акканут</Link>
          </div>

        </form>

      </div>
    </main>
  )
}

export default SignInPage;
