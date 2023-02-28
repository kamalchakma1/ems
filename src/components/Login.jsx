import style from "../styles/login.module.css"
// import Employees from "./Employees"
import img1 from "../images/image1.png"
import { Link } from "react-router-dom"
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom"


const Login=()=>{
    return(
        <>
       
        <div className={style.login}>
           <div className={style.login__Form}>
            <h3>Sign In</h3>
            <form>
                <input type="text" placeholder="   Email or Phone Number"/>
                <input type="password" placeholder="   Password"/>
                <button className={style.signInBtn}><Link to="employees">Sign In</Link></button>
                <p>Don't have account? <span className={style.createAccountTitle}><a href="#">Create One</a></span></p>
            </form>
           </div>
           <div className={style.login__Image}>
             <img src={img1} alt="working men"/>
           </div>
           <div className={style.fancyBox}></div>
        </div>
        </>
    )
}
export default Login