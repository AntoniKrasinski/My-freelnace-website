import React from "react";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "bgColor";
}

const variants = {
  primary: "bg-[#F97B48] text-white",
  secondary: "bg-[#F9FBFC] text-black",
  bgColor: "bg-[#FFF8E4] text-black",
};

const Button = ({ children, variant = "primary" }: Props) => {
  return <button className={`${variants[variant]} py-1 px-4 border-black border-t border-r border-b-2 border-l-2 rounded-sm `}>{children}</button>;
};

export default Button;
