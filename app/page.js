import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/HeroMain/Hero'
import BusinessSolutions from './components/BusinessSolutions/BusinessSolutions'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <BusinessSolutions/>
    </div>
  )
}

export default page