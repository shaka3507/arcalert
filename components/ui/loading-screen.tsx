"use client";

import React from 'react';

const LoadingScreen = ({ message = '' }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="text-center">
        {/* Loader animation using Tailwind for sizing and positioning */}
        <div className="loader border-4 border-t-transparent border-white-500 rounded-full w-16 h-16 animate-spin mb-4"></div>
        <p className="text-lg font-semibold text-gray-700">{message && message}</p>
      </div>
    </div>
  );
};

export default LoadingScreen;