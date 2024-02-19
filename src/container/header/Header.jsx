import React from 'react';
import './header.css';
import header from '../../Assests/header.png';

const Header = () => {
  return (
    <>
    <div className="ecom__header section__padding " id="home">
      <div className="ecom__header-content">
        <h3>Discover the path to success with UPSC. Join the ranks of the elite and unlock your full potential with our expert guidance and resources</h3>

        <div className="ecom__header-content__input">
          <input type="search" placeholder="search...." />
         
        </div>

  <div className="ecom__header-content__join">
  <button type="button">Join Now</button>
  <button type="button">Know more</button>
 </div>




</div>
<div  className="ecom__header-image">
  <img src={header} alt="header-img"/>
</div>
 </div>

 
<div className='ecom__para section__padding'>
 <p>We provide replacement/return guarantee in some cases like wrong product delivered/damaged product delivered or if we get any genuine reason from the buyer.<br/>
  We do not provide replacement/return guarantee in case of buyer remorse.<br/>
  We will take the last decision for any replacement/return.</p>
</div>
 
 </> 
  )
}

export default Header
