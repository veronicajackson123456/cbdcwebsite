const STORAGE_KEY = "cbdc-watchlist"

function readStorage(): string[] {
  if (typeof window === "undefined") return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function writeStorage(tags: string[]) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(tags))
  window.dispatchEvent(new CustomEvent("watchlist-change"))
}

export function getWatchlist(): string[] {
  return readStorage()
}

export function isWatched(tag: string): boolean {
  return readStorage().includes(tag)
}

export function toggleWatch(tag: string): boolean {
  const current = readStorage()
  const next = current.includes(tag) ? current.filter((t) => t !== tag) : [...current, tag]
  writeStorage(next)
  return next.includes(tag)
}

export const WATCHLIST_EVENT = "watchlist-change"
