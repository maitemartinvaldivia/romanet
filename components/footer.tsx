"use client"

import Link from "next/link"
import Image from "next/image"
import { Copy, Check } from "lucide-react"
import { useState } from "react"
import { useTranslation } from "@/components/i18n-provider"

const partnerLogos = [
  { src: "/romanet/logos/Kamira Logo S (1).JPG", alt: "Federación Kamira", href: "https://federacionkamira.com/" },
  { src: "/romanet/logos/romni logo (1).JPG", alt: "Romni", href: "https://www.romni.org/" },
  { src: "/romanet/logos/MEDROMA LOGO wo background (1).png", alt: "Association of Greek Roma Mediators", href: null },
  { src: "/romanet/logos/UJA_Logo (1).jpg", alt: "Universidad de Jaén", href: "https://www.ujaen.es/" },
]

const socialLinks = [
  { href: "https://www.instagram.com/project_romanet", label: "Instagram", icon: InstagramIcon },
  { href: "https://www.tiktok.com/@romanet.project", label: "TikTok", icon: TikTokIcon },
  { href: "https://www.facebook.com/RomanetProject", label: "Facebook", icon: FacebookIcon },
]

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
  )
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
  )
}

export default function Footer() {
  const { t } = useTranslation()
  const [copied, setCopied] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)

  const navLinks = [
    { href: "/", label: t('common.home'), external: false },
    { href: "https://www.ujaen.es/aviso-legal", label: t('footer.legalNotice'), external: true },
    { href: "https://www.ujaen.es/politica-de-privacidad", label: t('footer.privacyPolicy'), external: true },
    { href: "https://sinai.ujaen.es/romanet/akanai/proteccion", label: t('footer.dataProtection'), external: true },
    { href: "https://sinai.ujaen.es/romanet/akanai/accesibilidad", label: t('footer.accessibility'), external: true },
  ]

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("maite@ujaen.es")
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      const textArea = document.createElement("textarea")
      textArea.value = "maite@ujaen.es"
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand("copy")
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText("+34 953 21 28 98")
      setCopiedPhone(true)
      setTimeout(() => setCopiedPhone(false), 2000)
    } catch {
      const textArea = document.createElement("textarea")
      textArea.value = "+34 953 21 28 98"
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand("copy")
      document.body.removeChild(textArea)
      setCopiedPhone(true)
      setTimeout(() => setCopiedPhone(false), 2000)
    }
  }

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-8 py-12 space-y-10">

        {/* Row 1 — RomaNET Logo + Partner Logos */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          <a
            href="https://sinai.ujaen.es/romanet/"
            target="_blank"
            rel="noopener noreferrer"
            className="h-24 lg:h-28 w-auto flex-shrink-0"
          >
            <Image
              src="/romanet/logos/RomaNet Logo (1).png"
              alt="RomaNet"
              width={320}
              height={112}
              className="h-24 lg:h-28 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
            />
          </a>

          <div className="hidden lg:block w-px h-20 bg-border" />

          <div className="flex flex-wrap items-center justify-center gap-5">
            {partnerLogos.map((logo) =>
              logo.href ? (
                <a
                  key={logo.src}
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-14 w-auto flex-shrink-0"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={160}
                    height={56}
                    className="h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                </a>
              ) : (
                <span key={logo.src} className="h-14 w-auto flex-shrink-0">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={160}
                    height={56}
                    className="h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                </span>
              )
            )}
          </div>
        </div>

        {/* Row 2 — EU Funding */}
        <div className="flex flex-col md:flex-row items-start gap-6 pt-8 border-t border-border">
          <Image
            src="/romanet/logos/EN_FundedbytheEU_RGB_POS (1).png"
            alt="Funded by the European Union"
            width={280}
            height={80}
            className="h-16 w-auto object-contain flex-shrink-0"
          />
          <div className="space-y-1">
            <p className="font-semibold text-foreground text-sm">
              {t('footer.euInitiative')}
            </p>
            <p className="text-sm text-muted-foreground">
              {t('common.programme')}
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {t('footer.euDisclaimer')}
            </p>
          </div>
        </div>

        {/* Row 3 — Navigation + Contact + Social (secondary, subtle) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-8 border-t border-border">
          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 text-sm">
              {t('footer.navigation')}
            </h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 text-sm">
              {t('footer.contact')}
            </h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p className="leading-relaxed">
                {t('footer.address')}<br />
                {t('footer.city')}
              </p>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 group">
                  <a
                    href="mailto:maite@ujaen.es"
                    className="text-primary hover:underline"
                  >
                    {t('footer.email')}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-foreground px-1 py-1"
                    title={t('footer.copyEmail')}
                  >
                    {copied ? (
                      <Check className="h-3.5 w-3.5 text-green-500" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>
                <div className="flex items-center gap-2 group">
                  <a
                    href="tel:+34953212898"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    {t('footer.phone')}
                  </a>
                  <button
                    onClick={handleCopyPhone}
                    className="inline-flex items-center opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-foreground px-1 py-1"
                    title={t('footer.phone')}
                  >
                    {copiedPhone ? (
                      <Check className="h-3.5 w-3.5 text-green-500" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-3 text-sm">
              {t('common.followUs')}
            </h4>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <p className="text-center text-xs text-muted-foreground">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  )
}
