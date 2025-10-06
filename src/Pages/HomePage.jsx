import React from 'react'
import HeroSection from '../components/HeroSection'
import Services from '../components/Services'
import Trusted from '../components/Trusted'
import FeatureProdcut from '../components/FeatureProdcut'

function HomePage() {
  const data={
    name:"thapa store"
  }
  return (
    <div> 
      <HeroSection mydata={data}/>
      <FeatureProdcut/>
      <Services/>
      <Trusted/>
    </div>
  )
}

export default HomePage