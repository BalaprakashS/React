function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        <h1 className="text-2xl font-bold">Logo</h1>

        <ul className="flex gap-8 font-medium">
          <li className="hover:text-yellow-300 cursor-pointer">Home</li>
          <li className="hover:text-yellow-300 cursor-pointer">About</li>
          <li className="hover:text-yellow-300 cursor-pointer">Services</li>
          <li className="hover:text-yellow-300 cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;