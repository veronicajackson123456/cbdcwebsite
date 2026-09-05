import { FileDown } from "lucide-react"
import { StatusBadge } from "@/components/status-badge"
import { STATUS_LIST } from "@/lib/cbdc-api"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Whitepaper — CBDC Tracker",
  description: "The CBDC Tracker whitepaper: project goals, CBDC attributes, and platform components.",
}

// Exact status definitions as published on cbdctracker.org's dashboard filter panel.
const STATUS_DEFINITIONS: Record<(typeof STATUS_LIST)[number], string> = {
  Cancelled: "Countries that cancelled or decommissioned a CBDC.",
  Research: "Countries that have conducted first explanatory CBDC research.",
  "Proof of concept": "Countries that are in an advanced research stage and have published a CBDC proof of concept.",
  Pilot:
    "Countries that have developed a CBDC that is tested in a real environment either with a limited number of parties or on a wide scale.",
  Launched: "Countries that officially fully launched a CBDC.",
}

// Attribute list reproduced from Section 3, "Attributes of CBDC", of the CBDC Tracker whitepaper.
const ATTRIBUTES = [
  { name: "Country/Region", body: "Name of a country or a region where a certain CBDC project has been started." },
  { name: "Announcement Year", body: "Year of the first mentioning of a CBDC project." },
  { name: "Central Bank(s)", body: "Name of a central bank or central banks responsible for a CBDC project." },
  { name: "Digital Currency", body: "Name of a digital currency (may be unknown for some projects)." },
  { name: "Status", body: "Current (or historic) status of a CBDC." },
  {
    name: "Retail/Wholesale",
    body: "A CBDC can be either wholesale (e.g. for interbank transactions only) or retail (intended to be used by the end user).",
  },
  { name: "Structure", body: "A CBDC can be either stored as a token or as an account." },
  { name: "Technology", body: "Name of a technological platform behind a CBDC." },
  { name: "Programmability", body: "Does a CBDC support programmable logic (e.g. smart contracts)." },
  { name: "Interoperability", body: "Does a CBDC support integration with other digital currencies." },
  {
    name: "Governance structure",
    body: "Who has rights to control a CBDC (can be a central bank, a consortium, etc.)",
  },
  { name: "Centralization", body: "Is a CBDC based on centralized or decentralized principles." },
  { name: "DLT / non-DLT", body: "Is a CBDC built on top of distributed ledger technology (DLT)." },
  {
    name: "Main motivation/goals of the CBDC",
    body: "Reason why a certain central bank or government has started a CBDC project.",
  },
  { name: "Remuneration", body: "Is a CBDC interest-bearing or non interest-bearing." },
  { name: "International access", body: "Does a CBDC allow to be accessed from outside a country it has been issued by." },
  { name: "Caps/Limits", body: "Are there any limits (e.g. cap on CBDC holdings) connected to a CBDC." },
  { name: "Emission amount", body: "Current amount of emission if available." },
  { name: "Offline payments", body: "Does a CBDC support offline payments." },
  { name: "Anonymity", body: "Does a CBDC support anonymous transactions." },
  { name: "Distribution", body: "A distribution scheme or principles of a CBDC." },
  { name: "Link to announcement", body: "A URL of where a CBDC has been announced." },
  { name: "Link to site of project", body: "A URL of an official website of a CBDC (if available)." },
  { name: "Links to social networks", body: "URLs of official social network pages of a CBDC (if available)." },
  { name: "Description", body: "A free-form description of a CBDC." },
]

// Sections reproduced from the CBDC Tracker whitepaper (Mikhalev, Burchardi, Struchkov, Song, Gross — January 2021).
const SECTIONS = [
  {
    title: "Abstract",
    body: "Numerous countries are investigating and implementing their own versions of central bank digital currencies (CBDC). CBDC represent a new form of electronic money that, unlike well-known cryptocurrencies, are issued by central banks of certain countries. CBDC 2.0 is the second step in the evolution of CBDC issued digitally by one or many central banks using blockchain technology, interoperable and programmable by design. News and updates in this area arrive every day from different sources. It makes a hard task for economists or enthusiasts to track the status and analyze historic trends. CBDC Tracker is an open-source project aimed at providing a comprehensive information resource for world CBDC initiatives. CBDC Tracker components are: Dashboard, CBDC Information Card, Timelines and Time Slider, News Aggregator, Watchlist Tool.",
  },
  {
    title: "Goals of the CBDC Tracker Project",
    body: "CBDC Tracker is a web resource that is intended to become a central point to access information about CBDC in different countries. By collecting the information from several sources and presenting it in a structured way, CBDC Tracker makes it easier for a wide audience to stay tuned to the latest news in the world of CBDC. The project also strives to popularize the idea of CBDC and thus make one more step towards the future of money.\n\nCBDC Tracker not only depicts the current view of digital currencies status in different countries, but also provides a historical perspective on how the process evolved. The data used by the project is continuously updated, both manually and automatically. Any user can also subscribe to receive news and updates as soon as they arrive.\n\nIt is worth mentioning that the CBDC Tracker Web App is an open-source project. With this, CBDC Tracker is open for collaboration and contribution to share knowledge and technology for the benefit of the whole community.",
  },
  {
    title: "Dashboard",
    body: "The dashboard is what you see first when you open the CBDC Tracker website. The main components of the dashboard are: a world map with colors showing the current CBDC status in each country, a data table that supports sorting and controlling visible columns, a filters panel, latest news, and a time slider.\n\nThe data table is the main component of the dashboard. It contains data rows for each CBDC with configurable columns. Some of the columns are fixed and cannot be hidden: Digital Currency, Country/Region, Central Bank(s), Announcement Year, Status, Update rate.\n\nThe Update rate column is a graphical representation of a CBDC activity for the last 12 months. It is in a form of a bar chart where each bar represents the monthly activity (the number of news plus the number of updates) for a CBDC.",
  },
  {
    title: "CBDC Information Card",
    body: "Each CBDC has its own page, accessible from the dashboard when you click on any row in the data table. On the CBDC page you can see: a complete list of CBDC attributes, news related to this CBDC, and a timeline.",
  },
  {
    title: "Time Dimension",
    body: "The internal data model of CBDC Tracker is not just a static list of digital currencies and their attributes. Instead, it comprises a series of updates where for each attribute value there is a corresponding timestamp (month and year). This structure gives us the possibility to attach time dimensions to all the depicted results and shows how CBDC adoption evolves throughout the world.\n\nFor every CBDC, we can view a detailed timeline where data updates and especially status changes are visually placed on the time axis. We can see when a story of a certain CBDC begins and what happened to it until today.\n\nAnother interesting feature is the time slider control. By using it, you can drag the time thumb to anywhere in the past and immediately see the picture (the world map and the data table) at this point of time.",
  },
  {
    title: "News Aggregator",
    body: "News are regularly uploaded to CBDC Tracker from multiple open sources. Depending on the approach that is used by the source (static pages, REST API, GraphQL, etc.) the corresponding news iterator is selected. The algorithm loops through the latest news until it finds an article that has already been handled during the previous invocation.\n\nThe new articles are then processed by the news data extractors, which are configured according to the source article page structure. News general data, such as title, date, abstract, etc., along with its URL and source is then stored to the CBDC Tracker database. The extracted data is also labeled with currency tags, which is currently done by searching for CBDC related keywords within an article content. A news item can be related to several digital currencies.",
  },
  {
    title: "Watchlist Tool",
    body: "The watchlist tool allows you to select one or more CBDCs of interest by clicking on star icons in the data table. Then you can open the Watchlist page and see information for only the selected CBDCs. Watchlist is stored in your browser. When you return to the site, you can use the same watchlist.",
  },
  {
    title: "Integrating with CBDC Tracker as a Data Source",
    body: "CBDC Tracker provides an API that can be used by external resources to access CBDC-related data. With this API, CBDC Tracker can serve as a common data source for financial analytics or content resources. The main advantages when using the CBDC Tracker API include timely updates of data and news, historic data views, consistent data structure, and data preparation with built-in algorithms that will evolve in further versions.\n\nThe CBDC Tracker API includes the following endpoints: digital currencies data retrieval API, news feed API, and timeline API. API specifications are available at the CBDC Tracker GitHub project.",
  },
]

export default function WhitepaperPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-3">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">Whitepaper</h1>
        <p className="text-sm leading-relaxed text-muted-foreground">
          CBDC Tracker — Igor Mikhalev, Kaj Burchardi, Igor Struchkov, Bihao Song, Jonas Gross. January 2021.
        </p>
        <a
          href="https://cbdctracker.org/cbdc-tracker-whitepaper.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground hover:bg-accent"
        >
          <FileDown className="size-3.5" />
          Download the original whitepaper (PDF)
        </a>
      </div>

      <div className="flex flex-col gap-4">
        {SECTIONS.map((section) => (
          <Card key={section.title}>
            <CardHeader>
              <CardTitle className="text-base">{section.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">{section.body}</p>
            </CardContent>
          </Card>
        ))}

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Attributes of CBDC</CardTitle>
            <CardDescription>
              Though different CBDC projects significantly vary in purpose, structure, technology, and other
              parameters, the following list of common attributes is used to filter or partition CBDCs into several
              classes.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            {ATTRIBUTES.map((attr) => (
              <div key={attr.name} className="flex flex-col gap-0.5">
                <p className="text-sm font-medium text-foreground">{attr.name}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{attr.body}</p>
              </div>
            ))}
          </CardContent>
        </Card>

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
