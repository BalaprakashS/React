import { useNavigate } from "react-router-dom";

const NewsCard = ({ news }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">

      {/* News Image */}
      <img
        src={news.image}
        alt={news.title}
        className="w-full h-56 object-cover"
      />

      {/* Content */}
      <div className="p-5">

        <span className="inline-block bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
          {news.category}
        </span>

        <h2 className="text-2xl font-bold mt-3">
          {news.title}
        </h2>

        <p className="text-gray-500 text-sm mt-2">
          📅 {news.date}
        </p>

        <p className="text-gray-700 mt-4">
          {news.description}
        </p>

        {/* Read More Button */}
        <button
          onClick={() => navigate(`/news/${news.id}`)}
          className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Read More →
        </button>

      </div>

    </div>
  );
};

export default NewsCard;