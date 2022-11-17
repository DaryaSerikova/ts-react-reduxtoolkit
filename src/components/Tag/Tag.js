import React from 'react';
import cn from "./Tag.module.scss";

export const Tag = ({ text }) => {
  return (
    <div className={cn.tag}>{text}</div>
  )
}
