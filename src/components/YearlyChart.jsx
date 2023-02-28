import { Bar } from "react-chartjs-2";
import style from "../styles/yearlyChart.module.css"
import { Link } from "react-router-dom"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const labels=["February","March","April","May"];

export const data={
    labels,
    datasets:[
        {
            label:"Present",
            data:["30","8","30","40"],
            backgroundColor:"rgba(3, 115, 252,0.5)",
            barThickness: 60,
        },
        {
            label:"Absence",
            data:["15","10","20","27"],
            backgroundColor:"rgba(252, 3, 231,0.5)",
            barThickness: 60,
        },
    ],
};

const options={};
const YearlyChart=()=>{
    return(
        <div className={style.yearlymain}>
       
        <div className={style.yearlyChartMain}>
            <button className={style.yearlyChartMain__btn}><Link to="/attendance">Back</Link></button>               
           <Bar options={options} data={data}/>
        </div>
        </div>
    )
}
export default YearlyChart