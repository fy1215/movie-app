import { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([]);
  const APIkey = import.meta.env.VITE_TMDB_API_KEY;
  const handleSearch = async (keyword) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${APIkey}&query=${keyword}&language=ja-JP`
    );
    const data = await response.json();
    setMovies(data.results);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">映画検索アプリ</h1>
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
