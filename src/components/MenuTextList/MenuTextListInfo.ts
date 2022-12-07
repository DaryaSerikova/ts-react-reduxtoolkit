type TMenuTextItem = {
  name: string;
  amount: string;
}

type TMenuTextInfo = {
  title: string;
  items: TMenuTextItem[];
}

export const MenuTextListInfo: TMenuTextInfo[] = [
  {
    title: "Квартиры",
    items: [
      { name: "Квартиры в Минске", amount: "3567" },
      { name: "Квартиры в Гомеле", amount: "2032" },
      { name: "Квартиры в Гродно", amount: "2302 " },
      { name: "Квартиры в Могилеве", amount: "110" },
      { name: "Квартиры в Бресте", amount: "110" },
      { name: "Квартиры в Витебск", amount: "110" },
    ]
  },
  {
    title: "Коттеджи и усадьбы",
    items: [
      { name: "Аггроусадьбы", amount: "110" },
      { name: "Коттеджи", amount: "110" },
      { name: "Загородный комплекс", amount: "110" },
      { name: "Базы отдыха", amount: "110" },
      { name: "Еще", amount: ""},
    ]
  },
]

export const PopularInfo = [
  "Коттеджи и усадьбы на о. Брасласких",
  "Коттеджи и усадьбы (жилье) на Нарочи",
  "Коттеджи и усадьбы (жилье) у воды, на берегу, на озере"
]