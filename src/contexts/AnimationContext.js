"use client";

import { createContext, useEffect, useState } from "react";

export const animationContext = createContext();

export function AnimationWrapper({ children }) {
  const [scrolling, setScrolling] = useState(0);

  useEffect(() => {
    let timeOut;

    const handleScroll = () => {
      clearTimeout(timeOut);
      timeOut = setTimeout(() => {
        setScrolling((prev) => prev + 1);
      }, [0]);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timeOut);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <animationContext.Provider value={{ scrolling }}>
      {children}
    </animationContext.Provider>
  );
}
