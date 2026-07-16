import { getMovies } from "../lib/api";
import SerialSlider from "./MoviesSlider";
import { Flame } from "lucide-react";

export default async function Serials() {
  const response = await getMovies();

  return (
    <section className="mx-auto mt-20 max-w-7xl px-6">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="flex items-center gap-3 text-4xl font-black tracking-tight text-white">
            <div className="rounded-xl bg-red-400/15 p-2">
              <Flame className="h-7 w-7 fill-orange-400 text-orange-400" />
            </div>

            <span>Trending Movies</span>
          </h2>

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
