import Login from "./components/Login"
// import UserCard from "./components/UserCard"
import Attendance from "./components/Attendance"
import "./global.css"
import Employees from "./components/Employees"
import Home from "./components/Home"
import YearlyChart from "./components/YearlyChart"
import Register from "./components/Register"
import { BrowserRouter, Routes, Route } from "react-router-dom"
const App=()=>{

    const isSignIn=localStorage.getItem("isSignIn");
    return(
        <>
        
         <BrowserRouter>
          <Home/>   
          {/* <Login/>        */}
         <Routes>
            {
            
               isSignIn?<Route element={<Employees/>} path="/employees"></Route>:null

            }
             <Route element={<Login/>} path="/"></Route>
             {
            isSignIn?<Route element={<Attendance/>} path="/attendance"></Route>: null                  
             }
             {
                isSignIn?<Route element={<YearlyChart/>} path="/yearly"></Route>: null
             }
            {
                  isSignIn?<Route element={<Register/>} path="/register"></Route>: null
            }
            
         </Routes>
         </BrowserRouter>
        </>
    )
}
export default App