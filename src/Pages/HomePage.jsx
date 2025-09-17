import React from 'react'
import HeroSection from '../components/HeroSection'

function HomePage() {
  const data={
    name:"thapa store"
  }
  return (
    <div> 
      <HeroSection mydata={data}/>
    </div>
  )
}

export default HomePage