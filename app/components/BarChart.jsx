"use client";

export function BarChart() {
  return (
    <div className="bg-white rounded-lg shadow p-4 h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-2">
          <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">Today</span>
          <span className="border text-xs px-2 py-1 rounded">Yesterday</span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-end gap-4 h-48">
          <div className="flex flex-col items-center gap-2 flex-1">
            <div className="w-full bg-blue-600 rounded-t" style={{ height: "120px" }}></div>
            <div className="w-full bg-blue-300 rounded-t" style={{ height: "80px" }}></div>
            <span className="text-xs text-gray-600">Individual</span>
          </div>
          <div className="flex flex-col items-center gap-2 flex-1">
            <div className="w-full bg-blue-600 rounded-t" style={{ height: "100px" }}></div>
            <div className="w-full bg-blue-300 rounded-t" style={{ height: "60px" }}></div>
            <span className="text-xs text-gray-600">Non Individual</span>
          </div>
        </div>

        <div className="flex justify-between text-xs text-gray-500">
          <span>0</span>
          <span>100</span>
          <span>200</span>
          <span>300</span>
          <span>400</span>
        </div>
      </div>
    </div>
  );
}
