"use client";

import { useFavorites } from "../context/FavoritesContext";
import MovieGrid from "../components/MovieGrid";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="mb-10 text-5xl font-black text-white light:text-black">❤️ My Favorites</h1>

      {favorites.length === 0 ? (
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 py-32 text-center">
          <h2 className="text-4xl font-bold text-white">No Favorite Movies</h2>

          <p className="mt-4 text-zinc-500">
            Start adding your favorite movies.
          </p>
        </div>
      ) : (
        <MovieGrid movies={favorites} />
      )}
    </main>
  );
}
