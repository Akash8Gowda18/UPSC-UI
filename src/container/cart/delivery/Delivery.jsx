import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './delivery.css';

export default function Basic() {
  return (
    <div className="ecom__delivery section__padding" >
      
      <button>
        <Link to="/">Home</Link>
        <Outlet />
        </button>
      <div className="ecom__delivery-details " >
      
        <div className="ecom__delivery-details__person">
          
            <label for="name">*First name</label>
            <input type="text" name="name" id="name" /> <br />
            <label >*Last name</label>
            <input type="text" name="last" id="last" /> <br />
            <label >*Phone No.</label>
            <input type="text" name="phone" id="phone"  /> <br />

            <div className="ecom__delivery-address">
            <label htmlFor="">*Address</label>
            <input type="textarea" name="address" id="address" /> <br />
            </div>
            <div className="ecom__delivery-email">
            <label >*Email address</label>
            <input type="email" name="email" id="email" /> <br />
            </div>
            <Link to="/payment"><button>Submit</button></Link>
            
        </div>

        <div className="ecom__delivery-details__order">
            <div className="ecom__delivery-order">
            <h1>Order Details </h1><br />
              <p>Price  <span class="price">Rs. 995.0</span>    </p><br />
              <p>Delivery Charges <span class="charges"> 100</span></p> <br />
              <p>Discount Price </p><br />
              <p>Total Amount  <span class="total"> Rs. 1095</span> </p><br />
              <p>Your total savings amount on 
                <br /> this order <span class="order"> Rs. 1095</span> </p>
            </div>
            
        </div>
       
      </div>
    
      
    </div>
  );
}