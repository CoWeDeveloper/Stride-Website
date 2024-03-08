import { useState } from 'react'
import "../Login/index.css";

// import icons
import { MdOutlineMail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { IoMdPerson } from "react-icons/io";

function Register() {
  // password useState functions
  // const [password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false); 
    const togglePasswordVisibility = ()=>{
        setPasswordVisible(!passwordVisible)
    }
    // const handleInputChange = (event)=>{
    //   setPassword(event.target.value);

    //   // setPasswordVisible(event.target.value !== '')
    // }

    // const validateForm = () =>{
    //   if() 
    // }

    return (
    <div>
       <div>
      <div className="container">
        <div className="inner-container">
          <h2 className="header text-2x1 ">Let's Dive in!</h2>
          <form>
            {/* Username */}
            <label className="label">Username</label>
            <div className="input-info-container">
              <IoMdPerson className="icon size-5" />
              <input
                type="text"
                className="input-text"
                placeholder="Enter Username"
                required
              />
            </div>
            {/* Email */}
           <label className="label">Email</label>
            <div className="input-info-container">
              <MdOutlineMail className="icon size-5" />
              <input
                type="text"
                className="input-text"
                placeholder="Enter email"
                required
              />
            </div>
            {/* Password */}
            <label className="label">Password</label>
            <div className="input-info-container">
              <CiLock className="icon size-5" />
              <input
                type={passwordVisible ? "text" : "password"}
                display="none"
                className="input-text"
                placeholder="Minimum 8 characters"
                autoComplete="off"
                // value={password}
                // onChange={handleInputChange}
                required
              />
              {/* Login Button */}
         <button onClick={togglePasswordVisibility} className="text-blue-600 cursor-pointer hover-underline hover:underline text-xs">
                   {passwordVisible ? "Hide Password" : "Show Password"}
              </button>

{/* {passwordVisible && (
                <button onClick={togglePasswordVisibility}>Hide Password</button>
            )} */}
            </div>
          
            <button   
            type="submit" 
           
            className="login-btn" >Sign Up with Stride</button>
          </form>
        </div>
      </div>
      <section>
        
        <div className="bg__img"></div>
      </section>
    </div>
    </div>
  )
}

export default Register;
