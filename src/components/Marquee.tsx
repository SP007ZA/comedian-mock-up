const ITEMS = [
  "Singer & comedian",
  "Comedy from Lesotho",
  "Just for laughs",
  "Festival ready",
  "Private events",
  "Now touring",
  "Bookings open",
]

export function Marquee() {
  const row = (
    <div className="flex shrink-0 items-center gap-10 pr-10">
      {ITEMS.map((item, i) => (
        <span key={i} className="flex items-center gap-10 text-sm font-black uppercase tracking-[0.25em]">
          {item}
          <span className="text-base">★</span>
        </span>
      ))}
    </div>
  )

  return (
    <div className="relative -mx-2 -rotate-1 overflow-hidden border-y border-black/10 bg-gradient-to-r from-primary to-secondary py-4">
      <div className="flex w-max animate-marquee text-[#1B1407]">
        {row}
        {row}
      </div>
    </div>
  )
}