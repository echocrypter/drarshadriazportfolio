
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <a href="/" className="footer-brand">
          <span className="footer-brand-dot" />
          DR. ARSHAD RIAZ
        </a>

        <a
          href="mailto:arshad-riaz@ue.edu.pk"
          className="footer-email"
        >
          arshad-riaz@ue.edu.pk
        </a>

        <p className="footer-copy">
          © {new Date().getFullYear()} Dr. Arshad Riaz
        </p>
      </div>
    </footer>
  );
}

export default Footer;