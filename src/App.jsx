import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import AcademicIntro from "./components/AcademicIntro";
import ResearchInterests from "./components/ResearchInterests";
import PublicationsPreview from "./components/PublicationsPreview";

import AboutPage from "./pages/AboutPage";
import WorkPage from "./pages/WorkPage";
import PublicationsPage from "./pages/PublicationsPage";
import ResearchOutputsPage from "./pages/ResearchOutputsPage";
import ContactPage from "./pages/ContactPage";

import "./App.css";

// LANDING PAGE
function HomePage() {
  return (
    <>
      <Hero />
      <AboutPage />
      <WorkPage />
      <AcademicIntro />
      <ResearchInterests />
      <PublicationsPreview />
      <ContactPage />

    
    </>
  );
}

// ROUTES AND PAGE TRANSITIONS
function AnimatedRoutes() {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  // Scroll after the homepage has mounted
  useEffect(() => {
    if (location.pathname !== "/") {
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
      return;
    }

    const sectionId =
      location.state?.scrollTo ||
      (location.hash ? location.hash.substring(1) : null);

    let frameId;
    let attempts = 0;
    let cancelled = false;

    const findAndScroll = () => {
      if (cancelled) return;

      if (sectionId) {
        const section = document.getElementById(sectionId);

        if (section) {
          const navbar = document.querySelector(".navbar");
          const navbarHeight =
            navbar?.getBoundingClientRect().height || 0;

          const sectionTop =
            section.getBoundingClientRect().top +
            window.scrollY -
            navbarHeight -
            16;

          window.scrollTo({
            top: Math.max(0, sectionTop),
            behavior: shouldReduceMotion ? "auto" : "smooth",
          });

          // Update the URL without triggering navigation
          window.history.replaceState(
            window.history.state,
            "",
            `/#${sectionId}`
          );

          return;
        }
      }

      // Retry while the homepage is rendering
      attempts += 1;

      if (attempts < 60) {
        frameId = requestAnimationFrame(findAndScroll);
      }
    };

    // Wait for route transition and page rendering
    frameId = requestAnimationFrame(() => {
      frameId = requestAnimationFrame(findAndScroll);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frameId);
    };
  }, [
    location.pathname,
    location.hash,
    location.state,
    shouldReduceMotion,
  ]);

  const pageVariants = {
    initial: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 18,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : -12,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.25,
        ease: "easeInOut",
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="page-transition-wrapper"
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/publications"
            element={<PublicationsPage />}
          />

          <Route
            path="/research-outputs"
            element={<ResearchOutputsPage />}
          />

          {/* Contact page route */}
          <Route
            path="/contact"
            element={<ContactPage />}
          />
        </Routes>
      </motion.main>
    </AnimatePresence>
  );
}

// APP
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
