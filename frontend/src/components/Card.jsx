import React from 'react'

import { FaRupeeSign ,FaPhoneAlt} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsCalendar2DateFill,BsPersonWorkspace } from "react-icons/bs";
import { MdOutlineEventAvailable } from "react-icons/md";
import { FcBusinessman } from "react-icons/fc";

const Card = ({jobName,jobType,des,status,location,date,mobile,exp,price,Book}) => {
  
  return (
  
      <div className="card" style={{width: "18rem"}}>
        <div className="card-header">
        <div className="row">
      <div className="col-4  text-center" >
      <FcBusinessman size={'4rem'} />
      </div>
      <div className="col-8">
      <h5 className="card-title">{jobName}</h5>
      <button type='button' className=' btn' style={{backgroundColor:'#5856d7',color:'white',
      width:'150px',borderRadius:'20px'}}>{jobType}</button>
      </div>
     </div>
  </div>
  <div className="card-body">
  
     
    <p className="card-text">{des}</p>
     <div className="row">
      <div className="col-6 ">
      <p style={{fontWeight:'bold'}}><FaLocationDot style={{color:'#5856d7'}}/> {location}</p>
      </div>
      <div className="col-6">
      <p style={{fontWeight:'bold'}}><FaRupeeSign style={{color:'#5856d7'}} /> {price}/month</p>
      </div>
     </div>
     <div className="row">
      <div className="col-6">
      <p style={{fontWeight:'bold'}}><BsPersonWorkspace style={{color:'#5856d7'}} /> {exp} years</p>
      </div>
      <div className="col-6">
      <p style={{fontWeight:'bold'}}><BsCalendar2DateFill style={{color:'#5856d7'}}/> {date}</p>
      </div>
     </div>
     <div className="row">
      <div className="col-6">
      <p style={{fontWeight:'bold'}} ><MdOutlineEventAvailable style={{color:'#5856d7'}} size={'1.2rem'}/> {status}</p>
    
      </div>
      <div className="col-6">
      <p style={{fontWeight:'bold'}} ><FaPhoneAlt style={{color:'#5856d7'}} /> {mobile}</p>
      </div>
     </div>

    
     <button type='button' className=' btn' style={{backgroundColor:'#5856d7',color:'white'}}>{Book}</button>
  </div>
</div>
    
  )
}

export default Card
