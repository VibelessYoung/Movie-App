import { getMovies } from "@/app/lib/api";
import { notFound } from "next/navigation";

export default async function MovieDetails({ params }) {
  const response = await getMovies();

  const movie = response.data.find(
    (item) => item.movie_id === Number(params.id),
  );

  if (!movie) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-950">
      {/* Backdrop */}

      <div className="relative h-[70vh]">
        <img
          src={movie.backdrop_path}
          alt={movie.original_title}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-black/50 to-transparent" />
      </div>

      <div className="mx-auto -mt-48 flex max-w-7xl gap-10 px-6 relative z-10">
        <img
          src={movie.poster_path}
          alt={movie.original_title}
          className="w-80 rounded-3xl shadow-2xl"
        />

        <div className="pt-24">
          <h1 className="text-5xl font-black text-white">
            {movie.original_title}
          </h1>

          <p className="mt-5 text-zinc-400">{movie.release_date}</p>

          <div className="mt-4 flex gap-6">
            <span className="rounded-full bg-yellow-500 px-4 py-2 font-bold text-black">
              ⭐ {movie.vote_average}
            </span>

            <span className="rounded-full bg-red-600 px-4 py-2 font-bold text-white">
              🔥 {movie.popularity}
            </span>
          </div>

          <p className="mt-8 max-w-3xl leading-8 text-zinc-300">
            {movie.overview}
          </p>
        </div>
      </div>
    </main>
  );
}
