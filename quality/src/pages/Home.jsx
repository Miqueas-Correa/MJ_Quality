import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import MainLayout from "../layouts/MainLayout";

function Home() {
  return (
    <section className="min-h-[100dvh] flex flex-col">
      <Header />

      <div className="flex-grow flex items-center justify-center">
        <MainLayout />
      </div>

      <Footer />
    </section>
  );
}

export default Home;