import { ExternalLink, History, RefreshCw } from "lucide-react"
import { fetchHistoryByTag, FIELD_LABELS, type HistoryChange } from "@/lib/cbdc-api"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

const LINK_PROPERTIES = new Set(["announcementLink", "whitepaperLink"])

function fieldLabel(property: string): string {
  return FIELD_LABELS[property] ?? property
}

function truncate(value: string, max = 140): string {
  return value.length > max ? `${value.slice(0, max).trim()}…` : value
}

function LinkValue({ value }: { value: string }) {
  const url = value.split(/\s+/)[0]
  let host = url
  try {
    host = new URL(url).hostname.replace(/^www\./, "www.")
  } catch {
    // not a valid absolute URL, fall back to raw text
  }
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-primary hover:underline"
    >
      <ExternalLink className="size-3" />
      {host}
    </a>
  )
}

function ChangeValue({ property, value }: { property: string; value: string }) {
  if (LINK_PROPERTIES.has(property)) return <LinkValue value={value} />
  return <span>{truncate(value)}</span>
}

function badgeLabel(change: HistoryChange): "Status updated" | "Added data" | "Updated data" {
  if (change.property === "status") return "Status updated"
  if (change.valueOld === null || change.valueOld === undefined || change.valueOld === "") return "Added data"
  return "Updated data"
}

export async function CurrencyTimeline({ tag }: { tag: string }) {
  const history = await fetchHistoryByTag(tag, 0, 50).catch(() => null)
  const entries = history?.content ?? []

  const lastUpdate = entries[0]
  const lastUpdateLabel = lastUpdate ? `${MONTHS[lastUpdate.month - 1] ?? lastUpdate.month} ${lastUpdate.year}` : null

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
              <h4 className="text-sm font-medium text-foreground">
                {MONTHS[entry.month - 1] ?? entry.month} {entry.year}
              </h4>
              <div className="mt-2 flex flex-col gap-3">
                {relevantTags.map((t, j) => {
                  const statusChange = t.changes.find((c) => c.property === "status")
                  const otherChanges = t.changes.filter((c) => c.property !== "status")
                  return (
                    <div key={j} className="flex flex-col gap-2">
                      {t.description && (
                        <p className="text-xs leading-relaxed text-muted-foreground">{t.description}</p>
                      )}
                      {statusChange && (
                        <div className="flex flex-col gap-1">
                          <p className="inline-flex items-center gap-1.5 text-xs font-medium text-primary">
                            <RefreshCw className="size-3" />
                            {badgeLabel(statusChange)}
                          </p>
                          <p className="pl-4 text-sm text-foreground">
                            {statusChange.valueOld ?? "—"} <span aria-hidden="true">→</span> {statusChange.valueNew ?? "—"}
                          </p>
                        </div>
                      )}
                      {otherChanges.length > 0 && (
                        <div className="flex flex-col gap-1">
                          <p className="inline-flex items-center gap-1.5 text-xs font-medium text-primary">
                            <RefreshCw className="size-3" />
                            {otherChanges.every((c) => badgeLabel(c) === "Added data") ? "Added data" : "Updated data"}
                          </p>
                          <dl className="flex flex-col gap-1.5 pl-4">
                            {otherChanges.map((change, k) => (
                              <div key={k} className="text-sm leading-relaxed text-muted-foreground">
                                <dt className="inline font-medium text-foreground">{fieldLabel(change.property)}</dt>
                                <span>: </span>
                                <dd className="inline">
                                  {change.valueOld ? (
                                    <>
                                      <ChangeValue property={change.property} value={change.valueOld} />{" "}
                                      <span aria-hidden="true">→</span>{" "}
                                    </>
                                  ) : null}
                                  {change.valueNew ? (
                                    <ChangeValue property={change.property} value={change.valueNew} />
                                  ) : (
                                    "—"
                                  )}
                                </dd>
                              </div>
                            ))}
                          </dl>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
