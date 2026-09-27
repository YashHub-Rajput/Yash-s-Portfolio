import { MapPin, GraduationCap, Code2, Zap } from 'lucide-react'
import { personalInfo, education } from '../data/portfolio'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const stats = [
  { label: 'Projects Shipped', value: '5+', icon: '🚀' },
  { label: 'Tools & Libraries', value: '15+', icon: '⚡' },
  { label: 'Professional Experience', value: 'Since 2026', icon: '💼' },
  { label: 'Certifications', value: '4+', icon: '🏅' },
]

export default function About() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="about" className="py-28 relative">
      {/* Background accent */}
      <div className="glow-orb w-[400px] h-[400px] bg-brand-purple/6 top-1/2 left-0 -translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="section-tag mb-4">About Me</span>
          <h2 className="font-syne font-black text-4xl md:text-5xl text-white mt-4">
            Discipline meets{' '}
            <span className="gradient-text">Development</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — Bio */}
          <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="space-y-5 text-white/65 leading-relaxed font-dm text-[17px]">
              <p>
                <span className="text-white font-medium">Software Developer focused on building reliable systems</span> — I work on Python backend components, data
                ingestion and validation pipelines, and observability tooling for distributed systems.
              </p>
              <p>
                I combine backend engineering with full-stack experience to deliver
                well-tested, maintainable services. My work emphasises strong testing,
                data correctness, and pragmatic automation that helps teams move faster.
              </p>
              <p>
                I also integrate GenAI APIs and AI-assisted workflows to accelerate
                development, while reviewing outputs and validating behavior before
                they reach production.
              </p>
              <p className="text-white/40 text-sm italic">Outside tech: photography, dancing, fitness & athletics.</p>
            </div>

            {/* Location + quick info */}
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-2 text-white/40 text-sm">
                <MapPin size={14} className="text-brand-blue" />
                {personalInfo.location}
              </div>
              <div className="flex items-center gap-2 text-white/40 text-sm">
                  <GraduationCap size={14} className="text-brand-purple" />
                  B.Tech in Computer Science & Engineering · 2026
                </div>
                <div className="flex items-center gap-2 text-white/40 text-sm">
                  <Code2 size={14} className="text-brand-teal" />
                  Python backend · Full-stack
                </div>
                <div className="flex items-center gap-2 text-white/40 text-sm">
                  <Zap size={14} className="text-yellow-400" />
                  Software Developer — White Feather Consultancy (Jun 2026 – Present)
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`glass rounded-2xl p-4 text-center transition-all duration-500 hover:border-brand-blue/30 hover:bg-brand-blue/5 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${300 + i * 80}ms` }}
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="font-syne font-black text-2xl text-white">{stat.value}</div>
                  <div className="text-white/40 text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* AI-assisted engineering */}
            <div className="mt-6">
              <div className="glass rounded-2xl p-4">
                <h4 className="font-syne font-semibold text-white text-[15px] mb-2">AI-assisted engineering</h4>
                <ul className="text-white/60 text-sm space-y-1">
                  <li>OpenCode workflows with Claude, GPT, and Kimi agents.</li>
                  <li>Codex and GitHub Copilot for iterative coding and reviews.</li>
                  <li>Claude Code/CLI for observability and automation tasks.</li>
                  <li>Reusable prompts and small libraries to speed exploration and testing.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right — Education Timeline */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="font-syne font-bold text-xl text-white mb-8 flex items-center gap-3">
              <GraduationCap className="text-brand-blue" size={22} />
              Education
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-brand-blue/60 via-brand-purple/40 to-transparent" />

              <div className="space-y-8">
                {education.map((edu, i) => (
                  <div
                    key={i}
                    className={`relative flex gap-6 transition-all duration-500 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                    }`}
                    style={{ transitionDelay: `${400 + i * 120}ms` }}
                  >
                    {/* Dot */}
                    <div className="relative flex-shrink-0 w-10 h-10 rounded-full glass border border-brand-blue/30 flex items-center justify-center z-10">
                      <div className="w-2.5 h-2.5 rounded-full bg-brand-blue" />
                    </div>

                    {/* Content */}
                    <div className="glass rounded-2xl p-5 flex-1 hover:border-brand-blue/25 transition-all duration-300 group">
                      <div className="flex items-start justify-between gap-2 flex-wrap">
                        <h4 className="font-syne font-semibold text-white text-[15px] leading-snug">
                          {edu.degree}
                        </h4>
                        {edu.score && (
                          <span className="text-xs font-medium text-brand-teal bg-brand-teal/10 px-2 py-0.5 rounded-full border border-brand-teal/20 whitespace-nowrap">
                            {edu.score}
                          </span>
                        )}
                      </div>
                      <p className="text-white/50 text-sm mt-1">{edu.institution}</p>
                      <p className="text-white/30 text-xs mt-1">{edu.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* NCC Highlight Card */}
            <div
              className={`mt-8 glass rounded-2xl p-5 border border-brand-blue/20 bg-gradient-to-br from-brand-blue/5 to-brand-purple/5 transition-all duration-700 delay-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl">🎖</span>
                <div>
                  <h4 className="font-syne font-semibold text-white text-[15px]">
                    NCC Army Wing — C Certificate · Grade A
                  </h4>
                  <p className="text-white/50 text-sm mt-1">
                    One of the few students to earn the highest NCC grade — instilling
                    discipline and leadership that shapes every project I build.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}