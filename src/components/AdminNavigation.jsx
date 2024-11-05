import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminNavigation() {
  return (
    <div className='admin-navbar'>
      <ul>
        <li><Link style={{color: "#000"}} to={"/admin-products"}>Your Products</Link></li>
        <li><Link style={{color: "#000"}} to={"/admin-messages"}>Your messages</Link></li>
        <li><Link style={{color: "#000"}} to={"/admin-add-product"}>Add new Products</Link></li>
      </ul>
    </div>
  )
}
