
import './cart.css';
import { Outlet, Link } from "react-router-dom";
import { FaHouseChimneyWindow ,FaCirclePlus , FaCircleMinus} from "react-icons/fa6";
import  book  from '../../Assests/books/image 35.png';


const Cart = () => {

 


  return (

    <div className='ecom__cart section__padding'>
      <div className='ecom__home'>
      <Link to="/"><button><FaHouseChimneyWindow/> Home</button></Link>  <Outlet />
      
        <div className='ecom__cart-header'>
          <h1>Your Cart Items</h1>
        </div>

   <div className='ecom__cart-items'>
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

   <div className='ecom__cart-items-details'>
   <img src={book} alt='book1'/>
   <div className='ecom_item-title'>
   <p>Indian Polity ( English| 6th  Revised Edition)  UPSC | Civil Services Exam  State Administrative Exams</p>
   <h4>Rs 800</h4>
   <div className='ecom__items-quantity'>
    <p>Qty. <FaCircleMinus size={12}/> 01
   <FaCirclePlus  size={12}/> </p>
    <p>remove</p>
   </div>
   </div>
   </div>
  
   </div>
   
        <div className='ecom__cart-shopnow'>
          <button type='button'>
          <Link to="/"> Shop More</Link>
          </button>
        </div>
  </div>     


        <div className='ecom__cart-order'>
           <div className='ecom__cart-order-head'>
            <h2>Order Details </h2>
            <p>Price  <span class="price">Rs. 995.0</span>    </p><br />
              <p>Delivery Charges <span class="charges"> 100</span></p> <br />
              <p>Discount Price </p><br />
              <p>Total Amount  <span class="total"> Rs. 1095</span> </p><br />
              <p>Your total savings amount on 
                <br /> this order <span class="order"> Rs. 1095</span> </p>
           </div>

           <div className='ecom__cart-order-button'>
<button type='button'>
           <Link to="/delivery"> Place Order</Link>
            </button>
</div>

 </div> 


           
    </div>

  

  
  )
}

export default Cart
