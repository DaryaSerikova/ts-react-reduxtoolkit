let idCityOptions = 0;
let idRoomOptions = 0;
let idSubwayOptions = 0;
let idNeighborhoodOptions = 0;
let idCheckboxesInfo = 0;



type TOptionsInfo = {
  // id: number;
  key: string;
  value: string;
  label: string;
}

type TRoomOptionsInfo = {
  // id: number;
  key: string;
  value: number | "";
  label: string;
}

type TCheckboxesInfo = {
  // id: number;
  key: string;
  label: string; 
  name: string;
  value: string;
  checked: boolean;
}

export const cityOptionsInfo: TOptionsInfo[]  = [
  { key: `city_options_${idCityOptions++}`, value: '', label: 'Выберите'},
  { key: `city_options_${idCityOptions++}`, value: 'minsk', label: 'Минск'},
  { key: `city_options_${idCityOptions++}`, value: "vitebsk", label: "Витебск"},
  { key: `city_options_${idCityOptions++}`, value: "grodno", label: "Гродно"},
  // {id: idCityOptions++, key: `city_options_${idCityOptions}`, value: "gomel", label: "Гомель"},
  // {id: idCityOptions++, key: `city_options_${idCityOptions}`, value: "brest", label: "Брест"},
  // {id: idCityOptions++, key: `city_options_${idCityOptions}`, value: "mogilev", label: "Могилев"},
];

export const roomOptionsInfo: TRoomOptionsInfo[] = [
  { key: `room_options_${idRoomOptions++}`, value: '', label: 'Выберите'},
  { key: `room_options_${idRoomOptions++}`, value: 1, label: '1-комн.'},
  { key: `room_options_${idRoomOptions++}`, value: 2, label: '2-комн.'},
  { key: `room_options_${idRoomOptions++}`, value: 3, label: '3-комн.'},
  { key: `room_options_${idRoomOptions++}`, value: 4, label: '4-комн.'},
  { key: `room_options_${idRoomOptions++}`, value: 5, label: '5-комн.'},
];

export const subwayOptionsInfo: TOptionsInfo[] = [
  {
    // id: idSubwayOptions++, 
    key: `subway_options_${idSubwayOptions}`, value: '', label: 'Выберите'},
  {
    // id: idSubwayOptions++, 
    key: `subway_options_${idSubwayOptions}`, value: "Каменная Горка", label: "Каменная Горка"},
  {
    // id: idSubwayOptions++, 
    key: `subway_options_${idSubwayOptions}`, value: "Парк Челюскинцев", label: "Парк Челюскинцев"},
  {
    // id: idSubwayOptions++, 
    key: `subway_options_${idSubwayOptions}`, value: "Площадь Победы", label: "Площадь Победы"},
  {
    // id: idSubwayOptions++, 
    key: `subway_options_${idSubwayOptions}`, value: "Октябрьская", label: "Октябрьская"},
  {
    // id: idSubwayOptions++, 
    key: `subway_options_${idSubwayOptions}`, value: "Немига", label: "Немига"},
  {
    // id: idSubwayOptions++, 
    key: `subway_options_${idSubwayOptions}`, value: "Купаловская", label:  "Купаловская"},
  {
    // id: idSubwayOptions++, 
    key: `subway_options_${idSubwayOptions}`, value: "Грушевка", label: "Грушевка"},
  {
    // id: idSubwayOptions++, 
    key: `subway_options_${idSubwayOptions}`, value: "Пролетарская", label: "Пролетарская"},
  {
    // id: idSubwayOptions++, 
    key: `subway_options_${idSubwayOptions}`, value: "Молодёжная", label: "Молодёжная"},
];

export const neighborhoodOptionsInfo: TOptionsInfo[] = [
  {
    // id: idNeighborhoodOptions++, 
    key: `neighborhood_options_${idNeighborhoodOptions}`, value: '', label: 'Выберите'},
  {
    // id: idNeighborhoodOptions++, 
    key: `neighborhood_options_${idNeighborhoodOptions}`, value: "Фрунзенский", label: "Фрунзенский"},
  {
    // id: idNeighborhoodOptions++, 
    key: `neighborhood_options_${idNeighborhoodOptions}`, value: "Первомайский", label: "Первомайский"},
  {
    // id: idNeighborhoodOptions++, 
    key: `neighborhood_options_${idNeighborhoodOptions}`, value: "Центральный", label: "Центральный"},
  {
    // id: idNeighborhoodOptions++, 
    key: `neighborhood_options_${idNeighborhoodOptions}`, value: "Московский", label: "Московский"},
  {
    // id: idNeighborhoodOptions++, 
    key: `neighborhood_options_${idNeighborhoodOptions}`, value: "Ленинский", label: "Ленинский"},
  {
    // id: idNeighborhoodOptions++, 
    key: `neighborhood_options_${idNeighborhoodOptions}`, value: "Фрунзенский", label: "Фрунзенский"},

];

// const fhjkdh = [
//   "Газовая плита",
//   "Духовка",
//   "Кофеварка",
//   "Микроволновая печь",
//   "Посуда",
//   "Посудомоечная машина",
// ]

export const checkboxesInfo: TCheckboxesInfo[] = [
  {
    // id idCheckboxesInfo++, 
    key: `checkbox_${idCheckboxesInfo}`,
    label: "Газовая плита", 
    name: "gas_stove", 
    value: "gas_stove",  
    checked: false
  },
  {
    // id idCheckboxesInfo++, 
    key: `checkbox_${idCheckboxesInfo}`,
    label: "Духовка", 
    name: "oven", 
    value: "oven",  
    checked: false
  },
  {
    // id idCheckboxesInfo++, 
    key: `checkbox_${idCheckboxesInfo}`,
    label: "Кофеварка", 
    name: "coffee_maker", 
    value: "coffee_maker",  
    checked: false
  },
  {
    // id idCheckboxesInfo++, 
    key: `checkbox_${idCheckboxesInfo}`,
    label: "Микроволновая печь", 
    name: "microwave", 
    value: "microwave",  
    checked: false
  },
  {
    // id idCheckboxesInfo++, 
    key: `checkbox_${idCheckboxesInfo}`,
    label: "Посуда",  
    name: "tableware", 
    value: "tableware",  
    checked: false
  },
  {
    // id idCheckboxesInfo++, 
    key: `checkbox_${idCheckboxesInfo}`,
    label: "Посудомоечная машина", 
    name: "dishwasher", 
    value: "dishwasher",  
    checked: false
  },

]