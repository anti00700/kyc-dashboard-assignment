"use client";
import { TrendingUp, TrendingDown } from "lucide-react";

export function KpiCard({ title, value, change, changeType, subtitle, icon }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm text-gray-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
        </div>
        {icon && <div className="p-2 bg-blue-50 rounded-lg">{icon}</div>}
      </div>

      <div className="flex items-center justify-between">
        {change && (
          <div
            className={`flex items-center gap-1 text-sm ${
              changeType === "positive" ? "text-green-600" : "text-red-600"
            }`}
          >
            {changeType === "positive" ? (
              <TrendingUp className="h-4 w-4" />
            ) : (
              <TrendingDown className="h-4 w-4" />
            )}
            {change}
          </div>
        )}
        {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
      </div>
    </div>
  );
}
