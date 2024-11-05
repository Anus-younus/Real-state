import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './config/routes'
import Navbar from './components/Nabar'


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  )
}
