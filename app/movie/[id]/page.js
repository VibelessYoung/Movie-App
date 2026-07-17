import { getMovieById } from "@/app/lib/api";
import { notFound } from "next/navigation";

export default async function MoviePage({ params }) {
  const { id } = await params;

  const movie = await getMovieById(id);

  if (!movie) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <img
        src={movie.backdrop_path}
        alt={movie.original_title}
        className="w-full rounded-3xl"
      />

      <div className="mt-10 flex gap-10">
        <img
          src={movie.poster_path}
          alt={movie.original_title}
          className="w-72 rounded-2xl"
        />

        <div>
          <h1 className="text-5xl font-black text-white">
            {movie.original_title}
          </h1>

          <p className="mt-6 text-zinc-400">{movie.overview}</p>
        </div>
      </div>
    </main>
  );
}
