import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Theme } from "./context/Theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import DashBoard from "./pages/Dashboard";
import CreateNewPoll from "./pages/CreateNewPoll";

// TO-DO: Set up routing later

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(
    window.matchMedia("(prefers-color-scheme:dark)").matches
  );

  return (
    <Theme.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/createnewpoll" element={<CreateNewPoll />} />
        </Routes>
      </Router>
    </Theme.Provider>
  );
};

export default App;
