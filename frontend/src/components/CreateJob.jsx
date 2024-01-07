import React, { useState } from 'react'
import Footer from './Footer/Footer';
import Spiner from './Spiner';
import { useNavigate } from 'react-router-dom';

const CreateJob = () => {
  const navigate=useNavigate();
  const[isLogin,setIsLogin]=useState(false) 
     const[load,setLoad]=useState(false)
    const[job,setJob]=useState({
        jobName:'',
        jobType:'',
        price:'',
        description:'',
        city:'',
        experience:'',
        available:'',
        number:''
    });
    const formSubmit=async(e)=>{
      const a=localStorage.getItem('userId')
      console.log(a);
      if(a===null){
        setIsLogin(true)
      }
      e.preventDefault();
      setLoad(true)
      const response=await fetch('http://localhost:3001/api/v1/work',{
            method:'POST',
            body: JSON.stringify({
            userId:a,
            workName:job.jobName,
            workType:job.jobType,
            salary:job.price,
            description:job.description,
            city:job.city,
            status:job.status,
            experience:job.experience,
            mobileNumber:job.number
          }),
          headers: {
              "Content-type": "application/json; charset=UTF-8"
          }
      })
      const json=await response.json();
      console.log(json);
      setLoad(false)    
    }
    const change=(e)=>{
         setJob({...job,[e.target.id]:e.target.value})
    }
  return (
   
    <div>
       {!isLogin?(
        <div className='container' style={{width:'30rem',marginTop:'5rem'}}>
        {load?(
           <div style={{display:'flex',justifyContent:'center'}}>
        <Spiner/>
        </div>
        ):(
          <form onSubmit={formSubmit}>   
          <div className="form-group my-3">
            <label htmlFor="name">Job Name</label>
            <input type="name" className="form-control" id="jobName" onChange={change} />
          </div> 
          <div className="form-group my-3">
            <label htmlFor="name">Job Type</label>
            <input type="name" className="form-control" id="jobType" onChange={change} />
          </div>
        
          <div className="form-group my-3">
            <label htmlFor="number">Price</label>
            <input type="number" className="form-control" id="price" onChange={change} />
          </div>
      
      
          <div className="form-group my-3">
            <label htmlFor="name">Description</label>
            <input type="name" className="form-control" id="description" onChange={change} />
          </div>
      
          <div className="form-group my-3">
            <label htmlFor="name">City</label>
            <input type="name" className="form-control" id="city" onChange={change} />
          </div>
      
          <div className="form-group my-3">
            <label htmlFor="name">Experience</label>
            <input type="name" className="form-control" id="experience" onChange={change} />
          </div>
      
          <div className="form-group my-3">
            <label htmlFor="name">Status</label>
            <input type="name" className="form-control" id="status" onChange={change} />
          </div>
      
          <div className="form-group my-3">
            <label htmlFor="name">Mobile Number</label>
            <input type="numbr" className="form-control" id="number" onChange={change} />
          </div>
        <input  type="submit" className="form-control" value={'CREATE'}
           style={{backgroundColor:'#5856d7',color:'white'}}
           />
                      
        </form>
       )}
            </div>
       ):(
        navigate('/Login')
       )}   
      <Footer/>
      </div>
  )
}

export default CreateJob
