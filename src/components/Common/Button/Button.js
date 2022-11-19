import React from 'react';
// import { ArrowRightIcon as ComponentReact } from "../../assets/img/arrow_right.svg"
// import { ReactComponent as ArrowRightIcon } from "../../assets/img/arrow_right.svg";
import { ReactComponent as ArrowRightIcon } from "../../../assets/img/catalog_arrow_right.svg";
import cn from "./Button.module.scss";



export const Button = ({text, style, typeButton}) => {
  const getContent = () => {
    switch(typeButton) {
      case "right-icon":
        return <>
          {text}
          <span className={cn.icon}>icon</span>
        </>
      case "left-icon":
        return <>
          <span className={cn.icon}>icon</span>
          {text}
        </>
      case "without-icon":
        return {text}
      case "without-text":
        return <span className={cn.icon}>icon</span>
          
      default:
        return {text}
    }
  }

  const content = getContent(typeButton);

  return (
    <div>
      <button type="button" className={`${cn.btn} ${cn[`${style}`]}`}>
        {/* {content} */}
        {text}

      </button>
    </div>
  )
}
