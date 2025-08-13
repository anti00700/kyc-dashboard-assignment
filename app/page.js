"use client";
import Topbar from "./components/Topbar";
import { KpiCard } from "./components/KpiCard";
import { BarChart } from "./components/BarChart";
import { PieChart } from "./components/PieChart";
import { StatsGrid } from "./components/StatsGrid";
import { Users, FileText } from "lucide-react";

export default function Page() {
  return (

    <div className="space-y-6 p-6">
      <Topbar />
      {/* KPI Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <KpiCard
          title="New KYC"
          value="3,000"
          change="+12%"
          changeType="positive"
          subtitle="vs yesterday"
          icon={<Users className="h-6 w-6 text-blue-600" />}
        />
        <KpiCard
          title="Modified KYC"
          value="456"
          change="-10%"
          changeType="negative"
          subtitle="vs yesterday"
          icon={<FileText className="h-6 w-6 text-blue-600" />}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <BarChart />
        <PieChart />
      </div>

      {/* Status Cards */}
      <StatsGrid />
    </div>
  );
}
