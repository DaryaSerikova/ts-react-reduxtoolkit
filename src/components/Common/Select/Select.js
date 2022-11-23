import React from 'react';
import cn from "./Select.module.scss";



export const Select = ({arrOptions}) => {

  const options = arrOptions.map(option => <option>{option}</option>)
  return (
    <div>
      <select className={`${cn.select}`}>{options}</select>
    </div>
  )
}
