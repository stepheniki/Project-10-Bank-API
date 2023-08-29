import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./components/Login";
import UserPage from "./pages/UserPage";
import Error404 from "./pages/Error404";

const RoutesComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="*" element={<Error404/>}/>
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
