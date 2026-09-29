
import {
  ArrowDown,
  BookOpen,
  MoveUpRight,
} from "lucide-react";

import {
  motion,
  useReducedMotion,
} from "framer-motion";

import "./Hero.css";

const heroContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.12,
    },
  },
};

const heroTextReveal = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const heroRoleReveal = {
  hidden: {
    opacity: 0,
    x: -24,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const heroPortraitReveal = {
  hidden: {
    opacity: 0,
    scale: 0.92,
    x: 35,
    filter: "blur(12px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      delay: 0.25,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero" id="home">
      {/* BACKGROUND */}

      <div
        className="hero-background"
        aria-hidden="true"
      >
        <motion.div
          className="hero-glow hero-glow-one"
          animate={
            reduceMotion
              ? {}
              : {
                  x: [0, 15, 0],
                  y: [0, -12, 0],
                  scale: [1, 1.06, 1],
                }
          }
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="hero-glow hero-glow-two"
          animate={
            reduceMotion
              ? {}
              : {
                  x: [0, -12, 0],
                  y: [0, 14, 0],
                }
          }
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="hero-grid-pattern" />
      </div>

      {/* HERO CONTENT */}

      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={heroContainer}
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
        >
          {/* Name */}

          <motion.h1
            className="hero-title"
            variants={heroTextReveal}
          >
            Dr. Arshad

            <span className="hero-title-accent">
              Riaz
            </span>
          </motion.h1>

          {/* Academic Position */}

          <motion.div
            className="hero-role-wrapper"
            variants={heroRoleReveal}
          >
            <motion.span
              className="hero-role-line"
              initial={
                reduceMotion
                  ? false
                  : { scaleX: 0, opacity: 0 }
              }
              animate={{
                scaleX: 1,
                opacity: 1,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.8,
                delay: reduceMotion ? 0 : 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
            />

            <p className="hero-role">
              Tenured Associate Professor on TTS
            </p>
          </motion.div>

          {/* Institution */}

          <motion.p
            className="hero-institution"
            variants={heroTextReveal}
          >
            University of Education, Lahore

            <span>
              Jauharabad Campus
            </span>
          </motion.p>

          {/* Description */}

          <motion.p
            className="hero-description"
            variants={heroTextReveal}
          >
            Research in applied mathematics,
            differential equations, fluid mechanics,
            nanofluids, peristaltic flows, and
            mathematical modeling.
          </motion.p>

          {/* CTA BUTTONS */}

          <motion.div
            className="hero-actions"
            variants={heroTextReveal}
          >
            {/* Explore Research */}

            <motion.a
              href="/#research"
              className="hero-primary"
              whileHover={
                reduceMotion
                  ? {}
                  : {
                      y: -4,
                      scale: 1.025,
                    }
              }
              whileTap={
                reduceMotion
                  ? {}
                  : { scale: 0.97 }
              }
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
            >
              <span>
                Explore Research
              </span>

              <motion.span
                className="hero-button-icon"
                animate={
                  reduceMotion
                    ? {}
                    : { y: [0, 4, 0] }
                }
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowDown size={17} />
              </motion.span>
            </motion.a>

            {/* View Publications */}

            <motion.a
              href="/publications"
              className="hero-secondary"
              whileHover={
                reduceMotion
                  ? {}
                  : { y: -3 }
              }
              whileTap={
                reduceMotion
                  ? {}
                  : { scale: 0.97 }
              }
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
            >
              <BookOpen size={17} />

              <span>
                View Publications
              </span>

              <MoveUpRight
                size={14}
                className="hero-secondary-arrow"
              />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* PORTRAIT */}

        <motion.div
          className="hero-visual"
          variants={heroPortraitReveal}
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
        >
          <div className="hero-portrait-orbit">

            {/* Orbit Rings */}

            <motion.div
              className="hero-orbit-ring hero-orbit-ring-one"
              animate={
                reduceMotion
                  ? {}
                  : { rotate: 360 }
              }
              transition={{
                duration: 55,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.div
              className="hero-orbit-ring hero-orbit-ring-two"
              animate={
                reduceMotion
                  ? {}
                  : { rotate: -360 }
              }
              transition={{
                duration: 38,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Portrait Frame */}

            <motion.div
              className="hero-image-frame"
              initial={
                reduceMotion
                  ? false
                  : {
                      clipPath:
                        "inset(12% 12% 12% 12% round 50%)",
                    }
              }
              animate={{
                clipPath:
                  "inset(0% 0% 0% 0% round 50%)",
              }}
              transition={{
                duration: reduceMotion ? 0 : 1.3,
                delay: reduceMotion ? 0 : 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              {/* Image Shine */}

              <motion.div
                className="hero-image-shine"
                initial={{
                  x: "-130%",
                  opacity: 0,
                }}
                animate={{
                  x: "130%",
                  opacity: [0, 0.45, 0],
                }}
                transition={{
                  duration: reduceMotion ? 0 : 1.5,
                  delay: reduceMotion ? 0 : 1.3,
                  ease: "easeInOut",
                }}
              />

              {/* PORTRAIT IMAGE — HAIR VISIBILITY FIX */}

              <img
                src="/images/arshad-riaz.jpg"
                alt="Dr. Arshad Riaz"
                className="portrait-image"

                style={{
                  width: "100%",
                  height: "100%",
                  display: "block",
                  objectFit: "cover",

                  // Keep the top of the original photo visible
                  objectPosition: "center top",

                  // Zoom out within the circular frame
                  transform: "scale(0.86)",
                  transformOrigin: "center center",

                  // Keep the image circular
                  borderRadius: "50%",
                }}
              />

            </motion.div>

            {/* Decorative Corners */}

            <motion.div
              className="hero-image-corner hero-corner-top"
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      scale: 0.7,
                    }
              }
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: reduceMotion ? 0 : 0.9,
                duration: 0.7,
              }}
            />

            <motion.div
              className="hero-image-corner hero-corner-bottom"
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      scale: 0.7,
                    }
              }
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: reduceMotion ? 0 : 1.05,
                duration: 0.7,
              }}
            />

          </div>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}

      <motion.a
        href="/#about"
        className="hero-scroll"
        aria-label="Scroll to About section"
        initial={
          reduceMotion
            ? false
            : {
                opacity: 0,
                y: 12,
              }
        }
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: reduceMotion ? 0 : 0.8,
          delay: reduceMotion ? 0 : 1.4,
        }}
      >
        <span className="hero-scroll-label">
          SCROLL TO EXPLORE
        </span>

        <div className="hero-scroll-line">
          <motion.span
            animate={
              reduceMotion
                ? {}
                : {
                    scaleY: [0, 1, 0],
                    transformOrigin: [
                      "top",
                      "top",
                      "bottom",
                    ],
                  }
            }
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.a>

    </section>
  );
}

export default Hero;