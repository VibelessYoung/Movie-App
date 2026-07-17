import { getMovies } from "../lib/api";
import MovieGrid from "../components/MovieGrid";

export default async function TrendingPage() {
  const response = await getMovies();

  const movies = response.data.sort((a, b) => b.popularity - a.popularity);

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-12">
        <h1 className="text-5xl font-black text-white">🔥 Trending Movies</h1>

        <p className="mt-4 text-zinc-400">
          Discover the most popular movies right now.
        </p>
      </div>

      <MovieGrid movies={movies} />
    </main>
  );
}
