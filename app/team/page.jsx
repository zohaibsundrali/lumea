import React from 'react'
import TeamHero from '../components/TeamHero/TeamHero'
import Achievements from '../components/Achievements/Achievements'
import ClientReviews from '../components/ClientReviews/ClientReviews'
import FAQ from '../components/FAQ/FAQ'

const page = () => {
  return (
    <>
   <TeamHero/>
   <Achievements/>
   <FAQ/>
   <ClientReviews/>
   </>
  )
}

export default page