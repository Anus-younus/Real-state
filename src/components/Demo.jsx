import React from 'react'
import Card from './Card'
import card_1 from "../assets/Rent.png"
import card_2 from "../assets/Sell.png"
import card_3 from "../assets/redfinagent.png"

const cards = [
  {
    image: card_3,
    link: "buy-projects",
    name: "BUY",
    description: "Redfin agents are among the most experienced in the industry and can help you win in today’s market."
  },
  {
    image: card_2,
    link: "under-construction",
    name: "Under Construction",
    description: "Sell We know how to price, market, and sell your home for top dollar. And we do it all for half the listing fee others often charge."
  },
  {
    image: card_1,
    link: "rent-projects",
    name: "Rent",
    description: "Whether you’re searching for apartments, condos, or rental homes, we make it easy to find a place you’ll love."
  }
]

export default function Demo() {
  return (
    <div className='row'>
      <h1>BUY A PROPERTY</h1>
      <div className='row-child'>
        {
          cards.map((card) => <Card card={card} hero={true} />)
        }
      </div>
    </div>
  )
}
