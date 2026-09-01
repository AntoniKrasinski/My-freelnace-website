import CityCases from "./cityCases";
import { StaticImageData } from "next/image";

export default interface LocationProps {
  city: CityCases;
  title: string;
  cityImage: StaticImageData;
  desc: string;
}
