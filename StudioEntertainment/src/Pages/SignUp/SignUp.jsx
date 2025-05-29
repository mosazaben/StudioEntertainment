import React, {useReducer} from 'react';
import {Link, useNavigate} from "react-router-dom";
import './Signup.css'
import home from "../Home/Home.jsx";
const SignUp = () => {
 //

    const reduser=(state,action)=>{
        switch (action.type){
            case "name":
                return{...state,name:action.payload}
            case "email":
                return{...state,email:action.payload}
            case "mobile":
                return{...state,mobile:action.payload}
            case "date":
                return{...state,date:action.payload}
            case "password":
                return{...state,password:action.payload}
            default:
                return state;
        }
    }
    const initialstate={
        name:"",
        email:"",
        mobile:"",
        date:"",
        password:"",
    }

    const [state, dispatch] = useReducer(reduser,initialstate);

    const signin=useNavigate()

    return (

        <div className="signup-container">
            <div className="signup">
                <h1>Sign Up</h1>
                <input type="text" value={state.name} placeholder={"User Name *"} onChange={(e)=>dispatch({type:'name',payload:e.target.value})}/>
                <input type="email" value={state.email} placeholder={"Email *"} onChange={(e)=>dispatch({type:'email',payload:e.target.value})}/>
                <input type="number" value={state.mobile} placeholder={"Mobile *"} onChange={(e)=>dispatch({type:'mobile',payload:e.target.value})}/>
                <input type="Date" value={state.date} placeholder={""} onChange={(e)=>dispatch({type:'date',payload:e.target.value})}/>
                <input type="password" value={state.password} placeholder={"Password *"} onChange={(e)=>dispatch({type:'password',payload:e.target.value})}/>


                <button onClick={()=>signin("/signin")} >Sign Up</button>
                <p>___________________________________________</p>
                <p>Already a Member?<Link to="/signin" className="link">Sign In</Link></p>
            </div>
        </div>
    )
}
export default  React.memo(SignUp);
