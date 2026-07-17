import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProfileCard from "./components/ProfileCard";
import HeroBanner from "./components/HeroBanner";
import MovieCard from "./components/MovieCard";
import ProductGallery from "./components/ProductGallery";
import TeamSection from "./components/TeamSection";

function App() {
  return (
    <>
      <Navbar />

      <div className="p-8 bg-gray-100 min-h-screen">

        <Routes>

          <Route path="/" element={<Home />} />

          <Route
            path="/profile"
            element={<ProfileCard />}
          />

          <Route
            path="/banner"
            element={<HeroBanner />}
          />

          <Route
            path="/movie"
            element={<MovieCard />}
          />

          <Route
            path="/gallery"
            element={<ProductGallery />}
          />

          <Route
            path="/team"
            element={<TeamSection />}
          />

        </Routes>
      </div>
    </>
  );
}

export default App;