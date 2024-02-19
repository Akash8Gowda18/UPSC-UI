import React from 'react';
import './adminlogin.css';




const AdminLogin = () => {
  return (
    <div className='ecom__adminlogin section__padding '>
        <div className='ecom__adminlogin-header '>
            <h1>Admin Login </h1>
            <p>Please enter your Login Details!</p>
        </div>

        <div className='ecom__adminlogin-card'>
        <form>
           <div>
           <label>Enter Email/Username </label>
            <input type='text' placeholder=''/>

            <label>Enter Password  </label>
            <input type='text' placeholder=''/>
           </div>

           <div>
            <input type='checkbox' />
            <p>Remember me </p>
           </div>
        
        <div className='ecom__forgetpassword'>
        <p><a href='#forget'>Forgot Password?</a></p>
        </div>

        <div className='ecom__adminlogin-button'>
            <button type='button'>Submit</button>
        </div>

        </form>

      </div>
    </div>
  )
}

export default AdminLogin
