let idTagMain = 0;
let idTagCatalog = 0;

type TTagInfo = {
  id: number;
  key: string;
  value: string;
  label: string;
  // to: string;
}

export const MainPageTagInfo: TTagInfo[] = [
  {
    id: idTagMain++,
    key: `main_${idTagMain}`,
    value: "minsk",
    label: "Минск",
    // to: ""
  },
  {
    id: idTagMain++,
    key: `main_${idTagMain}`,
    value: "vitebsk",
    label: "Витебск",
    // to: ""
  },
  {
    id: idTagMain++,
    key: `main_${idTagMain}`,
    value: "grodno",
    label: "Гродно",
    // to: ""
  },
  {
    id: idTagMain++,
    key: `main_${idTagMain}`,
    value: "gomel",
    label: "Гомель",
    // to: ""
  },
  {
    id: idTagMain++,
    key: `main_${idTagMain}`,
    value: "brest",
    label: "Брест",
    // to: ""
  },
  {
    id: idTagMain++,
    key: `main_${idTagMain}`,
    value: "mogilev",
    label: "Могилев",
    // to: ""
  },
  
]

export const CatalogPageTagInfo: TTagInfo[] = [
  {
    id: idTagCatalog++,
    key: `main_${idTagCatalog}`,
    value: "Недорогие",
    label: "Недорогие",
    // to: ""
  },
  {
    id: idTagCatalog++,
    key: `main_${idTagCatalog}`,
    value: "1-комнатные",
    label: "1-комнатные",
    // to: ""
  },
  {
    id: idTagCatalog++,
    key: `main_${idTagCatalog}`,
    value: "2-комнатные",
    label: "2-комнатные",
    // to: ""
  },
  {
    id: idTagCatalog++,
    key: `main_${idTagCatalog}`,
    value: "3-комнатные",
    label: "3-комнатные",
    // to: ""
  },
  {
    id: idTagCatalog++,
    key: `main_${idTagCatalog}`,
    value: "4-комнатные",
    label: "4-комнатные",
    // to: ""
  },
  {
    id: idTagCatalog++,
    key: `main_${idTagCatalog}`,
    value: "5-комнатные",
    label: "5-комнатные",
    // to: ""
  },
  {
    id: idTagCatalog++,
    key: `main_${idTagCatalog}`,
    value: "Заводской р.",
    label: "Заводской р.",
    // to: ""
  },
  {
    id: idTagCatalog++,
    key: `main_${idTagCatalog}`,
    value: "Ленинский р. ",
    label: "Ленинский р. ",
    // to: ""
  },
  {
    id: idTagCatalog++,
    key: `main_${idTagCatalog}`,
    value: "Московский р. ",
    label: "Московский р. ",
    // to: ""
  },
  {
    id: idTagCatalog++,
    key: `main_${idTagCatalog}`,
    value: "Октябрьский р. ",
    label: "Октябрьский р. ",
    // to: ""
  },
  {
    id: idTagCatalog++,
    key: `main_${idTagCatalog}`,
    value: "Партизанский р.",
    label: "Партизанский р.",
    // to: ""
  },
  {
    id: idTagCatalog++,
    key: `main_${idTagCatalog}`,
    value: "Первомайский р.",
    label: "Первомайский р.",
    // to: ""
  },
  {
    id: idTagCatalog++,
    key: `main_${idTagCatalog}`,
    value: "Советский р.",
    label: "Советский р.",
    // to: ""
  },
  {
    id: idTagCatalog++,
    key: `main_${idTagCatalog}`,
    value: "Фрунзенский р.",
    label: "Фрунзенский р.",
    // to: ""
  },
  {
    id: idTagCatalog++,
    key: `main_${idTagCatalog}`,
    value: "Центральный р.",
    label: "Центральный р.",
    // to: ""
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