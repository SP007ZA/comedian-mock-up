import { useEffect, useState } from "react"
import { Menu, Moon, Sun, Ticket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ARTIST } from "@/lib/data"
import { useTheme } from "@/lib/theme-store"
import { cn } from "@/lib/utils"

const LINKS = [
  { href: "#shows", label: "Shows" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#book", label: "Book" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-xl" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-primary via-secondary to-accent text-sm font-black text-[#1B1407]">
            LM
          </span>
          <span className="hidden text-sm font-bold uppercase tracking-[0.2em] sm:block">
            {ARTIST.name}
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition hover:bg-foreground/5 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <Sun /> : <Moon />}
          </Button>

          <Button asChild variant="gradient" size="sm" className="hidden sm:inline-flex">
            <a href="#book">
              <Ticket /> Book me
            </a>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="secondary" size="icon" className="md:hidden" aria-label="Open menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="mt-10 flex flex-col gap-2">
                {LINKS.map((l) => (
                  <SheetClose asChild key={l.href}>
                    <a href={l.href} className="rounded-2xl px-4 py-4 text-2xl font-bold hover:bg-foreground/5">
                      {l.label}
                    </a>
                  </SheetClose>
                ))}
              </div>
              <SheetClose asChild>
                <Button asChild variant="gradient" size="lg" className="mt-auto w-full">
                  <a href="#book">Book me</a>
                </Button>
              </SheetClose>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}