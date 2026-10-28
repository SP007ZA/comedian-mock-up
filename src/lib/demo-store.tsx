import { createContext, useContext, useState, type ReactNode } from "react"
import { INITIAL_BIO, INITIAL_EVENTS, type Enquiry, type ShowEvent } from "./data"
import { makeRef } from "./utils"

interface DemoState {
  events: ShowEvent[]
  bio: string
  enquiries: Enquiry[]
  isAdmin: boolean
  addEvent: (e: Omit<ShowEvent, "id">) => void
  removeEvent: (id: string) => void
  updateBio: (bio: string) => void
  addEnquiry: (e: Omit<Enquiry, "id" | "createdAt">) => string
  login: (password: string) => boolean
  logout: () => void
  reset: () => void
}

const DemoContext = createContext<DemoState | null>(null)

export function DemoProvider({ children }: { children: ReactNode }) {
  const [events, setEvents] = useState<ShowEvent[]>(INITIAL_EVENTS)
  const [bio, setBio] = useState(INITIAL_BIO)
  const [enquiries, setEnquiries] = useState<Enquiry[]>([])
  const [isAdmin, setIsAdmin] = useState(false)

  const addEvent: DemoState["addEvent"] = (e) =>
    setEvents((prev) => [{ ...e, id: makeRef() }, ...prev])

  const removeEvent: DemoState["removeEvent"] = (id) =>
    setEvents((prev) => prev.filter((e) => e.id !== id))

  const addEnquiry: DemoState["addEnquiry"] = (e) => {
    const ref = makeRef()
    setEnquiries((prev) => [{ ...e, id: ref, createdAt: new Date().toISOString() }, ...prev])
    return ref
  }

  const login = (password: string) => {
    const ok = password === "demo123"
    if (ok) setIsAdmin(true)
    return ok
  }

  const reset = () => {
    setEvents(INITIAL_EVENTS)
    setBio(INITIAL_BIO)
    setEnquiries([])
  }

  return (
    <DemoContext.Provider
      value={{
        events, bio, enquiries, isAdmin,
        addEvent, removeEvent, updateBio: setBio, addEnquiry,
        login, logout: () => setIsAdmin(false), reset,
      }}
    >
      {children}
    </DemoContext.Provider>
  )
}

export function useDemo() {
  const ctx = useContext(DemoContext)
  if (!ctx) throw new Error("useDemo must be used inside <DemoProvider>")
  return ctx
}