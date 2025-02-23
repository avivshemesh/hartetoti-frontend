import { Navigate } from "react-router-dom";

const AuthenticatedRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem("token"); // Example authentication check
    return isAuthenticated ? children : <Navigate to="/" />;
};

export default AuthenticatedRoute;