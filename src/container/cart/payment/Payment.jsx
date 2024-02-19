import React from 'react';
import './payment.css';
import { Outlet, Link } from "react-router-dom";
import { FaPeriscope , FaBabyCarriage, FaAmazonPay,  } from "react-icons/fa";
import { FaHouseChimneyWindow, } from "react-icons/fa6";
import { FaCirclePlus , FaCircleMinus} from "react-icons/fa6";
import  book  from '../../../../src/Assests/books/image 35.png';

const Payment = () => {
  return (
   
        <div className='ecom__payment section__padding'>
        <div className='ecom__home'>
      <Link to="/"><button><FaHouseChimneyWindow/> Home</button></Link>  <Outlet />
      
       
        <div className='ecom__payment-header '>
       <h2>You are almost there </h2><br/>
        </div>
        </div>
      
        <p> <FaPeriscope/>Delivery Address</p>
       <div className='ecom__payment-address'>
        <div className='ecom__payment-address-form'>
          <form>
            <text>
              XYZ
            </text>
          </form>
        </div>

        <div className='ecom__payment-address-form'>
          <form>
            <text>
              XYZ
            </text>
          </form>
        </div>

        <div className='ecom__payment-order'>
            <h2>Order Details </h2>
            <p>Price  <span class="price">Rs. 995.0</span>    </p><br />
              <p>Delivery Charges <span class="charges"> 100</span></p> <br />
              <p>Discount Price </p><br />
              <p>Total Amount  <span class="total"> Rs. 1095</span> </p><br />
              <p>Your total savings amount on 
                <br /> this order <span class="order"> Rs. 1095</span> </p>
           </div>



        </div>

        <div className='ecom__payment-add'>
          <p>+ Add Address</p>
        </div>

     <div className="ecom__payment-ordersummary">
      <div className="ecom__payment-ordersummary-head">
      <br/>
      <p> <FaBabyCarriage/>Order Summary</p>
      </div>
      <div className='ecom__cart-items-details'>
   <img src={book} alt='book1'/>
   <div className='ecom_item-title'>
   <p>Indian Polity ( English| 6th  Revised Edition)  UPSC | Civil Services Exam  State Administrative Exams</p>
   <h4>Rs 800</h4>
   <div className='ecom__items-quantity'>
    <p>Qty. <FaCircleMinus size={12}/> 01 <FaCirclePlus  size={12}/> </p>
    <p>remove</p>
   </div>
   </div>
   </div>

  <div className="ecom__payment-pay">
    <p> <FaAmazonPay/>Payment Details</p>
        <ul>
      <li>
      <label>
            <input type="radio" value="option1" checked={false}  />
            Gpay
          </label> 
      </li>
   
        <li>
        <label>
            <input type="radio" value="option1" checked={false}  />
            Phonepe
          </label> 
        </li>

        <li>
        <label>
            <input type="radio" value="option1" checked={false}  />
            Paytm
          </label> 
        </li>

        <li>
        <label>
            <input type="radio" value="option1" checked={false}  />
            Card
          </label> 
        </li>
        </ul>
  </div>

<div className="ecom__payment-button">
  <button>Pay Now</button>


</div>






   </div>

     
      
    



        

       

        

    </div>

   
    
  )
}

export default Payment
