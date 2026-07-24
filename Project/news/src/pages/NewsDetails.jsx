import { useParams } from "react-router-dom";
import newsData from "../data/newsData";

const NewsDetails = () => {

  const { id } = useParams();

  const news = newsData.find(
    (item) => item.id === Number(id)
  );

  return (

    <div className="max-w-5xl mx-auto py-10 px-6">

      <img
        src={news.image}
        alt={news.title}
        className="w-full h-[450px] object-cover rounded-xl"
      />

      <h1 className="text-5xl font-bold mt-8">
        {news.title}
      </h1>

      <div className="flex gap-5 mt-4">

        <span className="bg-blue-600 text-white px-4 py-2 rounded-full">
          {news.category}
        </span>

        <span className="text-gray-500">
          {news.date}
        </span>

      </div>

      <p className="mt-8 text-lg leading-9 text-gray-700">
        {news.content}
      </p>

    </div>

  );
};

export default NewsDetails;