import React from 'react';

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative">
        <div className="w-16 h-16 border-t-4 border-amber-700 border-solid rounded-full animate-spin"></div>
        <div className="mt-4 text-lg font-semibold text-gray-700">Loading...</div>
      </div>
    </div>
  );
}
