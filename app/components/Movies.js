import { getMovies } from "../lib/api";
import SerialSlider from "./MoviesSlider";

export default async function Serials() {
  const response = await getMovies();

  return (
    <section className="mx-auto mt-20 max-w-7xl px-6">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white">Trending Movies</h2>

          <p className="mt-2 text-zinc-400">
            Discover the most popular movies today.
          </p>
        </div>

        <button className="rounded-xl border border-red-500 px-5 py-2 text-red-500 transition hover:bg-red-600 hover:text-white">
          View All
        </button>
      </div>

      <SerialSlider movies={response.data} />
    </section>
  );
}
