let CardWithDetails_id_200 = 0;

interface ICardWithDetails {
  // type_card: string,
  id: number,
  key: string,
  gold: boolean,
  // price: string, //number,
  price: number,

  duration: string,
  // people: "",

  // amount_rooms: string, //number,
  amount_rooms: number,

  // square: string, //number,
  square: number,


  city: string,
  address: string,
  subway_station: string,
  neighborhood: string,
}

export const CardWithDetailsInfo: ICardWithDetails[] = [
  {
    id: CardWithDetails_id_200++,
    key: `cardWithDetails_200_${CardWithDetails_id_200}`,
    gold: true,
    // price: "65.00",
    price: 60.00,

    duration: "за сутки",
    // people: "",
    amount_rooms: 4,
    square: 179,
    city: "Минск",
    address: "б-р Мулявина, д. 10",
    subway_station: "Грушевка",
    neighborhood: "Шабаны"
  },
  {
    id: CardWithDetails_id_200++,
    key: `cardWithDetails_200_${CardWithDetails_id_200}`,
    gold: false,
    // price: "65.00",
    price: 65.00,

    duration: "за сутки",
    // people: "",
    amount_rooms: 4,
    square: 179,
    city: "Минск",
    address: "б-р Мулявина, д. 10",
    subway_station: "Грушевка",
    neighborhood: "Шабаны"
  },
  {
    id: CardWithDetails_id_200++,
    key: `cardWithDetails_200_${CardWithDetails_id_200}`,
    gold: true,
    // price: "65.00",
    price: 70.00,

    duration: "за сутки",
    // people: "",
    amount_rooms: 4,
    square: 179,
    city: "Минск",
    address: "б-р Мулявина, д. 10",
    subway_station: "Грушевка",
    neighborhood: "Шабаны"
  },
  {
    id: CardWithDetails_id_200++,
    key: `cardWithDetails_200_${CardWithDetails_id_200}`,
    gold: true,
    // price: "65.00",
    price: 75.00,

    duration: "за сутки",
    // people: "",
    amount_rooms: 4,
    square: 179,
    city: "Минск",
    address: "б-р Мулявина, д. 10",
    subway_station: "Грушевка",
    neighborhood: "Шабаны"
  },
  {
    id: CardWithDetails_id_200++,
    key: `cardWithDetails_200_${CardWithDetails_id_200}`,
    gold: false,
    // price: "65.00",
    price: 80.00,

    duration: "за сутки",
    // people: "",
    amount_rooms: 4,
    square: 179,
    city: "Минск",
    address: "б-р Мулявина, д. 10",
    subway_station: "Грушевка",
    neighborhood: "Шабаны"
  },
  {
    id: CardWithDetails_id_200++,
    key: `cardWithDetails_200_${CardWithDetails_id_200}`,
    gold: true,
    // price: "65.00",
    price: 85.00,

    duration: "за сутки",
    // people: "",
    amount_rooms: 4,
    square: 179,
    city: "Минск",
    address: "б-р Мулявина, д. 10",
    subway_station: "Грушевка",
    neighborhood: "Шабаны"
  },
]