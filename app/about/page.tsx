import type { Metadata } from "next"
import { BookOpenText, CircleDollarSign, UsersRound } from "lucide-react"
import {
  companyDetails,
  independentResourceDisclaimer,
  nonIssuerDisclaimer,
} from "@/lib/company-details"
import { ContentPage, ContentSection, InfoCard } from "@/components/content-page"
import { SponsorSection } from "@/components/sponsor-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About CBDC LLC",
  description:
    "CBDC LLC is an independent digital-currency research and information company. We publish plain-English guides, country and project trackers, and updates.",
}

const sectionLinks = [
  { href: "#founder", label: "Founder and Managing Member" },
  { href: "#ubo", label: "Ultimate Beneficial Owner (UBO)" },
  { href: "#our-role", label: "Our role" },
  { href: "#important", label: "Important" },
  { href: "#company-details", label: "Company details" },
  { href: "#services", label: "Services & funding" },
  { href: "#advertising", label: "Advertise or Sponsor" }
]

const services = [
  {
    title: "Research and information",
    description:
      "CBDC LLC operates an independent digital-currency research and information website. Our main services are educational articles, research, and searchable tracking information about central bank digital currencies.",
    Icon: BookOpenText,
  },
  {
    title: "Our readers",
    description:
      "We reach readers interested in finance, technology, policy and business through our website and online content.",
    Icon: UsersRound,
  },
  {
    title: "Funding",
    description:
      "CBDC LLC offers display advertising and sponsored content as commercial opportunities. Sponsored material is clearly labelled, and advertising or sponsorship does not determine or influence tracker classifications, status assessments, or research conclusions.",
    Icon: CircleDollarSign,
  },
]

export default function AboutPage() {
  return (
    <ContentPage
      eyebrow="About CBDC LLC"
      title="Who we are"
      intro="CBDC LLC is an independent digital-currency research and information company. We research central bank digital currency developments and publish plain-English guides, country and project trackers, and updates explaining what these developments may mean for individuals and businesses."
    >
      <nav aria-label="About page sections" className="flex flex-wrap gap-2">
        {sectionLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="rounded-full border border-border bg-card/50 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div id="founder" className="scroll-mt-24">
        <ContentSection title="Founder and Managing Member">
          <InfoCard label={companyDetails.founderTitle} title={companyDetails.founderName}>
            <div className="space-y-4">
              <p>
                Tristan Marsh is the founder and managing member of CBDC LLC. He established the company to create a clear, independent public resource on central bank digital currencies at a time when official explanations were often technical and fragmented.
              </p>
              <p>
                He oversees the research direction, editorial standards and day-to-day operation of the CBDC World Tracker and related guides. His focus is on translating complex policy and technical developments into plain-English material that individuals, businesses and journalists can use without specialised knowledge.
              </p>
              <p>
                Marsh is responsible for maintaining the independence of the tracker’s classifications and ensuring that commercial relationships never influence research conclusions. He works remotely and directs all content and methodology decisions for the company.
              </p>
            </div>
          </InfoCard>
        </ContentSection>
      </div>

      <div id="ubo" className="scroll-mt-24">
        <ContentSection title="Ultimate Beneficial Owner (UBO)">
          <p>
            Tristan Marsh is the ultimate beneficial owner of CBDC LLC and serves as its Founder and Managing Member.
          </p>
        </ContentSection>
      </div>

      <div id="our-role" className="scroll-mt-24">
        <ContentSection title="Our role">
          <p>{independentResourceDisclaimer}</p>
        </ContentSection>
      </div>

      <div id="important" className="scroll-mt-24">
        <ContentSection title="Important">
          <p className="max-w-4xl text-foreground">{nonIssuerDisclaimer}</p>
        </ContentSection>
      </div>

      <div id="company-details" className="scroll-mt-24">
        <ContentSection title="Company details">
          <dl className="divide-y divide-border rounded-xl border border-border bg-card/50 px-5">
            <div className="grid gap-1 py-4 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-6">
              <dt className="text-xs font-medium text-muted-foreground">Legal name</dt>
              <dd className="text-sm font-medium text-foreground">{companyDetails.name}</dd>
            </div>
            <div className="grid gap-1 py-4 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-6">
              <dt className="text-xs font-medium text-muted-foreground">Company / Filing ID</dt>
              <dd className="text-sm font-medium text-foreground">{companyDetails.filingId}</dd>
            </div>
            <div className="grid gap-1 py-4 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-6">
              <dt className="text-xs font-medium text-muted-foreground">Founder and Managing Member</dt>
              <dd className="text-sm font-medium text-foreground">{companyDetails.founderName}</dd>
            </div>
            <div className="grid gap-1 py-4 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-6">
              <dt className="text-xs font-medium text-muted-foreground">Registered address</dt>
              <dd className="text-sm leading-6 text-foreground">
                {companyDetails.registeredAddress.line1}
                <br />
                {companyDetails.registeredAddress.line2}
              </dd>
            </div>
            <div className="grid gap-1 py-4 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-6">
              <dt className="text-xs font-medium text-muted-foreground">Operating address</dt>
              <dd className="text-sm leading-6 text-foreground">
                {companyDetails.operatingAddress.line1}
                <br />
                {companyDetails.operatingAddress.line2}
              </dd>
            </div>
            <div className="grid gap-1 py-4 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-6">
              <dt className="text-xs font-medium text-muted-foreground">Email</dt>
              <dd>
                <a
                  className="text-sm font-medium text-primary underline-offset-4 hover:underline"
                  href={`mailto:${companyDetails.email}`}
                >
                  {companyDetails.email}
                </a>
              </dd>
            </div>
          </dl>
        </ContentSection>
      </div>

      <div id="services" className="scroll-mt-24">
        <ContentSection title="Services & how we’re funded">
          <div className="grid gap-4 md:grid-cols-3">
            {services.map(({ title, description, Icon }) => (
              <Card key={title} className="h-full border-border/80 bg-card/60">
                <CardHeader>
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-base">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 text-muted-foreground">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-4 rounded-xl border border-border/80 bg-card/50 px-4 py-3">
            <p className="text-sm leading-6 text-muted-foreground">
              Sponsored content is clearly labelled. Advertising and sponsorship do not determine or influence the classifications, status assessments or research conclusions presented in the CBDC World Tracker.
            </p>
          </div>
        </ContentSection>
      </div>

      <SponsorSection />
    </ContentPage>
  )
}
