import React from 'react';
import cn from "./MainPage.module.scss";



const MainPage = () => {
  return (
    <div className={cn.container}>
      <div className={cn.title}>Sdaem.by - у нас живут ваши объявления</div>
      <div className={cn.choice_smth}></div>
      <div wrapper_menus>
        <div className={cn.menu_cards}></div>
        <div className={cn.menu_text}>
          <div className={cn.title}></div>
          <div className={cn.menu_text_item}></div>
        </div>
      </div>
    </div>
  )
}

export default MainPage;
