import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        <h1 className="text-2xl font-bold">
          React Image & CSS
        </h1>

        <div className="flex gap-6 font-medium">

          <Link to="/" className="hover:text-yellow-300">
            Home
          </Link>

          <Link to="/profile" className="hover:text-yellow-300">
            Profile
          </Link>

          <Link to="/banner" className="hover:text-yellow-300">
            Banner
          </Link>

          <Link to="/movie" className="hover:text-yellow-300">
            Movie
          </Link>

          <Link to="/gallery" className="hover:text-yellow-300">
            Gallery
          </Link>

          <Link to="/team" className="hover:text-yellow-300">
            Team
          </Link>

        
        </div>

      </div>

    </nav>
  );
}

export default Navbar;