"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import TopRatedGrid from "./TopRatedGrid";

export default function SearchResults({ movies }) {
  const [query, setQuery] = useState("");

  const filteredMovies = useMemo(() => {
    if (!query.trim()) return movies;

    return movies.filter((movie) =>
      movie.original_title.toLowerCase().includes(query.toLowerCase()),
    );
  }, [movies, query]);

  return (
    <>
      <div className="mx-auto mb-14 max-w-3xl">
        <div className="flex items-center rounded-2xl border border-zinc-700 bg-zinc-900 px-5 light:bg-gray-100 light:focus-within:border-black focus-within:border-red-600">
          <Search size={22} className="text-zinc-500" />

          <input
            type="text"
            placeholder="Search by movie title..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent px-4 py-5 text-white light:text-black light:bg-gray-100 outline-none placeholder:text-zinc-500"
          />
        </div>
      </div>

      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white light:text-black">Results</h2>

        <span className="rounded-xl bg-zinc-900 px-4 py-2 light:bg-gray-200 light:text-black text-zinc-400">
          {filteredMovies.length} Movies
        </span>
      </div>

      {filteredMovies.length ? (
        <TopRatedGrid movies={filteredMovies} />
      ) : (
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-20 text-center">
          <h2 className="text-3xl font-bold text-white">No Movies Found</h2>

          <p className="mt-4 text-zinc-500">
            Try searching with another title.
          </p>
        </div>
      )}
    </>
  );
}
