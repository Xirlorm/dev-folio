"use client";

import { usePathname } from "next/navigation";
import NavLink from "./NavLink";
import { navItems } from "../lib/navLinks";

function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-around sm:justify-normal sm:gap-1 items-center">
      {navItems.map((item) => (
        <NavLink pathname={pathname} key={item.href} navData={item} />
      ))}
    </nav>
  );
}

export default Navbar;
