import movie from "../assets/movie.png";

const MovieCard = () => {
  return (
    <div className="flex justify-center items-center  bg-gray-100">

      <div className="w-150 bg-white rounded-xl shadow-xl overflow-hidden hover:scale-105 transition duration-300">

        <img
          src={movie}
          alt="Movie"
          className="w-full h-96 object-cover"
        />

        <div className="p-5">

          <h2 className="text-2xl font-bold">
            Leo
          </h2>

          <p className="text-gray-600 mt-2">
            Hero : Vijay
          </p>

          <p className="text-green-600 font-semibold mt-2">
            Collection : ₹620 Crores
          </p>

        </div>

      </div>

    </div>
  );
};

export default MovieCard;