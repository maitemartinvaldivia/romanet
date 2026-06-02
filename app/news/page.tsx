"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Calendar,
  ArrowRight,
  Rocket,
  Sparkles,
  Handshake,
  FileText,
  Newspaper,
  Bell,
} from "lucide-react"
import { useTranslation } from "@/components/i18n-provider"

const pageT = {
  en: {
    badge: "Latest Updates",
    title: "News & Events",
    subtitle:
      "Stay informed about the latest developments, events, and publications from the RomaNET project. Follow our journey as we work together to combat hate speech and support Roma communities across Europe.",
    featured: "Featured",
    readFull: "Read Full Article",
    tryAkanai: "Try AkanAI",
    romanetWebsite: "Romanet Website",
    recentNews: "Recent News",
    articlesCount: "6 articles",
    stayUpdated: "Stay Updated",
    staySubtitle:
      "Follow our social media channels to receive the latest news, event announcements, and project updates from RomaNET.",
    followInstagram: "Follow on Instagram",
    followTiktok: "Follow on TikTok",
    followFacebook: "Follow on Facebook",
    articles: [
      {
        date: "May 26, 2026",
        category: "Technology",
        title: "AkanAI First Prototype Officially Launched",
        summary:
          "The first prototype of AkanAI is now live. Explore how our AI-powered platform generates positive counter-narratives to combat hate speech against Roma communities.",
        href: "https://sinai.ujaen.es/romanet/akanai/",
      },
      {
        date: "May 20, 2026",
        category: "Technology",
        title: "First Counter-Narrative Generation Prototype AkanAI",
        summary:
          "We present the first prototype of AkanAI, our platform for generating positive counter-narratives using artificial intelligence to combat hate speech against Roma communities.",
        href: "https://sinai.ujaen.es/romanet/akanai/",
      },
      {
        date: "April 8, 2026",
        category: "Launch",
        title: "Official Launch of the RomaNET Project Website",
        summary:
          "The official RomaNET project website is now live, providing information about our mission, partners, and resources to combat hate speech and support Roma communities.",
        href: "https://sinai.ujaen.es/romanet",
      },
      {
        date: "March 4, 2026",
        category: "Interview",
        title: "Interview with Maite Martín (UJA) on UniRadio about the RomaNET Project",
        summary:
          "Maite Martín from the University of Jaén discusses the RomaNET project on UniRadio, explaining how technology is being used to fight hatred towards the Roma people.",
        href: "https://diariodigital.ujaen.es/divulgacion-cientifica/la-tecnologia-contra-el-odio-hacia-el-pueblo-gitano-en-campus-panel-de",
      },
      {
        date: "January 22, 2026",
        category: "Press",
        title: "The University of Jaén Fights Antigypsyism and Hate Speech Through AI via the European RomaNET Project",
        summary:
          "The University of Jaén leads the European RomaNET project, using artificial intelligence to combat antigypsyism and hate speech against Roma communities across Europe.",
        href: "https://diariodigital.ujaen.es/investigacion-y-transferencia/la-universidad-de-jaen-combate-el-antigitanismo-y-el-discurso-de-odio",
      },
      {
        date: "June 19, 2025",
        category: "Project",
        title: "Official RomaNET Project KickOff",
        summary:
          "The RomaNET project officially kicks off, bringing together partners from Spain, Italy, and Greece to fight hate speech against Roma communities through AI and counter-narratives.",
        href: "https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/opportunities/projects-details/43251589/101215052/CERV",
      },
    ],
  },
  es: {
    badge: "Últimas Novedades",
    title: "Noticias y Eventos",
    subtitle:
      "Manténgase informado sobre los últimos desarrollos, eventos y publicaciones del proyecto RomaNET. Siga nuestro recorrido mientras trabajamos juntos para combatir el discurso de odio y apoyar a las comunidades romaníes en toda Europa.",
    featured: "Destacado",
    readFull: "Leer Artículo Completo",
    tryAkanai: "Probar AkanAI",
    romanetWebsite: "Web Romanet",
    recentNews: "Noticias Recientes",
    articlesCount: "6 artículos",
    stayUpdated: "Mantente Informado",
    staySubtitle:
      "Siga nuestros canales de redes sociales para recibir las últimas noticias, anuncios de eventos y actualizaciones del proyecto RomaNET.",
    followInstagram: "Síguenos en Instagram",
    followTiktok: "Síguenos en TikTok",
    followFacebook: "Síguenos en Facebook",
    articles: [
      {
        date: "26 de mayo de 2026",
        category: "Tecnología",
        title: "Lanzamiento oficial del primer prototipo de AkanAI",
        summary:
          "El primer prototipo de AkanAI ya está disponible. Descubre cómo nuestra plataforma impulsada por IA genera contra-narrativas positivas para combatir el discurso de odio contra las comunidades romaníes.",
        href: "https://sinai.ujaen.es/romanet/akanai/",
      },
      {
        date: "20 de mayo de 2026",
        category: "Tecnología",
        title: "Primer prototipo de generación de contranarrativas AkanAI",
        summary:
          "Presentamos el primer prototipo de AkanAI, nuestra plataforma para generar contra-narrativas positivas utilizando inteligencia artificial para combatir el discurso de odio contra las comunidades romaníes.",
        href: "https://sinai.ujaen.es/romanet/akanai/",
      },
      {
        date: "8 de abril de 2026",
        category: "Lanzamiento",
        title: "Lanzamiento oficial de la web del proyecto RomaNET",
        summary:
          "La web oficial del proyecto RomaNET ya está disponible, ofreciendo información sobre nuestra misión, socios y recursos para combatir el discurso de odio y apoyar a las comunidades romaníes.",
        href: "https://sinai.ujaen.es/romanet",
      },
      {
        date: "4 de marzo de 2026",
        category: "Entrevista",
        title: "Entrevista a Maite Martín (UJA) en UniRadio sobre el proyecto RomaNET",
        summary:
          "Maite Martín de la Universidad de Jaén habla del proyecto RomaNET en UniRadio, explicando cómo se utiliza la tecnología para luchar contra el odio hacia el pueblo gitano.",
        href: "https://diariodigital.ujaen.es/divulgacion-cientifica/la-tecnologia-contra-el-odio-hacia-el-pueblo-gitano-en-campus-panel-de",
      },
      {
        date: "22 de enero de 2026",
        category: "Prensa",
        title: "La Universidad de Jaén combate el antigitanismo y el discurso de odio mediante IA a través del proyecto europeo RomaNET",
        summary:
          "La Universidad de Jaén lidera el proyecto europeo RomaNET, utilizando inteligencia artificial para combatir el antigitanismo y el discurso de odio contra las comunidades romaníes en toda Europa.",
        href: "https://diariodigital.ujaen.es/investigacion-y-transferencia/la-universidad-de-jaen-combate-el-antigitanismo-y-el-discurso-de-odio",
      },
      {
        date: "19 de junio de 2025",
        category: "Proyecto",
        title: "KickOff oficial del proyecto RomaNET",
        summary:
          "El proyecto RomaNET arranca oficialmente, reuniendo a socios de España, Italia y Grecia para combatir el discurso de odio contra las comunidades romaníes a través de la IA y las contra-narrativas.",
        href: "https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/opportunities/projects-details/43251589/101215052/CERV",
      },
    ],
  },
  it: {
    badge: "Ultime Novità",
    title: "Notizie ed Eventi",
    subtitle:
      "Rimani informato sugli ultimi sviluppi, eventi e pubblicazioni del progetto RomaNET. Segui il nostro percorso mentre lavoriamo insieme per combattere il discorso d'odio e sostenere le comunità rom in tutta Europa.",
    featured: "In Evidenza",
    readFull: "Leggi l'Articolo Completo",
    tryAkanai: "Prova AkanAI",
    romanetWebsite: "Sito Romanet",
    recentNews: "Notizie Recenti",
    articlesCount: "6 articoli",
    stayUpdated: "Rimani Aggiornato",
    staySubtitle:
      "Segui i nostri canali social per ricevere le ultime notizie, gli annunci degli eventi e gli aggiornamenti del progetto RomaNET.",
    followInstagram: "Seguici su Instagram",
    followTiktok: "Seguici su TikTok",
    followFacebook: "Seguici su Facebook",
    articles: [
      {
        date: "26 maggio 2026",
        category: "Tecnologia",
        title: "Lancio ufficiale del primo prototipo di AkanAI",
        summary:
          "Il primo prototipo di AkanAI è ora online. Scopri come la nostra piattaforma basata sull'IA genera contro-narrazioni positive per combattere il discorso d'odio contro le comunità rom.",
        href: "https://sinai.ujaen.es/romanet/akanai/",
      },
      {
        date: "20 maggio 2026",
        category: "Tecnologia",
        title: "Primo prototipo di generazione di contro-narrazioni AkanAI",
        summary:
          "Presentiamo il primo prototipo di AkanAI, la nostra piattaforma per generare contro-narrazioni positive utilizzando l'intelligenza artificiale per combattere il discorso d'odio contro le comunità rom.",
        href: "https://sinai.ujaen.es/romanet/akanai/",
      },
      {
        date: "8 aprile 2026",
        category: "Lancio",
        title: "Lancio ufficiale del sito web del progetto RomaNET",
        summary:
          "Il sito web ufficiale del progetto RomaNET è ora online, fornendo informazioni sulla nostra missione, i partner e le risorse per combattere il discorso d'odio e sostenere le comunità rom.",
        href: "https://sinai.ujaen.es/romanet",
      },
      {
        date: "4 marzo 2026",
        category: "Intervista",
        title: "Intervista a Maite Martín (UJA) su UniRadio sul progetto RomaNET",
        summary:
          "Maite Martín dell'Università di Jaén parla del progetto RomaNET su UniRadio, spiegando come la tecnologia viene utilizzata per combattere l'odio verso il popolo rom.",
        href: "https://diariodigital.ujaen.es/divulgacion-cientifica/la-tecnologia-contra-el-odio-hacia-el-pueblo-gitano-en-campus-panel-de",
      },
      {
        date: "22 gennaio 2026",
        category: "Stampa",
        title: "L'Università di Jaén combatte l'antiziganismo e il discorso d'odio attraverso l'IA con il progetto europeo RomaNET",
        summary:
          "L'Università di Jaén guida il progetto europeo RomaNET, utilizzando l'intelligenza artificiale per combattere l'antiziganismo e il discorso d'odio contro le comunità rom in tutta Europa.",
        href: "https://diariodigital.ujaen.es/investigacion-y-transferencia/la-universidad-de-jaen-combate-el-antigitanismo-y-el-discurso-de-odio",
      },
      {
        date: "19 giugno 2025",
        category: "Progetto",
        title: "KickOff ufficiale del progetto RomaNET",
        summary:
          "Il progetto RomaNET ha ufficialmente inizio, riunendo partner da Spagna, Italia e Grecia per combattere il discorso d'odio contro le comunità rom attraverso l'IA e le contro-narrazioni.",
        href: "https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/opportunities/projects-details/43251589/101215052/CERV",
      },
    ],
  },
  el: {
    badge: "Τελευταίες Ενημερώσεις",
    title: "Νέα και Εκδηλώσεις",
    subtitle:
      "Μείνετε ενημερωμένοι για τις τελευταίες εξελίξεις, εκδηλώσεις και δημοσιεύσεις του έργου RomaNET. Ακολουθήστε το ταξίδι μας καθώς εργαζόμαστε μαζί για να καταπολεμήσουμε τη ρητορική μίσους και να υποστηρίξουμε τις κοινότητες Ρομά σε όλη την Ευρώπη.",
    featured: "Προβεβλημένο",
    readFull: "Διαβάστε ολόκληρο το άρθρο",
    tryAkanai: "Δοκιμάστε το AkanAI",
    romanetWebsite: "Ιστοσελίδα Romanet",
    recentNews: "Πρόσφατα Νέα",
    articlesCount: "6 άρθρα",
    stayUpdated: "Μείνετε Ενημερωμένοι",
    staySubtitle:
      "Ακολουθήστε τα κανάλια μας στα μέσα κοινωνικής δικτύωσης για να λαμβάνετε τα τελευταία νέα, ανακοινώσεις εκδηλώσεων και ενημερώσεις του έργου RomaNET.",
    followInstagram: "Ακολουθήστε μας στο Instagram",
    followTiktok: "Ακολουθήστε μας στο TikTok",
    followFacebook: "Ακολουθήστε μας στο Facebook",
    articles: [
      {
        date: "26 Μαΐου 2026",
        category: "Τεχνολογία",
        title: "Επίσημη κυκλοφορία του πρώτου πρωτοτύπου AkanAI",
        summary:
          "Το πρώτο πρότυπο του AkanAI είναι πλέον διαθέσιμο. Ανακαλύψτε πώς η πλατφόρμα μας που υποστηρίζεται από ΤΝ δημιουργεί θετικές αντι-αφηγήσεις για την καταπολέμηση της ρητορικής μίσους κατά των κοινοτήτων Ρομά.",
        href: "https://sinai.ujaen.es/romanet/akanai/",
      },
      {
        date: "20 Μαΐου 2026",
        category: "Τεχνολογία",
        title: "Πρότυπο δημιουργίας αντι-αφηγήσεων AkanAI",
        summary:
          "Παρουσιάζουμε το πρότυπο του AkanAI, της πλατφόρμας μας για τη δημιουργία θετικών αντι-αφηγήσεων με τεχνητή νοημοσύνη για την καταπολέμηση της ρητορικής μίσους κατά των κοινοτήτων Ρομά.",
        href: "https://sinai.ujaen.es/romanet/akanai/",
      },
      {
        date: "8 Απριλίου 2026",
        category: "Έναρξη",
        title: "Επίσημη έναρξη της ιστοσελίδας του έργου RomaNET",
        summary:
          "Η επίσημη ιστοσελίδα του έργου RomaNET είναι πλέον διαδικτυακά διαθέσιμη, παρέχοντας πληροφορίες για την αποστολή μας, τους εταίρους και τους πόρους για την καταπολέμηση της ρητορικής μίσους και την υποστήριξη των κοινοτήτων Ρομά.",
        href: "https://sinai.ujaen.es/romanet",
      },
      {
        date: "4 Μαρτίου 2026",
        category: "Συνέντευξη",
        title: "Συνέντευξη με την Maite Martín (UJA) στο UniRadio για το έργο RomaNET",
        summary:
          "Η Maite Martín από το Πανεπιστήμιο της Χαέν συζητά το έργο RomaNET στο UniRadio, εξηγώντας πώς η τεχνολογία χρησιμοποιείται για να καταπολεμηθεί το μίσος προς τον λαό των Ρομά.",
        href: "https://diariodigital.ujaen.es/divulgacion-cientifica/la-tecnologia-contra-el-odio-hacia-el-pueblo-gitano-en-campus-panel-de",
      },
      {
        date: "22 Ιανουαρίου 2026",
        category: "Τύπος",
        title: "Το Πανεπιστήμιο της Χαέν καταπολεμά τον αντιτσιγγανισμό και τη ρητορική μίσους μέσω ΤΝ με το ευρωπαϊκό έργο RomaNET",
        summary:
          "Το Πανεπιστήμιο της Χαέν ηγείται του ευρωπαϊκού έργου RomaNET, χρησιμοποιώντας τεχνητή νοημοσύνη για να καταπολεμήσει τον αντιτσιγγανισμό και τη ρητορική μίσους κατά των κοινοτήτων Ρομά σε όλη την Ευρώπη.",
        href: "https://diariodigital.ujaen.es/investigacion-y-transferencia/la-universidad-de-jaen-combate-el-antigitanismo-y-el-discurso-de-odio",
      },
      {
        date: "19 Ιουνίου 2025",
        category: "Έργο",
        title: "Επίσημο KickOff του έργου RomaNET",
        summary:
          "Το έργο RomaNET ξεκινά επίσημα, φέρνοντας κοντά εταίρους από Ισπανία, Ιταλία και Ελλάδα για να καταπολεμήσουν τη ρητορική μίσους κατά των κοινοτήτων Ρομά μέσω της ΤΝ και των αντι-αφηγήσεων.",
        href: "https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/opportunities/projects-details/43251589/101215052/CERV",
      },
    ],
  },
}

export default function NewsPage() {
  const { lang } = useTranslation()
  const t = pageT[lang]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Newspaper className="h-4 w-4" />
                {t.badge}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                {t.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {t.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <Card className="rounded-3xl shadow-lg border-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 overflow-hidden">
              <CardContent className="p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-3xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Rocket className="h-12 w-12 lg:h-16 lg:w-16 text-primary" />
                  </div>
                  <div className="flex-1 text-center lg:text-left">
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        {t.featured}
                      </span>
                      <span className="flex items-center gap-1.5 text-muted-foreground text-sm">
                        <Calendar className="h-4 w-4" />
                        {t.articles[0].date}
                      </span>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                      {t.articles[0].title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {t.articles[0].summary}
                    </p>
                    <Button asChild className="rounded-full">
                      <a
                        href={t.articles[0].href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t.tryAkanai}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground">{t.recentNews}</h2>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Bell className="h-4 w-4" />
                <span>{t.articlesCount}</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.articles.slice(1).map((article, idx) => {
                const icons = [Sparkles, Handshake, FileText, Newspaper, Rocket]
                const colors = [
                  "bg-secondary/10 text-secondary",
                  "bg-accent/10 text-accent",
                  "bg-muted-foreground/10 text-muted-foreground",
                  "bg-primary/10 text-primary",
                  "bg-rose-500/10 text-rose-500",
                ]
                const IconComponent = icons[idx]
                return (
                  <Card
                    key={idx}
                    className="rounded-3xl shadow-md border-0 bg-card hover:shadow-lg transition-shadow duration-300 group"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className={`w-12 h-12 rounded-2xl ${colors[idx]} flex items-center justify-center`}
                        >
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">
                          {article.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-3">
                        <Calendar className="h-3.5 w-3.5" />
                        {article.date}
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                        {article.summary}
                      </p>
                      <Button variant="ghost" className="rounded-full p-0 h-auto text-primary" asChild>
                        <a href={article.href} target="_blank" rel="noopener noreferrer">
                          {article.href === "https://sinai.ujaen.es/romanet" ? t.romanetWebsite : article.href === "https://sinai.ujaen.es/romanet/akanai/" ? t.tryAkanai : t.readFull}
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <Card className="rounded-3xl shadow-lg border-0 bg-gradient-to-br from-primary via-primary to-secondary overflow-hidden">
              <CardContent className="p-8 lg:p-12 text-center">
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-6">
                  <Bell className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">{t.stayUpdated}</h2>
                <p className="text-white/90 max-w-2xl mx-auto mb-8">
                  {t.staySubtitle}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    asChild
                    variant="secondary"
                    className="rounded-full bg-white text-primary hover:bg-white/90"
                  >
                    <Link
                      href="https://www.instagram.com/project_romanet"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.followInstagram}
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="secondary"
                    className="rounded-full bg-white text-primary hover:bg-white/90"
                  >
                    <Link
                      href="https://www.tiktok.com/@romanet.project"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.followTiktok}
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="secondary"
                    className="rounded-full bg-white text-primary hover:bg-white/90"
                  >
                    <Link
                      href="https://www.facebook.com/RomanetProject"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.followFacebook}
                    </Link>
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
