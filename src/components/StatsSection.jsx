import { motion } from 'framer-motion'
import { Factory, Globe, Users, Award } from 'lucide-react'

const stats = [
  { icon: Factory, value: '450+', label: 'Projects Completed' },
  { icon: Globe, value: '12+', label: 'Countries Served' },
  { icon: Users, value: '5,000+', label: 'Staff & Experts' },
  { icon: Award, value: '50+', label: 'Years of Excellence' },
]

export default function StatsSection() {
  return (
    <section className="bg-slate-900 py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(({ icon: Icon, value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center gap-3"
            >
              <motion.div
                whileHover={{ rotate: 15 }}
                className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center"
              >
                <Icon className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <p className="font-display font-bold text-3xl sm:text-4xl text-white">{value}</p>
                <p className="text-sm text-gray-400 mt-1">{label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
