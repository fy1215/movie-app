function MovieCard({ title, poster_path, release_date }) {
  return (
    <div className="p-4">
      <img
        className="w-48 h-72 object-cover m-4 rounded transition hover:scale-105 hover:opacity-80 cursor-pointer"
        src={`https://image.tmdb.org/t/p/w200${poster_path}`}
        alt={`${title}のポスター`}
      />
      <p className="w-48 overflow-hidden text-ellipsis whitespace-nowrap font-bold">
        {title}
      </p>
      <p>{release_date}</p>
    </div>
  );
}

export default MovieCard;
