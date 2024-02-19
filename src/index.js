import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/login/Login';
import Delivery from './container/cart/delivery/Delivery';
import Cart from './container/cart/Cart';
import Payment from './container/cart/payment/Payment';
import Pens from './container/categories/pens/Pens';
import Highlighter from './container/categories/highlighters/Highlighter';
import Pencil from './container/categories/pencils/Pencil';
import Tape from './container/categories/tapes/Tapes';
import Scale from './container/categories/scale/Scale';
import Waxcryons from './container/categories/waxcrayons/Waxcrayons';
import Scissors from './container/categories/scissors/Scissors';
import Notes from './container/categories/notes/Notes';
import Signup from './components/signup/Signup';



const root = ReactDOM.createRoot(document.getElementById('root'));




export default function App1() {

  return (

    <BrowserRouter>

      <Routes>
         
      

          <Route index element={ <App />} />

          <Route path="login" element={<Login />} />
          <Route path="delivery" element={<Delivery />} />
          <Route path="cart" element={<Cart />} />
          <Route path="payment" element={<Payment />} />
          
          <Route path="pens" element={<Pens />} />
          <Route path="highlighter" element={<Highlighter />} />
          <Route path="pencil" element={<Pencil />} />
          <Route path="tapes" element={<Tape />} />
          <Route path="scale" element={<Scale />} />
          <Route path="cryons" element={<Waxcryons />} />
          <Route path="scissor" element={<Scissors />} />
          <Route path="notes" element={<Notes />} />
          <Route path="signup" element={<Signup />} />
          

    

      </Routes>

    </BrowserRouter>

  );

}





root.render(<App1 />);


