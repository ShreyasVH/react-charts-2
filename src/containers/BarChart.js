import {useState} from "react";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default function BarChart () {
  const [chartData, setChartData] = useState({
    labels: [ 'January', 'February', 'March' ],
    datasets: [ { label: 'My Bar Chart', data: [40, 20, 12], backgroundColor: 'rgba(255, 99, 132, 0.2)', borderColor: 'rgb(255, 99, 132)', borderWidth: 1 } ]
  });
  const [chartOptions, setChartOptions] = useState({
    responsive: true,
    maintainAspectRatio: false
  });

  return (
      <div style={{ height: 400, width: 400 }}>
          <Bar
            options={chartOptions}
            data={chartData}
            chart-id="barChart"
            dataset-id-key="barChartIdKey"
            width={400}
            height={400}
          />
      </div>
  );
}