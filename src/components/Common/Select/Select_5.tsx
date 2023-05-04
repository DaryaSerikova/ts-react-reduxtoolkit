import React from 'react';
import RS from 'react-select';
import style from './Select_4.module.scss';



function Select5({options}: any) {

  return (
    <RS
        placeholder="Выберите"
        options={options}
        className={style.select}
        isSearchable={false}
    />
  )
}

export default Select5;