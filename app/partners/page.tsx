"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Users,
  Lightbulb,
  Globe,
  Handshake,
  ExternalLink,
  GraduationCap,
  Heart,
  Scale,
  MessageCircle,
} from "lucide-react"
import Link from "next/link"
import { useTranslation } from "@/components/i18n-provider"

const pageT = {
  en: {
    badge: "Our Network",
    title: "Our Partnership Network",
    subtitle:
      "RomaNET brings together leading organizations from across Europe, each contributing unique expertise and local knowledge to our mission of combating hate speech and promoting Roma rights.",
    whyTitle: "Why Partnerships Matter",
    whySubtitle:
      "Combating hate speech requires collaboration, diverse expertise, and a unified voice",
    benefits: [
      { title: "Local Expertise", description: "Understanding specific contexts and challenges in each country" },
      { title: "Diverse Skills", description: "Combining research, activism, and technology for maximum impact" },
      { title: "Wide Reach", description: "Accessing communities across multiple European countries" },
      { title: "Stronger Voice", description: "Speaking collectively for greater impact and lasting change" },
    ],
    meetTitle: "Meet Our Partners",
    meetSubtitle:
      "Organizations that share our values and commitment to fighting discrimination",
    visitWebsite: "Visit Website",
    responsibilitiesTitle: "Partner Responsibilities",
    responsibilities: [
      "Project governance and decision-making",
      "Implementation of work packages",
      "Community engagement and outreach",
      "Research and documentation",
      "Dissemination of results",
    ],
    ctaTitle: "Join Our Network",
    ctaSubtitle:
      "We're always open to collaborations with organizations that share our mission. If you're interested in partnering with RomaNET, we'd love to hear from you.",
    contactUs: "Contact Us",
  },
  es: {
    badge: "Nuestra Red",
    title: "Nuestra Red de Colaboración",
    subtitle:
      "RomaNET reúne a organizaciones líderes de toda Europa, cada una aportando experiencia única y conocimiento local a nuestra misión de combatir el discurso de odio y promover los derechos de los romaníes.",
    whyTitle: "Por qué Importan las Colaboraciones",
    whySubtitle:
      "Combatir el discurso de odio requiere colaboración, experiencia diversa y una voz unificada",
    benefits: [
      { title: "Experiencia Local", description: "Comprender contextos y desafíos específicos en cada país" },
      { title: "Habilidades Diversas", description: "Combinar investigación, activismo y tecnología para máximo impacto" },
      { title: "Amplio Alcance", description: "Acceder a comunidades en múltiples países europeos" },
      { title: "Voz más Fuerte", description: "Hablar colectivamente para un mayor impacto y cambio duradero" },
    ],
    meetTitle: "Conozca a Nuestros Socios",
    meetSubtitle:
      "Organizaciones que comparten nuestros valores y compromiso con la lucha contra la discriminación",
    visitWebsite: "Visitar Sitio Web",
    responsibilitiesTitle: "Responsabilidades de los Socios",
    responsibilities: [
      "Gobernanza y toma de decisiones del proyecto",
      "Implementación de paquetes de trabajo",
      "Compromiso y alcance comunitario",
      "Investigación y documentación",
      "Difusión de resultados",
    ],
    ctaTitle: "Únase a Nuestra Red",
    ctaSubtitle:
      "Siempre estamos abiertos a colaboraciones con organizaciones que comparten nuestra misión. Si está interesado en asociarse con RomaNET, nos encantaría saber de usted.",
    contactUs: "Contáctenos",
  },
  it: {
    badge: "La Nostra Rete",
    title: "La Nostra Rete di Collaborazione",
    subtitle:
      "RomaNET riunisce organizzazioni leader da tutta Europa, ognuna delle quali contribuisce con competenze uniche e conoscenze locali alla nostra missione di combattere il discorso d'odio e promuovere i diritti dei rom.",
    whyTitle: "Perché le Collaborazioni Contano",
    whySubtitle:
      "Combattere il discorso d'odio richiede collaborazione, competenze diverse e una voce unificata",
    benefits: [
      { title: "Competenza Locale", description: "Comprendere contesti e sfide specifiche in ogni paese" },
      { title: "Competenze Diverse", description: "Combinare ricerca, attivismo e tecnologia per il massimo impatto" },
      { title: "Ampia Portata", description: "Accedere a comunità in più paesi europei" },
      { title: "Voce più Forte", description: "Parlare collettivamente per un maggiore impatto e cambiamento duraturo" },
    ],
    meetTitle: "Incontra i Nostri Partner",
    meetSubtitle:
      "Organizzazioni che condividono i nostri valori e l'impegno nella lotta contro la discriminazione",
    visitWebsite: "Visita il Sito Web",
    responsibilitiesTitle: "Responsabilità dei Partner",
    responsibilities: [
      "Governance del progetto e processo decisionale",
      "Implementazione dei pacchetti di lavoro",
      "Coinvolgimento e sensibilizzazione della comunità",
      "Ricerca e documentazione",
      "Diffusione dei risultati",
    ],
    ctaTitle: "Unisciti alla Nostra Rete",
    ctaSubtitle:
      "Siamo sempre aperti a collaborazioni con organizzazioni che condividono la nostra missione. Se sei interessato a collaborare con RomaNET, ci piacerebbe sentirti.",
    contactUs: "Contattaci",
  },
  el: {
    badge: "Το Δίκτυό μας",
    title: "Το Δίκτυο Συνεργασίας μας",
    subtitle:
      "Το RomaNET φέρνει κοντά κορυφαίους οργανισμούς από όλη την Ευρώπη, ο καθένας από τους οποίους συνεισφέρει μοναδική εμπειρογνωμοσύνη και τοπική γνώση στην αποστολή μας να καταπολεμήσουμε τη ρητορική μίσους και να προωθήσουμε τα δικαιώματα των Ρομά.",
    whyTitle: "Γιατί μετράει η Συνεργασία",
    whySubtitle:
      "Η καταπολέμηση της ρητορικής μίσους απαιτεί συνεργασία, ποικίλη εμπειρογνωμοσύνη και μια ενωμένη φωνή",
    benefits: [
      { title: "Τοπική Εμπειρογνωμοσύνη", description: "Κατανόηση συγκεκριμένων συμφραζομένων και προκλήσεων σε κάθε χώρα" },
      { title: "Ποικίλες Δεξιότητες", description: "Συνδυασμός έρευνας, ακτιβισμού και τεχνολογίας για μέγιστο αντίκτυπο" },
      { title: "Ευρεία Εμβέλεια", description: "Πρόσβαση σε κοινότητες σε πολλές ευρωπαϊκές χώρες" },
      { title: "Ισχυρότερη Φωνή", description: "Συλλογική ομιλία για μεγαλύτερο αντίκτυπο και διαρκή αλλαγή" },
    ],
    meetTitle: "Γνωρίστε τους Συνεργάτες μας",
    meetSubtitle:
      "Οργανισμοί που μοιράζονται τις αξίες μας και τη δέσμευσή μας να καταπολεμήσουμε τις διακρίσεις",
    visitWebsite: "Επισκεφθείτε τον Ιστότοπο",
    responsibilitiesTitle: "Ευθύνες των Συνεργατών",
    responsibilities: [
      "Διακυβέρνηση έργου και λήψη αποφάσεων",
      "Υλοποίηση πακέτων εργασίας",
      "Εμπλοκή και προσέγγιση της κοινότητας",
      "Έρευνα και τεκμηρίωση",
      "Διάδοση αποτελεσμάτων",
    ],
    ctaTitle: "Ενταχθείτε στο Δίκτυό μας",
    ctaSubtitle:
      "Είμαστε πάντα ανοιχτοί σε συνεργασίες με οργανισμούς που μοιράζονται την αποστολή μας. Αν ενδιαφέρεστε να συνεργαστείτε με το RomaNET, θα θέλαμε να επικοινωνήσετε μαζί μας.",
    contactUs: "Επικοινωνήστε μαζί μας",
  },
}

const partnersData = [
  {
    name: "Kamira",
    fullName: "National Federation of Romani Women's Associations",
    country: "Spain",
    flag: "🇪🇸",
    color: "from-rose-500/20 to-amber-500/20",
    borderColor: "border-rose-200",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
    website: "https://federacionkamira.com/",
    icon: Heart,
    description: {
      en: `Kamira is a National Federation of Romani Women's Associations that brings together a network of 25 Romani organizations from across Spain. We work to promote equality, social inclusion, and the rights of Romani women, with a focus on empowerment, access to education and public services, the prevention of gender-based violence, and the fight against discrimination. Kamira supports Romani women in overcoming structural inequalities and improving their quality of life through community-based work and in collaboration with public institutions and authorities.`,
      es: `Kamira es una Federación Nacional de Asociaciones de Mujeres Gitanas que agrupa una red de 25 organizaciones gitanas de toda España. Trabajamos para promover la igualdad, la inclusión social y los derechos de las mujeres gitanas, con especial atención al empoderamiento, el acceso a la educación y los servicios públicos, la prevención de la violencia de género y la lucha contra la discriminación. Kamira apoya a las mujeres gitanas en la superación de las desigualdades estructurales y en la mejora de su calidad de vida mediante el trabajo comunitario y en colaboración con las instituciones y autoridades públicas.`,
      it: `Kamira è una Federazione Nazionale di Associazioni di Donne Rom che riunisce una rete di 25 organizzazioni rom provenienti da tutta la Spagna. Lavoriamo per promuovere l'uguaglianza, l'inclusione sociale e i diritti delle donne rom, con un focus sull'empowerment, l'accesso all'istruzione e ai servizi pubblici, la prevenzione della violenza di genere e la lotta contro la discriminazione. Kamira sostiene le donne rom nel superamento delle disuguaglianze strutturali e nel miglioramento della loro qualità della vita attraverso il lavoro comunitario e in collaborazione con istituzioni e autorità pubbliche.`,
      el: `Η Kamira είναι μια Εθνική Ομοσπονδία Συλλόγων Γυναικών Ρομά που συγκεντρώνει ένα δίκτυο 25 οργανώσεων Ρομά από όλη την Ισπανία. Εργαζόμαστε για την προώθηση της ισότητας, της κοινωνικής ένταξης και των δικαιωμάτων των γυναικών Ρομά, με έμφαση στην ενδυνάμωση, την πρόσβαση στην εκπαίδευση και τις δημόσιες υπηρεσίες, την πρόληψη της έμφυλης βίας και την καταπολέμηση των διακρίσεων. Η Kamira υποστηρίζει τις γυναίκες Ρομά στην υπέρβαση των δομικών ανισοτήτων και στη βελτίωση της ποιότητας ζωής τους μέσω της κοινοτικής εργασίας και σε συνεργασία με δημόσιους θεσμούς και αρχές.`,
    },
  },
  {
    name: "University of Jaén",
    fullName: "SINAI Research Group",
    country: "Spain",
    flag: "🇪🇸",
    color: "from-blue-500/20 to-indigo-500/20",
    borderColor: "border-blue-200",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    website: "https://www.ujaen.es",
    icon: GraduationCap,
    description: {
      en: `The University of Jaén (UJA) is a benchmark in the generation and transfer of cutting-edge knowledge, renowned for its ability to transform academic research into solutions with high social and technological impact. In this project, the UJA participates through the SINAI research group (Intelligent Systems for Information Access), an excellence team with an internationally recognized track record in the field of Natural Language Processing (NLP). In this initiative, the SINAI group puts its expertise at the service of social innovation to combat hate speech and anti-Gypsyism, leading the development of advanced technological tools for bias detection and the automatic generation of counter-narratives. Thus, the UJA combines scientific rigor in Artificial Intelligence with a firm ethical commitment, providing effective digital solutions to promote inclusion and protect the dignity of vulnerable groups in the digital environment.`,
      es: `La Universidad de Jaén (UJA) es un referente en la generación y transferencia de conocimiento de vanguardia, reconocida por su capacidad para transformar la investigación académica en soluciones de alto impacto social y tecnológico. En este proyecto, la UJA participa a través del grupo de investigación SINAI (Sistemas Inteligentes de Acceso a la Información), un equipo de excelencia con una trayectoria internacionalmente reconocida en el campo del Procesamiento del Lenguaje Natural (PLN). En esta iniciativa, el grupo SINAI pone su experiencia al servicio de la innovación social para combatir el discurso de odio y el antigitanismo, liderando el desarrollo de herramientas tecnológicas avanzadas para la detección de sesgos y la generación automática de contra-narrativas. Así, la UJA combina el rigor científico en Inteligencia Artificial con un firme compromiso ético, proporcionando soluciones digitales efectivas para promover la inclusión y proteger la dignidad de los grupos vulnerables en el entorno digital.`,
      it: `L'Università di Jaén (UJA) è un punto di riferimento nella generazione e nel trasferimento di conoscenze all'avanguardia, riconosciuta per la sua capacità di trasformare la ricerca accademica in soluzioni ad alto impatto sociale e tecnologico. In questo progetto, l'UJA partecipa attraverso il gruppo di ricerca SINAI (Intelligent Systems for Information Access), un team di eccellenza con un track record internazionalmente riconosciuto nel campo del Natural Language Processing (NLP). In questa iniziativa, il gruppo SINAI mette la propria esperienza al servizio dell'innovazione sociale per combattere il discorso d'odio e l'antiziganismo, guidando lo sviluppo di strumenti tecnologici avanzati per il rilevamento dei bias e la generazione automatica di contro-narrazioni. Così, l'UJA combina il rigore scientifico nell'Intelligenza Artificiale con un fermo impegno etico, fornendo soluzioni digitali efficaci per promuovere l'inclusione e proteggere la dignità dei gruppi vulnerabili nell'ambiente digitale.`,
      el: `Το Πανεπιστήμιο της Χαέν (UJA) είναι σημείο αναφοράς στη δημιουργία και τη μεταφορά πρωτοποριακής γνώσης, διακεκριμένο για την ικανότητά του να μετατρέπει την ακαδημαϊκή έρευνα σε λύσεις με υψηλό κοινωνικό και τεχνολογικό αντίκτυπο. Σε αυτό το έργο, το UJA συμμετέχει μέσω της ερευνητικής ομάδας SINAI (Intelligent Systems for Information Access), μιας ομάδας αριστείας με διεθνώς αναγνωρισμένο έργο στον τομέα της Επεξεργασίας Φυσικής Γλώσσας (NLP). Σε αυτή την πρωτοβουλία, η ομάδα SINAI θέτει την εμπειρογνωμοσύνη της στην υπηρεσία της κοινωνικής καινοτομίας για την καταπολέμηση της ρητορικής μίσους και του αντιτσιγγανισμού, ηγούμενη της ανάπτυξης προηγμένων τεχνολογικών εργαλείων για την ανίχνευση προκατάληψης και την αυτόματη δημιουργία αντι-αφηγήσεων. Έτσι, το UJA συνδυάζει την επιστημονική αυστηρότητα της Τεχνητής Νοημοσύνης με μια σταθερή ηθική δέσμευση, παρέχοντας αποτελεσματικές ψηφιακές λύσεις για την προώθηση της ένταξης και την προστασία της αξιοπρέπειας των ευάλωτων ομάδων στο ψηφιακό περιβάλλον.`,
    },
  },
  {
    name: "MedRoma",
    fullName: "Association of Greek Roma Mediators",
    country: "Greece",
    flag: "🇬🇷",
    color: "from-sky-500/20 to-cyan-500/20",
    borderColor: "border-sky-200",
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
    website: "#",
    icon: MessageCircle,
    description: {
      en: `The Association of Greek Roma Mediators promotes the social inclusion of Roma, acting as a communication bridge between the communities and public authorities. Our main goal is to combat discrimination and facilitate access to health, education, and employment services. At the same time, we focus on defending human rights and empowering women. Through the RomaNet program, we strengthen institutional dialogue and incident reporting mechanisms thus building trust and ensuring meaningful support for victims.`,
      es: `La Asociación de Mediadores Griegos Roma promueve la inclusión social de los romaníes, actuando como puente de comunicación entre las comunidades y las autoridades públicas. Nuestro objetivo principal es combatir la discriminación y facilitar el acceso a los servicios de salud, educación y empleo. Al mismo tiempo, nos centramos en la defensa de los derechos humanos y el empoderamiento de las mujeres. A través del programa RomaNet, fortalecemos el diálogo institucional y los mecanismos de denuncia de incidentes, construyendo confianza y garantizando un apoyo significativo para las víctimas.`,
      it: `L'Associazione dei Mediatori Greci Rom promuove l'inclusione sociale dei rom, agendo da ponte di comunicazione tra le comunità e le autorità pubbliche. Il nostro obiettivo principale è combattere la discriminazione e facilitare l'accesso ai servizi sanitari, educativi e del lavoro. Allo stesso tempo, ci concentriamo sulla difesa dei diritti umani e sull'empowerment delle donne. Attraverso il programma RomaNet, rafforziamo il dialogo istituzionale e i meccanismi di segnalazione degli incidenti, costruendo fiducia e garantendo un supporto significativo per le vittime.`,
      el: `Ο Σύλλογος Ελλήνων Ρομά Διαμεσολαβητών προωθεί την κοινωνική ένταξη των Ρομά, ενεργώντας ως γέφυρα επικοινωνίας μεταξύ των κοινοτήτων και των δημόσιων αρχών. Ο κύριος στόχος μας είναι η καταπολέμηση των διακρίσεων και η διευκόλυνση της πρόσβασης σε υπηρεσίες υγείας, εκπαίδευσης και απασχόλησης. Ταυτόχρονα, εστιάζουμε στην υπεράσπιση των ανθρωπίνων δικαιωμάτων και την ενδυνάμωση των γυναικών. Μέσω του προγράμματος RomaNet, ενισχύουμε τον θεσμικό διάλογο και τους μηχανισμούς αναφοράς περιστατικών, χτίζοντας εμπιστοσύνη και διασφαλίζοντας ουσιαστική υποστήριξη για τα θύματα.`,
    },
  },
  {
    name: "Romni APS",
    fullName: "Romani Women-Led Organization",
    country: "Italy",
    flag: "🇮🇹",
    color: "from-emerald-500/20 to-teal-500/20",
    borderColor: "border-emerald-200",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    website: "https://www.romni.org",
    icon: Scale,
    description: {
      en: `ROMNI APS is an organization led by Romani women and based in Italy. We are committed to promoting the rights, inclusion, and empowerment of Romani women and girls. Our activities focus on education, participation, combating discrimination, and community support. We collaborate with local, national, and international partners to amplify the voices of the Roma. Through projects such as RomaNET, we contribute to raising awareness, advocating for rights, and fostering positive social change.`,
      es: `ROMNI APS es una organización dirigida por mujeres gitanas con sede en Italia. Estamos comprometidas con promover los derechos, la inclusión y el empoderamiento de las mujeres y niñas gitanas. Nuestras actividades se centran en la educación, la participación, la lucha contra la discriminación y el apoyo comunitario. Colaboramos con socios locales, nacionales e internacionales para amplificar las voces de los romaníes. A través de proyectos como RomaNET, contribuimos a la sensibilización, la defensa de los derechos y el fomento del cambio social positivo.`,
      it: `ROMNI APS è un'organizzazione guidata da donne rom con sede in Italia. Siamo impegnate a promuovere i diritti, l'inclusione e l'empowerment delle donne e delle ragazze rom. Le nostre attività si concentrano sull'istruzione, la partecipazione, la lotta contro la discriminazione e il sostegno alla comunità. Collaboriamo con partner locali, nazionali e internazionali per amplificare le voci dei rom. Attraverso progetti come RomaNET, contribuiamo alla sensibilizzazione, alla difesa dei diritti e alla promozione del cambiamento sociale positivo.`,
      el: `Η ROMNI APS είναι μια οργάνωση που διευθύνεται από γυναίκες Ρομά με έδρα την Ιταλία. Είμαστε προσηλωμένες στην προώθηση των δικαιωμάτων, της ένταξης και της ενδυνάμωσης των γυναικών και κοριτσιών Ρομά. Οι δραστηριότητές μας εστιάζουν στην εκπαίδευση, τη συμμετοχή, την καταπολέμηση των διακρίσεων και την κοινοτική υποστήριξη. Συνεργαζόμαστε με τοπικούς, εθνικούς και διεθνείς εταίρους για να ενισχύσουμε τις φωνές των Ρομά. Μέσω έργων όπως το RomaNET, συνεισφέρουμε στην ευαισθητοποίηση, την υπεράσπιση των δικαιωμάτων και την προώθηση της θετικής κοινωνικής αλλαγής.`,
    },
  },
]

const benefitIcons = [Globe, Lightbulb, Users, Handshake]

export default function PartnersPage() {
  const { lang } = useTranslation()
  const t = pageT[lang]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-6xl mx-auto text-center">
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

        {/* Why Partnerships Matter */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t.whyTitle}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t.whySubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.benefits.map((benefit, index) => {
                const IconComponent = benefitIcons[index]
                return (
                  <Card key={index} className="rounded-3xl border-0 shadow-sm bg-card hover:shadow-md transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Partner Cards */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t.meetTitle}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t.meetSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {partnersData.map((partner, index) => {
                const IconComponent = partner.icon
                return (
                  <Card
                    key={index}
                    className={`rounded-3xl border ${partner.borderColor} shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group`}
                  >
                    {/* Gradient Header */}
                    <div className={`h-32 bg-gradient-to-br ${partner.color} relative flex items-center justify-center`}>
                      <div className={`w-20 h-20 rounded-2xl ${partner.iconBg} flex items-center justify-center shadow-lg`}>
                        <IconComponent className={`h-10 w-10 ${partner.iconColor}`} />
                      </div>
                      <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1">
                        <span className="text-lg">{partner.flag}</span>
                        <span className="text-sm font-medium text-foreground">{partner.country}</span>
                      </div>
                    </div>

                    <CardContent className="p-8">
                      <div className="mb-2">
                        <h3 className="text-2xl font-bold text-foreground mb-1">{partner.name}</h3>
                        <p className="text-sm text-muted-foreground">{partner.fullName}</p>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                        {partner.description[lang]}
                      </p>

                      <Link href={partner.website} target="_blank" rel="noopener noreferrer">
                        <Button
                          variant="outline"
                          className="w-full rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                        >
                          {t.visitWebsite}
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Partner Responsibilities */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <Card className="rounded-3xl border-0 shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
                  {t.responsibilitiesTitle}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {t.responsibilities.map((responsibility, index) => (
                    <div key={index} className="flex items-center gap-3 bg-card rounded-xl p-4">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-semibold text-sm">{index + 1}</span>
                      </div>
                      <span className="text-foreground font-medium">{responsibility}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Join Network CTA */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="rounded-3xl border-0 shadow-xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground overflow-hidden">
              <CardContent className="p-8 md:p-12 text-center">
                <Handshake className="h-16 w-16 mx-auto mb-6 opacity-90" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {t.ctaTitle}
                </h2>
                <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                  {t.ctaSubtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/report-support">
                    <Button size="lg" variant="secondary" className="rounded-xl px-8">
                      {t.contactUs}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
