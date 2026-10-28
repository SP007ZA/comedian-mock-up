import { useState } from "react"
import { Lock, Plus, RotateCcw, Settings2, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { useDemo } from "@/lib/demo-store"
import { formatEventDate } from "@/lib/utils"

const selectClass =
  "flex h-11 w-full appearance-none rounded-xl border border-input bg-background/60 px-4 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"

export function AdminPanel() {
  const { isAdmin, login, logout, events, addEvent, removeEvent, bio, updateBio, enquiries, reset } = useDemo()
  const [open, setOpen] = useState(false)
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const [bioDraft, setBioDraft] = useState(bio)

  function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    if (login(password)) {
      setError(false)
      setPassword("")
      setBioDraft(bio)
    } else {
      setError(true)
    }
  }

  function handleAddEvent(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    addEvent({
      title: String(fd.get("title")),
      city: String(fd.get("city")),
      venue: String(fd.get("venue")),
      date: String(fd.get("date")),
      price: String(fd.get("price")),
      status: fd.get("status") as never,
    })
    e.currentTarget.reset()
  }

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        variant="gradient"
        className="fixed bottom-6 right-6 z-50 rounded-full shadow-2xl shadow-primary/30"
      >
        <Settings2 /> Admin demo
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Admin panel</DialogTitle>
            <DialogDescription>
              Demo only — every change lives in memory and resets on refresh.
            </DialogDescription>
          </DialogHeader>

          {!isAdmin ? (
            <form onSubmit={handleLogin} className="mt-2 space-y-4">
              <div className="flex items-center gap-3 rounded-2xl border border-border bg-white/[0.03] p-4">
                <Lock className="h-5 w-5 shrink-0 text-primary" />
                <p className="text-xs text-muted-foreground">
                  Password for this demo is <span className="font-mono font-bold text-foreground">demo123</span>.
                  In production this becomes a real auth flow against PostgreSQL.
                </p>
              </div>
              <div>
                <Label htmlFor="pw">Password</Label>
                <Input
                  id="pw"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  autoFocus
                />
                {error && <p className="mt-2 text-xs text-destructive">Incorrect password. Try demo123.</p>}
              </div>
              <Button type="submit" variant="gradient" className="w-full">Sign in</Button>
            </form>
          ) : (
            <Tabs defaultValue="events" className="mt-2">
              <TabsList className="w-full justify-start overflow-x-auto">
                <TabsTrigger value="events">Events ({events.length})</TabsTrigger>
                <TabsTrigger value="enquiries">Enquiries ({enquiries.length})</TabsTrigger>
                <TabsTrigger value="content">Content</TabsTrigger>
              </TabsList>

              <TabsContent value="events" className="space-y-5">
                <form onSubmit={handleAddEvent} className="space-y-3 rounded-2xl border border-border p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Add a show</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <Input name="title" placeholder="Show title" required />
                    <Input name="city" placeholder="City" required />
                    <Input name="venue" placeholder="Venue" required />
                    <Input name="date" type="date" required className="[color-scheme:dark]" />
                    <Input name="price" placeholder="Price (e.g. R250)" required />
                    <select name="status" className={selectClass} defaultValue="on-sale">
                      <option value="on-sale">On sale</option>
                      <option value="selling-fast">Selling fast</option>
                      <option value="sold-out">Sold out</option>
                    </select>
                  </div>
                  <Button type="submit" size="sm" variant="default" className="w-full">
                    <Plus /> Add event
                  </Button>
                </form>

                <div className="max-h-64 space-y-2 overflow-y-auto pr-1">
                  {events.map((e) => {
                    const d = formatEventDate(e.date)
                    return (
                      <div key={e.id} className="flex items-center gap-3 rounded-xl border border-border px-3 py-2.5">
                        <span className="w-12 shrink-0 text-xs font-bold text-muted-foreground">{d.day} {d.month}</span>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-semibold">{e.title}</p>
                          <p className="truncate text-xs text-muted-foreground">{e.venue}, {e.city}</p>
                        </div>
                        <Button size="icon" variant="ghost" onClick={() => removeEvent(e.id)} aria-label="Delete event">
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                    )
                  })}
                </div>
              </TabsContent>

              <TabsContent value="enquiries">
                {enquiries.length === 0 ? (
                  <p className="rounded-2xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
                    No enquiries yet. Submit the booking form to see one appear here.
                  </p>
                ) : (
                  <div className="max-h-80 space-y-2 overflow-y-auto pr-1">
                    {enquiries.map((q) => (
                      <div key={q.id} className="rounded-xl border border-border p-3">
                        <div className="flex items-center justify-between gap-2">
                          <p className="text-sm font-semibold">{q.name}</p>
                          <span className="font-mono text-[10px] text-muted-foreground">{q.id}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">{q.email} · {q.eventType} · {q.city}</p>
                        <p className="mt-1.5 line-clamp-2 text-xs">{q.message}</p>
                      </div>
                    ))}
                  </div>
                )}
              </TabsContent>

              <TabsContent value="content" className="space-y-3">
                <Label htmlFor="bio">Biography</Label>
                <Textarea
                  id="bio"
                  value={bioDraft}
                  onChange={(e) => setBioDraft(e.target.value)}
                  className="min-h-[200px]"
                />
                <div className="flex gap-2">
                  <Button size="sm" variant="gradient" onClick={() => updateBio(bioDraft)}>Save changes</Button>
                  <Button size="sm" variant="ghost" onClick={() => setBioDraft(bio)}>Revert</Button>
                </div>
              </TabsContent>

              <div className="flex items-center gap-3 rounded-2xl border border-border bg-foreground/[0.03] p-4">
                <Button size="sm" variant="ghost" onClick={reset}>
                  <RotateCcw /> Reset demo data
                </Button>
                <Button size="sm" variant="outline" onClick={() => { logout(); setOpen(false) }}>
                  Sign out
                </Button>
              </div>
            </Tabs>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}