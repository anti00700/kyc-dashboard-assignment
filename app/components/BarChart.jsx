"use client";
import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export function BarChart() {
  const [timeRange, setTimeRange] = useState("Today");
  const [viewType, setViewType] = useState("Individual");

  const data = {
    labels: ["Individual", "Non Individual"],
    datasets: [
      {
        label: "Today",
        data: [350, 300],
        backgroundColor: "#2563eb",
        borderRadius: 6,
        barPercentage: 0.4,
      },
      {
        label: "Yesterday",
        data: [280, 240],
        backgroundColor: "#93c5fd",
        borderRadius: 6,
        barPercentage: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: { boxWidth: 12, color: "#6b7280" },
      },
    },
    scales: {
      y: {
        ticks: { color: "#6b7280", stepSize: 50 },
        grid: { color: "#e5e7eb" },
      },
      x: {
        ticks: { color: "#6b7280" },
        grid: { display: false },
      },
    },
  };

  return (
    <div className="bg-white rounded-xl shadow p-4">
      {/* Tabs */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2">
          {["Today", "Yesterday"].map((t) => (
            <button
              key={t}
              onClick={() => setTimeRange(t)}
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                timeRange === t
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="flex gap-2">
          {["Individual", "Non Individual"].map((v) => (
            <button
              key={v}
              onClick={() => setViewType(v)}
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                viewType === v
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div style={{ height: "250px" }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
