import React from 'react'
import card_1 from "../assets/off-plane-project-1.jpg"
import card_2 from "../assets/off-plan-project-4.jpg"
import card_3 from "../assets/off-plan-project-3.jpg"
import Card from './Card'


const cards = [
    {
        image: card_3,
        heading: "BUY",
        text: "Redfin agents are among the most experienced in the industry and can help you win in today’s market."
    },
    {
        image: card_2,
        heading: "Sell",
        text: "Sell We know how to price, market, and sell your home for top dollar. And we do it all for half the listing fee others often charge."
    },
    {
        image: card_1,
        heading: "Rent",
        text: "Whether you’re searching for apartments, condos, or rental homes, we make it easy to find a place you’ll love."
    }
]


export default function ProjectsCard() {
    return (
        <div className='row'>
            <h1 style={{ textTransform: "uppercase" }}>Off Line Project</h1>
            <div className='row-child'>
                {cards.map((card) => <Card card={card} projects={true} />)}
            </div>
        </div>
    )
}
