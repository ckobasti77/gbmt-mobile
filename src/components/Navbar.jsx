import React, { useCallback, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { navLinks } from "../constants";
import { scrollToTop } from "./ScrollToTop";
import Burger from "./Burger";

const Navbar = () => {
  useGSAP(() => {
    gsap.to(".link", {
      opacity: 1,
      fontWeight: 600,
      duration: 1,
      stagger: 0.25,
    });
  }, []);

  const [showNav, setShowNav] = useState(true);
  const [navOpen, setNavOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollPos = window.scrollY;
      const visible = scrollPos > currentScrollPos;
      setScrollPos(currentScrollPos);
      setShowNav(visible);
      setNavOpen(false);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollPos]);

  const toggleNav = useCallback(() => {
    setNavOpen((prev) => !prev);
  }, []);

  return (
    <ul
      className={`text-whote fixed top-0 w-full py-6 px-6 lg:px-36 flex items-center justify-between text-lg z-[999999] transition-all lg:hover:backdrop-blur-lg ${
        showNav ? "transform-none " : "transform -translate-y-full"
      }`}
    >
      <a
        href="#pocetak"
        className="link text-5xl opacity-0 cursor-pointer font-bold tracking-widest text-blue-500"
      >
        {/* <img src="/./assets/images/logo-name.avif" alt="logo" width="150" /> */}
        <h1 className="font-bold text-[2.5rem] tracking-normal text-white italic">Mobil Trend</h1>
      </a>
      <Burger navOpen={navOpen} toggleNav={toggleNav} />
      <div
        className={`border-b-4 border-blue-500 lg:border-none py-8 lg:py-0 z-[9999999] rounded-b-xl  lg:rounded-b-none backdrop-blur-lg lg:backdrop-blur-none lg:bg-none flex flex-col lg:flex-row w-48 lg:w-auto items-center gap-x-8 fixed lg:static top-20 ${navOpen ? "right-0" : "-right-full"} transition-all gap-y-8`}
      >
        {navLinks.map((link) => (
          <a
            onClick={() => {
              setNavOpen(false);
              scrollToTop();
            }}
            key={link.id}
            href={link.to}
            className={`link z-50 opacity-0 cursor-pointer`}
          >
            {link.text}
          </a>
        ))}
      </div>
    </ul>
  );
};

export default Navbar;
