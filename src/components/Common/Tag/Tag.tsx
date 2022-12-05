import React from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useAppSelector, useAppDispatch } from '../../../store/hook';
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



 type TTagProps = {
  id: number;
  value: string;
  text: string;
  style?: string;
  // typeTag: string | undefined;
  typeTag: "catalog" | "main";
 }

export const Tag = ({ text, style, typeTag, value, id }: TTagProps) => {
  // const city = useSelector(state => state.filters.city);
  // const allFlats = useSelector(state => state.flats.all);
  // const dispatch = useDispatch();
  const city = useAppSelector(state => state.filters.city);
  const allFlats = useAppSelector(state => state.flats.all);
  const dispatch = useAppDispatch();
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
      onClick={handleClick}
      >
        {text}
      </div>
  )
}
