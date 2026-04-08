import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

const faqs = [
  {
    q: 'What is the purpose of a laser cutter for sheet metal?',
    a: 'It is designed to cut various types of sheet metal with precision, allowing for intricate designs and shapes that are essential in manufacturing processes.',
  },
  {
    q: 'What are the benefits of using aluminum tubing in manufacturing?',
    a: 'Aluminum tubing offers a lightweight yet strong solution for piping systems. It is resistant to corrosion and provides excellent thermal conductivity, making it ideal for various industrial applications.',
  },
  {
    q: 'How is aluminum tubing produced?',
    a: 'Aluminum tubing is produced through an extrusion process where aluminum billets are heated and pushed through a die to create the desired cross-sectional shape, then cut to the required lengths.',
  },
  {
    q: 'What are the common applications of aluminum tubing?',
    a: 'Common applications include HVAC systems, automotive components, aerospace structures, hydraulic systems, and various industrial piping networks that require lightweight, corrosion-resistant tubing.',
  },
  {
    q: 'Can aluminum tubing be customised?',
    a: 'Yes, aluminum tubing can be customised in terms of diameter, wall thickness, length, and alloy composition. Surface treatments like anodizing can also be applied to enhance durability and aesthetics.',
  },
]

function AccordionItem({ q, a, index, openIndex, setOpenIndex }) {
  const isOpen = openIndex === index
  return (
    <div className={`bg-white border border-gray-200 rounded-xl overflow-hidden transition-colors ${isOpen ? 'border-primary/30' : ''}`}>
      <button
        onClick={() => setOpenIndex(isOpen ? null : index)}
        className="w-full flex items-center justify-between px-5 py-4 text-left gap-3 hover:bg-gray-50 transition-colors"
      >
        <span className="text-sm font-semibold text-near-black">{q}</span>
        <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
          isOpen ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'
        }`}>
          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <div className="px-5 pb-5 text-sm text-gray-text leading-relaxed border-t border-gray-100 pt-4">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)
  const [email, setEmail] = useState('')

  return (
    <section className="bg-[#f8f9fa] py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-8"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-near-black">
            <span className="text-primary">Frequently</span> Asked Questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col gap-3"
        >
          {faqs.map(({ q, a }, i) => (
            <AccordionItem
              key={i}
              q={q}
              a={a}
              index={i}
              openIndex={openIndex}
              setOpenIndex={setOpenIndex}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 border border-gray-200 rounded-2xl p-6 sm:p-8"
        >
          <h3 className="font-display font-bold text-lg text-near-black mb-1">
            Want us to email the entire catalogue?
          </h3>
          <p className="text-sm text-gray-text mb-5">
            Enter your email and an expert will share the catalogue with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="flex-1 border border-gray-300 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-gray-700"
            />
            <Button
              className="bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl h-auto px-6 py-3 text-sm flex-shrink-0"
            >
              Request Catalogue
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
