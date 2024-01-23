import{About, Home,Navbar} from './components/index'
import {AppliedJob,CreateJob,ShowJobs} from './components/Jobs/Index'

import {Login} from './components/Signup&Login/Index';
import Registration from './components/Signup&Login/Registration';
import { BrowserRouter,Routes,Route } from 'react-router-dom'


function App() {
  return (
   <div  >
    <BrowserRouter>
    <Navbar/>
    <Routes> 
    <Route path='/' element={<Home/>}/>
      <Route path='/jobs' element={<ShowJobs/>}/>
      <Route path='/createjob' element={<CreateJob/>}/>
      <Route path='appliedjob' element={<AppliedJob/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='registration' element={<Registration/>}/>
    </Routes>
   
    </BrowserRouter>
     
   </div>
  );
}

export default App;
