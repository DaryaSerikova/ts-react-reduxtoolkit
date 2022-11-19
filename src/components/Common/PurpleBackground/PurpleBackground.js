import React from 'react';
import cn from "./PurpleBackground.module.scss";




export const PurpleBackground = ({children}) => {

  return (
    <>
      <div className={`${cn.child_background} ${cn.purple_background}`}></div>
      <div className={`${cn.child_background} `}>
        {children}
        {/* <img className={cn.white_background} src={background} alt={"white-background"}/> */}
      </div>
    </>
  )
}
