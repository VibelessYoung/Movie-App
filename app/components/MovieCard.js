import Link from "next/link";

export default function MovieCard({ movie }) {
  return (
    <Link href={`/movies/${movie.movie_id}`}>
      <div className="group overflow-hidden rounded-3xl bg-zinc-900 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-600/20">
        <img
          src={movie.poster_path}
          alt={movie.original_title}
          className="h-[420px] w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="p-5">
          <h2 className="line-clamp-1 text-xl font-bold text-white">
            {movie.original_title}
          </h2>

          <div className="mt-3 flex items-center justify-between text-zinc-400">
            <span>⭐ {movie.vote_average}</span>

            <span>{movie.release_date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
