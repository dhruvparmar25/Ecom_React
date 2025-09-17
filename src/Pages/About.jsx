import React from 'react'
import HeroSection from '../components/HeroSection'

function About() {
  const myData={
    name:"Dhruv Parmar"
  }
  return (
    <div >
      <HeroSection mydata={myData}/>
    </div>
  )
}

export default About