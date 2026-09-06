
import { StaticImageData } from "next/image";

export interface CityCases {
  nominative: string; // Mianownik
  genitive: string; // Dopełniacz
  dative: string; // Celownik
  accusative: string; // Biernik
  instrumental: string; // Narzędnik
  locative: string; // Miejscownik
  vocative: string; // Wołacz
}

export interface LocationProps {
  city: CityCases;
  title: string;
  cityImage: StaticImageData;
  desc: string;
}
