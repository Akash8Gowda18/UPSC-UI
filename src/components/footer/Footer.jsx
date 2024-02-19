import React from 'react';
import './footer.css';
import logo1 from '../../Assests/Logo1.png';
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";


const Footer = () => {
  return (
   <div className='ecom__footer section__padding'>
    <div className='ecom__footer-logo'>
    <img src={logo1} alt='logo'/>
  </div>
  <div className='ecom__footer-links'>
    <div className='ecom__footer-links_div'>
      <h4>Contact</h4>
      <p>Send a Message Follow Us</p> 
    </div>

    <div className='ecom__footer-links_div'>
      <h4>Reads</h4>
      <p>Books We’re Reading
       <br/>Books We’ve Read
    <br/> Upcoming Reads</p>
    </div>

    <div className='ecom__footer-links_div'>
      <h4>Club</h4>
      <p>Join</p>
      <p>Blog</p>
      <p>About</p>
      <p>Resources</p>
    </div>

    <div className='ecom__footer-links_div'>
      <h4>Community</h4>
      <p>Volunteer</p>
      <p>Meetups</p>
      <p>Micro Groups</p>
    </div>
  </div>
  <div className='ecom__footer-icons'>
    <ul>
      <li><FaTwitter/></li>
      <li>< FaFacebook/></li>
      <li><FaInstagram/></li>
      <li><FaLinkedin/></li>
      </ul>
  </div>
   </div>
  )
}

export default Footer
