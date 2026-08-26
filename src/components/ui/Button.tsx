import React from "react";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "bgColor";
}

const variants = {
  primary: "bg-primary text-white",
  secondary: "bg-surface text-black",
  bgColor: "bg-background text-black",
};

const Button = ({ children, variant = "primary" }: Props) => {
  return <button className={`${variants[variant]} py-1 px-8 border-black border-t border-r border-b-2 border-l-2 rounded-sm `}>{children}</button>;
};

export default Button;
