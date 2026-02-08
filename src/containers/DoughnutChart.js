import {useState} from "react";
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js';
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

export default function DoughnutChart () {
    const [chartData, setChartData] = useState({
        labels: [ 'January', 'February', 'March' ],
        datasets: [ { label: 'My Doughnut Chart', data: [40, 20, 12],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1
            }
        ]
    });
    const [chartOptions, setChartOptions] = useState({
        responsive: true,
        maintainAspectRatio: false
    });

    return (
        <div style={{ height: 400, width: 400 }}>
            <Doughnut
                options={chartOptions}
                data={chartData}
                chart-id="doughnutChart"
                dataset-id-key="doughnutChartIdKey"
                width={400}
                height={400}
            />
        </div>
    );
}