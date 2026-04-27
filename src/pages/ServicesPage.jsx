import { Link } from 'react-router-dom'

const SERVICES = [
  {
    number: '01',
    label: 'Research',
    title: 'Empirical & Policy Research',
    desc: 'XLab delivers rigorous quantitative and qualitative research across economics, education, health, and development. Our team combines academic methodology with practical delivery — producing findings that are credible, actionable, and on time.',
    items: [
      'Empirical & policy research',
      'Market surveys and opinion polls',
      'Enumerator services and field data collection',
      'Academic research support',
      'Industry periodicals and reports',
      'Literature reviews and bibliographies',
    ],
    img: 'https://images.unsplash.com/photo-1532619187608-e5375cab36aa?w=900&q=80',
    imgAlt: 'Research and analysis',
    reverse: false,
  },
  {
    number: '02',
    label: 'Advisory',
    title: 'Strategic & Sector Advisory',
    desc: 'We help public institutions, NGOs, and private-sector clients navigate complex environments. Our advisory work draws on our research capabilities — ensuring that strategy is always grounded in evidence, not assumptions.',
    items: [
      'Business strategy and planning',
      'Business and marketing plan preparation',
      'Idea generation and concept development',
      'Business solutions and promotion',
      'Scholarship letter preparation',
      'Proposal writing and grant support',
    ],
    img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&q=80',
    imgAlt: 'Strategic advisory session',
    reverse: true,
  },
  {
    number: '03',
    label: 'Audit',
    title: 'Evaluation, Audit & Assessment',
    desc: 'From financial accounts to programme evaluations, XLab provides independent, objective assessment services. We work with SMEs, academic institutions, and development organisations to verify, evaluate, and improve performance.',
    items: [
      'Small and medium-scale accounting services',
      'Programme evaluation and assessment',
      'Mystery shopping and quality assurance',
      'Proof-reading and editing',
      'Data quality audits',
      'Financial reporting support',
    ],
    img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=900&q=80',
    imgAlt: 'Audit and evaluation',
    reverse: false,
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <div className="page-hero">
        <div className="container">
          <span className="page-breadcrumb">What We Do</span>
          <h1>Our Services</h1>
          <p>Three clearly defined service lines, built around your evidence needs.</p>
        </div>
      </div>

      {/* ── INTRO ── */}
      <section className="services-intro">
        <div className="container">
          <h2>Rigorous analysis across every stage of the decision-making process</h2>
          <p>
            XLab brings together economists, analysts, and sector specialists to deliver research,
            strategy, and evaluation services that are grounded in evidence and tailored to each
            client's context.
          </p>
        </div>
      </section>

      {/* ── SERVICE BLOCKS ── */}
      {SERVICES.map(s => (
        <section key={s.number} className={`service-block${s.reverse ? ' reverse' : ''}`}>
          <div className="container">
            <div className="service-inner">
              <div className="service-img">
                <img src={s.img} alt={s.imgAlt} loading="lazy" />
              </div>
              <div className="service-content">
                <span className="service-num">{s.number}</span>
                <span className="service-label">{s.label}</span>
                <h2>{s.title}</h2>
                <p>{s.desc}</p>
                <ul className="service-list">
                  {s.items.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link to="/contact" className="btn">
                  Enquire about {s.label}
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── CTA ── */}
      <div className="diversity-band">
        <div className="container">
          <p>
            Not sure which service fits?&ensp;
            <strong>Reach out and we will help you identify the right approach for your research or advisory need.</strong>
          </p>
          <div style={{ marginTop: '24px' }}>
            <Link to="/contact" className="btn btn-white">Talk to Our Team</Link>
          </div>
        </div>
      </div>
    </>
  )
}
