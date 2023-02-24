import style from "../styles/employees.module.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import UserCard from "./UserCard";
import { useState } from "react";
import { Link } from "react-router-dom";
const Employees=()=>{

    const[isOn, setIsOn] = useState(false);

    const show=()=>{
      isOn ? setIsOn(false) : setIsOn(true)
    }
    return(
      <>
      <div className={style.empNav}>
        <div className={style.empNav__logo}>
            <h2>EMS</h2>
        </div>
        <div className={style.empNav__search}>
            <SearchIcon className={style.searchIcon}/>
            <input type="text"/>
        </div>
        <div className={style.empNav__profile}>
          <h3 className={style.empNav__profile__userName}>Loki Thor</h3>
            <PersonIcon className={style.profileIcon} onClick={show}/>
           
         
            {
             isOn ? <div className={style.empNav__profile__showMenu}>
                <a href="#">Profile</a>
                {/* <a href="#">Logout</a> */}
                <Link to="/">Logout</Link>
               </div> : null 
            }
            
            {/* <h3>Himansi</h3>
            <h3><a href="#">Logout</a></h3> */}
        </div>
      </div>
      <button className={style.addEmp}><a href="#">Add Employee</a></button>
      <button className={style.attendanceBtn}><Link to="/attendance">Total Attendance</Link></button>
      <div className={style.empContainer}>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
        <UserCard/>
      </div>
      </>
    )
}
export default Employees