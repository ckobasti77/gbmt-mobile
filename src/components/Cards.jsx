import React from "react";
import { cardsData } from "../constants";

const Cards = () => {
  return (
    <div className="bg-[url(/./assets/images/bg-mirror2.png)] bg-no-repeat bg-left bg-cover min-h-screen px-6 lg:px-36 flex items-center flex-wrap lg:flex-nowrap gap-8">
      {cardsData.map((card) => {
        const Icon = card.icon;
        return (
          <div
            className="flex flex-col items-center justify-between py-12 px-3 lg:px-12 w-full lg:w-1/3 h-[40vh] lg:h-[60vh] border-4 border-[#e0e0e0] rounded-tr-md rounded-bl-md rounded-tl-3xl rounded-br-3xl"
            key={card.id}
          >
            <div className="grid place-items-center w-24 h-24 rounded-full border-4 border-[#e0e0e0] bg-transparent">
              <Icon className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-semibold">{card.title}</h3>
            <p className="text-center font-medium">{card.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
