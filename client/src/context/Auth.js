import { createContext } from "react";
import Auth from "../utils/auth";

export const AuthContext = createContext({
  loggedIn: false,
  setLoggedIn: () => {},
  me: {},
});
