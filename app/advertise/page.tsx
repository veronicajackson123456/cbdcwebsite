import type { Metadata } from "next"
import { Mail } from "lucide-react"
import { ContentPage, ContentSection, InfoCard } from "@/components/content-page"
import { Button } from "@/components/ui/button"
import { companyDetails } from "@/lib/company-details"

export const metadata: Metadata = {
  title: "Advertise or Sponsor — CBDC LLC",
  description:
    "Request a quote for display advertising, clearly labelled sponsored articles, and custom sponsorship packages from CBDC LLC.",
}

const opportunities = [
  {
    label: "Display advertising",
    title: "Display placements",
    description:
      "Display placements on relevant site pages are available by request. Format, placement, creative requirements, schedule, availability and any reporting are agreed in writing before a campaign begins. No traffic or performance is guaranteed.",
  },
  {
    label: "Sponsored articles and content",
    title: "Clearly disclosed partnerships",
    description:
      "Request a quote for relevant sponsored articles, explainers or other written resources. Accepted paid content will be clearly labelled as Sponsored or Advertisement and will identify the sponsor. Sponsorship does not influence CBDC World Tracker classifications, status assessments, methodology or research conclusions.",
  },
  {
    label: "Custom sponsorship packages",
    title: "A scope tailored to your proposal",
    description:
      "Request a quote for a package combining available display placements and clearly labelled sponsored content. Scope, formats, schedule, approval process and any reporting are agreed in writing. All proposals are subject to review and availability.",
  },
]

const advertiserTerms = [
  {
    label: "Content standards",
    title: "Accurate, lawful and relevant",
    description:
      "Advertising and sponsored material must be lawful, accurate, substantiated, rights-cleared and appropriate for an independent information resource. CBDC LLC may request supporting evidence and may decline or remove material that is misleading, unlawful or unsuitable.",
  },
  {
    label: "Disclosure and independence",
    title: "Readers can identify paid content",
    description:
      "Paid content will carry a clear Sponsored or Advertisement label and identify the sponsor. Advertisers cannot buy or direct tracker classifications, status assessments, research methodology or editorial conclusions. CBDC LLC retains editorial control.",
  },
  {
    label: "Review and approval",
    title: "Written approval before publication",
    description:
      "Enquiries should include the advertiser identity, proposed material, supporting evidence, destination links, requested placement and schedule. Publication requires written acceptance and approval of the final copy and creative. An enquiry alone does not reserve inventory or constitute approval.",
  },
  {
    label: "Pricing and payment",
    title: "Agreed case by case",
    description:
      "Pricing, currency, deliverables, invoice timing, due dates, taxes, cancellation and any refund terms are set out in a written proposal or agreement. Request a quote for current pricing; campaign scope and terms are confirmed individually in writing.",
  },
]

export default function AdvertisePage() {
  return (
    <ContentPage
      eyebrow="Commercial opportunities"
      title="Advertise or Sponsor"
      intro="CBDC LLC offers display advertising, clearly labelled sponsored content, and custom sponsorship packages to organizations whose products or services are relevant to our readers. Request a quote for availability and terms."
    >
      <ContentSection title="Rate card">
        <p>
          Rates are available on request. Availability, scope, deliverables and campaign terms are confirmed individually in writing.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {opportunities.map((opportunity) => (
            <InfoCard
              key={opportunity.label}
              label={opportunity.label}
              title={opportunity.title}
            >
              <p>{opportunity.description}</p>
              <Button
                className="mt-4"
                render={
                  <a
                    href={`mailto:${companyDetails.email}?subject=${encodeURIComponent("Quote request: " + opportunity.label)}`}
                    aria-label={`Request a quote for ${opportunity.label}`}
                  />
                }
                nativeButton={false}
              >
                <Mail data-icon="inline-start" />
                Request a Quote
              </Button>
            </InfoCard>
          ))}
        </div>
      </ContentSection>

      <div id="advertiser-terms" className="scroll-mt-24">
        <ContentSection title="Advertiser terms">
          <p className="mb-4 text-xs text-muted-foreground">Last updated: 28 October 2026</p>
          <div className="grid gap-4 md:grid-cols-2">
            {advertiserTerms.map((term) => (
              <InfoCard key={term.label} label={term.label} title={term.title}>
                <p>{term.description}</p>
              </InfoCard>
            ))}
          </div>
        </ContentSection>
      </div>

      <ContentSection title="Commercial enquiries">
        <p>
          To discuss a proposal, email {companyDetails.email}. CBDC LLC will review the request and confirm any accepted scope, pricing, approvals and payment arrangements in writing.
        </p>
        <Button
          className="mt-4"
          render={<a href={`mailto:${companyDetails.email}`} />}
          nativeButton={false}
        >
          <Mail data-icon="inline-start" />
          {companyDetails.email}
        </Button>
      </ContentSection>
    </ContentPage>
  )
}
