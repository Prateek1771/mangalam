import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Check, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const images = [
  '/netimg.jpg',
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
  'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80',
  'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
  'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80',
]

const certifications = [
  { label: 'BIS Certified', img: '/logo1.png' },
  { label: 'ISO Certified', img: '/logo2.png' },
  { label: 'CE Certified', img: '/logo3.png' },
]

const features = [
  'Leak-Proof Fusion Joints',
  'Chemical Resistance',
  '50+ Year Service Life',
  'Flexible Installation',
  'BIS & ISO Certified',
]

function ImageGallery() {
  const [current, setCurrent] = useState(0)
  const [zoom, setZoom] = useState({ active: false, x: 0, y: 0 })
  const [zoomRect, setZoomRect] = useState(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % images.length), 4000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length)
  const next = () => setCurrent((c) => (c + 1) % images.length)

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
    const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height))
    setZoom({ active: true, x, y })
    setZoomRect({ top: rect.top, left: rect.left, right: rect.right, width: rect.width, height: rect.height })
  }

  const handleMouseLeave = () => {
    setZoom({ active: false, x: 0, y: 0 })
    setZoomRect(null)
  }

  return (
    <div className="flex flex-col gap-2">
      <div
        ref={containerRef}
        className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-gray-100 shadow-md cursor-crosshair"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={images[current]}
            alt={`HDPE pipe ${current + 1}`}
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          />
        </AnimatePresence>

        {zoom.active && (
          <div
            className="hidden lg:block absolute pointer-events-none border-2 border-primary/80 bg-primary/10"
            style={{
              width: 96,
              height: 96,
              left: `${zoom.x * 100}%`,
              top: `${zoom.y * 100}%`,
              transform: 'translate(-50%, -50%)',
            }}
          />
        )}

        <button onClick={prev} aria-label="Previous"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/85 hover:bg-white shadow flex items-center justify-center transition-all">
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>
        <button onClick={next} aria-label="Next"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/85 hover:bg-white shadow flex items-center justify-center transition-all">
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      <div className="flex flex-wrap gap-2 sm:gap-3 mt-4">
        {images.map((img, i) => (
          <button key={i} onClick={() => setCurrent(i)}
            className={`w-[calc(20%-8px)] sm:w-[72px] aspect-square rounded-xl overflow-hidden border-2 transition-all ${
              i === current ? 'border-primary border-transparent' : 'border-gray-200 opacity-80 hover:opacity-100'
            }`}>
            <img src={img} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {zoom.active && zoomRect && (
        <div
          className="hidden lg:block fixed rounded-2xl overflow-hidden border border-gray-200 shadow-2xl pointer-events-none z-[100]"
          style={{
            top: zoomRect.top,
            left: zoomRect.right + 12,
            width: 320,
            height: 320,
            backgroundImage: `url(${images[current]})`,
            backgroundSize: '300%',
            backgroundPosition: `${zoom.x * 100}% ${zoom.y * 100}%`,
            backgroundRepeat: 'no-repeat',
          }}
        />
      )}
    </div>
  )
}

function ProductDetails() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
      className="flex flex-col gap-4"
    >
      <motion.p variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
        className="flex lg:hidden text-[13px] items-center gap-2 text-gray-500 mb-1">
        <span>Products</span>
        <span className="text-gray-400">›</span>
        <span className="text-gray-800">Two For One Twister</span>
      </motion.p>

      <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
        className="flex flex-wrap gap-2">
        {certifications.map(({ label, img }) => (
          <div key={label}
            className="flex items-center gap-1.5 border border-gray-300 rounded-md px-2.5 py-1 text-xs font-medium text-gray-600 bg-white">
            <img src={img} alt={label} className="w-4 h-4 object-contain" />
            {label}
          </div>
        ))}
      </motion.div>

      <motion.h1 variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }}
        className="font-display font-bold text-[28px] sm:text-3xl lg:text-[36px] leading-tight text-near-black">
        Premium HDPE Pipes &amp; Coils for Modern Infrastructure
      </motion.h1>

      <motion.ul variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
        className="flex flex-col gap-2">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2.5 text-sm text-gray-700">
            <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
              <Check className="w-3 h-3 text-white" strokeWidth={3} />
            </span>
            {f}
          </li>
        ))}
      </motion.ul>

      <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
        className="border border-gray-200 rounded-xl p-4 flex flex-col gap-3 bg-white">
        <p className="text-xs text-gray-500 font-medium">Price Range</p>
        <p className="font-bold text-2xl text-near-black tracking-tight">₹4,80,000 - 7,90,000</p>
        <div className="flex flex-wrap gap-2">
          <span className="bg-amber-100 text-amber-700 text-xs font-medium px-3 py-1.5 rounded-md">
            Shipping: 6-12 days
          </span>
          <span className="bg-orange-100 text-orange-700 text-xs font-medium px-3 py-1.5 rounded-md">
            Returns: If returned within 7 days
          </span>
          <span className="text-xs text-gray-500 bg-gray-100 rounded-md px-3 py-1.5">
            Certifications: ISO Certified, BIS Certified
          </span>
        </div>
      </motion.div>

      <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
        className="flex flex-col sm:flex-row gap-3">
        <Button className="flex-1 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl h-12 text-sm" asChild>
          <a href="#contact">Get Custom Quote</a>
        </Button>
        <Button variant="outline"
          className="flex-1 border-2 border-gray-300 text-gray-700 hover:border-primary hover:text-primary font-semibold rounded-xl h-12 text-sm flex items-center justify-center gap-1.5"
          asChild>
          <a href="#techspecs">View Technical Specs <ArrowRight className="w-4 h-4" /></a>
        </Button>
      </motion.div>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section className="bg-[#f8f9fa] pt-[76px] lg:pt-[84px] pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-14 lg:items-start">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-none mt-8 lg:mt-0 relative"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="hidden lg:flex absolute top-[-36px] left-0 md:top-[-40px] z-10 text-[13px] items-center gap-2 text-gray-500"
            >
              <span>Products</span>
              <span className="text-gray-400">›</span>
              <span className="text-gray-800">Two For One Twister</span>
            </motion.p>
            <ImageGallery />
          </motion.div>

          <div className="order-1 lg:order-none">
            <ProductDetails />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-16 pt-10 border-t border-gray-100"
        >
          <p className="text-center text-sm text-gray-400 mb-8">
            Trusted by Hundreds of Companies Globally
          </p>
          <div className="flex flex-nowrap justify-center items-center gap-8 sm:gap-14 lg:gap-20">
            <img src="/logo4.png" alt="Trusted partner" className="h-16 sm:h-20 lg:h-24 object-contain flex-shrink-0 opacity-90 grayscale hover:grayscale-0 transition-all" />
            <img src="/logo4.png" alt="Trusted partner" className="h-16 sm:h-20 lg:h-24 object-contain flex-shrink-0 opacity-90 grayscale hover:grayscale-0 transition-all" />
            <img src="/logo4.png" alt="Trusted partner" className="h-16 sm:h-20 lg:h-24 object-contain flex-shrink-0 opacity-90 grayscale hover:grayscale-0 transition-all" />
            <img src="/logo4.png" alt="Trusted partner" className="hidden sm:block h-16 sm:h-20 lg:h-24 object-contain flex-shrink-0 opacity-90 grayscale hover:grayscale-0 transition-all" />
            <img src="/logo4.png" alt="Trusted partner" className="hidden lg:block h-16 sm:h-20 lg:h-24 object-contain flex-shrink-0 opacity-90 grayscale hover:grayscale-0 transition-all" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
