import { useState } from 'react'
import { AlertTriangle, CheckCircle2, Heart, Sparkles, ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '@/lib/utils'
import { fitGoals, fitMantra, bestRespondsTo, dailySections } from '@/data/fitPlan'

const timelineColors: Record<string, { border: string; bg: string; dot: string; badge: string }> = {
  morning:   { border: 'border-amber-500/30',   bg: 'bg-amber-500/8',   dot: 'bg-amber-400',   badge: 'bg-amber-500/15 text-amber-300 border-amber-500/25' },
  breakfast: { border: 'border-emerald-500/30', bg: 'bg-emerald-500/8', dot: 'bg-emerald-400', badge: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/25' },
  lunch:     { border: 'border-sky-500/30',     bg: 'bg-sky-500/8',     dot: 'bg-sky-400',     badge: 'bg-sky-500/15 text-sky-300 border-sky-500/25' },
  pool:      { border: 'border-cyan-500/30',    bg: 'bg-cyan-500/8',    dot: 'bg-cyan-400',    badge: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/25' },
  afternoon: { border: 'border-orange-500/30',  bg: 'bg-orange-500/8',  dot: 'bg-orange-400',  badge: 'bg-orange-500/15 text-orange-300 border-orange-500/25' },
  dinner:    { border: 'border-rose-500/30',    bg: 'bg-rose-500/8',    dot: 'bg-rose-400',    badge: 'bg-rose-500/15 text-rose-300 border-rose-500/25' },
  night:     { border: 'border-indigo-500/30',  bg: 'bg-indigo-500/8',  dot: 'bg-indigo-400',  badge: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/25' },
}

export function FitPlanPage() {
  const [expanded, setExpanded] = useState<string | null>(null)

  const toggle = (id: string) => setExpanded(prev => prev === id ? null : id)

  return (
    <div className="p-4 md:p-6 space-y-6 max-w-xl mx-auto pb-24 md:pb-6">

      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Heart size={20} className="text-rose-400" />
          <h1 className="text-xl font-bold text-[hsl(var(--foreground))]">Mozhgan's Fit Plan</h1>
        </div>
        <p className="text-sm text-[hsl(var(--muted-foreground))]">7-Day Cruise Fit & Low-Bloating Plan</p>
      </div>

      {/* Goals banner */}
      <div className="rounded-2xl bg-gradient-to-br from-rose-600/30 via-pink-600/20 to-purple-600/20 border border-rose-500/30 p-4">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles size={15} className="text-rose-300" />
          <p className="text-sm font-bold text-rose-200">Goals for this cruise</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {fitGoals.map((g) => (
            <span
              key={g}
              className="text-[11px] font-medium bg-white/10 border border-white/15 rounded-full px-2.5 py-1 text-rose-100"
            >
              {g}
            </span>
          ))}
        </div>
      </div>

      {/* Day timeline */}
      <div>
        <h2 className="text-sm font-semibold text-[hsl(var(--foreground))] uppercase tracking-wide mb-4">
          Daily Plan
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-[hsl(var(--border))]" />

          <div className="space-y-3">
            {dailySections.map((section) => {
              const c = timelineColors[section.id]
              const isOpen = expanded === section.id

              return (
                <div key={section.id} className="flex gap-4">
                  {/* Dot */}
                  <div className="flex flex-col items-center shrink-0 pt-3.5">
                    <div className={cn('w-[10px] h-[10px] rounded-full z-10 shrink-0', c.dot)} />
                  </div>

                  {/* Card */}
                  <div className={cn('flex-1 rounded-xl border overflow-hidden', c.border, c.bg)}>
                    <button
                      onClick={() => toggle(section.id)}
                      className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-white/5 transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-lg">{section.emoji}</span>
                        <div>
                          <span className={cn('text-[10px] font-semibold px-2 py-0.5 rounded-full border mr-2', c.badge)}>
                            {section.time}
                          </span>
                          <span className="text-sm font-semibold text-[hsl(var(--foreground))]">{section.title}</span>
                        </div>
                      </div>
                      {isOpen
                        ? <ChevronUp size={14} className="text-[hsl(var(--muted-foreground))] shrink-0" />
                        : <ChevronDown size={14} className="text-[hsl(var(--muted-foreground))] shrink-0" />}
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-4 border-t border-white/8">
                        <ul className="space-y-2 mt-3">
                          {section.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-[hsl(var(--foreground))]">
                              <CheckCircle2 size={13} className="text-emerald-400 mt-0.5 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                        {section.avoidNote && (
                          <div className="mt-3 flex items-start gap-2 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                            <AlertTriangle size={12} className="text-red-400 mt-0.5 shrink-0" />
                            <p className="text-xs text-red-300">{section.avoidNote}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Body responds best to */}
      <div className="rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-4">
        <p className="text-xs font-bold text-sky-400 uppercase tracking-wide mb-3">Your body responds best to</p>
        <div className="flex flex-wrap gap-2">
          {bestRespondsTo.map((b) => (
            <span
              key={b}
              className="text-xs bg-sky-500/15 border border-sky-500/25 text-sky-300 rounded-full px-3 py-1 font-medium"
            >
              {b}
            </span>
          ))}
        </div>
      </div>

      {/* Mantra */}
      <div className="rounded-2xl bg-gradient-to-br from-purple-600/20 to-rose-600/20 border border-purple-500/25 p-5 text-center">
        <Heart size={22} className="text-rose-400 mx-auto mb-2" />
        <p className="text-sm font-semibold text-[hsl(var(--foreground))] leading-relaxed italic">
          "{fitMantra}"
        </p>
      </div>
    </div>
  )
}
