import { ClipboardList, Wrench, Wind } from 'lucide-react'
import './Services.css'

const services = [
  {
    icon: ClipboardList,
    title: 'Proyectos de impermeabilizaciones',
    desc: 'Diseñamos y planificamos proyectos integrales de impermeabilización adaptados a cada estructura y necesidad, garantizando la mejor solución técnica.',
    tags: ['Diagnóstico', 'Planificación', 'Presupuesto'],
  },
  {
    icon: Wrench,
    title: 'Aplicación de impermeabilizaciones',
    desc: 'Ejecutamos la aplicación de membranas, pinturas y sistemas impermeabilizantes con técnicas avanzadas para techos, terrazas, paredes y fundaciones.',
    tags: ['Membranas', 'Techos', 'Terrazas', 'Fundaciones'],
  },
  {
    icon: Wind,
    title: 'Aplicación de poliuretano expandido',
    desc: 'Aplicamos espuma de poliuretano expandido in situ para aislamiento térmico y acústico, creando una barrera continua sin juntas ni puentes térmicos.',
    tags: ['Aislamiento térmico', 'Aislamiento acústico', 'Sin juntas'],
  },
]

export default function Services() {
  return (
    <section id="servicios" className="services-section">
      <div className="services-container">
        {/* Section header */}
        <div className="services-header">
          <span className="services-section-label">
            Lo que hacemos
          </span>
          <h2 className="services-section-title">
            Nuestros servicios
          </h2>
          <div className="services-section-divider" />
          <p className="services-section-desc">
            Ofrecemos soluciones completas en impermeabilización y aislamiento
            para obras residenciales, comerciales e industriales.
          </p>
        </div>

        {/* Cards */}
        <div className="services-grid">
          {services.map(({ icon: Icon, title, desc, tags }, i) => (
            <div key={title} className="service-card group">
              {/* Number badge */}
              <div className="service-card-number">
                0{i + 1}
              </div>

              {/* Icon */}
              <div className="service-card-icon">
                <Icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="service-card-title">{title}</h3>
              <p className="service-card-desc">{desc}</p>

              {/* Tags */}
              <div className="service-tags">
                {tags.map(tag => (
                  <span key={tag} className="service-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="services-cta">
          <a href="#contacto" className="services-cta-btn">
            Solicitar presupuesto
          </a>
        </div>
      </div>
    </section>
  )
}
