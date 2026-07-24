import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white flex justify-between items-center px-10 py-4">

      <h1 className="text-3xl font-bold">
        NewsHub
      </h1>

      <ul className="flex gap-8">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/news">News</Link>
        </li>

        <li>
          <Link to="/reviews">Reviews</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

      </ul>

    </nav>
  );
};

export default Navbar;