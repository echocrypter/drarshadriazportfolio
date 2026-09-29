import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { researchInterests } from "../data/research";
import "./ResearchInterests.css";

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function ResearchInterests() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="research-interests" id="research">
      <div className="research-interests-inner">
        <motion.div
          className="research-header"
          variants={reveal}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView={shouldReduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="research-header-title">
            <span className="research-number">03</span>
            <span className="research-label">
              RESEARCH INTERESTS
            </span>
          </div>

          <p>
            Areas of mathematical research represented across Dr. Arshad
            Riaz&apos;s academic work.
          </p>
        </motion.div>

        <div className="research-list">
          {researchInterests.map((interest, index) => (
            <motion.article
              className="research-item"
              key={interest.number}
              variants={reveal}
              initial={shouldReduceMotion ? false : "hidden"}
              whileInView={shouldReduceMotion ? undefined : "visible"}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.75,
                delay: shouldReduceMotion ? 0 : index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : { x: 6, transition: { duration: 0.3 } }
              }
            >
              <span
                className="research-timeline-line"
                aria-hidden="true"
              />

              <span className="research-item-number">
                {interest.number}
              </span>

              <h3>{interest.title}</h3>

              <div
                className="research-item-action"
                aria-hidden="true"
              >
                <ArrowUpRight
                  className="research-item-icon"
                  size={20}
                  strokeWidth={1.5}
                />
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="research-bottom-note"
          variants={reveal}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView={shouldReduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className="research-bottom-dot" />
          <span>
            MATHEMATICS · MODELING · SCIENTIFIC RESEARCH
          </span>
        </motion.div>
      </div>
    </section>
  );
}

export default ResearchInterests;