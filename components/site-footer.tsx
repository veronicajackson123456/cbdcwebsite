import { Code2, ExternalLink, Mail, Send, UserRound } from "lucide-react"

const PUBLICATIONS = [
  {
    title: "Get Ready for the Future of Money",
    href: "https://www.bcg.com/en-nl/publications/2020/get-ready-for-the-future-of-money",
  },
  {
    title: "Central Bank Digital Currencies Need Decentralization",
    href: "https://www.coindesk.com/central-bank-digital-currencies-need-decentralization",
  },
]

const CONTRIBUTORS = [
  { name: "Igor Mikhalev", href: "https://www.linkedin.com/in/mikhalev/" },
  { name: "Igor Struchkov", href: "https://www.linkedin.com/in/igor-struchkov-7a4994163/" },
  { name: "John Kiff", href: "https://www.linkedin.com/in/kiffmeister/" },
  { name: "Kaj Burchardi", href: "https://www.linkedin.com/in/kaj-burchardi-b1030242/" },
  { name: "Jonas Gross", href: "https://www.linkedin.com/in/jonasgross94/" },
  { name: "Atakan Kavuklu", href: "https://www.linkedin.com/in/atakan-kavuklu-b37315179/" },
  { name: "Bihao Song", href: "https://www.linkedin.com/in/bihaosong/" },
  { name: "Gourav Roy", href: "https://www.linkedin.com/in/gourav-roy-6b5ab4a4/" },
  { name: "Arunabh Mishra", href: "https://ca.linkedin.com/in/arunabhmishra" },
]

const ORGANIZATIONS = [
  { name: "BCG", href: "https://www.bcg.com/" },
  { name: "BCG Platinion", href: "https://bcgplatinion.com/" },
  { name: "EY", href: "https://www.ey.com/" },
  { name: "DEA (Digital Euro Association)", href: "https://home.digital-euro-association.de/en" },
  { name: "Firmshift", href: "http://firmshift.com/" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border/80">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-foreground">Publications</h2>
            <ul className="mt-3 flex flex-col gap-2">
              {PUBLICATIONS.map((pub) => (
                <li key={pub.href}>
                  <a
                    href={pub.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-start gap-1.5 text-xs leading-relaxed text-muted-foreground hover:text-foreground"
                  >
                    {pub.title}
                    <ExternalLink className="mt-0.5 size-3 shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-foreground">Source</h2>
            <a
              href="https://github.com/liquifi-org/cbdc-tracker"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground"
            >
              <Code2 className="size-3.5" />
              Github
            </a>

            <h2 className="mt-6 text-xs font-semibold uppercase tracking-wide text-foreground">Contacts</h2>
            <div className="mt-3 flex flex-col gap-2">
              <a
                href="mailto:hello@cbdctracker.org"
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground"
              >
                <Mail className="size-3.5" />
                hello@cbdctracker.org
              </a>
              <a
                href="https://t.me/joinchat/zyy_CB7AEMtkODlk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground"
              >
                <Send className="size-3.5" />
                Telegram chat
              </a>
            </div>
          </div>

          <div className="sm:col-span-2">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-foreground">Key contributors</h2>
            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3">
              {CONTRIBUTORS.map((person) => (
                <li key={person.href}>
                  <a
                    href={person.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground"
                  >
                    <UserRound className="size-3.5 shrink-0" />
                    {person.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-border/60 pt-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-foreground">Contributing Organizations</h2>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {ORGANIZATIONS.map((org) => (
              <a
                key={org.href}
                href={org.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-muted-foreground hover:text-foreground"
              >
                {org.name}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>MIT License, free for reproduction and distribution</p>
          <p className="font-mono">CBDC Tracker © 2021-2023</p>
        </div>
      </div>
    </footer>
  )
}
