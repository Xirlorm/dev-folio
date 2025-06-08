import Link from "next/link";
import { NavItem } from "../../types/models";

export default function NavLink({
  pathname,
  navData,
}: {
  pathname: string;
  navData: NavItem;
}) {
  return (
    <Link
      href={navData.href}
      className={`nav-item ${pathname === navData.href ? "active" : ""}`}
    >
      {navData.icon}
      &nbsp;{navData.label}
    </Link>
  );
}
