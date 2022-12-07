import React from 'react';
import { updateAllFlats, updateFilteredFlats } from "../../store/flatsSlice";
import { useAppSelector, useAppDispatch } from '../../store/hook';
import { MenuTextListInfo, PopularInfo } from './MenuTextListInfo';
import cn from "./MenuTextList.module.scss";



const MenuTextList = () => {

  // const allFlats = useAppSelector(state => state.flats.all);
  // const filteredFlats = useAppSelector(state => state.flats.filtered);
  const amount = useAppSelector(state => state.flats.amount);

  const dispatch = useAppDispatch();

  const res = MenuTextListInfo.map(el => {
    
    const arrItems = el.items;
    const curTitle = el.title;

    const items = arrItems.map(item => {
        return(
        <div className={cn.item}>
          <div className={cn.item_name}>Квартиры в {item.label}</div>
          <div className={cn.item_amount}>{item.amount}</div>
        </div>)
      }
    )

    return (
      <div className={cn.menu_text_part}>
        <div className={cn.title}>{curTitle}</div>
        <div className={cn.items}>
          {items}
        </div>
        {/* <div>Популярные направления</div> */}
      </div>
    )
  })

  const popularItems = PopularInfo.map(el => 
    <div className={cn.popular_name}>{el}</div>)

  return(
    <div className={cn.menu_text}>
      {res}
      <div className={cn.menu_text_part}>
        <div className={`${cn.title} ${cn.popular_title}`}>Популярные направления</div>
        {popularItems}
      </div>
    </div>
  );
}

export default MenuTextList;
