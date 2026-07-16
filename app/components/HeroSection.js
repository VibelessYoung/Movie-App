import { getRandomMovies } from "../lib/api";
import HeroSlider from "./HeroSlider";

export default async function HeroSection() {
  const movies = await getRandomMovies(5);

  return <HeroSlider movies={movies} />;
}
