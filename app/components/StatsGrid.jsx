"use client";
import { Rocket, Flame, Zap, CheckCircle, Users, AlertTriangle } from "lucide-react";

const stats = [
  { label: "KYC Initiated", value: "234", icon: Rocket, color: "bg-blue-50 text-blue-600" },
  { label: "In Process", value: "45", icon: Flame, color: "bg-orange-50 text-orange-600" },
  { label: "Registered", value: "350", icon: Zap, color: "bg-green-50 text-green-600" },
  { label: "Validated", value: "654", icon: CheckCircle, color: "bg-green-50 text-green-600" },
  { label: "Data Pending", value: "269", icon: Users, color: "bg-cyan-50 text-cyan-600" },
  { label: "Docs Pending", value: "100", icon: AlertTriangle, color: "bg-red-50 text-red-600" },
];

export function StatsGrid() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-2">
          <span className="border text-xs px-2 py-1 rounded">Today</span>
          <span className="border text-xs px-2 py-1 rounded">Yesterday</span>
        </div>
        <div className="flex gap-4 text-sm">
          <span>Individual</span>
          <span>Non Individual</span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center mx-auto mb-2`}>
              <stat.icon className="h-6 w-6" />
            </div>
            <div className="text-2xl font-bold mb-1">{stat.value}</div>
            <div className="text-xs text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
