import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ExternalLink } from "lucide-react"
import {
  fetchCurrencyByTag,
  fetchNews,
  formatDate,
  formatYear,
  DETAIL_FIELD_ORDER,
  FIELD_LABELS,
  type Currency,
} from "@/lib/cbdc-api"
import { StatusBadge } from "@/components/status-badge"
import { WatchButton } from "@/components/watch-button"
import { CurrencyTimeline } from "@/components/currency-timeline"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export const revalidate = 300

export async function generateMetadata({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params
  const currency = await fetchCurrencyByTag(tag).catch(() => null)
  if (!currency) return { title: "Currency not found — CBDC Tracker" }
  return {
    title: `${currency.digitalCurrency} (${currency.country}) — CBDC Tracker`,
    description: currency.description?.slice(0, 160),
  }
}

const LINK_FIELDS = new Set(["announcementLink", "whitepaperLink"])
const LONG_TEXT_FIELDS = new Set(["goals", "description", "governanceStructure"])

function LinkFieldValue({ value }: { value: string }) {
  const url = value.split(/\s+/)[0]
  let host = url
  try {
    host = new URL(url).hostname
  } catch {
    // not an absolute URL — fall back to the raw text
  }
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
    >
      <ExternalLink className="size-3.5" />
      {host}
    </a>
  )
}

export default async function CurrencyDetailPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params
  const currency = await fetchCurrencyByTag(tag).catch(() => null)
  if (!currency) notFound()

  const news = await fetchNews(0, 100).catch(() => null)
  const relatedNews = news?.content.filter((item) => item.currencyTags.some((t) => t.name === tag)) ?? []

  const shortFacts = DETAIL_FIELD_ORDER.filter(
    (key) => !LONG_TEXT_FIELDS.has(key) && !LINK_FIELDS.has(key) && Boolean(currency[key as keyof Currency]),
  )
  const longFacts = DETAIL_FIELD_ORDER.filter((key) => LONG_TEXT_FIELDS.has(key) && Boolean(currency[key as keyof Currency]))
  const linkFacts = DETAIL_FIELD_ORDER.filter((key) => LINK_FIELDS.has(key) && Boolean(currency[key as keyof Currency]))

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <Link
        href="/currencies"
        className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-3.5" />
        Back to currencies
      </Link>

      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-3">
            <h1 className="text-balance text-3xl font-semibold tracking-tight text-foreground">
              {currency.digitalCurrency}
            </h1>
            <StatusBadge status={currency.status} />
          </div>
          <p className="text-sm text-muted-foreground">{currency.country}</p>
        </div>
        <WatchButton tag={currency.tag} />
      </div>

      <div className="mb-8 grid grid-cols-2 gap-4 rounded-lg border border-border bg-card p-5 sm:grid-cols-4">
        {shortFacts.map((key) => (
          <div key={key}>
            <p className="text-xs text-muted-foreground">{FIELD_LABELS[key] ?? key}</p>
            <p className="mt-1 text-sm font-medium text-foreground">
              {key === "announcementYear"
                ? formatYear(currency.announcementYear)
                : String(currency[key as keyof Currency])}
            </p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="flex flex-col gap-6 lg:col-span-2">
          {longFacts.map((key) => (
            <Card key={key}>
              <CardHeader>
                <CardTitle>{FIELD_LABELS[key] ?? key}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                  {String(currency[key as keyof Currency])}
                </p>
              </CardContent>
            </Card>
          ))}

          {linkFacts.length > 0 && (
            <Card>
              <CardContent className="flex flex-col gap-3 pt-6">
                {linkFacts.map((key) => (
                  <div key={key}>
                    <p className="text-xs text-muted-foreground">{FIELD_LABELS[key] ?? key}</p>
                    <div className="mt-1">
                      <LinkFieldValue value={String(currency[key as keyof Currency])} />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          <CurrencyTimeline tag={tag} />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>News</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            {relatedNews.length ? (
              relatedNews.map((item, i) => (
                <div key={item.uid}>
                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm leading-relaxed text-foreground hover:text-primary"
                  >
                    {item.title}
                  </a>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">
                    {item.sourceName} · {formatDate(item.created)}
                  </p>
                  {i < relatedNews.length - 1 && <Separator className="mt-3" />}
                </div>
              ))
            ) : (
              <p className="text-sm text-muted-foreground">No recent news found for this currency.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
