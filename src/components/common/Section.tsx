import React from "react";
import Container from "./Container";
import SectionHeader from "./SectionHeader";
interface Prop {
  children: React.ReactNode;
  title: string;
  desc: string;
  background?: "background" | "surface";
}
const Sections = ({ children, title, desc, background }: Prop) => {
  return (
    <Container background={background} className="py-8">
      <SectionHeader
        title={title}
        desc={desc}
        color={`${background === "surface" ? "background" : "surface"}`}
      ></SectionHeader>
      {children}
    </Container>
  );
};
export default Sections;
