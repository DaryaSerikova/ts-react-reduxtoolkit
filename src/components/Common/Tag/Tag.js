import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateFilteredFlats } from "../../../store/flatsSlice";
import cn from "./Tag.module.scss";
import { 
  updateCity,
  updateAmountRooms,
  updatePriceFrom, 
  updatePriceTo,
  updateSubwayStation, 
  updateNeighborhood,
 } from "../../../store/filtersSlice";



//  type TTagProps = {
//   value: string;
//   text: string;
//   style: string;
//   typeTag: string;
//  }

export const Tag = ({ text, style, typeTag, value }) => {
  const city = useSelector(state => state.filters.city);
  const allFlats = useSelector(state => state.flats.all);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleClick = () => {
    if (typeTag === "main") {
      dispatch(updateCity(value));
      const filteredCity = allFlats.filter(flat => (flat.city === value))
      dispatch(updateFilteredFlats(filteredCity));
    }
    dispatch(updateAmountRooms(''));
    dispatch(updatePriceFrom(''));
    dispatch(updatePriceTo(''));
    dispatch(updateSubwayStation(''));
    dispatch(updateNeighborhood(''));
    navigate("/catalog");
  };
  
  
  return (
    <div 
      className={`${cn.tag} ${style ? cn[`${style}`] : ''}`} 
      typeTag={typeTag}
      onClick={handleClick}
      >
        {text}
      </div>
  )
}
