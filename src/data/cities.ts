import type LocationProps from "@/types/locationProps";
import piotrkow from "../assets/images/cities/piotrkowTrybunalski.png";
import lodz from "../assets/images/cities/lodz.png";

const cities: Record<string, LocationProps> = {
  "piotrkow-trybunalski": {
    city: {
      nominative: "Piotrków Trybunalski",
      genitive: "Piotrkowa Trybunalskiego",
      dative: "Piotrkowowi Trybunalskiemu",
      accusative: "Piotrków Trybunalski",
      instrumental: "Piotrkowem Trybunalskim",
      locative: "Piotrkowie Trybunalskim",
      vocative: "Piotrkowie Trybunalski",
    },
    title: "string",
    cityImage: piotrkow,
    desc: "string",
  },

  belchatow: {
    city: {
      nominative: "Bełchatów",
      genitive: "Bełchatowa",
      dative: "Bełchatowowi",
      accusative: "Bełchatów",
      instrumental: "Bełchatowem",
      locative: "Bełchatowie",
      vocative: "Bełchatowie",
    },
    title: "string",
    cityImage: piotrkow,
    desc: "string",
  },

  "tomaszow-mazowiecki": {
    city: {
      nominative: "Tomaszów Mazowiecki",
      genitive: "Tomaszowa Mazowieckiego",
      dative: "Tomaszowowi Mazowieckiemu",
      accusative: "Tomaszów Mazowiecki",
      instrumental: "Tomaszowem Mazowieckim",
      locative: "Tomaszowie Mazowieckim",
      vocative: "Tomaszowie Mazowiecki",
    },
    title: "string",
    cityImage: piotrkow,
    desc: "string",
  },

  lodz: {
    city: {
      nominative: "Łódź",
      genitive: "Łodzi",
      dative: "Łodzi",
      accusative: "Łódź",
      instrumental: "Łodzią",
      locative: "Łodzi",
      vocative: "Łodzi",
    },
    title: "string",
    cityImage: lodz,
    desc: "string",
  },
};
export default cities;
