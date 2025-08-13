"use client";

import { Search, Bell } from "lucide-react";
import Image from "next/image";

export default function Topbar() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Page Title */}
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>

        {/* Right side controls */}
        <div className="flex items-center gap-4">
          {/* Search box */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search here..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
            />
          </div>

          {/* Notification button */}
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Bell className="h-5 w-5 text-gray-600" />
          </button>

          {/* User profile */}
          <div className="flex items-center gap-2">
            <Image
              src="/profile.jpg"
              alt="Profile"
              width={32}
              height={32}
              className="rounded-full"
            />
            <div className="text-sm">
              <div className="font-medium">Madhu Kumar</div>
              <div className="text-gray-500">May 19, 2024</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
