import Login from "./components/Login"
// import UserCard from "./components/UserCard"
import Attendance from "./components/Attendance"
import "./global.css"
import Employees from "./components/Employees"
import Home from "./components/Home"
import YearlyChart from "./components/YearlyChart"
import { BrowserRouter, Routes, Route } from "react-router-dom"
const App=()=>{
    return(
        <>
        
         <BrowserRouter>
          <Home/>   
          {/* <Login/>        */}
         <Routes>
             <Route element={<Employees/>} path="/employees"></Route>
             <Route element={<Login/>} path="/"></Route>
             <Route element={<Attendance/>} path="/attendance"></Route>
             <Route element={<YearlyChart/>} path="/yearly"></Route>
         </Routes>
         </BrowserRouter>
        </>
    )
}
export default App