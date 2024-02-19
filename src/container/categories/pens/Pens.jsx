import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './pens.css';
import { pen,pen1, pen2, pen3,} from './import';
import Navbar from '../../../components/navbar/Navbar';



const Pens = () => {
  return (
<>
 
    <div className='ecom__pens '>
    <Navbar/>
        <Link to="/"><h3>HOME</h3></Link>
        <Outlet /> <br/>
       
    <div className='ecom__pens-header'>
    
      <h2>PENS</h2> 
       <div class="circle">
      <img src={pen} alt='pen'/>  
      </div>
      <div className='card'>
    <div className='img-container p-5'>
      <img src={pen1} alt='pen'/>
      <div className='card-footer'>
        <p>Reynolds Trimax Liquid Gel Pens | Needle Point (0.5mm) | Blue Ink | 1 Pack Of 5 Pens</p>
      </div>
      <div className='cart-btn'>
        <button>Buy Now</button>
      </div>
    </div>
  

  <div className='card'>
    <div className='img-container p-5'>
      <img src={pen2} alt='pen'/>
      <div className='card-footer'>
        <p>Reynolds Trimax Liquid Gel Pens | Needle Point (0.5mm) | Blue Ink | 1 Pack Of 5 Pens</p>
      </div>
      <div className='cart-btn'>
        <button>Buy Now</button>
      </div>
    </div>
  </div>

  <div className='card'>
    <div className='img-container p-5'>
      <img src={pen3} alt='pen'/>
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
    </div>

   
    </>
  )
}

export default Pens
