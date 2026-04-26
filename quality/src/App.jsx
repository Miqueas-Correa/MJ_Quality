import './App.css'
import { Routes, Route } from "react-router-dom";
// LAYOUTS
import Layout from "./layouts/Layout";
// PAGES
import Home from "./pages/Home";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";

function App() {
  return (
    <Layout>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Services */}
        <Route path="/servicios" element={<Services />} />

        {/* About Us */}
        <Route path="/sobre-nosotros" element={<AboutUs />} />

        {/* Contact */}
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;
