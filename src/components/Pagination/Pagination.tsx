import React from 'react';
import { getPagesRange } from '../../utils/utils_ts';
import { TFlat} from "../../store/flatsSlice";
import cn from "./Pagination.module.scss";


interface IPagination {
  arrCards: TFlat[], 
  currentPageNumber: number, 
  handlerPaginationClick: (e: React.MouseEvent<HTMLDivElement>) => void, 
}

const Pagination = ({arrCards, currentPageNumber, handlerPaginationClick}: IPagination) => {

  const amountPages =  Math.ceil(arrCards.length/9); //7
  // const amountPages =  Math.ceil(filteredFlats.length/9); //7
  
  let pagesRange = getPagesRange(amountPages);

  let pagesNumbers = pagesRange.map(pageNumber => 
    <div
      className={`${cn.pagination_item} ${currentPageNumber === pageNumber ? cn.active : ''}`}
      onClick={handlerPaginationClick}
      >
      {pageNumber}
    </div>)

  return (
    <div className={cn.pagination}>
      {pagesNumbers}
    </div>
  )
}

export default Pagination;
