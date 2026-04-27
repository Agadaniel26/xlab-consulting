import { Link } from 'react-router-dom'

const STATS = [
  { num: '2018', label: 'Year Founded'       },
  { num: '3',    label: 'Service Lines'      },
  { num: '20+',  label: 'Expert Researchers' },
  { num: '3+',   label: 'Institutional Clients' },
]

const SERVICES = [
  {
    num: '01',
    label: 'Research',
    title: 'Empirical & Policy Research',
    desc: 'Rigorous quantitative and qualitative research across economics, education, health, and development.',
    items: ['Market surveys & opinion polls', 'Field data collection', 'Literature reviews', 'Academic research support'],
  },
  {
    num: '02',
    label: 'Advisory',
    title: 'Strategic & Sector Advisory',
    desc: 'Strategy grounded in evidence — helping public institutions, NGOs, and private-sector clients navigate complexity.',
    items: ['Business strategy & planning', 'Proposal & grant writing', 'Concept development', 'Business plan preparation'],
  },
  {
    num: '03',
    label: 'Audit',
    title: 'Evaluation, Audit & Assessment',
    desc: 'Independent, objective assessment services that verify, evaluate, and improve organisational performance.',
    items: ['Programme evaluation', 'Financial accounting (SMEs)', 'Data quality audits', 'Proof-reading & editing'],
  },
]

const RESEARCH = [
  {
    tag: 'Economics · Information Theory',
    title: 'The Contributions of the Economics of Information to Twentieth Century Economics',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80',
  },
  {
    tag: 'Labour Economics · Signalling',
    title: 'Job Market Signalling',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&q=80',
  },
  {
    tag: 'Market Analysis · Information',
    title: "The Market for 'Lemons': Quality Uncertainty and the Market Mechanism",
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&q=80',
  },
]

const CLIENTS = [
  { name: 'Durham University',        img: 'https://static.wixstatic.com/media/59235a_bb2b351783f34dccafa790046410c89a~mv2_d_3402_3402_s_4_2.jpg' },
  { name: 'University of Nigeria',    img: 'https://static.wixstatic.com/media/59235a_9836dc96d40047a5b270bdc055e586f5~mv2.jpg' },
  { name: 'TETFUND',                  img: 'https://static.wixstatic.com/media/59235a_d3c282c7eae144edbe0365ba000bf05e~mv2.jpg' },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1800&q=80"
            alt=""
            aria-hidden="true"
          />
        </div>
        <div className="hero-content">
          <div className="container">
            <p className="hero-eyebrow">XLab Consultancy · Est. 2018</p>
            <h1 className="hero-title">
              …if it exists,<br />we'll find it.
            </h1>
            <p className="hero-tagline">
              Evidence-driven research, advisory, and audit services empowering
              organisations to make smarter, more impactful decisions.
            </p>
            <div className="hero-actions">
              <Link to="/services" className="btn btn-filled">Our Services</Link>
              <Link to="/about" className="btn btn-white">Who We Are</Link>
            </div>
          </div>
        </div>
        <div className="hero-scroll">Scroll</div>
      </section>

      {/* ── STATS ── */}
      <div className="stats-band">
        <div className="container">
          <div className="stats-inner">
            {STATS.map(s => (
              <div key={s.num} className="stat-item">
                <span className="stat-num">{s.num}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section className="services-strip">
        <div className="container">
          <div className="section-header">
            <span className="overline">What We Do</span>
            <h2>Three service lines.<br />One standard of rigour.</h2>
            <p>
              XLab brings together economists, analysts, and sector specialists to deliver
              research, strategy, and evaluation that decision-makers can trust.
            </p>
          </div>
          <div className="services-grid">
            {SERVICES.map(s => (
              <div key={s.num} className="service-card">
                <div>
                  <div className="service-card-num">{s.num}</div>
                  <div className="service-card-label">{s.label}</div>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul className="service-card-list">
                  {s.items.map(item => <li key={item}>{item}</li>)}
                </ul>
                <Link to="/services" className="service-card-link">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION STRIP ── */}
      <div className="mission-strip">
        <div className="container">
          <span className="overline" style={{ display: 'block', textAlign: 'center', marginBottom: '20px' }}>
            Our Mission
          </span>
          <h2>
            To provide <strong>high-quality, evidence-based</strong> research and advisory
            services that empower organisations to make smarter, more impactful decisions.
          </h2>
          <Link to="/about" className="btn btn-dark" style={{ marginTop: '32px' }}>
            About XLab
          </Link>
        </div>
      </div>

      {/* ── RESEARCH ── */}
      <section className="research-section">
        <div className="container">
          <div className="section-header">
            <span className="overline">Featured Research</span>
            <h2>Latest publications &amp; papers</h2>
            <p>A selection of our most recent research outputs and working papers.</p>
          </div>
          <div className="research-grid">
            {RESEARCH.map(item => (
              <article key={item.title} className="research-card">
                <div className="research-card-img">
                  <img src={item.img} alt={item.title} loading="lazy" />
                </div>
                <div className="research-card-body">
                  <p className="research-card-tag">{item.tag}</p>
                  <h3>{item.title}</h3>
                  <span className="research-card-link">Read paper →</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENTS ── */}
      <section className="clients-section">
        <div className="container">
          <span className="clients-label">Trusted by leading institutions</span>
          <div className="clients-row">
            {CLIENTS.map(c => (
              <div key={c.name} className="client-logo">
                <img src={c.img} alt={c.name} className="client-logo-img" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="cta-band">
        <div className="container">
          <h2>Ready to work with XLab?</h2>
          <p>
            Whether you need rigorous market research, strategic advisory, or an independent
            audit, our team is ready to help.
          </p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-white-solid">Get Started</Link>
            <Link to="/services" className="btn btn-white">View Services</Link>
          </div>
        </div>
      </section>
    </>
  )
}
