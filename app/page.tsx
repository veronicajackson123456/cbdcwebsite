import Link from "next/link"
import { ArrowUpRight, Landmark, Newspaper, History } from "lucide-react"
import { fetchCurrencies, fetchHistory, fetchNews, formatDate, STATUS_LIST, type CbdcStatus } from "@/lib/cbdc-api"
import { WorldMap } from "@/components/world-map"
import { StatusChart } from "@/components/status-chart"
import { StatusBadge } from "@/components/status-badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const revalidate = 300

export default async function DashboardPage() {
  const [currencies, history, news] = await Promise.all([
    fetchCurrencies().catch(() => []),
    fetchHistory(0, 5).catch(() => null),
    fetchNews(0, 5).catch(() => null),
  ])

  const counts = STATUS_LIST.reduce(
    (acc, status) => {
      acc[status] = currencies.filter((c) => c.status === status).length
      return acc
    },
    {} as Record<CbdcStatus, number>,
  )

  const countryCount = new Set(currencies.map((c) => c.country)).size

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="mb-10 flex flex-col gap-3">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          <Landmark className="size-3.5" />
          Live global intelligence
        </span>
        <h1 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Today&apos;s Central Bank Digital Currencies Status
        </h1>
        <p className="max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground">
          Monitoring {currencies.length} CBDC projects across {countryCount} countries — from early research to
          full-scale launch.
        </p>
      </section>

      <section className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {STATUS_LIST.map((status) => (
          <Card key={status} className="gap-2 py-4">
            <CardContent className="px-4">
              <p className="font-mono text-2xl font-semibold tabular-nums text-foreground">{counts[status]}</p>
              <p className="mt-1 text-xs text-muted-foreground">{status}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="mb-8 grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Global status map</CardTitle>
            <CardDescription>Hover a country to see its CBDC status. Click to view details.</CardDescription>
          </CardHeader>
          <CardContent>
            <WorldMap currencies={currencies} />
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground">
              {STATUS_LIST.map((status) => (
                <span key={status} className="inline-flex items-center gap-1.5">
                  <StatusBadge status={status} />
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Status distribution</CardTitle>
            <CardDescription>Share of tracked projects by stage</CardDescription>
          </CardHeader>
          <CardContent>
            <StatusChart counts={counts} />
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <History className="size-4 text-primary" />
                Latest updates
              </CardTitle>
              <CardDescription>Recent changes to tracked projects</CardDescription>
            </div>
            <Button variant="ghost" size="sm" render={<Link href="/timeline" />} nativeButton={false}>
              View all
              <ArrowUpRight data-icon="inline-end" />
            </Button>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            {history?.content.length ? (
              history.content.map((entry, i) => (
                <div key={i} className="border-b border-border/60 pb-3 last:border-0 last:pb-0">
                  <p className="font-mono text-xs text-muted-foreground">
                    {entry.year}-{String(entry.month).padStart(2, "0")}
                  </p>
                  {entry.tags.slice(0, 2).map((tag, j) => (
                    <p key={j} className="mt-1 text-sm leading-relaxed text-foreground">
                      <Link href={`/currency/${tag.tag.name}`} className="font-medium hover:text-primary">
                        {tag.tag.currency}
                      </Link>{" "}
                      <span className="text-muted-foreground">
                        — {tag.changes.length} field{tag.changes.length === 1 ? "" : "s"} updated
                      </span>
                    </p>
                  ))}
                </div>
              ))
            ) : (
              <p className="text-sm text-muted-foreground">Updates are temporarily unavailable.</p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Newspaper className="size-4 text-primary" />
                Latest news
              </CardTitle>
              <CardDescription>Coverage from around the world</CardDescription>
            </div>
            <Button variant="ghost" size="sm" render={<Link href="/news" />} nativeButton={false}>
              View all
              <ArrowUpRight data-icon="inline-end" />
            </Button>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            {news?.content.length ? (
              news.content.map((item) => (
                <a
                  key={item.uid}
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border-b border-border/60 pb-3 last:border-0 last:pb-0"
                >
                  <p className="text-sm leading-relaxed text-foreground group-hover:text-primary">{item.title}</p>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">
                    {item.sourceName} · {formatDate(item.created)}
                  </p>
                </a>
              ))
            ) : (
              <p className="text-sm text-muted-foreground">News is temporarily unavailable.</p>
            )}
          </CardContent>
        </Card>
      </section>
    </main>
  )
}
