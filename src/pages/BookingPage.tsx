import { useState } from 'react'
import {
  Anchor, User, BedDouble, CreditCard, ChevronDown, ChevronUp,
  CheckCircle2, Info, AlertTriangle, Zap, FileText, Star
} from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  bookingInfo, passengers, shipInfo, cabinInfo,
  paymentBreakdown, fantasticaInclusions, onboardPracticalInfo, passengerRights,
} from '@/data/booking'

function Section({ title, icon: Icon, color, children }: {
  title: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: React.ComponentType<any>
  color: string
  children: React.ReactNode
}) {
  return (
    <div>
      <h2 className={cn('text-sm font-semibold uppercase tracking-wide mb-3 flex items-center gap-2', color)}>
        <Icon size={15} />
        {title}
      </h2>
      {children}
    </div>
  )
}

function PracticalCard({ item }: { item: typeof onboardPracticalInfo[0] }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between p-3.5 text-left hover:bg-white/5 transition-colors"
      >
        <div className="flex items-center gap-2.5">
          <span className="text-lg">{item.icon}</span>
          <p className="text-sm font-semibold text-[hsl(var(--foreground))]">{item.title}</p>
        </div>
        {open
          ? <ChevronUp size={15} className="text-[hsl(var(--muted-foreground))] shrink-0" />
          : <ChevronDown size={15} className="text-[hsl(var(--muted-foreground))] shrink-0" />}
      </button>
      {open && (
        <div className="px-4 pb-4 border-t border-[hsl(var(--border))]">
          <ul className="space-y-1.5 mt-3">
            {item.details.map((d, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-[hsl(var(--foreground))]">
                <Info size={11} className="text-sky-400 mt-0.5 shrink-0" />
                {d}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export function BookingPage() {
  const [showRights, setShowRights] = useState(false)

  return (
    <div className="p-4 md:p-6 space-y-6 max-w-2xl mx-auto pb-24 md:pb-6">
      {/* Header */}
      <div className="flex items-center gap-2">
        <Anchor size={20} className="text-sky-400" />
        <h1 className="text-xl font-bold text-[hsl(var(--foreground))]">My Booking</h1>
      </div>

      {/* Booking reference banner */}
      <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <CheckCircle2 size={16} className="text-emerald-400" />
          <span className="text-sm font-bold text-emerald-300">Confirmed & Fully Paid</span>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-2">
          <div>
            <p className="text-[10px] text-[hsl(var(--muted-foreground))]">Booking Number</p>
            <p className="text-base font-bold text-[hsl(var(--foreground))]">{bookingInfo.bookingNumber}</p>
          </div>
          <div>
            <p className="text-[10px] text-[hsl(var(--muted-foreground))]">Ticket Number</p>
            <p className="text-base font-bold text-[hsl(var(--foreground))]">{bookingInfo.ticketNumber}</p>
          </div>
          <div>
            <p className="text-[10px] text-[hsl(var(--muted-foreground))]">Total Paid</p>
            <p className="text-base font-bold text-emerald-400">€{bookingInfo.totalPaid.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-[10px] text-[hsl(var(--muted-foreground))]">Balance Due</p>
            <p className="text-base font-bold text-emerald-400">€{bookingInfo.balance.toFixed(2)}</p>
          </div>
        </div>
      </div>

      {/* Passengers */}
      <Section title="Passengers" icon={User} color="text-sky-400">
        <div className="space-y-2">
          {passengers.map((p, i) => (
            <div key={i} className="flex items-center gap-3 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-3">
              <div className="w-8 h-8 rounded-full bg-sky-500/20 flex items-center justify-center shrink-0">
                <User size={15} className="text-sky-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[hsl(var(--foreground))]">{p.name}</p>
                <p className="text-xs text-[hsl(var(--muted-foreground))]">DOB: {p.dob}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Cruise Details */}
      <Section title="Cruise Details" icon={Anchor} color="text-sky-400">
        <div className="rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-4 space-y-3">
          <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
            {[
              { label: 'Ship', value: shipInfo.name },
              { label: 'Itinerary', value: shipInfo.itinerary },
              { label: 'Embarkation', value: `${shipInfo.embarkDate} · ${shipInfo.embarkPort}` },
              { label: 'Check-in Opens', value: shipInfo.checkInOpens },
              { label: 'Ship Departure', value: shipInfo.departure },
              { label: 'Disembarkation', value: `${shipInfo.disembarkDate} · ${shipInfo.disembarkPort}` },
              { label: 'Duration', value: shipInfo.duration },
              { label: 'Tariff', value: bookingInfo.tariffType },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-[10px] text-[hsl(var(--muted-foreground))]">{label}</p>
                <p className="text-xs font-medium text-[hsl(var(--foreground))]">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Cabin Details */}
      <Section title="Cabin" icon={BedDouble} color="text-indigo-400">
        <div className="rounded-xl border border-indigo-500/30 bg-indigo-500/8 p-4">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-2xl font-bold text-[hsl(var(--foreground))]">Cabin {cabinInfo.number}</p>
              <p className="text-xs text-[hsl(var(--muted-foreground))]">Deck {cabinInfo.deck}</p>
            </div>
            <div className="text-right">
              <span className="inline-flex items-center gap-1 bg-amber-500/20 border border-amber-500/30 rounded-lg px-2 py-1">
                <Star size={11} className="text-amber-400" />
                <span className="text-xs font-bold text-amber-300">{cabinInfo.experience}</span>
              </span>
            </div>
          </div>
          <p className="text-xs text-sky-300 mb-3 font-medium">{cabinInfo.category}</p>
          <div className="grid grid-cols-3 gap-2 mb-3">
            {[
              { label: 'Cabin', value: cabinInfo.cabinSurface },
              { label: 'Balcony', value: cabinInfo.balconySurface },
              { label: 'Bathroom', value: cabinInfo.bathroomSurface },
            ].map(({ label, value }) => (
              <div key={label} className="bg-white/8 rounded-lg p-2 text-center">
                <p className="text-sm font-bold text-[hsl(var(--foreground))]">{value}</p>
                <p className="text-[10px] text-[hsl(var(--muted-foreground))]">{label}</p>
              </div>
            ))}
          </div>
          <div className="space-y-1.5">
            {[
              { label: 'Door width', value: cabinInfo.doorWidth },
              { label: 'Bathroom', value: cabinInfo.bathroomType },
              { label: 'Extra bed', value: cabinInfo.extraBed },
              { label: 'Restaurant sitting', value: cabinInfo.restaurant },
            ].map(({ label, value }) => (
              <div key={label} className="flex justify-between text-xs">
                <span className="text-[hsl(var(--muted-foreground))]">{label}</span>
                <span className="text-[hsl(var(--foreground))] font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FANTASTICA Inclusions */}
      <Section title="FANTASTICA — What's Included" icon={Star} color="text-amber-400">
        <div className="space-y-2">
          {fantasticaInclusions.map((group) => (
            <div key={group.category} className="rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-3.5">
              <p className="text-xs font-bold text-amber-400 uppercase tracking-wide mb-2">{group.category}</p>
              <ul className="space-y-1">
                {group.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-[hsl(var(--foreground))]">
                    <CheckCircle2 size={11} className="text-emerald-400 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Payment Breakdown */}
      <Section title="Payment Breakdown" icon={CreditCard} color="text-sky-400">
        <div className="rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] overflow-hidden">
          {paymentBreakdown.map((row, i) => (
            <div key={i} className={cn(
              'flex items-center justify-between px-4 py-3 text-sm',
              i < paymentBreakdown.length - 1 ? 'border-b border-[hsl(var(--border))]' : ''
            )}>
              <span className="text-[hsl(var(--muted-foreground))] text-xs">{row.label}</span>
              <span className="font-semibold text-[hsl(var(--foreground))]">
                {row.amount === 0 ? 'Included' : `€${row.amount.toFixed(2)}`}
              </span>
            </div>
          ))}
          <div className="flex items-center justify-between px-4 py-3 bg-sky-500/10 border-t border-sky-500/25">
            <span className="text-sm font-bold text-[hsl(var(--foreground))]">Total Paid</span>
            <span className="text-sm font-bold text-emerald-400">€{bookingInfo.totalPaid.toFixed(2)}</span>
          </div>
        </div>
      </Section>

      {/* Practical Onboard Info */}
      <Section title="Onboard Practical Info" icon={Zap} color="text-sky-400">
        <p className="text-xs text-[hsl(var(--muted-foreground))] mb-3">Tap each topic to expand.</p>
        <div className="space-y-2">
          {onboardPracticalInfo.map((item) => (
            <PracticalCard key={item.title} item={item} />
          ))}
        </div>
      </Section>

      {/* EU Passenger Rights */}
      <div className="rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] overflow-hidden">
        <button
          onClick={() => setShowRights(o => !o)}
          className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors"
        >
          <div className="flex items-center gap-2">
            <FileText size={15} className="text-sky-400" />
            <p className="text-sm font-semibold text-[hsl(var(--foreground))]">EU Passenger Rights</p>
          </div>
          {showRights
            ? <ChevronUp size={15} className="text-[hsl(var(--muted-foreground))]" />
            : <ChevronDown size={15} className="text-[hsl(var(--muted-foreground))]" />}
        </button>
        {showRights && (
          <div className="px-4 pb-4 border-t border-[hsl(var(--border))]">
            <ul className="space-y-2 mt-3">
              {passengerRights.map((r, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-[hsl(var(--foreground))]">
                  <CheckCircle2 size={11} className="text-sky-400 mt-0.5 shrink-0" />
                  {r}
                </li>
              ))}
            </ul>
            <div className="mt-3 p-2 rounded-lg bg-amber-500/10 border border-amber-500/25 flex items-start gap-2">
              <AlertTriangle size={12} className="text-amber-400 mt-0.5 shrink-0" />
              <p className="text-xs text-amber-300">Covered under EU Directive 2015/2302 (Package Travel)</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
