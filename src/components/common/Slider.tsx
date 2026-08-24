import React from "react";

const Slider = ({ children }: { children: React.ReactNode }) => {
  return <div className="relative left-1/2 w-screen -translate-x-1/2 bg-[#F9FBFC] p-2">{children}</div>;
};

export default Slider;
