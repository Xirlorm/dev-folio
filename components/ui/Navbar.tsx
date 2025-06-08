"use client";

import { usePathname } from "next/navigation";
import NavLink from "./NavLink";
import { navItems } from "../../data/navLinks";

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
