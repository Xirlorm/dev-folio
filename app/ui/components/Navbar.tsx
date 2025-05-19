"use client";

import Link from "next/link";
import { useState } from "react";
import { Home, MessageSquare, Package, User } from "react-feather";

const tabStyle =
  "flex items-center px-1 py-0 font-bold text-sm hover:bg-blue-300 rounded-md";
const activeStyle = "active-tab bg-blue-200 !text-blue-600";

function Navbar() {
  const [activePage, setActivePage] = useState("home");
  //  "";

  return (
    <nav className="flex justify-around sm:justify-normal sm:gap-1 items-center">
      <Link
        href="/"
        className={`${tabStyle} ${activePage === "home" ? activeStyle : ""}`}
        onClick={() => setActivePage("home")}
      >
        <Home className="nav-icon" width={16} />
        &nbsp;Home
      </Link>
      ·
      <Link
        href="/about"
        className={`${tabStyle} ${activePage === "about" ? activeStyle : ""}`}
        onClick={() => setActivePage("about")}
      >
        <User className="nav-icon" width={16} />
        &nbsp;About
      </Link>
      ·
      <Link
        href="/projects"
        className={`${tabStyle} ${
          activePage === "projects" ? activeStyle : ""
        }`}
        onClick={() => setActivePage("projects")}
      >
        <Package className="nav-icon" width={16} />
        &nbsp;Projects
      </Link>
      ·
      <Link
        href="/contact"
        className={`${tabStyle} ${activePage === "contact" ? activeStyle : ""}`}
        onClick={() => setActivePage("contact")}
      >
        <MessageSquare className="nav-icon" width={16} />
        &nbsp;Contact
      </Link>
    </nav>
  );
}

export default Navbar;
