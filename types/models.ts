import { ReactNode } from "react";

export type Theme = "dark" | "light";

export type Page = "/" | "/about" | "/projects" | "/contact";

export interface NavItem {
  href: Page;
  label: string;
  icon: ReactNode;
}
