const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
  </svg>
)
const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const columns = {
  aboutUs: ['About Us'],
  categories: [
    'Packaging Industry Solutions',
    'Fishnet Manufacturing',
    'PPMF/Tapes and Twines',
    'FIBC and Woven Sack',
    'Carpet and Rugs Industry',
    'Technical Textiles',
  ],
  products: [
    'Two For One Twister',
    'TPRS Twister Machine',
    'Ring Twisting Machines',
    'Covering Machines',
    'Heat Setting Equipment',
    'Servo Controlled Winders',
  ],
}

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.2fr] gap-8 pb-10 border-b border-gray-100">

          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <div className="flex flex-col leading-none mb-2">
              <span className="font-display font-bold text-[22px] tracking-tight" style={{ color: '#8B1A2F', letterSpacing: '-0.5px' }}>
                MANGALAM
              </span>
              <div className="flex items-center gap-0.5 mt-0.5">
                <span className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">HDPE</span>
                <span className="w-px h-3 bg-gray-400 mx-1" />
                <span className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">PIPES</span>
              </div>
              <div className="h-px w-full bg-[#8B1A2F] mt-0.5" />
            </div>
            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
              Premium{' '}
              <span className="text-primary font-semibold">HDPE Pipes &amp; Fittings</span>{' '}
              Manufacturer in South India
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-near-black tracking-wide uppercase mb-4">About Us</h4>
            <ul className="flex flex-col gap-2.5">
              {columns.aboutUs.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-near-black tracking-wide uppercase mb-4">Categories</h4>
            <ul className="flex flex-col gap-2.5">
              {columns.categories.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-near-black tracking-wide uppercase mb-4">Products</h4>
            <ul className="flex flex-col gap-2.5">
              {columns.products.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-near-black tracking-wide uppercase mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-gray-500">
              <div className="flex items-start gap-2">
                <span className="mt-0.5 text-gray-400">📍</span>
                <p className="leading-relaxed">2126, Road No. 2, GIDC Sachin, Surat – 394 230<br />Gujarat, India</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">📞</span>
                <a href="tel:+91XXXXXXXXXX" className="hover:text-primary transition-colors">+91-XXX-XXX-XXXX</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">✉️</span>
                <a href="mailto:info@meeraind.com" className="hover:text-primary transition-colors">info@meeraind.com</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">🎧</span>
                <a href="mailto:support@meeraind.com" className="hover:text-primary transition-colors">support@meeraind.com</a>
              </div>
              <div className="flex gap-3 mt-1">
                {[
                  { Icon: LinkedInIcon, href: '#', label: 'LinkedIn' },
                  { Icon: XIcon, href: '#', label: 'X' },
                  { Icon: InstagramIcon, href: '#', label: 'Instagram' },
                ].map(({ Icon, href, label }) => (
                  <a key={label} href={href} aria-label={label}
                    className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary transition-colors">
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400 text-center sm:text-left">
            Copyright © {new Date().getFullYear()} Meera Industries Limited | All Rights Reserved
          </p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((link) => (
              <a key={link} href="#" className="text-xs text-gray-400 hover:text-gray-700 transition-colors">{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
