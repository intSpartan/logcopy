import React, { useState } from "react"
// import "./register.css"
import axios from "axios"
import { useHistory } from "react-router-dom"
// import { Route, Router, Routes, useHistory } from "react-router-dom";

import "../static/css/SignUp.css";
import "../static/css/NavBar.css";
import Navbar from "../utils/NavBar";
import Footer from "../utils/Footer";

const Register = () => {

    const history = useHistory()

    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user
        if( name && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:9002/register", user)
            .then( res => {
                alert(res.data.message)
                history.push("/login")
            })
        } else {
            alert("invlid input")
        }
        
    }

    return (
        <>
        <Navbar/>
        <div className="register">
        <div className="container">
        <section id="content">
          <form action="">
            <h1>Signup Form</h1>
            {console.log("User", user)}
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
            <div className="button" onClick={register} >Register</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/login")}>Login</div>
            </form>
            </section>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Register