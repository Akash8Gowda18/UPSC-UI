import React from 'react';
import  './categories.css';
import {pen , highlighter, pencil, tape, scale, cryons ,stickynote, scissor  } from './import';
import { Outlet, Link } from "react-router-dom";


const Categories = () => {
  return (

    <>
    <div className='ecom__category section__padding'>

<ul>
  <div class="circle">
  <Link to="/pens"> <img src={pen} alt='pen'/><h4>Pens</h4> </Link>
      <Outlet/>
      
</div>




<div class="circle">
<Link to="/highlighter"> <img src={highlighter} alt='highlighter'/><h4>Highlighter</h4> </Link>
<Outlet/>
      
 </div>

 <div class="circle">
 <Link to="/pencil"> <img src={pencil} alt='pencil'/>   <h4>Pencil</h4></Link>

      <Outlet/>
   
  </div>

  <div class="circle">
  <Link to="/tapes">  <img src={tape} alt='tape'/><h4>Tapes</h4></Link>
  <Outlet/>
      </div>

      <div class="circle">
      <Link to="/scale">  <img src={scale} alt='scale'/><h4>Scale</h4></Link>
      <Outlet/>
      
      </div>

      <div class="circle">
      <Link to="/cryons"> <img src={ cryons} alt=' cryons'/><h4>Cryons</h4></Link>
      <Outlet/>
      
   
      </div>
    
      <div class="circle">
      <Link to="/scissor"> <img src={scissor} alt='scissor'/><h4>Scissor</h4></Link>
      <Outlet/>
      
      
      </div>

      <div class="circle">
      <Link to="/notes"><img src={stickynote} alt='stickynote'/><h4>Notes</h4></Link>
      <Outlet/>
      
     
      </div>

</ul>
      
    </div>

    </>
  )
}

export default Categories
