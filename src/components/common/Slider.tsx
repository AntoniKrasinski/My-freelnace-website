import React from "react";

const Slider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative left-1/2 w-screen -translate-x-1/2 bg-[#F9FBFC] p-2 specialText ">
      <div className="flex whitespace-nowrap">{children}</div>
    </div>
  );
};

export default Slider;
