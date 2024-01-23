import React from 'react'
import './Search.css'
const SearchJob = ({search,change}) => {
  return (
    <section className="subscribe-area pb-50 pt-70">
    <div className="container">
     <div className="row">
       <div className="subscribe-wrapper subscribe2-wrapper mb-15"  >
          <div className="subscribe-form" style={{margin:'auto',display:'flex',justifyContent:'center'}}>
             <input placeholder="Enter your city" type="text" onChange={change}/>
               <button onClick={search}>Search <i className="fas fa-long-arrow-alt-right"></i></button>                                 
          </div>
        </div>
      </div>
    
    </div>
    </section>




  )
}

export default SearchJob
