// Import Packages
import { Routes, Route } from "react-router-dom";
// Import Pages
import HomePage from "./assets/pages/HomePage";
import NotFound from "./assets/pages/NotFound";
import PokemonPage from "./assets/pages/PokemonPage";
import MyTeam from "./assets/pages/MyTeam";
export default function App() {
  return (
    <Routes>
      {/* Configure the Routes & Elements -> Pages */}
      {/* Home Page */}
      <Route path="/" element={<HomePage />} />
      {/* Give the details of the Pokemon */}
      <Route path="/details/:id" element={<PokemonPage />} />
      {/* Give the details of My Team */}
      <Route path="/myteam" element={<MyTeam />} />
      {/* 404 Error Not Found */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
