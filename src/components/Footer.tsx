import { ArrowUp } from "lucide-react"
import { ARTIST } from "@/lib/data"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-primary via-secondary to-accent text-sm font-black text-white">
                MM
              </span>
              <span className="text-sm font-bold uppercase tracking-[0.2em]">{ARTIST.name}</span>
            </div>
            <p className="mt-5 max-w-sm text-sm text-muted-foreground">
              {ARTIST.tagline} Available for private events, festivals, corporate activations and live stage performances across South Africa and beyond.
            </p>
            <a href={`mailto:${ARTIST.email}`} className="mt-5 inline-block text-sm font-semibold text-primary hover:underline">
              {ARTIST.email}
            </a>
          </div>

          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">Explore</p>
            <ul className="space-y-2.5 text-sm">
              {[["Shows", "#shows"], ["About", "#about"], ["Gallery", "#gallery"], ["Book", "#book"]].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="text-muted-foreground transition hover:text-foreground">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">Social</p>
            <ul className="space-y-2.5 text-sm">
              {ARTIST.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer" className="text-muted-foreground transition hover:text-foreground">
                    {s.label} · {s.handle}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {ARTIST.name}. All rights reserved.
            <span className="mx-2 text-border">|</span>
            <span className="text-primary">Mockup build — all data is placeholder and resets on refresh.</span>
          </p>
          <a href="#top" className="flex items-center gap-2 text-xs font-semibold text-muted-foreground transition hover:text-foreground">
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}