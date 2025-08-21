import React from 'react'
import AboutHero from '../components/AboutHero/AboutHero'
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs'
import BusinessSolutions from '../components/BusinessSolutions/BusinessSolutions'
import OfferingsSection from '../components/OfferingsSection/OfferingsSection'
import Plan from '../components/Plan/Plan'
import ClientReviews from '../components/ClientReviews/ClientReviews'
import TrustedBy from '../components/TrustedBy/TrustedBy'

const page = () => {
  return (
    <>
    <AboutHero/>
    <WhyChooseUs/>
    <BusinessSolutions/>
    <OfferingsSection/>
    <Plan/>
    <ClientReviews/>
    <TrustedBy/>
</>
  )
}

export default page