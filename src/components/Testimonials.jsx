import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    quote: 'Revolutionised our FIBC production efficiency!',
    body: "Meera Industries' TFO machines have revolutionised our FIBC production efficiency. The precision engineering delivers the consistent yarn strength critical for our bulk container applications.",
    name: 'Johann Mueller',
    role: 'Production Director',
  },
  {
    quote: 'Excellent support for specialised applications.',
    body: "The durability and performance of Meera's fishnet processing equipment has significantly improved our marine product quality. Excellent support for specialised applications.",
    name: 'Carlos Mendoza',
    role: 'Operations Manager',
  },
  {
    quote: 'Provides the exact specifications we need!',
    body: 'For our technical textile applications, their machines provide the exact specifications we need. Their technical knowledge and after-sales support are outstanding in every aspect.',
    name: 'Rajesh Kumar',
    role: 'Technical Director',
  },
]

function TestimonialCard({ quote, body, name, role }) {
  return (
    <div className="flex flex-col gap-4 p-6 h-full">
      <span className="text-5xl font-serif text-primary leading-none select-none">&ldquo;</span>
      <p className="font-bold text-base text-near-black leading-snug">{quote}</p>
      <p className="text-sm text-gray-text leading-relaxed flex-1">{body}</p>
      <div className="flex items-center gap-3 pt-2">
        <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
          <span className="text-sm font-bold text-gray-500">{name[0]}</span>
        </div>
        <div>
          <p className="text-sm font-semibold text-near-black">{name}</p>
          <p className="text-xs text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

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
            Trusted Performance. Proven Results
          </h2>
          <p className="mt-3 text-gray-text max-w-xl mx-auto text-sm leading-relaxed">
            From innovative Two-For-One Twisters to specialized heat setting machines, we deliver complete solutions for modern textile manufacturing.
          </p>
        </motion.div>

        <div className="hidden lg:grid lg:grid-cols-3 gap-0 border border-gray-200 rounded-2xl overflow-hidden">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`${i < testimonials.length - 1 ? 'border-r border-gray-200' : ''}`}
            >
              <TestimonialCard {...t} />
            </motion.div>
          ))}
        </div>

        <div className="hidden sm:grid lg:hidden sm:grid-cols-2 gap-5">
          {testimonials.slice(0, 2).map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="border border-gray-200 rounded-2xl"
            >
              <TestimonialCard {...t} />
            </motion.div>
          ))}
        </div>

        <div className="sm:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="border border-gray-200 rounded-2xl"
            >
              <TestimonialCard {...testimonials[current]} />
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center items-center gap-4 mt-5">
            <button onClick={prev}
              className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${i === current ? 'w-5 bg-primary' : 'w-2 bg-gray-300'}`} />
              ))}
            </div>
            <button onClick={next}
              className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
