"use client";
import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

export function DonutChart({ pie = { solicited: 400, received: 320, consumed: 290, pending: 30 } }) {
  const [mode, setMode] = useState("Solicited"); // "Solicited" | "Unsolicited" (visual only)

  const total = useMemo(
    () => pie.solicited, // center number from PDF
    [pie]
  );

  // Build circle segments
  const circumference = 2 * Math.PI * 45; // r = 45
  const segs = [
    { key: "Solicited", value: pie.solicited, color: "#0EA5E9" }, // cyan-500
    { key: "Received", value: pie.received, color: "#3B82F6" },   // blue-500
    { key: "Consumed", value: pie.consumed, color: "#0891B2" },   // cyan-600
    { key: "Pending", value: pie.pending, color: "#EF4444" },     // red-500
  ];
  const sum = segs.reduce((a, b) => a + b.value, 0);

  let offset = 0;
  const rings = segs.map((s, i) => {
    const dash = (s.value / sum) * circumference;
    const ring = (
      <circle
        key={s.key}
        r="45"
        cx="60"
        cy="60"
        fill="transparent"
        stroke={s.color}
        strokeWidth="10"
        strokeDasharray={`${dash} ${circumference - dash}`}
        strokeDashoffset={-offset}
        strokeLinecap="round"
      />
    );
    offset += dash + 4; // small gap
    return ring;
  });

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <Badge variant={mode === "Solicited" ? "default" : "outline"} onClick={() => setMode("Solicited")} className="cursor-pointer">
              Solicited
            </Badge>
            <Badge variant={mode === "Unsolicited" ? "default" : "outline"} onClick={() => setMode("Unsolicited")} className="cursor-pointer">
              Unsolicited
            </Badge>
          </div>
          <div className="flex gap-2">
            <Badge>Individual</Badge>
            <Badge>Non Individual</Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="flex items-center gap-6">
          {/* Donut */}
          <div className="relative">
            <svg width="120" height="120" viewBox="0 0 120 120" className="-rotate-90">
              {/* base */}
              <circle r="45" cx="60" cy="60" fill="transparent" stroke="#E5E7EB" strokeWidth="10" />
              {rings}
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center rotate-90">
              <div className="text-xs text-gray-500">Total</div>
              <div className="text-2xl font-bold text-gray-900">{total.toLocaleString()}</div>
            </div>
          </div>

          {/* Legend */}
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full inline-block" style={{ background: "#0EA5E9" }} /> No Of PANs Solicited
            </div>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full inline-block" style={{ background: "#3B82F6" }} /> Received
            </div>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full inline-block" style={{ background: "#0891B2" }} /> Consumed
            </div>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full inline-block" style={{ background: "#EF4444" }} /> Pending
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
