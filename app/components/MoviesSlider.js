"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";

import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";

export default function SerialSlider({ movies }) {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={24}
      breakpoints={{
        0: {
          slidesPerView: 1.3,
        },
        640: {
          slidesPerView: 2.2,
        },
        768: {
          slidesPerView: 3.2,
        },
        1024: {
          slidesPerView: 4.2,
        },
        1280: {
          slidesPerView: 5.2,
        },
      }}
    >
      {movies.map((movie) => (
        <SwiperSlide className="py-3" key={movie.id}>
          <Link key={movie.id} href={`/movie/${movie.movie_id}`}>
            <div className="group overflow-hidden rounded-2xl bg-zinc-900 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-600/20">
              <div className="relative overflow-hidden">
                <img
                  src={movie.poster_path}
                  alt={movie.original_title}
                  className="h-[360px] w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 transition group-hover:opacity-100" />

                <span className="absolute left-4 top-4 rounded-full bg-red-600 px-3 py-1 text-sm font-semibold text-white">
                  ⭐ {movie.vote_average}
                </span>
              </div>

              <div className="p-5">
                <h3 className="line-clamp-1 text-lg font-bold text-white">
                  {movie.original_title}
                </h3>

                <p className="mt-2 text-sm text-zinc-400">
                  {movie.release_date}
                </p>

                <p className="mt-4 line-clamp-3 text-sm leading-6 text-zinc-500">
                  {movie.overview}
                </p>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
