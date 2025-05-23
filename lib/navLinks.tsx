import { Home, MessageSquare, Package, User } from "react-feather";
import { NavItem } from "../types/types";

export const navItems: NavItem[] = [
  {
    href: "/",
    label: "Home",
    icon: <Home className="nav-icon" width={16} />,
  },
  {
    href: "/about",
    label: "About",
    icon: <User className="nav-icon" width={16} />,
  },
  {
    href: "/projects",
    label: "Projects",
    icon: <Package className="nav-icon" width={16} />,
  },
  {
    href: "/contact",
    label: "Contact",
    icon: <MessageSquare className="nav-icon" width={16} />,
  },
];
