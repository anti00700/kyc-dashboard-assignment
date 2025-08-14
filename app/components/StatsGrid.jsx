"use client";
import { Card, CardContent } from "../components/ui/card";

export function StatsGrid({
  items = [
    { label: "KYC Initiated", value: 234, icon: "🚀" },
    { label: "Under Process", value: 350, icon: "⏳" },
    { label: "Registered", value: 654, icon: "📝" },
    { label: "Validated", value: 269, icon: "✅" },
    { label: "Hold", value: 100, icon: "⛔" },
    { label: "Docs Pending", value: 96, icon: "📎" },
  ],
}) {
  return (
    <Card>
      <CardContent className="p-5">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {items.map((it) => (
            <div key={it.label} className="text-center">
              <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-50 text-lg">
                <span>{it.icon}</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">{it.value}</div>
              <div className="text-xs text-gray-500">{it.label}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
