import React from 'react'
import { Link } from 'react-router-dom';
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

export default function Card({ card, projects, hero }) {
  return (
    <div className='card'>
      <div className='card-child' style={{padding: `${projects && "0px"}`}}><img style={{height: `${projects && '15em'}`, width: `${projects && "100%"}`, margin: `${projects && "0px"}`}} src={card.image} alt="" /></div>
      <div className='card-child'>
        <div className='card-text'>
          <h4>{card.name}</h4>
          <p>{card.description}</p>
        </div>
        <div className='card-footer'>
          <button>{hero?<Link style={{color: "#fff"}} to={card.link}>{card.name}</Link>:<Link to={"/contact"} style={{color: "#fff"}}>Contact Us</Link>}</button>
          <p><span><MdOutlineEmail className='icon' />Email</span><span><FaWhatsapp className='icon' />Whatsaap</span><span><FaPhoneAlt className='icon' />CallUs</span></p>
        </div>
      </div>
    </div>
  )
}
