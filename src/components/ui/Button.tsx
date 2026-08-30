import React from "react";

interface Props {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "background";
  type?: "submit" | "button";
}

const variants = {
  primary: "bg-primary ",
  secondary: "bg-surface",
  background: "bg-background",
};

const Button = ({ children, variant = "primary", type = "button" }: Props) => {
  return (
    <button
      type={type}
      className={`${variants[variant]} theme-border flex items-center justify-center px-8 py-1`}
    >
      {children}
    </button>
  );
};

export default Button;
