"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

export function Categories({ categories = {
  individual: { ri: 76, nri: 44 },
  nonIndividual: { ri: 34, nri: 12 },
} }) {
  const [view, setView] = useState("Individual");

  const data = view === "Individual" ? categories.individual : categories.nonIndividual;

  const Bar = ({ label, value }) => (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-xs text-gray-500">
        <span>{label}</span><span>{value}%</span>
      </div>
      <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
        <div className="h-full bg-blue-500" style={{ width: `${value}%` }} />
      </div>
    </div>
  );

  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="text-base">Categories</CardTitle>
        <div className="flex gap-2">
          <Badge variant={view === "Individual" ? "default" : "outline"} className="cursor-pointer" onClick={() => setView("Individual")}>Individual</Badge>
          <Badge variant={view === "Non Individual" ? "default" : "outline"} className="cursor-pointer" onClick={() => setView("Non Individual")}>Non Individual</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <Bar label="RI" value={data.ri} />
        <Bar label="NRI" value={data.nri} />
      </CardContent>
    </Card>
  );
}
