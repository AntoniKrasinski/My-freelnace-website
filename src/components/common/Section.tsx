import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  background?: "background" | "surface";
  className?: string;
}

export default function Section({
  children,
  background = "background",
  className,
}: Props) {
  return (
    <section className={`bg-${background}`}>
      <div className={`container mx-auto px-8 md:px-20 lg:px-28 p-4 ${className}`}>
        {children}
      </div>
    </section>
  );
}
