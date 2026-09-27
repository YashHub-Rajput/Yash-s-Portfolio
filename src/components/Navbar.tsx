import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, X, Download } from 'lucide-react'
import { navLinks, personalInfo } from '../data/portfolio'

interface NavbarProps {
  isDark: boolean
  toggleTheme: () => void
}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = navLinks.map(l => l.href.replace('#', ''))
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-dark-900/80 dark:bg-dark-900/80 backdrop-blur-xl border-b border-white/10 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-syne font-black text-xl tracking-tight text-white hover:text-brand-blue transition-colors duration-300"
          >
            YR<span className="text-brand-blue">.</span>
          </button>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-brand-blue bg-brand-blue/10'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a
              href={personalInfo.resumeUrl}
              download="Yash_Rajput_Resume.pdf"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-brand-blue text-white hover:bg-brand-blue/80 hover:-translate-y-0.5 transition-all duration-200 shadow-glow-blue"
            >
              <Download size={14} />
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-white/50 hover:text-white transition-all"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-all"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute top-16 left-4 right-4 bg-dark-800/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl transition-all duration-300 ${
            menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          <ul className="flex flex-col gap-1 mb-4">
            {navLinks.map(link => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <a
            href={personalInfo.resumeUrl}
            download="Yash_Rajput_Resume.pdf"
            className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-sm font-medium bg-brand-blue text-white"
          >
            <Download size={14} />
            Download Resume
          </a>
        </div>
      </div>
    </>
  )
}