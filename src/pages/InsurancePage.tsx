import { useState } from 'react'
import {
  Phone, Globe, Mail, ChevronDown, ChevronUp,
  AlertTriangle, CheckCircle2, FileText, ShieldCheck, Info
} from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  insurancePolicy,
  emergencyContacts,
  coverages,
  keyExclusions,
  claimDocuments,
  type Coverage,
} from '@/data/insurance'

function CoverageCard({ coverage }: { coverage: Coverage }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors"
      >
        <div>
          <p className="font-semibold text-sm text-[hsl(var(--foreground))]">{coverage.name}</p>
          <p className="text-xs text-[hsl(var(--muted-foreground))] mt-0.5">{coverage.nameIt}</p>
          <p className="text-sm font-medium text-sky-400 mt-1">{coverage.maxAmount}</p>
        </div>
        {open ? <ChevronUp size={16} className="text-[hsl(var(--muted-foreground))] shrink-0" /> : <ChevronDown size={16} className="text-[hsl(var(--muted-foreground))] shrink-0" />}
      </button>

      {open && (
        <div className="px-4 pb-4 space-y-4 border-t border-[hsl(var(--border))]">
          {coverage.deductible && (
            <div className="flex items-center gap-2 mt-3 text-xs text-amber-400">
              <AlertTriangle size={13} />
              <span>Deductible / Threshold: <strong>{coverage.deductible}</strong></span>
            </div>
          )}

          <div className="mt-3">
            <p className="text-xs font-semibold text-[hsl(var(--muted-foreground))] uppercase tracking-wide mb-2">Key Conditions</p>
            <ul className="space-y-1.5">
              {coverage.keyConditions.map((c, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-[hsl(var(--foreground))]">
                  <Info size={12} className="text-sky-400 mt-0.5 shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold text-[hsl(var(--muted-foreground))] uppercase tracking-wide mb-2">What To Do</p>
            <ul className="space-y-1.5">
              {coverage.whatToDo.map((step, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-[hsl(var(--foreground))]">
                  <span className="text-sky-400 font-bold shrink-0">{i + 1}.</span>
                  {step}
                </li>
              ))}
            </ul>
          </div>

          {coverage.claimDeadline && (
            <div className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/25 rounded-lg px-3 py-2">
              <AlertTriangle size={13} className="text-amber-400 shrink-0" />
              <p className="text-xs text-amber-300"><strong>Deadline:</strong> {coverage.claimDeadline}</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export function InsurancePage() {
  const [showExclusions, setShowExclusions] = useState(false)
  const [showDocs, setShowDocs] = useState(false)

  return (
    <div className="p-4 md:p-6 space-y-6 max-w-2xl mx-auto pb-24 md:pb-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <ShieldCheck size={20} className="text-sky-400" />
          <h1 className="text-xl font-bold text-[hsl(var(--foreground))]">Insurance Policy</h1>
        </div>
        <p className="text-sm text-[hsl(var(--muted-foreground))]">MSC Executive Web — Europ Assistance Italia</p>
      </div>

      {/* Policy Info Banner */}
      <div className="bg-sky-500/10 border border-sky-500/25 rounded-xl p-4 space-y-2">
        <div className="flex items-center gap-2 mb-2">
          <FileText size={15} className="text-sky-400" />
          <p className="text-sm font-semibold text-sky-300">Policy Details</p>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
          <div>
            <p className="text-[10px] text-[hsl(var(--muted-foreground))]">Policy Number</p>
            <p className="text-sm font-bold text-[hsl(var(--foreground))]">{insurancePolicy.policyNumber}</p>
          </div>
          <div>
            <p className="text-[10px] text-[hsl(var(--muted-foreground))]">Card Prefix</p>
            <p className="text-sm font-bold text-[hsl(var(--foreground))]">{insurancePolicy.cardPrefix}</p>
          </div>
          <div>
            <p className="text-[10px] text-[hsl(var(--muted-foreground))]">Insurer</p>
            <p className="text-sm font-medium text-[hsl(var(--foreground))]">{insurancePolicy.insurer}</p>
          </div>
          <div>
            <p className="text-[10px] text-[hsl(var(--muted-foreground))]">Model</p>
            <p className="text-sm font-medium text-[hsl(var(--foreground))]">{insurancePolicy.model}</p>
          </div>
        </div>
        <p className="text-[11px] text-sky-300 mt-1">When calling: give your card number <strong>MSCWW40815Q</strong></p>
      </div>

      {/* Emergency Contacts */}
      <div>
        <h2 className="text-sm font-semibold text-[hsl(var(--foreground))] mb-3 uppercase tracking-wide">Emergency Contacts</h2>
        <div className="space-y-2">
          {emergencyContacts.map((c) => (
            <div
              key={c.label}
              className={cn(
                'rounded-xl border p-3.5 flex items-start gap-3',
                c.label.includes('24/7')
                  ? 'border-red-500/40 bg-red-500/10'
                  : 'border-[hsl(var(--border))] bg-[hsl(var(--card))]'
              )}
            >
              <div className={cn(
                'w-8 h-8 rounded-lg flex items-center justify-center shrink-0',
                c.label.includes('24/7') ? 'bg-red-500/20' :
                c.value.includes('@') ? 'bg-purple-500/15' :
                c.value.includes('.') && !c.value.startsWith('+') && !c.value.startsWith('8') ? 'bg-sky-500/15' : 'bg-green-500/15'
              )}>
                {c.label.includes('24/7') || c.value.startsWith('+') || c.value.startsWith('8') ? (
                  <Phone size={15} className={c.label.includes('24/7') ? 'text-red-400' : 'text-green-400'} />
                ) : c.value.includes('@') ? (
                  <Mail size={15} className="text-purple-400" />
                ) : (
                  <Globe size={15} className="text-sky-400" />
                )}
              </div>
              <div className="min-w-0">
                <p className="text-xs text-[hsl(var(--muted-foreground))]">{c.label}</p>
                <p className={cn(
                  'text-sm font-bold break-all',
                  c.label.includes('24/7') ? 'text-red-300' : 'text-[hsl(var(--foreground))]'
                )}>{c.value}</p>
                {c.note && <p className="text-[11px] text-[hsl(var(--muted-foreground))] mt-0.5">{c.note}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Coverage Cards */}
      <div>
        <h2 className="text-sm font-semibold text-[hsl(var(--foreground))] mb-3 uppercase tracking-wide">
          Coverage — 11 Guarantees
        </h2>
        <p className="text-xs text-[hsl(var(--muted-foreground))] mb-3">Tap any guarantee to see coverage limits, conditions, and what to do when claiming.</p>
        <div className="space-y-2">
          {coverages.map(c => <CoverageCard key={c.id} coverage={c} />)}
        </div>
      </div>

      {/* Required Documents */}
      <div className="rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] overflow-hidden">
        <button
          onClick={() => setShowDocs(o => !o)}
          className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors"
        >
          <div className="flex items-center gap-2">
            <FileText size={16} className="text-sky-400" />
            <p className="text-sm font-semibold text-[hsl(var(--foreground))]">Documents Needed to Claim</p>
          </div>
          {showDocs ? <ChevronUp size={16} className="text-[hsl(var(--muted-foreground))]" /> : <ChevronDown size={16} className="text-[hsl(var(--muted-foreground))]" />}
        </button>
        {showDocs && (
          <div className="px-4 pb-4 border-t border-[hsl(var(--border))]">
            <div className="space-y-3 mt-3">
              {claimDocuments.map((d, i) => (
                <div key={i}>
                  <p className="text-xs font-semibold text-sky-400">{d.situation}</p>
                  <p className="text-xs text-[hsl(var(--foreground))] mt-0.5">{d.docs}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Key Exclusions */}
      <div className="rounded-xl border border-amber-500/30 bg-amber-500/8 overflow-hidden">
        <button
          onClick={() => setShowExclusions(o => !o)}
          className="w-full flex items-center justify-between p-4 text-left hover:bg-amber-500/5 transition-colors"
        >
          <div className="flex items-center gap-2">
            <AlertTriangle size={16} className="text-amber-400" />
            <p className="text-sm font-semibold text-amber-300">Key Exclusions</p>
          </div>
          {showExclusions ? <ChevronUp size={16} className="text-amber-400" /> : <ChevronDown size={16} className="text-amber-400" />}
        </button>
        {showExclusions && (
          <div className="px-4 pb-4 border-t border-amber-500/20">
            <ul className="space-y-2 mt-3">
              {keyExclusions.map((e, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-[hsl(var(--foreground))]">
                  <AlertTriangle size={12} className="text-amber-400 mt-0.5 shrink-0" />
                  {e}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Golden Rule */}
      <div className="bg-green-500/10 border border-green-500/25 rounded-xl p-4 flex items-start gap-3">
        <CheckCircle2 size={18} className="text-green-400 shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-semibold text-green-300">Golden Rule</p>
          <p className="text-xs text-[hsl(var(--foreground))] mt-1 leading-relaxed">
            For any emergency, call <strong className="text-green-300">+39 02.58.24.00.70</strong> first — before making your own arrangements. Costs you arrange yourself without prior authorisation may not be reimbursed.
          </p>
        </div>
      </div>
    </div>
  )
}
