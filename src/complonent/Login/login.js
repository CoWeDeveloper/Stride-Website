import React from "react";
import Navbar from "../navbar";
import "./index.css";
// import icons
import { MdOutlineMail } from "react-icons/md";
import { CiLock } from "react-icons/ci";

function login() {
  return (
    <div>
      <Navbar />

      <div className="container ">
        <div className="inner-container">
          <h2 className="welcome text-2x1 ">Welcome Back!</h2>
          <form>
            <label className="label">Email</label>
            <div className="login-info-container">
              <MdOutlineMail className="icon size-5" />
              <input 
              type="text"
              className="input-text" 
              placeholder="Enter email" 
              />
            </div>
            <label className="label">Password</label>
            <div className="login-info-container">
              <CiLock className="icon size-5" />
              <input
              type="password"
                className="input-text"
                placeholder="Enter Password"
                autoComplete="off"
              ></input>
            </div>
            <button className="login-btn">Log In</button>
          </form>
        </div>
      </div>
      <div className="flooter">
        Don't have an account? <a href="" className="ml-1 underline cursor-pointer"> Sign up</a>
      </div>
    </div>
  );
}

export default login;
