import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Theme } from "./context/Theme";
import { AuthContext } from "./context/Auth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import DashBoard from "./pages/Dashboard";
import CreateNewPoll from "./pages/CreateNewPoll";
import Polls from "./pages/OpenPolls";
import Auth from "./utils/auth";
import ProtectedRoute from "./components/ProtectedRoute";
import Vote from "./components/Vote";
import OpenPolls from "./pages/OpenPolls";
import getMe from "./utils/me";
import VoteResults from "./components/VoteResults";

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(
    window.matchMedia("(prefers-color-scheme:dark)").matches
  );

  const [loggedIn, setLoggedIn] = useState(Auth.loggedIn());

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn, me: getMe() }}>
      <Theme.Provider value={{ isDarkTheme, setIsDarkTheme }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/vote"
              element={
                <ProtectedRoute>
                  <Vote />
                </ProtectedRoute>
              }
            />
            <Route path="/openpolls" element={<OpenPolls />} />
            <Route path="/voteresults/:id" element={<VoteResults />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashBoard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/new-poll"
              element={
                <ProtectedRoute>
                  <CreateNewPoll />
                </ProtectedRoute>
              }
            />
            <Route path="/polls" element={<Polls />} />
            <Route path="/vote/:id" element={<Vote />} />
          </Routes>
        </Router>
      </Theme.Provider>
    </AuthContext.Provider>
  );
};

export default App;
