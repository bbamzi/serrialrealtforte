import Image from "next/image";
import NavLinks from "./NavLinks";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Link from "next/link";

function Nav({ isActive, handleHamburger }) {
  return (
    <nav
      className={"navbar flex justify-between items-center flex-row h-20 p-2"}
    >
      <div className="w-52 md:w-60 nav-branding">
        <Link href={"/"}>
          <Image
            src="/img/srf_logo.png"
            className=""
            alt="serrial logo"
            width={1000}
            height={700}
          />
        </Link>
      </div>
      <ul
        className={clsx(
          "nav-menu  flex justify-between items-center gap-20 z-10 md:mr-10 text-green-700 list-none transition ease-in-out duration-700 ",
          { active: isActive }
        )}
      >
        <NavLinks />
      </ul>
      <div
        className={clsx("pr-5 md:hidden hamburger cursor-pointer", {
          active: isActive,
        })}
        onClick={() => handleHamburger()}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}

export default Nav;
