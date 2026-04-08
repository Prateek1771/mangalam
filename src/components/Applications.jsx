import { useState } from 'react'
import { motion } from 'framer-motion'

const cards = [
  {
    title: 'Fishnet Manufacturing',
    desc: 'High-performance twisting solutions for packaging yarn, strapping materials, and reinforcement threads used in modern packaging applications.',
    apps: 'Packaging yarn production · Strapping material manufacturing · Reinforcement thread processing',
    img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80',
  },
  {
    title: 'Water Infrastructure',
    desc: 'Municipal and industrial water supply systems with certified pressure ratings for long-term reliability.',
    apps: 'Municipal water supply · Irrigation · Industrial water networks',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
  },
  {
    title: 'Construction & Civil',
    desc: 'Drainage, conduit, and structural applications for modern civil infrastructure.',
    apps: 'Storm drainage · Cable conduits · Foundation drainage',
    img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80',
  },
  {
    title: 'Agriculture & Irrigation',
    desc: 'Flexible, chemical-resistant pipes ideal for drip and sprinkler irrigation systems.',
    apps: 'Drip irrigation · Sprinkler networks · Field drainage',
    img: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=80',
  },
  {
    title: 'Gas Distribution',
    desc: 'Safe, reliable natural gas and LPG distribution networks with leak-proof fusion joints.',
    apps: 'Natural gas networks · LPG distribution · Industrial gas supply',
    img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80',
  },
  {
    title: 'Mining & Slurry',
    desc: 'High-abrasion resistant pipes for slurry transportation and mine dewatering.',
    apps: 'Slurry transport · Mine dewatering · Tailings disposal',
    img: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&q=80',
  },
]

const CARD_W = 320
const GAP = 20

export default function Applications() {
  const [offset, setOffset] = useState(0)
  const maxOffset = cards.length - 1

  const prev = () => setOffset((o) => Math.max(0, o - 1))
  const next = () => setOffset((o) => Math.min(maxOffset, o + 1))

  return (
    <section className="py-16 lg:py-24 overflow-hidden" style={{ background: '#F8F9FA' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8"
        >
          <div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-near-black">
              Versatile Applications Across Industries
            </h2>
            <p className="mt-2 text-gray-text text-sm max-w-lg leading-relaxed">
              From technical textiles to packaging materials, our precision-engineered machinery delivers superior performance across diverse applications.
            </p>
          </div>
          <div className="flex gap-2 flex-shrink-0 mt-2 sm:mt-0">
            <button
              onClick={prev}
              disabled={offset === 0}
              className="w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-white hover:shadow-sm disabled:opacity-30 transition-all"
            >
              <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              disabled={offset >= maxOffset}
              className="w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-white hover:shadow-sm disabled:opacity-30 transition-all"
            >
              <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>

        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: -(offset * (CARD_W + GAP)) }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            style={{ gap: GAP, width: cards.length * (CARD_W + GAP) }}
          >
            {cards.map((card) => (
              <div
                key={card.title}
                className="flex-shrink-0 rounded-2xl overflow-hidden relative group cursor-pointer"
                style={{ width: CARD_W, height: 420 }}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <h3 className="font-display font-semibold text-[20px] mb-2">{card.title}</h3>
                  <p className="text-sm text-white/80 leading-relaxed mb-3">{card.desc}</p>
                  <p className="text-xs text-white/70 font-medium mb-1">Applications</p>
                  <p className="text-xs text-white/60">{card.apps}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
