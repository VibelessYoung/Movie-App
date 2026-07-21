"use client";
import { Clapperboard, Mail, ArrowUp } from "lucide-react";

import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="mt-28 border-t border-zinc-800 light:bg-gray-200 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Top */}
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 shadow-lg shadow-red-600/30">
                <Clapperboard className="text-white" size={24} />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white light:text-black">
                  Movie
                  <span className="text-red-500">Hub</span>
                </h2>

                <p className="text-sm text-zinc-400 light:text-black/50">Watch. Discover. Enjoy.</p>
              </div>
            </div>

            <p className="mt-6 leading-7 text-zinc-400 light:text-black/50">
              MovieHub is a modern movie discovery platform where you can
              explore trending movies, TV shows, actors, and build your own
              watchlist.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white light:text-black">
              Navigation
            </h3>

            <ul className="space-y-3">
              {["Home", "Movies", "TV Shows", "Trending", "Top Rated"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-zinc-400 light:text-black/50 transition hover:text-red-500"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white light:text-black">
              Categories
            </h3>

            <ul className="space-y-3">
              {["Action", "Adventure", "Comedy", "Sci-Fi", "Animation"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-zinc-400 light:text-black/50 transition hover:text-red-500"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white light:text-black">Contact</h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-zinc-400 light:text-black/50">
                <Mail size={18} />
                support@moviehub.com
              </div>

              <div className="mt-6 flex gap-3">
                <button className="rounded-xl bg-zinc-900 p-3 text-zinc-400 transition hover:bg-red-600 hover:text-white">
                  <FaGithub size={20} />
                </button>

                <button className="rounded-xl bg-zinc-900 p-3 text-zinc-400 transition hover:bg-red-600 hover:text-white">
                  <FaLinkedin size={20} />
                </button>

                <button className="rounded-xl bg-zinc-900 p-3 text-zinc-400 transition hover:bg-red-600 hover:text-white">
                  <FaInstagram size={20} />
                </button>

                <button className="rounded-xl bg-zinc-900 p-3 text-zinc-400 transition hover:bg-red-600 hover:text-white">
                  <FaXTwitter size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-zinc-800"></div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-center text-sm text-zinc-500">
            © {new Date().getFullYear()} MovieHub. All rights reserved.
          </p>

          <button
            onClick={scrollTop}
            className="flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            Back to Top
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
