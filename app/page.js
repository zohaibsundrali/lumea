import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/HeroMain/Hero'
import BusinessSolutions from './components/BusinessSolutions/BusinessSolutions'
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs'
import OfferingsSection from './components/OfferingsSection/OfferingsSection'
import TeamMembers from './components/TeamMembers/TeamMembers'
import Achievements from './components/Achievements/Achievements'
import FAQ from './components/FAQ/FAQ'
import Plan from './components/Plan/Plan'
import ClientReviews from './components/ClientReviews/ClientReviews'
import CompanyMission from './components/CompanyMission/CompanyMission'

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
      <Plan/>
      <ClientReviews/>
      <CompanyMission/>
    </div>
  )
}

export default page