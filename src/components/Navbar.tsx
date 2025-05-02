import { useState } from "react";
import { Home, MessageSquare, Package, User } from "react-feather";
import { Link } from "react-router-dom";

function Navbar() {
  const [activePage, setActivePage] = useState("home");

  return (
    <nav className="sticky top-0 left-0 flex gap-2 font-extrabold text-blue-600 p-1 m-0">
      <Link to="/" className={activePage == "home" ? "active-page" : ""}>
        <Home className="nav-icon" />
        &nbsp;Home
      </Link>
      <span>&nbsp;·&nbsp;</span>
      <Link to="/about" className={activePage == "about" ? "active-page" : ""}>
        <User className="nav-icon" />
        &nbsp;About
      </Link>
      <span>&nbsp;·&nbsp;</span>
      <Link
        to="/projects"
        className={activePage == "projects" ? "active-page" : ""}
      >
        <Package className="nav-icon" />
        &nbsp;Projects
      </Link>
      <span>&nbsp;·&nbsp;</span>
      <Link
        to="contact"
        className={activePage == "contact" ? "active-page" : ""}
      >
        <MessageSquare className="nav-icon" />
        &nbsp;Contact
      </Link>
    </nav>
  );
}

export default Navbar;
