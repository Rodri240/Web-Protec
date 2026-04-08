import { ArrowDown, Phone } from 'lucide-react'
import './Hero.css'

export default function Hero() {
  return (
    <section id="inicio" className="hero-section">
      {/* Background pattern */}
      <div className="hero-bg-pattern">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Gradient overlay */}
      <div className="hero-gradient" />

      {/* Decorative circles */}
      <div className="hero-circle-left" />
      <div className="hero-circle-right" />

      {/* Content */}
      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Más de 15 años de experiencia
        </div>

        <h1 className="hero-title">
          Protección total
          <span className="hero-title-accent">
            desde los cimientos
          </span>
        </h1>

        <p className="hero-subtitle">
          Somos líderes en impermeabilizaciones y aislamientos térmicos y
          acústicos en Uruguay. Trabajamos en todo el país con un equipo
          especializado que garantiza resultados duraderos.
        </p>

        <div className="hero-actions">
          <a href="#servicios" className="hero-btn-primary">
            Ver servicios
          </a>
          <a href="#contacto" className="hero-btn-secondary">
            <Phone className="w-4 h-4" />
            Contáctenos
          </a>
        </div>

        {/* Stats */}
        <div className="hero-stats">
          {[
            { value: '15+', label: 'Años de experiencia' },
            { value: '2', label: 'Oficinas en Uruguay' },
            { value: '100%', label: 'Cobertura nacional' },
          ].map(stat => (
            <div key={stat.label} className="hero-stat">
              <div className="hero-stat-value">{stat.value}</div>
              <div className="hero-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <a href="#empresa" className="hero-scroll-cue">
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  )
}
