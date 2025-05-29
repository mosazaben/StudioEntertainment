import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import './Signin.css'

const Signin = () => {
const home=useNavigate()

    return (
        <div>
           <div className="signin">
               <img src="../../../public/img/signin.webp" alt="gggg"/>
               <div className="signin-content">
                   <h1>Sign In</h1>
                   <input type="text" placeholder="Email"/>
                   <input type="password" placeholder="Password"/>
                   <button onClick={()=>home('/home')} >Sign In</button>
                   <p>Forgot Password?</p>
                   <p>______________________________</p>
                   <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
               </div>
           </div>
        </div>
    )
}
export default  React.memo(Signin);