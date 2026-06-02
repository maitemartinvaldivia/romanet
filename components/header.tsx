"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { ChevronDown, Menu, Globe } from "lucide-react"
import Image from "next/image"
import { useTranslation } from "@/components/i18n-provider"
import type { Lang } from "@/lib/translations"

const languages = [
  { code: "en" as Lang, label: "English" },
  { code: "es" as Lang, label: "Español" },
  { code: "it" as Lang, label: "Italiano" },
  { code: "el" as Lang, label: "Ελληνικά" },
]

export default function Header() {
  const { lang, setLang, t } = useTranslation()
  const [mobileOpen, setMobileOpen] = useState(false)

  const projectSubmenu = [
    { href: "/about", label: t('common.about') },
    { href: "/hate-speech-crimes", label: t('common.hateSpeechCrimes') },
    { href: "/partners", label: t('common.partners') },
    { href: "/results", label: t('common.results') },
    { href: "/ai-against-hate", label: t('common.aiAgainstHate') },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <Image
              src="/romanet/logos/RomaNet Logo (1).png"
              alt="RomaNET Logo"
              width={40}
              height={40}
              className="h-10 w-auto object-contain"
            />
            <span className="text-xl font-bold text-foreground">RomaNET</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          <Link href="/">
            <Button variant="ghost" className="rounded-full text-foreground/80 hover:text-foreground hover:bg-secondary/50">
              {t('header.home')}
            </Button>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="rounded-full text-foreground/80 hover:text-foreground hover:bg-secondary/50 gap-1">
                {t('header.project')} <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-56 rounded-2xl p-2">
              {projectSubmenu.map((item) => (
                <DropdownMenuItem key={item.href} asChild className="rounded-xl cursor-pointer">
                  <Link href={item.href}>{item.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/report-support">
            <Button variant="ghost" className="rounded-full text-foreground/80 hover:text-foreground hover:bg-secondary/50">
              {t('header.reportSupport')}
            </Button>
          </Link>

          <Link href="/news">
            <Button variant="ghost" className="rounded-full text-foreground/80 hover:text-foreground hover:bg-secondary/50">
              {t('header.news')}
            </Button>
          </Link>
        </nav>

        {/* Language Switcher + Mobile Menu */}
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="rounded-full gap-2 border-border/60">
                <Globe className="h-4 w-4" />
                <span className="font-medium">{lang.toUpperCase()}</span>
                <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="rounded-2xl p-2">
              {languages.map((l) => (
                <DropdownMenuItem
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`rounded-xl cursor-pointer ${lang === l.code ? "bg-secondary" : ""}`}
                >
                  {l.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 rounded-l-3xl">
              <SheetHeader>
                <SheetTitle className="text-left">{t('common.menu')}</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-2 mt-8">
                <Link href="/" onClick={() => setMobileOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start rounded-2xl text-lg">
                    {t('header.home')}
                  </Button>
                </Link>

                <div className="py-2">
                  <p className="px-4 text-sm font-medium text-muted-foreground mb-2">{t('header.project')}</p>
                  {projectSubmenu.map((item) => (
                    <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>
                      <Button variant="ghost" className="w-full justify-start rounded-2xl pl-6">
                        {item.label}
                      </Button>
                    </Link>
                  ))}
                </div>

                <Link href="/report-support" onClick={() => setMobileOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start rounded-2xl text-lg">
                    {t('header.reportSupport')}
                  </Button>
                </Link>

                <Link href="/news" onClick={() => setMobileOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start rounded-2xl text-lg">
                    {t('header.news')}
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
