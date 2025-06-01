import React, {useRef} from 'react';
import {Link} from "react-router-dom";
import './Footer.css'

const Footer = () => {

    const scrollToTop=()=>{
        window.scrollTo({top:0})
    }
    return (
        <footer className='footer'>
            <div className="footer-container">
            <div className="footer-content">
                 <div onClick={scrollToTop} className="logo" >
                    <h1>Studio</h1>
                    <p>Entertainment</p>
                </div>
                <p>Studio Entertainment offers the best in comfort and viewing. The lobby food court and main concession stands offer a wide variety of movie fares.</p>
            </div>
            <div className="quicklinks">
                <h3>QuickLinks</h3>

                <li> About Us</li>
                <li>Terms and Conditions</li>
                <li >Privacy Policy</li>

            </div>
            <div className="payment">
            <h3>Payment Partners</h3>
                <img src="../../../public/img/esewa.webp" alt=""/>
            </div>
            </div>
            <p>© 2025 Studio Entertainment. All rights reserved.</p>
        </footer>
    )
}
export default React.memo(Footer);