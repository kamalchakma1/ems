import style from "../styles/employees.module.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import UserCard from "./UserCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Employees=()=>{

    const[isOn, setIsOn] = useState(false);
    const[isAddEmployeeOpen, setIsAddEmployeeOpen] = useState(false);

    const show=()=>{
      isOn ? setIsOn(false) : setIsOn(true)
    }

    const showEmpForm=()=>{
      isAddEmployeeOpen ? setIsAddEmployeeOpen(false): setIsAddEmployeeOpen(true)
    }
    const closeAddEmpForm=()=>{
      isAddEmployeeOpen ? setIsAddEmployeeOpen(false): setIsAddEmployeeOpen(false)
    }

    // Add Emp Control form
    const [empName, setEmpName] = useState("");
    // adding data once submit

    const [empDatas, setEmpDatas] = useState([]);

    const sendData=(e)=>{
      e.preventDefault();
      if(empName){
      setEmpDatas(empName);
      setEmpName("");
      console.log(empDatas);    
      }
      
    }
 localStorage.setItem("Data","TestData")
    useEffect(()=>{
     localStorage.setItem("Name",empDatas)
    },[empDatas])
    return(
      <>
      <div className={style.empNav}>
        <div className={style.empNav__logo}>
            <h2>EMS</h2>
        </div>
        <div className={style.empNav__search}>
            <SearchIcon className={style.searchIcon} color="primary"/>
            <input type="text"/>
        </div>
        <div className={style.empNav__profile}>
          <h3 className={style.empNav__profile__userName}>Loki Thor</h3>
            <PersonIcon  className={style.profileIcon} onClick={show}/>
           
         
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
      <button className={style.addEmp} onClick={showEmpForm}><a href="#">Add Employee</a></button>
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
        
      </div>
      {
        isAddEmployeeOpen ? <div className={style.addUserForm}>
          <div className={style.addUserForm__form}>
            <h3>Add Employee</h3>
            <form>
              <label>Name</label>
              <input type="text" value={empName}  onChange={(e)=>{setEmpName(e.target.value)}}placeholder="Enter  Name"/>
              <label>Email</label>
              <input type="email" placeholder="Enter Email"/>
              <label>Role</label>
              <input type="text" placeholder="Enter Role"/>
              <label>Manager</label>
              <input type="text" placeholder="Enter Manager"/>
              <label>Department</label>
              <input type="text" placeholder="Enter Department"/>
              <button className={style.formBtn} onClick={sendData}>Save</button>
              <p className={style.formBtn__cancel} onClick={closeAddEmpForm}>Cancel</p>
            </form>
          </div> 
          </div>: null
      }
     
      
      </>
    )
}
export default Employees