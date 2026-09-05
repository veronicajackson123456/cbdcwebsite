const UPSTREAM_BASE = "https://cbdctracker.org/api"

const UPSTREAM_HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
  Accept: "application/json",
}

export type CbdcStatus = "Launched" | "Pilot" | "Proof of concept" | "Research" | "Cancelled"

export const STATUS_LIST: CbdcStatus[] = ["Launched", "Pilot", "Proof of concept", "Research", "Cancelled"]

export interface CurrencyCountry {
  centralBank: string
  name: string
  uid: string
}

export interface Currency {
  tag: string
  created: number
  country: string
  countries: CurrencyCountry[]
  centralBank: string
  announcementYear: number
  digitalCurrency: string
  status: CbdcStatus
  type: string
  structure?: string
  technology?: string
  technologyName?: string
  updateRate?: number[]
  description?: string
  dlt?: string
  goals?: string
  governanceStructure?: string
  announcementLink?: string
  whitepaperLink?: string
  crossBorderProject?: boolean
  uid: string
}

export interface NewsItem {
  uid: string
  title: string
  abstract?: string
  sourceUrl: string
  sourceName: string
  created: number
  image?: string
  currencyTags: { name: string; country: string; currency: string }[]
}

export interface HistoryChange {
  property: string
  valueOld: string | null
  valueNew: string | null
}

export interface HistoryTag {
  tag: { name: string; currency: string; keywords?: string }
  description?: string
  changes: HistoryChange[]
}

export interface HistoryEntry {
  year: number
  month: number
  description: string | null
  tags: HistoryTag[]
}

export interface Page<T> {
  content: T[]
  totalElements: number
  totalPages: number
  number: number
  size: number
  first: boolean
  last: boolean
}

async function upstreamFetch<T>(path: string, revalidate: number): Promise<T> {
  const res = await fetch(`${UPSTREAM_BASE}${path}`, {
    headers: UPSTREAM_HEADERS,
    next: { revalidate },
  })
  if (!res.ok) {
    throw new Error(`Upstream request failed: ${path} (${res.status})`)
  }
  return res.json()
}

export function fetchCurrencies() {
  return upstreamFetch<Currency[]>("/currencies", 300)
}

export async function fetchCurrencyByTag(tag: string): Promise<Currency | null> {
  const all = await fetchCurrencies()
  return all.find((c) => c.tag === tag) ?? null
}

export function fetchCountries() {
  return upstreamFetch<string[]>("/countries", 3600)
}

export function fetchNews(page = 0, size = 20) {
  return upstreamFetch<Page<NewsItem>>(`/news?page=${page}&size=${size}&sort=created,desc`, 120)
}

export function fetchHistory(page = 0, size = 20) {
  return upstreamFetch<Page<HistoryEntry>>(`/history-of-changes?page=${page}&size=${size}`, 120)
}

export function fetchHistoryByTag(tag: string, page = 0, size = 50) {
  return upstreamFetch<Page<HistoryEntry>>(
    `/history-of-changes?page=${page}&size=${size}&tags=${encodeURIComponent(tag)}`,
    120,
  )
}

export interface ColumnDef {
  name: string
  title: string
  hideable: boolean
  sortable: boolean
  filterable: boolean
  visible: boolean
  default: boolean
}

export function fetchColumns() {
  return upstreamFetch<ColumnDef[]>("/currencies/columns", 3600)
}

/**
 * Fallback field-name labels matching the original cbdctracker.org "/api/currencies/columns"
 * response, used if the live columns endpoint is unreachable. Order mirrors the order fields
 * are rendered on the original currency detail page.
 */
export const FIELD_LABELS: Record<string, string> = {
  digitalCurrency: "Digital currency",
  country: "Country / Region",
  centralBank: "Central Bank(s)",
  announcementYear: "Announcement Year",
  status: "Status",
  updateRate: "Update rate",
  type: "Retail/Wholesale",
  structure: "Structure",
  technology: "Technology Provider",
  technologyName: "Technology",
  governanceStructure: "Governance structure",
  dlt: "DLT / non-DLT",
  goals: "Main motivation/goals of the CBDC",
  description: "Description",
  announcementLink: "Link to announcement",
  whitepaperLink: "Link to whitepaper",
}

/** Field order matching the original currency detail page, excluding fields shown in the header. */
export const DETAIL_FIELD_ORDER = [
  "centralBank",
  "announcementYear",
  "status",
  "type",
  "structure",
  "technology",
  "technologyName",
  "governanceStructure",
  "dlt",
  "goals",
  "description",
  "announcementLink",
  "whitepaperLink",
]

export const STATUS_COLORS: Record<CbdcStatus, string> = {
  Launched: "var(--status-launched)",
  Pilot: "var(--status-pilot)",
  "Proof of concept": "var(--status-poc)",
  Research: "var(--status-research)",
  Cancelled: "var(--status-cancelled)",
}

export function formatDate(ms: number | null | undefined): string {
  if (!ms) return "—"
  return new Date(ms).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })
}

export function formatYear(ms: number | null | undefined): string {
  if (!ms) return "—"
  return new Date(ms).getFullYear().toString()
}
