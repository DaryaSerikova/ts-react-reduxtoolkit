import React from 'react';
import cn from "./Filters.module.scss";
import { Input } from '../Common/Input/Input';
import { Button } from '../Common/Button/Button';
import { ReactComponent as SetupIcon } from "../../assets/img/main_setup.svg";
import { ReactComponent as LocationIcon } from "../../assets/img/main_location.svg";
import { Select } from '../Common/Select/Select';







export const Filters = () => {
  return (
    <div className={cn.wrapper_filters}>
      <div className={cn.container}>
        {/* <Input typeInput={"email"} placeholder="Логин"/> */}
        {/* <Input typeInput={"password"} placeholder="Введите пароль"/> */}
        {/* <Input typeInput={"user"} placeholder="Ваше имя"/> */}
        {/* <Input typeInput={"От"} placeholder="Без иконки"/> */}

        <Select />


        <div className={cn.filters}>

          <div className={cn.filters_item}>
            <div className={cn.filter_name}>Комнаты</div>
            <select className={cn.filter}></select>
          </div>

          <div className={cn.filters_item}>
            <div className={cn.filter_name}>Цена за сутки (BYN)</div>
            <div className={cn.filter}>
              <Input style="w100h37" typeInput={"От"} placeholder=" " />
              <span className={cn.dash}>-</span>
              <Input style="w100h37" typeInput={"До"} placeholder=" " />
            </div>
          </div>

          <div className={cn.filters_item}>
            <div className={cn.filter_name}>Больше опций </div>
            <div className={cn.filter}>
              <button className={cn.btn_setup}><SetupIcon /></button>
            </div>
          </div>

          <div className={cn.filters_item}>
            <Button
              text='Очистить'
              style="light"
              typeButton="without-icon"
            />
            <Button
              text='Показать объекты'
              style="purple"
              typeButton="right-icon"
            />

            {/* <button>Показать объекты icon</button> */}
          </div>

        </div>
      </div>
    </div>


  )
}
