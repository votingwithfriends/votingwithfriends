import { createContext } from "react";

export const Theme = createContext({
  isDarkTheme: true,
  setIsDarkTheme: () => {},
});
