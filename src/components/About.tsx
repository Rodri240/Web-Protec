import { MapPin, Users, Award, Clock } from 'lucide-react'
import './About.css'

const highlights = [
  {
    icon: Clock,
    title: 'Más de 15 años',
    desc: 'Experiencia consolidada en el sector de impermeabilizaciones y aislamientos.',
  },
  {
    icon: MapPin,
    title: 'Todo Uruguay',
    desc: 'Trabajamos en todo el país con oficinas en Montevideo y Salto.',
  },
  {
    icon: Users,
    title: 'Equipo especializado',
    desc: 'Profesionales capacitados que garantizan la máxima calidad en cada trabajo.',
  },
  {
    icon: Award,
    title: 'Garantía en cada obra',
    desc: 'Brindamos las mayores garantías en todos nuestros servicios y aplicaciones.',
  },
]

export default function About() {
  return (
    <section id="empresa" className="about-section">
      <div className="about-container">
        {/* Section header */}
        <div className="about-header">
          <span className="about-section-label">
            Quiénes somos
          </span>
          <h2 className="about-section-title">
            La empresa
          </h2>
          <div className="about-section-divider" />
        </div>

        <div className="about-grid">
          {/* Text */}
          <div>
            <p className="about-paragraph">
              <span className="about-name">PROTEC</span> es una empresa
              con más de 15 años de experiencia en el sector de
              impermeabilizaciones y aislamientos térmicos y acústicos.
            </p>
            <p className="about-paragraph">
              Trabajamos en todo el Uruguay, contando con oficinas de atención al
              cliente en <span className="about-city">Montevideo</span> y en
              la ciudad de <span className="about-city">Salto</span>, al
              norte del país.
            </p>
            <p className="about-paragraph">
              Contamos con un equipo especializado de profesionales que le brindan
              las mayores garantías a nuestros trabajos, utilizando los mejores
              materiales y las técnicas más avanzadas del mercado.
            </p>
            <div className="about-actions">
              <a href="#contacto" className="about-btn-primary">
                Solicitar presupuesto
              </a>
              <a href="#servicios" className="about-btn-secondary">
                Nuestros servicios
              </a>
            </div>
          </div>

          {/* Highlights grid */}
          <div className="about-highlights">
            {highlights.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="about-card group">
                <div className="about-card-icon">
                  <Icon className="w-6 h-6 text-accent-500" />
                </div>
                <h3 className="about-card-title">{title}</h3>
                <p className="about-card-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
