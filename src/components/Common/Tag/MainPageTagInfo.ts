let idTagMain = 0;
let idTagCatalog = 0;

type TTagInfo = {
  id: number;
  key: string;
  value: string;
  text: string;
  to: string;
}

export const MainPageTagInfo: TTagInfo[] = [
  {
    id: idTagMain++,
    key: `main_${idTagMain}`,
    value: "minsk",
    text: "Минск",
    to: ""
  },
  {
    id: idTagMain++,
    key: `main_${idTagMain}`,
    value: "vitebsk",
    text: "Витебск",
    to: ""
  },
  {
    id: idTagMain++,
    key: `main_${idTagMain}`,
    value: "grodno",
    text: "Гродно",
    to: ""
  },
  {
    id: idTagMain++,
    key: `main_${idTagMain}`,
    value: "gomel",
    text: "Гомель",
    to: ""
  },
  {
    id: idTagMain++,
    key: `main_${idTagMain}`,
    value: "brest",
    text: "Брест",
    to: ""
  },
  {
    id: idTagMain++,
    key: `main_${idTagMain}`,
    value: "mogilev",
    text: "Могилев",
    to: ""
  },
  
]

export const CatalogPageTagInfo: TTagInfo[] = [
  {
    id: idTagCatalog++,
    key: `main_${idTagCatalog}`,
    value: "Недорогие",
    text: "Недорогие",
    to: ""
  },
  {
    id: idTagCatalog++,
    key: `main_${idTagCatalog}`,
    value: "1-комнатные",
    text: "1-комнатные",
    to: ""
  },
  {
    id: idTagCatalog++,
    key: `main_${idTagCatalog}`,
    value: "2-комнатные",
    text: "2-комнатные",
    to: ""
  },
  {
    id: idTagCatalog++,
    key: `main_${idTagCatalog}`,
    value: "3-комнатные",
    text: "3-комнатные",
    to: ""
  },
  {
    id: idTagCatalog++,
    key: `main_${idTagCatalog}`,
    value: "4-комнатные",
    text: "4-комнатные",
    to: ""
  },
  {
    id: idTagCatalog++,
    key: `main_${idTagCatalog}`,
    value: "5-комнатные",
    text: "5-комнатные",
    to: ""
  },
  {
    id: idTagCatalog++,
    key: `main_${idTagCatalog}`,
    value: "Заводской р.",
    text: "Заводской р.",
    to: ""
  },
  {
    id: idTagCatalog++,
    key: `main_${idTagCatalog}`,
    value: "Ленинский р. ",
    text: "Ленинский р. ",
    to: ""
  },
  {
    id: idTagCatalog++,
    key: `main_${idTagCatalog}`,
    value: "Московский р. ",
    text: "Московский р. ",
    to: ""
  },
  {
    id: idTagCatalog++,
    key: `main_${idTagCatalog}`,
    value: "Октябрьский р. ",
    text: "Октябрьский р. ",
    to: ""
  },
  {
    id: idTagCatalog++,
    key: `main_${idTagCatalog}`,
    value: "Партизанский р.",
    text: "Партизанский р.",
    to: ""
  },
  {
    id: idTagCatalog++,
    key: `main_${idTagCatalog}`,
    value: "Первомайский р.",
    text: "Первомайский р.",
    to: ""
  },
  {
    id: idTagCatalog++,
    key: `main_${idTagCatalog}`,
    value: "Советский р.",
    text: "Советский р.",
    to: ""
  },
  {
    id: idTagCatalog++,
    key: `main_${idTagCatalog}`,
    value: "Фрунзенский р.",
    text: "Фрунзенский р.",
    to: ""
  },
  {
    id: idTagCatalog++,
    key: `main_${idTagCatalog}`,
    value: "Центральный р.",
    text: "Центральный р.",
    to: ""
  },
]

// export const CatalogPageTagInfo2 = [
//   "Недорогие",
//   "1-комнатные",
//   "2-комнатные",
//   "3-комнатные",
//   "4-комнатные",
//   "5-комнатные",
//   "Заводской р.",
//   "Ленинский р. ",
//   "Московский р. ",
//   "Октябрьский р. ",
//   "Партизанский р.",
//   "Первомайский р.",
//   "Советский р.",
//   "Фрунзенский р.",
//   "Центральный р.",
// ]