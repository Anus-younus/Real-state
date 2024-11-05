import React from 'react'
import { Link } from 'react-router-dom'

export default function ProjectNavbar() {
  return (
    <div className='admin-navbar'>
    <ul>
      <li><Link style={{color: "#000"}} to={"/buy-projects"}>Buy</Link></li>
      <li><Link style={{color: "#000"}} to={"/rent-projects"}>Rent</Link></li>
      <li><Link style={{color: "#000"}} to={"/under-construction"}>Under Construction</Link></li>
    </ul>
  </div>
  )
}
