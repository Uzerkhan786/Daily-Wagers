import React, { useState } from 'react'
import HomeImage from '../images/home2.png'
import './Home.css'
import Footer from './Footer/Footer'
const Home = () => {
 
  const[loading,setLoading]=useState(false);
  return (
    <div className="container">
  <div className="row">
    <div className="col" style={{paddingTop:'6rem'}}>
      
      <h1  className='heading' style={{fontWeight:'bold',fontSize:'3.5rem'}}>Welcome To</h1>
      <p   className='heading1' style={{color:'#5856d7',fontFamily:'sans-serif',fontWeight:'bold',fontSize:'3.5rem'}}> 
     Daily Wagers  
      </p>
     
      <p style={{color:'grey'}}>your go-to platform for seamless <span style={{color:'#5856d7',fontWeight:'bold'}}>daily services  </span>availability!</p>

    
     </div>
    <div className="col "><img  className='col-img' src={HomeImage} style={{padding:'4rem',display:'flex',justifyContent:'center'}} alt="" /></div>
   
  </div>
  <Footer/>
</div>
  )
}

export default Home
