import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { SectionHeading } from "@/components/SectionHeading"
import { ARTIST, CREDITS } from "@/lib/data"
import { useDemo } from "@/lib/demo-store"
import masapoWithCrowd from "@/assets/masapo_with_crowd.jpg"

export function About() {
  const { bio } = useDemo()

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src={masapoWithCrowd}
                alt="Masapo Mpiti performing with the crowd"
                className="col-span-2 aspect-[7/5] w-full rounded-3xl border border-border object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=600&q=80"
                alt="Masapo Mpiti on stage"
                className="aspect-[6/7] w-full rounded-3xl border border-border object-cover"
              />
              <div className="flex aspect-[6/7] w-full flex-col justify-between rounded-3xl border border-border bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 p-6">
                <Badge variant="accent">Since 2019</Badge>
                <div>
                  <p className="text-3xl font-extrabold leading-none text-gradient">200k+</p>
                  <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">
                    People feeling the energy online
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="The artist"
              title={<>Meet {ARTIST.name}. <span className="text-gradient">Singer. Comedian. Lesotho to the world.</span></>}
            />
            <div className="mt-7 space-y-4 text-base leading-relaxed text-muted-foreground">
              {bio.split("\n\n").map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {["Live performance", "MC / Host", "Private events", "Brand activations", "Festivals"].map((t) => (
                <Badge key={t} variant="muted" className="normal-case tracking-normal">{t}</Badge>
              ))}
            </div>

            <Separator className="my-10" />

            <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-primary">
              Performance history
            </p>
            <div className="space-y-1">
              {CREDITS.map((c) => (
                <div
                  key={c.title}
                  className="group flex items-start gap-5 rounded-2xl px-3 py-4 transition hover:bg-white/[0.03]"
                >
                  <span className="w-14 shrink-0 text-sm font-bold text-muted-foreground">{c.year}</span>
                  <div>
                    <p className="font-semibold">{c.title}</p>
                    <p className="text-sm text-muted-foreground">{c.detail}</p>
                  </div>
                </div>
              ))}
            </div>

           <Card className="mt-8 rounded-2xl border-foreground/10 bg-foreground/[0.03] p-5">
              <p className="text-sm text-muted-foreground">
                Based in <span className="font-semibold text-foreground">{ARTIST.base}</span> · Available for
                national and international bookings.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}