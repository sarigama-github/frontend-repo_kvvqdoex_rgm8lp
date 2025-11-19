import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { href: '#home', label: 'Beranda' },
  { href: '#projects', label: 'Proyek' },
  { href: '#skills', label: 'Keahlian' },
  { href: '#about', label: 'Tentang' },
  { href: '#contact', label: 'Kontak' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleNav = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setOpen(false)
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-slate-900/70 backdrop-blur border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" onClick={(e)=>handleNav(e,'#home')} className="text-white font-bold text-lg tracking-tight">
          Portofolio • Informatika
        </a>
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e)=>handleNav(e,item.href)}
              className="text-slate-300 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/90 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e)=>handleNav(e,item.href)}
                className="text-slate-200 py-2"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
