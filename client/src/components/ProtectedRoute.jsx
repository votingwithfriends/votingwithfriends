import Auth from "../utils/auth";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  if (!Auth.loggedIn()) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
