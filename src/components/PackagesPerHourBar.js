import {Bar} from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

import { barChartData } from "./FakeBarData";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
);

export const PackPerHourBarGraph = () => {
    const options = {}
    
    return <Bar options={options} data = {barChartData}/>;
};