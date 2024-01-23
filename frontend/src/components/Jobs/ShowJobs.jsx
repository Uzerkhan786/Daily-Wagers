import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer';
import {FaRupeeSign ,FaPhoneAlt,FaLocationDot,BsCalendar2DateFill,
  BsPersonWorkspace ,MdOutlineEventAvailable,FcBusinessman} from '../../icons/Icons'
import { useNavigate } from 'react-router-dom';
import Spiner from '../Spiner';
import SearchJob from './SearchJob';
const ShowJobs = () => {
 const[allJob,setAllJob]=useState([]);
 const[login,setLogin]=useState(false);
 const[loading,setLoading]=useState(false)
 const[city,setCity]=useState();
 const navigate=useNavigate();

  useEffect(()=>{
   fetch(`https://daily-wager.onrender.com/api/v1/work`)
   .then(response=>response.json())
   .then(json=>{
      setAllJob(allJob.concat(json.data));
      setLoading(true);
   })
  },[0])

  const search=()=>{
    let searchCity=allJob.filter(val=>(val.city===city ||val.workType===city));
   
    setAllJob(searchCity);
    console.log(allJob);
  }
  const change=(e)=>{
        setCity(e.target.value)    
  }

  //Till here there is code for the all shibs shown and search

  let b;
  const userBookWork=async()=>{
    const a=localStorage.getItem('userId')
    if(a==null){
      setLogin(true)
     }
           const response=await fetch('https://daily-wager.onrender.com/api/v1/book',{
              method:'POST',
              body:JSON.stringify({
                bookingUserId:a,
                workBookId:b._id,
                price:b.salary
              }),
              headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
           })
           const json=await response.json();
           console.log(json);
  }
  
  const booked=(e)=>{
     const id=e.target.id;
     fetch(`https://daily-wager.onrender.com/api/v1/work/${id}`)
   .then(response=>response.json())
   .then(json=>{
    b=json.data
    console.log(b);
    userBookWork();
    alert('Booked Successfully')
    })
  }
  return (
      <div>
        <SearchJob search={search} change={change} />
      
    {!login?(
      <div  className='container' >  
      {!loading?(
        <div style={{display:'flex',justifyContent:'center'}}>
          <Spiner/>
        </div>
      
    ):(
      <div className="row">
            {allJob.map(val=>{
    return <div className="col-lg-3 col-md-12 my-3 d-flex justify-content-center" >
               {/* <Card  jobName={val.workName} jobType={val.workType} des={val.description} 
               location={val.city} exp={val.experience} status={val.available} mobile={val.mobile}
                price={val.salary} date={val.date} Book={val._id}/>     */}
                <div className="card" style={{width: "18rem"}}>
        <div className="card-header">
        <div className="row">
      <div className="col-4  text-center" >
      <FcBusinessman size={'4rem'} />
      </div>
      <div className="col-8">
      <h5 className="card-title">{val.workName}</h5>
      <button type='button' className=' btn' style={{backgroundColor:'#5856d7',color:'white',
      width:'150px',borderRadius:'20px'}}>{val.workType}</button>
      </div>
     </div>
  </div>
  <div className="card-body">
   
    <p className="card-text">{val.description}</p>
     <div className="row">
      <div className="col-6 ">
      <p style={{fontWeight:'bold'}}><FaLocationDot style={{color:'#5856d7'}}/> {val.city}</p>
      </div>
      <div className="col-6">
      <p style={{fontWeight:'bold'}}><FaRupeeSign style={{color:'#5856d7'}} /> {val.salary}/month</p>
      </div>
     </div>
     <div className="row">
      <div className="col-6">
      <p style={{fontWeight:'bold'}}><BsPersonWorkspace style={{color:'#5856d7'}} /> {val.experience}years</p>
      </div>
      <div className="col-6">
      <p style={{fontWeight:'bold'}}><BsCalendar2DateFill style={{color:'#5856d7'}}/> {val.date}</p>
      </div>
     </div>
     <div className="row">
      <div className="col-6">
      <p style={{fontWeight:'bold'}} ><MdOutlineEventAvailable style={{color:'#5856d7'}} size={'1.2rem'}/> {val.status}</p>
    
      </div>
      <div className="col-6">
      <p style={{fontWeight:'bold'}} ><FaPhoneAlt style={{color:'#5856d7'}} /> {val.mobileNumber}</p>
      </div>
     </div>
     
     <button id={val._id} type='button' className=' btn' onClick={booked}
      style={{backgroundColor:'#5856d7',color:'white'}}>book  
      </button>
   
  </div>
</div>
          </div>
         })}
            </div>
    )}          
  <Footer/>
     </div>
    ):(
      navigate('/Login')
    )}     
      </div>
    )
}

export default ShowJobs
