import React from 'react'
import Cardd from './Cardd'

const Cards = ({ cards, search, rate }) => {
  return (
    <div className='cards'>
      {cards.filter((el) =>el.rate>=rate && el.title.toLowerCase().includes(search.toLowerCase())).map((film) => <Cardd key={film} film={film} />)}
    </div>
  )
}

export default Cards
