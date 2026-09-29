
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import "./Contact.css";

function ContactPage() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.75,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <main className="contact-page">
      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-container">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0.01 : 0.6,
            }}
          >
            <Link to="/" className="contact-back-link">
              <ArrowLeft size={16} aria-hidden="true" />
              <span>Back to Home</span>
            </Link>
          </motion.div>

          <motion.div
            className="contact-hero-content"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0.01 : 0.8,
              delay: shouldReduceMotion ? 0 : 0.1,
            }}
          >
            <p className="contact-eyebrow">
              <span className="contact-dot" aria-hidden="true" />
              GET IN TOUCH
            </p>

            <h1>
              Contact
              <span>Dr. Arshad Riaz.</span>
            </h1>

            <p className="contact-intro">
              For academic and research correspondence.
            </p>
          </motion.div>

          <motion.div
            className="contact-hero-bottom"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: shouldReduceMotion ? 0.01 : 0.7,
              delay: shouldReduceMotion ? 0 : 0.4,
            }}
          >
            <span>DR. ARSHAD RIAZ</span>
            <span>ACADEMIA · RESEARCH</span>
          </motion.div>
        </div>
      </section>

      {/* CONTACT DETAILS */}
      <section className="contact-content">
        <div className="contact-container">
          <motion.div
            className="contact-section-heading"
            variants={reveal}
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView={shouldReduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="contact-section-index">
              01 — CORRESPONDENCE
            </span>

            <h2>
              Let's start a
              <span> conversation.</span>
            </h2>
          </motion.div>

          <div className="contact-grid">
            <motion.article
              className="contact-card"
              variants={reveal}
              initial={shouldReduceMotion ? false : "hidden"}
              whileInView={shouldReduceMotion ? undefined : "visible"}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={
                shouldReduceMotion ? undefined : { y: -5 }
              }
            >
              <div className="contact-card-top">
                <div className="contact-icon">
                  <Mail
                    size={22}
                    strokeWidth={1.4}
                    aria-hidden="true"
                  />
                </div>

                <span className="contact-card-number">01</span>
              </div>

              <p className="contact-label">EMAIL</p>

              <a
                href="mailto:arshad-riaz@ue.edu.pk"
                className="contact-email"
              >
                arshad-riaz@ue.edu.pk

                <ArrowUpRight
                  size={18}
                  aria-hidden="true"
                />
              </a>

              <div className="contact-card-bottom">
                <span>ACADEMIC CORRESPONDENCE</span>
                <span
                  className="contact-card-dot"
                  aria-hidden="true"
                />
              </div>
            </motion.article>
          </div>

          <motion.div
            className="contact-bottom-note"
            variants={reveal}
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView={shouldReduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="contact-dot" aria-hidden="true" />
            <span>MATHEMATICS · ACADEMIA · RESEARCH</span>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;