import { Link } from 'react-router-dom'

const LEADERSHIP = [
  { name: 'Ekene Aguegboh',   role: 'Chief Executive Officer',  initials: 'EA' },
  { name: 'Chidozie Nnachor', role: 'Chief Operations Officer', initials: 'CN' },
  { name: 'Maduabuchi Eze',   role: 'Chief Financial Officer',  initials: 'ME' },
  { name: 'Godfrey Ihedimma', role: 'Director of Research',     initials: 'GI' },
]

const RESEARCHERS = [
  { name: 'Uchenna Onuoha',     role: 'Assistant Director'  },
  { name: 'Ozoemena Nwobodo',   role: 'Senior Researcher'   },
  { name: 'Ozioma Aguegboh',    role: 'Research Associate'  },
  { name: 'Chinedu Nevo',       role: 'Research Associate'  },
  { name: 'Davidmac Olisa',     role: 'Research Associate'  },
  { name: 'Chinonso Agu',       role: 'Research Associate'  },
  { name: 'Chiamaka Okolomike', role: 'Research Associate'  },
  { name: 'Chimere Iheonu',     role: 'Research Associate'  },
  { name: 'Emmanuel Ugwuoke',   role: 'Research Assistant'  },
]

const VALUES = [
  {
    icon: '◈',
    title: 'Rigour',
    desc: 'Every finding is grounded in evidence. We apply disciplined methodology to every engagement, from design to delivery.',
  },
  {
    icon: '◎',
    title: 'Independence',
    desc: 'Our analysis is objective. We tell clients what the data says, not what they want to hear.',
  },
  {
    icon: '◉',
    title: 'Impact',
    desc: 'We measure success by the quality of decisions our work enables, not by the volume of reports produced.',
  },
  {
    icon: '◆',
    title: 'Integrity',
    desc: 'We maintain the highest ethical standards in data collection, analysis, and reporting at all times.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <div className="page-hero">
        <div className="container">
          <div className="breadcrumb">About XLab</div>
          <h1>Who We Are</h1>
          <p>A results-driven research and advisory consultancy built on evidence, rigour, and impact.</p>
        </div>
      </div>

      {/* ── WHO WE ARE ── */}
      <section className="about-who">
        <div className="container">
          <div className="about-who-grid">
            <div className="about-who-img">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80"
                alt="XLab team collaborating"
              />
            </div>
            <div className="about-who-content">
              <span className="overline">Our Story</span>
              <h2>XLab Consultancy</h2>
              <p>
                XLab Consultancy is a Nigerian research and analytics firm that provides rigorous,
                evidence-based services to governments, universities, NGOs, and private-sector clients.
                Our tagline — <em>"…if it exists, we'll find it"</em> — reflects our commitment to
                thorough, exhaustive analysis.
              </p>
              <p>
                We bring together economists, accountants, analysts, and sector specialists to tackle
                complex questions with clarity. From national opinion polls to academic market surveys,
                XLab delivers research that decision-makers can trust.
              </p>
              <p>
                Our clients include Durham University, the University of Nigeria Nsukka, and TETFUND —
                institutions that rely on us precisely because we refuse to cut corners.
              </p>
              <Link to="/services" className="btn btn-dark" style={{ marginTop: '8px' }}>
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUNDING BAND ── */}
      <section className="founding-band" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="founding-year-bg" aria-hidden="true">2018</div>
        <div className="container">
          <div className="founding-inner">
            <span className="overline" style={{ color: 'var(--accent)', justifyContent: 'center', display: 'flex', marginBottom: '20px' }}>
              Est. 2018
            </span>
            <h2>Built to fill a gap</h2>
            <p>
              XLab was established in 2018 in response to a clear gap in the Nigerian market: the
              absence of a firm that could combine academic rigour with practical, commercially
              oriented research delivery.
            </p>
            <p>
              Founded by Ekene Aguegboh and a core team of economists and analysts, XLab set out
              to provide the kind of evidence-based advisory that Nigeria's growing institutions —
              public and private — increasingly needed but struggled to source locally.
            </p>
            <p>
              From small-scale accounting and proof-reading to national market surveys and policy
              research, XLab has grown into a multi-disciplinary consultancy serving some of
              Nigeria's most respected institutions.
            </p>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="values-section">
        <div className="container">
          <span className="overline">What We Stand For</span>
          <h2>Our core values</h2>
          <div className="values-grid">
            {VALUES.map(v => (
              <div key={v.title} className="value-card">
                <div className="value-card-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <section className="team-section">
        <div className="container">
          <p className="team-heading">Our People</p>
          <h2 className="team-sub-heading">Leadership Team</h2>
          <div className="team-grid">
            {LEADERSHIP.map(m => (
              <div key={m.name} className="team-card">
                <div className="team-photo">
                  <div className="team-initials">{m.initials}</div>
                </div>
                <div className="team-info">
                  <p className="team-name">{m.name}</p>
                  <p className="team-role">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESEARCHERS ── */}
      <section className="researchers-section">
        <div className="container">
          <p className="researchers-label">Research Team</p>
          <div className="researchers-grid">
            {RESEARCHERS.map(r => (
              <div key={r.name} className="researcher-card">
                <p className="r-name">{r.name}</p>
                <p className="r-role">{r.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-band">
        <div className="container">
          <h2>Partner with XLab</h2>
          <p>
            Let our team bring clarity to your most complex research and advisory challenges.
          </p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-white-solid">Get in Touch</Link>
            <Link to="/services" className="btn btn-white">View Services</Link>
          </div>
        </div>
      </section>
    </>
  )
}
