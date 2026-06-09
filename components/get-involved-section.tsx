"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, BookOpen, Shield, Megaphone } from "lucide-react"
import { useTranslation } from "@/components/i18n-provider"

export function GetInvolvedSection() {
  const { t } = useTranslation()

  const involvementOptions = [
    {
      icon: Shield,
      title: t('getInvolved.cards.report.title'),
      description: t('getInvolved.cards.report.description'),
      href: "/report-support",
      buttonText: t('getInvolved.cards.report.button'),
      color: "bg-destructive/10 text-destructive",
    },
    {
      icon: BookOpen,
      title: t('getInvolved.cards.rights.title'),
      description: t('getInvolved.cards.rights.description'),
      href: "/hate-speech-crimes",
      buttonText: t('getInvolved.cards.rights.button'),
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Megaphone,
      title: t('getInvolved.cards.movement.title'),
      description: t('getInvolved.cards.movement.description'),
      href: "/partners",
      buttonText: t('getInvolved.cards.movement.button'),
      color: "bg-secondary text-secondary-foreground",
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 -right-20 w-60 h-60 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-40 h-40 rounded-full bg-secondary/30 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">{t('getInvolved.overline')}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6 text-balance">
            {t('getInvolved.title')}
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              {t('getInvolved.description')}
            </p>
            {t('getInvolved.closing') && (
              <p className="text-lg text-foreground font-medium mt-4">
                {t('getInvolved.closing')}
              </p>
            )}
          </div>
        </div>

        {/* Involvement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {involvementOptions.map((option, index) => (
            <Card
              key={index}
              className="rounded-3xl border-0 shadow-lg shadow-foreground/5 hover:shadow-xl transition-all duration-300 bg-card overflow-hidden group"
            >
              <CardContent className="p-8 flex flex-col h-full">
                <div className={`w-14 h-14 rounded-2xl ${option.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <option.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {option.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {option.description}
                </p>
                <Link href={option.href}>
                  <Button
                    variant="outline"
                    className="rounded-full w-full group/btn hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                  >
                    {option.buttonText}
                    <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
