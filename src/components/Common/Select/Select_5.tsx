import React from 'react';
import RS from 'react-select';
import style from './Select_4.module.scss';

// const options = [
//   {label: "hi", value: "hi"}
// ]

function Select5({options}: any) {
  return (
    <RS
        placeholder="Выберите"
        options={options}
        className={style.select}
    />
  )
}

export default Select5;