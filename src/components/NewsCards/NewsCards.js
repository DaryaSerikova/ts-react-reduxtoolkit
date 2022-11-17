import NewsCard from "../NewsCard/NewsCard";

const NewsCards = ({ arr }) => {

  const NewsCards = arr.map(
    item => <NewsCard
      title={item.title}
      description={item.description}
      date={item.date}
    />)

  return (
    { NewsCards }
  )
}

export default NewsCards;