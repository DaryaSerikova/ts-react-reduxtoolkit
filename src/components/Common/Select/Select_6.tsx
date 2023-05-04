import React from 'react';
import RS from 'react-select';
import style from './Select_4.module.scss';
import { 
  cityOptionsInfo,
  roomOptionsInfo,
  subwayOptionsInfo,
  neighborhoodOptionsInfo,
 } from '../../Filters/FiltersInfo';




function Select6({typeUpdateData}: any) {

  const getOptions = (typeUpdateData: string) => {
    switch (typeUpdateData) {
      case "city":
        return cityOptionsInfo;
      case "amountRooms":
        return roomOptionsInfo;
      case "subwayStation":
        return subwayOptionsInfo;
      case "neighborhood":
        return neighborhoodOptionsInfo;
      default: return [];
    }
  }

  const options = getOptions(typeUpdateData);


  return (
    <RS
        placeholder="Выберите"
        // ts-ignore
        options={options}
        className={style.select}
        isSearchable={false}
    />
  )
}

export default Select6;