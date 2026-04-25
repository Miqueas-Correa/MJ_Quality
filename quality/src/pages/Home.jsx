import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import ButtonConversion from "../components/ButtonConversion";
import HeroSection from "../layouts/HeroSection";

function Home() {
  return (
    <section className="min-h-dvh flex flex-col">
      <HeroSection />
      <ButtonConversion />
    </section>
  );
}

export default Home;