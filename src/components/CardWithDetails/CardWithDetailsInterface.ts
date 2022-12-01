export interface ICardWithDetails {
  type_card: string,
  key: string,
  gold: boolean,
  price: number,
  duration: string,
  // people: "",
  amount_rooms: number,
  square?: number,
  city: string,
  address: string,
  subway_station: string,
  neighborhood: string,
}