import { StaticImageData } from "next/image";

export type Benefit = { title: string; img: StaticImageData };

export default interface serviceProps {
  name: string;
  heroTitle: string;
  heroDesc: string;
  sectionTitle: string;
  sectionDesc: string;
  benefits: Benefit[];
  process?: { title: string; desc: string }[];
  faq?: { question: string; anwser: string }[];
  workProcess?: { title: string; desc: string }[];
}
