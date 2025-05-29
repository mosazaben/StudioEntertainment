import {Outlet} from "react-router-dom";
import React from 'react';
import Footer from "../Components/Footer/Footer.jsx";
const Navbar=React.lazy(()=>import("../Components/NavBar/Navbar"));

const Layout = () => {
    return(
<>
    <Navbar/>
    <Outlet/>
    <Footer/>
</>



    )
}
export default Layout;