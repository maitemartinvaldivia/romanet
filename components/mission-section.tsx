"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Heart, Brain, Users } from "lucide-react"
import { useTranslation } from "@/components/i18n-provider"

export function MissionSection() {
  const { t } = useTranslation()

  const missionPoints = [
    {
      icon: Heart,
      title: t('mission.cards.communityFirst.title'),
      description: t('mission.cards.communityFirst.description'),
      color: "bg-destructive/10 text-destructive",
    },
    {
      icon: Brain,
      title: t('mission.cards.aiInnovation.title'),
      description: t('mission.cards.aiInnovation.description'),
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Users,
      title: t('mission.cards.europeanNetwork.title'),
      description: t('mission.cards.europeanNetwork.description'),
      color: "bg-secondary text-secondary-foreground",
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">{t('mission.overline')}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 text-balance">
            {t('mission.title')}
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              {t('mission.description')}
            </p>
          </div>
        </div>

        {/* Mission Cards - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {missionPoints.map((point, index) => (
            <Card
              key={index}
              className="rounded-3xl border-0 shadow-lg shadow-foreground/5 hover:shadow-xl transition-shadow duration-300 bg-card overflow-hidden"
            >
              <CardContent className="p-8">
                <div className={`w-14 h-14 rounded-2xl ${point.color} flex items-center justify-center mb-6`}>
                  <point.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {point.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
