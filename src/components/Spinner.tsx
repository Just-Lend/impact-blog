import React from "react";

const Spinner: React.FC = () => (
  <div className="flex flex-col items-center justify-center py-16 text-gray-600">
    <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-t-transparent mb-4" />
    <p className="text-lg font-medium">Loading...</p>
  </div>
);

export default Spinner;
