"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

function getPages(currentPage, lastPage) {
  const pages = [];
  const delta = 2;

  // همیشه صفحه اول
  pages.push(1);

  let start = Math.max(2, currentPage - delta);
  let end = Math.min(lastPage - 1, currentPage + delta);

  // اگر نزدیک اول بود
  if (currentPage <= 4) {
    start = 2;
    end = Math.min(5, lastPage - 1);
  }

  // اگر نزدیک آخر بود
  if (currentPage >= lastPage - 3) {
    start = Math.max(2, lastPage - 4);
    end = lastPage - 1;
  }

  // ...
  if (start > 2) {
    pages.push("...");
  }

  // صفحات وسط
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  // ...
  if (end < lastPage - 1) {
    pages.push("...");
  }

  // همیشه صفحه آخر
  if (lastPage > 1) {
    pages.push(lastPage);
  }

  return pages;
}

export default function Pagination({ currentPage, lastPage, basePath }) {
  const pages = getPages(currentPage, lastPage);

  return (
    <div className="mt-16 flex items-center justify-center gap-2 flex-wrap">
      {/* Previous */}

      <Link
        href={`${basePath}?page=${currentPage - 1}`}
        className={`flex h-11 w-11 items-center justify-center rounded-xl border transition
        ${
          currentPage === 1
            ? "pointer-events-none border-zinc-800 text-zinc-700"
            : "border-zinc-700 bg-zinc-900 text-white hover:border-red-500 hover:bg-red-600"
        }`}
      >
        <ChevronLeft size={18} />
      </Link>

      {/* Numbers */}

      {pages.map((page, index) =>
        page === "..." ? (
          <span
            key={index}
            className="flex h-11 w-11 items-center justify-center text-zinc-500"
          >
            ...
          </span>
        ) : (
          <Link
            key={page}
            href={`${basePath}?page=${page}`}
            className={`flex h-11 w-11 items-center justify-center rounded-xl font-semibold transition
            ${
              page === currentPage
                ? "bg-red-600 text-white shadow-lg shadow-red-600/30"
                : "bg-zinc-900 text-zinc-300 hover:bg-red-600 hover:text-white"
            }`}
          >
            {page}
          </Link>
        ),
      )}

      {/* Next */}

      <Link
        href={`${basePath}?page=${currentPage + 1}`}
        className={`flex h-11 w-11 items-center justify-center rounded-xl border transition
        ${
          currentPage === lastPage
            ? "pointer-events-none border-zinc-800 text-zinc-700"
            : "border-zinc-700 bg-zinc-900 text-white hover:border-red-500 hover:bg-red-600"
        }`}
      >
        <ChevronRight size={18} />
      </Link>
    </div>
  );
}
