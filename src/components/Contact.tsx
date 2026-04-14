import { useState } from 'react'
import { Mail, Github, Linkedin, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import { personalInfo } from '../data/portfolio'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setSending(true)
    // Simulate send — wire up EmailJS or Formspree here
    setTimeout(() => {
      setSending(false)
      setSent(true)
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setSent(false), 5000)
    }, 1200)
  }

  const socials = [
    { icon: Mail,     label: 'Email',    value: personalInfo.email,    href: `mailto:${personalInfo.email}` },
    { icon: Github,   label: 'GitHub',   value: 'YashHub-Rajput',       href: personalInfo.github },
    { icon: Linkedin, label: 'LinkedIn', value: 'yash-rajput21',        href: personalInfo.linkedin },
    { icon: Phone,    label: 'Phone',    value: personalInfo.phone,     href: `tel:${personalInfo.phone}` },
    { icon: MapPin,   label: 'Location', value: personalInfo.location,  href: '#' },
  ]

  return (
    <section id="contact" className="py-28 relative">
      <div className="glow-orb w-[500px] h-[500px] bg-brand-blue/6 top-0 left-1/2 -translate-x-1/2" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="section-tag mb-4">Contact</span>
          <h2 className="font-syne font-black text-4xl md:text-5xl text-white mt-4">
            Let's{' '}
            <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-lg mx-auto font-dm">
            Open to internships, full-time roles, and freelance projects. Let's build something great.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left — Info */}
          <div className={`lg:col-span-2 space-y-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            {socials.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 glass rounded-2xl p-4 hover:border-brand-blue/30 hover:bg-brand-blue/5 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={16} className="text-brand-blue" />
                </div>
                <div>
                  <p className="text-white/30 text-xs font-medium">{label}</p>
                  <p className="text-white/75 text-sm font-medium break-all">{value}</p>
                </div>
              </a>
            ))}

            {/* Availability */}
            <div className="glass rounded-2xl p-5 border border-brand-teal/25 bg-brand-teal/5 mt-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
                <span className="text-brand-teal text-sm font-semibold">Available Now</span>
              </div>
              <p className="text-white/45 text-sm leading-relaxed font-dm">
                Actively looking for internships and full-time SDE roles.
                Graduating in 2026. Let's talk!
              </p>
            </div>
          </div>

          {/* Right — Form */}
          <div className={`lg:col-span-3 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-white/40 text-xs font-medium mb-2 uppercase tracking-wide">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-brand-blue/50 focus:bg-brand-blue/5 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-white/40 text-xs font-medium mb-2 uppercase tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-brand-blue/50 focus:bg-brand-blue/5 transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/40 text-xs font-medium mb-2 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Hi Yash, I'd like to discuss an opportunity..."
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-brand-blue/50 focus:bg-brand-blue/5 transition-all duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={sending || sent}
                className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  sent
                    ? 'bg-brand-teal/20 border border-brand-teal/40 text-brand-teal'
                    : 'bg-gradient-brand text-white hover:shadow-glow-blue hover:-translate-y-0.5'
                } disabled:opacity-60 disabled:cursor-not-allowed`}
              >
                {sent ? (
                  <>
                    <CheckCircle size={16} />
                    Message Sent!
                  </>
                ) : sending ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>

              <p className="text-white/25 text-xs text-center font-dm">
                Or email directly at{' '}
                <a href={`mailto:${personalInfo.email}`} className="text-brand-blue hover:underline">
                  {personalInfo.email}
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}