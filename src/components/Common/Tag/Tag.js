import React from 'react';
import cn from "./Tag.module.scss";

export const Tag = ({ text, style }) => {
  return (
    <div className={`${cn.tag} ${style ? cn[`${style}`] : ''}`}>{text}</div>
  )
}
