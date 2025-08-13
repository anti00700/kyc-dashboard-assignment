"use client";

export default function ProgressRow({ label, value }) {
  return (
    <div className="mt-3">
      <div className="flex justify-between text-sm">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="w-full bg-slate-100 rounded h-3 mt-2 overflow-hidden">
        <div
          style={{ width: `${value}%` }}
          className="h-3 bg-blue-500"
        ></div>
      </div>
    </div>
  );
}
