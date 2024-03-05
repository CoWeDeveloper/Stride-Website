import React from "react";
import Navbar from "./navbar";
import "./index.css"


function login() {
  return (
    <div>
      <Navbar />
    
        <div className="container">
          <div className="inner-container">
            <h2 className="welcome">Welcome Back!</h2>
          <form>
          <label className="label">Email</label>
          <div className="login-info-container">
            <input className="input-text" placeholder="Enter email" />
          </div>
          <label className="label">Password</label>
          <div className="email">
            <input className="input-text" placeholder="Enter Password" />
          </div>
          <button className="login-btn">Log In</button>
          </form>
          </div>
         
        </div>
        <div className="flooter">Don't have an account? <u>Sign up</u></div>
       
    </div>
  );
}

export default login;
