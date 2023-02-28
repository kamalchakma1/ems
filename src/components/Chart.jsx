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

const labels=["February"];

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options={}
export const data = {
  labels,
  datasets: [
    {
      label: 'Pesent',
      data: ["30"],
      backgroundColor:"rgba(3, 115, 252,0.5)",
      barThickness: 190,
      
    },
    {
      label: 'Absence',
      data: ["15"],
      backgroundColor:"rgba(252, 3, 231,0.5)",
      barThickness: 190
    },
  ],
};

const Chart=()=>{
    return(
        <>
         <Bar options={options} data={data}/>
        </>
    )
}
export default Chart