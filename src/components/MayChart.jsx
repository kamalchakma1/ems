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
const labels=["Employee Reports"];

 
const options={};

const MayChart=({present,absent})=>{
    const data={
        labels,
        datasets:[
            {
                label:"Present",
                data:[present],
                backgroundColor:"rgba(3, 115, 252,0.5)",
                barThickness: 190,
            },
            {
                label:"absent",
                data:[absent],
                backgroundColor:"rgba(252, 3, 231,0.5)",
                barThickness: 190,
               
            },
           
        ],
    };
    
    return(
        <>
        <Bar options={options} data={data}/>
        </>
    )
}
export default MayChart