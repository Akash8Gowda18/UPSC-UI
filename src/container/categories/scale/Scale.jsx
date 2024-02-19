import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './scale.css';
import {scale} from './import';
import Navbar from '../../../components/navbar/Navbar';



const Scale = () => {
  return (
<>
 
    <div className='ecom__pens '>
    <Navbar/>
        <Link to="/"><h3>Home</h3></Link>
        <Outlet /> <br/>
       
    <div className='ecom__pens-header'>
    
      <h2>Scales</h2> 
      <div class="circle">
      <img src={scale} alt='pen'/>  
      </div>

  <div className='card'>
    <div className='img-container p-5'>
      <img src={scale} alt='pen'/>
      <div className='card-footer'>
        <p>Reynolds Trimax Liquid Gel Pens | Needle Point (0.5mm) | Blue Ink | 1 Pack Of 5 Pens</p>
      </div>
      <div className='cart-btn'>
        <button>Buy Now</button>
      </div>
    </div>
 
     </div>
    </div>
    </div>

   
    </>
  )
}

export default Scale
