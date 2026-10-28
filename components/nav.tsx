"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Landmark, Menu, Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

type NavLinkItem = {
  href: string
  label: string
  description: string
}

type NavGroup = {
  label: string
  links: NavLinkItem[]
}

const LEGAL_LINK: NavLinkItem = {
  href: "/legal",
  label: "Legal Centre",
  description: "Policies, standards, and practical information.",
}

const NAV_GROUPS: NavGroup[] = [
  {
    label: "Learn",
    links: [
      { href: "/what-is-a-cbdc", label: "What is a CBDC?", description: "Start with the fundamentals." },
      { href: "/the-debate", label: "The Debate", description: "Explore the main questions and perspectives." },
      { href: "/getting-ready", label: "Getting Ready", description: "Practical guidance for what may come." },
      { href: "/faq", label: "FAQ", description: "Answers to common questions." },
      { href: "/glossary", label: "Glossary", description: "Clear definitions of key terms." },
    ],
  },
  {
    label: "Tracker",
    links: [
      { href: "/tracker", label: "World Tracker", description: "Explore CBDC initiatives around the world." },
      { href: "/programmes-to-watch", label: "Programmes to Watch", description: "Follow selected projects and developments." },
      { href: "/cross-border", label: "Cross-border", description: "Explore cross-border CBDC projects." },
      { href: "/timeline", label: "Timeline", description: "Browse recent project updates." },
    ],
  },
  {
    label: "Company",
    links: [
      { href: "/about", label: "About / Company", description: "Company details and management information." },
      { href: "/about#services", label: "Services & funding", description: "How our research is supported." },
      { href: "/advertise", label: "Advertise or Sponsor", description: "Advertising and sponsored content opportunities." }
    ],
  },
]

function isRouteActive(pathname: string, href: string) {
  const route = href.split("#", 1)[0] || "/"
  return route === "/" ? pathname === "/" : pathname === route || pathname.startsWith(`${route}/`)
}

function isExactPageActive(pathname: string, href: string) {
  return !href.includes("#") && isRouteActive(pathname, href)
}

function MobileNavLink({
  item,
  pathname,
  onNavigate,
}: {
  item: NavLinkItem
  pathname: string
  onNavigate: () => void
}) {
  const active = isExactPageActive(pathname, item.href)

  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      className={cn(
        "rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
        active ? "bg-secondary text-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground",
      )}
    >
      {item.label}
    </Link>
  )
}

export function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const homeActive = pathname === "/"
  const legalActive = isExactPageActive(pathname, LEGAL_LINK.href)

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/75">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary/15 text-primary">
            <Landmark className="size-4" aria-hidden="true" />
          </span>
          <span className="whitespace-nowrap font-mono text-sm font-semibold tracking-tight text-foreground sm:text-base">
            CBDC <span className="text-primary">LLC</span>
          </span>
        </Link>

        <NavigationMenu key={pathname} className="hidden md:flex">
          <NavigationMenuList className="gap-1">
            <NavigationMenuItem>
              <NavigationMenuLink
                render={<Link href="/" />}
                active={homeActive}
                closeOnClick
                aria-current={homeActive ? "page" : undefined}
                className={cn(
                  "h-9 rounded-lg px-3 text-sm font-medium",
                  homeActive ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>

            {NAV_GROUPS.map((group) => {
              const groupActive = group.links.some((item) => isRouteActive(pathname, item.href))

              return (
                <NavigationMenuItem key={group.label}>
                  <NavigationMenuTrigger
                    className={cn(
                      "text-muted-foreground hover:text-foreground",
                      groupActive && "bg-secondary/70 text-foreground",
                    )}
                  >
                    {group.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="h-auto w-[21rem] max-w-[calc(100vw-2rem)] rounded-lg bg-popover p-1 text-popover-foreground shadow-lg ring-1 ring-border">
                    <ul className="grid gap-0.5 p-1">
                      {group.links.map((item) => {
                        const active = isExactPageActive(pathname, item.href)

                        return (
                          <li key={item.href}>
                            <NavigationMenuLink
                              render={<Link href={item.href} />}
                              active={active}
                              closeOnClick
                              aria-current={active ? "page" : undefined}
                              className={cn(
                                "flex flex-col items-start gap-0.5 rounded-md px-3 py-2.5",
                                active ? "bg-secondary/70 text-foreground" : "text-foreground",
                              )}
                            >
                              <span className="font-medium">{item.label}</span>
                              <span className="text-xs leading-5 text-muted-foreground">{item.description}</span>
                            </NavigationMenuLink>
                          </li>
                        )
                      })}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              )
            })}

            <NavigationMenuItem>
              <NavigationMenuLink
                render={<Link href={LEGAL_LINK.href} />}
                active={legalActive}
                closeOnClick
                aria-current={legalActive ? "page" : undefined}
                className={cn(
                  "h-9 rounded-lg px-3 text-sm font-medium",
                  legalActive ? "bg-secondary text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {LEGAL_LINK.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="outline" size="sm" render={<Link href="/watchlist" />} nativeButton={false}>
            <Star data-icon="inline-start" />
            Watchlist
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger render={<Button variant="ghost" size="icon" className="md:hidden" />}>
            <Menu />
            <span className="sr-only">Open menu</span>
          </SheetTrigger>
          <SheetContent side="right" className="w-[min(88vw,24rem)] overflow-y-auto">
            <SheetTitle className="sr-only">Site navigation</SheetTitle>
            <nav aria-label="Mobile navigation" className="flex flex-col gap-6 px-4 pb-6 pt-14">
              <div className="flex flex-col gap-1">
                <p className="px-3 pb-1 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Main
                </p>
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  aria-current={homeActive ? "page" : undefined}
                  className={cn(
                    "rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    homeActive ? "bg-secondary text-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  )}
                >
                  Home
                </Link>
                <MobileNavLink
                  item={LEGAL_LINK}
                  pathname={pathname}
                  onNavigate={() => setOpen(false)}
                />
              </div>

              {NAV_GROUPS.map((group) => (
                <section key={group.label} aria-labelledby={`mobile-nav-${group.label.toLowerCase()}`}>
                  <h2
                    id={`mobile-nav-${group.label.toLowerCase()}`}
                    className="px-3 pb-1 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground"
                  >
                    {group.label}
                  </h2>
                  <div className="flex flex-col gap-1">
                    {group.links.map((item) => (
                      <MobileNavLink
                        key={item.href}
                        item={item}
                        pathname={pathname}
                        onNavigate={() => setOpen(false)}
                      />
                    ))}
                  </div>
                </section>
              ))}

              <Button variant="outline" className="w-full justify-start" render={<Link href="/watchlist" onClick={() => setOpen(false)} />} nativeButton={false}>
                <Star data-icon="inline-start" />
                Watchlist
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
