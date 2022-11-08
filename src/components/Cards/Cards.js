import Card from "../Card/Card";

const Cards = ({ arr }) => {

  const Cards = arr.map(
    item => <Card 
      title={item.title}
      description={item.description}
      date={item.date}
    />)

  return(
    {Cards}
  )
}

export default Cards;