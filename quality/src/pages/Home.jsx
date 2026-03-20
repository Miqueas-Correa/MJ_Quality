import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import MainLayout from "../layouts/MainLayout";
import HeroSection from "../layouts/HeroSection";

function Home() {
  return (
    <section className="min-h-[100dvh] flex flex-col">
      <Header />
      <HeroSection />
      <MainLayout />
      <Footer />
    </section>
  );
}

export default Home;