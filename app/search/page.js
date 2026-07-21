import { getMovies } from "../lib/api";
import SearchResults from "../components/SearchResults";

export default async function SearchPage() {
  const response = await getMovies();

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-black text-white light:text-black">Search Movies</h1>

        <p className="mt-4 text-zinc-400 light:text-black/50">
          Search through our movie collection.
        </p>
      </div>

      <SearchResults movies={response.data} />
    </main>
  );
}
