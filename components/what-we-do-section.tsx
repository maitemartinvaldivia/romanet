"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  Search,
  GraduationCap,
  Lightbulb,
  HeartHandshake,
  Network
} from "lucide-react"
import { useTranslation } from "@/components/i18n-provider"

export function WhatWeDoSection() {
  const { t } = useTranslation()

  const activities = [
    {
      icon: Search,
      title: t('whatWeDo.monitorReport.title'),
      description: t('whatWeDo.monitorReport.description'),
      color: "bg-primary/10 text-primary",
    },
    {
      icon: GraduationCap,
      title: t('whatWeDo.educate.title'),
      description: t('whatWeDo.educate.description'),
      color: "bg-secondary text-secondary-foreground",
    },
    {
      icon: Lightbulb,
      title: t('whatWeDo.counterNarratives.title'),
      description: t('whatWeDo.counterNarratives.description'),
      color: "bg-accent text-accent-foreground",
    },
    {
      icon: HeartHandshake,
      title: t('whatWeDo.support.title'),
      description: t('whatWeDo.support.description'),
      color: "bg-destructive/10 text-destructive",
    },
    {
      icon: Network,
      title: t('whatWeDo.networks.title'),
      description: t('whatWeDo.networks.description'),
      color: "bg-primary/10 text-primary",
    },
  ]
  const MonitorIcon = activities[0].icon
  const EducateIcon = activities[1].icon
  const CounterIcon = activities[2].icon
  const SupportIcon = activities[3].icon
  const NetworkIcon = activities[4].icon

  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">{t('whatWeDo.overline')}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 text-balance">
            {t('whatWeDo.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t('whatWeDo.description')}
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Large Card - Monitor and Report */}
          <Card className="rounded-3xl border-0 shadow-lg shadow-foreground/5 hover:shadow-xl transition-all duration-300 bg-card lg:col-span-2 overflow-hidden group">
            <CardContent className="p-8 lg:p-10">
              <div className="flex flex-col lg:flex-row gap-6 lg:items-center">
                <div className={`w-16 h-16 rounded-2xl ${activities[0].color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                  <MonitorIcon className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">
                    {activities[0].title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {activities[0].description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Medium Card - Educate */}
          <Card className="rounded-3xl border-0 shadow-lg shadow-foreground/5 hover:shadow-xl transition-all duration-300 bg-card overflow-hidden group">
            <CardContent className="p-8">
              <div className={`w-14 h-14 rounded-2xl ${activities[1].color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <EducateIcon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {activities[1].title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {activities[1].description}
              </p>
            </CardContent>
          </Card>

          {/* Medium Card - Counter-Narratives */}
          <Card className="rounded-3xl border-0 shadow-lg shadow-foreground/5 hover:shadow-xl transition-all duration-300 bg-card overflow-hidden group">
            <CardContent className="p-8">
              <div className={`w-14 h-14 rounded-2xl ${activities[2].color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <CounterIcon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {activities[2].title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {activities[2].description}
              </p>
            </CardContent>
          </Card>

          {/* Medium Card - Support Communities */}
          <Card className="rounded-3xl border-0 shadow-lg shadow-foreground/5 hover:shadow-xl transition-all duration-300 bg-card overflow-hidden group">
            <CardContent className="p-8">
              <div className={`w-14 h-14 rounded-2xl ${activities[3].color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <SupportIcon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {activities[3].title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {activities[3].description}
              </p>
            </CardContent>
          </Card>

          {/* Medium Card - Build Networks */}
          <Card className="rounded-3xl border-0 shadow-lg shadow-foreground/5 hover:shadow-xl transition-all duration-300 bg-card overflow-hidden group">
            <CardContent className="p-8">
              <div className={`w-14 h-14 rounded-2xl ${activities[4].color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <NetworkIcon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {activities[4].title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {activities[4].description}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
