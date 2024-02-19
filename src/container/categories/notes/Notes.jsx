import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './notes.css';
import {notes, notes1, notes2, notes3} from './import';
import Navbar from '../../../components/navbar/Navbar';



const Notes = () => {
  return (
<>
 
    <div className='ecom__notes '>
    <Navbar/>
        <Link to="/"><h3>Home</h3></Link>
        <Outlet /> <br/>
       
    <div className='ecom__notes-header'>
    
      <h2>Notes</h2> 
      <div class="circle">
      <img src={notes} alt='pen'/>
      </div>  
      <div className='card'>
    <div className='img-container p-5'>
      <img src={notes1} alt='pen'/>
      <div className='card-footer'>
<p>Color Size Small</p>
      </div>
      <div className='cart-btn'>
        <button>Buy Now</button>
      </div>
    </div>
 

  <div className='card'>
    <div className='img-container p-5'>
      <img src={notes2} alt='pen'/>
      <div className='card-footer'>
        <p>Color Size Medium</p>
      </div>
      <div className='cart-btn'>
        <button>Buy Now</button>
      </div>
    </div>
  </div>

  <div className='card'>
    <div className='img-container p-5'>
      <img src={notes3} alt='pen'/>
      <div className='card-footer'>
        <p> Color Size Large</p>
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

export default Notes
