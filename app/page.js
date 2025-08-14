"use client";
import { useEffect, useState } from "react";
import Topbar from "./components/Topbar";
import { KpiCard } from "./components/KpiCard";
import { BarChart } from "./components/BarChart";
import { DonutChart } from "./components/DonutChart";
import { Categories } from "./components/Categories";
import { StatsGrid } from "./components/StatsGrid";
import { Card, CardContent } from "./components/ui/card";

export default function Page() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/stats")
      .then((r) => r.json())
      .then(setData)
      .catch((e) => console.error(e));
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Topbar />
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="animate-pulse grid gap-6">
            <div className="h-10 bg-gray-200 rounded" />
            <div className="h-64 bg-gray-200 rounded" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Topbar />

      <main className="mx-auto max-w-7xl px-6 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT column (8) */}
        <section className="lg:col-span-8 space-y-6">
          {/* Total KYCs */}
          <Card>
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-gray-500">Total KYCs</div>
                  <div className="text-3xl font-bold text-gray-900">{data.totalKYC.total.toLocaleString()}</div>
                </div>
                {/* tabs - Today / This Month / Custom (visual only) */}
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 text-xs rounded-full bg-blue-600 text-white">Today</span>
                  <span className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700 border">This Month</span>
                  <span className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700 border">Custom</span>
                  <span className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700 border">12 Feb 2025</span>
                </div>
              </div>

              {/* two KPI cards */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <KpiCard
                  title="New KYC"
                  value={data.totalKYC.new.count.toLocaleString()}
                  change={data.totalKYC.new.change}
                  changeType="positive"
                  subtitle="12% up"
                />
                <KpiCard
                  title="Modified KYC"
                  value={data.totalKYC.modified.count.toLocaleString()}
                  change={Math.abs(data.totalKYC.modified.change)}
                  changeType="negative"
                  subtitle="Interop"
                />
              </div>
            </CardContent>
          </Card>

          {/* Bar chart */}
          <BarChart today={data.bar.today} yesterday={data.bar.yesterday} />

          {/* Status cards row */}
          <StatsGrid
            items={data.statusCards.map((s, i) => ({
              label: s.label,
              value: s.count,
              icon: ["🚀","⏳","📝","✅","⛔","📎"][i] || "📊",
            }))}
          />
        </section>

        {/* RIGHT column (4) */}
        <aside className="lg:col-span-4 space-y-6">
          {/* Categories */}
          <Categories categories={data.categories} />

          {/* Donut + below stats */}
          <DonutChart pie={data.pie} />

          {/* PAN & Data stats */}
          <div className="space-y-4">
            {/* Reuse simple cards */}
            <div className="grid gap-4">
              {/* PAN Solicited */}
              <Card>
                <CardContent className="py-4 px-5 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-gray-900">No. Of PANs Solicited</div>
                    <div className="text-xs text-gray-500">
                      {data.panStats.solicited.withImage} With Image &nbsp;&nbsp;
                      {data.panStats.solicited.total - data.panStats.solicited.withImage} Without Image
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{data.panStats.solicited.total}</div>
                </CardContent>
              </Card>

              {/* Data Received */}
              <Card>
                <CardContent className="py-4 px-5 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-gray-900">Data Received</div>
                    <div className="text-xs text-gray-500">
                      {data.panStats.received.withImage} With Image &nbsp;&nbsp;
                      {data.panStats.received.total - data.panStats.received.withImage} Without Image
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{data.panStats.received.total}</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
