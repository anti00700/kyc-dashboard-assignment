"use client";
import { Card, CardContent } from "../components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "../lib/utils";

export function KpiCard({ title, value, change, changeType = "positive", subtitle }) {
  return (
    <Card className="shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
      <CardContent className="p-5">
        <p className="text-xs text-gray-500">{title}</p>
        <div className="mt-1 text-3xl font-bold text-gray-900">{value}</div>

        <div className="mt-3 flex items-center justify-between">
          {change != null && (
            <span
              className={cn(
                "inline-flex items-center gap-1 text-xs font-medium",
                changeType === "positive" ? "text-green-600" : "text-red-600"
              )}
            >
              {changeType === "positive" ? (
                <TrendingUp className="h-4 w-4" />
              ) : (
                <TrendingDown className="h-4 w-4" />
              )}
              {change}%
            </span>
          )}
          {subtitle && <span className="text-xs text-gray-400">{subtitle}</span>}
        </div>
      </CardContent>
    </Card>
  );
}
