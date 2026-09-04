import { StatusBadge } from "@/components/status-badge"
import { STATUS_LIST } from "@/lib/cbdc-api"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Whitepaper — CBDC Tracker",
  description: "Methodology and definitions behind the CBDC Tracker classification system.",
}

const STATUS_DEFINITIONS: Record<(typeof STATUS_LIST)[number], string> = {
  Research: "The central bank is exploring the concept internally, with no public pilot or committed timeline.",
  "Proof of concept":
    "A technical proof of concept is underway, testing feasibility with a limited scope or closed group of participants.",
  Pilot: "A live pilot is running with real or simulated transactions among a defined set of users or institutions.",
  Launched: "The CBDC is generally available to the public or eligible institutions on an ongoing basis.",
  Cancelled: "The project has been formally discontinued or shelved by the issuing authority.",
}

const SECTIONS = [
  {
    title: "What is a CBDC?",
    body: "A Central Bank Digital Currency (CBDC) is a digital form of a country's fiat currency, issued and backed directly by its central bank. Unlike commercial bank money or cryptocurrencies, a CBDC is a direct liability of the central bank — the same status as physical cash.",
  },
  {
    title: "Retail vs. wholesale",
    body: "Retail CBDCs are designed for use by the general public for everyday payments. Wholesale CBDCs are restricted to use between financial institutions for interbank settlement and securities transactions, and are not accessible to individual consumers.",
  },
  {
    title: "DLT vs. non-DLT",
    body: "Some CBDC implementations are built on distributed ledger technology (DLT) — a shared, cryptographically verified ledger across multiple nodes. Others use conventional centralized database architecture. Neither approach is required for a currency to qualify as a CBDC.",
  },
  {
    title: "Cross-border projects",
    body: "A small number of initiatives are explicitly multi-jurisdictional, designed to settle cross-border payments directly between participating central banks — bypassing correspondent banking intermediaries.",
  },
]

export default function WhitepaperPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-2">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">Whitepaper &amp; methodology</h1>
        <p className="text-sm leading-relaxed text-muted-foreground">
          How CBDC Tracker classifies, sources, and maintains data on central bank digital currency initiatives
          worldwide.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {SECTIONS.map((section) => (
          <Card key={section.title}>
            <CardHeader>
              <CardTitle className="text-base">{section.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-muted-foreground">{section.body}</p>
            </CardContent>
          </Card>
        ))}

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Status classification</CardTitle>
            <CardDescription>Every tracked project is assigned exactly one status.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            {STATUS_LIST.map((status) => (
              <div key={status} className="flex flex-col gap-1">
                <StatusBadge status={status} className="w-fit" />
                <p className="text-sm leading-relaxed text-muted-foreground">{STATUS_DEFINITIONS[status]}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
