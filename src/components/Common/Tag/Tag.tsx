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
  label: string;
  style?: string;
  typePage: "catalog" | "main";
 }



export const Tag = ({ label, style, typePage, value, id }: TTagProps) => {
  // const city = useSelector(state => state.filters.city);
  // const allFlats = useSelector(state => state.flats.all);
  // const dispatch = useDispatch();

  const city = useAppSelector(state => state.filters.city);
  const allFlats = useAppSelector(state => state.flats.all);
  const filteredFlats = useAppSelector(state => state.flats.filtered);
  const amountRooms = useAppSelector(state => state.filters.amountRooms);


  

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const getNewFilteredFlats = (label: string) => {

    const filteredCityFlats = allFlats.filter( flat => flat.city === city);
  
    switch (label) {
      case "Недорогие":
        return filteredCityFlats.filter( flat => (+flat.price <= 50));
      case "1-комнатные":
        return filteredCityFlats.filter( flat => (+flat.amount_rooms === 1));
      case "2-комнатные":
        return filteredCityFlats.filter( flat => (+flat.amount_rooms === 2));
      case "3-комнатные":
        return filteredCityFlats.filter( flat => (+flat.amount_rooms === 3));
      case "4-комнатные":
        return filteredCityFlats.filter( flat => (+flat.amount_rooms === 4));
      case "5-комнатные":
        return filteredCityFlats.filter( flat => (+flat.amount_rooms === 5));
      default: return filteredFlats;
      // case "2-комнатные":
      //   return filteredFlats.filter( flat => (+flat.amount_rooms === 2));    
    }
  
  //   "Недорогие",
  //   "1-комнатные",
  //   "2-комнатные",
  //   "3-комнатные",
  //   "4-комнатные",
  //   "5-комнатные",
      // "Заводской р.",
      // "Ленинский р. ",
      // "Московский р. ",
      // "Октябрьский р. ",
      // "Партизанский р.",
      // "Первомайский р.",
      // "Советский р.",
      // "Фрунзенский р.",
      // "Центральный р.",
  
    // }
   }


  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    console.log('e.currentTarget.innerText: ', e.currentTarget.innerText);

    if (typePage === "main") {
      dispatch(updateCity(value));
      const filteredCity = allFlats.filter(flat => (flat.city === value))
      dispatch(updateFilteredFlats(filteredCity));

      dispatch(updateAmountRooms(''));
      dispatch(updatePriceFrom(''));
      dispatch(updatePriceTo(''));
      dispatch(updateSubwayStation(''));
      dispatch(updateNeighborhood(''));
      navigate("/catalog");
    }

    if (typePage === "catalog" && city !== "") {
      let label = e.currentTarget.innerText;
      let newFilteredFlats = getNewFilteredFlats(label);
      dispatch(updateFilteredFlats(newFilteredFlats))

    }

  };
  
  
  return (
    <div 
      className={`${cn.tag} ${style ? cn[`${style}`] : ''}`} 
      onClick={handleClick}
      >
        {label}
      </div>
  )
}
