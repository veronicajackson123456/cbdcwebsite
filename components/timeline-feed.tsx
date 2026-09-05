"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"
import type { HistoryEntry } from "@/lib/cbdc-api"
import { formatMonthYear } from "@/lib/cbdc-api"
import { TimelineTagEntry } from "@/components/timeline-event"
import { Button } from "@/components/ui/button"

export function TimelineFeed({
  initialEntries,
  initialPage,
  totalPages,
  pageSize,
}: {
  initialEntries: HistoryEntry[]
  initialPage: number
  totalPages: number
  pageSize: number
}) {
  const [entries, setEntries] = useState(initialEntries)
  const [page, setPage] = useState(initialPage)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const hasMore = page < totalPages - 1

  async function loadMore() {
    setLoading(true)
    setError(false)
    try {
      const nextPage = page + 1
      const res = await fetch(`/api/history?page=${nextPage}&size=${pageSize}`)
      if (!res.ok) throw new Error("Failed to load more")
      const data: { content: HistoryEntry[] } = await res.json()
      setEntries((prev) => [...prev, ...data.content])
      setPage(nextPage)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="relative flex flex-col gap-8 border-l border-border pl-6">
        {entries.map((entry, i) => (
          <div key={`${entry.year}-${entry.month}-${i}`} className="relative">
            <span className="absolute -left-[29px] top-1.5 size-2.5 rounded-full border-2 border-background bg-primary" />
            <h2 className="font-mono text-sm font-medium text-primary">{formatMonthYear(entry.month, entry.year)}</h2>
            <div className="mt-3 flex flex-col gap-4">
              {entry.tags.map((tag, j) => (
                <TimelineTagEntry key={j} tag={tag} showCurrencyLink />
              ))}
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="flex flex-col items-center gap-2">
          <Button variant="outline" onClick={loadMore} disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                Loading...
              </>
            ) : (
              "Show more events"
            )}
          </Button>
          {error && <p className="text-xs text-destructive">Failed to load more events. Try again.</p>}
        </div>
      )}
    </div>
  )
}
