import { getMovies } from "../lib/api";
import MovieGrid from "../components/MovieGrid";
import Pagination from "../components/Pagination";

export default async function TrendingPage({ searchParams }) {
  const params = await searchParams;

  const page = Number(params.page) || 1;

  const response = await getMovies(page);

  const movies = response.data.sort((a, b) => b.popularity - a.popularity);

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-12">
        <h1 className="text-5xl font-black text-white light:text-black">🔥 Trending Movies</h1>

        <p className="mt-4 text-zinc-400 light:text-black/50">
          Discover the most popular movies right now.
        </p>
      </div>

      <MovieGrid movies={movies} />

      <Pagination
        currentPage={page}
        lastPage={response.last_page}
        basePath="/trending"
      />
    </main>
  );
}
