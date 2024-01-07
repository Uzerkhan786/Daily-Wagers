import React, { useEffect, useState} from 'react'

const AppliedJob = () => { 
    const [book,setBook]=useState([]);
    useEffect(()=>{
      
      const bookUser= localStorage.getItem('userId')
    fetch(`http://localhost:3001/api/v1/book/?bookingUserId=${bookUser}`)
   .then(response=>response.json())
   .then(json=>{
      setBook(book.concat(json.data));
   })
   
    },[])
    console.log(book);
    const deleteBooking=(e)=>{
      const id=e.target.value;
       fetch(`http://localhost:3001/api/v1/book/${id}`,{
        method:'DELETE'
       })
       .then(data=>data.json())
       .then(response=>{
        const id=response.data._id;
       const dltItem= book.filter(val=>{
          return val._id!==id
        })
        setBook(dltItem)
       })
      console.log('job deleted');
    }
   
  return (
    <div className='container my-3'>
      
          <table class="table table-hover">
  <thead>
    <tr>
      
      <th scope="col">Date</th>
      <th scope="col">Job Name</th>
      <th scope="col">Job Type</th>
      <th scope="col">Price</th>
      <th scope="col">Status</th>
     
    </tr>
  </thead>
  {book.map(val=>{
        return  <tbody>
  
    <tr>
       <td>{val.workBookDetail[0].date}</td>
      <td>{val.workBookDetail[0].workName}</td>
      <td>{val.workBookDetail[0].workType}</td>
      <td>{val.workBookDetail[0].salary} Rs/Day</td>
      <td>{val.workBookDetail[0].status}</td>
     <td><button type='button' className=' btn btn-danger' style={{
     borderRadius:'10px'}} onClick={deleteBooking} value={val._id}>Delete</button></td> 
    </tr>
   
  </tbody>
  
      })}
</table>
        
   
</div>

  )
}

export default AppliedJob
