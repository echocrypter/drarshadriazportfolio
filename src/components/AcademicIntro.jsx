
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import "./AcademicIntro.css";

function AcademicIntro() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`academic-intro ${
        isVisible ? "academic-intro-visible" : ""
      }`}
    >
      <div className="academic-intro-inner">
        <div className="academic-intro-top academic-reveal">
          <span>02</span>
          <span>ACADEMIC PROFILE</span>
        </div>

        <div className="academic-intro-grid">
          <h2 className="academic-reveal academic-reveal-left">
            Mathematics
            <span>through research.</span>
          </h2>

          <div className="academic-intro-copy academic-reveal academic-reveal-right">
            <p>
              Dr. Arshad Riaz is a Tenured Associate Professor on TTS at the
              University of Education, Lahore, Jauharabad Campus.
            </p>

            <p>
              His academic work focuses on applied mathematics, differential
              equations, fluid flows, nanofluids, and mathematical modeling.
            </p>

            <a href="/about" className="academic-intro-link">
              <span>View Academic Profile</span>
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AcademicIntro;