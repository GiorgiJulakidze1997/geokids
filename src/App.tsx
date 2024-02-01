import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import ClassPage from "./components/pages/ClassPage";
import PlayerPage from "./components/pages/PlayerPage";
import MatchesPage from "./components/pages/MatchesPage";
import ContactPage from "./components/pages/ContactPage";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="classPage" element={<ClassPage />} />
        <Route path="playerPage" element={<PlayerPage />} />
        <Route path="matchesPage" element={<MatchesPage />} />
        <Route path="aboutPage" element={<AboutPage />} />
        <Route path="contactPage" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
