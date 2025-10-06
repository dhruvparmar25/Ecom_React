import HeroSection from '../components/HeroSection'
import { useProductContext } from '../context/productContext';

function About() {
  const {myname}=useProductContext();
  
  const myData={
    name:"Dhruv Parmar"
  }
  return (
    <div >
      {myname}
      <HeroSection mydata={myData}/>
    </div>
  )
}

export default About