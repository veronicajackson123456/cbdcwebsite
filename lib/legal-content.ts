import { companyContactDetails } from "@/lib/company-details"

export type LegalSection = {
  heading: string
  paragraphs?: string[]
  bullets?: string[]
  paragraphsAfterBullets?: string[]
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
    description: "How CBDC LLC handles personal information when you browse the Site or contact us.",
    category: "Privacy and data",
    lastUpdated: "28 October 2026",
    sections: [
      { heading: "Who we are", paragraphs: ["This policy explains how CBDC LLC (\"we\", \"us\") handles personal information when you visit cbdc.ac (the \"Site\") or contact us.", "CBDC LLC is a Wyoming limited liability company, Filing ID 2026-002064943. Registered address: 5830 E 2nd St, Ste 7000 #38378, Casper, WY 82609, USA. Operating address: 1875 Mission Street, Ste 103, San Francisco, CA 94103, USA.", "We are the controller of the personal information described in this policy. You can contact us about privacy at info@cbdc.ac."] },
      { heading: "Information we collect", paragraphs: ["When you email us, we receive your email address, any name you give, the content of your message and any attachments.", "When you browse the Site, our hosting provider automatically processes technical information needed to deliver and protect the Site, including your IP address, browser and device type, pages requested, referring page, and date and time of your visit.", "We use privacy-focused analytics that count page views and report aggregate information such as referring sites, device type, browser and approximate country. These analytics do not use cookies and do not identify you personally.", "The Site has no user accounts, sign-in, newsletter or contact form. We do not ask for payment details. We do not knowingly collect special category data, and we ask that you do not send it to us."] },
      { heading: "How we use your information", paragraphs: ["We use personal information only to:"], bullets: ["Reply to your enquiries, including correction, accessibility and commercial enquiries.", "Deliver, secure, maintain and fix the Site.", "Understand, in aggregate, how the Site is used so we can improve it.", "Comply with our legal obligations and protect our rights."], paragraphsAfterBullets: ["We do not use your information for automated decision-making or profiling."] },
      { heading: "Legal bases (UK and EU visitors)", paragraphs: ["Where the UK GDPR or EU GDPR applies, we rely on legitimate interests in responding to enquiries and operating, securing and improving the Site; contract where you contact us about advertising or sponsorship and we take steps towards an agreement; legal obligation where we must keep or disclose information by law; and consent where we ask for it, such as before loading embedded video. You can withdraw consent at any time."] },
      { heading: "Who we share information with", paragraphs: ["We do not sell or rent personal information. We do not share personal information for cross-context behavioural advertising, as that term is used in California law.", "Vercel provides website hosting, security and cookieless analytics. Namecheap Private Email hosts email for info@cbdc.ac. jsDelivr delivers the map boundary file used by the World Tracker. The CBDC Tracker API at cbdctracker.org supplies currency, country and news data, including some news images. Google / YouTube provides embedded video only after you click to play.", "We may disclose information where required by law, to a court or regulator, or to protect our rights, our users or the public. The Site does not use advertising networks, ad tracking pixels or targeted advertising. Sponsored content is labelled and does not involve sharing your personal information with sponsors."] },
      { heading: "Cookies, browser storage and embedded content", paragraphs: ["We do not set cookies for analytics or advertising.", "If you use the Watchlist, your selected projects are saved in your own browser's local storage. This stays on your device and is not sent to us. You can delete it by clearing the Site's data in your browser.", "Videos are shown as a placeholder. The YouTube player, served in privacy-enhanced mode, loads only when you click to play. When it loads, YouTube may set its own cookies and receive information about your device and viewing. YouTube's privacy policy then applies.", "When you view the World Tracker map or news images, your browser requests files directly from jsDelivr and the image host. Those providers receive standard connection information such as your IP address."] },
      { heading: "Links to other websites", paragraphs: ["The Site links to official and third-party sources. We are not responsible for their privacy practices. Check their policies before giving them information."] },
      { heading: "How long we keep information", paragraphs: ["We keep personal information only as long as we need it: emails and enquiries for 24 months after our last contact, unless they relate to a contract or dispute, in which case for 6 years after it ends; hosting logs for the period set by our hosting provider; aggregate analytics according to provider settings; and Watchlist data on your device until you delete it."] },
      { heading: "International transfers", paragraphs: ["We are based in the United States, and our providers may process information in the United States and other countries. Where UK or EU personal information is transferred to a country without an adequacy decision, we rely on appropriate safeguards, including the European Commission's Standard Contractual Clauses, the UK International Data Transfer Addendum, or a provider's certification under the EU-US Data Privacy Framework and its UK Extension, where available. Contact us for more information."] },
      { heading: "Security", paragraphs: ["We use reputable providers and reasonable technical and organisational measures to protect personal information, including encrypted (HTTPS) connections. No method of transmission or storage is completely secure."] },
      { heading: "Your rights", paragraphs: ["Depending on where you live, you may have the right to access, correct, delete, restrict or object to our use of personal information, receive a copy in a portable format, and withdraw consent where we rely on it.", "California residents have the right to know, delete and correct personal information, and to opt out of its sale or sharing. We do not sell or share personal information. We will not discriminate against you for exercising your rights.", "To exercise a right, email info@cbdc.ac and tell us which right and what information it concerns. We may need to verify your identity. We will respond within the time required by applicable law. You can complain to your data protection regulator. In the UK this is the Information Commissioner's Office (ico.org.uk); in the EU it is the supervisory authority in your country. We would appreciate the chance to deal with your concern first."] },
      { heading: "Children", paragraphs: ["The Site is a general information resource and is not directed at children under 16. We do not knowingly collect their personal information. If you believe a child has sent us information, contact info@cbdc.ac and we will delete it."] },
      { heading: "Changes to this policy", paragraphs: ["We may update this policy when our services or the law change. The Last updated date at the top shows when it was last revised. Significant changes will be highlighted on this page."] },
      { heading: "Contact", paragraphs: ["CBDC LLC, 1875 Mission Street, Ste 103, San Francisco, CA 94103, USA. Email: info@cbdc.ac."] },
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
        heading: "How this site uses cookies and browser storage",
        paragraphs: [
          "CBDC LLC does not set cookies for analytics or advertising. The Site has no account or sign-in system.",
          "If you use the Watchlist, your selected projects are saved in your browser's local storage. This stays on your device and is not sent to us. You can remove it by clearing the Site's data in your browser.",
          "Vercel Analytics is cookieless and reports aggregate information about visits and page views, such as referring sites, device type, browser and approximate country. It does not identify you personally.",
        ],
      },
      {
        heading: "Embedded video and third-party requests",
        paragraphs: [
          "Videos are initially shown as a placeholder. The YouTube player loads only when you click to play and is served in privacy-enhanced mode from youtube-nocookie.com. When it loads, YouTube may set its own cookies and receive information about your device and viewing. YouTube's privacy policy applies to that player.",
          "The World Tracker map and news images are requested from third-party providers. Those providers receive standard connection information, such as your IP address and the requested resource. These requests are necessary to display the relevant map data and images.",
        ],
      },
      {
        heading: "Your choices",
        paragraphs: [
          "There is no cookie banner or consent manager on the Site. You can clear browser storage, block third-party cookies, or restrict embedded content using your browser settings. Blocking cookies may not prevent a third-party resource from receiving the initial request after you choose to load it.",
        ],
      },
      {
        heading: "Questions",
        paragraphs: ["For questions about this policy, contact info@cbdc.ac."],
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
