import React from "react";
import { Routes, Route } from "react-router-dom";
import MainDashboard from "./pages/MainDashboard";
import WelcomePage from "./pages/WelcomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/main-dashboard" element={<MainDashboard />} />
    </Routes>
  );
}

export default App;
