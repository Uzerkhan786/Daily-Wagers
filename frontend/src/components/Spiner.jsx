import React from 'react'
import {ThreeDots} from 'react-loader-spinner';
const Spiner = () => {
  return (
   <div>
    <ThreeDots
  visible={true}
  height="170"
  width="120"
  color="#5856d7"
  radius="16"
  ariaLabel="three-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
   </div>
    
  )
}

export default Spiner
