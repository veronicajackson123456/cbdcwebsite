import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ExternalLink, FileText } from "lucide-react"
import { fetchCurrencyByTag, fetchNews, formatDate } from "@/lib/cbdc-api"
import { StatusBadge } from "@/components/status-badge"
import { WatchButton } from "@/components/watch-button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export const revalidate = 300

export async function generateMetadata({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params
  const currency = await fetchCurrencyByTag(tag).catch(() => null)
  if (!currency) return { title: "Currency not found — CBDC Tracker" }
  return {
    title: `${currency.digitalCurrency} — ${currency.country} | CBDC Tracker`,
    description: currency.description?.slice(0, 160),
  }
}

const FACTS: { label: string; get: (c: NonNullable<Awaited<ReturnType<typeof fetchCurrencyByTag>>>) => string }[] = [
  { label: "Country", get: (c) => c.country },
  { label: "Central bank", get: (c) => c.centralBank },
  { label: "Type", get: (c) => c.type },
  { label: "Structure", get: (c) => c.structure || "—" },
  { label: "Technology", get: (c) => c.technologyName || c.technology || "—" },
  { label: "DLT basis", get: (c) => c.dlt || "—" },
  { label: "Cross-border project", get: (c) => (c.crossBorderProject ? "Yes" : "No") },
  { label: "Announced", get: (c) => (c.announcementYear ? new Date(c.announcementYear).getFullYear().toString() : "—") },
]

export default async function CurrencyDetailPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params
  const currency = await fetchCurrencyByTag(tag).catch(() => null)
  if (!currency) notFound()

  const news = await fetchNews(0, 100).catch(() => null)
  const relatedNews = news?.content.filter((item) => item.currencyTags.some((t) => t.name === tag)).slice(0, 5) ?? []

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
          <p className="text-sm text-muted-foreground">
            {currency.country} · {currency.centralBank}
          </p>
        </div>
        <WatchButton tag={currency.tag} />
      </div>

      <div className="mb-8 grid grid-cols-2 gap-4 rounded-lg border border-border bg-card p-5 sm:grid-cols-4">
        {FACTS.map((fact) => (
          <div key={fact.label}>
            <p className="text-xs text-muted-foreground">{fact.label}</p>
            <p className="mt-1 text-sm font-medium text-foreground">{fact.get(currency)}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="flex flex-col gap-6 lg:col-span-2">
          {currency.description && (
            <Card>
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">{currency.description}</p>
              </CardContent>
            </Card>
          )}

          {currency.goals && (
            <Card>
              <CardHeader>
                <CardTitle>Policy goals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">{currency.goals}</p>
              </CardContent>
            </Card>
          )}

          {currency.governanceStructure && (
            <Card>
              <CardHeader>
                <CardTitle>Governance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">{currency.governanceStructure}</p>
              </CardContent>
            </Card>
          )}

          {(currency.announcementLink || currency.whitepaperLink) && (
            <Card>
              <CardHeader>
                <CardTitle>Sources</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                {currency.announcementLink && (
                  <a
                    href={currency.announcementLink.split(/\s+/)[0]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
                  >
                    <ExternalLink className="size-3.5" />
                    Announcement source
                  </a>
                )}
                {currency.whitepaperLink && (
                  <a
                    href={currency.whitepaperLink.split(/\s+/)[0]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
                  >
                    <FileText className="size-3.5" />
                    Whitepaper
                  </a>
                )}
              </CardContent>
            </Card>
          )}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Related news</CardTitle>
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
