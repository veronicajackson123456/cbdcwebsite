import { WatchlistView } from "@/components/watchlist-view"

export const metadata = {
  title: "Watchlist — CBDC Tracker",
  description: "Track your starred CBDC initiatives and get notified of changes.",
}

export default function WatchlistPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-col gap-2">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">Watchlist</h1>
        <p className="text-sm text-muted-foreground">Currencies you&apos;re tracking, stored on this device.</p>
      </div>
      <WatchlistView />
    </main>
  )
}
