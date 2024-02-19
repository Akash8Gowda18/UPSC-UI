import React from 'react';
import './experience.css';
import lorry from '../../Assests/delivery/lorry.png';
import man from '../../Assests/delivery/man.png';
import loc from '../../Assests/delivery/location.png';


const Experience = () => {
  return (
    <>
    <div className='ecom__experience section__padding '>
      <div className='ecom__experience-header'>
            <h1>EXPERIENCE</h1>
            <br/>
            <p>The Fastest Delivery</p>
            </div>

    </div>

    <div className='ecom__delivery-image'>
      <img src={lorry} alt='lorry'/>
     <img src={man} alt='man'/>
      <img src={loc} alt='loc'/>
      
      
    </div>
    </>
  )
}

export default Experience
