import { motion } from "framer-motion";

import {
  ArrowUpRight,
  FlaskConical,
  BookOpen,
  GraduationCap,
  Sparkles,
  FileText,
  CheckCircle2,
} from "lucide-react";

import "./ResearchOutputs.css";

// IMPORTANT: The spelling here must match your actual filename.
// If your file is reasearchOutputs.js, keep this import as written.
import {
  acceptedArticles,
  submittedArticles,
} from "../data/researchOutputs";

const reviewedProjects = [
  {
    number: "14550",
    title:
      "Numerical approach in symmetric/hybrid waveguide modelling of vocal tract to generate real-time speech",
    program: "NRPU-2021",
  },
  {
    number: "15204",
    title: "Symmetries of differential equations",
    program: "NRPU-2022",
  },
  {
    number: "17274",
    title: "Solitons in optical fibers/nonlinear optics",
    program: "NRPU-2022",
  },
];

const awardedProjects = [
  {
    number: "NRPU-17319",
    title:
      "Mathematical Modeling for Mass Transport of Fluid exhibits both viscoelastic and Shear Thinning characteristics",
    role: "Principal Investigator",
  },
  {
    number: "SRGP-254",
    title: "Meshless Analysis for Heat Transfer in Cavity Flow",
    role: "Co-Principal Investigator",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function ResearchOutputsPage() {
  return (
    <main className="research-outputs-page">
      {/* HERO */}
      <section className="ro-hero">
        <div className="ro-hero-glow" />
        <div className="ro-hero-grid-bg" />

        <div className="ro-container ro-hero-content">
          <motion.div
            className="ro-eyebrow"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="ro-status-dot" />
            ACADEMIC RESEARCH & DEVELOPMENT
            <span className="ro-eyebrow-line" />
            <span className="ro-eyebrow-number">04 / 04</span>
          </motion.div>

          <div className="ro-hero-layout">
            <motion.div
              className="ro-hero-title"
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span className="ro-kicker">
                BEYOND THE CLASSROOM
              </span>

              <h1>
                Research
                <br />
                <span>in practice.</span>
              </h1>

              <div className="ro-title-bottom">
                <span className="ro-title-mark">AR.</span>

                <p>
                  Exploring mathematical ideas through research
                  projects, scientific inquiry, and academic
                  supervision.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="ro-hero-visual"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.25 }}
            >
              <div className="ro-orbit ro-orbit-one" />
              <div className="ro-orbit ro-orbit-two" />

              <div className="ro-visual-center">
                <FlaskConical size={54} strokeWidth={1} />
                <span>RESEARCH</span>
              </div>

              <div className="ro-floating-tag ro-tag-one">
                <span className="ro-tag-dot" />
                MATHEMATICAL MODELLING
              </div>

              <div className="ro-floating-tag ro-tag-two">
                ANALYTICAL METHODS
              </div>

              <span className="ro-visual-index">01</span>

              <span className="ro-visual-caption">
                THEORY / ANALYSIS / APPLICATION
              </span>
            </motion.div>
          </div>

          <motion.div
            className="ro-hero-bottom"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <span>DR. ARSHAD RIAZ</span>
            <span>MATHEMATICS · RESEARCH</span>

            <a href="#ro-projects">
              EXPLORE PROJECTS
              <ArrowUpRight size={15} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* RESEARCH OVERVIEW */}
      <section className="ro-overview">
        <div className="ro-container">
          <motion.div
            className="ro-overview-grid"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="ro-overview-intro">
              <span className="ro-section-index">
                01 — OVERVIEW
              </span>

              <h2>
                Research built
                <br />
                around <span>discovery.</span>
              </h2>
            </div>

            <div className="ro-overview-description">
              <div className="ro-description-line" />

              <p>
                A record of reviewed and awarded research projects,
                scholarly articles, and postgraduate and
                undergraduate research supervision.
              </p>

              <div className="ro-overview-tags">
                <span>Research Projects</span>
                <span>Academic Supervision</span>
                <span>Mathematics</span>
              </div>
            </div>
          </motion.div>

          {/* STATISTICS */}
          <div className="ro-stats">
            {[
              {
                value: "03",
                label: "PROJECTS REVIEWED",
                icon: BookOpen,
              },
              {
                value: "02",
                label: "PROJECTS AWARDED",
                icon: Sparkles,
              },
              {
                value: "30",
                label: "SUPERVISION TOPICS",
                icon: GraduationCap,
              },
            ].map((stat, index) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  className="ro-stat"
                  key={stat.label}
                  variants={reveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                >
                  <div className="ro-stat-top">
                    <Icon size={19} strokeWidth={1.4} />
                    <span>0{index + 1}</span>
                  </div>

                  <strong>{stat.value}</strong>

                  <span className="ro-stat-label">
                    {stat.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* REVIEWED PROJECTS */}
      <section className="ro-projects" id="ro-projects">
        <div className="ro-container">
          <motion.div
            className="ro-section-header"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div>
              <span className="ro-section-index">
                02 — RESEARCH PORTFOLIO
              </span>

              <h2>
                Projects <span>reviewed.</span>
              </h2>
            </div>

            <div className="ro-header-count">
              <span>03</span>
              <span>PROJECTS</span>
            </div>
          </motion.div>

          <div className="ro-project-grid">
            {reviewedProjects.map((project, index) => (
              <motion.article
                className="ro-project-card"
                key={project.number}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: index * 0.12 }}
              >
                <div className="ro-card-top">
                  <span className="ro-card-index">
                    PROJECT / 0{index + 1}
                  </span>

                  <span className="ro-card-arrow">
                    <ArrowUpRight size={20} />
                  </span>
                </div>

                <div className="ro-card-number">
                  {project.number}
                </div>

                <div className="ro-card-content">
                  <span className="ro-card-category">
                    RESEARCH PROJECT
                  </span>

                  <h3>{project.title}</h3>
                </div>

                <div className="ro-card-footer">
                  <span>{project.program}</span>
                  <span className="ro-card-footer-line" />
                  <span>REVIEWED</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* AWARDED PROJECTS */}
      <section className="ro-awarded">
        <div className="ro-container">
          <motion.div
            className="ro-section-header"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div>
              <span className="ro-section-index">
                03 — RESEARCH FUNDING
              </span>

              <h2>
                Projects <span>awarded.</span>
              </h2>
            </div>

            <div className="ro-header-count">
              <span>02</span>
              <span>PROJECTS</span>
            </div>
          </motion.div>

          <div className="ro-awarded-list">
            {awardedProjects.map((project, index) => (
              <motion.article
                className="ro-awarded-card"
                key={project.number}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.15 }}
              >
                <div className="ro-awarded-index">
                  <span>0{index + 1}</span>
                  <div />
                  <span>AWARDED</span>
                </div>

                <div className="ro-awarded-content">
                  <span className="ro-awarded-number">
                    {project.number}
                  </span>

                  <h3>{project.title}</h3>

                  <span className="ro-awarded-role">
                    {project.role}
                  </span>
                </div>

                <div className="ro-awarded-icon">
                  <ArrowUpRight size={22} />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ACCEPTED ARTICLE */}
      <section className="ro-articles">
        <div className="ro-container">
          <motion.div
            className="ro-section-header"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div>
              <span className="ro-section-index">
                04 — SCHOLARLY PUBLICATIONS
              </span>

              <h2>
                Accepted <span>article.</span>
              </h2>
            </div>

            <div className="ro-header-count">
              <span>
                {String(acceptedArticles.length).padStart(2, "0")}
              </span>
              <span>ARTICLE</span>
            </div>
          </motion.div>

          <div className="ro-article-list">
            {acceptedArticles.map((article, index) => (
              <motion.article
                className="ro-article-card ro-article-accepted"
                key={article.number}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: index * 0.08 }}
              >
                <div className="ro-article-card-top">
                  <span className="ro-article-index">
                    ARTICLE {String(article.number).padStart(3, "0")}
                  </span>

                  <span className="ro-article-status accepted">
                    <CheckCircle2 size={15} />
                    ACCEPTED
                  </span>
                </div>

                <div className="ro-article-citation">
                  <FileText
                    className="ro-article-icon"
                    size={22}
                  />

                  <p>{article.citation}</p>
                </div>

                <div className="ro-article-card-footer">
                  <span>ACCEPTED ARTICLE</span>
                  <span className="ro-card-footer-line" />
                  <span>
                    <CheckCircle2 size={14} />
                    {article.number}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* SUBMITTED ARTICLES */}
      <section className="ro-articles ro-submitted">
        <div className="ro-container">
          <motion.div
            className="ro-section-header"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div>
              <span className="ro-section-index">
                05 — MANUSCRIPTS
              </span>

              <h2>
                Submitted <span>articles.</span>
              </h2>

              <p className="ro-articles-description">
                Manuscripts and research articles listed in the
                submitted articles record.
              </p>
            </div>

            <div className="ro-header-count">
              <span>
                {String(submittedArticles.length).padStart(2, "0")}
              </span>
              <span>ARTICLES</span>
            </div>
          </motion.div>

          <div className="ro-article-list">
            {submittedArticles.map((article, index) => (
              <motion.article
                className="ro-article-card"
                key={`${article.number}-${index}`}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.08 }}
                transition={{ delay: (index % 4) * 0.08 }}
              >
                <div className="ro-article-card-top">
                  <span className="ro-article-index">
                    ARTICLE {String(article.number).padStart(3, "0")}
                  </span>

                  <span className="ro-article-status submitted">
                    <FileText size={14} />
                    SUBMITTED
                  </span>
                </div>

                <div className="ro-article-citation">
                  <FileText
                    className="ro-article-icon"
                    size={22}
                  />

                  <p>{article.citation}</p>
                </div>

                <div className="ro-article-card-footer">
                  <span>SUBMITTED MANUSCRIPT</span>
                  <span className="ro-card-footer-line" />
                  <span>
                    NO. {String(article.number).padStart(2, "0")}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* SUPERVISION */}
      <section className="ro-supervision">
        <div className="ro-container">
          <motion.div
            className="ro-supervision-heading"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="ro-section-index">
              06 — ACADEMIC MENTORSHIP
            </span>

            <h2>
              Developing
              <br />
              <span>future researchers.</span>
            </h2>

            <p>
              Research supervision across postgraduate and
              undergraduate academic programmes.
            </p>
          </motion.div>

          <div className="ro-supervision-grid">
            <motion.div
              className="ro-supervision-card ro-supervision-featured"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="ro-supervision-card-top">
                <span>01 / POSTGRADUATE</span>
                <GraduationCap size={23} strokeWidth={1.3} />
              </div>

              <div className="ro-supervision-number">
                20<span>+</span>
              </div>

              <h3>MS / PhD</h3>
              <p>Research topics supervised</p>

              <div className="ro-supervision-bottom">
                <span>POSTGRADUATE RESEARCH</span>
                <ArrowUpRight size={17} />
              </div>
            </motion.div>

            <motion.div
              className="ro-supervision-card"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <div className="ro-supervision-card-top">
                <span>02 / UNDERGRADUATE</span>
                <BookOpen size={23} strokeWidth={1.3} />
              </div>

              <div className="ro-supervision-number">
                16<span>+</span>
              </div>

              <h3>BS / M.Sc</h3>
              <p>Research topics supervised</p>

              <div className="ro-supervision-bottom">
                <span>UNDERGRADUATE RESEARCH</span>
                <ArrowUpRight size={17} />
              </div>
            </motion.div>
          </div>

          <div className="ro-supervision-note">
            <span className="ro-status-dot" />
            RESEARCH · EDUCATION · ACADEMIC DEVELOPMENT
          </div>
        </div>
      </section>
    </main>
  );
}

export default ResearchOutputsPage;