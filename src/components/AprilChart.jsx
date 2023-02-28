import { Bar } from "react-chartjs-2";
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
const labels=["April"];
export const data={
    labels,
    datasets:[
        {
            label:"Present",
            data:["30"],
            backgroundColor:"rgba(3, 115, 252,0.5)",
            barThickness: 190

        },
        {
           label:"Absence",
           data:["20"] ,
           backgroundColor:"rgba(252, 3, 231,0.5)",
           barThickness: 190
        },
    ],
};
const options={};
const AprilChart=()=>{
    return(
        <Bar options={options} data={data}/>
    )
}
export default AprilChart