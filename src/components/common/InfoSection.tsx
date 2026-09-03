import React from "react";
import Container from "./Container";
const InfoSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <div className="theme-border bg-surface p-12">{children}</div>
    </Container>
  );
};

export default InfoSection;
