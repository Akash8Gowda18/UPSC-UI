import React from 'react';
import './course.css';
import funky from '../../Assests/image 6.png';

const Course = () => {
  return (
    <div className='ecom__course section__padding'>
      <div className='ecom__course-content'>
        <h1>DETAILED RETURN POLICY FOR OUR COURSE</h1>
       
        <p>
Course once purchased with us cannot be modified or clubbed with any other order and we do not provide return for purchased courses in any case.<br/>


<br/>This segment defines the moneyback guarantee for the following five services
Become a Teacher
Sell your product
Livestream Your Class
Advertisement Exchange
Create Your Own Website
We have not any fixed return policy for these services but before getting paid we define return policy and send by email. We send email from Pay us If you agree with the return policy</p>
        
<div className="ecom__header-content__join section__padding">
  <button type="button">Join Now</button>
 </div>

      </div>

      <div className='ecom__header-content-image'>
        <img src={funky} alt='course'/>
      </div>  

    </div>
  )
}

export default Course
