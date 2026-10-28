export type EventStatus = "on-sale" | "selling-fast" | "sold-out"

export interface ShowEvent {
  id: string
  title: string
  city: string
  venue: string
  date: string // YYYY-MM-DD
  price: string
  status: EventStatus
  ticketUrl?: string
}

export interface Enquiry {
  id: string
  name: string
  email: string
  eventType: string
  city: string
  preferredDate: string
  budget: string
  message: string
  createdAt: string
}

export interface Credit { year: string; title: string; detail: string }
export interface Photo { id: string; src: string; caption: string; span?: "tall" | "wide" }
export interface Video { id: string; youtubeId: string; title: string; duration: string }

export const ARTIST = {
  name: "Lerato Mokoena",
  nickname: "The Last Laugh",
  tagline: "Stand-up. Storytelling. Slight chaos.",
  email: "bookings@leratomokoena.co.za",
  phone: "+27 (0) 82 000 0000",
  base: "Johannesburg, South Africa",
  socials: [
    { label: "Instagram", handle: "@leratolaughs", href: "https://instagram.com" },
    { label: "TikTok", handle: "@leratolaughs", href: "https://tiktok.com" },
    { label: "YouTube", handle: "Lerato Mokoena", href: "https://youtube.com" },
    { label: "X", handle: "@leratolaughs", href: "https://x.com" },
  ],
}

export const INITIAL_BIO = `Lerato Mokoena is one of South Africa's fastest-rising stand-up comedians — a storyteller with a sharp tongue, a warm heart and an uncanny ability to find the absurd in the everyday.

Since her first open mic in 2019, she has sold out shows in Johannesburg, Cape Town and Durban, toured with two of the country's biggest comedy brands, and built a following of over 200,000 people who tune in for her unfiltered take on family, dating and the economy.

Her material is personal, political and occasionally inappropriate for aunties. She would like to apologise in advance.`

export const STATS = [
  { value: "120+", label: "Live shows" },
  { value: "3", label: "Countries toured" },
  { value: "200k", label: "Online following" },
  { value: "4.9", label: "Avg. audience rating" },
]

export const INITIAL_EVENTS: ShowEvent[] = [
  {
    id: "e1",
    title: "Lerato Live: Unfiltered",
    city: "Johannesburg",
    venue: "The Joburg Theatre",
    date: "2026-11-14",
    price: "R280",
    status: "selling-fast",
  },
  {
    id: "e2",
    title: "The Last Laugh Tour",
    city: "Cape Town",
    venue: "Artscape Opera House",
    date: "2026-11-28",
    price: "R320",
    status: "on-sale",
  },
  {
    id: "e3",
    title: "Comedy Night at the Basement",
    city: "Durban",
    venue: "The Basement Theatre",
    date: "2026-12-05",
    price: "R180",
    status: "sold-out",
  },
  {
    id: "e4",
    title: "New Year, Same Trauma",
    city: "Pretoria",
    venue: "Atterbury Theatre",
    date: "2026-12-31",
    price: "R450",
    status: "on-sale",
  },
  {
    id: "e5",
    title: "Roast of the Year",
    city: "Gqeberha",
    venue: "The Boardwalk Amphitheatre",
    date: "2027-01-24",
    price: "R240",
    status: "on-sale",
  },
  {
    id: "e6",
    title: "Lerato Live: Unfiltered (Encore)",
    city: "Johannesburg",
    venue: "The Joburg Theatre",
    date: "2027-02-13",
    price: "R280",
    status: "selling-fast",
  },
]

export const CREDITS: Credit[] = [
  { year: "2026", title: "The Last Laugh Tour", detail: "National tour — 18 cities, 3 sold-out arena nights" },
  { year: "2025", title: "Comedy Central Roast Battle", detail: "Featured comedian, season 4" },
  { year: "2025", title: "Savanna Comedy Showcase", detail: "Headline act, Cape Town & Durban" },
  { year: "2024", title: "Edinburgh Fringe Festival", detail: "Sold-out 21-night run" },
  { year: "2023", title: "Stand-Up SA National Comedy Awards", detail: "Winner — Best Newcomer" },
]

export const PHOTOS: Photo[] = [
  { id: "p1", src: "https://picsum.photos/seed/lerato-stage/900/1200", caption: "Joburg Theatre, sold out night", span: "tall" },
  { id: "p2", src: "https://picsum.photos/seed/lerato-mic/900/700", caption: "The basement, Cape Town" },
  { id: "p3", src: "https://picsum.photos/seed/lerato-crowd/900/700", caption: "Crowd work gone right" },
  { id: "p4", src: "https://picsum.photos/seed/lerato-portrait/900/1200", caption: "Press portrait, 2026", span: "tall" },
  { id: "p5", src: "https://picsum.photos/seed/lerato-backstage/1200/700", caption: "Backstage before the encore", span: "wide" },
  { id: "p6", src: "https://picsum.photos/seed/lerato-laugh/900/700", caption: "Edinburgh Fringe, night 12" },
]

export const VIDEOS: Video[] = [
  { id: "v1", youtubeId: "M7lc1UVf-VE", title: "Lerato Live — Official Trailer", duration: "2:14" },
  { id: "v2", youtubeId: "jNQXAC9IVRw", title: "The First Joke I Ever Told", duration: "4:02" },
  { id: "v3", youtubeId: "aqz-KE-bpKQ", title: "Roast Battle Highlights", duration: "6:38" },
]