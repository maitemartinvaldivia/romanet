"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Shield,
  Mail,
  Phone,
  ArrowRight,
  Heart,
  FileText,
  Users,
} from "lucide-react"
import { useTranslation } from "@/components/i18n-provider"
import { legalFrameworks } from "./legal-frameworks"

const pageT = {
  en: {
    badge: "Report & Support",
    title: "Report Hate Speech or Get Support",
    subtitle:
      "If you have experienced or witnessed hate speech or a hate crime, you are not alone. RomaNET is here to help you find the right support and take action.",
    emailTitle: "Contact us by email",
    emailDesc: "Send us a message describing what happened. We will respond as soon as possible.",
    emailButton: "Write to us",
    phoneTitle: "Call us",
    phoneDesc: "Speak directly with a member of our team.",
    resourcesTitle: "Useful Resources",
    resources: [
      { title: "Know Your Rights", desc: "Learn about your legal protections.", link: "/hate-speech-crimes", icon: FileText },
      { title: "Community Support", desc: "Connect with organizations that can help.", link: "/partners", icon: Users },
      { title: "Counter-Narratives", desc: "Discover positive narratives created with AI.", link: "/ai-against-hate", icon: Heart },
    ],
    legalTitle: "Country-Specific Legal Frameworks",
    legalSubtitle: "Know your rights and where to seek help in each participating country",
    protectionLabel: "Legal Protection",
    reportLabel: "Where to Report",
    orgsLabel: "Support Organizations",
    ctaTitle: "Every report matters",
    ctaSubtitle:
      "By reporting hate speech, you help us map the problem, advocate for better policies, and protect our communities.",
    ctaButton: "Learn more about the project",
  },
  es: {
    badge: "Denunciar y Apoyo",
    title: "Denuncia Discurso de Odio u Obtén Apoyo",
    subtitle:
      "Si has experimentado o presenciado discurso de odio o un delito de odio, no estás solo. RomaNET está aquí para ayudarte a encontrar el apoyo adecuado y actuar.",
    emailTitle: "Contacta por email",
    emailDesc: "Envíanos un mensaje describiendo lo ocurrido. Responderemos lo antes posible.",
    emailButton: "Escríbenos",
    phoneTitle: "Llámanos",
    phoneDesc: "Habla directamente con un miembro de nuestro equipo.",
    resourcesTitle: "Recursos Útiles",
    resources: [
      { title: "Conoce tus Derechos", desc: "Aprende sobre tus protecciones legales.", link: "/hate-speech-crimes", icon: FileText },
      { title: "Apoyo Comunitario", desc: "Conecta con organizaciones que pueden ayudarte.", link: "/partners", icon: Users },
      { title: "Contra-Narrativas", desc: "Descubre narrativas positivas creadas con IA.", link: "/ai-against-hate", icon: Heart },
    ],
    legalTitle: "Marcos Jurídicos Específicos por País",
    legalSubtitle: "Conoce tus derechos y dónde buscar ayuda en cada país participante",
    protectionLabel: "Protección Jurídica",
    reportLabel: "Dónde Denunciar",
    orgsLabel: "Organizaciones de Apoyo",
    ctaTitle: "Cada denuncia cuenta",
    ctaSubtitle:
      "Al denunciar el discurso de odio, nos ayudas a mapear el problema, abogar por mejores políticas y proteger a nuestras comunidades.",
    ctaButton: "Saber más sobre el proyecto",
  },
  it: {
    badge: "Segnala e Supporto",
    title: "Segnala Discorso di Odio o Ottieni Supporto",
    subtitle:
      "Se hai sperimentato o assistito a un discorso di odio o un reato d'odio, non sei solo. RomaNET è qui per aiutarti a trovare il supporto giusto e agire.",
    emailTitle: "Contattaci via email",
    emailDesc: "Inviaci un messaggio descrivendo ciò che è successo. Ti risponderemo al più presto.",
    emailButton: "Scrivici",
    phoneTitle: "Chiamaci",
    phoneDesc: "Parla direttamente con un membro del nostro team.",
    resourcesTitle: "Risorse Utili",
    resources: [
      { title: "Conosci i tuoi Diritti", desc: "Scopri le tue protezioni legali.", link: "/hate-speech-crimes", icon: FileText },
      { title: "Supporto Comunitario", desc: "Connettiti con organizzazioni che possono aiutarti.", link: "/partners", icon: Users },
      { title: "Contro-Narrazioni", desc: "Scopri le contro-narrazioni positive create con l'IA.", link: "/ai-against-hate", icon: Heart },
    ],
    legalTitle: "Quadri Giuridici Specifici per Paese",
    legalSubtitle: "Conosci i tuoi diritti e dove cercare aiuto in ciascun paese partecipante",
    protectionLabel: "Tutela Giuridica",
    reportLabel: "Dove Denunciare",
    orgsLabel: "Organizzazioni di Supporto",
    ctaTitle: "Ogni segnalazione conta",
    ctaSubtitle:
      "Segnalando il discorso d'odio, ci aiuti a mappare il problema, promuovere politiche migliori e proteggere le nostre comunità.",
    ctaButton: "Scopri di più sul progetto",
  },
  el: {
    badge: "Αναφορά και Υποστήριξη",
    title: "Αναφέρετε Ρητορική Μίσους ή Λάβετε Υποστήριξη",
    subtitle:
      "Αν αντιμετωπίσατε ή παρακολουθήσατε ρητορική μίσους ή έγκλημα μίσους, δεν είστε μόνοι. Το RomaNET είναι εδώ για να σας βοηθήσει να βρείτε τη σωστή υποστήριξη και να δράσετε.",
    emailTitle: "Επικοινωνήστε μέσω email",
    emailDesc: "Στείλτε μας ένα μήνυμα περιγράφοντας τι συνέβη. Θα απαντήσουμε το συντομότερο δυνατό.",
    emailButton: "Γράψτε μας",
    phoneTitle: "Καλέστε μας",
    phoneDesc: "Μιλήστε απευθείας με μέλος της ομάδας μας.",
    resourcesTitle: "Χρήσιμοι Πόροι",
    resources: [
      { title: "Μάθετε τα Δικαιώματά σας", desc: "Μάθετε για τις νομικές σας προστασίες.", link: "/hate-speech-crimes", icon: FileText },
      { title: "Κοινοτική Υποστήριξη", desc: "Συνδεθείτε με οργανισμούς που μπορούν να βοηθήσουν.", link: "/partners", icon: Users },
      { title: "Αντι-Αφηγήσεις", desc: "Ανακαλύψτε θετικές αφηγήσεις που δημιουργήθηκαν με ΤΝ.", link: "/ai-against-hate", icon: Heart },
    ],
    legalTitle: "Ειδικά Νομικά Πλαίσια ανά Χώρα",
    legalSubtitle: "Μάθετε τα δικαιώματά σας και πού να αναζητήσετε βοήθεια σε κάθε συμμετέχουσα χώρα",
    protectionLabel: "Νομική Προστασία",
    reportLabel: "Πού να Καταγγείλετε",
    orgsLabel: "Οργανώσεις Υποστήριξης",
    ctaTitle: "Κάθε αναφορά μετράει",
    ctaSubtitle:
      "Αναφέροντας ρητορική μίσους, μας βοηθάτε να χαρτογραφήσουμε το πρόβλημα, να υποστηρίξουμε καλύτερες πολιτικές και να προστατεύσουμε τις κοινότητές μας.",
    ctaButton: "Μάθετε περισσότερα για το έργο",
  },
}

export default function ReportSupportPage() {
  const { lang } = useTranslation()
  const t = pageT[lang]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              {t.badge}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              {t.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              {t.subtitle}
            </p>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="rounded-3xl shadow-lg border-0 bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-3">{t.emailTitle}</h2>
                <p className="text-muted-foreground mb-6">{t.emailDesc}</p>
                <Button asChild size="lg" className="rounded-full px-8">
                  <a href="mailto:kamira.international.eu@gmail.com">
                    {t.emailButton}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="rounded-3xl shadow-lg border-0 bg-gradient-to-br from-secondary/5 to-accent/5">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-3">{t.phoneTitle}</h2>
                <p className="text-muted-foreground mb-6">{t.phoneDesc}</p>
                <Button asChild size="lg" variant="outline" className="rounded-full px-8">
                  <a href="tel:957485735">
                    957 485 735
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Legal Frameworks */}
        <section className="py-16 md:py-24 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t.legalTitle}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t.legalSubtitle}
              </p>
            </div>

            <div className="flex flex-col gap-8">
              {legalFrameworks.map((country) => (
                <Card
                  key={country.country.en}
                  className="rounded-3xl border-0 shadow-lg overflow-hidden"
                >
                  <div className={`h-16 bg-gradient-to-r ${country.gradient} flex items-center px-6 md:px-8`}>
                    <span className="text-2xl mr-3">{country.flag}</span>
                    <h3 className="text-xl font-bold text-foreground">
                      {country.country[lang]}
                    </h3>
                  </div>
                  <CardContent className="p-6 md:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-primary" />
                          {t.protectionLabel}
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {country.protection[lang].map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="w-1 h-1 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-primary" />
                          {t.reportLabel}
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {country.report[lang].map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="w-1 h-1 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-primary" />
                          {t.orgsLabel}
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {country.organizations[lang].map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="w-1 h-1 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t.resourcesTitle}
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.resources.map((item) => {
                const IconComponent = item.icon
                return (
                  <Card key={item.title} className="rounded-3xl shadow-md border-0 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{item.desc}</p>
                      <Button asChild variant="ghost" className="rounded-xl px-0 text-primary">
                        <Link href={item.link}>
                          {item.title}
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="rounded-3xl shadow-xl border-0 bg-gradient-to-br from-primary to-sky-600 text-white overflow-hidden">
              <CardContent className="p-8 md:p-12 text-center">
                <Shield className="h-12 w-12 mx-auto mb-6 opacity-90" />
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{t.ctaTitle}</h2>
                <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                  {t.ctaSubtitle}
                </p>
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="rounded-xl px-8"
                >
                  <Link href="/about">
                    {t.ctaButton}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
