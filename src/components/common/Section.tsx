import React from "react";
import Container from "./Container";
import SectionHeader from "./SectionHeader";
interface Prop {
  children: React.ReactNode;
  title: string;
  desc: string;
  id?: string;
  h1?: boolean;
  noH?: boolean;
  background?: "background" | "surface";
}
const Section = ({
  children,
  title,
  desc,
  id,
  h1 = false,
  noH = false,
  background,
}: Prop) => {
  return (
    <Container id={id} background={background} className="py-8">
      <SectionHeader
        title={title}
        desc={desc}
        color={`${background === "surface" ? "background" : "surface"}`}
        h1={h1}
        noH={noH}
      ></SectionHeader>
      {children}
    </Container>
  );
};
export default Section;
