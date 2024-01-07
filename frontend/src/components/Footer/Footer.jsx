import React from 'react'
import {Link} from 'react-router-dom'
import { FaTwitter,FaLinkedin,FaGithub } from "react-icons/fa";
import './Footer.css'
const Footer = () => {
  return (
   
    <div  className="padding">
    <div className="footer-clean">
      <footer>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-4 col-md-3 item">
              <h3>Services</h3>
              <ul>
                <li><Link to="#">Web design</Link></li>
                <li><Link to="#">Development</Link></li>
                <li><Link to="#">Hosting</Link></li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li><Link to="#">Company</Link></li>
                <li><Link to="#">Team</Link></li>
                <li><Link to="#">Legacy</Link></li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-3 item">
              <h3>Careers</h3>
              <ul>
                <li><Link to="#">Job openings</Link></li>
                <li><Link to="#">Employee success</Link></li>
                <li><Link to="#">Benefits</Link></li>
              </ul>
            </div>
            <div className="col-lg-3 item social">
              <Link to="https://www.linkedin.com/in/uzer-khan-b5a507214/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B9dzRo3YqRz2GZa5OlM%2BztA%3D%3D"><FaLinkedin style={{color:"#4078c0"}}/></Link>
              <Link to="https://twitter.com/UzerKhan786" style={{color: "#1DA1F2, backgroundColor: white"}}><FaTwitter style={{color:'#1DA1F2'}} /></Link>
              <Link to="https://github.com/Uzerkhan786" ><FaGithub/></Link>
              <p className="copyright">Company Name © 2023</p>
            </div>
          </div>
        </div>
      </footer>
    </div>

  </div>
  
  )
}

export default Footer
