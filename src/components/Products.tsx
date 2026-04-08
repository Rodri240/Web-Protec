import { Layers, Leaf, Droplets } from 'lucide-react'
import './Products.css'

const products = [
  {
    icon: Layers,
    name: 'Bentonita',
    category: 'Impermeabilizante natural',
    desc: 'Arcilla mineral natural con alta capacidad de absorción de agua. Se expande al entrar en contacto con la humedad, formando una barrera impermeable extremadamente eficaz.',
    benefits: ['100% natural', 'Auto-sellante', 'Duradera', 'Ecológica'],
    color: 'from-stone-500 to-stone-800',
  },
  {
    icon: Leaf,
    name: 'Protec Antiraíz',
    category: 'Protección de estructuras',
    desc: 'Membrana especialmente formulada para proteger estructuras subterráneas y superficiales del daño que ocasionan las raíces de plantas y árboles sobre los sistemas impermeabilizantes.',
    benefits: ['Anti-penetración', 'Alta resistencia', 'Larga vida útil', 'Fácil instalación'],
    color: 'from-brand-700 to-brand-900',
  },
  {
    icon: Droplets,
    name: 'Hidrofílicos en general',
    category: 'Sellado y juntas',
    desc: 'Perfil y selladores hidrofílicos que se expanden en contacto con el agua, ideales para el sellado de juntas de construcción, penetraciones y detalles críticos en muros y losas.',
    benefits: ['Expansión activa', 'Sellado de juntas', 'Alta compatibilidad', 'Resistente'],
    color: 'from-accent-600 to-[#073b38]',
  },
]

export default function Products() {
  return (
    <section id="productos" className="products-section">
      <div className="products-container">
        {/* Section header */}
        <div className="products-header">
          <span className="products-section-label">
            Materiales de calidad
          </span>
          <h2 className="products-section-title">
            Nuestros productos
          </h2>
          <div className="products-section-divider" />
          <p className="products-section-desc">
            Trabajamos con los mejores materiales del mercado para asegurar
            resultados duraderos y confiables.
          </p>
        </div>

        {/* Product cards */}
        <div className="products-grid">
          {products.map(({ icon: Icon, name, category, desc, benefits, color }) => (
            <div key={name} className="product-card">
              {/* Card header */}
              <div className={`product-card-header bg-gradient-to-br ${color}`}>
                <div className="product-card-icon">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <span className="product-card-category">{category}</span>
                <h3 className="product-card-name">{name}</h3>
              </div>

              {/* Card body */}
              <div className="product-card-body">
                <p className="product-card-desc">{desc}</p>
                <ul className="product-benefits">
                  {benefits.map(b => (
                    <li key={b} className="product-benefit">
                      <span className="product-benefit-dot" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
