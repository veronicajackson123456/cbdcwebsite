import { companyContactDetails } from "@/lib/company-details"

export type LegalSection = {
  heading: string
  paragraphs?: string[]
  bullets?: string[]
}

export type LegalDocument = {
  slug: string
  title: string
  description: string
  category: string
  lastUpdated?: string
  sections: LegalSection[]
}

const contact = companyContactDetails

export const legalDocuments: LegalDocument[] = [
  {
    slug: "privacy",
    title: "Privacy Policy",
    description: "How CBDC LLC handles information when you browse, contact us, or use our research tools.",
    category: "Privacy and data",
    lastUpdated: "28 October 2026",
    sections: [
      {
        heading: "Scope and company information",
        paragraphs: [
          "This policy describes the information involved when you browse CBDC LLC's public research site, use its browser-based watchlist, or contact the company. It does not govern external sites you choose to visit.",
          contact,
        ],
      },
      {
        heading: "Information this site handles",
        paragraphs: [
          "If you email us, we receive the sender address, any name you include, the message, attachments, and email headers needed to respond. This project has no account, sign-in, contact form, newsletter signup, or working email-alert signup. The watchlist interface saves project tags in your browser and does not transmit those tags to the site's API. Its email-alert area states that alerts are unavailable and does not collect an address.",
          "The hosting platform may process technical request information such as your IP address, requested URL, request time, browser and device headers, referrer, and security or error signals to deliver and protect pages.",
        ],
      },
      {
        heading: "Hosting and service providers",
        paragraphs: [
          "Vercel provides hosting for this website and may process connection and request information needed to deliver, secure, and maintain it. Hosting-log retention depends on the active Vercel account, plan, and settings.",
          "The site requests public currency, country, history, and news data from the CBDC Tracker API at cbdctracker.org/api. The current code makes those requests from the app server. The API provider receives server request metadata, but the site does not forward a visitor's browser IP address, email, or watchlist to that API in this code path.",
          "Public MX records for cbdc.ac point to mx1.privateemail.com and mx2.privateemail.com, the routing used by Namecheap Private Email. When you email info@cbdc.ac, that mail provider handles the message and recipient address. Mailbox settings and retention are not visible in the website source.",
        ],
      },
      {
        heading: "Analytics",
        paragraphs: [
          "The source includes @vercel/analytics/next and renders Vercel Analytics only when the application runs in production mode. The currently live public site was observed requesting its Insights script through the same-origin path /_vercel/insights/script.js. No custom analytics events or separate advertising analytics SDK were found in this project. Vercel describes Web Analytics as cookieless and uses a transient, request-derived visitor identifier that changes daily to report page views and aggregate referrer, device, browser, and location information. Analytics-event retention is controlled by the Vercel account, plan, and project settings; the active production settings could not be confirmed here.",
        ],
      },
      {
        heading: "Browser storage, video, maps, and images",
        paragraphs: [
          "The watchlist stores selected project tags in the browser's localStorage under the cbdc-watchlist key. This is functional browser storage, not a cookie; it remains until you remove the entries or clear this site's browser data. The current watchlist code does not transmit those saved tags to the site's server.",
          "The interactive map requests a static country-boundary file from cdn.jsdelivr.net when the map is displayed. This is a direct browser request, so the CDN receives ordinary connection metadata such as IP address, browser information, and referrer. The map uses static boundaries; the site does not request device geolocation or map tiles.",
          "Pages with an embedded YouTube video load the player from youtube-nocookie.com in YouTube's Privacy Enhanced Mode. This mode reduces personalization based on embedded views, but it does not prevent the player from making a third-party request or receiving connection, browser/device, referrer, and playback information. The iframe is lazy-loaded but is not gated by an on-site consent control; YouTube may use its own cookies or storage under its policies.",
          "Some news records include image URLs supplied with the source data. The current live site serves thumbnails directly from cbdctracker.org/images; this project also loads feed-supplied image URLs directly in the browser, so the image host receives ordinary request metadata such as IP address, browser/device information, and the requested image path. The host may vary if feed data changes. External source links otherwise receive a request only if you choose to open them.",
        ],
      },
      {
        heading: "Purposes and legal basis",
        bullets: [
          "Respond to email enquiries, correction reports, and accessibility requests.",
          "Deliver, secure, maintain, and troubleshoot the website and its public research tools.",
          "Understand broad site usage through production Vercel Analytics.",
          "Meet legal obligations and protect the service, its users, and the company's rights.",
        ],
        paragraphs: [
          "Where privacy law requires a legal basis, it depends on the purpose and jurisdiction, including responding to a request, operating and securing the site where legitimate interests are permitted, or meeting a legal obligation. This project does not currently implement an on-site cookie-consent banner or preference center. The embedded video and other third-party requests are not gated by such a control; if your jurisdiction requires prior consent for a particular service, this implementation has not been configured to collect it.",
        ],
      },
      {
        heading: "Retention and sharing",
        paragraphs: [
          "The website source does not set a mailbox storage or deletion period. The mailbox provider and account settings govern retention, and no fixed period could be verified from this project. The browser watchlist remains until you clear it. Vercel hosting logs and analytics are retained according to the live provider account and plan settings. Third-party providers apply their own retention terms to requests they receive.",
          "CBDC LLC does not sell or rent personal information. The code reviewed contains no advertising network, ad pixel, or targeted-advertising SDK. Information may be processed by the hosting and analytics provider, the email service, and the video, map-CDN, and article-image providers described above. Providers may process information in countries other than your own; the exact locations and account-level safeguards are controlled by their services and could not be verified from this repository.",
        ],
      },
      {
        heading: "Your privacy rights",
        paragraphs: [
          "Depending on your location and applicable law, you may be able to request access to, correction of, deletion of, restriction of, or a copy of personal information; object to certain processing; withdraw consent where processing relies on consent; or complain to a privacy regulator. Send requests or questions to info@cbdc.ac and identify the right or information involved. We may request information needed to verify a request and will respond as required by applicable law.",
        ],
      },
      {
        heading: "Children",
        paragraphs: [
          "The site is a general information resource and is not designed to collect information from children. Please contact info@cbdc.ac if you believe a child has sent personal information to the company.",
        ],
      },
    ],
  },
  {
    slug: "terms",
    title: "Terms of Use",
    description: "The rules for using the information, research, and tools provided by CBDC LLC.",
    category: "Website terms",
    lastUpdated: "28 October 2026",
    sections: [
      { heading: "Agreement and purpose", paragraphs: ["By using this service, you agree to these Terms of Use. The service provides general educational and research information about central bank digital currencies; it is not a financial, investment, legal, tax, or professional advisory service."] },
      { heading: "Permitted use", paragraphs: ["You may browse, quote, and share reasonable extracts for lawful, non-deceptive purposes with clear attribution. You must not misrepresent our research, imply endorsement, or use the service in a way that could damage its availability or security."] },
      { heading: "Your responsibilities", bullets: ["Use the service in compliance with applicable law.", "Do not attempt unauthorised access, interference, probing, or circumvention of security controls.", "Do not submit malicious code, unlawful material, or another person’s personal information without authority.", "Do not make abusive or disproportionate automated requests."] },
      { heading: "Content and availability", paragraphs: ["Research is prepared from public and third-party sources and may contain errors, omissions, delays, or classifications that change as evidence develops. We may update, suspend, or remove features without guaranteeing uninterrupted availability."] },
      { heading: "Intellectual property and external resources", paragraphs: ["Original content and presentation belong to their respective rights holders. Third-party names, marks, data, and linked material remain the property of their owners. External resources are provided for convenience and are not controlled or endorsed merely because they are referenced."] },
      { heading: "Governing law and venue", paragraphs: ["These Terms and any non-contractual obligations arising from them are governed by the laws of the State of Wyoming, United States, without regard to its conflict-of-laws rules, except to the extent mandatory law in your jurisdiction applies.", "Subject to mandatory law, you and CBDC LLC agree to the exclusive jurisdiction and venue of the state and federal courts of competent jurisdiction located in Wyoming for disputes arising out of or related to these Terms or the service. Nothing in this clause limits a right or remedy that cannot lawfully be waived."] },
      { heading: "Changes and contact", paragraphs: ["We may revise these terms when the service or legal requirements change. The latest version will be published on this page. Questions may be sent to info@cbdc.ac."] },
    ],
  },
  {
    slug: "cookies",
    title: "Cookie Policy",
    description: "A clear explanation of the cookies, browser storage, analytics, and third-party requests used by the site.",
    category: "Privacy and data",
    lastUpdated: "28 October 2026",
    sections: [
      {
        heading: "What the code currently uses",
        paragraphs: [
          "The code reviewed does not set a first-party cookie or provide a sign-in/session system. It uses browser localStorage for the watchlist, includes Vercel Analytics only in production, embeds YouTube video, and loads map and article-image resources from other providers. The currently live public site requests Vercel's Insights script through the same-origin path /_vercel/insights/script.js.",
        ],
      },
      {
        heading: "Functional browser storage",
        paragraphs: [
          "The watchlist stores selected project tags in localStorage under the cbdc-watchlist key so your list can persist in that browser. It is not a cookie and remains until you remove the tags or clear this site's browser data. Clearing it removes the saved watchlist.",
        ],
      },
      {
        heading: "Analytics",
        paragraphs: [
          "Vercel Analytics is rendered only in production mode. The currently live public site requests its Insights script through the same-origin path /_vercel/insights/script.js. Vercel describes Web Analytics as cookieless and uses a transient, request-derived visitor identifier that changes daily for aggregate visitor and page-view reporting. Analytics-event retention depends on the active Vercel account, plan, and settings; no on-site analytics preference control is implemented in this project.",
        ],
      },
      {
        heading: "Third-party video, map data, and images",
        bullets: [
          "The YouTube iframe is loaded lazily from youtube-nocookie.com in Privacy Enhanced Mode and is not gated by an on-site consent control. The mode reduces personalization from embedded views, but is not a promise of zero data processing or zero cookies; YouTube may receive connection, browser/device, referrer, and playback information and may use its own storage under its policies.",
          "The interactive map fetches static boundary data from cdn.jsdelivr.net directly in the browser. This is a third-party request, not a cookie; the CDN receives ordinary connection metadata. The map does not use device geolocation or map tiles.",
          "News thumbnails on the current live site are served directly from cbdctracker.org/images. The browser requests these image URLs directly, so the image host receives standard connection metadata and the requested image path; the host may vary if the upstream feed changes. This is a third-party content request, not a cookie.",
        ],
      },
      {
        heading: "Advertising technologies",
        paragraphs: [
          "The project source contains no automated advertising network, ad pixel, or targeted-advertising SDK. Advertising and sponsorship opportunities described on this site do not by themselves load an advertising tracker.",
        ],
      },
      {
        heading: "Your controls",
        paragraphs: [
          "There is currently no on-site cookie banner, consent manager, or preference center. You can use browser settings to clear this site's localStorage and cookies, block third-party cookies, or restrict embedded content. Clearing localStorage removes your watchlist. Blocking cookies alone may not prevent an iframe or external resource from making its initial network request. The site does not currently provide a per-provider opt-in control; if local law requires prior consent for a particular third-party request, this implementation has not been configured to obtain it.",
        ],
      },
      {
        heading: "Questions",
        paragraphs: ["For questions about this policy or a technology described here, contact info@cbdc.ac."],
      },
    ],
  },
  { slug: "disclaimer", title: "Disclaimer", description: "Important limits on the use of CBDC LLC research and educational material.", category: "Website terms", sections: [
    { heading: "General information only", paragraphs: ["The content is provided for education and general information. It does not constitute financial, investment, legal, tax, accounting, monetary-policy, or other professional advice, and it is not an offer or recommendation to buy, sell, hold, or use any financial product or service."] },
    { heading: "Accuracy and currency", paragraphs: ["We aim to present useful, attributed information, but public programmes change and source material can be incomplete, conflicting, translated, delayed, or withdrawn. A status, date, classification, or link should be independently checked before being used for a decision."] },
    { heading: "No affiliation", paragraphs: ["CBDC LLC is an independent information resource and is not affiliated with any central bank or government. References to organisations, products, programmes, or providers do not imply endorsement."] },
    { heading: "Use at your own judgement", paragraphs: ["You are responsible for assessing whether information is suitable for your circumstances and for obtaining professional advice when needed. To the extent permitted by law, CBDC LLC is not responsible for decisions made solely from general information on the service."] },
  ] },
  { slug: "research-methodology", title: "Research Methodology", description: "How the tracker approaches sources, classifications, updates, and uncertainty.", category: "Research and editorial", sections: [
    { heading: "Purpose", paragraphs: ["The tracker organises publicly available information about central bank digital currency initiatives so readers can compare broad stages and follow meaningful changes. It is a research aid, not an official registry."] },
    { heading: "Sources and verification", paragraphs: ["Sources may include official central bank, government, legislative, programme, technical, academic, and reputable reporting materials. We seek primary material where available, compare significant claims, record source links, and avoid treating a single unverified statement as conclusive."] },
    { heading: "External benchmarks and tracker totals", paragraphs: ["Atlantic Council country and currency-union figures are external benchmarks for the date stated by that source. They are not CBDC LLC’s count of individually tracked project records. The term ‘exploring’ covers multiple stages and should not be read as a live pilot or launch.", "Tracker totals are calculated from unique project tags in the connected live API feed. Status totals apply to project records. The map resolves joint project labels into unique country and territory names and excludes recognized currency-union or regional labels from that map-name count. External country and currency-union benchmarks use a different scope. We do not change records or classifications merely to force totals to match."] },
    { heading: "Classifications", paragraphs: ["Labels such as Research, Proof of concept, Pilot, Launched, and Cancelled are editorial classifications based on the available evidence. They simplify different national terminology and should not be read as legal or official designations."] },
    { heading: "Conflicting information and history", paragraphs: ["When sources disagree, the conflict may be noted or the most authoritative and recent evidence may be used with appropriate caution. Historical changes are recorded when the underlying information is available; a missing historical record does not mean that no earlier change occurred."] },
    { heading: "Limitations and updates", paragraphs: ["Coverage, timing, translations, source accessibility, and changing programme language create limitations. Records are updated as information is reviewed, without promising a fixed schedule. Readers can report an error or outdated item at info@cbdc.ac."] },
  ] },
  { slug: "editorial-policy", title: "Editorial Policy", description: "Standards for accuracy, attribution, independence, uncertainty, and review.", category: "Research and editorial", sections: [
    { heading: "Accuracy and attribution", paragraphs: ["We aim to describe evidence fairly, use precise language, link to relevant sources, and distinguish sourced facts from editorial explanation. We correct material errors when identified."] },
    { heading: "Independence and conflicts", paragraphs: ["Editorial decisions are intended to serve readers rather than a central bank, vendor, political group, or commercial interest. Any material conflict known to affect a published item should be disclosed or managed. Sponsored content is clearly labelled. Advertising and sponsorship do not determine or influence tracker classifications, status assessments, or research conclusions."] },
    { heading: "Fact, analysis, and uncertainty", paragraphs: ["Factual claims, interpretation, and opinion should be distinguishable from one another. Where evidence is incomplete or contested, the wording should reflect uncertainty rather than create false precision."] },
    { heading: "Review", paragraphs: ["Research records and explanatory pages may be reviewed when new evidence, a correction request, or a material change comes to attention. The depth and timing of review depends on the significance and verifiability of the issue."] },
  ] },
  { slug: "corrections-policy", title: "Corrections Policy", description: "How to report errors, outdated information, and broken references.", category: "Research and editorial", sections: [
    { heading: "Report an issue", paragraphs: ["Send a clear report to info@cbdc.ac with the page or record, the specific statement or link, what appears incorrect, and a reliable supporting source where possible. Reports about accessibility barriers are also welcome through the same address."] },
    { heading: "Review process", paragraphs: ["We may verify the report against primary material, compare other reliable sources, check the date and context, and contact the reporter for clarification. A report is not automatically accepted, and we do not promise a response time."] },
    { heading: "Material corrections", paragraphs: ["When a material error is confirmed, we may update the content, clarify the wording, repair the reference, add a note about the correction, or adjust an associated record. Minor typographical fixes may be made without a separate notice."] },
    { heading: "Good-faith requests", paragraphs: ["Please do not use the correction process to request favourable treatment or removal of accurate information. We consider evidence and editorial standards consistently."] },
  ] },
  { slug: "copyright", title: "Copyright & Intellectual Property", description: "Ownership, permitted reuse, attribution, and rights enquiries.", category: "Accessibility and intellectual property", sections: [
    { heading: "Our content", paragraphs: ["Unless stated otherwise, original text, arrangement, interface design, and other materials created for CBDC LLC are protected by applicable intellectual property law. Ownership of a particular asset should not be assumed where third-party material is identified."] },
    { heading: "Permitted reuse", paragraphs: ["You may link to pages and quote reasonable excerpts for commentary, education, or reporting with accurate attribution and without suggesting endorsement. Do not reproduce a substantial part of the database or republish content as your own without permission."] },
    { heading: "Third-party material", paragraphs: ["Logos, names, datasets, photographs, reports, video, and quoted material may belong to third parties and may be subject to separate licences or terms. Check the relevant source before copying or redistributing them."] },
    { heading: "Rights enquiries", paragraphs: ["For permission requests, attribution questions, or a rights concern, contact info@cbdc.ac with the material, your intended use, and your relationship to the rights holder where relevant."] },
  ] },
  { slug: "accessibility", title: "Accessibility Statement", description: "Our current accessibility approach, known limitations, and how to report a barrier.", category: "Accessibility and intellectual property", sections: [
    { heading: "Our approach", paragraphs: ["CBDC LLC aims to make its research readable and usable across common browsers, screen sizes, keyboard navigation, and assistive technologies. The interface uses semantic headings, labelled controls, responsive layouts, visible focus styles, and text alternatives where appropriate."] },
    { heading: "Known limitations", paragraphs: ["Accessibility can vary by page, browser, assistive technology, embedded third-party content, map interaction, and data visualisation. Some complex charts or external media may not provide an equivalent experience in every mode."] },
    { heading: "Report a barrier", paragraphs: ["Email info@cbdc.ac with the page, the barrier, the device or assistive technology involved if relevant, and an accessible alternative way to receive the information if you have one. We will use reports to guide improvements, but do not claim certification or conformance beyond what has been tested."] },
  ] },
  { slug: "external-links", title: "Third-Party Links & Sources", description: "How external references are used and what they mean for endorsement, privacy, and reliability.", category: "Accessibility and intellectual property", sections: [
    { heading: "Why we link", paragraphs: ["External links help readers inspect primary evidence, locate further research, verify a claim, or access a referenced organisation. A link is provided for information and does not by itself indicate approval, partnership, or endorsement."] },
    { heading: "Third-party control", paragraphs: ["External sites and embedded services have their own content, security, accessibility, privacy practices, cookies, and availability. We do not control changes made after a link is published and cannot guarantee that an external page remains accurate or accessible."] },
    { heading: "Sources and attribution", paragraphs: ["We aim to identify sources fairly and preserve useful references. A source may be official, academic, journalistic, technical, or otherwise relevant; readers should consider its authority, date, methodology, and context."] },
    { heading: "Broken or changed links", paragraphs: ["Report a broken, misleading, or materially changed reference to info@cbdc.ac. We may repair, replace, annotate, or remove it after review."] },
  ] },
  { slug: "acceptable-use", title: "Acceptable Use Policy", description: "Uses that protect the service, its users, and the integrity of its research.", category: "Website terms", sections: [
    { heading: "You may not use the service to", bullets: ["Break the law, facilitate fraud, harassment, abuse, or infringement of another person’s rights.", "Attempt unauthorised access, probe or bypass security, disrupt availability, or interfere with another user’s access.", "Upload or transmit malware, malicious code, destructive content, or credentials obtained without permission.", "Send abusive, deceptive, or disproportionate automated requests that impair the service.", "Scrape, copy, or republish substantial content in a way that violates applicable law or intellectual property rights."] },
    { heading: "Protecting the service", paragraphs: ["We may investigate suspected misuse, limit requests, suspend access to a feature, or preserve relevant information where reasonably necessary to protect the service, users, or legal rights. We do not promise to monitor every use or to provide advance notice in every circumstance."] },
    { heading: "Reporting misuse", paragraphs: ["Report suspected security or acceptable-use issues to info@cbdc.ac with enough detail to investigate safely. Do not include secrets or personal information that is not necessary."] },
  ] },
]

export const legalCentreCategories = [
  { title: "Website terms", slugs: ["terms", "disclaimer", "acceptable-use"] },
  { title: "Privacy and data", slugs: ["privacy", "cookies"] },
  { title: "Research and editorial standards", slugs: ["research-methodology", "editorial-policy", "corrections-policy"] },
  { title: "Accessibility and intellectual property", slugs: ["accessibility", "copyright", "external-links"] },
]

export function getLegalDocument(slug: string) {
  return legalDocuments.find((document) => document.slug === slug)
}
