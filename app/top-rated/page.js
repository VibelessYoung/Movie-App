import { getMovies } from "../lib/api";
import MovieGrid from "../components/MovieGrid";
import { Star } from "lucide-react";
import Pagination from "../components/Pagination";

export default async function TopRatedPage({ searchParams }) {
  const params = await searchParams;

  const page = Number(params.page) || 1;

  const response = await getMovies(page);

  const movies = response.data.sort((a, b) => b.vote_average - a.vote_average);

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      {/* Header */}
      <div className="mb-12 flex items-center gap-4">
        <div className="rounded-2xl bg-yellow-500/15 p-4">
          <Star className="fill-yellow-400 text-yellow-400" size={34} />
        </div>

        <div>
          <h1 className="text-5xl font-black text-white">Top Rated Movies</h1>

          <p className="mt-2 text-zinc-400">
            Discover the highest-rated movies of all time.
          </p>
        </div>
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
