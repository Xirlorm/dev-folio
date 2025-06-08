import { Dispatch, SetStateAction } from "react";
import { Theme, Page } from "./models";

export interface AppContextType {
  theme: Theme;
  activePage: Page;
  setTheme: Dispatch<SetStateAction<Theme>>;
  setActivePage: Dispatch<SetStateAction<Page>>;
}
