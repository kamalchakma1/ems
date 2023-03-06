import style from "../styles/employees.module.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import UserCard from "./UserCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios"
const Employees=()=>{

  const navigate= useNavigate();

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
    };

    // Data from server
     const[serverData, setServerData]=useState([])

    // Add Emp Control form

    const [name, setName]=useState("");
    const [role, setRole]=useState("");
    const [status, setStatus]=useState("");
    const [date, setDate] =useState("");
    
    // const [allData, setAllData]=useState();

// counting number of absent and present
// let presentCount=0;
// let absentCount=0;
// serverData.map((data)=>{
//   if(data.status==="Present"){
//     presentCount++;
//   }else if(data.status==="Absent"){
//     absentCount++;
//   }
// })
// console.log(presentCount);
// console.log(absentCount);

const dataSend=()=>{
  if(name && role && status && date){
  let payload={name,role,status,date};
 
  axios.post("http://localhost:5000/data",payload)
  .then(()=>{
    // alert("Emplyee is Added")
  })
  .catch(()=>{
    alert("Unable to add Employee");
  })
  // Making all states Empty
  setName("");
  setRole("");
  setStatus("");
  setDate("");
  navigate("/employees")
  // window.location.reload();
  isAddEmployeeOpen ? setIsAddEmployeeOpen(false): setIsAddEmployeeOpen(false)
}else{
  alert("Please fill all data");
}
}

// Getting Data from Server
useEffect(()=>{
  axios.get("http://localhost:5000/data")
  .then((response)=>{
    setServerData(response.data);
  })
  .catch(()=>{
    alert("Unable to get data from Server")
  })
  

},[serverData])

// console.log("Data")
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
      <a href="#"><button className={style.addEmp} onClick={showEmpForm}>Add Employee</button></a>
      <Link to="/attendance"><button className={style.attendanceBtn}>Total Attendance</button></Link>
      <div className={style.empContainer}>
      
      {
        serverData.map((data)=>{
                
         return(
              <UserCard name={data.name} role={data.role} status={data.status} date={data.date} id={data.id}/>                 
         )
        })
      }
        
        
      </div>
      {
        isAddEmployeeOpen ? <div className={style.addUserForm}>
          <div className={style.addUserForm__form}>
            <h3>Add Employee</h3>
            <form>
              <label>Name</label>
              <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}placeholder="Enter  Name"/>
              <label>Role</label>
              <input type="text" value={role} onChange={(e)=>{setRole(e.target.value)}} placeholder="Enter Role"/>
              <label>Status</label>
              <select value={status} onChange={(e)=>{setStatus(e.target.value)}}>
                <option>Select</option>
                <option>Present</option>
                <option>Absent</option>
              </select>
              <label>Date</label>
              <input type="date" value={date} onChange={(e)=>{setDate(e.target.value)}} placeholder="Enter Department"/>
              <button className={style.formBtn} onClick={dataSend}>Save</button>
              <p className={style.formBtn__cancel} onClick={closeAddEmpForm}>Cancel</p>
            </form>
          </div> 
          </div>: null
      }
     
      
      </>
    )
}
export default Employees