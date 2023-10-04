import React from "react";
import { Routes, Route } from "react-router-dom";
import MainDashboard from "./pages/MainDashboard";
import WelcomePage from "./pages/WelcomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainDashboard />} />
      <Route path="/main-dashboard" element={<WelcomePage />} />
    </Routes>
  );
}

export default App;
