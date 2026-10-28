export function SponsorSection() {
  return (
    <section id="advertising" aria-labelledby="advertising-heading" className="scroll-mt-24">
      <div className="grid gap-5 rounded-2xl border border-border/80 bg-card/50 p-5 sm:p-6 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:items-start md:gap-8 lg:p-8">
        <h2 id="advertising-heading" className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          Advertise or Sponsor
        </h2>
        <div className="grid gap-3 text-sm leading-7 text-muted-foreground">
          <p>
            CBDC LLC offers display advertising and sponsored content opportunities to organisations whose products or services are relevant to our readers.
          </p>
          <p>
            Sponsored content is clearly labelled. Advertising and sponsorship do not determine or influence the classifications, status assessments or research conclusions presented in the CBDC World Tracker.
          </p>
          <p>
            Commercial enquiries:{" "}
            <a className="font-medium text-primary underline-offset-4 hover:underline" href="mailto:info@cbdc.ac">
              info@cbdc.ac
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
