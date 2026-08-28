import React from "react";

interface Prop {
  color: "surface" | "background";
  title: string;
  desc: string;
}

const SectionHeader = ({ color, title, desc }: Prop) => {
  return (
    <div className="flex w-full flex-col items-start space-x-8 py-4 md:flex-row md:items-center">
      <div className={`bg-${color} border-border border px-4`}>
        <h2>{title}</h2>
      </div>
      <p className="md:pt:0 pt-4 md:max-w-[65%]">{desc}</p>
    </div>
  );
};

export default SectionHeader;
