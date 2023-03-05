import style from "../styles/attendance.module.css"
import {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import Calender from "./Calender"
import Style from "../styles/attendance.module.css"
import Chart from "./Chart"
import MarchChart from "./MarchChart"
import AprilChart from "./AprilChart"
import MayChart from "./MayChart"
import axios from "axios"

const Attendance=()=>{
   const [currentMonthYear,setcurrentMonthYear]=useState("");
   const getcurrentMonthYear=(currentMonthYearData)=>{
   setcurrentMonthYear(currentMonthYearData);
   }
const [serverData, setServerData]=useState([]);

useEffect(()=>{
 axios.get("http://localhost:5000/data")
 .then((response)=>{
   setServerData(response.data)
.catch(()=>{
   alert("Unable to get Data");
})
 })
},[])

let presentCount=0;
let absentCount=0
serverData.map((data)=>{
 if(data.status=="Present"){
   presentCount++;
 }else if(data.status=="Absent"){
   absentCount++;
 }
},[])
   // Employee Attendance Status Data //
   const[currentDate, setCurrentDate]=useState("");

   const getcurrentDate=(dataFromCalender)=>{
      setCurrentDate(dataFromCalender);
   }

   // Employee daily attendance status //
   // February Status
   let februaryStatus=[
      {
         Id:1,
         Name: "Kamal",
         EmployeeNumber: "A201",
         Status: "Present",
         Date: "01/02/2023"
      },
      {
         Id: 2,
         Name: "Lisa",
         EmployeeNumber: "A202",
         Status: "Absent",
         Date: "01/02/2023"
      }
   ]

   // March Status
   let marchStatus=[
      {
         Id:1,
         Name: "John",
         EmployeeNumber: "A2032",
         Status: "Absent",
         Date:"01/03/2023"

      },
      {
         Id:2,
         Name: "Wick",
         EmployeeNumber: "A2013",
         Status: "Present",
         Date:"01/03/2023"
      }
   ]

   // Current Status

   // let currentStatus=[
   //    {
   //       Id: 1,
   //       Name: "Tanya",
   //       EmployeeNumber: "A231",
   //       Status: "Present",
   //       Date:""

   //    },
   //    {
   //       Id: 2,
   //       Name: "Raj",
   //       EmployeeNumber: "A032",
   //       Status: "Absent",
   //       Date:""
   //    },
   //    {
   //       Id: 3,
   //       Name: "Jung",
   //       EmployeeNumber: "A153",
   //       Status: "Present",
   //       Date: ""
   //    }
   // ]

   // console.log("CurrentDate: "+ currentDate);
  

    return(
      <div className={Style.main}>
       <Link to="/employees"><button className={style.attendance__back}>Back</button></Link>
      <div className={style.attendance__topSection}>
         {/* <button className={style.attendance__topSection__monthlyBtn}>Monthly Status</button> */}
         {/* Calender */}
         <div className={style.attendance__calender} >

      <Calender className={style.calComp} getcurrentMonthYear={getcurrentMonthYear} getCurrentDate={getcurrentDate}/>
            
         </div>
         <div className={style.attendance__chart}>

            {
            currentMonthYear=="1/2023"?<Chart present={presentCount} absent={absentCount}/>: null
            }
            {
               currentMonthYear=="2/2023"?<MarchChart present={presentCount} absent={absentCount}/>:null
            }
            {
               currentMonthYear=="3/2023"?<AprilChart/>:null
            }
            {
               currentMonthYear=="4/2023"?<MayChart/>:null
            }
            <Link to="/yearly"><button className={style.seeYearlyBtn}>Yearly Status</button></Link>
         </div>
      </div>
      <div className={style.attendance__bottomSection}>
        <div className={style.attendance__bottomSection__displayData}>
         {/* <button className={style.attendance__bottomSection__displayData__btn}>Daily Status</button> */}
          <table>
            <thead>
             <tr>
               <th>Sl.No</th>
               {/* <th>Employee Number</th> */}
               <th>Employee Name</th>
               <th>Attendance Status</th>
               {/* <th>Date</th> */}
            </tr>
            </thead>
           
            

            {
               (currentDate==currentDate)? serverData.map((ele,key)=>{
               
                  return(
                      <>
                      <tbody key={ele.id}>
                        <tr >
                         <td>{ele.id}</td>
                         {/* <td>{ele.name}</td>  */}
                         <td>{ele.name}</td>
                         <td>{ele.status}</td>
                         {/* <td>{ele.date}</td> */}
                      </tr>
                     </tbody>
                      </>
                  )
               }): null
            }
            
            
          </table>
        </div>
      </div>

      
     </div>
    )
}
export default Attendance