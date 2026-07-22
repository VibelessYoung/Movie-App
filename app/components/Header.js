"use client";
import { useState, useContext } from "react";
import { Search, Moon, Heart, Menu, Clapperboard, X, Sun } from "lucide-react";
import Link from "next/link";
import { ThemeContext } from "../context/ThemeContext";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 light:bg-white/10 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/">
          <div className="flex cursor-pointer items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-600 shadow-lg shadow-red-600/30 sm:h-11 sm:w-11">
              <Clapperboard className="h-5 w-5 text-white sm:h-6 sm:w-6" />
            </div>

            <div>
              <h1 className="text-xl font-extrabold tracking-wide text-white sm:text-2xl light:text-black">
                Movie<span className="text-red-500">Hub</span>
              </h1>

              <p className="hidden text-xs text-zinc-400 light:text-black/50 sm:block">
                Discover your next favorite movie
              </p>
            </div>
          </div>
        </Link>
        {/* Desktop Nav */}
        <nav className="hidden items-center gap-10 lg:flex">
          <Link
            href="/"
            className="text-sm font-medium text-white light:text-black transition hover:text-red-500"
          >
            Home
          </Link>

          <Link
            href="/trending"
            className="text-sm font-medium text-zinc-400 light:text-black transition hover:text-red-500"
          >
            Trending
          </Link>

          <a
            href="/top-rated"
            className="text-sm font-medium text-zinc-400 light:text-black transition hover:text-red-500"
          >
            Top Rated
          </a>
        </nav>

        {/* Right */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            className="rounded-xl bg-zinc-900 p-2.5 text-zinc-300 transition hover:bg-zinc-800 hover:text-red-500 sm:p-3"
            href="/search"
          >
            <Search size={20} />
          </Link>

          <Link
            className="rounded-xl bg-zinc-900 p-2.5 text-zinc-300 transition hover:bg-zinc-800 hover:text-red-500 sm:p-3"
            href="/favorites"
          >
            <Heart size={20} />
          </Link>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-xl bg-zinc-900 p-2.5 text-zinc-300 transition hover:bg-zinc-800 hover:text-red-500 sm:p-3"
          >
            {theme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <button className="hidden rounded-xl bg-red-600 px-5 py-2.5 font-semibold text-white transition hover:bg-red-700 md:block">
            Login
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-xl bg-zinc-900 p-2.5 text-zinc-300 transition hover:bg-zinc-800 lg:hidden"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-96 border-t border-zinc-800" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col bg-zinc-950 px-6 py-4">
          <a
            href="#"
            className="rounded-lg px-3 py-3 text-white transition hover:bg-zinc-900 hover:text-red-500"
          >
            Home
          </a>

          <a
            href="#"
            className="rounded-lg px-3 py-3 text-zinc-400 transition hover:bg-zinc-900 hover:text-red-500"
          >
            Movies
          </a>

          <a
            href="#"
            className="rounded-lg px-3 py-3 text-zinc-400 transition hover:bg-zinc-900 hover:text-red-500"
          >
            TV Shows
          </a>

          <a
            href="#"
            className="rounded-lg px-3 py-3 text-zinc-400 transition hover:bg-zinc-900 hover:text-red-500"
          >
            Trending
          </a>

          <a
            href="#"
            className="rounded-lg px-3 py-3 text-zinc-400 transition hover:bg-zinc-900 hover:text-red-500"
          >
            Top Rated
          </a>

          <button className="mt-4 rounded-xl bg-red-600 py-3 font-semibold text-white transition hover:bg-red-700 md:hidden">
            Login
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
