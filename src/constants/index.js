import { blackImg, blueImg, whiteImg, yellowImg } from "../utils";

import { Smartphone, Settings, ShieldCheck } from "lucide-react";

export const cardsData = [
  {
    id: 1,
    icon: Smartphone,
    title: "Pouzdana Oprema",
    description:
      "Nudimo isključivo proverenu opremu vodećih brendova. Maske, stakla, punjači i ostali dodaci sa garancijom kvaliteta.",
    iconColor: "text-blue-500",
  },
  {
    id: 2,
    icon: Settings,
    title: "Precizna Popravka",
    description:
      "Servisirajmo sve modele telefona sa originalnim i kompatibilnim delovima. Brza dijagnostika i transparentni cenovnik.",
    iconColor: "text-green-500",
  },
  {
    id: 3,
    icon: ShieldCheck,
    title: "Sigurno Ulaganje",
    description:
      "Svi naši proizvodi i usluge dolaze sa garancijom. Vaši podaci i uređaji su u bezbednim rukama – bez skrivenih troškova.",
    iconColor: "text-purple-500",
  },
];

export const models = [
  {
    id: 1,
    title: "iPhone 15 Pro u Prirodnom Titanijumu",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "iPhone 15 Pro u Plavom Titanijumu",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: blueImg,
  },
  {
    id: 3,
    title: "iPhone 15 Pro u Belom Titanijumu",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "iPhone 15 Pro u Crnom Titanijumu",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: blackImg,
  },
];

export const sizes = [
  { label: '6.1"', value: "small" },
  { label: '6.7"', value: "large" },
];

export const navLinks = [
  {
    id: 1,
    to: "#pocetak",
    text: "Početak",
  },
  {
    id: 2,
    to: "#ajfon15",
    text: "iPhone 15 Pro",
  },
  {
    id: 3,
    to: "#maskice",
    text: "Maskice",
  },
  {
    id: 4,
    to: "#kontakt",
    text: "Kontakt",
  },
];

export const casesImages = [
  "/./assets/images/case1.png",
  "/./assets/images/case2.png",
  "/./assets/images/case3.png",
  "/./assets/images/case4.png",
  "/./assets/images/case5.png",
  "/./assets/images/case6.png",
  "/./assets/images/case7.png",
  "/./assets/images/case8.png",
];
