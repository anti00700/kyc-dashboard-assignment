"use client";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function PieChart() {
  const data = {
    labels: [
      "No Of PANs Solicited",
      "Received",
      "Consumed",
      "Pending",
    ],
    datasets: [
      {
        data: [3456, 3200, 2900, 300],
        backgroundColor: ["#06b6d4", "#3b82f6", "#10b981", "#ef4444"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "75%",
    plugins: {
      legend: {
        position: "right",
        labels: { boxWidth: 12, color: "#6b7280" },
      },
    },
  };

  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
      <div style={{ width: "280px", height: "280px", position: "relative" }}>
        <Doughnut data={data} options={options} />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold">3,456</span>
          <span className="text-gray-500 text-sm">Total</span>
        </div>
      </div>
    </div>
  );
}
