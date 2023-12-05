import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: "top",
    },
  },
};

export default function App({ data }) {
  const labels = data.map((item) => item.name);

  const chart = {
    labels,
    datasets: [
      {
        data: data.map((item) => item.usage),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };
  return (
    <div>
      <h5 className="text-center">TOP 5 CAR USAGE THIS MONTH</h5>
      <Bar options={options} data={chart} />
    </div>
  );
}
