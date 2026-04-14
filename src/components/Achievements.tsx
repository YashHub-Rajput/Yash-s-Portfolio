import { achievements } from '../data/portfolio'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const typeStyle: Record<string, { color: string; bg: string; border: string }> = {
  award:         { color: 'text-yellow-400', bg: 'bg-yellow-400/8',  border: 'border-yellow-400/20' },
  experience:    { color: 'text-brand-blue',  bg: 'bg-brand-blue/8',  border: 'border-brand-blue/20' },
  certification: { color: 'text-brand-teal',  bg: 'bg-brand-teal/8',  border: 'border-brand-teal/20' },
  internship:    { color: 'text-orange-400',  bg: 'bg-orange-400/8',  border: 'border-orange-400/20' },
  leadership:    { color: 'text-brand-purple', bg: 'bg-brand-purple/8', border: 'border-brand-purple/20' },
}

const typeIcons: Record<string, string> = {
  award:         '🎖',
  experience:    '💼',
  certification: '📜',
  internship:    '💻',
  leadership:    '🎤',
}

export default function Achievements() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="achievements" className="py-28 relative">
      <div className="glow-orb w-[400px] h-[400px] bg-brand-purple/6 bottom-0 right-0 translate-x-1/4 translate-y-1/4" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="section-tag mb-4">Achievements</span>
          <h2 className="font-syne font-black text-4xl md:text-5xl text-white mt-4">
            Beyond the{' '}
            <span className="gradient-text">Codebase</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-lg mx-auto font-dm">
            Certifications, leadership roles, and experiences that shape who I am as a developer.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((item, i) => {
            const s = typeStyle[item.type] ?? typeStyle.certification
            return (
              <div
                key={i}
                className={`glass rounded-2xl p-6 border hover:border-white/20 transition-all duration-500 group hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Icon + type */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${s.bg} border ${s.border} group-hover:scale-110 transition-transform duration-300`}
                  >
                    {typeIcons[item.type]}
                  </div>
                  <span
                    className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${s.color} ${s.bg} ${s.border}`}
                  >
                    {item.type}
                  </span>
                </div>

                <h3 className="font-syne font-bold text-white text-[15px] leading-snug mb-1 group-hover:text-brand-blue transition-colors duration-300">
                  {item.title}
                </h3>
                <p className={`text-sm font-medium mb-3 ${s.color}`}>{item.org}</p>
                {item.meta && (
                  <span className={`text-xs px-2 py-0.5 rounded border ${s.bg} ${s.border} ${s.color} inline-block mb-3`}>
                    {item.meta}
                  </span>
                )}
                <p className="text-white/45 text-sm leading-relaxed font-dm">{item.description}</p>
              </div>
            )
          })}
        </div>

        {/* Hobbies strip */}
        <div
          className={`mt-10 glass rounded-2xl p-6 transition-all duration-700 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-white/30 text-xs font-bold uppercase tracking-widest mb-4">Outside the screen</p>
          <div className="flex flex-wrap gap-4">
            {[
              { emoji: '📸', label: 'Photography' },
              { emoji: '💃', label: 'Dance' },
              { emoji: '🏃', label: 'Fitness & Athletics' },
              { emoji: '⚽', label: 'Sports' },
              { emoji: '🎙️', label: 'Public Speaking' },
            ].map(h => (
              <div
                key={h.label}
                className="flex items-center gap-2 text-sm text-white/50 glass px-4 py-2 rounded-xl border hover:border-brand-blue/30 hover:text-white/70 transition-all duration-200"
              >
                <span>{h.emoji}</span>
                {h.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}