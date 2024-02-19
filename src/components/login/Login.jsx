import React from 'react'
import { Outlet, Link } from "react-router-dom";
import './login.css';
import image from "../../Assests/logo2.png";

const Login = () => {
  return (
    <div className="ecom section__padding">
    <div className="ecom__login ">
    <Link to="/">&nbsp; &nbsp;Home</Link>
        <Outlet />
        <h2>Welcome Back!</h2>
        <p>Sign in with your existing account</p>
        <br/>
        <div className="ecom__login-signup">
        <Link to="/signup"> <a href='#ra'><h3>Click Here to SignUp</h3></a></Link>
            
        </div>
        <br/>
    </div>
    
     <div className="ecom__login-form ">
      <div className="ecom__login-form__logo">
      <img src={image} alt="logo" />
      </div>
     <form>
    <div className="ecom__input-container__email">
      <label>Email Id/Mobile NO </label> <br></br>
      <input type="text" name="uname" placeholder="Enter Email id/Mobile No" required />
     
    </div>
    <div className="ecom__input-container__pass">
      <label>Password </label> <br></br>
      <input type="password" name="pass" placeholder="Enter Password" required />
      
    </div>
    <div className="ecom__button-container">
      <div className="ecom__button-container__login">
      <button type="submit">LOGIN</button>
      </div>


      <br/>
      <div className='ecom__or'>
        <h3>OR</h3>
      </div>
      <br/>
      
      <div className="ecom__button-container__otp">
        <button>Login with OTP</button>
        </div>
      
    </div>
  </form>
     </div>
     </div>
  )
}

export default Login
