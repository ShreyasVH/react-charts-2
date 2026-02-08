import {useState} from "react";
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js';
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

export default function DoughnutChart (props) {
    const chartData = props.data;
    const chartId = props.id;
    const [chartOptions, setChartOptions] = useState({
        responsive: true,
        maintainAspectRatio: false
    });

    return (
        <div style={{ height: 400, width: 400, display: 'inline-block' }}>
            <Doughnut
                options={chartOptions}
                data={chartData}
                chart-id={chartId}
                dataset-id-key={chartId}
                width={400}
                height={400}
            />
        </div>
    );
}