import Link from "next/link"
import { Link2, PlusCircle, RefreshCw } from "lucide-react"
import {
  FIELD_LABELS,
  LINK_PROPERTIES,
  groupHistoryChanges,
  type ChangeGroup,
  type ChangeGroupKind,
  type HistoryTag,
} from "@/lib/cbdc-api"
import { cn } from "@/lib/utils"

function fieldLabel(property: string): string {
  return FIELD_LABELS[property] ?? property
}

const GROUP_META: Record<ChangeGroupKind, { label: string; icon: typeof RefreshCw; className: string }> = {
  status: { label: "Status updated", icon: RefreshCw, className: "bg-status-poc/15 text-status-poc" },
  updated: { label: "Updated data", icon: RefreshCw, className: "bg-chart-2/15 text-chart-2" },
  added: { label: "Added data", icon: PlusCircle, className: "bg-chart-3/15 text-chart-3" },
}

/** Splits a link field's value on newlines so multi-URL values render as separate link chips. */
function splitLinkValue(value: string): string[] {
  return value
    .split(/\r?\n/)
    .map((v) => v.trim())
    .filter(Boolean)
}

function hostnameOf(url: string): string {
  try {
    return new URL(url).hostname
  } catch {
    return url
  }
}

function LinkChips({ value }: { value: string }) {
  const urls = splitLinkValue(value)
  return (
    <span className="inline-flex flex-wrap items-center gap-x-3 gap-y-1">
      {urls.map((url, i) => (
        <a
          key={i}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-primary hover:underline"
        >
          <Link2 className="size-3 shrink-0" />
          {hostnameOf(url)}
        </a>
      ))}
    </span>
  )
}

function ChangeRow({ property, valueOld, valueNew }: { property: string; valueOld: string | null; valueNew: string | null }) {
  if (LINK_PROPERTIES.has(property)) {
    return (
      <p className="text-sm text-muted-foreground">
        <span className="font-medium text-foreground">{fieldLabel(property)}</span>
        {": "}
        {valueNew ? <LinkChips value={valueNew} /> : <LinkChips value={valueOld ?? ""} />}
      </p>
    )
  }

  return (
    <p className="text-sm text-muted-foreground">
      <span className="font-medium text-foreground">{fieldLabel(property)}</span>
      {": "}
      {valueOld ? <span>{valueOld} </span> : null}
      {valueOld ? <span aria-hidden="true">→</span> : null}
      {" "}
      <span>{valueNew ?? "—"}</span>
    </p>
  )
}

function ChangeGroupCard({ group }: { group: ChangeGroup }) {
  const meta = GROUP_META[group.kind]
  const Icon = meta.icon

  return (
    <div className="overflow-hidden rounded-md border border-border">
      <div className={cn("flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium", meta.className)}>
        <Icon className="size-3.5" />
        {meta.label}
      </div>
      <div className="flex flex-col gap-1 px-3 py-2">
        {group.kind === "status" ? (
          <p className="text-sm text-foreground">
            {group.changes[0].valueOld ?? "None"} <span aria-hidden="true">→</span> {group.changes[0].valueNew ?? "—"}
          </p>
        ) : (
          group.changes.map((change, i) => (
            <ChangeRow key={i} property={change.property} valueOld={change.valueOld} valueNew={change.valueNew} />
          ))
        )}
      </div>
    </div>
  )
}

/**
 * Renders one currency's changes within a single month, exactly as the original timeline does:
 * one card per change-group ("Status updated" / "Added data" / "Updated data"), no invented
 * summary text. Pass `showCurrencyLink` to include the currency name header (used on the
 * global Timeline page); omit it on a currency's own detail page where it would be redundant.
 */
export function TimelineTagEntry({ tag, showCurrencyLink = true }: { tag: HistoryTag; showCurrencyLink?: boolean }) {
  const groups = groupHistoryChanges(tag.changes)
  if (groups.length === 0) return null

  return (
    <div className="flex flex-col gap-2">
      {showCurrencyLink && (
        <Link href={`/currency/${tag.tag.name}`} className="text-sm font-semibold text-foreground hover:text-primary">
          {tag.tag.currency}
        </Link>
      )}
      <div className="flex flex-col gap-2">
        {groups.map((group, i) => (
          <ChangeGroupCard key={i} group={group} />
        ))}
      </div>
    </div>
  )
}
