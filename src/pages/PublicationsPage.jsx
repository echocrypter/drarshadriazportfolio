import { useMemo, useState } from "react";

import {
  motion,
  useScroll,
  useSpring,
  useReducedMotion,
} from "framer-motion";

import {
  Search,
  BookOpen,
  ArrowUpRight,
  SlidersHorizontal,
  X,
  ChevronDown,
  Quote,
} from "lucide-react";

import { publications } from "../data/publications";
import "./PublicationsPage.css";

const revealUp = {
  hidden: {
    opacity: 0,
    y: 38,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const revealLeft = {
  hidden: {
    opacity: 0,
    x: -45,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const revealRight = {
  hidden: {
    opacity: 0,
    x: 45,
    scale: 0.96,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const viewportSettings = {
  once: true,
  amount: 0.15,
  margin: "0px 0px -50px 0px",
};

export default function PublicationsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("All");

  const shouldReduceMotion = useReducedMotion();

  // Smooth scroll progress
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Extract publication years
  const years = useMemo(() => {
    const uniqueYears = [
      ...new Set(
        publications
          .map((publication) => publication.year)
          .filter(Boolean)
          .map(String)
      ),
    ];

    uniqueYears.sort((a, b) => Number(b) - Number(a));

    return ["All", ...uniqueYears];
  }, []);

  // Search and year filtering
  const filteredPublications = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return publications.filter((publication) => {
      const publicationYear = String(publication.year || "");

      const matchesYear =
        selectedYear === "All" ||
        publicationYear === selectedYear;

      const searchableContent = [
        publication.number,
        publication.year,
        publication.citation,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesSearch = searchableContent.includes(query);

      return matchesYear && matchesSearch;
    });
  }, [searchTerm, selectedYear]);

  // Clear filters
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedYear("All");
  };

  // Format publication numbers
  const formatNumber = (value) =>
    String(value ?? "").padStart(3, "0");

  return (
    <main className="publications-page">
      {/* Scroll progress bar */}
      {!shouldReduceMotion && (
        <motion.div
          className="pub-scroll-progress"
          style={{ scaleX: smoothProgress }}
          aria-hidden="true"
        />
      )}

      {/* Hero section */}
      <section className="publications-hero">
        <div className="pub-hero-grid" />

        <div className="pub-hero-glow pub-glow-one" />
        <div className="pub-hero-glow pub-glow-two" />

        <div className="publications-container pub-hero-inner">
          {/* Hero content */}
          <motion.div
            className="pub-hero-content"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="pub-eyebrow"
              variants={revealUp}
            >
              <span className="pub-eyebrow-line" />

              <span>RESEARCH ARCHIVE</span>

              <span className="pub-eyebrow-dot" />

              <span>
                {years.length > 1
                  ? `${years[years.length - 1]} — ${years[1]}`
                  : "PUBLICATION YEARS"}
              </span>
            </motion.div>

            <motion.h1
              className="pub-hero-title"
              variants={revealUp}
            >
              A record of
              <br />
              <span>scholarly work.</span>
            </motion.h1>

            <motion.p
              className="pub-hero-description"
              variants={revealUp}
            >
              Research contributions in applied mathematics,
              mathematical modeling, fluid mechanics, and
              computational methods.
            </motion.p>

            <motion.div
              className="pub-hero-bottom"
              variants={revealUp}
            >
              <div className="pub-hero-stat">
                <span className="pub-stat-label">
                  PUBLICATIONS LISTED
                </span>

                <div className="pub-stat-number">
                  {formatNumber(publications.length)}
                </div>
              </div>

              <div className="pub-stat-divider" />

              <div className="pub-hero-stat">
                <span className="pub-stat-label">
                  PUBLICATION YEARS
                </span>

                <div className="pub-stat-number">
                  {years.length - 1}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Orbital illustration */}
          <motion.div
            className="pub-hero-art"
            variants={revealRight}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            <div className="pub-art-orbit pub-orbit-outer" />
            <div className="pub-art-orbit pub-orbit-middle" />
            <div className="pub-art-orbit pub-orbit-inner" />

            <motion.div
              className="pub-art-center"
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, scale: 0.65 }
              }
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: shouldReduceMotion ? 0 : 0.65,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <BookOpen size={42} strokeWidth={1} />

              <span>RESEARCH</span>
            </motion.div>

            <motion.div
              className="pub-art-node pub-node-top"
              animate={
                shouldReduceMotion ? {} : { y: [0, -7, 0] }
              }
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="pub-art-node pub-node-right"
              animate={
                shouldReduceMotion ? {} : { x: [0, 6, 0] }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />

            <motion.div
              className="pub-art-node pub-node-bottom"
              animate={
                shouldReduceMotion ? {} : { y: [0, 7, 0] }
              }
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8,
              }}
            />

            <motion.span
              className="pub-art-label pub-label-top"
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, x: 15 }
              }
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
            >
              MATHEMATICS
            </motion.span>

            <motion.span
              className="pub-art-label pub-label-bottom"
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, x: -15 }
              }
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.7 }}
            >
              KNOWLEDGE / DISCOVERY
            </motion.span>
          </motion.div>
        </div>

        {/* Hero footer */}
        <motion.div
          className="pub-hero-footer"
          initial={
            shouldReduceMotion
              ? false
              : { opacity: 0, y: 15 }
          }
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          <span>DR. ARSHAD RIAZ</span>

          <span>PUBLICATIONS &amp; RESEARCH OUTPUTS</span>
        </motion.div>
      </section>

      {/* Archive section */}
      <section className="publications-content">
        <div className="publications-container">
          {/* Archive heading */}
          <motion.div
            className="pub-section-heading"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <motion.div variants={revealLeft}>
              <span className="pub-section-kicker">
                <span className="pub-section-kicker-line" />
                THE ARCHIVE
              </span>

              <h2>
                Selected by <span>year.</span>
              </h2>

              <p>
                Browse and search the publication record.
              </p>
            </motion.div>

            <motion.div
              className="pub-archive-total"
              variants={revealRight}
            >
              <span>RECORDS</span>

              <strong>
                {formatNumber(filteredPublications.length)}
              </strong>
            </motion.div>
          </motion.div>

          {/* Search and filters */}
          <motion.div
            className="pub-filter-panel"
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 30,
                    scale: 0.98,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={viewportSettings}
            transition={{
              duration: 0.75,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="pub-search-wrap">
              <Search size={18} />

              <input
                type="text"
                value={searchTerm}
                onChange={(event) =>
                  setSearchTerm(event.target.value)
                }
                placeholder="Search titles, authors, journals..."
                aria-label="Search publications"
              />

              {searchTerm && (
                <button
                  className="pub-search-clear"
                  onClick={() => setSearchTerm("")}
                  aria-label="Clear search"
                  type="button"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            <div className="pub-filter-divider" />

            <div className="pub-year-select-wrap">
              <SlidersHorizontal size={16} />

              <select
                value={selectedYear}
                onChange={(event) =>
                  setSelectedYear(event.target.value)
                }
                aria-label="Filter by year"
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year === "All" ? "All years" : year}
                  </option>
                ))}
              </select>

              <ChevronDown
                className="pub-select-chevron"
                size={15}
              />
            </div>

            {(searchTerm || selectedYear !== "All") && (
              <motion.button
                className="pub-reset-button"
                onClick={clearFilters}
                type="button"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileTap={{ scale: 0.95 }}
              >
                Reset <X size={14} />
              </motion.button>
            )}
          </motion.div>

          {/* Results count */}
          <motion.div
            className="pub-results-line"
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, y: 15 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportSettings}
            transition={{ duration: 0.6 }}
          >
            <span>
              DISPLAYING{" "}
              <strong>
                {formatNumber(filteredPublications.length)}
              </strong>{" "}
              OF{" "}
              <strong>
                {formatNumber(publications.length)}
              </strong>{" "}
              RECORDS
            </span>

            <span className="pub-results-status">
              <span />
              ARCHIVE INDEX
            </span>
          </motion.div>

          {/* Publication list */}
          <div className="pub-list">
            {filteredPublications.length > 0 ? (
              filteredPublications.map(
                (publication, index) => {
                  const citation = publication.citation || "";

                  // Extract DOI links from the citation
                  const doiMatch = citation.match(
                    /https?:\/\/(?:dx\.)?doi\.org\/[^\s]+/i
                  );

                  const doi = doiMatch
                    ? doiMatch[0].replace(/[.,;]+$/, "")
                    : null;

                  return (
                    <motion.article
                      className="pub-record"
                      key={publication.number ?? index}
                      initial={
                        shouldReduceMotion
                          ? false
                          : {
                              opacity: 0,
                              y: 35,
                              scale: 0.985,
                              filter: "blur(5px)",
                            }
                      }
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        filter: "blur(0px)",
                      }}
                      viewport={{
                        once: true,
                        amount: 0.08,
                        margin: "0px 0px -35px 0px",
                      }}
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.7,
                        delay: shouldReduceMotion
                          ? 0
                          : Math.min((index % 3) * 0.09, 0.18),
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      {/* Publication number */}
                      <div className="pub-record-index">
                        <span>NO.</span>

                        <strong>
                          {formatNumber(publication.number)}
                        </strong>
                      </div>

                      {/* Publication details */}
                      <div className="pub-record-main">
                        <div className="pub-record-meta">
                          <span className="pub-record-year">
                            {publication.year || "YEAR N/A"}
                          </span>

                          <span className="pub-record-type">
                            <span />
                            RESEARCH ARTICLE
                          </span>
                        </div>

                        {/* Full citation */}
                        <h3 className="pub-record-citation">
                          {citation || "Citation unavailable"}
                        </h3>

                        <div className="pub-record-journal">
                          <Quote size={14} />

                          <span>Publication reference</span>
                        </div>
                      </div>

                      {/* DOI action */}
                      <div className="pub-record-action">
                        {doi ? (
                          <motion.a
                            href={doi}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Open publication DOI"
                            className="pub-doi-link"
                            whileHover={
                              shouldReduceMotion
                                ? {}
                                : {
                                    y: -4,
                                    scale: 1.08,
                                  }
                            }
                            whileTap={{ scale: 0.92 }}
                          >
                            <ArrowUpRight size={19} />
                          </motion.a>
                        ) : (
                          <span className="pub-record-arrow">
                            <ArrowUpRight size={19} />
                          </span>
                        )}
                      </div>
                    </motion.article>
                  );
                }
              )
            ) : (
              /* Empty state */
              <motion.div
                className="pub-empty-state"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="pub-empty-icon">
                  <Search size={26} />
                </div>

                <h3>No matching publications</h3>

                <p>
                  Try another keyword or select a different year.
                </p>

                <button
                  onClick={clearFilters}
                  type="button"
                >
                  Clear all filters
                  <ArrowUpRight size={16} />
                </button>
              </motion.div>
            )}
          </div>

          {/* Bottom signature */}
          <motion.div
            className="pub-bottom-note"
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 25,
                    filter: "blur(4px)",
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p>
              Research publications of
              <strong> Dr. Arshad Riaz</strong>
            </p>

            <span className="pub-bottom-count">
              END OF RESULTS
            </span>
          </motion.div>
        </div>
      </section>
    </main>
  );
}