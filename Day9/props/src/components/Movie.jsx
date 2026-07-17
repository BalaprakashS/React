function Movie({ movies }) {
  return (
    <div>

      <h2 className="text-2xl font-bold mb-4">
        Movie 
      </h2>

      {movies.map((movie, index) => (
        <p key={index}>
          {movie}
        </p>
      ))}

    </div>
  );
}

export default Movie;