export function SiteFooter() {
  return (
    <footer className="border-t border-border/80">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>Data sourced live from the public CBDC Tracker API. Updated continuously.</p>
        <p className="font-mono">Not affiliated with any central bank or government.</p>
      </div>
    </footer>
  )
}
