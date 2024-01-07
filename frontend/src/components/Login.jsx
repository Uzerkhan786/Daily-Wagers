import  React ,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'

const Login = () => {
  const[signIn,setsignIn]=useState('login')
 const navigate=useNavigate();
  const [user,setUser]=useState({
    number:'',
    password:''
  });
  
  const loginFun=async()=>{
    const response=await fetch('https://daily-wager.onrender.com/api/v1/user/signin',{
      method:'POST',
      body:JSON.stringify({
        mobileNumber:user.number,
        password:user.password
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }

    });
    const json=await response.json();
    localStorage.setItem('userId',json.data._id)
    if(json.success===false){
      alert('Invalid Number or password')
      return console.log('Invalid Number or password')
    }
    console.log(localStorage.getItem('userId'));
    setsignIn('logout');
    navigate('/');
    
  }
  const formSubmit=(e)=>{
        e.preventDefault();
        loginFun()
        setUser(user);
        console.log(user);
  }
  function change(e){
    e.preventDefault();
    setUser({...user,[e.target.id]:e.target.value})
  }

  return (
    <div>
    
    <div style={{backgroundColor:'#5856d7',paddingTop:'4rem',paddingBottom:'12.5rem'}}>
    <div className='container' style={{width:'25rem',border:'2px solid white',borderRadius:'25px', backgroundColor:'white'}}>
      <div style={{padding:'2rem 2rem 5rem 2rem'}}>
  <h4>Sign in to your account</h4>
  <form onSubmit={formSubmit}>
  <div className="form-group my-3">
    <label htmlFor="number">Mobile Number</label>
    <input type="number" className="form-control" id="number" onChange={change} placeholder="Mobile Number"/>
  </div>

  <div className="form-group my-3">
    <label html="password">Password</label>
    <input type="password" className="form-control" onChange={change} id="password" placeholder="Password"/>
  </div>

  <input  type="submit" className="form-control" value={'LOGIN'}
   style={{backgroundColor:'#5856d7',color:'white'}}/> 
   <div className='my-3 text-center'>
   <h7>Do not have account yet?? <Link to='/registration' style={{color:'#5856d7',textDecoration:'none'}}>Sign Up</Link></h7>          
   </div> 
</form>
</div>
    </div>
    </div>
    </div>
  )
}

export default Login
