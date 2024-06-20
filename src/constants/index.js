import {
    blackImg,
    blueImg,
    whiteImg,
    yellowImg,
  } from "../utils";

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
      to: "/iskopi",
      text: "Iskopi",
    },
    {
      id: 4,
      to: "/kontakt",
      text: "Kontakt",
    },
  ];