"use client";
import { Bell, Search } from "lucide-react";

export default function Topbar() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-4">
        {/* Row 1: Title + right controls */}
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>

          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search intermediaries"
                className="w-72 rounded-lg border border-gray-300 pl-9 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Notifications */}
            <button className="rounded-full p-2 hover:bg-gray-100">
              <Bell className="h-5 w-5 text-gray-600" />
            </button>

            {/* Profile */}
            <div className="flex items-center gap-3">
              <img
                src="/Profile.jpg"
                alt="Profile"
                className="h-8 w-8 rounded-full object-cover"
              />
              <div className="leading-tight">
                <div className="text-sm font-medium text-gray-900">Madhu Kumar</div>
                <div className="text-xs text-gray-500">May 19, 2024</div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Breadcrumb */}
        <div className="mt-3 text-sm text-gray-500">
          <span className="text-gray-400">Home</span> <span className="mx-1">/</span>{" "}
          <span className="text-gray-800 font-medium">Dashboard</span>
        </div>
      </div>
    </header>
  );
}
