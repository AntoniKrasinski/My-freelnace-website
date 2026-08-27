import React from "react";

const Slider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="specialText relative left-1/2 w-screen -translate-x-1/2 bg-[#F9FBFC] p-2">
      <div className="flex whitespace-nowrap">{children}</div>
    </div>
  );
};

export default Slider;
