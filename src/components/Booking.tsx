import { useState } from "react"
import { CheckCircle2, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { SectionHeading } from "@/components/SectionHeading"
import { ARTIST } from "@/lib/data"
import { useDemo } from "@/lib/demo-store"
import { cn } from "@/lib/utils"

const EVENT_TYPES = ["Corporate event", "Comedy club", "Festival", "Private function", "MC / Hosting", "Other"]
const BUDGETS = ["Under R15 000", "R15 000 – R30 000", "R30 000 – R60 000", "R60 000+", "Let's discuss"]

const selectClass =
  "flex h-11 w-full appearance-none rounded-xl border border-input bg-background/60 px-4 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"

export function Booking() {
  const { addEnquiry } = useDemo()
  const [reference, setReference] = useState<string | null>(null)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const ref = addEnquiry({
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      eventType: String(fd.get("eventType") ?? ""),
      city: String(fd.get("city") ?? ""),
      preferredDate: String(fd.get("preferredDate") ?? ""),
      budget: String(fd.get("budget") ?? ""),
      message: String(fd.get("message") ?? ""),
    })
    setReference(ref)
    e.currentTarget.reset()
  }

  return (
    <section id="book" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-1/3 -z-10 h-[400px] bg-primary/10 blur-[160px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading
              eyebrow="Bookings"
              title={<>Book {ARTIST.name} for <span className="text-gradient">your next event</span>.</>}
              description="Private events, festival stages, brand activations and live appearances. Tell me what you're planning and we'll shape the right experience."
            />

            <div className="mt-10 space-y-4">
              {[
                { icon: Mail, label: ARTIST.email, href: `mailto:${ARTIST.email}` },
                { icon: Phone, label: ARTIST.phone, href: `tel:${ARTIST.phone.replace(/\s/g, "")}` },
                { icon: MapPin, label: ARTIST.base },
              ].map(({ icon: Icon, label, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border bg-card">
                    <Icon className="h-4 w-4 text-primary" />
                  </span>
                  {href ? (
                    <a href={href} className="text-sm font-medium hover:text-primary">{label}</a>
                  ) : (
                    <span className="text-sm font-medium">{label}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">Follow</p>
              <div className="flex flex-wrap gap-2">
                {ARTIST.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold transition hover:border-primary/50 hover:text-primary"
                  >
                    {s.label === "YouTube" ? <Youtube className="h-3.5 w-3.5" /> : <Instagram className="h-3.5 w-3.5" />}
                    {s.handle}
                  </a>
                ))}
              </div>
            </div>
          </div>

         <Card className="rounded-3xl border-foreground/10 bg-gradient-to-b from-foreground/[0.05] to-transparent p-6 sm:p-8">
            {reference ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-emerald-400/15">
                  <CheckCircle2 className="h-8 w-8 text-emerald-400" />
                </span>
                <h3 className="mt-6 text-2xl">Enquiry received</h3>
                <p className="mt-3 max-w-sm text-sm text-muted-foreground">
                  Thanks! Your reference is <span className="font-mono font-bold text-foreground">{reference}</span>.
                  This is a demo — nothing was sent, and this entry will vanish on refresh.
                </p>
                <Button variant="secondary" className="mt-8" onClick={() => setReference(null)}>
                  Send another enquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="name">Your name</Label>
                    <Input id="name" name="name" required placeholder="Thandi Nkosi" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" required placeholder="you@company.co.za" />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="eventType">Event type</Label>
                    <select id="eventType" name="eventType" className={selectClass} defaultValue={EVENT_TYPES[0]}>
                      {EVENT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input id="city" name="city" required placeholder="Cape Town" />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="preferredDate">Preferred date</Label>
                    <Input id="preferredDate" name="preferredDate" type="date" className="[color-scheme:dark]" />
                  </div>
                  <div>
                    <Label htmlFor="budget">Budget</Label>
                    <select id="budget" name="budget" className={selectClass} defaultValue={BUDGETS[1]}>
                      {BUDGETS.map((b) => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Tell me about the event</Label>
                  <Textarea id="message" name="message" required placeholder="Audience size, vibe, venue, anything else..." />
                </div>

                <Button type="submit" variant="gradient" size="lg" className="w-full">
                  Send enquiry
                </Button>

                <p className="text-center text-xs leading-relaxed text-muted-foreground">
                  Demo mode — submissions stay in memory only. <br className="hidden sm:block" />
                  A deposit payment step (PayFast / Yoco) connects here in phase 2.
                </p>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  )
}