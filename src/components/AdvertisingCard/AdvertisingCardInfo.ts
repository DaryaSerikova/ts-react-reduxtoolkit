let advCardId = 0;

type TAdvCardInfo = {
  typeCard: string;
  id: number;
  key: string;
  title: string;
  text: string;
}

export const AdvertisingCardInfo: TAdvCardInfo[] = [
  {
    typeCard: "1",
    id: advCardId++,
    key: `adv_card_${advCardId}`,
    title: "Начните привлекать клиентов бесплатно!",
    text: "Пройдя простую регистрацию на сайте у Вас появится личный кабинет, в котором возможно бесплатно создавать и публиковать объявления на сайте. ",
  },
  {
    typeCard: "2",
    id: advCardId++,
    key: `adv_card_${advCardId}`,
    title: "Поднимайте объявления",
    text: "Вы в любое время можете поднимать объявления вверх первой страницы каталога, они разместятся сразу после платных объявлений до тех пор, пока другой пользователь не повторит процедуру.",
  },
  {
    typeCard: "gold",
    id: advCardId++,
    key: `adv_card_${advCardId}`,
    title: "Приоритет Gold",
    text: "Приоритетное размещение Gold позволяет закрепить ваше объявление в верхней части каталога! Gold объявления перемещаются каждые 5 мин на 1 позицию, что делает размещение одинаковым для всех.",
  },
  


]