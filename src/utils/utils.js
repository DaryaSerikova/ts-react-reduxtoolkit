export const getFakeJWT = () => {
  const login  = "dashs";
  const currentDate = new Date();
  console.log('currentDate: ', currentDate);
  const digitDate = Date.parse(currentDate);
  const first = `${digitDate}`.split("").slice(0, 3).join("");
  const second = login.split("").slice(0, 2).join("");
  const third = `${digitDate}`.toString().split("").slice(7, 8).join("");
  const fourth = `${digitDate}`.toString().split("").slice(4, 6).join("");
  return `vkdj46nfh75${second}ds713d7dnbg8FGVH${first}JHNN1bbnJN99${third}98v43bc4FCGH${fourth}65bvhd7fss81s2${login}`;
}


// export const getCurrentCardsOnPage = (filteredFlats: TFlat[], currentPageNumber: number, amountCardsOnPage = 9) => {
export const getCurrentCardsOnPage = (filteredFlats, currentPageNumber, amountCardsOnPage = 9) => {
  // const currentPageNumber = 2;
  // const amountCardsOnPage = 9;

  const amountPages =  Math.ceil(filteredFlats.length/9);
  const startSlice = currentPageNumber*amountCardsOnPage - amountCardsOnPage;
  const endSlice = currentPageNumber*amountCardsOnPage;
  const currentCards = filteredFlats.slice(startSlice, endSlice);

  console.log('amountPages: ', amountPages);
  console.log('startSlice: ', startSlice);
  console.log('endSlice: ', endSlice);
  console.log('currentCards: ', currentCards);

  return currentCards;
}

