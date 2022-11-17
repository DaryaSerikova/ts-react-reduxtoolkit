import React from 'react';
import { MenuTextListInfo, PopularInfo } from './MenuTextListInfo';
import cn from "./MenuTextList.module.scss";



const MenuTextList = () => {

  const res = MenuTextListInfo.map(el => {
    
    const arrItems = el.items;
    const curTitle = el.title;

    const items = arrItems.map(item => {
        return(
        <div className={cn.item}>
          <div className={cn.item_name}>{item.name}</div>
          <div className={cn.item_amount}>{item.amount}</div>
        </div>)
      }
    )

    return (
      <>
        <div className={cn.title}>{curTitle}</div>
        <div className={cn.items}>
          {items}
        </div>
        {/* <div>Популярные направления</div> */}
      </>
    )
  })

  const popularItems = PopularInfo.map(el => 
    <div className={cn.popular_name}>{el}</div>)

  return(
    <div className={cn.menu_text}>
      {res}
      <div className={`${cn.title} ${cn.popular_title}`}>Популярные направления</div>
      {popularItems}
    </div>
  );
}

export default MenuTextList;
