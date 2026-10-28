import Link from "next/link"
import { Building2, Mail, MapPin } from "lucide-react"
import {
  companyDetails,
  independentResourceDisclaimer,
  nonIssuerDisclaimer,
} from "@/lib/company-details"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/80 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[minmax(0,1.1fr)_minmax(10rem,0.65fr)_minmax(0,1.4fr)] lg:items-start">
          <div className="grid content-start gap-4">
            <div className="flex items-center gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-secondary" aria-hidden="true">
                <Building2 className="size-4 text-primary" />
              </span>
              <div className="flex min-w-0 flex-wrap items-baseline gap-x-2 gap-y-0.5">
                <p className="text-sm font-semibold text-foreground">{companyDetails.name}</p>
                <p className="font-mono text-xs text-muted-foreground">
                  Company / Filing ID: {companyDetails.filingId}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-secondary" aria-hidden="true">
                <MapPin className="size-4 text-primary" />
              </span>
              <address className="not-italic text-sm leading-6 text-muted-foreground">
                <span className="mb-1 block text-xs font-medium tracking-wide text-foreground">Registered address</span>
                {companyDetails.registeredAddress.line1}
                <br />
                {companyDetails.registeredAddress.line2}
              </address>
            </div>

            <div className="flex items-start gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-secondary" aria-hidden="true">
                <MapPin className="size-4 text-primary" />
              </span>
              <address className="not-italic text-sm leading-6 text-muted-foreground">
                <span className="mb-1 block text-xs font-medium tracking-wide text-foreground">Operating address</span>
                {companyDetails.operatingAddress.line1}
                <br />
                {companyDetails.operatingAddress.line2}
              </address>
            </div>

            <div className="flex items-center gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-secondary" aria-hidden="true">
                <Mail className="size-4 text-primary" />
              </span>
              <a
                className="text-sm font-medium text-primary underline-offset-4 hover:underline"
                href={`mailto:${companyDetails.email}`}
              >
                {companyDetails.email}
              </a>
            </div>
          </div>

          <nav aria-label="Footer navigation" className="grid content-start gap-3 border-t border-border pt-6 text-sm md:border-t-0 md:pt-0 lg:border-l lg:pl-6">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Company and policies</h2>
            <Link className="text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" href="/about">
              About / Company
            </Link>
            <Link className="text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" href="/advertise">
              Advertise or Sponsor
            </Link>
            <Link className="text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" href="/legal">
              Legal Centre
            </Link>
          </nav>

          <div className="grid gap-3 border-t border-border pt-6 text-sm leading-6 text-muted-foreground md:col-span-2 lg:col-span-1 lg:border-l lg:pt-0 lg:pl-8">
            <p className="max-w-2xl">{independentResourceDisclaimer}</p>
            <p className="max-w-2xl font-medium text-foreground">{nonIssuerDisclaimer}</p>
            <p className="mt-1 border-t border-border pt-3 font-mono text-xs text-muted-foreground">
              © 2026 CBDC LLC
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
