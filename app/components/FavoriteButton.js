"use client";

import { Heart } from "lucide-react";
import { useFavorites } from "../context/FavoritesContext";

export default function FavoriteButton({ movie }) {
  const { favorites, toggleFavorite } = useFavorites();

  const isFavorite = favorites.some((item) => item.movie_id === movie.movie_id);

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        toggleFavorite(movie);
      }}
      className="absolute right-4 top-4 z-20 rounded-full bg-black/60 p-3 backdrop-blur"
    >
      <Heart
        size={22}
        className={isFavorite ? "fill-red-500 text-red-500" : "text-white"}
      />
    </button>
  );
}
