import React from 'react'
import Hero from '../components/Hero'
import Middle from '../components/middle'
import Demo from '../components/Demo'
import Main from '../components/Main'
import SecondHero from '../components/SecondHero'
import Footer from '../components/footer'
import '../App.css'


export default function Home() {
  return (
    <div>
      <Hero />
      <Middle />
      <Demo />
      <Main />
      <SecondHero />
      <Footer />
    </div>
  )
}
