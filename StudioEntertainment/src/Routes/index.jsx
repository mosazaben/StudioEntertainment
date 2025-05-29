import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "../Layout/index.jsx";
const Signin=React.lazy(()=>import("../Pages/Signin/Signin"));
const SignUp=React.lazy(()=>import("../Pages/Signup/Signup"));
const Home=React.lazy(()=>import("../Pages/Home/Home"));

const Footer=React.lazy(()=>import("../Components/Footer/Footer"));
const Details=React.lazy(()=>import("../Pages/Details/Details"));

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}  >
                    <Route path="/" element={<Home/>} />
                    <Route path="/home" element={<Home/>} />
                    <Route path="/signin" element={<Signin/>} />
                    <Route path="/signup" element={<SignUp/>} />
                    <Route path="/details/:title" element={<Details/>} />
                </Route>


            </Routes>


        </BrowserRouter>
    )
}
export default Router;