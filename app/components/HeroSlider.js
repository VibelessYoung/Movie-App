"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function HeroSlider({ movies }) {
  return (
    <section className="relative h-[90vh] w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        slidesPerView={1}
        loop
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation
        className="h-full"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="relative h-full w-full">
              {/* Background */}

              <img
                src={movie.backdrop_path}
                alt={movie.original_title}
                className="h-full w-full object-cover"
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

              {/* Content */}

              <div className="absolute left-16 top-1/2 max-w-2xl -translate-y-1/2">
                <span className="rounded-full bg-red-600 px-4 py-2 text-sm font-semibold">
                  ⭐ {movie.vote_average}
                </span>

                <h1 className="mt-6 text-6xl font-black text-white">
                  {movie.original_title}
                </h1>

                <p className="mt-6 line-clamp-3 text-lg leading-8 text-zinc-300">
                  {movie.overview}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
