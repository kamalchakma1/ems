import style from "../styles/attendance.module.css"
import {useState} from "react"
import { Link } from "react-router-dom"
import Calender from "./Calender"
import Style from "../styles/attendance.module.css"
import Chart from "./Chart"
import MarchChart from "./MarchChart"
import AprilChart from "./AprilChart"
import MayChart from "./MayChart"

const Attendance=()=>{
   const [currentMonthYear,setcurrentMonthYear]=useState("");
   const getcurrentMonthYear=(currentMonthYearData)=>{
   setcurrentMonthYear(currentMonthYearData);
   }

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
    return(
      <div className={Style.main}>
        <button className={style.attendance__back}><Link to="/employees">Back</Link></button>
      <div className={style.attendance__topSection}>
         <button className={style.attendance__topSection__monthlyBtn}>Monthly Status</button>
         {/* Calender */}
         <div className={style.attendance__calender} >

      <Calender className={style.calComp} getcurrentMonthYear={getcurrentMonthYear} getCurrentDate={getcurrentDate}/>
            
         </div>
         <div className={style.attendance__chart}>

            {
            currentMonthYear=="1/2023"?<Chart/>: null
            }
            {
               currentMonthYear=="2/2023"?<MarchChart/>:null
            }
            {
               currentMonthYear=="3/2023"?<AprilChart/>:null
            }
            {
               currentMonthYear=="4/2023"?<MayChart/>:null
            }
            <button className={style.seeYearlyBtn}><Link to="/yearly">Yearly Status</Link></button>
         </div>
      </div>
      <div className={style.attendance__bottomSection}>
        <div className={style.attendance__bottomSection__displayData}>
         <button className={style.attendance__bottomSection__displayData__btn}>Daily Status</button>
          <table>
            <thead>
             <tr>
               <th>Sl.No</th>
               <th>Employee Number</th>
               <th>Employee Name</th>
               <th>Attendance Status</th>
               <th>Date</th>
            </tr>
            </thead>
           
            {
              (currentDate=="1/1/2023")? februaryStatus.map((ele,key)=>{
                  return(
                     <>
                     <tbody  key={ele.Id}>
                        <tr>
                         <td>{ele.Id}</td>
                         <td>{ele.EmployeeNumber}</td> 
                         <td>{ele.Name}</td>
                         <td>{ele.Status}</td>
                         <td>{ele.Date}</td>
                      </tr>
                     </tbody>
                      </>
                  )
               }): null
            }

            {
               (currentDate=="1/2/2023")? marchStatus.map((ele,key)=>{
                  return(
                      <>
                      <tbody key={ele.Id}>
                        <tr >
                         <td>{ele.Id}</td>
                         <td>{ele.EmployeeNumber}</td> 
                         <td>{ele.Name}</td>
                         <td>{ele.Status}</td>
                         <td>{ele.Date}</td>
                      </tr>
                     </tbody>
                      </>
                  )
               }): null
            }
            {/* {
               (currentDate==currentDate)?currentStatus.map((ele)=>{
                   return(
                      <>
                      <tr key={ele.Id}>
                         <td>{ele.Id}</td>
                         <td>{ele.EmployeeNumber}</td> 
                         <td>{ele.Name}</td>
                         <td>{ele.Status}</td>
                         <td>{currentDate}</td>
                      </tr>
                      </>
                  )
               }):null
            } */}
            
            
          </table>
        </div>
      </div>

      
     </div>
    )
}
export default Attendance