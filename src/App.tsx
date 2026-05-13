/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Infra from "./components/Infra";
import Services from "./components/Services";
import Networking from "./components/Networking";
import CtaBanner from "./components/CtaBanner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function Home() {
  return (
    <div className="font-sans text-slate-900 bg-white min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Benefits />
      <Infra />
      <Services />
      <Networking />
      <CtaBanner />
      <Contact />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}
