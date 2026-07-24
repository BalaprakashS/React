import newsData from "../data/newsData";
import NewsCard from "../components/NewsCard";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto p-10">

      <div className="text-center mb-12">

        <h1 className="text-5xl font-bold text-blue-700">
         TrendSphere
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Stay Updated with Trending News
        </p>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {newsData.map((item) => (
          <NewsCard key={item.id} news={item} />
        ))}
      </div>

    </div>
  );
};

export default Home;