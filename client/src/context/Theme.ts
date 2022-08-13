import { createContext, Dispatch, SetStateAction } from "react";

interface Data {
  isDarkTheme: boolean;
  setIsDarkTheme: Dispatch<SetStateAction<boolean>>;
}

export const Theme = createContext<Data>({
  isDarkTheme: true,
  setIsDarkTheme: () => {},
});
