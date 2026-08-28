import React from "react";

const Slider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="specialText w-screen bg-[#F9FBFC] p-2">
      <div className="flex whitespace-nowrap">{children}</div>
    </div>
  );
};

export default Slider;
