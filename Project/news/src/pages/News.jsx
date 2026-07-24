import { useMemo, useState } from "react";
import newsData from "../data/newsData";
import NewsCard from "../components/NewsCard";

const News = () => {

  const [search, setSearch] = useState("");

  const filteredNews = useMemo(() => {
    return newsData.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="max-w-7xl mx-auto p-10">

      <h1 className="text-4xl font-bold mb-8">
        Latest News
      </h1>

      <input
        type="text"
        placeholder="Search News..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-3 rounded-lg w-full mb-8"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {filteredNews.map((item) => (
          <NewsCard key={item.id} news={item} />
        ))}

      </div>

    </div>
  );
};

export default News;