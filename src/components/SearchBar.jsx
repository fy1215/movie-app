import { useState } from "react";

function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");

  return (
    <div className="mb-2 text-center">
      <input
        value={search}
        className="text-black m-2 rounded p-1"
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      <button
        className="border rounded p-1 bg-gray-800"
        onClick={() => onSearch(search)}
      >
        検索
      </button>
    </div>
  );
}

export default SearchBar;
