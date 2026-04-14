import { ExternalLink, Github, Star } from 'lucide-react'
import { projects } from '../data/portfolio'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="projects" className="py-28 relative">
      <div className="glow-orb w-[500px] h-[500px] bg-brand-blue/6 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="section-tag mb-4">Portfolio</span>
          <h2 className="font-syne font-black text-4xl md:text-5xl text-white mt-4">
            Things I've{' '}
            <span className="gradient-text">Built</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-lg mx-auto font-dm">
            Real products solving real problems — shipped, deployed, and live.
          </p>
        </div>

        {/* Featured project — large card */}
        {projects.filter(p => p.featured).map((project) => (
          <div
            key={project.id}
            className={`mb-8 glass rounded-3xl overflow-hidden border hover:shadow-card-hover transition-all duration-500 group ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              borderColor: `${project.accent}25`,
              transitionDelay: '100ms',
            }}
          >
            <div className="grid lg:grid-cols-5">
              {/* Left content */}
              <div className="lg:col-span-3 p-8 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border"
                    style={{ color: project.accent, borderColor: `${project.accent}40`, backgroundColor: `${project.accent}10` }}
                  >
                    {project.badge}
                  </span>
                  <span className="flex items-center gap-1 text-yellow-400 text-xs font-medium">
                    <Star size={12} fill="currentColor" />
                    Featured Project
                  </span>
                </div>

                <h3 className="font-syne font-black text-3xl text-white mb-2 group-hover:text-brand-blue transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-white/40 text-sm mb-5 font-medium">{project.tagline}</p>
                <p className="text-white/60 leading-relaxed font-dm mb-6">{project.description}</p>

                {/* Highlights */}
                <ul className="space-y-2 mb-8">
                  {project.highlights.map(h => (
                    <li key={h} className="flex items-center gap-3 text-sm text-white/55">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: project.accent }}
                      />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Links */}
                <div className="flex gap-3 flex-wrap">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5"
                    style={{ backgroundColor: project.accent }}
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium border border-white/15 text-white/70 hover:border-white/30 hover:text-white transition-all duration-200"
                  >
                    <Github size={14} />
                    Source
                  </a>
                </div>
              </div>

              {/* Right — tech stack visual */}
              <div className="lg:col-span-2 p-8 md:p-10 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/5">
                <p className="text-white/30 text-xs font-bold uppercase tracking-widest mb-5">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1.5 rounded-lg border font-medium"
                      style={{
                        color: project.accent,
                        borderColor: `${project.accent}30`,
                        backgroundColor: `${project.accent}08`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Visual accent */}
                <div
                  className="mt-10 w-24 h-24 rounded-2xl flex items-center justify-center text-5xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                  style={{ backgroundColor: `${project.accent}15` }}
                >
                  🛡️
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Regular project cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.filter(p => !p.featured).map((project, i) => (
            <div
              key={project.id}
              className={`glass rounded-2xl p-7 border hover:shadow-card-hover transition-all duration-500 group flex flex-col ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                borderColor: `${project.accent}20`,
                transitionDelay: `${300 + i * 120}ms`,
              }}
            >
              {/* Badge + icon */}
              <div className="flex items-center justify-between mb-5">
                <span
                  className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border"
                  style={{ color: project.accent, borderColor: `${project.accent}40`, backgroundColor: `${project.accent}10` }}
                >
                  {project.badge}
                </span>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: `${project.accent}12` }}
                >
                  {i === 0 ? '🗳️' : '📊'}
                </div>
              </div>

              <h3 className="font-syne font-black text-2xl text-white mb-1 group-hover:text-brand-blue transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-white/40 text-sm mb-4 font-medium">{project.tagline}</p>
              <p className="text-white/55 text-sm leading-relaxed font-dm mb-6 flex-1">{project.description}</p>

              {/* Highlights */}
              <ul className="space-y-1.5 mb-6">
                {project.highlights.map(h => (
                  <li key={h} className="flex items-center gap-2.5 text-xs text-white/45">
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: project.accent }} />
                    {h}
                  </li>
                ))}
              </ul>

              {/* Tech */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tech.slice(0, 5).map(t => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-lg border"
                    style={{ color: project.accent, borderColor: `${project.accent}25`, backgroundColor: `${project.accent}06` }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                {project.liveUrl !== '#' && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white transition-all hover:-translate-y-0.5"
                    style={{ backgroundColor: project.accent }}
                  >
                    <ExternalLink size={12} />
                    Live
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border border-white/15 text-white/60 hover:text-white hover:border-white/30 transition-all"
                >
                  <Github size={12} />
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div
          className={`mt-10 text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <a
            href="https://github.com/YashHub-Rajput"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            <Github size={16} />
            View all projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}