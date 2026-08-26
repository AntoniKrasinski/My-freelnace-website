import React from "react";

interface Prop {
  color: "surface" | "background";
  title: string;
  desc: string;
}

const SectionHeader = ({ color, title, desc }: Prop) => {
  return (
    <div className="flex items-center space-x-8 py-4">
      <div className={`bg-${color} border border-border px-4`}>
        <h2>{title}</h2>
      </div>
      <p className="max-w-[65%]">{desc}</p>
    </div>
  );
};

export default SectionHeader;
