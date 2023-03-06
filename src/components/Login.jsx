import style from "../styles/login.module.css"
import img1 from "../images/image1.png"
import { Link } from "react-router-dom"
import { useEffect, useState} from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const Login=()=>{

     const navigate= useNavigate();
    const[enteredEmail, setEnteredEmail] = useState("");
    const[enteredPassword, setEnteredPassword] = useState("");
    const[adminData, setAdminData] = useState([]);
    const[isMatched, setIsMatched] = useState(false);


    // Data from server
    

    useEffect(()=>{
        axios.get("http://localhost:5000/admin")
        .then((response)=>{
            setAdminData(response.data);
        })
        .catch(()=>{
            alert("Unable to get data from server");
        })
    },[])
    
    // sign in function
    const signInBtnFun=(e)=>{
        e.preventDefault();

        navigate("/employees");       

    }
    return(
        <>
       
        <div className={style.login}>
           <div className={style.login__Form}>
            <h3>Sign In</h3>
            <form>
                <input type="text" value={enteredEmail} onChange={(e)=>{setEnteredEmail(e.target.value)}} placeholder="   Email "/>
                <input type="password" value={enteredPassword} onChange={(e)=>{setEnteredPassword(e.target.value)}}placeholder="   Password"/>
                <button className={style.signInBtn} onClick={signInBtnFun}>Sign In</button>
                <p>Don't have an account? <span className={style.createAccountTitle}><Link to="/register">Register</Link></span></p>
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