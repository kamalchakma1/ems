import style from "../styles/calender.module.css"
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { useState, useEffect } from "react";
// const isWeekend = (date) => {
//   const day = date.day();


//   return day === 0 || day === 6;
// };
export default function Calender({ getcurrentMonthYear,getCurrentDate}) {

  const [value, setValue] = useState(dayjs());
  
  const [workData, setWorkData] = useState("");

  const empPresent={
    emp1: "Kamal",
    emp2: "Kamio"
  }
  const workDate=value.get("date").toString()+"/"+value.get("month").toString()+"/"+value.get("year").toString();
  const currentData=value.get("month")+"/"+value.get("year");
  getcurrentMonthYear(currentData);
   
 useEffect(()=>{
 getCurrentDate(workDate)
 
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
    {/* <p>{cData}</p> */}

    </>
  );
}