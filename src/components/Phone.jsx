import { PhoneCallIcon } from "lucide-react";
import React from "react";

const Phone = () => {
  return (
    <a
      href="tel:+381621793800"
      className="fixed bottom-6 left-6 link h-12 w-12 bg-green-600 rounded-full grid lg:hidden place-items-center text-white"
    >
      <PhoneCallIcon />
    </a>
  );
};

export default Phone;
