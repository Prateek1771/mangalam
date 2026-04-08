import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const steps = [
  {
    id: 'raw-material',
    label: 'Raw Material',
    title: 'High-Grade Raw Material Selection',
    description:
      'Vacuum sizing tanks ensure precise outer diameter while internal pressure maintains perfect roundness and wall thickness uniformity.',
    bullets: ['PE100 grade material', 'Optimal molecular weight distribution'],
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    id: 'extrusion',
    label: 'Extrusion',
    title: 'Precision Extrusion Process',
    description:
      'Single-screw extruder with precision temperature zones ensures consistent melt quality and dimensional accuracy throughout the production run.',
    bullets: ['Single-screw extruder', 'Controlled temperature zones'],
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
  },
  {
    id: 'cooling',
    label: 'Cooling',
    title: 'Cylindrical Vacuum Cooling',
    description:
      'The molten polymer is drawn through a vacuum sizing tank that sets the exact outer diameter and wall thickness with chilled water cooling.',
    bullets: ['Vacuum calibration', 'Chilled water cooling at 15–20°C'],
    img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80',
  },
  {
    id: 'sizing',
    label: 'Sizing',
    title: 'Precision Sizing & Calibration',
    description:
      'After the vacuum tank, the pipe passes through additional water-spray cooling to achieve uniform crystallisation across the full wall cross-section.',
    bullets: ['Laser OD measurement', 'Ovality checked per ISO 11922'],
    img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
  },
  {
    id: 'qc',
    label: 'Quality Control',
    title: 'In-Line Quality Checks',
    description:
      'Each pipe undergoes in-line sensor checks for dimensions, surface quality and print quality, as well as batch sample lab testing.',
    bullets: ['Hydrostatic pressure test', 'MFR and density verification'],
    img: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80',
  },
  {
    id: 'marking',
    label: 'Marking',
    title: 'ISO-Compliant Pipe Marking',
    description:
      'Continuous inkjet marking applies mandatory identification: outer diameter, wall thickness, pressure class, standard, and batch code.',
    bullets: ['OD and PN marked', 'ISO standard identification'],
    img: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80',
  },
  {
    id: 'cutting',
    label: 'Cutting',
    title: 'Automated Planetary Cutting',
    description:
      'Pipes are cut to precise lengths by a travelling planetary cutter. Cut ends are deburred and capped before storage.',
    bullets: ['Planetary cutter for clean cuts', 'End caps fitted'],
    img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80',
  },
  {
    id: 'packaging',
    label: 'Packaging',
    title: 'Packing & Dispatch',
    description:
      'Finished goods are stacked, banded, and loaded with complete documentation including test certificates and material traceability records.',
    bullets: ['Test certificate per lot', 'GPS-tracked logistics'],
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
]

export default function ManufacturingProcess() {
  const [current, setCurrent] = useState(0)
  const total = steps.length
  const step = steps[current]

  const prev = () => setCurrent((c) => Math.max(0, c - 1))
  const next = () => setCurrent((c) => Math.min(total - 1, c + 1))

  return (
    <section className="bg-[#f8f9fa] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-10"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-near-black">
            Advanced HDPE Pipe Manufacturing Process
          </h2>
          <p className="mt-3 text-gray-text max-w-2xl mx-auto text-sm leading-relaxed">
            Our state-of-the-art extrusion technology ensures consistent quality, optimal material properties, and dimensional accuracy in every pipe we manufacture.
          </p>
        </motion.div>

        <div className="hidden lg:flex flex-wrap justify-center gap-1 bg-gray-100 rounded-xl p-1 mb-8 w-fit mx-auto">
          {steps.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setCurrent(i)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                i === current
                  ? 'bg-white text-primary shadow-sm font-semibold'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="border bg-white border-gray-200 rounded-2xl overflow-hidden"
          >
            <div className="lg:hidden flex items-center px-5 py-3 border-b border-gray-100">
              <span className="bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full">
                Step {current + 1}/{total}: {step.label}
              </span>
            </div>

            <div className="p-6 sm:p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                <div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-near-black mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-text leading-relaxed mb-4">{step.description}</p>
                  <ul className="flex flex-col gap-2">
                    {step.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2.5 text-sm text-gray-700">
                        <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xs font-bold">✓</span>
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl overflow-hidden aspect-video bg-gray-100">
                  <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="flex items-center justify-between mt-6 pt-5 border-t border-gray-100">
                <button
                  onClick={prev}
                  disabled={current === 0}
                  className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-primary disabled:opacity-30 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" /> Previous
                </button>
                <span className="text-xs text-gray-400">{current + 1} / {total}</span>
                <button
                  onClick={next}
                  disabled={current === total - 1}
                  className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-primary disabled:opacity-30 transition-colors"
                >
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
