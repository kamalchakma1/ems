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
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const labels=["March"];
export const data={
    labels,
    datasets:[
       {
        label:"Present",
        data:["8"],
        backgroundColor:"rgba(3, 115, 252,0.5)",
        barThickness: 190
       },
       {
        label:"Absence",
        data:["10"],
        backgroundColor:"rgba(252, 3, 231,0.5)",
        barThickness: 190
       },
    ],
};
const options={}
const MarchChart=()=>{
    return(
        <>
        <Bar options={options} data={data}/>

        </>
    )
}
export default MarchChart