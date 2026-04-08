import { Shield, Phone, Mail, MapPin } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main footer */}
        <div className="footer-main">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="footer-logo-text">PROTEC</span>
            </div>
            <p className="footer-tagline">
              Empresa uruguaya especializada en impermeabilizaciones y aislamientos
              térmicos y acústicos con más de 15 años de trayectoria en el sector.
            </p>
            <div className="footer-nav-pills">
              {['Empresa', 'Servicios', 'Productos', 'Contacto'].map(item => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="footer-nav-pill"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="footer-col-title">Servicios</h4>
            <ul className="footer-links">
              {[
                'Proyectos de impermeabilizaciones',
                'Aplicación de impermeabilizaciones',
                'Aplicación de poliuretano expandido',
              ].map(s => (
                <li key={s}>
                  <a href="#servicios" className="footer-link">{s}</a>
                </li>
              ))}
            </ul>

            <h4 className="footer-col-title--spaced">Productos</h4>
            <ul className="footer-links">
              {['Bentonita', 'Protec Antiraíz', 'Hidrofílicos'].map(p => (
                <li key={p}>
                  <a href="#productos" className="footer-link">{p}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="footer-col-title">Contacto</h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <Phone className="footer-contact-icon" />
                <div className="footer-contact-label">
                  <div className="footer-contact-city">Montevideo</div>
                  <div className="footer-contact-phone">096 121 851</div>
                </div>
              </li>
              <li className="footer-contact-item">
                <Phone className="footer-contact-icon" />
                <div className="footer-contact-label">
                  <div className="footer-contact-city">Salto y Litoral Norte</div>
                  <div className="footer-contact-phone">096 121 853</div>
                </div>
              </li>
              <li className="footer-contact-item">
                <MapPin className="footer-contact-icon" />
                <div className="footer-contact-phone">
                  Brasil 1132, Salto (50000)<br />
                  +(598) 4732-0557
                </div>
              </li>
              <li className="footer-contact-item">
                <Mail className="footer-contact-icon" />
                <a href="mailto:info@protec.com.uy" className="footer-email">
                  info@protec.com.uy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span>© {year} PROTEC. Todos los derechos reservados.</span>
          <span>Impermeabilizaciones y aislamientos en Uruguay</span>
        </div>
      </div>
    </footer>
  )
}
