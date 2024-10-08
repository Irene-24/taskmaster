import React from "react";

export default function DashboardSpinner() {
  return (
    <div className="min-h-screen bg-gray-100 flex ">
      {/* Sidebar skeleton */}
      <div className="w-64 bg-[hsl(221.2,83.2%,53.3%)] animate-pulse">
        <div className="p-4">
          <div className="h-8 bg-white/20 rounded w-3/4"></div>
        </div>
        <div className="mt-6 px-4 space-y-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center space-x-4">
              <div className="w-6 h-6 bg-white/20 rounded"></div>
              <div className="h-4 bg-white/20 rounded w-3/4"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Header skeleton */}
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <div className="w-48 h-8 bg-gray-200 rounded animate-pulse"></div>
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
            <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
          </div>
        </header>

        {/* Main content skeleton */}
        <main className="flex-1 p-6">
          <div className="max-w-6xl mx-auto space-y-6">
            {/* Title and button skeleton */}
            <div className="flex justify-between items-center">
              <div className="h-8 bg-gray-200 rounded w-1/4 animate-pulse"></div>
              <div className="h-10 bg-gray-200 rounded w-32 animate-pulse"></div>
            </div>

            {/* Cards skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Large card skeleton */}
              <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-white rounded-lg shadow-sm p-6 animate-pulse">
                <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
                <div className="space-y-3">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded w-16"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Small card skeleton */}
              <div className="bg-white rounded-lg shadow-sm p-6 animate-pulse">
                <div className="h-6 bg-gray-200 rounded w-1/2 mb-4"></div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Centered spinner */}
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50"></div>
      </div>
    </div>
  );
}
