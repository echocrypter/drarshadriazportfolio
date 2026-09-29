
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  GraduationCap,
  Award,
  Code2,
  Sparkles,
} from "lucide-react";
import "./AboutPage.css";

function AboutPage() {
  const shouldReduceMotion = useReducedMotion();

  // Reusable scroll reveal animation
  const reveal = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 28,
      filter: shouldReduceMotion ? "blur(0px)" : "blur(5px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.75,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Parent animation for staggered children
  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const viewportSettings = {
    once: true,
    amount: 0.12,
    margin: "0px 0px -60px 0px",
  };

  // Hero entrance animations
  const heroText = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 35,
      filter: shouldReduceMotion ? "blur(0px)" : "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.85,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const heroCard = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      x: shouldReduceMotion ? 0 : 35,
      scale: shouldReduceMotion ? 1 : 0.96,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.9,
        ease: [0.22, 1, 0.36, 1],
        delay: shouldReduceMotion ? 0 : 0.2,
      },
    },
  };

  const education = [
    {
      degree: "PhD Mathematics",
      institution: "International Islamic University Islamabad",
      year: "2014",
      result: "CGPA 4.0/4.0",
      level: "DOCTORAL",
    },
    {
      degree: "MS Mathematics",
      institution: "International Islamic University Islamabad",
      year: "2010",
      result: "CGPA 3.9/4.0",
      level: "POSTGRADUATE",
    },
    {
      degree: "M.Sc Mathematics",
      institution: "University of the Punjab",
      year: "2006",
      result: "76%",
      level: "MASTER'S",
    },
    {
      degree: "B.Sc",
      institution: "University of Sargodha",
      year: "2004",
      result: "74%",
      level: "UNDERGRADUATE",
    },
    {
      degree: "F.Sc Pre Engineering",
      institution: "BISE Sargodha",
      year: "2002",
      result: "71%",
      level: "INTERMEDIATE",
    },
    {
      degree: "Matric Science",
      institution: "BISE Sargodha",
      year: "2000",
      result: "80%",
      level: "SECONDARY",
    },
  ];

  const achievements = [
    {
      number: "01",
      title: "HEC Indigenous Scholarship",
      description:
        "Awarded for MS and PhD studies under Phase-I, Batch-V.",
      icon: Award,
    },
    {
      number: "02",
      title: "Gold Medalist",
      description: "MS Mathematics, 2010.",
      icon: GraduationCap,
    },
    {
      number: "03",
      title: "Third Merit Position",
      description: "B.Sc., 2004.",
      icon: Sparkles,
    },
     {
      number: "04",
      title: "Included in the list of top 2% scientists of the world by Standford University, USA.(2022)",
      description: "Recognized for significant contributions to the field of mathematics and research.",
      icon: Award,
      
      
    },
    {
      number: "05",
      title: "Included in the list of top 2% scientists of the world by Standford University, USA.(2023)",
      description: "Recognized for significant contributions to the field of mathematics and research.",
      icon: Award,
      
      
    },
    {
      number: "06",
      title: "Included in the list of top 2% scientists of the world by Standford University, USA.(2024)",
      description: "Recognized for significant contributions to the field of mathematics and research.",
      icon: Award,
      
      
    },
  ];

  const technicalSkills = [
    "Modeling and Analysis",
    "Mathematica",
    "MatLab",
    "Latex",
    "MS Office",
    "Scientific Workplace",
  ];

  return (
    <div className="about-page" id="about">
      {/* HERO */}
      <section className="about-hero">
        <motion.div
          className="about-hero-glow"
          initial={false}
          animate={
            shouldReduceMotion
              ? { opacity: 0.7 }
              : {
                  opacity: [0.45, 0.8, 0.45],
                  scale: [1, 1.06, 1],
                }
          }
          transition={{
            duration: 9,
            repeat: shouldReduceMotion ? 0 : Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="about-grid-bg" />

        <div className="about-container about-hero-content">
          <motion.div
            className="about-eyebrow"
            variants={heroText}
            initial="hidden"
            animate="visible"
          >
            <span className="about-dot" />
            ACADEMIC PROFILE
            <span className="about-eyebrow-line" />
            <span className="about-eyebrow-number">
              01 / PROFILE
            </span>
          </motion.div>

          <div className="about-hero-layout">
            <motion.div
              className="about-hero-title"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.span
                className="about-kicker"
                variants={heroText}
              >
                THE ACADEMIC JOURNEY
              </motion.span>

              <motion.h1 variants={heroText}>
                Academic
                <br />
                <span>profile.</span>
              </motion.h1>

              <motion.div
                className="about-title-bottom"
                variants={heroText}
              >
                
                <p>
                  Mathematics, academic excellence, and a
                  commitment to research and education.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              className="about-profile-card"
              variants={heroCard}
              initial="hidden"
              animate="visible"
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -5,
                      transition: { duration: 0.3 },
                    }
              }
            >
              <div className="about-profile-card-top">
                <span className="about-card-status">
                  <span className="about-dot" />
                  CURRENT APPOINTMENT
                </span>
                <span className="about-card-index">01</span>
              </div>

              <motion.div
                className="about-profile-symbol"
                initial={false}
                animate={
                  shouldReduceMotion
                    ? {}
                    : { rotate: [0, -3, 3, 0] }
                }
                transition={{
                  duration: 5,
                  repeat: shouldReduceMotion ? 0 : Infinity,
                  ease: "easeInOut",
                }}
              >
                <GraduationCap size={44} strokeWidth={1.1} />
              </motion.div>

              <span className="about-profile-label">
                CURRENT POSITION
              </span>

              <h2>Tenured Associate Professor</h2>

              <p className="about-profile-position">
                On Tenure Track System (TTS)
              </p>

              <div className="about-profile-divider" />

              <div className="about-profile-institution">
                <span>INSTITUTION</span>
                <p>University of Education, Lahore</p>
                <p>Jauharabad Campus</p>
              </div>

              <div className="about-profile-footer">
                <span>MATHEMATICS</span>
                <span>ACADEMIA · RESEARCH</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="about-hero-footer"
            initial={{
              opacity: shouldReduceMotion ? 1 : 0,
              y: shouldReduceMotion ? 0 : 15,
            }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0.01 : 0.7,
              delay: shouldReduceMotion ? 0 : 0.65,
            }}
          >
            <span>DR. ARSHAD RIAZ</span>
            <span>MATHEMATICS · ACADEMIC PROFILE</span>

            <a href="#about-education">
              EXPLORE PROFILE
              <ArrowUpRight size={15} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="about-introduction">
        <div className="about-container">
          <motion.div
            className="about-intro-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <motion.div
              className="about-intro-heading"
              variants={reveal}
            >
              <span className="about-section-index">
                01 — INTRODUCTION
              </span>

              <h2>
                A foundation in
                <br />
                <span>mathematics.</span>
              </h2>
            </motion.div>

            <motion.div
              className="about-intro-content"
              variants={reveal}
            >
              <motion.div
                className="about-intro-line"
                initial={{
                  scaleY: shouldReduceMotion ? 1 : 0,
                }}
                whileInView={{ scaleY: 1 }}
                viewport={viewportSettings}
                transition={{
                  duration: shouldReduceMotion ? 0.01 : 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{ transformOrigin: "top" }}
              />

              <p>
                Dr. Arshad Riaz is a Tenured Associate Professor
                on TTS at the University of Education, Lahore,
                Jauharabad Campus.
              </p>

              <p>
                His academic and research work is centered on
                applied mathematics, differential equations,
                fluid flows, nanofluids, and mathematical
                modeling.
              </p>

              <a
                href="https://scholar.google.com/citations?user=Bt2TNdwAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="about-scholar-link"
              >
                GOOGLE SCHOLAR
                <ArrowUpRight size={16} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* EDUCATION */}
      <section
        className="about-section about-education"
        id="about-education"
      >
        <div className="about-container">
          <motion.div
            className="about-section-header"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <div>
              <span className="about-section-index">
                02 — ACADEMIC BACKGROUND
              </span>

              <h2>
                Education &amp; <span>qualifications.</span>
              </h2>
            </div>

            <div className="about-section-count">
              <GraduationCap size={21} />
              <span>06 QUALIFICATIONS</span>
            </div>
          </motion.div>

          <div className="about-education-list">
            {education.map((item, index) => (
              <motion.article
                className="about-education-item"
                key={item.degree}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
                transition={{
                  delay: shouldReduceMotion ? 0 : index * 0.09,
                }}
              >
                <div className="about-education-timeline">
                  <span className="about-education-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <motion.span
                    className="about-education-timeline-line"
                    initial={{
                      scaleY: shouldReduceMotion ? 1 : 0,
                    }}
                    whileInView={{ scaleY: 1 }}
                    viewport={viewportSettings}
                    transition={{
                      duration: shouldReduceMotion ? 0.01 : 0.6,
                      delay: shouldReduceMotion ? 0 : index * 0.08,
                    }}
                    style={{ transformOrigin: "top" }}
                  />
                </div>

                <div className="about-education-main">
                  <span className="about-education-level">
                    {item.level}
                  </span>

                  <h3>{item.degree}</h3>
                  <p>{item.institution}</p>
                </div>

                <div className="about-education-meta">
                  <span className="about-education-year">
                    {item.year}
                  </span>

                  <div className="about-education-result">
                    <span>RESULT</span>
                    <strong>{item.result}</strong>
                  </div>
                </div>

                <ArrowUpRight
                  className="about-education-arrow"
                  size={20}
                />
              </motion.article>
            ))}
          </div>

          <motion.div
            className="about-education-note"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <span className="about-dot" />
            ACADEMIC QUALIFICATIONS · 2000 — 2014
          </motion.div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="about-section about-achievements">
        <div className="about-container">
          <motion.div
            className="about-section-header"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <div>
              <span className="about-section-index">
                03 — RECOGNITION
              </span>

              <h2>
                Academic <span>distinctions.</span>
              </h2>
            </div>

            <div className="about-section-count">
              <Award size={21} />
              <span>ACHIEVEMENTS</span>
            </div>
          </motion.div>

          <motion.div
            className="about-achievement-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            {achievements.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  className="about-achievement-card"
                  key={item.number}
                  variants={reveal}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: -6,
                          transition: { duration: 0.25 },
                        }
                  }
                >
                  <div className="about-achievement-top">
                    <span>{item.number}</span>
                    <Icon size={23} strokeWidth={1.3} />
                  </div>

                  <div className="about-achievement-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>

                  <div className="about-achievement-bottom">
                    <span>ACADEMIC RECOGNITION</span>
                    <ArrowUpRight size={17} />
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* TECHNICAL STRENGTHS */}
      <section className="about-section about-technical">
        <div className="about-container">
          <motion.div
            className="about-technical-layout"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <motion.div
              className="about-technical-heading"
              variants={reveal}
            >
              <span className="about-section-index">
                04 — TECHNICAL STRENGTHS
              </span>

              <h2>
                Tools for
                <br />
                <span>mathematical</span>
                <br />
                analysis.
              </h2>

              <p>
                Technical strengths and computational tools
                documented in the academic CV.
              </p>

              <div className="about-technical-decoration">
                <Code2 size={25} strokeWidth={1.2} />
                <span>MATHEMATICS · COMPUTATION</span>
              </div>
            </motion.div>

            <motion.div
              className="about-technical-grid"
              variants={staggerContainer}
            >
              {technicalSkills.map((skill, index) => (
                <motion.div
                  className="about-technical-card"
                  key={skill}
                  variants={reveal}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: -4,
                          transition: { duration: 0.25 },
                        }
                  }
                >
                  <div className="about-technical-card-top">
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <ArrowUpRight size={17} />
                  </div>

                  <h3>{skill}</h3>

                  <motion.div
                    className="about-technical-card-line"
                    initial={{
                      scaleX: shouldReduceMotion ? 1 : 0.35,
                    }}
                    whileInView={{ scaleX: 1 }}
                    viewport={viewportSettings}
                    transition={{
                      duration: shouldReduceMotion ? 0.01 : 0.6,
                      delay: shouldReduceMotion ? 0 : index * 0.06,
                    }}
                    style={{ transformOrigin: "left" }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="about-bottom-note"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <span className="about-dot" />
            <span>DR. ARSHAD RIAZ · ACADEMIC PROFILE</span>

            <span className="about-bottom-note-right">
              END OF PROFILE
            </span>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;