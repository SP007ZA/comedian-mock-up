import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatEventDate(iso: string) {
  const d = new Date(`${iso}T00:00:00`)
  return {
    day: d.toLocaleDateString("en-ZA", { day: "2-digit" }),
    month: d.toLocaleDateString("en-ZA", { month: "short" }).toUpperCase(),
    weekday: d.toLocaleDateString("en-ZA", { weekday: "long" }),
    full: d.toLocaleDateString("en-ZA", { day: "numeric", month: "long", year: "numeric" }),
  }
}

export function makeRef() {
  return `LM-${Math.random().toString(36).slice(2, 7).toUpperCase()}`
}