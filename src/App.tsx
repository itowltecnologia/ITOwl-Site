/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Infra from "./components/Infra";
import Services from "./components/Services";
import Networking from "./components/Networking";
import CtaBanner from "./components/CtaBanner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
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
