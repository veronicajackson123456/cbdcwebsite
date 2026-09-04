"use client"

import { useCallback, useEffect, useState } from "react"
import { getWatchlist, isWatched, toggleWatch, WATCHLIST_EVENT } from "@/lib/watchlist"

/** Returns the current watchlist as a Set, kept in sync across components/tabs. */
export function useWatchlistTags() {
  const [tags, setTags] = useState<Set<string>>(new Set())

  useEffect(() => {
    const sync = () => setTags(new Set(getWatchlist()))
    sync()
    window.addEventListener(WATCHLIST_EVENT, sync)
    window.addEventListener("storage", sync)
    return () => {
      window.removeEventListener(WATCHLIST_EVENT, sync)
      window.removeEventListener("storage", sync)
    }
  }, [])

  return tags
}

/** Tracks and toggles the watched state for a single currency tag. */
export function useIsWatched(tag: string) {
  const [watched, setWatched] = useState(false)

  useEffect(() => {
    const sync = () => setWatched(isWatched(tag))
    sync()
    window.addEventListener(WATCHLIST_EVENT, sync)
    return () => window.removeEventListener(WATCHLIST_EVENT, sync)
  }, [tag])

  const toggle = useCallback(() => setWatched(toggleWatch(tag)), [tag])

  return [watched, toggle] as const
}
