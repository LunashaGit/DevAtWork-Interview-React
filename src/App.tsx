// Import Packages
import { Routes, Route } from "react-router-dom";
// Import Pages
import HomePage from "./assets/pages/HomePage";

export default function App() {
  return (
    <Routes>
      {/* Configure the Routes & Elements -> Pages */}
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
