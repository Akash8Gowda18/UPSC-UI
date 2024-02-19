import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './pencil.css';
import { pencil,pencil1, pencil2, pencil3,} from './import';
import Navbar from '../../../components/navbar/Navbar';



const Pencil = () => {
  return (
<>
 
    <div className='ecom__pencil '>
    <Navbar/>
        <Link to="/"><h3>Home</h3></Link>
        <Outlet /> <br/>
       
    <div className='ecom__pencil-header'>
    
      <h2>Pencils</h2> 
<div class="circle">
      <img src={pencil} alt='pen'/>  
      </div>
      <div className='card'>
    <div className='img-container p-5'>
      <img src={pencil1} alt='pen'/>
      <div className='card-footer'>
        <p> Apsara Matt Magic Pencil 2.0 [Pack of 10]</p>
      </div>
      <div className='cart-btn'>
        <button>Buy Now</button>
      </div>
    </div>
  

  <div className='card'>
    <div className='img-container p-5'>
      <img src={pencil2} alt='pen'/>
      <div className='card-footer'>
        <p>Apsara Platinum Pencils Value Pack - Pack of 20</p>
      </div>
      <div className='cart-btn'>
        <button>Buy Now</button>
      </div>
    </div>
  </div>

  <div className='card'>
    <div className='img-container p-5'>
      <img src={pencil3} alt='pen'/>
      <div className='card-footer'>
        <p> Apsara Absolute Pencils Value Pack - Pack of 20
  </p>
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

export default Pencil
