import React from 'react'
import image1 from '../images/about1.png'
import Footer from './Footer/Footer'
const About = () => {
  return (
    
      <div className="container">
  <div className="row">
    <div className="col" style={{paddingTop:'6rem'}}>
      <h2>About Us</h2>
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
    <div className="col"><img src={image1} style={{width:'35rem',padding:'4rem',justifyContent:'center'}} alt="" /></div>
   
  </div>
  <Footer/>
</div>
      
    
  )
}

export default About
