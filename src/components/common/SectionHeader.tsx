import React from "react";

interface Prop {
  color: "surface" | "background";
  title: string;
  desc: string;
  h1: boolean;
}

const SectionHeader = ({ color, title, h1 = false, desc }: Prop) => {
  return (
    <div className="flex w-full flex-col items-start space-x-8 py-4 md:flex-row md:items-center">
      <div className={`bg-${color} theme-border px-4`}>
        {h1 ? <h1>{title}</h1> : <h2>{title}</h2>}
      </div>
      <p className="pt-4 md:max-w-[65%] md:pt-0">{desc}</p>
    </div>
  );
};

export default SectionHeader;
