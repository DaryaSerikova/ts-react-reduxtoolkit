type TMenuTextItem = {
  name?: string;
  label: string;
  amount: number | "";

}

type TMenuTextInfo = {
  title: string;
  items: TMenuTextItem[];
}

export const MenuTextListInfo: TMenuTextInfo[] = [
  {
    title: "Квартиры",
    items: [
      // { name: "Квартиры в Минске", amount: "3567" },
      // { name: "Квартиры в Гомеле", amount: "2032" },
      // { name: "Квартиры в Гродно", amount: "2302 " },
      // { name: "Квартиры в Могилеве", amount: "110" },
      // { name: "Квартиры в Бресте", amount: "110" },
      // { name: "Квартиры в Витебск", amount: "110" },

      { name: "minsk", label: "Минске", amount: 0 },
      { name: "vitebsk", label: "Витебске", amount: 0 },
      { name: "grodno", label: "Гродно", amount: 0 },
      { name: "gomel", label: "Гомеле", amount: 0 },
      { name: "brest", label: "Бресте", amount: 0 },
      { name: "mogilev", label: "Могилеве", amount: 0 },
    ]
  },
  {
    title: "Коттеджи и усадьбы",
    items: [
      { label: "Аггроусадьбы", amount: 110 },
      { label: "Коттеджи", amount: 110 },
      { label: "Загородный комплекс", amount: 110 },
      { label: "Базы отдыха", amount: 110 },
      { label: "Еще", amount: ""},
    ]
  },
]

export const PopularInfo = [
  "Коттеджи и усадьбы на о. Брасласких",
  "Коттеджи и усадьбы (жилье) на Нарочи",
  "Коттеджи и усадьбы (жилье) у воды, на берегу, на озере"
]