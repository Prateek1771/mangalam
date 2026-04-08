import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

const navLinks = [
  { label: 'About Us', href: '#about' },
]

const products = [
  'HDPE Pipes & Coils',
  'HDPE Fittings',
  'PE-RT Heating Pipes',
  'Installation Services',
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 bg-white border-t-[4px] border-t-[#222222] border-b transition-shadow duration-300 ${
        scrolled ? 'shadow-md border-gray-200' : 'border-gray-100 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-[72px]">
        <a href="#" className="flex-shrink-0 group">
          <img
            src="/logo.png"
            alt="Mangalam HDPE Pipes"
            className="h-11 w-auto object-contain group-hover:opacity-80 transition-opacity"
          />
        </a>

        <div className="flex-1" />

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[14px] font-medium text-gray-700 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}

          <div className="relative">
            <button
              onClick={() => setDropdownOpen((o) => !o)}
              onBlur={() => setTimeout(() => setDropdownOpen(false), 150)}
              className="flex items-center gap-1 text-[14px] font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Products
              <ChevronDown
                className={`w-4 h-4 opacity-60 transition-transform duration-200 ${
                  dropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
                >
                  {products.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                    >
                      {item}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Button
            asChild
            className="bg-primary hover:bg-primary-dark text-white text-[14px] font-medium px-5 py-2.5 rounded-lg h-auto"
          >
            <a href="#contact">Contact Us</a>
          </Button>
        </div>

        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
              {mobileOpen ? <X className="w-5 h-5 text-gray-800" /> : <Menu className="w-5 h-5 text-gray-800" />}
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 pt-16 border-l border-gray-100 shadow-2xl transition-transform duration-300 ease-in-out">
            <nav className="flex flex-col gap-4">
              <a
                href="#about"
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-gray-800 py-3 px-2 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-all border-b border-gray-50"
              >
                About Us
              </a>
              <div className="py-2 border-b border-gray-100">
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider px-2 mb-2">Products</p>
                <div className="flex flex-col gap-1">
                  {products.map((item) => (
                    <a
                      key={item}
                      href="#"
                      onClick={() => setMobileOpen(false)}
                      className="text-base text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-all"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
              <Button
                className="bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl mt-4 h-12 shadow-lg shadow-primary/20 active:scale-[0.98] transition-all"
                onClick={() => setMobileOpen(false)}
                asChild
              >
                <a href="#contact">Contact Us</a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.nav>
  )
}
