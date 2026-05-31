import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'

const NAV = [
  { to: '/',         label: 'Home'     },
  { to: '/about',    label: 'About'    },
  { to: '/services', label: 'Services' },
  { to: '/research', label: 'Research' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="container">
        <div className="nav-inner">

          <NavLink to="/" className="xlab-logo" onClick={close}>
            <img
              src="https://static.wixstatic.com/media/59235a_863b7fa3f09f4503b6e3c3b21404af1a~mv2.png"
              alt="XLab Consultancy"
              className="logo-img"
            />
            <div className="logo-text-wrap">
              <span className="logo-name">XLab</span>
              <span className="logo-sub">Consultancy</span>
            </div>
          </NavLink>

          <nav className={`nav-menu${open ? ' open' : ''}`}>
            {NAV.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                onClick={close}
              >
                {label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              className={({ isActive }) => `nav-cta${isActive ? ' active' : ''}`}
              onClick={close}
            >
              Get in Touch
            </NavLink>
          </nav>

          <button
            className="hamburger"
            aria-label="Toggle menu"
            onClick={() => setOpen(o => !o)}
          >
            <span /><span /><span />
          </button>

        </div>
      </div>
    </header>
  )
}
