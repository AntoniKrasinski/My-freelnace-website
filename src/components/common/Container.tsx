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
    <section className={`bg-${background} ${className}`}>
      <div className={`container mx-auto p-4 px-6 md:px-12 lg:px-20`}>
        {children}
      </div>
    </section>
  );
}
