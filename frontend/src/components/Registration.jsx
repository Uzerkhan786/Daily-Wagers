import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'
const Registration = () => {
  const navigate=useNavigate();
  const [user,setUser]=useState({
    name:'',
    number:'',
    password:'',
  });

  const registerFun=async()=>{
    const response=await fetch('https://daily-wager.onrender.com/api/v1/user/signup',{
      method:'POST',
      body:JSON.stringify({
        name:user.name,
        mobileNumber:user.number,
        password:user.password,
        role:user.role
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
    const json=await response.json();
    console.log(json);
    if(json.success===false){
      alert('User Already Exist')
      return console.log('User Already exist with this number')
    }
    navigate('/Login');
    
  }
  const formSubmit=(e)=>{
        e.preventDefault();
        registerFun();     
  }
  function change(e){
    setUser({...user,[e.target.id]:e.target.value})
  }
  return (
    <div style={{backgroundColor:'#5856d7',paddingTop:'4rem',paddingBottom:'7.7rem'}}>
    <div className='container' style={{width:'25rem',border:'2px solid white',borderRadius:'25px', backgroundColor:'white'}}>
      <div style={{padding:'2rem 2rem 5rem 2rem'}}>
  <h4 className='text-center'>Register your account</h4>
  
  <form onSubmit={formSubmit}>

  <div className="form-group my-3">
    <label htmlFor="name">User Name</label>
    <input type="name" className="form-control" id="name" onChange={change} placeholder="name" autoComplete='off'/>
  </div>

  <div className="form-group my-3">
    <label htmlFor="number">Mobile Number</label>
    <input type="number" className="form-control" id="number" onChange={change} placeholder="Mobile Number" autoComplete='off'/>
  </div>

  <div className="form-group my-3">
    <label htmlFor="password">Password</label>
    <input type="password" className="form-control" id="password" onChange={change} placeholder="Password" autoComplete='off'/>
  </div>



  <input  type="submit" className="form-control" value={'REGISTER'}
   style={{backgroundColor:'#5856d7',color:'white'}}/> 
   <div className='my-3 text-center'>
   <h7>Already have an account?? <Link to='/login' style={{color:'#5856d7',textDecoration:'none'}}>Sign in</Link></h7>          
   </div>           
</form>
</div>
    </div>
    </div>
  )
}

export default Registration
