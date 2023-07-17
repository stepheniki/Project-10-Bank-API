import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";

const RoutesComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<LoginPage />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
