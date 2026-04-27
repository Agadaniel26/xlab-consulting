import { useState } from 'react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="contact-page">

      {/* ── LEFT: wine info column ── */}
      <div className="contact-left">
        <span style={{
          font: '700 10px Lato, sans-serif',
          textTransform: 'uppercase',
          letterSpacing: '3px',
          color: 'rgba(255,255,255,0.4)',
          display: 'block',
          marginBottom: '14px',
        }}>
          Get in Touch
        </span>
        <h1>Contact XLab</h1>
        <p>
          Have a research question, a project in mind, or just want to learn more about what we do?
          We would love to hear from you.
        </p>

        <div className="contact-detail">
          <div className="contact-icon">✉</div>
          <div className="contact-detail-text">
            <h4>Email</h4>
            <a href="mailto:xlabconsultancy@gmail.com">xlabconsultancy@gmail.com</a>
          </div>
        </div>

        <div className="contact-detail">
          <div className="contact-icon">☎</div>
          <div className="contact-detail-text">
            <h4>Phone / WhatsApp</h4>
            <a href="tel:+2348187311660">+234 818 731 1660</a>
          </div>
        </div>

        <div className="contact-detail">
          <div className="contact-icon">◎</div>
          <div className="contact-detail-text">
            <h4>Location</h4>
            <p>Nigeria</p>
          </div>
        </div>

        <div className="contact-socials">
          <a
            href="https://www.facebook.com/xlabconsult"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-btn"
            aria-label="Facebook"
          >f</a>
          <a
            href="https://www.linkedin.com/company/xlab-consultancy-3ba610170"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-btn"
            aria-label="LinkedIn"
          >in</a>
        </div>
      </div>

      {/* ── RIGHT: form column ── */}
      <div className="contact-right">
        {submitted ? (
          <div style={{ textAlign: 'center', maxWidth: '400px', margin: '0 auto' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'var(--lightGray)',
              border: '2px solid var(--wine)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '28px',
              color: 'var(--wine)',
              margin: '0 auto 24px',
            }}>✓</div>
            <h2>Message Sent</h2>
            <p>Thank you for reaching out. A member of the XLab team will get back to you within 2 business days.</p>
            <button
              className="btn"
              style={{ marginTop: '24px' }}
              onClick={() => setSubmitted(false)}
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <>
            <h2>Send Us a Message</h2>
            <p>Fill in the form below and we will respond as soon as possible.</p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fname">First Name</label>
                  <input id="fname" type="text" placeholder="Your first name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="lname">Last Name</label>
                  <input id="lname" type="text" placeholder="Your last name" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input id="email" type="email" placeholder="your@email.com" required />
              </div>

              <div className="form-group">
                <label htmlFor="org">Organisation (optional)</label>
                <input id="org" type="text" placeholder="Your organisation or institution" />
              </div>

              <div className="form-group">
                <label htmlFor="service">Service of Interest</label>
                <select id="service">
                  <option value="">Select a service…</option>
                  <option>Research</option>
                  <option>Advisory</option>
                  <option>Audit</option>
                  <option>Market Survey</option>
                  <option>Opinion Poll</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  placeholder="Tell us about your project or enquiry…"
                  required
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                <button type="submit" className="btn btn-filled">Send Message</button>
                <span className="form-note">We typically respond within 2 business days.</span>
              </div>
            </form>
          </>
        )}
      </div>

    </div>
  )
}
