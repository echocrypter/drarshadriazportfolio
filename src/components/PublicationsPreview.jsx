import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./PublicationsPreview.css";

const latestPublications = [
  {
    number: "137",
    year: "2026",
    title:
      "Mathematical and Computer Modeling of Electroosmotic Peristaltic Transport of a Biofluid with Double-Diffusive Convection and Thermal Radiation.",
    journal: "Computer Modeling in Engineering Sciences, 146(3)",
  },
  {
    number: "136",
    year: "2025",
    title:
      "Double Diffusion Convection in Sisko Nanofluids with Thermal Radiation and Electroosmotic Effects: A Morlet-Wavelet Neural Network Approach.",
    journal: "Computer Modeling in Engineering Sciences, 145(3), 3481",
  },
  {
    number: "135",
    year: "2025",
    title:
      "Mathematical modeling and analysis of nonlinear peristaltic transport in thermally radiative Williamson nanofluids with magneto-diffusive coupling.",
    journal: "Electromagnetic Biology and Medicine, 1-16",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function PublicationsPreview() {
  const shouldReduceMotion = useReducedMotion();

  const animation = shouldReduceMotion
    ? {
        initial: false,
        whileInView: undefined,
        viewport: undefined,
        variants: undefined,
      }
    : {
        variants: reveal,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.15 },
      };

  return (
    <section className="publications-preview" id="publications-preview">
      <div className="publications-preview-inner">
        <motion.div
          className="publications-preview-header"
          {...animation}
        >
          <div className="publications-preview-heading">
            <span className="publications-preview-number">04</span>
            <span className="publications-preview-label">
              SELECTED PUBLICATIONS
            </span>
          </div>

          <Link to="/publications" className="publications-preview-all">
            <span>View all publications</span>
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </motion.div>

        <div className="publication-preview-list">
          {latestPublications.map((publication, index) => (
            <motion.article
              className="publication-preview-item"
              key={publication.number}
              variants={shouldReduceMotion ? undefined : reveal}
              initial={shouldReduceMotion ? false : "hidden"}
              whileInView={shouldReduceMotion ? undefined : "visible"}
              viewport={
                shouldReduceMotion
                  ? undefined
                  : { once: true, amount: 0.2 }
              }
              transition={{
                delay: shouldReduceMotion ? 0 : index * 0.12,
              }}
            >
              <div className="publication-preview-meta">
                <span className="publication-preview-number">
                  /{publication.number}
                </span>
                <span className="publication-preview-year">
                  {publication.year}
                </span>
              </div>

              <div className="publication-preview-content">
                <h3>{publication.title}</h3>
                <p>{publication.journal}</p>
              </div>

              <div className="publication-preview-action" aria-hidden="true">
                <ArrowUpRight
                  className="publication-preview-icon"
                  size={20}
                />
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="publications-preview-footer"
          {...animation}
        >
          <span>MATHEMATICS · RESEARCH · PUBLICATIONS</span>
          <Link to="/publications">
            Explore research output
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default PublicationsPreview;
