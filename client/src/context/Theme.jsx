import { createContext, Dispatch, SetStateAction } from "react";

export const Theme = createContext({
  isDarkTheme: true,
  setIsDarkTheme: () => {},
});
