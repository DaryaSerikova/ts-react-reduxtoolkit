import React from "react";
import NewsCard from "../NewsCard/NewsCard";
// import ts from "typescript";
import { TNewsCardInfo } from "./NewsCardsInfo";



type TNewsCardsProps = {
  arr: TNewsCardInfo[];
}

const NewsCards = ({ arr }: TNewsCardsProps) => {

  const NewsCards = arr.map(
    item => <NewsCard
      title={item.title}
      description={item.description}
      date={item.date}
      id={item.id}
      />)

  return (
    { NewsCards }
  )
}

export default NewsCards;