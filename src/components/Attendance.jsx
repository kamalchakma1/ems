import style from "../styles/attendance.module.css"
import {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import Calender from "./Calender"
import Style from "../styles/attendance.module.css"
import Chart from "./Chart"
import axios from "axios"
const Attendance=()=>{
   const [currentMonthYear,setcurrentMonthYear]=useState("");
   const[currentDate, setCurrentDate]=useState("");
   const getcurrentMonthYear=(currentMonthYearData)=>{
   setcurrentMonthYear(currentMonthYearData);
   }
const [serverData, setServerData]=useState([]);

useEffect(()=>{
 axios.get("http://localhost:5000/data")
 .then((response)=>{
   setServerData(response.data)
 })
.catch(()=>{
   alert("Unable to get Data");
})

},[])

let presentCount=0;
let absentCount=0

// if currentDate is equal to date(where emp are present or absent)
// then count and set presentCount and absentCount
serverData.map((data)=>{
   //currentDate is equal to attendance date(date from data from server)
   if(currentDate== data.date){
 if(data.status=="Present"){
   presentCount++;
 }else if(data.status=="Absent"){
   absentCount++;
 }}
},[])

   // Employee Attendance Status Data //
   const getcurrentDate=(dataFromCalender)=>{
      setCurrentDate(dataFromCalender);
   }

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

            
            <Chart present={presentCount} absent={absentCount}/>
            
           
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
               <th>Date</th>
            </tr>
            </thead>
           
            

            {
               (currentDate==currentDate)? serverData.map((ele,key)=>{
               
               if(currentDate==ele.date){
                  return(
                      <>
                      <tbody key={ele.id}>
                        <tr >
                         <td>{ele.id}</td>
                         {/* <td>{ele.name}</td>  */}
                         <td>{ele.name}</td>
                         <td>{ele.status}</td>
                         <td>{ele.date}</td>
                      </tr>
                     </tbody>
                      </>
                  )
               }
               }): null
            }
            
            
          </table>
        </div>
      </div>

      
     </div>
    )
}
export default Attendance