import { useEffect, useState } from "react";
import { Home, MessageSquare, Package, User } from "react-feather";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [activePage, setActivePage] = useState("home");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/" && location.hash.length) {
      const el = document.querySelector(location.hash);

      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <nav className="sticky top-0 left-0 flex gap-2 font-extrabold p-1 m-0">
      <Link
        to="/"
        className={activePage == "home" ? "active-page" : ""}
        onClick={() => setActivePage("home")}
      >
        <Home className="nav-icon" />
        &nbsp;Home
      </Link>
      <span>&nbsp;·&nbsp;</span>
      <Link
        to="/about"
        className={activePage == "about" ? "active-page" : ""}
        onClick={() => setActivePage("about")}
      >
        <User className="nav-icon" />
        &nbsp;About
      </Link>
      <span>&nbsp;·&nbsp;</span>
      <Link
        to="/projects"
        className={activePage == "projects" ? "active-page" : ""}
        onClick={() => setActivePage("projects")}
      >
        <Package className="nav-icon" />
        &nbsp;Projects
      </Link>
      <span>&nbsp;·&nbsp;</span>
      <a
        href="/#contacts"
        className={activePage == "contact" ? "active-page" : ""}
        onClick={() => {
          setActivePage("home");
        }}
      >
        <MessageSquare className="nav-icon" />
        &nbsp;Contact
      </a>
    </nav>
  );
}

export default Navbar;
