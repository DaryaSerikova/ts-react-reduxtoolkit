import { TFlat } from "../store/flatsSlice";

const getAmountPages = (filteredFlats: TFlat[]) =>  Math.ceil(filteredFlats.length/9);

// export const getCurrentCardsOnPage = (filteredFlats, currentPageNumber, amountCardsOnPage = 9) => {
export const getCurrentCardsOnPage = (
  filteredFlats: TFlat[], 
  currentPageNumber: number, 
  amountCardsOnPage = 9
  ) => {
    // const currentPageNumber = 2;
    // const amountCardsOnPage = 9;
  
    const amountPages =  Math.ceil(filteredFlats.length/9);
    // const amountPages =  getAmountPages(filteredFlats: TFlat[])
    const startSlice = currentPageNumber*amountCardsOnPage - amountCardsOnPage;
    const endSlice = currentPageNumber*amountCardsOnPage;
    const currentCards = filteredFlats.slice(startSlice, endSlice);
  
    console.log('amountPages: ', amountPages);
    console.log('startSlice: ', startSlice);
    console.log('endSlice: ', endSlice);
    console.log('currentCards: ', currentCards);
  
    return currentCards;
  }

export const getPagesRange = (amountPages: number) => {
  let i = 0;
  let pagesRange = [];

  while ( i < amountPages ) {
    i++;
    pagesRange.push(i);
  }

  return pagesRange;
}