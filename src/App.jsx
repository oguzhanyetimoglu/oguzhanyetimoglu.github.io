import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import CV from "./components/CV";
import Publications from "./components/Publications";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";
import { useClarityConsent } from "./hooks/useClarity";

export default function App() {
  const [consent, setConsent] = useClarityConsent();

  return (
    <div className="min-h-screen bg-[#030712]">
      <Navbar />
      <main>
        <Hero />
        <div className="max-w-5xl mx-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>
        <About />
        <div className="max-w-5xl mx-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>
        <Projects />
        <div className="max-w-5xl mx-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>
        <CV />
        <div className="max-w-5xl mx-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>
        <Publications />
      </main>
      <Footer />
      <AnimatePresence>
        {consent === null && (
          <CookieBanner
            key="cookie-banner"
            onAccept={() => setConsent("accepted")}
            onDecline={() => setConsent("declined")}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
