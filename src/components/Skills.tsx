import { skills } from '../data/portfolio'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const colorMap: Record<string, { bg: string; border: string; text: string; dot: string }> = {
  blue:   { bg: 'bg-brand-blue/8',   border: 'border-brand-blue/20',   text: 'text-brand-blue',   dot: 'bg-brand-blue' },
  purple: { bg: 'bg-brand-purple/8', border: 'border-brand-purple/20', text: 'text-brand-purple', dot: 'bg-brand-purple' },
  teal:   { bg: 'bg-brand-teal/8',   border: 'border-brand-teal/20',   text: 'text-brand-teal',   dot: 'bg-brand-teal' },
  orange: { bg: 'bg-orange-400/8',   border: 'border-orange-400/20',   text: 'text-orange-400',   dot: 'bg-orange-400' },
  green:  { bg: 'bg-green-400/8',    border: 'border-green-400/20',    text: 'text-green-400',    dot: 'bg-green-400' },
  pink:   { bg: 'bg-pink-400/8',     border: 'border-pink-400/20',     text: 'text-pink-400',     dot: 'bg-pink-400' },
}

export default function Skills() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="skills" className="py-28 relative">
      <div className="glow-orb w-[350px] h-[350px] bg-brand-teal/6 top-1/2 right-0 translate-x-1/4 -translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="section-tag mb-4">Tech Stack</span>
          <h2 className="font-syne font-black text-4xl md:text-5xl text-white mt-4">
            Skills &{' '}
            <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-lg mx-auto font-dm">
            A full-stack toolkit built through real projects, internships, and late-night debugging sessions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, i) => {
            const c = colorMap[group.color] ?? colorMap.blue
            return (
              <div
                key={group.category}
                className={`glass rounded-2xl p-6 hover:border-white/20 transition-all duration-500 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-2 h-2 rounded-full ${c.dot} group-hover:scale-150 transition-transform duration-300`} />
                  <h3 className={`font-syne font-bold text-sm uppercase tracking-widest ${c.text}`}>
                    {group.category}
                  </h3>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2">
                  {group.items.map(skill => (
                    <span
                      key={skill}
                      className={`skill-badge text-xs px-3 py-1.5 rounded-lg border transition-all duration-200 cursor-default
                        ${c.bg} ${c.border} ${c.text} hover:scale-105`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom bar — currently learning */}
        <div
          className={`mt-10 glass rounded-2xl p-5 border border-brand-teal/20 bg-brand-teal/5 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-brand-teal font-syne font-bold text-sm uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
              Currently exploring
            </span>
            {['Docker', 'Redis', 'GraphQL', 'AWS', 'System Design'].map(tech => (
              <span
                key={tech}
                className="text-xs px-3 py-1 rounded-full border border-brand-teal/25 text-brand-teal/70 bg-brand-teal/5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}