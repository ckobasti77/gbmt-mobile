import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div
      id="footer"
      className={`z-[9999999] overflow-hidden flex justify-center py-4 border-t-2 border-blue-500 text-xs lg:text-xl text-nowrap bg-[url(/./assets/images/bg-mirror2.png)] bg-no-repeat bg-left bg-cover text-white`}
      style={{ backgroundPosition: window.innerWidth < 1024 && '50% 50%' }}
    >
      Copyright © {currentYear}
      <span className="ml-1 font-bold">Mobil Trend</span>. All rights
      reserved.
    </div>
  );
};

export default Footer;
