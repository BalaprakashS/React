function Banner() {
  return (
    <section className="bg-linear-to-r from-blue-400 to-indigo-700 text-white py-24">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h1 className="text-5xl font-bold mb-5">
          Welcome to React
        </h1>

        <p className="text-lg mb-8">
          Learn React, Vite and Tailwind CSS by building reusable components.
        </p>

        <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default Banner;