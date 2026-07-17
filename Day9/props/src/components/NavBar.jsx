import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          React Props
        </h1>

        <div className="flex gap-6 font-semibold">

          <Link to="/" className="hover:text-yellow-300">
            Home
          </Link>

          <Link to="/student" className="hover:text-yellow-300">
            Student
          </Link>

          <Link to="/employee" className="hover:text-yellow-300">
            Employee
          </Link>

          <Link to="/product" className="hover:text-yellow-300">
            Product
          </Link>

          <Link to="/movie" className="hover:text-yellow-300">
            Movie
          </Link>

          <Link to="/studentlist" className="hover:text-yellow-300">
            Student List
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;