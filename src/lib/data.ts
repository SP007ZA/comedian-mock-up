import masapoProfile from "@/assets/masapo_profile.jpg"
import masapoWithCrowd from "@/assets/masapo_with_crowd.jpg"
import masapoWithCrowd2 from "@/assets/masapo_with_crowd-2.jpg"
import masapoWithCrowd3 from "@/assets/masapo_with_crowd-3.jpg"
import masapoWithCrowd4 from "@/assets/masapo_with_crowd-4.jpg"
import masapoWithCrowd5 from "@/assets/masapo_with_crowd-5.jpg"

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
export interface Video { id: string; youtubeId: string; title: string; duration?: string; startSeconds?: number }

export const ARTIST = {
  name: "Masapo Mpiti",
  nickname: "Masa",
  tagline: "Singer. Comedian. From Lesotho to the world — just for laughs.",
  email: "bookings@masapompiti.com",
  phone: "+27 (0) 82 000 0000",
  base: "Bloemfontein, South Africa",
  socials: [
    { label: "Instagram", handle: "@masapompiti", href: "https://www.instagram.com/masapompiti" },
    { label: "Facebook", handle: "Masapo Mpiti", href: "https://www.facebook.com/p/Masapo-mpiti-100064670953357/" },
    { label: "TikTok", handle: "@masapompiti", href: "https://www.tiktok.com/@masapompiti" },
    { label: "YouTube", handle: "Masapo Mpiti", href: "https://www.youtube.com/@masapompiti" },
    { label: "X", handle: "@masapompiti", href: "https://x.com/masapompiti" },
  ],
}

export const INITIAL_BIO = `Masapo Mpiti is a singer and comedian from Lesotho, bringing a distinctive style of comedy to audiences around the world. Their work brings music, humor and personality together in performances made to connect with people.

From the stage to the screen, Masapo Mpiti shares a fresh perspective shaped by their roots in Lesotho. The mission is simple: introduce this style of comedy to the world — just for laughs.`

export const STATS = [
  { value: "120+", label: "Live bookings" },
  { value: "8", label: "Cities reached" },
  { value: "200k", label: "Online reach" },
  { value: "4.9", label: "Audience rating" },
]

export const INITIAL_EVENTS: ShowEvent[] = [
  {
    id: "e1",
    title: "Masapo Mpiti Live",
    city: "Bloemfontein",
    venue: "Bloemfontein Theatre",
    date: "2026-11-14",
    price: "R280",
    status: "selling-fast",
  },
  {
    id: "e2",
    title: "After Dark Sessions",
    city: "Cape Town",
    venue: "Artscape Opera House",
    date: "2026-11-28",
    price: "R320",
    status: "on-sale",
  },
  {
    id: "e3",
    title: "Stage Presence Night",
    city: "Durban",
    venue: "The Basement Theatre",
    date: "2026-12-05",
    price: "R180",
    status: "sold-out",
  },
  {
    id: "e4",
    title: "New Energy",
    city: "Pretoria",
    venue: "Atterbury Theatre",
    date: "2026-12-31",
    price: "R450",
    status: "on-sale",
  },
  {
    id: "e5",
    title: "Main Stage Experience",
    city: "Gqeberha",
    venue: "The Boardwalk Amphitheatre",
    date: "2027-01-24",
    price: "R240",
    status: "on-sale",
  },
  {
    id: "e6",
    title: "Masapo Mpiti Live (Encore)",
    city: "Bloemfontein",
    venue: "Bloemfontein Theatre",
    date: "2027-02-13",
    price: "R280",
    status: "selling-fast",
  },
]

export const CREDITS: Credit[] = [
  { year: "2026", title: "Main Stage Tour", detail: "Headlined across 18 cities with sold-out live sets" },
  { year: "2025", title: "Summer Festival Circuit", detail: "Featured across premium cultural and music events" },
  { year: "2025", title: "Private Event Showcase", detail: "Booked for brand activations and elevated social experiences" },
  { year: "2024", title: "National Live Run", detail: "Packed the room in Bloemfontein, Cape Town and Durban" },
  { year: "2023", title: "Breakthrough Stage Presence", detail: "Recognised for standout live performances and audience connection" },
]

export const PHOTOS: Photo[] = [
  { id: "p1", src: masapoProfile, caption: "Masapo Mpiti — singer and comedian", span: "tall" },
  { id: "p2", src: masapoWithCrowd2, caption: "Masapo Mpiti performing live" },
  { id: "p3", src: masapoWithCrowd3, caption: "Masapo Mpiti with the audience" },
  { id: "p4", src: masapoWithCrowd4, caption: "Masapo Mpiti on stage", span: "tall" },
  { id: "p5", src: masapoWithCrowd5, caption: "Live performance moments", span: "wide" },
  { id: "p6", src: masapoWithCrowd, caption: "Masapo Mpiti connecting with the crowd" },
]

export const VIDEOS: Video[] = [
  { id: "v1", youtubeId: "DLzNySHc6qM", title: "Masapo Mpiti — Video 1", startSeconds: 168 },
  { id: "v2", youtubeId: "z74J4m2g1qo", title: "Masapo Mpiti — Video 2" },
  { id: "v3", youtubeId: "eKjxbm5LKaE", title: "Masapo Mpiti — Video 3" },
]