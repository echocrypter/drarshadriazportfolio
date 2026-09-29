
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import "./Navbar.css";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/#about" },
  { name: "Work", path: "/#work" },
  { name: "Publications", path: "/publications" },
  { name: "Research", path: "/research-outputs" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  // Close the mobile menu when the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  // Track the active homepage section.
  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection("");
      return;
    }

    const updateActiveSection = () => {
      const about = document.getElementById("about");
      const work = document.getElementById("work");
      const navbar = document.querySelector(".navbar");

      const navbarHeight = navbar
        ? navbar.getBoundingClientRect().height
        : 80;

      const threshold = navbarHeight + 120;

      if (work && work.getBoundingClientRect().top <= threshold) {
        setActiveSection("work");
      } else if (
        about &&
        about.getBoundingClientRect().top <= threshold
      ) {
        setActiveSection("about");
      } else {
        setActiveSection("");
      }
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [location.pathname]);

  // Prevent background scrolling while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Scroll to a homepage section with navbar offset.
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (!section) {
      console.error(`Section #${sectionId} not found`);
      return;
    }

    setActiveSection(sectionId);

    const navbar = document.querySelector(".navbar");

    const navbarHeight = navbar
      ? navbar.getBoundingClientRect().height
      : 80;

    const top =
      section.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight -
      16;

    window.scrollTo({
      top: Math.max(0, top),
      behavior: "smooth",
    });

    window.history.replaceState(
      window.history.state,
      "",
      `/#${sectionId}`
    );
  };

  // Handle About and Work navigation.
  const handleSectionClick = (event, sectionId) => {
    event.preventDefault();
    setMenuOpen(false);
    setActiveSection(sectionId);

    if (location.pathname === "/") {
      scrollToSection(sectionId);
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  // Handle Home navigation.
  const handleHomeClick = (event) => {
    event.preventDefault();

    setMenuOpen(false);
    setActiveSection("");

    if (location.pathname === "/") {
      window.history.replaceState(
        window.history.state,
        "",
        "/"
      );

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      navigate("/");
    }
  };

  // Handle all navigation links.
  const handleNavClick = (event, link) => {
    if (link.path === "/#about") {
      handleSectionClick(event, "about");
    } else if (link.path === "/#work") {
      handleSectionClick(event, "work");
    } else if (link.path === "/") {
      handleHomeClick(event);
    } else {
      setMenuOpen(false);
    }
  };

  // Determine which navigation item is active.
  const isActive = (path) => {
    if (path === "/#about") {
      return (
        location.pathname === "/" &&
        activeSection === "about"
      );
    }

    if (path === "/#work") {
      return (
        location.pathname === "/" &&
        activeSection === "work"
      );
    }

    if (path === "/") {
      return (
        location.pathname === "/" &&
        !activeSection
      );
    }

    return location.pathname === path;
  };

  return (
    <>
      {/* MAIN NAVBAR */}

      <motion.header
        className="navbar"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="navbar-container">
          {/* BRAND */}

          <Link
            to="/"
            className="navbar-brand"
            onClick={handleHomeClick}
            aria-label="Dr. Arshad Riaz homepage"
          >
            <span className="navbar-brand-name">
              <span className="navbar-brand-prefix">
                DR.
              </span>

              <span>ARSHAD</span>

              <span className="navbar-brand-highlight">
                RIAZ
              </span>
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}

          <nav
            className="navbar-desktop"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={(event) =>
                  handleNavClick(event, link)
                }
                className={`navbar-link ${
                  isActive(link.path) ? "active" : ""
                }`}
              >
                {link.name}

                <span className="navbar-link-underline" />
              </Link>
            ))}
          </nav>

          {/* DESKTOP CONTACT */}

          <a
            href="mailto:arshad-riaz@ue.edu.pk"
            className="navbar-contact"
          >
            <span>Contact</span>
            <ArrowUpRight size={15} />
          </a>

          {/* MOBILE MENU TOGGLE */}

          <button
            type="button"
            className={`navbar-menu-toggle ${
              menuOpen ? "menu-open" : ""
            }`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={
              menuOpen ? "Close menu" : "Open menu"
            }
            aria-expanded={menuOpen}
            aria-controls="navbar-mobile-menu"
          >
            {menuOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>
        </div>
      </motion.header>

      {/* MOBILE MENU */}

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="navbar-mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />

            <motion.nav
              id="navbar-mobile-menu"
              className="navbar-mobile"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              aria-label="Mobile navigation"
            >
              {/* MOBILE MENU HEADER */}

              <div className="navbar-mobile-header">
                <span>MENU</span>

                <span className="navbar-mobile-indicator">
                  <span />
                  NAVIGATION
                </span>
              </div>

              {/* MOBILE LINKS */}

              <div className="navbar-mobile-links">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.06,
                      duration: 0.3,
                    }}
                  >
                    <Link
                      to={link.path}
                      onClick={(event) =>
                        handleNavClick(event, link)
                      }
                      className={`navbar-mobile-link ${
                        isActive(link.path) ? "active" : ""
                      }`}
                    >
                      <span className="navbar-mobile-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span>{link.name}</span>

                      <ArrowUpRight
                        size={18}
                        className="navbar-mobile-arrow"
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* MOBILE CONTACT */}

              <a
                href="mailto:arshad-riaz@ue.edu.pk"
                className="navbar-mobile-contact"
                onClick={() => setMenuOpen(false)}
              >
                Get in touch
                <ArrowUpRight size={18} />
              </a>

              {/* MOBILE FOOTER */}

              <div className="navbar-mobile-footer">
                DR. ARSHAD RIAZ
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}