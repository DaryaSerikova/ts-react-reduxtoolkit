import React from 'react';
// import { ArrowRightIcon as ComponentReact } from "../../assets/img/arrow_right.svg"
// import { ReactComponent as ArrowRightIcon } from "../../assets/img/arrow_right.svg";
import { ReactComponent as ArrowRightIcon } from "../../../assets/img/catalog_arrow_right.svg";
import cn from "./Button.module.scss";



type TButton = {
  text: string;
  style: string;
  typeButton: string;
  customStyle?: string;
}

export const Button = ({text, style, typeButton="without-icon", customStyle=""}: TButton) => {
  const getContent = (typeButton: string) => {
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
      <button type="button" className={`${cn.btn} ${cn[`${style}`]} ${cn[`${customStyle}`]}`}>
        {/* {content} */}
        {text}

      </button>
    </div>
  )
}
