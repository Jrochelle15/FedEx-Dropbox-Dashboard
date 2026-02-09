import { Doughnut as DoughnutChart } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    plugins,
} from "chart.js";

import { fakeDonutData } from "./fakeDonutData";

// Register chart elements BEFORE using chart
ChartJS.register(
    ArcElement,
    Tooltip,
);

export const Doughnut = () => {
    const options = {
        plugins: {
            legend : {
                display : false
            }
        }
    };

    return (
        <DoughnutChart 
            options={options}
            data={fakeDonutData}
        />
    );
};
    