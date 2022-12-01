import React from 'react';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button } from '../../components/Common/Button/Button';
import { Input } from '../../components/Common/Input/Input';
import { PurpleBackground } from '../../components/Common/PurpleBackground/PurpleBackground';
import background1 from "../../assets/img/sigin_background1.png";
import background2 from "../../assets/img/sigin_background2.png";
import cn from "./SignUpPage.module.scss";



const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log('data:', data);
    reset();
    // navigate("/");
  }


  return (
    <main className={cn.wrapper_box}>

    <PurpleBackground>
      <div className={cn.wrapper_bg_img}>
        <img src={background1} alt="background1" />
        <img src={background2} alt="background2" className={cn.bg_2} />
      </div>
    </PurpleBackground>
    <div className={cn.container}>
      <div className={cn.box}>
        <div className={cn.wrapper_columns}>
          <div className={cn.first_column}>
            <h1 className={cn.title}>Регистрация</h1>
            <form className={cn.form} onSubmit={handleSubmit(onSubmit)}>
              <Input
                typeIcon="user"
                placeholder="Логин"
                // style="sigin"
                register={register}
                label="login"
              />

              <Input
                typeIcon="email"
                placeholder="Электронная почта"
                // style="sigin" 
                typeInput="email"
                register={register}
                label="email"
              />

              <Input
                typeIcon="password"
                placeholder="Пароль"
                // style="sigin" 
                typeInput="password"
                register={register}
                label="password"
              />

              <Input
                typeIcon="password"
                placeholder="Повторите пароль"
                // style="sigin" 
                typeInput="password"
                register={register}
                label="confirmPassword"
              />

              <div className={cn.capcha}></div>
              <Button
                text="Ошибка ввода"
                style="red"
                typeButton="left-icon"
                customStyle="signup"
              />

              <Button
                text="Зарегистрироваться"
                style="yellow"
                typeButton="without-icon"
                customStyle="signup"
              />



            </form>


          </div>
          <div className={cn.second_column}>
            Пользователь обязуется:
            <ul>
              <li> предоставлять достоверную и актуальную информацию при регистрации и добавлении объекта; </li>
              <li>добавлять фотографии объектов соответствующие действительности. Администрация сайта sdaem.by оставляет за собой право удалять любую информацию, размещенную пользователем, если сочтет, что информация не соответствует действительности, носит оскорбительный характер, нарушает права и законные интересы других граждан либо действующее законодательство Республики Беларусь.</li>
            </ul>

            <div className={cn.wrapper_signin}>Уже есть аккаунта? <Link to="/signin">Войдите</Link></div>
          </div>
        </div>

      </div>
    </div>
    </main>
  )
}

export default SignUpPage;
