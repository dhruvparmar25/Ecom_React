import React from 'react'
import HeroSection from '../components/HeroSection'
import Services from '../components/Services'
import Trusted from '../components/Trusted'

function HomePage() {
  const data={
    name:"thapa store"
  }
  return (
    <div> 
      <HeroSection mydata={data}/>
      <Services/>
      <Trusted/>
    </div>
  )
}

export default HomePage