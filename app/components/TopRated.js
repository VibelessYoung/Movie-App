import { getMovies } from "../lib/api";
import TopRatedGrid from "./TopRatedGrid";
import { Star } from "lucide-react";

export default async function TopRated() {
  const response = await getMovies();

  const movies = response.data
    .sort((a, b) => b.vote_average - a.vote_average)
    .slice(0, 8);

  return (
    <section className="mx-auto mt-24 max-w-7xl px-6">
      <div className="mb-10 flex items-center justify-between">
        <div>
          <h2 className="flex items-center gap-3 text-4xl font-black tracking-tight text-white">
            <div className="rounded-xl bg-yellow-400/15 p-2">
              <Star className="h-7 w-7 fill-yellow-400 text-yellow-400" />
            </div>

            <span>Top Rated Movies</span>
          </h2>

          <p className="mt-3 text-zinc-400">
            Discover the highest-rated movies.
          </p>
        </div>

        <button className="rounded-xl border border-red-600 px-5 py-3 text-red-500 transition hover:bg-red-600 hover:text-white">
          View All
        </button>
      </div>

      <TopRatedGrid movies={movies} />
    </section>
  );
}
