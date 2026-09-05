import { History } from "lucide-react"
import { fetchHistoryByTag, formatMonthYear } from "@/lib/cbdc-api"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TimelineTagEntry } from "@/components/timeline-event"

export async function CurrencyTimeline({ tag }: { tag: string }) {
  const history = await fetchHistoryByTag(tag, 0, 50).catch(() => null)
  const entries = history?.content ?? []

  const lastUpdate = entries[0]
  const lastUpdateLabel = lastUpdate ? formatMonthYear(lastUpdate.month, lastUpdate.year) : null

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <History className="size-4 text-primary" />
          Timeline
        </CardTitle>
        {lastUpdateLabel && <p className="text-xs text-muted-foreground">Last update: {lastUpdateLabel}</p>}
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        {entries.length === 0 && <p className="text-sm text-muted-foreground">No recorded history for this CBDC.</p>}
        {entries.map((entry, i) => {
          const relevantTags = entry.tags.filter((t) => t.tag.name === tag)
          if (relevantTags.length === 0) return null
          return (
            <div key={i} className="border-b border-border/60 pb-4 last:border-0 last:pb-0">
              <h4 className="text-sm font-medium text-foreground">{formatMonthYear(entry.month, entry.year)}</h4>
              <div className="mt-2 flex flex-col gap-3">
                {relevantTags.map((t, j) => (
                  <TimelineTagEntry key={j} tag={t} showCurrencyLink={false} />
                ))}
              </div>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
