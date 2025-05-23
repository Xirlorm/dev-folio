"use client";

import { useState } from "react";
import { UserContext } from "./UserContext";
import { Page } from "../types/types";

export default function AppContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState("light" as "dark" | "light");
  const [activePage, setActivePage] = useState("/home" as Page);

  return (
    <UserContext.Provider
      value={{ theme, setTheme, activePage, setActivePage }}
    >
      {children}
    </UserContext.Provider>
  );
}
