import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/HeroMain/Hero'
import BusinessSolutions from './components/BusinessSolutions/BusinessSolutions'
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <BusinessSolutions/>
      <WhyChooseUs/>
    </div>
  )
}

export default page