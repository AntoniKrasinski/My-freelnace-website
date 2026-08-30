import React from "react";

const VerticalSpecialText = ({ text }: { text: string }) => {
  return (
    <div className="specialText flex flex-col items-stretch leading-none">
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
