import { Dispatch, SetStateAction } from "react";
import { Theme, Page } from "../types/types";

export interface Context {
  theme: Theme;
  activePage: Page;
  setTheme: Dispatch<SetStateAction<Theme>>;
  setActivePage: Dispatch<SetStateAction<Page>>;
}
