import './App.css'
import { Routes, Route } from "react-router-dom";
// LAYOUTS
import Layout from "./layouts/Layout";
// PAGES
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
    <Layout>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Contact */}
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;
