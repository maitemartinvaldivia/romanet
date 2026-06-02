"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  FileText,
  Download,
  BookOpen,
  Scale,
  Calendar,
  Users,
  Globe,
  ArrowRight,
  FolderOpen,
} from "lucide-react"
import { useTranslation } from "@/components/i18n-provider"

const pageT = {
  en: {
    badge: "Project Deliverables",
    title: "Project Results & Publications",
    subtitle:
      "Access our research findings, diagnostic reports, and educational materials developed through the RomaNET project to combat hate speech and discrimination.",
    featuredTitle: "National Diagnostic Reports",
    featuredDescription:
      "Comprehensive diagnostic reports analyzing the legal situation concerning hate crimes in each partner country. These reports provide detailed examinations of national legislation, case law, and enforcement practices related to hate crimes against Roma communities.",
    reportsCount: "3 Reports",
    countryReports: "Country Reports",
    countryReportsSubtitle: "Legal framework and hate crime analysis for each partner country",
    downloadReport: "Download Report",
    comingSoon: "Coming Soon",
    comingSoonSubtitle: "Additional project deliverables will be published as the project progresses",
    communitySurveys: "Community Surveys",
    communitySurveysDesc: "Research findings from Roma community consultations",
    counterNarratives: "Counter-Narratives",
    counterNarrativesDesc: "AI-generated counter-speech materials",
    educationalMaterials: "Educational Materials",
    educationalMaterialsDesc: "Training resources and awareness tools",
    annualReports: "Annual Reports",
    annualReportsDesc: "Project progress and impact assessments",
    ctaTitle: "Stay Updated on New Publications",
    ctaSubtitle:
      "Follow our progress and be the first to access new research findings, reports, and educational materials as they become available.",
    followNews: "Follow Our News",
    learnAbout: "Learn About RomaNET",
  },
  es: {
    badge: "Entregables del Proyecto",
    title: "Resultados y Publicaciones del Proyecto",
    subtitle:
      "Acceda a nuestros hallazgos de investigación, informes diagnósticos y materiales educativos desarrollados a través del proyecto RomaNET para combatir el discurso de odio y la discriminación.",
    featuredTitle: "Informes Diagnósticos Nacionales",
    featuredDescription:
      "Informes diagnósticos integrales que analizan la situación legal relativa a los delitos de odio en cada país socio. Estos informes proporcionan exámenes detallados de la legislación nacional, la jurisprudencia y las prácticas de aplicación relacionadas con los delitos de odio contra las comunidades romaníes.",
    reportsCount: "3 Informes",
    countryReports: "Informes por País",
    countryReportsSubtitle: "Marco legal y análisis de delitos de odio para cada país socio",
    downloadReport: "Descargar Informe",
    comingSoon: "Próximamente",
    comingSoonSubtitle: "Se publicarán entregables adicionales del proyecto a medida que avance",
    communitySurveys: "Encuestas Comunitarias",
    communitySurveysDesc: "Hallazgos de investigación de las consultas comunitarias romaníes",
    counterNarratives: "Contra-Narrativas",
    counterNarrativesDesc: "Materiales de contra-discurso generados por IA",
    educationalMaterials: "Materiales Educativos",
    educationalMaterialsDesc: "Recursos de formación y herramientas de sensibilización",
    annualReports: "Informes Anuales",
    annualReportsDesc: "Evaluaciones del progreso e impacto del proyecto",
    ctaTitle: "Manténgase Informado sobre Nuevas Publicaciones",
    ctaSubtitle:
      "Siga nuestro progreso y sea el primero en acceder a nuevos hallazgos de investigación, informes y materiales educativos a medida que estén disponibles.",
    followNews: "Siga Nuestras Noticias",
    learnAbout: "Conozca RomaNET",
  },
  it: {
    badge: "Risultati del Progetto",
    title: "Risultati e Pubblicazioni del Progetto",
    subtitle:
      "Accedi ai nostri risultati di ricerca, rapporti diagnostici e materiali educativi sviluppati attraverso il progetto RomaNET per combattere il discorso d'odio e la discriminazione.",
    featuredTitle: "Rapporti Diagnostici Nazionali",
    featuredDescription:
      "Rapporti diagnostici completi che analizzano la situazione legale relativa ai reati d'odio in ciascun paese partner. Questi rapporti forniscono esami dettagliati della legislazione nazionale, della giurisprudenza e delle pratiche di applicazione relative ai reati d'odio contro le comunità rom.",
    reportsCount: "3 Rapporti",
    countryReports: "Rapporti per Paese",
    countryReportsSubtitle: "Quadro legale e analisi dei reati d'odio per ciascun paese partner",
    downloadReport: "Scarica Rapporto",
    comingSoon: "Prossimamente",
    comingSoonSubtitle: "Ulteriori risultati del progetto saranno pubblicati man mano che il progetto progredisce",
    communitySurveys: "Sondaggi Comunitari",
    communitySurveysDesc: "Risultati della ricerca dalle consultazioni comunitarie rom",
    counterNarratives: "Contro-Narrazioni",
    counterNarrativesDesc: "Materiali di contro-discorso generati dall'IA",
    educationalMaterials: "Materiali Educativi",
    educationalMaterialsDesc: "Risorse di formazione e strumenti di sensibilizzazione",
    annualReports: "Rapporti Annuali",
    annualReportsDesc: "Valutazioni dei progressi e dell'impatto del progetto",
    ctaTitle: "Rimani Aggiornato sulle Nuove Pubblicazioni",
    ctaSubtitle:
      "Segui i nostri progressi e sii il primo ad accedere a nuovi risultati di ricerca, rapporti e materiali educativi non appena disponibili.",
    followNews: "Segui le Nostre Notizie",
    learnAbout: "Scopri RomaNET",
  },
  el: {
    badge: "Παραδοτέα Έργου",
    title: "Αποτελέσματα και Δημοσιεύσεις του Έργου",
    subtitle:
      "Αποκτήστε πρόσβαση στα ευρήματα της έρευνάς μας, τα διαγνωστικά reports και τα εκπαιδευτικά υλικά που αναπτύχθηκαν μέσω του έργου RomaNET για να καταπολεμήσουμε τη ρητορική μίσους και των διακρίσεων.",
    featuredTitle: "Εθνικά Διαγνωστικά Reports",
    featuredDescription:
      "Ολοκληρωμένα διαγνωστικά reports που αναλύουν τη νομική κατάσταση σχετικά με τα εγκλήματα μίσους σε κάθε χώρα εταίρο. Αυτά τα reports παρέχουν λεπτομερείς εξετάσεις της εθνικής νομοθεσίας, της νομολογίας και των πρακτικών επιβολής σχετικά με τα εγκλήματα μίσους κατά των κοινοτήτων Ρομά.",
    reportsCount: "3 Reports",
    countryReports: "Reports ανά Χώρα",
    countryReportsSubtitle: "Νομικό πλαίσιο και ανάλυση εγκλημάτων μίσους για κάθε χώρα εταίρο",
    downloadReport: "Λήψη Report",
    comingSoon: "Σύντομα",
    comingSoonSubtitle: "Πρόσθετα παραδοτέα του έργου θα δημοσιευθούν καθώς το έργο προχωρά",
    communitySurveys: "Έρευνες Κοινότητας",
    communitySurveysDesc: "Ευρήματα έρευνας από διαβουλεύσεις με την κοινότητα Ρομά",
    counterNarratives: "Αντι-Αφηγήσεις",
    counterNarrativesDesc: "Υλικά αντι-λόγου που δημιουργούνται με ΤΝ",
    educationalMaterials: "Εκπαιδευτικά Υλικά",
    educationalMaterialsDesc: "Εκπαιδευτικοί πόροι και εργαλεία ευαισθητοποίησης",
    annualReports: "Ετήσιες Εκθέσεις",
    annualReportsDesc: "Αξιολογήσεις προόδου και αντίκτυπου του έργου",
    ctaTitle: "Μείνετε Ενημερωμένοι για Νέες Δημοσιεύσεις",
    ctaSubtitle:
      "Ακολουθήστε την πρόοδό μας και γίνετε οι πρώτοι που θα έχουν πρόσβαση σε νέα ευρήματα έρευνας, reports και εκπαιδευτικά υλικά μόλις διατεθούν.",
    followNews: "Ακολουθήστε τα Νέα μας",
    learnAbout: "Μάθετε για το RomaNET",
  },
}

const reportsData = [
  {
    country: "Spain",
    flag: "🇪🇸",
    color: "from-red-500/20 to-amber-500/20",
    borderColor: "border-red-200",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    file: "/romanet/downloads/romanet-report-spain.pdf",
  },
  {
    country: "Italy",
    flag: "🇮🇹",
    color: "from-green-500/20 to-red-500/20",
    borderColor: "border-green-200",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    file: "/romanet/downloads/romanet-report-italy.pdf",
  },
  {
    country: "Greece",
    flag: "🇬🇷",
    color: "from-blue-500/20 to-sky-500/20",
    borderColor: "border-blue-200",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    file: "/romanet/downloads/romanet-report-greece.pdf",
  },
]

const comingSoonIcons = [Users, Globe, BookOpen, Calendar]

export default function ResultsPage() {
  const { lang } = useTranslation()
  const t = pageT[lang]

  const comingSoonItems = [
    { icon: comingSoonIcons[0], title: t.communitySurveys, description: t.communitySurveysDesc },
    { icon: comingSoonIcons[1], title: t.counterNarratives, description: t.counterNarrativesDesc },
    { icon: comingSoonIcons[2], title: t.educationalMaterials, description: t.educationalMaterialsDesc },
    { icon: comingSoonIcons[3], title: t.annualReports, description: t.annualReportsDesc },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <div className="container mx-auto max-w-6xl relative">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                {t.badge}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                {t.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {t.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Featured Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <Card className="rounded-3xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5 shadow-xl overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-10 w-10 text-primary" />
                  </div>
                  <div className="flex-1 text-center lg:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {t.featuredTitle}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {t.featuredDescription}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-primary">
                    <FolderOpen className="h-6 w-6" />
                    <span className="font-semibold">{t.reportsCount}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Document Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t.countryReports}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t.countryReportsSubtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {reportsData.map((report) => (
                <Card
                  key={report.country}
                  className={`rounded-3xl border-2 ${report.borderColor} shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
                >
                  {/* Header Gradient */}
                  <div className={`h-3 bg-gradient-to-r ${report.color}`} />

                  <CardContent className="p-8">
                    {/* Country Flag & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-4xl">{report.flag}</span>
                      <div className={`w-14 h-14 rounded-2xl ${report.iconBg} flex items-center justify-center`}>
                        <FileText className={`h-7 w-7 ${report.iconColor}`} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {t.featuredTitle}
                    </h3>
                    <p className="text-lg font-semibold text-primary mb-1">
                      {report.country}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4 flex items-center gap-2">
                      <Scale className="h-4 w-4" />
                      {t.countryReportsSubtitle}
                    </p>

                    {/* Download Button */}
                    <Button
                      asChild
                      variant="outline"
                      className="w-full rounded-xl h-12 font-semibold gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <a href={report.file} download>
                        <Download className="h-5 w-5" />
                        {t.downloadReport}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t.comingSoon}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t.comingSoonSubtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {comingSoonItems.map((item) => (
                <Card
                  key={item.title}
                  className="rounded-3xl border border-border/50 shadow-md bg-background/50"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card className="rounded-3xl bg-gradient-to-br from-primary via-primary to-secondary shadow-2xl overflow-hidden">
              <CardContent className="p-8 md:p-12 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                  {t.ctaTitle}
                </h2>
                <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
                  {t.ctaSubtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    variant="secondary"
                    className="rounded-xl h-14 px-8 text-lg font-semibold"
                  >
                    <Link href="/news">
                      {t.followNews}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-xl h-14 px-8 text-lg font-semibold bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    <Link href="/about">{t.learnAbout}</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
