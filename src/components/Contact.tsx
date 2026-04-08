import { useState } from 'react'
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react'
import './Contact.css'

const offices = [
  {
    city: 'Montevideo',
    phone: '096 121 851',
    detail: 'Atención al cliente',
  },
  {
    city: 'Salto y Litoral Norte',
    phone: '096 121 853',
    detail: 'Atención al cliente',
  },
  {
    city: 'Oficina Salto',
    address: 'Brasil 1132, Salto, Uruguay (50000)',
    phone: '+(598) 4732-0557',
    detail: 'Oficina principal',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setSent(true)
    setForm({ name: '', email: '', phone: '', message: '' })
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section id="contacto" className="contact-section">
      <div className="contact-container">
        {/* Section header */}
        <div className="contact-header">
          <span className="contact-section-label">
            Estamos para ayudarle
          </span>
          <h2 className="contact-section-title">
            Contacto
          </h2>
          <div className="contact-section-divider" />
        </div>

        <div className="contact-grid">
          {/* Contact info */}
          <div className="contact-info">
            <div>
              <h3 className="contact-heading">
                Hablemos de su proyecto
              </h3>
              <p className="contact-subtext">
                Contáctenos para solicitar un presupuesto o para consultar sobre
                cualquiera de nuestros servicios. Atendemos en todo Uruguay.
              </p>
            </div>

            {/* Office cards */}
            <div className="contact-offices">
              {offices.map(office => (
                <div key={office.city} className="contact-office-card">
                  <div className="contact-office-icon">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="contact-office-city">{office.city}</div>
                    <div className="contact-office-detail">{office.detail}</div>
                    {office.address && (
                      <div className="contact-office-address">
                        <MapPin className="w-3 h-3" />
                        {office.address}
                      </div>
                    )}
                    <div className="contact-office-phone">
                      <Phone className="w-3 h-3 text-accent-500" />
                      {office.phone}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Email */}
            <a href="mailto:info@protec.com.uy" className="contact-email-link group">
              <div className="contact-email-icon">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="contact-email-label">Correo electrónico</div>
                <div className="contact-email-value">
                  info@protec.com.uy
                </div>
              </div>
            </a>
          </div>

          {/* Contact form */}
          <div className="contact-form-wrapper">
            {sent ? (
              <div className="contact-success">
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h4 className="contact-success-title">
                  ¡Mensaje enviado!
                </h4>
                <p className="contact-success-text">
                  Nos pondremos en contacto con usted a la brevedad.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <h3 className="contact-form-title">
                  Solicitar presupuesto
                </h3>

                <div className="contact-form-row">
                  <div>
                    <label className="contact-label">Nombre *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      placeholder="Su nombre"
                      className="contact-input"
                    />
                  </div>
                  <div>
                    <label className="contact-label">Teléfono</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                      placeholder="09X XXX XXX"
                      className="contact-input"
                    />
                  </div>
                </div>

                <div>
                  <label className="contact-label">Email *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    placeholder="su@email.com"
                    className="contact-input"
                  />
                </div>

                <div>
                  <label className="contact-label">Mensaje *</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    placeholder="Describa su proyecto o consulta..."
                    className="contact-textarea"
                  />
                </div>

                <button type="submit" className="contact-submit">
                  <Send className="w-4 h-4" />
                  Enviar mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
