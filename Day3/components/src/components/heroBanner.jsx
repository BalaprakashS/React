import banner from "../assets/banner.png";

const HeroBanner = () => {
  return (
    <div className="relative">
      <img
        src={banner}
        alt="Banner"
        className="w-full h-auto"
      />

      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold text-white mb-5">
          Welcome To React
        </h1>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;