import React from "react";

const VerticalSpecialText = ({ text }: { text: string }) => {
  return (
    <div className="specialText flex flex-col leading-none">
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
