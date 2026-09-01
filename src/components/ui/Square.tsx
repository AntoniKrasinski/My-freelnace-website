import React from "react";

const Square = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-primary theme-border flex w-fit items-center justify-center p-2">
      {children}
    </div>
  );
};

export default Square;
