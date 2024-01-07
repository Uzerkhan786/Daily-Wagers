import React from 'react'

const Card2 = ({price}) => {
  return (
    <div>
       <div className="card" style={{width: "18rem"}}>
        <div className="card-header">
        
      </div>
  <div className="card-body">
  
     
    <p>{price}</p>
    
     <button type='button' className=' btn' style={{backgroundColor:'#5856d7',color:'white'}}>ok</button>
  </div>
</div>
    </div>
  )
}

export default Card2
