import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { PurpleBackground } from '../../components/Common/PurpleBackground/PurpleBackground';
import { Input } from '../../components/Common/Input/Input';
import { getFakeToken, getConfirmAccess } from '../../utils/utils';
import background1 from "../../assets/img/sigin_background1.png";
import background2 from "../../assets/img/sigin_background2.png";
import cn from "./SignInPage.module.scss";



const SignInPage = () => {
  const navigate = useNavigate();

  if (localStorage.token) navigate("/")
  const currentDate = new Date();
  // const location = useLocation();

  // let query = location.search;
  // const urlParams = new URLSearchParams(query);
  // const token = urlParams.get('token');
  // const userId = urlParams.get('user_id');
  // const accessToken = urlParams.get('access');
  // const refreshToken = urlParams.get('refresh');
  // const paidAccess = urlParams.get('token_access');

  const {
    register,
    handleSubmit,
    reset,
  } = useForm();


  const onSubmit = (data) => {
    console.log('data:', data);
    reset();
    const access = getConfirmAccess(data.login, data.password);
    if (access) {
      let fakeToken = getFakeToken();
      let userName = "Darya";
      let userLogin = "login";

      // let user = JSON.stringify({
      //   token: fakeToken,
      //   name: userName,
      //   login: userLogin,
      // })

      // localStorage.setItem('user', user);
      localStorage.setItem('token', fakeToken);
      localStorage.setItem('name', userName);


      navigate("/");
      console.log('fakeToken', fakeToken);

    } else {
      console.log('No access')
    }


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
