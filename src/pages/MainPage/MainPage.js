import React from 'react';
import CardWithDetails from '../../components/CardWithDetails/CardWithDetails';
import MenuTextList from '../../components/MenuListItems/MenuTextList';
import cn from "./MainPage.module.scss";



const MainPage = () => {
  return (
    <div className={cn.container}>
      <div className={cn.title}>Sdaem.by - у нас живут ваши объявления</div>
      <div className={cn.choice_smth}></div>
      <div wrapper_menus>
        <div className={cn.menu_cards}></div>
        {/* <MenuTextList /> */}
      </div>
      <CardWithDetails />
    </div>
  )
}

export default MainPage;
