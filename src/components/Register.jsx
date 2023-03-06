import style from "../styles/register.module.css"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const Register=()=>{

    const navigate= useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const dataSave=(e)=>{
        e.preventDefault();
        if(name && email && password && confirmPassword){
            if(password == confirmPassword){
        const payload={name,email,password,confirmPassword}
        axios.post("http://localhost:5000/admin",payload)
        .then(()=>{
            alert("Data added Successfully")
        })
        .catch(()=>{
            alert("Data is unable to add")
        })
        
        // Making states empty
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        navigate("/");
    }else{
        alert("Password didn't match");
    }
    }
 
    }
    return(
        <>
        <div className={style.registerSection}>
           <h3>Register</h3>
            <form onSubmit={dataSave}>
                    
                    {/* <label>Name</label> */}
                    <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}placeholder=" Name"/>
                    {/* <label>Email</label> */}
                    <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder=" Email"/>
                    {/* <label>Password</label> */}
                    <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}placeholder=" Password"/>
                    {/* <label>Confirm Password</label> */}
                    <input type="password" value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}}placeholder=" Confirm Password"/>
                    <input type="submit" value="Register" className={style.registerBtn}/>
                    <p>Alread have an account?<Link to="/"> Login</Link></p>
            </form>

            
        </div>
         
        </>
    )
}
export default Register