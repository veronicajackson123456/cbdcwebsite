import Link from "next/link"
import { ArrowRight, BookOpen, Globe2, Landmark, ShieldCheck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { VideoSection } from "@/components/video-embed"
import { CardiffCollegeAd } from "@/components/cardiff-college-ad"
import { LeicesterMerchAd } from "@/components/leicester-merch-ad"
import { fetchCurrencies } from "@/lib/cbdc-api"
import { getMappedCountryNames } from "@/lib/country-map"

const ATLANTIC_COUNCIL_URL = "https://www.atlanticcouncil.org/cbdctracker/"
const ECB_DIGITAL_EURO_URL = "https://www.ecb.europa.eu/euro/digital_euro/progress/html/index.en.html"

const stats = [
  {
    value: "146",
    label: "external global benchmark",
    note: "146 countries and currency unions, representing over 98% of global GDP, are exploring central bank digital currencies (May 2026).",
    sourceHref: ATLANTIC_COUNCIL_URL,
    sourceLabel: "Source: Atlantic Council CBDC Tracker",
    sourceDate: "Tracker last updated May 2026",
  },
  {
    value: "3",
    label: "countries with fully launched CBDCs",
    note: "The Bahamas, Jamaica, and Nigeria · Atlantic Council, May 2026.",
    sourceHref: ATLANTIC_COUNCIL_URL,
    sourceLabel: "Source: Atlantic Council CBDC Tracker",
    sourceDate: "Tracker last updated May 2026",
  },
  {
    value: "3.4bn+",
    label: "retail e-CNY transactions",
    note: "Cumulative through December 2025: more than 3.4 billion retail transactions worth about ¥16.7 trillion.",
    sourceHref: ATLANTIC_COUNCIL_URL,
    sourceLabel: "Source: Atlantic Council CBDC Tracker",
    sourceDate: "Data through December 2025 · tracker updated May 2026",
  },
  {
    value: "2029",
    label: "potential first issuance of the digital euro",
    note: "Could occur if EU lawmakers adopt the regulation in 2026; the ECB has not decided whether to issue it.",
    sourceHref: ECB_DIGITAL_EURO_URL,
    sourceLabel: "Source: European Central Bank",
    sourceDate: "Progress page checked 28 October 2026",
  },
]

export const revalidate = 300

export const metadata = {
  title: "CBDC LLC | Plain-English Digital Currency Intelligence",
  description: "Independent, plain-English information about central bank digital currencies and where each programme stands.",
}

export default async function HomePage() {
  const currencies = await fetchCurrencies().catch(() => [])
  const projectCount = currencies.length
  const countryCount = getMappedCountryNames(currencies).length
  const launchedCount = currencies.filter((currency) => currency.status === "Launched").length

  return (
    <main>
      <section className="border-b border-border/70 bg-gradient-to-b from-primary/10 via-background to-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_.9fr] lg:px-8 lg:py-28">
          <div className="flex flex-col items-start justify-center">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
              <Landmark className="size-3.5" />
              CBDC LLC · independent information resource
            </span>
            <h1 className="max-w-3xl text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
              Your plain guide to digital central bank money.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              A central bank digital currency is a digital form of a country&apos;s official money, issued directly by its central bank. CBDC LLC explains what they are, where each country stands, and what the shift could mean for you, your savings, and your business.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" render={<Link href="/tracker" />} nativeButton={false}>
                Explore the World Tracker <ArrowRight data-icon="inline-end" />
              </Button>
              <Button size="lg" variant="outline" render={<Link href="/what-is-a-cbdc" />} nativeButton={false}>
                What is a CBDC?
              </Button>
            </div>
          </div>
          <Card className="overflow-hidden border-primary/20 bg-card/80 shadow-2xl shadow-primary/5">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center gap-3 border-b border-border/70 pb-5">
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary"><Globe2 className="size-5" /></div>
                <div><p className="font-semibold text-foreground">The world is moving</p><p className="text-sm text-muted-foreground">Research, pilots, launches, and legislation</p></div>
              </div>
              <div className="grid gap-4 pt-6 sm:grid-cols-2">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex h-full flex-col rounded-lg border border-border/70 bg-background/60 p-4">
                    <p className="font-mono text-2xl font-semibold text-primary">{stat.value}</p>
                    <p className="mt-1 text-sm font-medium text-foreground">{stat.label}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{stat.note}</p>
                    <a
                      className="mt-3 inline-flex w-fit text-xs font-medium text-primary underline-offset-4 hover:underline"
                      href={stat.sourceHref}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {stat.sourceLabel}
                    </a>
                    <p className="mt-1 text-xs text-muted-foreground">{stat.sourceDate}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 border-t border-border/70 pt-4">
                <p className="text-xs leading-relaxed text-muted-foreground">
                  The Atlantic Council figure is an external country-and-currency-union benchmark, not CBDC LLC&apos;s
                  count of individually tracked project records. “Exploring” includes different stages and does not
                  mean every jurisdiction is running a live pilot or has launched a CBDC.
                </p>
                {projectCount > 0 ? (
                  <>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      The live project feed contains {projectCount} unique records, including {launchedCount} currently
                      marked “Launched.” Project-level status totals and the Atlantic Council&apos;s country-and-currency-union
                      count use different scopes.
                    </p>
                    <a
                      className="mt-2 inline-flex w-fit text-xs font-medium text-primary underline-offset-4 hover:underline"
                      href="https://cbdctracker.org/api/currencies"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source: CBDC Tracker API
                    </a>
                  </>
                ) : (
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    Live project totals are temporarily unavailable.
                  </p>
                )}
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                External figures show their reporting dates above; live tracker data is revalidated every five minutes.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <CardiffCollegeAd />
      <LeicesterMerchAd />

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <VideoSection title="What exactly is a digital euro?" videoId="oknlcw4Ix7Q" source="Council of the EU" duration="1:17" />
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
        <Card><CardContent className="p-6"><BookOpen className="size-5 text-primary" /><h2 className="mt-4 text-lg font-semibold">Understand the basics</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Learn how CBDCs differ from bank deposits, stablecoins, and cryptocurrencies.</p><Link href="/what-is-a-cbdc" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">Read the guide <ArrowRight className="size-4" /></Link></CardContent></Card>
        <Card><CardContent className="p-6"><Globe2 className="size-5 text-primary" /><h2 className="mt-4 text-lg font-semibold">Track every programme</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{projectCount > 0 ? <>Search {projectCount} unique project records across {countryCount} mapped country and territory names. Joint projects and currency-union records may cover additional jurisdictions.</> : "Live project totals are temporarily unavailable."}</p><Link href="/tracker" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">Open World Tracker <ArrowRight className="size-4" /></Link></CardContent></Card>
        <Card><CardContent className="p-6"><ShieldCheck className="size-5 text-primary" /><h2 className="mt-4 text-lg font-semibold">Stay informed, not alarmed</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Clear context on privacy, holding limits, programmability, and what changes for businesses.</p><Link href="/getting-ready" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">Get ready <ArrowRight className="size-4" /></Link></CardContent></Card>
      </section>
    </main>
  )
}
