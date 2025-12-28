import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
          release_date={movie.release_date}
        />
      ))}
    </div>
  );
}

export default MovieList;
