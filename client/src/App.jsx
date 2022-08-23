import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Theme } from "./context/Theme";
import { AuthContext } from "./context/Auth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import DashBoard from "./pages/Dashboard";
import CreateNewPoll from "./pages/CreateNewPoll";
import Polls from "./pages/Open-Polls";
import Auth from "./utils/auth";

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(
    window.matchMedia("(prefers-color-scheme:dark)").matches
  );

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(Auth.loggedIn());
  }, []);

  return (
    <AuthContext.Provider value={loggedIn}>
      <Theme.Provider value={{ isDarkTheme, setIsDarkTheme }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/new-poll" element={<CreateNewPoll />} />
            <Route path="/polls" element={<Polls />} />
          </Routes>
        </Router>
      </Theme.Provider>
    </AuthContext.Provider>
  );
};

export default App;
