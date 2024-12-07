import React from 'react';

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-64 space-y-4">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
      <p className="text-lg font-medium text-gray-600">Loading, please wait...</p>
    </div>
  );
};

export default Loading;
