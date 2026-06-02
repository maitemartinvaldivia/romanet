"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Scale, AlertTriangle, Sparkles } from "lucide-react"
import { useTranslation } from "@/components/i18n-provider"

export function HeroSection() {
  const { t } = useTranslation()

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary/30 via-background to-background">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-20 -left-20 w-60 h-60 rounded-full bg-secondary/30 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-40 h-40 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-32 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            {t('hero.badge')}
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
            {t('hero.title')}{" "}
            <span className="text-primary">{t('hero.accent')}</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10 text-pretty">
            {t('hero.description')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/hate-speech-crimes">
              <Button
                size="lg"
                className="rounded-full px-8 py-6 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 gap-2"
              >
                <Scale className="h-5 w-5" />
                {t('hero.ctaRights')}
              </Button>
            </Link>

            <Link href="/report-support">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-6 text-base font-semibold border-2 border-destructive/50 text-destructive hover:bg-destructive/10 gap-2"
              >
                <AlertTriangle className="h-5 w-5" />
                {t('hero.ctaReport')}
              </Button>
            </Link>

            <Link href="/ai-against-hate">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-6 text-base font-semibold border-2 border-secondary hover:bg-secondary/50 gap-2"
              >
                <Sparkles className="h-5 w-5" />
                {t('hero.ctaExplore')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
