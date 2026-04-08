import { motion } from 'framer-motion'
import { Download } from 'lucide-react'

const resources = [
  { title: 'HDPE Pipe Installation Manual (PDF)' },
  { title: 'Maintenance & Inspection Handbook (PDF)' },
  { title: 'Engineering Specifications Sheet (PDF)' },
]

export default function Resources() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden" style={{ background: '#fafafa' }}>
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: 'radial-gradient(circle, #d1d5db 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-10"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-near-black">
            Resources &amp; Downloads
          </h2>
          <p className="mt-3 text-gray-text text-sm leading-relaxed max-w-lg mx-auto">
            Get all the technical documentation and resources you need to make informed decisions about our HDPE piping solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
        >
          {resources.map(({ title }, i) => (
            <div
              key={title}
              className={`flex items-center justify-between px-6 py-4 ${
                i < resources.length - 1 ? 'border-b border-gray-100' : ''
              } hover:bg-gray-50 transition-colors group`}
            >
              <span className="text-sm font-medium text-gray-700">{title}</span>
              <button className="flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                Download PDF
                <Download className="w-4 h-4" />
              </button>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
