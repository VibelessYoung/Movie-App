"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is MovieHub?",
    answer:
      "MovieHub is a modern movie discovery platform where you can explore trending movies, discover top-rated titles, and build your personal watchlist.",
  },
  {
    question: "Where does the movie data come from?",
    answer:
      "Movie information is fetched from a public API and displayed with modern UI components built using Next.js and Tailwind CSS.",
  },
  {
    question: "Can I save my favorite movies?",
    answer:
      "Yes! You can add movies to your favorites and watchlist. Your data is stored locally in your browser.",
  },
  {
    question: "Is MovieHub free to use?",
    answer:
      "Absolutely! MovieHub is a free educational project created to showcase modern front-end development skills.",
  },
  {
    question: "Will more features be added?",
    answer:
      "Yes. Upcoming features include authentication, search, movie details, trailers, reviews, and personalized recommendations.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(null);

  return (
    <section className="mx-auto mt-32 max-w-5xl px-6">
      {/* Heading */}

      <div className="mb-14 text-center">
        <div className="mb-4 inline-flex rounded-full bg-red-600/10 p-4">
          <HelpCircle className="text-red-500" size={34} />
        </div>

        <h2 className="text-4xl font-black text-white">
          Frequently Asked Questions
        </h2>

        <p className="mt-4 text-zinc-400">
          Everything you need to know about MovieHub.
        </p>
      </div>

      {/* FAQ */}

      <div className="space-y-5">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl"
          >
            <button
              onClick={() => setActive(active === index ? null : index)}
              className="flex w-full items-center justify-between px-7 py-6 text-left"
            >
              <span className="text-lg font-semibold text-white">
                {faq.question}
              </span>

              <ChevronDown
                className={`transition duration-300 ${
                  active === index ? "rotate-180 text-red-500" : "text-zinc-400"
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ${
                active === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-7 pb-6 leading-8 text-zinc-400">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
