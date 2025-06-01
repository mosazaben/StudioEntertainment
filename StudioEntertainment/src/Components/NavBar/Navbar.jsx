import React from 'react';
import './Navbar.css'
import {useNavigate} from "react-router-dom";
const Navbar = () => {
    const signin=useNavigate()
    return (
        <nav className="navbar">
            <div  className="logo" >
                <h1>Studio</h1>
                <p>Entertainment</p>
            </div>
            <button onClick={()=>signin('/signin')}>Sign In</button>
        </nav>
    )
}
export default  React.memo(Navbar);
