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

const labels=["Daily Report"];

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options={}


const Chart=({present,absent})=>{
   const data = {
    labels,
    datasets: [
      {
        label: 'Pesent',
        data: [present],
        backgroundColor:"#90caf9",
        barThickness: 190,
        
      },
      {
        label: 'Absence',
        data: [absent],
        backgroundColor:"#ffb74d",
        barThickness: 190
      },
    ],
  };
    return(
        <>
         <Bar options={options} data={data}/>
        </>
    )
}
export default Chart