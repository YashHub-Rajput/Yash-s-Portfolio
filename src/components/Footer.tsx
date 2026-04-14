import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import { personalInfo } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/8 py-10 mt-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + credit */}
          <div className="text-center md:text-left">
            <p className="font-syne font-black text-white text-lg">
              YR<span className="text-brand-blue">.</span>
            </p>
            <p className="text-white/30 text-sm mt-1 flex items-center gap-1.5 justify-center md:justify-start font-dm">
              Built with{' '}
              <Heart size={12} className="text-red-400 fill-red-400" />
              {' '}by Yash Rajput · {year}
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 glass rounded-xl flex items-center justify-center text-white/40 hover:text-brand-blue hover:border-brand-blue/30 transition-all duration-200"
            >
              <Github size={16} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 glass rounded-xl flex items-center justify-center text-white/40 hover:text-brand-blue hover:border-brand-blue/30 transition-all duration-200"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-9 h-9 glass rounded-xl flex items-center justify-center text-white/40 hover:text-brand-blue hover:border-brand-blue/30 transition-all duration-200"
            >
              <Mail size={16} />
            </a>
          </div>

          {/* Scroll to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-white/25 hover:text-brand-blue text-xs font-medium uppercase tracking-widest transition-colors duration-200"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  )
}