import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

const products = [
  {
    title: 'HDPE Fittings & Accessories',
    description:
      'Complete range of electrofusion and butt fusion fittings, including elbows, tees, reducers, and couplers for seamless pipe connections.',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
  },
  {
    title: 'Professional Installation Services',
    description:
      'Expert installation and fusion welding services ensuring optimal system performance, compliance with standards, and long-term reliability.',
    img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80',
  },
  {
    title: 'PE-RT Heating Pipes',
    description:
      'Polyethylene of Raised Temperature resistance pipes ideal for underfloor heating, radiator connections, and hot water applications.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  },
]

export default function ProductsPortfolio() {
  return (
    <section className="bg-[#f8f9fa] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-8"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-near-black">
            Complete Piping Solutions Portfolio
          </h2>
          <p className="mt-3 text-gray-text max-w-xl text-sm leading-relaxed">
            From innovative Two-For-One Twisters to specialized heat setting machines, we deliver complete solutions for modern textile manufacturing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {products.map(({ title, description, img }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border border-gray-200 rounded-2xl overflow-hidden bg-white hover:shadow-md transition-shadow"
            >
              <div className="p-5">
                <h3 className="font-display font-bold text-base text-near-black mb-2">{title}</h3>
                <p className="text-sm text-gray-text leading-relaxed">{description}</p>
              </div>
              <div className="px-5 pb-5">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
                  <img src={img} alt={title} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="px-5 pb-5">
                <button className="w-full border border-gray-200 rounded-xl py-2.5 text-sm font-semibold text-primary hover:bg-gray-50 transition-colors">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 border bg-white border-gray-200 rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <div>
            <h3 className="font-display font-bold text-base text-near-black">
              Didn&apos;t find what{' '}
              <span className="text-primary">you&apos;re looking for?</span>
            </h3>
            <p className="text-sm text-gray-text mt-0.5">
              Talk to our experts for custom solutions and tailored guidance.
            </p>
          </div>
          <Button
            className="bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl h-auto px-5 py-2.5 text-sm flex-shrink-0 flex items-center gap-2"
            asChild
          >
            <a href="#contact">
              <Phone className="w-4 h-4" />
              Talk to an Expert
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
