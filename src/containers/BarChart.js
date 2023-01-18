import {useState} from "react";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default function BarChart () {
  const [chartData, setChartData] = useState({
    labels: [ 'January', 'February', 'March' ],
    datasets: [ { data: [40, 20, 12] } ]
  });
  const [chartOptions, setChartOptions] = useState({
    responsive: true,
    maintainAspectRatio: false
  });

  return (
    <>
    <Bar
      options={chartOptions}
      data={chartData}
      chart-id="chartId"
      dataset-id-key="datasetIdKey"
      width={400}
      height={400}
    />
    </>
  );
}