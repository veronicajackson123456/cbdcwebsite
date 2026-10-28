export const companyDetails = {
  name: "CBDC LLC",
  filingId: "2026-002064943",
  founderName: "Tristan Marsh",
  founderTitle: "Founder and Managing Member",
  email: "info@cbdc.ac",
  registeredAddress: {
    line1: "5830 E 2nd St, Ste 7000 #38378",
    line2: "Casper, WY 82609, USA",
  },
  operatingAddress: {
    line1: "1875 Mission Street, Ste 103",
    line2: "San Francisco, CA 94103",
  },
} as const

export const companyContactDetails = [
  `${companyDetails.name}, Company / Filing ID: ${companyDetails.filingId}.`,
  `Registered address: ${companyDetails.registeredAddress.line1}, ${companyDetails.registeredAddress.line2}.`,
  `Operating address: ${companyDetails.operatingAddress.line1}, ${companyDetails.operatingAddress.line2}.`,
  `Contact: ${companyDetails.email}.`,
].join(" ")

export const independentResourceDisclaimer =
  "CBDC LLC is an independent information resource. It is not affiliated with any central bank or government. Content is general information, not financial, investment or legal advice."

export const nonIssuerDisclaimer =
  "CBDC LLC does not issue, sell, exchange, hold or transmit digital currency, cryptoassets or tokens, and does not handle client funds."
