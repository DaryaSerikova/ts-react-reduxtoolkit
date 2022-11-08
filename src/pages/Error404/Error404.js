import React from 'react';
import { ReactComponent as PurpleBackground1 } from '../../assets/img/error404_purple_background.svg';
import { ReactComponent as PurpleBackground2 } from '../../assets/img/error404_purple_background_maskgroup.svg';

import cn from "./Error404.module.scss";

const Error404 = () => {
  return (
    <div className={cn.container}>
      <div className={cn.page_error404}>
      
        <div className={cn.first_column}>
          <div className={cn.title}>Ошибка 404</div>
          <div className={cn.text}></div>
          <button className={cn.btn}>
            <div className={cn.btn_icon}></div>
            <div className={cn.btn_text}>Вернуться на главную</div>
          </button>
        </div>

        <div className={cn.huge_error404}>404</div>
      </div>
    </div>

  )
}

export default Error404;
