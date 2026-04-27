import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">

        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo-row">
              <img
                src="https://static.wixstatic.com/media/59235a_863b7fa3f09f4503b6e3c3b21404af1a~mv2.png"
                alt="XLab Consultancy"
                className="footer-logo-img"
              />
              <span className="footer-logo-name">XLab Consultancy</span>
            </div>
            <p>
              Evidence-driven research, advisory, and audit services helping organisations
              make better decisions. Based in Nigeria, working globally.
            </p>
            <div className="footer-social-row">
              <a
                href="https://www.facebook.com/xlabconsult"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="Facebook"
              >f</a>
              <a
                href="https://www.linkedin.com/company/xlab-consultancy-3ba610170"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="LinkedIn"
              >in</a>
            </div>
          </div>

          {/* Navigate */}
          <div className="footer-col">
            <h3>Navigate</h3>
            <ul>
              {[
                { to: '/',         label: 'Home'     },
                { to: '/about',    label: 'About'    },
                { to: '/services', label: 'Services' },
                { to: '/contact',  label: 'Contact'  },
              ].map(({ to, label }) => (
                <li key={to}><Link to={to}>{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h3>Services</h3>
            <ul>
              {['Research', 'Advisory', 'Audit', 'Market Surveys', 'Opinion Polls', 'Business Plans'].map(s => (
                <li key={s}><Link to="/services">{s}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact + Subscribe */}
          <div className="footer-col">
            <h3>Get in Touch</h3>
            <ul style={{ marginBottom: '28px' }}>
              <li><a href="mailto:xlabconsultancy@gmail.com">xlabconsultancy@gmail.com</a></li>
              <li><a href="tel:+2348187311660">+234 818 731 1660</a></li>
              <li style={{ color: 'rgba(255,255,255,0.3)', fontSize: '13px' }}>Nigeria</li>
            </ul>
            <div className="footer-subscribe">
              <h3>Newsletter</h3>
              <form className="footer-subscribe-form" onSubmit={e => e.preventDefault()}>
                <input type="email" placeholder="Your email address" />
                <button type="submit">→</button>
              </form>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} XLab Consultancy. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/contact">Privacy Policy</Link>
            <Link to="/contact">Terms of Use</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
