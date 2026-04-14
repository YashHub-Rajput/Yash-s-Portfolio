import { useEffect, useState } from 'react'
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react'
import { personalInfo } from '../data/portfolio'

const roles = [
  'Full Stack Developer',
  'MERN Stack Engineer',
  'Problem Solver',
  'Open Source Builder',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const current = roles[roleIndex]
    let i = typing ? 0 : current.length
    const interval = setInterval(() => {
      if (typing) {
        setDisplayed(current.slice(0, i + 1))
        i++
        if (i === current.length) {
          clearInterval(interval)
          setTimeout(() => setTyping(false), 2000)
        }
      } else {
        setDisplayed(current.slice(0, i - 1))
        i--
        if (i === 0) {
          clearInterval(interval)
          setRoleIndex(prev => (prev + 1) % roles.length)
          setTyping(true)
        }
      }
    }, typing ? 70 : 40)
    return () => clearInterval(interval)
  }, [roleIndex, typing])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background orbs */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div
        className="glow-orb w-[600px] h-[600px] bg-brand-blue/8 top-[-200px] right-[-200px] animate-float"
        style={{ animationDelay: '0s' }}
      />
      <div
        className="glow-orb w-[500px] h-[500px] bg-brand-purple/8 bottom-[-150px] left-[-150px] animate-float"
        style={{ animationDelay: '2s' }}
      />
      <div
        className="glow-orb w-[300px] h-[300px] bg-brand-teal/6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-glow-pulse"
      />

      <div className="max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

          {/* Left — Text */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            {/* Tag */}
            <div
              className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '0ms' }}
            >
              <span className="section-tag mb-6 inline-flex">
                <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
                Available for Internships & Placements
              </span>
            </div>

            {/* Name */}
            <div
              className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '100ms' }}
            >
              <h1 className="font-syne font-black text-5xl md:text-6xl xl:text-7xl text-white leading-[1.05] tracking-tight mb-4">
                Hi, I'm{' '}
                <span className="gradient-text">Yash Rajput</span>
              </h1>
            </div>

            {/* Typewriter role */}
            <div
              className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="flex items-center gap-2 justify-center lg:justify-start mb-6">
                <span className="text-white/40 font-dm text-xl">—</span>
                <span className="font-syne font-semibold text-xl md:text-2xl text-brand-blue">
                  {displayed}
                  <span className="animate-pulse text-brand-teal">|</span>
                </span>
              </div>
            </div>

            {/* Tagline */}
            <div
              className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '300ms' }}
            >
              <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 font-dm">
                {personalInfo.tagline}
                <br />
                <span className="text-white/40 text-base">
                  From NCC drills to MERN stack builds — discipline meets development.
                </span>
              </p>
            </div>

            {/* CTAs */}
            <div
              className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '400ms' }}
            >
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
                <button
                  onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-primary"
                >
                  View Projects
                  <ExternalLink size={16} />
                </button>
                <a
                  href={personalInfo.resumeUrl}
                  download="YashRajput-Resume2026.pdf"
                  className="btn-secondary"
                >
                  Download Resume
                  <ArrowDown size={16} />
                </a>
                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-secondary"
                >
                  Contact Me
                  <Mail size={16} />
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div
              className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: '500ms' }}
            >
              <div className="flex gap-4 justify-center lg:justify-start">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/40 hover:text-brand-blue transition-all duration-200 text-sm font-medium group"
                >
                  <Github size={18} className="group-hover:scale-110 transition-transform" />
                  GitHub
                </a>
                <span className="text-white/20">·</span>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/40 hover:text-brand-blue transition-all duration-200 text-sm font-medium group"
                >
                  <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
                  LinkedIn
                </a>
                <span className="text-white/20">·</span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-2 text-white/40 hover:text-brand-blue transition-all duration-200 text-sm font-medium group"
                >
                  <Mail size={18} className="group-hover:scale-110 transition-transform" />
                  Email
                </a>
              </div>
            </div>
          </div>

          {/* Right — Photo */}
          <div
            className={`order-1 lg:order-2 flex-shrink-0 transition-all duration-1000 ${
              visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-[-3px] rounded-full bg-gradient-to-br from-brand-blue via-brand-purple to-brand-teal p-[2px] animate-glow-pulse">
                <div className="w-full h-full rounded-full bg-dark-900" />
              </div>
              {/* Decorative orbit ring */}
              <div className="absolute inset-[-16px] rounded-full border border-brand-blue/15 animate-float" style={{ animationDelay: '1s' }} />
              <div className="absolute inset-[-32px] rounded-full border border-brand-purple/8 animate-float" style={{ animationDelay: '3s' }} />

              {/* Photo */}
              <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-white/10 z-10">
                <img
                  src={personalInfo.photo}
                  alt="Yash Rajput"
                  className="w-full h-full object-cover object-top scale-105 hover:scale-110 transition-transform duration-700"
                />
                {/* Subtle gradient overlay to blend into background */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-dark-900/20 via-transparent to-transparent" />
              </div>

              {/* Floating badge — NCC */}
              <div className="absolute -bottom-2 -left-8 glass px-3 py-2 rounded-xl text-xs font-medium text-white/80 border border-white/15 shadow-card z-20 animate-float" style={{ animationDelay: '0.5s' }}>
                🎖 NCC C-Cert · Grade A
              </div>

              {/* Floating badge — CGPA */}
              <div className="absolute -top-2 -right-8 glass px-3 py-2 rounded-xl text-xs font-medium text-white/80 border border-white/15 shadow-card z-20 animate-float" style={{ animationDelay: '2s' }}>
                🎓 CGPA 7.7 · CSE
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <button
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex flex-col items-center gap-2 text-white/25 hover:text-white/50 transition-colors duration-300 group"
          >
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <ArrowDown size={16} className="animate-bounce group-hover:text-brand-blue" />
          </button>
        </div>
      </div>
    </section>
  )
}