
import { useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
  Sparkles,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";

function WorkPage() {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(null);

  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Work history — preserve supplied information
  const workHistory = [
    {
      period: "27-07-2023 — DATE",
      position: "Tenured Associate Professor on TTS",
      institution: "University of Education, Lahore",
      campus: "Jauharabad Campus",
    },
    {
      period: "15-11-2016 — 26-07-2023",
      position: "Assistant Professor on TTS",
      institution: "University of Education, Lahore",
      campus: "Jauharabad Campus",
    },
    {
      period: "05-12-2014 — 10-03-2015",
      position: "Assistant Professor",
      institution: "University of Sargodha",
      campus: "Lahore Campus",
    },
    {
      period: "31-08-2013 — 04-12-2014",
      position: "Lecturer",
      institution: "University of Sargodha",
      campus: "Lahore Campus",
    },
  ];

  const reveal = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 25,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const toggleActive = (index) => {
    setActiveIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <main className="work-page" id="work">
      {!reduceMotion && (
        <motion.div
          className="work-scroll-progress"
          style={{ scaleX: smoothProgress }}
        />
      )}

      <style>{`
        /* =========================================
           WORK PAGE THEME
        ========================================= */

        .work-page {
          --work-bg: #FFFFFF;
          --work-surface: #F8FAFC;
          --work-card: #FFFFFF;
          --work-card-hover: #F8FBFF;
          --work-heading: #1E293B;
          --work-text: #334155;
          --work-muted: #64748B;
          --work-accent: #3B82F6;
          --work-accent-light: #60A5FA;
          --work-accent-dark: #2563EB;
          --work-accent-soft: rgba(59, 130, 246, 0.07);
          --work-accent-border: rgba(59, 130, 246, 0.2);
          --work-border: rgba(30, 41, 59, 0.09);

          position: relative;
          isolation: isolate;
          width: 100%;
          overflow: clip;
          background: var(--work-bg) !important;
          color: var(--work-text) !important;
        }

        .work-page *,
        .work-page *::before,
        .work-page *::after {
          box-sizing: border-box;
        }

        .work-inner {
          width: min(1180px, calc(100% - 48px));
          margin: 0 auto;
        }

        /* =========================================
           SCROLL PROGRESS
        ========================================= */

        .work-scroll-progress {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          z-index: 9999;
          background: linear-gradient(
            90deg,
            #2563EB,
            #60A5FA,
            #3B82F6
          );
          transform-origin: 0 50%;
          pointer-events: none;
          will-change: transform;
        }

        /* =========================================
           HERO
        ========================================= */

        .work-page .work-hero {
          position: relative;
          overflow: hidden;
          padding: 95px 0 30px;
          background:
            radial-gradient(
              circle at 82% 38%,
              rgba(59, 130, 246, 0.09),
              transparent 34%
            ),
            #FFFFFF !important;
          border-bottom: 1px solid var(--work-border);
        }

        .work-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image:
            linear-gradient(
              rgba(59, 130, 246, 0.04) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(59, 130, 246, 0.04) 1px,
              transparent 1px
            );
          background-size: 72px 72px;
          mask-image: linear-gradient(
            to bottom,
            black,
            transparent 90%
          );
          animation: workGridFade 7s ease-in-out infinite alternate;
        }

        @keyframes workGridFade {
          from { opacity: 0.35; }
          to { opacity: 0.7; }
        }

        .work-page .work-label {
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--work-border);
          color: var(--work-muted) !important;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.2em;
        }

        .work-page .work-label span:first-child {
          color: var(--work-accent) !important;
        }

        .work-hero-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(0, 1.3fr) minmax(260px, 0.7fr);
          gap: 80px;
          padding: 75px 0 85px;
          align-items: end;
        }

        .work-page .work-eyebrow {
          display: inline-block;
          margin-bottom: 22px;
          color: var(--work-accent-dark) !important;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.2em;
        }

        .work-page .work-hero h1 {
          margin: 0;
          color: var(--work-heading) !important;
          font-family: var(--font-heading, "Manrope", sans-serif);
          font-size: clamp(58px, 8vw, 112px);
          line-height: 0.9;
          font-weight: 800;
          letter-spacing: -0.075em;
        }

        .work-page .work-hero h1 span {
          display: block;
          margin-top: 10px;
          color: var(--work-accent) !important;
        }

        .work-hero-description {
          padding-bottom: 6px;
        }

        .work-description-line {
          display: block;
          width: 42px;
          height: 2px;
          margin-bottom: 25px;
          background: var(--work-accent);
        }

        .work-page .work-hero-description > p {
          max-width: 390px;
          margin: 0;
          color: #475569 !important;
          font-size: 14px;
          line-height: 1.9;
        }

        .work-stat {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-top: 38px;
          padding-top: 22px;
          border-top: 1px solid var(--work-border);
        }

        .work-page .work-stat-number {
          color: var(--work-accent) !important;
          font-family: var(--font-heading, "Manrope", sans-serif);
          font-size: 38px;
          font-weight: 700;
          letter-spacing: -0.06em;
        }

        .work-page .work-stat-label {
          max-width: 90px;
          color: var(--work-muted) !important;
          font-size: 10px;
          line-height: 1.6;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .work-page .work-hero-bottom {
          position: relative;
          display: flex;
          justify-content: space-between;
          gap: 20px;
          padding: 18px 0;
          border-top: 1px solid var(--work-border);
          color: var(--work-muted) !important;
          font-size: 8px;
          font-weight: 600;
          letter-spacing: 0.2em;
        }

        /* =========================================
           PROFESSIONAL HISTORY
        ========================================= */

        .work-page .work-section {
          padding: 90px 0 110px;
          background: #FFFFFF !important;
          color: var(--work-text) !important;
        }

        .work-page .work-section-heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          padding-bottom: 22px;
          border-bottom: 1px solid var(--work-border);
          color: var(--work-muted) !important;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.18em;
        }

        .work-section-heading-left {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .work-page .work-section-number {
          color: var(--work-accent) !important;
        }

        .work-page .work-section-count {
          color: var(--work-muted) !important;
        }

        .work-list {
          display: grid;
          gap: 20px;
          margin-top: 38px;
        }

        /* =========================================
           PREMIUM EXPERIENCE CARDS
        ========================================= */

        .work-page .work-item {
          position: relative;
          isolation: isolate;
          display: grid;
          grid-template-columns: 55px minmax(0, 1fr) 190px 36px;
          align-items: center;
          gap: 28px;
          padding: 35px 30px;
          overflow: hidden;

          border: 1px solid rgba(148, 163, 184, 0.22);
          border-radius: 14px;

          background:
            radial-gradient(
              circle at 100% 0%,
              rgba(59, 130, 246, 0.055),
              transparent 34%
            ),
            linear-gradient(
              135deg,
              #FFFFFF 0%,
              #FFFFFF 55%,
              #F8FAFC 100%
            ) !important;

          color: var(--work-text) !important;
          cursor: pointer;
          outline: none;
          transform-origin: center;
          will-change: transform, opacity;

          box-shadow:
            0 1px 2px rgba(15, 23, 42, 0.025),
            0 6px 24px rgba(15, 23, 42, 0.035);

          transition:
            background 0.35s ease,
            border-color 0.35s ease,
            box-shadow 0.35s ease,
            transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }

        /* Decorative left accent */

        .work-page .work-item::before {
          content: "";
          position: absolute;
          top: 18px;
          bottom: 18px;
          left: 0;
          width: 3px;
          border-radius: 0 4px 4px 0;
          background: linear-gradient(
            180deg,
            var(--work-accent),
            var(--work-accent-light)
          );
          transform: scaleY(0.25);
          transform-origin: center;
          opacity: 0.35;
          transition:
            transform 0.4s ease,
            opacity 0.3s ease;
          z-index: -1;
        }

        /* Subtle corner highlight */

        .work-page .work-item::after {
          content: "";
          position: absolute;
          top: -100px;
          right: -100px;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: rgba(96, 165, 250, 0.06);
          filter: blur(35px);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.35s ease;
          z-index: -1;
        }

        .work-page .work-item:hover,
        .work-page .work-item:focus-visible {
          background:
            radial-gradient(
              circle at 100% 0%,
              rgba(59, 130, 246, 0.09),
              transparent 40%
            ),
            linear-gradient(
              135deg,
              #FFFFFF,
              #F8FBFF
            ) !important;

          border-color: rgba(59, 130, 246, 0.35);

          box-shadow:
            0 3px 8px rgba(15, 23, 42, 0.025),
            0 18px 45px rgba(30, 64, 175, 0.075),
            0 0 0 1px rgba(59, 130, 246, 0.025);
        }

        .work-page .work-item:focus-visible {
          outline: 2px solid var(--work-accent);
          outline-offset: 4px;
        }

        .work-page .work-item.is-active {
          background:
            radial-gradient(
              circle at 100% 0%,
              rgba(59, 130, 246, 0.10),
              transparent 40%
            ),
            linear-gradient(
              135deg,
              #FFFFFF,
              #F5F9FF
            ) !important;

          border-color: rgba(59, 130, 246, 0.4);

          box-shadow:
            0 8px 28px rgba(30, 64, 175, 0.07),
            0 0 0 1px rgba(59, 130, 246, 0.04);
        }

        .work-page .work-item:hover::before,
        .work-page .work-item.is-active::before {
          transform: scaleY(1);
          opacity: 1;
        }

        .work-page .work-item:hover::after,
        .work-page .work-item.is-active::after {
          opacity: 1;
        }

        /* CARD NUMBER */

        .work-index {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          align-self: stretch;
          gap: 18px;
          padding-top: 5px;
        }

        .work-page .work-index > span:first-child {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border: 1px solid rgba(59, 130, 246, 0.18);
          border-radius: 10px;
          background: rgba(59, 130, 246, 0.055);
          color: var(--work-accent-dark) !important;
          font-family: var(--font-heading, "Manrope", sans-serif);
          font-size: 12px;
          font-weight: 700;
          transition:
            background 0.3s ease,
            border-color 0.3s ease,
            transform 0.3s ease;
        }

        .work-index-line {
          width: 1px;
          flex: 1;
          min-height: 25px;
          margin-left: 18px;
          background: linear-gradient(
            to bottom,
            rgba(59, 130, 246, 0.5),
            rgba(59, 130, 246, 0.06)
          );
          transform-origin: top center;
          transition: transform 0.5s ease;
        }

        .work-page .work-item:hover .work-index > span:first-child,
        .work-page .work-item.is-active .work-index > span:first-child {
          background: rgba(59, 130, 246, 0.12);
          border-color: rgba(59, 130, 246, 0.35);
          transform: translateY(-2px);
        }

        /* CARD CONTENT */

        .work-content {
          min-width: 0;
        }

        .work-position-top {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 12px;
          margin-bottom: 15px;
        }

        .work-page .work-position-category {
          color: var(--work-muted) !important;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.14em;
        }

        /* CURRENT BADGE */

        .work-page .work-current-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 6px 10px;
          border: 1px solid rgba(59, 130, 246, 0.22);
          border-radius: 30px;
          color: var(--work-accent-dark) !important;
          background: rgba(59, 130, 246, 0.065) !important;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        .work-page .work-current-badge span {
          position: relative;
          width: 6px;
          height: 6px;
          flex-shrink: 0;
          border-radius: 50%;
          background: var(--work-accent) !important;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        /* POSITION TITLE */

        .work-page .work-item .work-content h2 {
          margin: 0;
          color: var(--work-heading) !important;
          font-family: var(--font-heading, "Manrope", sans-serif);
          font-size: clamp(18px, 2vw, 25px);
          font-weight: 700;
          line-height: 1.4;
          letter-spacing: -0.04em;
          opacity: 1 !important;
          visibility: visible !important;
          transition: color 0.3s ease;
        }

        .work-page .work-item:hover .work-content h2,
        .work-page .work-item.is-active .work-content h2 {
          color: var(--work-accent-dark) !important;
        }

        /* INSTITUTION */

        .work-page .work-item .work-institution {
          margin: 13px 0 0;
          color: #475569 !important;
          font-size: 13px;
          font-weight: 500;
          line-height: 1.7;
          opacity: 1 !important;
          visibility: visible !important;
        }

        /* CAMPUS */

        .work-page .work-item .work-campus {
          display: flex;
          align-items: center;
          gap: 6px;
          margin: 7px 0 0;
          color: var(--work-muted) !important;
          font-size: 11px;
          line-height: 1.6;
          opacity: 1 !important;
          visibility: visible !important;
        }

        .work-page .work-campus::before {
          content: "";
          width: 5px;
          height: 5px;
          flex-shrink: 0;
          border-radius: 50%;
          background: var(--work-accent-light);
        }

        /* TENURE */

        .work-period {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 12px;
          text-align: right;
          padding: 16px 18px;
          border: 1px solid rgba(148, 163, 184, 0.15);
          border-radius: 10px;
          background: rgba(241, 245, 249, 0.65);
          transition:
            background 0.3s ease,
            border-color 0.3s ease;
        }

        .work-page .work-period-label {
          display: flex;
          align-items: center;
          gap: 7px;
          color: var(--work-muted) !important;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.13em;
          opacity: 1 !important;
        }

        .work-page .work-period-label::before {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--work-accent-light);
        }

        .work-page .work-period-date {
          color: var(--work-heading) !important;
          font-family: var(--font-heading, "Manrope", sans-serif);
          font-size: 10px;
          font-weight: 600;
          line-height: 1.8;
          letter-spacing: 0.005em;
          opacity: 1 !important;
          visibility: visible !important;
        }

        .work-page .work-item:hover .work-period,
        .work-page .work-item.is-active .work-period {
          background: rgba(239, 246, 255, 0.75);
          border-color: rgba(59, 130, 246, 0.2);
        }

        /* CARD ARROW */

        .work-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border: 1px solid rgba(148, 163, 184, 0.25);
          border-radius: 50%;
          background: #FFFFFF;
          box-shadow: 0 2px 8px rgba(15, 23, 42, 0.035);
          transition:
            border-color 0.3s ease,
            background 0.3s ease,
            box-shadow 0.3s ease,
            transform 0.3s ease;
        }

        .work-page .work-icon {
          color: var(--work-muted) !important;
          opacity: 1 !important;
          transition:
            color 0.3s ease,
            transform 0.3s ease;
        }

        .work-page .work-item:hover .work-icon-wrap,
        .work-page .work-item.is-active .work-icon-wrap {
          border-color: rgba(59, 130, 246, 0.35);
          background: var(--work-accent);
          box-shadow: 0 5px 15px rgba(59, 130, 246, 0.2);
          transform: rotate(3deg);
        }

        .work-page .work-item:hover .work-icon,
        .work-page .work-item.is-active .work-icon {
          color: #FFFFFF !important;
          transform: translate(2px, -2px);
        }

        /* =========================================
           BOTTOM NOTE
        ========================================= */

        .work-bottom-note {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 30px;
          padding: 18px 20px;
          border: 1px solid var(--work-border);
          border-radius: 10px;
          background: #F8FAFC;
        }

        .work-bottom-dot {
          width: 6px;
          height: 6px;
          flex-shrink: 0;
          border-radius: 50%;
          background: var(--work-accent);
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.08);
        }

        .work-page .work-bottom-note p {
          margin: 0;
          color: var(--work-muted) !important;
          font-size: 11px;
          line-height: 1.7;
        }

        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 900px) {
          .work-inner {
            width: min(calc(100% - 40px), 1180px);
          }

          .work-page .work-hero {
            padding-top: 75px;
          }

          .work-hero-grid {
            grid-template-columns: 1fr;
            gap: 45px;
            padding: 60px 0 65px;
          }

          .work-page .work-hero h1 {
            font-size: clamp(64px, 11vw, 100px);
          }

          .work-hero-description {
            max-width: 500px;
          }

          .work-stat {
            max-width: 300px;
          }

          .work-page .work-section {
            padding: 75px 0 90px;
          }

          .work-page .work-item {
            grid-template-columns: 45px minmax(0, 1fr) 36px;
            gap: 20px;
            padding: 30px 24px;
          }

          .work-period {
            grid-column: 2;
            align-items: flex-start;
            text-align: left;
            gap: 8px;
            padding: 13px 15px;
            max-width: 300px;
          }

          .work-icon-wrap {
            grid-column: 3;
            grid-row: 1;
          }

          .work-index {
            grid-row: 1 / span 2;
          }
        }

        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 600px) {
          .work-inner {
            width: calc(100% - 36px);
          }

          .work-page .work-hero {
            padding-top: 55px;
          }

          .work-page .work-label {
            padding-bottom: 17px;
            font-size: 8px;
          }

          .work-hero-grid {
            gap: 35px;
            padding: 48px 0;
          }

          .work-page .work-eyebrow {
            margin-bottom: 20px;
            font-size: 8px;
          }

          .work-page .work-hero h1 {
            font-size: clamp(52px, 13.5vw, 76px);
            line-height: 0.95;
          }

          .work-page .work-hero h1 span {
            margin-top: 8px;
          }

          .work-page .work-hero-description > p {
            font-size: 13px;
          }

          .work-stat {
            margin-top: 28px;
            padding-top: 18px;
          }

          .work-page .work-stat-number {
            font-size: 32px;
          }

          .work-page .work-hero-bottom {
            font-size: 7px;
            letter-spacing: 0.12em;
          }

          .work-page .work-section {
            padding: 60px 0 70px;
          }

          .work-page .work-section-heading {
            align-items: flex-start;
            flex-direction: column;
            gap: 16px;
            font-size: 8px;
          }

          .work-section-heading-left {
            gap: 13px;
          }

          .work-list {
            gap: 15px;
            margin-top: 25px;
          }

          .work-page .work-item {
            grid-template-columns: 30px minmax(0, 1fr) 28px;
            gap: 12px;
            padding: 25px 15px;
            border-radius: 12px;
          }

          .work-index {
            gap: 15px;
          }

          .work-page .work-index > span:first-child {
            width: 30px;
            height: 30px;
            border-radius: 8px;
            font-size: 10px;
          }

          .work-index-line {
            margin-left: 14px;
          }

          .work-position-top {
            gap: 9px;
            margin-bottom: 12px;
          }

          .work-page .work-position-category {
            font-size: 7px;
            letter-spacing: 0.1em;
          }

          .work-page .work-current-badge {
            padding: 5px 8px;
            font-size: 7px;
          }

          .work-page .work-item .work-content h2 {
            font-size: 17px;
            line-height: 1.5;
          }

          .work-page .work-item .work-institution {
            margin-top: 10px;
            font-size: 12px;
          }

          .work-page .work-item .work-campus {
            font-size: 10px;
          }

          .work-period {
            gap: 7px;
            padding: 12px;
            border-radius: 8px;
            max-width: 100%;
          }

          .work-page .work-period-label {
            font-size: 7px;
          }

          .work-page .work-period-date {
            font-size: 9px;
            overflow-wrap: anywhere;
          }

          .work-icon-wrap {
            width: 28px;
            height: 28px;
          }

          .work-page .work-icon {
            width: 16px;
            height: 16px;
          }

          .work-bottom-note {
            align-items: flex-start;
            margin-top: 25px;
            padding: 15px;
          }

          .work-page .work-bottom-note p {
            font-size: 10px;
          }
        }

        /* =========================================
           HOVER EFFECTS
        ========================================= */

        @media (hover: hover) and (pointer: fine) {
          .work-page .work-item:hover .work-index-line {
            transform: scaleY(1.08);
          }
        }

        /* =========================================
           ACCESSIBILITY
        ========================================= */

        @media (prefers-reduced-motion: reduce) {
          .work-hero::before {
            animation: none !important;
          }

          .work-scroll-progress {
            display: none !important;
          }

          .work-page .work-item,
          .work-page .work-content h2,
          .work-page .work-icon,
          .work-page .work-icon-wrap,
          .work-page .work-index-line,
          .work-page .work-period,
          .work-page .work-index > span:first-child {
            transition: none !important;
          }

          .work-page *,
          .work-page *::before,
          .work-page *::after {
            scroll-behavior: auto !important;
          }
        }
      `}</style>

      {/* HERO */}

      <section className="work-hero">
        <div className="work-inner">
          <motion.div
            className="work-label"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span>01</span>
            <span>WORK EXPERIENCE</span>
          </motion.div>

          <div className="work-hero-grid">
            <motion.div
              className="work-title-wrap"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1 }}
            >
              <span className="work-eyebrow">
                PROFESSIONAL JOURNEY
              </span>

              <h1>
                Academic
                <span>experience.</span>
              </h1>
            </motion.div>

            <motion.div
              className="work-hero-description"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2 }}
            >
              <span className="work-description-line" />

              <p>
                Academic positions held across the University of
                Education, Lahore and the University of Sargodha.
              </p>

              <div className="work-stat">
                <span className="work-stat-number">04</span>
                <span className="work-stat-label">
                  Academic positions
                </span>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="work-hero-bottom"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span>MATHEMATICS</span>
            <span>ACADEMIC CAREER</span>
          </motion.div>
        </div>
      </section>

      {/* PROFESSIONAL HISTORY */}

      <section className="work-section">
        <div className="work-inner">
          <motion.div
            className="work-section-heading"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="work-section-heading-left">
              <span className="work-section-number">02</span>
              <span>PROFESSIONAL HISTORY</span>
            </div>

            <span className="work-section-count">
              04 POSITIONS
            </span>
          </motion.div>

          <div className="work-list">
            {workHistory.map((job, index) => (
              <motion.article
                className={`work-item ${
                  activeIndex === index ? "is-active" : ""
                }`}
                key={`${job.position}-${job.period}`}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.7,
                  delay: reduceMotion ? 0 : index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -4,
                        transition: {
                          duration: 0.25,
                        },
                      }
                }
                onClick={() => toggleActive(index)}
                role="button"
                tabIndex={0}
                aria-pressed={activeIndex === index}
                onKeyDown={(event) => {
                  if (
                    event.key === "Enter" ||
                    event.key === " "
                  ) {
                    event.preventDefault();
                    toggleActive(index);
                  }
                }}
              >
                {/* NUMBER */}

                <div className="work-index">
                  <span>0{index + 1}</span>
                  <span className="work-index-line" />
                </div>

                {/* POSITION DETAILS */}

                <div className="work-content">
                  <div className="work-position-top">
                    <span className="work-position-category">
                      {index === 0
                        ? "CURRENT POSITION"
                        : "ACADEMIC APPOINTMENT"}
                    </span>

                    {index === 0 && (
                      <span className="work-current-badge">
                        <span />
                        CURRENT
                      </span>
                    )}
                  </div>

                  <h2>{job.position}</h2>

                  <p className="work-institution">
                    {job.institution}
                  </p>

                  <p className="work-campus">
                    {job.campus}
                  </p>
                </div>

                {/* TENURE */}

                <div className="work-period">
                  <span className="work-period-label">
                    TENURE
                  </span>

                  <span className="work-period-date">
                    {job.period}
                  </span>
                </div>

                {/* ARROW */}

                <div className="work-icon-wrap">
                  <ArrowUpRight
                    className="work-icon"
                    size={20}
                    strokeWidth={1.5}
                  />
                </div>
              </motion.article>
            ))}
          </div>

          {/* BOTTOM NOTE */}

          <motion.div
            className="work-bottom-note"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="work-bottom-dot" />
            <p>
              Academic career in teaching and research in
              mathematics.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default WorkPage;