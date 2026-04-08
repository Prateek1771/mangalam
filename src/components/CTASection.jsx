import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function CTASection() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true) }

  return (
    <section id="contact" className="bg-primary py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-white"
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[42px] leading-tight">
              Ready to Transform Your Textile Manufacturing?
            </h2>
            <p className="mt-4 text-white/80 text-sm leading-relaxed max-w-sm">
              Get a personalized consultation and quote for machinery solutions tailored to your specific production requirements.
            </p>
            <div className="mt-8 h-px bg-white/20" />
            <p className="mt-6 text-white/70 text-sm leading-relaxed">
              For immediate assistance, feel free to give us a direct call at{' '}
              <span className="font-bold text-white">+91-XXX-XXX-XXXX</span>. You can also send us a quick email at{' '}
              <a href="mailto:info@meeraind.com" className="font-bold text-white underline underline-offset-2">
                info@meeraind.com
              </a>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-600 text-2xl">✓</span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-near-black mb-2">Message received!</h3>
                  <p className="text-sm text-gray-text">We'll get back to you within one business day.</p>
                  <Button className="mt-5 bg-near-black hover:bg-gray-800 text-white rounded-xl px-6 h-auto py-2.5 font-semibold text-sm"
                    onClick={() => setSubmitted(false)}>
                    Send another
                  </Button>
                </div>
              ) : (
                <>
                  <h3 className="font-display font-bold text-lg text-near-black mb-5">Contact Us Today</h3>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <Input name="name" value={form.name} onChange={handleChange} required
                      placeholder="Full Name"
                      className="rounded-xl border-gray-300 focus-visible:ring-primary h-11 text-sm" />
                    <Input name="company" value={form.company} onChange={handleChange}
                      placeholder="Company Name"
                      className="rounded-xl border-gray-300 focus-visible:ring-primary h-11 text-sm" />
                    <Input name="email" type="email" value={form.email} onChange={handleChange} required
                      placeholder="Email Address"
                      className="rounded-xl border-gray-300 focus-visible:ring-primary h-11 text-sm" />
                    <div className="flex gap-2">
                      <select className="border border-gray-300 rounded-xl px-3 text-sm text-gray-700 bg-white outline-none focus:border-primary h-11">
                        <option>+91</option>
                        <option>+1</option>
                        <option>+44</option>
                        <option>+971</option>
                      </select>
                      <Input name="phone" type="tel" value={form.phone} onChange={handleChange}
                        placeholder="7003026616"
                        className="flex-1 rounded-xl border-gray-300 focus-visible:ring-primary h-11 text-sm" />
                    </div>
                    <Button type="submit"
                      className="bg-near-black hover:bg-gray-800 text-white font-bold rounded-xl h-12 text-sm mt-1">
                      Request Custom Quote
                    </Button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
