import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/HeroMain/Hero'
import BusinessSolutions from './components/BusinessSolutions/BusinessSolutions'
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs'
import OfferingsSection from './components/OfferingsSection/OfferingsSection'
import TeamMembers from './components/TeamMembers/TeamMembers'
import Achievements from './components/Achievements/Achievements'
import FAQ from './components/FAQ/FAQ'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <BusinessSolutions/>
      <WhyChooseUs/>
      <OfferingsSection/>
      <TeamMembers/>
      <Achievements/>
      <FAQ/>
    </div>
  )
}

export default page