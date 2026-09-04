import { fetchCurrencies } from "@/lib/cbdc-api"
import { CurrencyTable } from "@/components/currency-table"

export const revalidate = 300

export const metadata = {
  title: "Currencies — CBDC Tracker",
  description: "Browse every tracked Central Bank Digital Currency initiative worldwide.",
}

export default async function CurrenciesPage() {
  const currencies = await fetchCurrencies().catch(() => [])

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-col gap-2">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">Currencies</h1>
        <p className="text-sm text-muted-foreground">
          Search and filter every tracked CBDC initiative across {new Set(currencies.map((c) => c.country)).size}{" "}
          countries and currency unions.
        </p>
      </div>
      <CurrencyTable currencies={currencies} />
    </main>
  )
}
