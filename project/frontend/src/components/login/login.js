import React, {useState} from "react"
// import "./login.css"
import axios from "axios"
import $ from "jquery";
import { useHistory } from "react-router-dom"
import '../static/css/Login.css';
import "../static/css/NavBar.css";
import Navbar from "../utils/NavBar";
import Footer from "../utils/Footer";

function Login({ setLoginUser }) {

    const history = useHistory();

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const login = () => {
        axios.post("http://localhost:9002/login", user)
            .then(res => {
                alert(res.data.message);
                setLoginUser(res.data.user);
                history.push("/");
            });
    };

    return (
         <React.Fragment>
        <Navbar/>
        {/* <div className="login"> */}
        <div className="container">
         <section id="content">
         <form action="">
            <div className = "login-text"><h1>Login</h1></div>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email" id  = "username"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter your Password" id = "password"></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/register")}>Register</div>
         </form>
           </section>
           </div>
        {/* </div> */}
        <Footer/>
        </React.Fragment>

    );
}

export default Login