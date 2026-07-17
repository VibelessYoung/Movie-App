"use client";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";

export default function TopRatedGrid({ movies }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {movies.map((movie) => (
        <Link
          href={`/movie/${movie.movie_id}`}
          key={movie.id}
          className="group overflow-hidden rounded-3xl bg-zinc-900 transition duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-red-600/20"
        >
          <div className="relative overflow-hidden">
            <img
              src={movie.poster_path}
              alt={movie.original_title}
              className="h-[380px] w-full object-cover transition duration-500 group-hover:scale-110"
            />

            <FavoriteButton movie={movie} />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

            <span className="absolute left-4 top-4 rounded-full bg-yellow-500 px-3 py-1 text-sm font-bold text-black">
              ⭐ {movie.vote_average}
            </span>
          </div>

          <div className="p-5">
            <h3 className="line-clamp-1 text-xl font-bold text-white">
              {movie.original_title}
            </h3>

            <p className="mt-2 text-sm text-zinc-500">{movie.release_date}</p>

            <p className="mt-4 line-clamp-3 text-sm leading-6 text-zinc-400">
              {movie.overview}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
