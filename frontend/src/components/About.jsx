import React from 'react'
import image1 from '../images/about1.png'
import Footer from './Footer/Footer'
import './Home.css'
const About = () => {
  return (
    
      <div className="container">
  <div className="row" style={{paddingTop:'2rem'}}>
  <h1 className='text-center' style={{fontSize:'3.5rem',fontWeight:'bold',color:'#5856d7'}}>About Us</h1>
    <div className="col" style={{paddingTop:'2rem'}}>
      <p> Welcome to <span style={{color:'#5856d7',fontFamily:'sans-serif',fontSize:'1.5rem',fontWeight:'bold'}}> 
     Daily Wagers  </span>your go-to platform for seamless daily services availability! At Daily
      Wagers, we understand the significance of skilled labor in our daily lives. Whether you need 
      a carpenter to fix that creaky door, a construction worker for a home project, a painter to add
       a splash of color, a plumber to tackle leaks, or a home cleaner to keep things spick and span
        – we've got you covered!
      </p>

     <p>Our platform is designed to bridge the gap between skilled daily wagers and individuals 
      seeking reliable services.<span style={{color:'#5856d7',fontFamily:'sans-serif',fontWeight:'bold'}}> 
     Daily Wagers  </span> connects skilled professionals such as carpenters,
       construction workers, painters, plumbers, and home cleaners with users like you, ensuring
        that your service needs are met promptly and efficiently.
     </p> 
     </div>
    <div className="col"><img  className='col-img' src={image1} style={{padding:'0rem 4rem',justifyContent:'center'}} alt="" /></div>
   
  </div>
  <Footer/>
</div>
      
    
  )
}

export default About
