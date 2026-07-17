import FAQ from "./components/FAQ";
import HeroSection from "./components/HeroSection";
import Movies from "./components/Movies";
import TopRated from "./components/TopRated";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Movies />
      <TopRated />
      <FAQ />
    </>
  );
}
