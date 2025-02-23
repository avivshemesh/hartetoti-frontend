import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AuthenticatedRoute from "./AuthenticatedRoute";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";

function MainAppRouter() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={<Home/>}
                />
                {/* Protected Routes Example */}
                <Route
                    path="/dashboard"
                    element={
                        <AuthenticatedRoute>
                            <Dashboard/>
                        </AuthenticatedRoute>
                    }/>
                {/* 404 Page */}
                <Route path="*" element={<h1>404 - Page Not Found</h1>}/>
            </Routes>
        </Router>
    )
}

export default MainAppRouter;