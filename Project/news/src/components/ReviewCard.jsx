const ReviewCard = ({ review }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-5">

      <h2 className="text-xl font-bold">
        {review.title}
      </h2>

      <p className="mt-3">
        {review.review}
      </p>

      <h3 className="text-yellow-500 mt-3">
        ⭐⭐⭐⭐⭐
      </h3>

    </div>
  );
};

export default ReviewCard;