import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import About from '../pages/About'
import Contact from '../pages/Contact'
import AdminForm from '../pages/AdminForm'
import Admin from '../pages/Admin'
import AdminAddProduct from '../pages/AdminAddProduct'
import AdminProducts from '../pages/AdminProducts'
import AdminMessages from '../pages/AdminMessages'
import BuyProducts from '../pages/BuyProducts'
import RentProducts from '../pages/RentProducts'
import UnderConsProduct from '../pages/UnderConsProduct'
import EditProduct from '../pages/EditProduct'

export default function AppRouter() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/off-plan-projects' element={<Projects />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/admin-login' element={<AdminForm />} />
            <Route path='/admin-panel' element={<Admin />} />
            <Route path='/admin-add-product' element={<AdminAddProduct />} />
            <Route path='/admin-products' element={<AdminProducts />} />
            <Route path='/admin-messages' element={<AdminMessages />} />
            <Route path='/buy-projects' element={<BuyProducts />} />
            <Route path='/rent-projects' element={<RentProducts />} />
            <Route path='/under-construction' element={<UnderConsProduct />} />
            <Route path='/admin-edit' element={<EditProduct />} />
        </Routes>
    )
}
