import react from 'react';
// Componente para mostrar anuncios de Google AdSense
import AdBanner from '../components/AdBanner';
// Hook para navegar programáticamente
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const navigate = useNavigate();

  navigate("/contacto");

  return (
    <section id="contact"
        className="min-h-screen
            w-full
            text-[#F8FAFC]
            flex flex-col
            items-center
            justify-center
            px-6 py-12
            md:py-16">

      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight">
        Contact<span className="text-[#7DD3FC]"> Us</span>
      </h1>

      {/* Ad Banner */}
      <AdBanner />
    </section>
  );
}