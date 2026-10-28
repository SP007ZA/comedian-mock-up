import { useState } from "react"
import { Play } from "lucide-react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SectionHeading } from "@/components/SectionHeading"
import { PHOTOS, VIDEOS, type Photo, type Video } from "@/lib/data"
import { cn } from "@/lib/utils"

function VideoCard({ video }: { video: Video }) {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="group overflow-hidden rounded-3xl border border-border bg-card">
      <div className="relative aspect-video bg-black">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="absolute inset-0 h-full w-full"
            aria-label={`Play ${video.title}`}
          >
            <img
              src={`https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`}
              alt={video.title}
              loading="lazy"
              className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-primary text-white shadow-xl shadow-primary/40 transition duration-300 group-hover:scale-110">
              <Play className="ml-0.5 h-6 w-6 fill-current" />
            </span>
          </button>
        )}
      </div>
      <div className="flex items-center justify-between gap-3 p-5">
        <p className="font-semibold">{video.title}</p>
        <span className="shrink-0 text-xs text-muted-foreground">{video.duration}</span>
      </div>
    </div>
  )
}

export function Gallery() {
  const [active, setActive] = useState<Photo | null>(null)

  return (
    <section id="gallery" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title={<>The <span className="text-gradient">visuals</span>.</>}
          description="Photos from the road, plus clips pulled straight from YouTube — because nobody wants to buffer through a punchline."
        />

        <Tabs defaultValue="photos" className="mt-12">
          <TabsList>
            <TabsTrigger value="photos">Photos</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
          </TabsList>

          <TabsContent value="photos">
            <div className="grid auto-rows-[170px] grid-cols-2 gap-4 md:grid-cols-4">
              {PHOTOS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActive(p)}
                  className={cn(
                    "group relative overflow-hidden rounded-2xl border border-border",
                    p.span === "tall" && "row-span-2",
                    p.span === "wide" && "col-span-2"
                  )}
                >
                  <img
                    src={p.src}
                    alt={p.caption}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition group-hover:opacity-100" />
                  <span className="absolute inset-x-0 bottom-0 p-4 text-left text-sm font-medium text-white opacity-0 transition group-hover:opacity-100">
                    {p.caption}
                  </span>
                </button>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="videos">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {VIDEOS.map((v) => (
                <VideoCard key={v.id} video={v} />
              ))}
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              Videos are embedded from YouTube (privacy-enhanced). The client uploads to their own channel —
              keeping hosting costs low and giving the content a second discovery channel.
            </p>
          </TabsContent>
        </Tabs>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-3xl border-0 bg-transparent p-0 shadow-none">
          <DialogTitle className="sr-only">{active?.caption ?? "Photo"}</DialogTitle>
          {active && (
            <img src={active.src} alt={active.caption} className="max-h-[80vh] w-full rounded-3xl object-contain" />
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}