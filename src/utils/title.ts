export const getCityNameRu = (city: string) => {
  switch(city) {
    case "minsk": return "Минске";
    case "vitebsk": return "Витебске";
    case "grodno": return "Гродно";
    case "gomel": return "Гомеле";
    case "brest": return "Бресте";
    case "mogilev": return "Могилеве";
    default: return '"город не выбран"'
  }
}

const getAmountRoomsRu = (city: string) => {
  switch(city) {
    case "1": return "1-комнатных";
    case "2": return "2-комнатных";
    case "3": return "3-комнатных";
    case "4": return "4-комнатных";
    case "5": return "5-комнатных";
    default: return ""
  }
}



export const getDynamicTitle = (city: string, amountRooms: string) => {
  let cityName = getCityNameRu(city);
  let amountRoomsRu = getAmountRoomsRu(amountRooms);

  let result = `Аренда ${city === "" ? "" : amountRoomsRu} квартир на сутки в ${cityName}`
  return result;
}