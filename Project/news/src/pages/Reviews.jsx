import { useEffect, useState } from "react";
import ReviewCard from "../components/ReviewCard";

const Reviews = () => {

  const [reviews, setReviews] = useState([]);

  useEffect(() => {

    const data = [

      {
        id: 1,
        title: "IndiaAI Mission",
        review:
          "India's AI mission is a great initiative for students and startups."
      },

      {
        id: 2,
        title: "NEET Protest",
        review:
          "Students deserve transparent and fair examinations."
      },

      {
        id: 3,
        title: "India vs Zimbabwe",
        review:
          "India played excellent cricket and deserved the victory."
      },

      {
        id: 4,
        title: "ISRO Rocket Launch",
        review:
          "ISRO continues to inspire millions with successful missions."
      }

    ];

    setReviews(data);

    localStorage.setItem("reviews", JSON.stringify(data));

  }, []);

  return (

    <div className="max-w-7xl mx-auto p-10">

      <h1 className="text-4xl font-bold mb-8">
        News Reviews
      </h1>

      <div className="grid md:grid-cols-2 gap-8">

        {reviews.map((item) => (
          <ReviewCard key={item.id} review={item} />
        ))}

      </div>

    </div>

  );
};

export default Reviews;