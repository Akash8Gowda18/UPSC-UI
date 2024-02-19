import React from 'react';
import './signup.css';


const Signup = () => {
  return (
    <div className="ecom__signup section__padding">
    <div className="ecom__sign ">
        <h3>SIGN UP FOR FREE</h3>
        <p>All Fields Required</p>

    <form action="">
    <div className="ecom__signup-firstName">
        <div className="firstName">
        <label>First Name &* </label> <br></br>
      <input type="text" name="uname" placeholder="Enter First Name" required />
     
        </div>
        <div className="lastName"> 
    <label>Last name*</label> <br />
      <input type="text" name="uname" placeholder="Enter Last Name" required />
    </div>
     
    </div>
   <div className="ecom__signup-email">
   <label>Email Id*</label> <br></br>
      <input type="email" name="email" placeholder="Enter Email Id" required /> <br />
   </div>
    <div className="ecom__signup-pass">

      <div className="ecom__signup-pass__create">
      <label>Create Password*</label> <br></br>
      <input type="password" name="pass" placeholder="Enter Password" required /> <br />
      </div>
      
      <div className="ecom__signup-pass__confirm">
      <label>Confirm  Password*  </label> <br></br>
      <input type="password" name="pass" placeholder="Enter Password" required /> <br />
      </div>
      
    </div>
        <div className="ecom__checkbox">
            <input type="checkbox" id="sign"/>
            <label htmlFor="sign">By clicking sign up for free you sgree to  Bigship’s Terms & Conditions and Privacy Policy </label>
        </div>
<button>Procced</button>
    </form>
    </div>
    </div>
  )
}

export default Signup