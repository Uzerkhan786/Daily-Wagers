import Footer from './components/Footer/Footer';
import{About,CreateJob,Home,Navbar} from './components/index'
import Jobs from './components/ShowJobs'
import Login from './components/Login';
import Registration from './components/Registration';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import AppliedJob from './components/AppliedJob';

function App() {
  return (
   <div  >
    <BrowserRouter>
    <Navbar/>
    <Routes> 
    <Route path='/' element={<Home/>}/>
      <Route path='/jobs' element={<Jobs/>}/>
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
