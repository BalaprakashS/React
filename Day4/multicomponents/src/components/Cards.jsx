function Card({ title, description }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
      <img
        src="./public/cra.png"
        alt={title}
        className="rounded-lg mb-4 w-full"
      />

      <h2 className="text-xl font-bold mb-2">{title}</h2>

      <p className="text-gray-600 mb-4">{description}</p>

      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Read More
      </button>
    </div>
  );
}

export default Card;