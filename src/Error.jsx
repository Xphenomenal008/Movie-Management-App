import React from "react";

const Error = (prop) => {
  return (
    <div className="p-4 text-center bg-red-100 border border-red-400 text-red-700 rounded-md">
      <p className="font-semibold">Error:</p>
      <p>{prop.message}</p>
    </div>
  );
};

export default Error;
