import React from "react";
import Marquee from "react-fast-marquee";

const Slider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="specialText w-screen bg-[#F9FBFC] p-2"><Marquee autoFill>{children}</Marquee></div>
  );
};

export default Slider;
