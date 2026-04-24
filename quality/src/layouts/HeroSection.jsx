import React from 'react';
// Componente para mostrar anuncios de Google AdSense
import AdBanner from '../components/AdBanner';

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen w-full text-[#F8FAFC] flex flex-col">

      {/* Hero + Contenedor principal */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12 md:py-16">

        {/* Hero text */}
        <div className="text-center max-w-4xl mb-12 md:mb-16">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight">
            Qual<span className="text-[#7DD3FC]">ity</span>
          </h1>

          <p className="mt-6 text-xl sm:text-2xl md:text-3xl font-light text-white/90 max-w-3xl mx-auto leading-relaxed">
            Transform audio and images into stunning, high-quality results — instantly.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">

            {/* Botón Convert */}
            <a href="#main" className="
                px-12 py-5 rounded-2xl
                bg-white/10 backdrop-blur-2xl
                border border-white/15 rounded-3xl 
                text-white font-bold text-lg
                hover:bg-gradient-to-r hover:from-cyan-500 hover:to-emerald-500
                hover:text-white
                active:scale-95
                transition-all duration-300
                flex items-center gap-3
            ">
              <span className="text-xl">▶</span>
              Get Started
            </a>
        </div>

        <p className="mt-10 text-white/60 text-sm md:text-base">
            No sign-up required • Instant results • High quality conversion
        </p>

      </main>

      {/* Ad Banner */}
      <AdBanner />
      <AdBanner />

    </section>
  );
}