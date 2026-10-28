import { CalendarDays, MapPin, Ticket } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/SectionHeading"
import { useDemo } from "@/lib/demo-store"
import { formatEventDate } from "@/lib/utils"
import type { EventStatus } from "@/lib/data"

const STATUS: Record<EventStatus, { label: string; variant: "secondary" | "accent" | "outline" }> = {
  "on-sale": { label: "On sale", variant: "secondary" },
  "selling-fast": { label: "Selling fast", variant: "accent" },
  "sold-out": { label: "Sold out", variant: "outline" },
}

export function Events() {
  const { events } = useDemo()
  const sorted = [...events].sort((a, b) => a.date.localeCompare(b.date))

  return (
    <section id="shows" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Upcoming shows"
            title={<>Catch me <span className="text-gradient">live</span>.</>}
            description="Tour dates, theatre nights and the occasional surprise pop-up. Ticket links go live as venues release them."
          />
          <Button asChild variant="secondary" size="lg" className="shrink-0">
            <a href="#book">
              <Ticket /> Request a city
            </a>
          </Button>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {sorted.map((e) => {
            const d = formatEventDate(e.date)
            const status = STATUS[e.status]
            const soldOut = e.status === "sold-out"

            return (
              <article
                key={e.id}
               className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition hover:border-foreground/20 hover:bg-foreground/[0.03]"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/0 blur-3xl transition-all duration-500 group-hover:bg-primary/20" />

                <div className="flex items-start gap-5">
                  <div className="grid w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-primary to-secondary py-3 text-white">
                    <span className="text-2xl font-black leading-none">{d.day}</span>
                    <span className="mt-1 text-[10px] font-bold tracking-widest">{d.month}</span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-xl leading-snug">{e.title}</h3>
                      <Badge variant={status.variant} className="shrink-0">{status.label}</Badge>
                    </div>

                    <div className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                      <p className="flex items-center gap-2">
                        <MapPin className="h-3.5 w-3.5 shrink-0" /> {e.venue}, {e.city}
                      </p>
                      <p className="flex items-center gap-2">
                        <CalendarDays className="h-3.5 w-3.5 shrink-0" /> {d.weekday}, {d.full}
                      </p>
                    </div>

                    <div className="mt-5 flex items-center justify-between gap-3">
                      <span className="text-sm font-bold">{e.price} <span className="font-normal text-muted-foreground">per ticket</span></span>
                      <Button size="sm" variant={soldOut ? "outline" : "gradient"} disabled={soldOut}>
                        {soldOut ? "Sold out" : "Get tickets"}
                      </Button>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {sorted.length === 0 && (
          <div className="mt-14 rounded-3xl border border-dashed border-border p-16 text-center">
            <p className="text-lg font-semibold">No shows announced yet</p>
            <p className="mt-2 text-sm text-muted-foreground">Check back soon — or book a private show.</p>
          </div>
        )}
      </div>
    </section>
  )
}