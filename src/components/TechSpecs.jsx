import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

const specs = [
  { param: 'Pipe Diameter Range', value: '20mm to 1600mm (3/4″ to 63″)' },
  { param: 'Pressure Ratings', value: 'PN 2.5, PN 4, PN 6, PN 8, PN 10, PN 12.5, PN 16' },
  { param: 'Standard Dimension Ratio', value: 'SDR 33, SDR 26, SDR 21, SDR 17, SDR 13.6, SDR 11' },
  { param: 'Operating Temperature', value: '-40°C to +80°C (-40°F to +176°F)' },
  { param: 'Service Life', value: '50+ Years (at 20 degrees C, PN 10)' },
  { param: 'Material Density', value: '0.95 - 0.96 g/cm3' },
  { param: 'Certification Standards', value: 'IS 5984, ISO 4427, ASTM D3035' },
  { param: 'Joint Type', value: 'Butt Fusion, Electrofusion, Mechanical' },
  { param: 'Coil Lengths', value: 'Up to 500mm (for smaller diameters)' },
  { param: 'Country of Origin', value: '🇮🇳   India', flag: true },
]

export default function TechSpecs() {
  return (
    <section id="techspecs" className="bg-[#0f1623] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-10"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[42px] text-white leading-tight">
            Technical Specifications at a Glance
          </h2>
          <p className="mt-3 text-gray-400 max-w-2xl text-sm leading-relaxed">
            Comprehensive performance data demonstrating our commitment to quality and engineering excellence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="rounded-xl overflow-hidden border border-gray-700"
        >
          <div className="hidden sm:grid grid-cols-2 bg-gray-700/60">
            <div className="px-5 py-3 text-xs font-bold text-gray-300 tracking-widest uppercase">Parameter</div>
            <div className="px-5 py-3 text-xs font-bold text-gray-300 tracking-widest uppercase">Specification</div>
          </div>
          {specs.map((spec, i) => (
            <div
              key={spec.param}
              className={`grid grid-cols-1 sm:grid-cols-2 border-t border-gray-700/50 ${
                i % 2 === 0 ? 'bg-[#1a2235]' : 'bg-[#151c2b]'
              }`}
            >
              <div className="px-5 py-4 text-sm font-medium text-gray-400">{spec.param}</div>
              <div className="px-5 py-4 text-sm font-semibold text-white break-words">{spec.value}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-10 flex justify-center"
        >
          <Button
            variant="outline"
            className="border border-gray-500 text-white hover:bg-white hover:text-near-black gap-2.5 rounded-xl px-8 py-3 h-auto font-semibold bg-transparent"
          >
            <Download className="w-4 h-4" />
            Download Full Technical Datasheet
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
