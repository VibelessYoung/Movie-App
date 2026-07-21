import { getMovies } from "../lib/api";
import SerialSlider from "./MoviesSlider";
import { Flame } from "lucide-react";
import Link from "next/link";

export default async function Serials() {
  const response = await getMovies();

  return (
    <section className="mx-auto mt-20 max-w-7xl px-6">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="flex items-center gap-3 text-4xl font-black tracking-tight text-white light:text-black">
            <div className="rounded-xl bg-red-400/15 p-2">
              <Flame className="h-7 w-7 fill-orange-400 text-orange-400" />
            </div>

            <span>Trending Movies</span>
          </h2>

          <p className="mt-2 text-zinc-400 light:text-black/50">
            Discover the most popular movies today.
          </p>
        </div>

        <Link
          className="rounded-xl border border-red-600 px-5 py-3 text-red-500 transition hover:bg-red-600 hover:text-white"
          href="/trending"
        >
          View All
        </Link>
      </div>

      <SerialSlider movies={response.data} />
    </section>
  );
}
