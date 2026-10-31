import { ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ARTIST, STATS } from "@/lib/data"
import masapoProfile from "@/assets/masapo_profile.jpg"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-32 sm:pt-40">
      {/* ambient blobs */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-primary/25 blur-[140px]" />
      <div className="pointer-events-none absolute -right-32 top-20 h-[420px] w-[420px] rounded-full bg-secondary/25 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-accent/20 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Badge variant="outline" className="mb-6 gap-2 border-foreground/15 bg-card/70 py-2 pl-2 pr-4 text-[11px] normal-case tracking-normal backdrop-blur">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-primary text-primary-foreground">
              <Star className="h-3 w-3 fill-current text-current" />
            </span>
            Now touring — live season 2026/27
          </Badge>

          <h1 className="text-5xl sm:text-6xl xl:text-[6.5rem]">
            A singer and comedian from Lesotho, <span className="text-gradient">bringing a fresh style of comedy to the world.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            {ARTIST.name} — just for laughs. Music, comedy and a perspective from Lesotho, shared with audiences everywhere.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" variant="gradient" className="rounded-full shadow-lg shadow-primary/20">
              <a href="#shows">
                See tour dates <ArrowRight />
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="rounded-full">
              <a href="#book">Book for your event</a>
            </Button>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="rounded-2xl border border-border/80 bg-card/60 p-4 backdrop-blur-sm">
                <dt className="text-2xl font-extrabold text-gradient">{s.value}</dt>
                <dd className="mt-1 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-foreground/15 bg-card shadow-[0_30px_80px_-35px_hsl(var(--primary)/0.5)]">
          <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-primary via-secondary to-accent opacity-70 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-card">
            <img
              src={masapoProfile}
              alt="Masapo Mpiti profile"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-white/65">Live in Bloemfontein</p>
              <p className="mt-1 text-2xl font-extrabold text-white">Two nights. Both unforgettable.</p>
            </div>
          </div>

          <div className="absolute -left-6 top-8 -rotate-6 rounded-2xl bg-accent px-4 py-3 text-accent-foreground shadow-xl">
            <p className="text-[10px] font-bold uppercase tracking-widest">Next show</p>
            <p className="text-sm font-extrabold">14 Nov · BFN</p>
          </div>

          <div className="absolute -right-4 bottom-24 rotate-6 rounded-2xl border border-foreground/15 bg-card/90 px-4 py-3 shadow-xl backdrop-blur">
            <p className="text-[10px] font-bold uppercase tracking-widest text-primary">★★★★★</p>
            <p className="text-xs font-semibold">“Best night out in years”</p>
          </div>
        </div>
      </div>
    </section>
  )
}