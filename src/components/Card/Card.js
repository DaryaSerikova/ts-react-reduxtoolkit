import React from 'react'


const Card = ({title, description, date}) => {
  return (
    <div className="card">
      <div className="wrapper-card-img"></div>
      <div className="card-title">{title}</div>
      <div className="card-mini-description">{description}</div>
      <div className="card-date">{date}</div>
      <button>Читать</button>
    </div>
  )
}

export default Card;

