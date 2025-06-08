"use client";

import { createContext, useState } from "react";
import { Page, Theme } from "../types/models";
import { AppContextType } from "../types/context";

export const AppContext = createContext({} as AppContextType);

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<Theme>("light");
  const [activePage, setActivePage] = useState<Page>("/");

  return (
    <AppContext.Provider value={{ theme, setTheme, activePage, setActivePage }}>
      {children}
    </AppContext.Provider>
  );
}
