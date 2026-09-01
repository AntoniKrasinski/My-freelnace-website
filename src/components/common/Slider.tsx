import React from "react";
import Marquee from "react-fast-marquee";

const Slider = ({
  children,
  backgroundColor = false,
}: {
  children: React.ReactNode;
  backgroundColor?: boolean;
}) => {
  return (
    <div
      className={`specialText w-screen ${backgroundColor ? `bg-background` : `bg-surface`} p-2`}
    >
      <Marquee autoFill>{children}</Marquee>
    </div>
  );
};

export default Slider;
