import React from "react";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "bgColor";
  type?: "submit" | "button"
}

const variants = {
  primary: "bg-primary text-white",
  secondary: "bg-surface text-black",
  bgColor: "bg-background text-black",
};

const Button = ({ children, variant = "primary", type = "button" }: Props) => {
  return (
    <button type={type} className={`${variants[variant]} theme-border px-8 py-1`}>
      {children}
    </button>
  );
};

export default Button;
