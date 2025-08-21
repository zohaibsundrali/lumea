import React from 'react'
import ServicesHero from '../components/ServicesHero/ServicesHero'
import ServicesCard from '../components/ServicesCard/ServicesCard'
import FAQ from '../components/FAQ/FAQ'
import ClientReviews from '../components/ClientReviews/ClientReviews'
import TrustedBy from '../components/TrustedBy/TrustedBy'
import CompanyMission from '../components/CompanyMission/CompanyMission'

const page = () => {
  return (
    <>
       <ServicesHero/>
       <ServicesCard/>
       <CompanyMission/>
       <FAQ/>
       <ClientReviews/>
       <TrustedBy/>
       </>
  )
}

export default page