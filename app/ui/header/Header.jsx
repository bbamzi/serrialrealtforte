"use client";
import clsx from "clsx";
import Nav from "./Nav";
import { useState } from "react";

function Header() {
  const [isActive, setIsActive] = useState(false);
  function handleHamburger() {
    setIsActive(!isActive);
  }
  return (
    <header
      className={clsx("header transition-all ease-in-out duration-1000 px-4", {
        "mb-52": isActive,
      })}
    >
      <Nav isActive={isActive} handleHamburger={handleHamburger} />
    </header>
  );
}

export default Header;
