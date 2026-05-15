import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import './Navbar.css'
const logo = new URL('../images/logo.png', import.meta.url).href

const navLinks = [
  { label: 'Empresa', href: '#empresa' },
  {
    label: 'Servicios',
    href: '#servicios',
    children: [
      { label: 'Proyectos de impermeabilizaciones', href: '#servicios' },
      { label: 'Aplicación de impermeabilizaciones', href: '#servicios' },
      { label: 'Aplicación de poliuretano expandido', href: '#servicios' },
    ],
  },
  {
    label: 'Productos',
    href: '#productos',
    children: [
      { label: 'Bentonita', href: '#productos' },
      { label: 'Protec Antiraíz', href: '#productos' },
      { label: 'Hidrofílicos en general', href: '#productos' },
    ],
  },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleDropdown = (label: string) => {
    setOpenDropdown(prev => (prev === label ? null : label))
  }

  return (
    <header
      className={`navbar-header ${scrolled ? 'navbar-header--solid' : 'navbar-header--transparent'}`}
    >
      <div className="navbar-inner">
        <div className="navbar-row">
          {/* Logo */}
          <a href="#inicio" className="navbar-logo group">
            <img src={logo} alt="PROTEC Logo" className="navbar-logo-img" />
          </a>

          {/* Desktop nav */}
          <nav className="navbar-nav">
            {navLinks.map(link => (
              <div key={link.label} className="navbar-nav-item">
                {link.children ? (
                  <>
                    <button
                      onClick={() => handleDropdown(link.label)}
                      onBlur={() => setTimeout(() => setOpenDropdown(null), 150)}
                      className="navbar-dropdown-btn"
                    >
                      {link.label}
                      <ChevronDown
                        className={`navbar-chevron ${openDropdown === link.label ? 'navbar-chevron--open' : ''}`}
                      />
                    </button>
                    {openDropdown === link.label && (
                      <div className="navbar-dropdown">
                        {link.children.map(child => (
                          <a
                            key={child.label}
                            href={child.href}
                            onClick={() => setOpenDropdown(null)}
                            className="navbar-dropdown-item"
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a href={link.href} className="navbar-nav-link">
                    {link.label}
                  </a>
                )}
              </div>
            ))}
            <a href="#contacto" className="navbar-cta">
              Contáctenos
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="navbar-hamburger"
            onClick={() => setMobileOpen(prev => !prev)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="navbar-mobile">
          {navLinks.map(link => (
            <div key={link.label}>
              {link.children ? (
                <>
                  <button
                    onClick={() => handleDropdown(link.label)}
                    className="navbar-mobile-dropdown-btn"
                  >
                    {link.label}
                    <ChevronDown
                      className={`navbar-chevron ${openDropdown === link.label ? 'navbar-chevron--open' : ''}`}
                    />
                  </button>
                  {openDropdown === link.label && (
                    <div className="navbar-mobile-children">
                      {link.children.map(child => (
                        <a
                          key={child.label}
                          href={child.href}
                          onClick={() => { setMobileOpen(false); setOpenDropdown(null) }}
                          className="navbar-mobile-child"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="navbar-mobile-link"
                >
                  {link.label}
                </a>
              )}
            </div>
          ))}
          <a
            href="#contacto"
            onClick={() => setMobileOpen(false)}
            className="navbar-mobile-cta"
          >
            Contáctenos
          </a>
        </div>
      )}
    </header>
  )
}
