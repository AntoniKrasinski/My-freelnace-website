import React from "react";

const VerticalSpecialText = ({ text }: { text: string }) => {
  return (
    <div className="flex flex-col specialText leading-none">
      {text
        .toUpperCase()
        .split("")
        .map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
    </div>
  );
};

export default VerticalSpecialText;
