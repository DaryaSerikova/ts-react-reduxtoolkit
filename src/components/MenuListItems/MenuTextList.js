import React from 'react';
import { MenuTextListInfo } from './MenuTextListInfo';




export const MenuTextList = () => {

  const MenuTextItems = () => {

    // const Items = () => {
    //   return ()
    // }
    const titles = MenuTextItems.forEach(el => {
      const item = el.it
      return (<div className={cn.item}></div>)
      
    });

    const itemsList = MenuTextItems.filter(el => (el.title === curTitle))
    // const items = 
  
    return(
      <div className={cn.item}></div>
    )
  }
  
  return (
    <>
      <div className={cn.title}></div>
      <div className={cn.item}></div>
    </>
  )
}
