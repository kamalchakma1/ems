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
const labels=["May"];

export const data={
    labels,
    datasets:[
        {
            label:"Present",
            data:["40"],
            backgroundColor:"rgba(3, 115, 252,0.5)",
            barThickness: 190,
        },
        {
            label:"Absence",
            data:["27"],
            backgroundColor:"rgba(252, 3, 231,0.5)",
            barThickness: 190,
           
        },
       
    ],
};

const options={};

const MayChart=()=>{
    return(
        <>
        <Bar options={options} data={data}/>
        </>
    )
}
export default MayChart