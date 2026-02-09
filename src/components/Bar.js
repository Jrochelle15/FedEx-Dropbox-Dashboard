import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { dropBoxes } from "./dropbox";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

    

export const BarGraph = () => {
  const categorizeBox = (percentage) => {
    if (percentage <= 50) return "Underutilized";
    if (percentage <= 74) return "Good";
    return "Excellent";
  };

  const boxesByCategory = {
    Underutilized: [],
    Good: [],
    Excellent: [],
  };

  dropBoxes.forEach(({ capacity, MaxCapacity, locationAddress }) => {
    const percent = (capacity / MaxCapacity) * 100;
    const category = categorizeBox(percent);
    boxesByCategory[category].push(locationAddress);
  });

  const counts = {
    Underutilized: boxesByCategory.Underutilized.length,
    Good: boxesByCategory.Good.length,
    Excellent: boxesByCategory.Excellent.length,
  };

  const data = {
    labels: ["Underutilized (50% or less utilization)", "Good Utilization (51%-74% utilization)", "Excellent (75% or higher utilization)"],
    datasets: [
      {
        label: "Number of Boxes",
        data: [
          counts.Underutilized,
          counts.Good,
          counts.Excellent,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: "Box Capacity Utilization Categories",
        font: { size: 18 },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const category = context.label; 
            let key;
            if (category.startsWith("Underutilized")) key = "Underutilized";
            else if (category.startsWith("Good")) key = "Good";
            else if (category.startsWith("Excellent")) key = "Excellent";
            else key = null;

            if (key) {
              const boxList = boxesByCategory[key];
              const maxBoxesToShow = 50;
              const boxesToShow = boxList.slice(0, maxBoxesToShow);
              const moreBoxes = boxList.length - maxBoxesToShow;

              return [
                `${boxList.length} boxes:`,
                ...boxesToShow.map((loc) => `- ${loc}`),
                moreBoxes > 0 ? `...and ${moreBoxes} more` : null,
              ].filter(Boolean);
            }

            return `${context.parsed.y} boxes`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 1 },
        title: { display: true, text: "Number of Boxes" },
      },
      x: {
        title: { display: true, text: "Capacity Category" },
      },
    },
  };

  return <Bar data={data} options={options} />;
};
