import React from 'react';
import { Link } from "react-router-dom";
import { Button } from '../../components/Common/Button/Button';
import { Input } from '../../components/Common/Input/Input';
import cn from "./SignUpPage.module.scss";



const SignUpPage = () => {
  return (
    <main className={cn.container}>
      <div className={cn.box}>
        <div className={cn.wrapper_columns}>
          <div className={cn.first_column}>
            <h1 className={cn.title}>Регистрация</h1>
            <form className={cn.form}>
              <Input 
                typeInput="user" 
                placeholder="Логин" 
                // style="sigin" 
              />

              <Input 
                typeInput="email" 
                placeholder="Электронная почта" 
                // style="sigin" 
              />

              <Input 
                typeInput="password" 
                placeholder="Пароль" 
                // style="sigin" 
              />

              <Input 
                typeInput="password" 
                placeholder="Повторите пароль" 
                // style="sigin" 
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
    </main>
  )
}

export default SignUpPage;
