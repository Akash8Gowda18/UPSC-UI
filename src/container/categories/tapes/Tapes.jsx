import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './tapes.css';
import { tape, tape1, tape2, tape3} from './import';
import Navbar from '../../../components/navbar/Navbar';



const Tape = () => {
  return (
<>
 
    <div className='ecom__tapes '>
    <Navbar/>
        <Link to="/"><h3>Home</h3></Link>
        <Outlet /> <br/>
       
    <div className='ecom__tapes-header'>
    
      <h2>Brown Tapes/White Tapes</h2> 
      <div class="circle">
      <img src={tape} alt='pen'/>  
      </div>
      <div className='card'>
    <div className='img-container p-5'>
      <img src={tape1} alt='pen'/>
      <div className='card-footer'>
        <p>White Tape 3" inch for Packing Qty pack of 6 nos</p>
      </div>
      <div className='cart-btn'>
        <button>Buy Now</button>
      </div>
    </div>
  

  <div className='card'>
    <div className='img-container p-5'>
      <img src={tape2} alt='pen'/>
      <div className='card-footer'>
        <p>Brown Tape 4" inch for Packing Pack of 3nos</p>
      </div>
      <div className='cart-btn'>
        <button>Buy Now</button>
      </div>
    </div>
    </div>

  <div className='card'>
    <div className='img-container p-5'>
      <img src={tape3} alt='pen'/>
      <div className='card-footer'>
        <p>Foam Tape Small Pack of 10</p>
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

export default Tape
