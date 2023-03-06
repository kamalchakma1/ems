import style from "../styles/calender.module.css"
import dayjs from 'dayjs';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { useState, useEffect } from "react";

// import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
// const isWeekend = (date) => {
//   const day = date.day();

//Test
//   return day === 0 || day === 6;
// };
export default function Calender({ getcurrentMonthYear,getCurrentDate}) {

  const [value, setValue] = useState(dayjs());
  
  const [workData, setWorkData] = useState("");

  // const empPresent={
  //   emp1: "Kamal",
  //   emp2: "Kamio"
  // }

   // Selected Year
   let selectedYear=value.get("year");

   // Selected Month
   let selectedMonth=value.get("month");
   if(selectedMonth==0){
    selectedMonth=1;
  }else if(selectedMonth == 1){
    selectedMonth=2
  }else if(selectedMonth == 2){
    selectedMonth=3
  }else if(selectedMonth == 3){
    selectedMonth=4
  }else if(selectedMonth == 4){
    selectedMonth=5
  }else if(selectedMonth == 5){
    selectedMonth=6
  }
 // Adding Zero if month is single digits 

 if(selectedMonth<=9){
  selectedMonth='0'+selectedMonth;
 }

 // Date
 let selectedDate=value.get("date")

 // Adding Zero if date is single digit
 if(selectedDate <=9 ){
  selectedDate='0'+selectedDate;
 }

  // working days
  const workDate=selectedYear+"-"+selectedMonth+"-"+selectedDate

   
  const currentData=value.get("month")+"/"+value.get("year");
  getcurrentMonthYear(currentData);
   
 useEffect(()=>{
 getCurrentDate(workDate)
 console.log("Working Date: "+workDate)
 },[value])


  return (
    <>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker
        orientation="potrait"
        // openTo="day"
        value={value}
        // shouldDisableDate={isWeekend}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        
        // renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
    <p>{workData}</p>
    </>
  );
}
