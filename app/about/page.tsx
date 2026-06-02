"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import {
  Target,
  Search,
  MessageSquareText,
  GraduationCap,
  HeartHandshake,
  Network,
  MapPin,
  Calendar,
  FolderKanban,
  Users,
  Scale,
  Lightbulb,
  Cpu,
  Megaphone,
  Baby,
  Lock,
  Eye,
  Heart,
} from "lucide-react"
import { useTranslation } from "@/components/i18n-provider"

const pageT = {
  en: {
    title: "About RomaNET",
    subtitle:
      "A groundbreaking European initiative dedicated to combating hate speech and hate crimes against Roma communities through innovative AI technology and community engagement.",
    overviewTitle: "Project Overview",
    overviewText:
      "RomaNET is a European project funded under the CERV-2024-CHAR-LITI-SPEECH programme, dedicated to fighting hate speech and hate crimes against Roma communities through innovative AI technology and community engagement. Our approach combines cutting-edge artificial intelligence with grassroots community work to create lasting change.",
    objectivesTitle: "Our Objectives",
    objectives: [
      { title: "Monitor Hate Speech", description: "Develop and implement AI-powered systems to identify and track hate speech against Roma communities across digital platforms." },
      { title: "Create Counter-Narratives", description: "Generate positive, accurate content that challenges stereotypes and promotes understanding of Roma culture and contributions." },
      { title: "Educate and Empower", description: "Provide training and resources to Roma communities and the general public on recognizing and combating discrimination." },
      { title: "Support Victims", description: "Connect individuals affected by hate speech and hate crimes with legal and psychological support services." },
      { title: "Build Networks", description: "Foster collaboration between organizations across participating countries, creating a unified European response to hate speech and discrimination against Roma communities." },
    ],
    countriesTitle: "Countries & Context",
    countriesSubtitle: "RomaNET operates across three European countries, each bringing unique perspectives and challenges.",
    spain: "Spain",
    spainText: "Home to a significant Roma population, Spain faces ongoing challenges with discrimination and hate speech. Our Spanish partners work directly with Roma communities to document incidents and provide support.",
    italy: "Italy",
    italyText: "Italian Roma communities face particular challenges in urban areas. Our Italian partners focus on youth education and digital literacy to empower the next generation.",
    greece: "Greece",
    greeceText: "Greek Roma communities often experience marginalization. Our Greek partners specialize in mediation and community dialogue to bridge gaps.",
    timelineTitle: "Project Timeline",
    startDate: "Start Date",
    startDateValue: "January 2025",
    duration: "Duration",
    durationValue: "24 Months",
    programme: "Programme",
    programmeValue: "CERV-2024-CHAR-LITI-SPEECH",
    wpTitle: "Governance & Work Packages",
    wpSubtitle: "The project is organized into five work packages, each addressing key aspects of our mission.",
    wps: [
      { id: "WP1", title: "Project Management and Coordination", description: "We ensure strong collaboration between all partners, with clear planning, regular communication, and continuous quality monitoring throughout the project." },
      { id: "WP2", title: "Legal Analysis and Cooperation", description: "We examine how hate speech and hate crimes are addressed in each country, bringing together civil society and public authorities to identify gaps and develop practical solutions." },
      { id: "WP3", title: "Capacity Building", description: "We provide training and tools for CSOs, media professionals, Roma communities, and young people—empowering them to recognise, prevent, and respond to hate speech." },
      { id: "WP4", title: "AI Solutions to Combat Hate Speech", description: "We develop innovative AI tools to detect online hate speech and generate positive counter-narratives, supported by human expertise." },
      { id: "WP5", title: "Dissemination and Awareness", description: "We raise awareness across through campaigns, educational content, and this website—promoting inclusion, rights, and respect." },
    ],
    ethicsTitle: "Ethics & Child Protection",
    ethicsSubtitle: "RomaNET adheres to the highest ethical standards in all our activities.",
    ethicsCards: [
      { title: "Child Protection", description: "All activities involving minors follow strict child protection protocols, ensuring the safety and well-being of young participants." },
      { title: "Data Protection", description: "Data protection complies with GDPR and relevant national legislation, safeguarding all personal information." },
      { title: "Human Oversight", description: "Human oversight ensures AI-generated content is accurate and appropriate, maintaining quality and cultural sensitivity." },
      { title: "Community Consent", description: "Community consent is prioritized in all research and documentation, respecting the voices and wishes of Roma communities." },
    ],
    ctaTitle: "Get in Touch",
    ctaText: "For more information about the project, partnership opportunities, or to report an incident, please reach out through our contact channels.",
    contactUs: "Contact Us",
  },
  es: {
    title: "Sobre RomaNET",
    subtitle:
      "Una iniciativa europea innovadora dedicada a combatir el discurso de odio y los delitos de odio contra las comunidades romaníes a través de la tecnología de IA innovadora y la participación comunitaria.",
    overviewTitle: "Visión General del Proyecto",
    overviewText:
      "RomaNET es un proyecto europeo financiado en el marco del programa CERV-2024-CHAR-LITI-SPEECH, dedicado a luchar contra el discurso de odio y los delitos de odio contra las comunidades romaníes a través de la tecnología de IA innovadora y la participación comunitaria. Nuestro enfoque combina la inteligencia artificial de vanguardia con el trabajo comunitario de base para crear un cambio duradero.",
    objectivesTitle: "Nuestros Objetivos",
    objectives: [
      { title: "Monitorear el Discurso de Odio", description: "Desarrollar e implementar sistemas impulsados por IA para identificar y rastrear el discurso de odio contra las comunidades romaníes en plataformas digitales." },
      { title: "Crear Contra-Narrativas", description: "Generar contenido positivo y preciso que desafíe los estereotipos y promueva la comprensión de la cultura y las contribuciones romaníes." },
      { title: "Educar y Empoderar", description: "Proporcionar capacitación y recursos a las comunidades romaníes y al público en general sobre el reconocimiento y la lucha contra la discriminación." },
      { title: "Apoyar a las Víctimas", description: "Conectar a las personas afectadas por el discurso de odio y los delitos de odio con servicios de apoyo legal y psicológico." },
      { title: "Construir Redes", description: "Fomentar la colaboración entre organizaciones en los países participantes, creando una respuesta europea unificada al discurso de odio y la discriminación contra las comunidades romaníes." },
    ],
    countriesTitle: "Países y Contexto",
    countriesSubtitle: "RomaNET opera en tres países europeos, cada uno aportando perspectivas y desafíos únicos.",
    spain: "España",
    spainText: "Hogar de una población romaní significativa, España enfrenta desafíos continuos con la discriminación y el discurso de odio. Nuestros socios españoles trabajan directamente con las comunidades romaníes para documentar incidentes y proporcionar apoyo.",
    italy: "Italia",
    italyText: "Las comunidades romaníes italianas enfrentan desafíos particulares en áreas urbanas. Nuestros socios italianos se centran en la educación juvenil y la alfabetización digital para empoderar a la próxima generación.",
    greece: "Grecia",
    greeceText: "Las comunidades romaníes griegas a menudo experimentan marginación. Nuestros socios griegos se especializan en mediación y diálogo comunitario para cerrar brechas.",
    timelineTitle: "Cronología del Proyecto",
    startDate: "Fecha de Inicio",
    startDateValue: "Enero 2025",
    duration: "Duración",
    durationValue: "24 Meses",
    programme: "Programa",
    programmeValue: "CERV-2024-CHAR-LITI-SPEECH",
    wpTitle: "Gobernanza y Paquetes de Trabajo",
    wpSubtitle: "El proyecto está organizado en cinco paquetes de trabajo, cada uno abordando aspectos clave de nuestra misión.",
    wps: [
      { id: "WP1", title: "Gestión y coordinación del proyecto", description: "Garantizamos una estrecha colaboración entre todos los socios, con una planificación clara, una comunicación regular y un control continuo de la calidad a lo largo de todo el proyecto." },
      { id: "WP2", title: "Análisis jurídico y cooperación", description: "Examinamos cómo se abordan el discurso de odio y los delitos de odio en cada país, reuniendo a la sociedad civil y a las autoridades públicas para identificar las deficiencias y desarrollar soluciones prácticas." },
      { id: "WP3", title: "Desarrollo de capacidades", description: "Ofrecemos formación y herramientas a las OSC, los profesionales de los medios de comunicación, las comunidades romaníes y los jóvenes, capacitándolos para reconocer, prevenir y responder al discurso de odio." },
      { id: "WP4", title: "Soluciones de IA para combatir el discurso de odio", description: "Desarrollamos herramientas innovadoras de IA para detectar el discurso de odio en línea y generar contra-narrativas positivas, con el apoyo de la experiencia humana." },
      { id: "WP5", title: "Difusión y sensibilización", description: "Sensibilizamos a través de campañas, contenidos educativos y este sitio web, promoviendo la inclusión, los derechos y el respeto." },
    ],
    ethicsTitle: "Ética y Protección Infantil",
    ethicsSubtitle: "RomaNET se adhiere a los más altos estándares éticos en todas nuestras actividades.",
    ethicsCards: [
      { title: "Protección Infantil", description: "Todas las actividades que involucran a menores siguen estrictos protocolos de protección infantil, garantizando la seguridad y el bienestar de los jóvenes participantes." },
      { title: "Protección de Datos", description: "La protección de datos cumple con el GDPR y la legislación nacional relevante, salvaguardando toda la información personal." },
      { title: "Supervisión Humana", description: "La supervisión humana garantiza que el contenido generado por IA sea preciso y apropiado, manteniendo la calidad y la sensibilidad cultural." },
      { title: "Consentimiento Comunitario", description: "El consentimiento comunitario se prioriza en toda la investigación y documentación, respetando las voces y los deseos de las comunidades romaníes." },
    ],
    ctaTitle: "Póngase en Contacto",
    ctaText: "Para obtener más información sobre el proyecto, oportunidades de colaboración o para denunciar un incidente, comuníquese a través de nuestros canales de contacto.",
    contactUs: "Contáctenos",
  },
  it: {
    title: "Chi è RomaNET",
    subtitle:
      "Un'iniziativa europea all'avanguardia dedicata a combattere il discorso d'odio e i reati d'odio contro le comunità rom attraverso la tecnologia innovativa dell'IA e il coinvolgimento della comunità.",
    overviewTitle: "Panoramica del Progetto",
    overviewText:
      "RomaNET è un progetto europeo finanziato nel quadro del programma CERV-2024-CHAR-LITI-SPEECH, dedicato a combattere il discorso d'odio e i reati d'odio contro le comunità rom attraverso la tecnologia innovativa dell'IA e il coinvolgimento della comunità. Il nostro approccio combina l'intelligenza artificiale all'avanguardia con il lavoro comunitario di base per creare un cambiamento duraturo.",
    objectivesTitle: "I Nostri Obiettivi",
    objectives: [
      { title: "Monitorare il Discorso d'Odio", description: "Sviluppare e implementare sistemi basati sull'IA per identificare e tracciare il discorso d'odio contro le comunità rom sulle piattaforme digitali." },
      { title: "Creare Contro-Narrazioni", description: "Generare contenuti positivi e accurati che sfidano gli stereotipi e promuovono la comprensione della cultura e dei contributi rom." },
      { title: "Educare e Empowerare", description: "Fornire formazione e risorse alle comunità rom e al pubblico in generale sul riconoscimento e la lotta contro la discriminazione." },
      { title: "Sostenere le Vittime", description: "Connettere le persone colpite dal discorso d'odio e dai reati d'odio con servizi di supporto legale e psicologico." },
      { title: "Costruire Reti", description: "Promuovere la collaborazione tra organizzazioni nei paesi partecipanti, creando una risposta europea unificata al discorso d'odio e alla discriminazione contro le comunità rom." },
    ],
    countriesTitle: "Paesi e Contesto",
    countriesSubtitle: "RomaNET opera in tre paesi europei, ognuno dei quali apporta prospettive e sfide uniche.",
    spain: "Spagna",
    spainText: "Patria di una significativa popolazione rom, la Spagna affronta sfide continue con la discriminazione e il discorso d'odio. I nostri partner spagnoli lavorano direttamente con le comunità rom per documentare gli incidenti e fornire supporto.",
    italy: "Italia",
    italyText: "Le comunità rom italiane affrontano sfide particolari nelle aree urbane. I nostri partner italiani si concentrano sull'educazione giovanile e l'alfabetizzazione digitale per empowerare la prossima generazione.",
    greece: "Grecia",
    greeceText: "Le comunità rom greche spesso sperimentano emarginazione. I nostri partner greci si specializzano nella mediazione e nel dialogo comunitario per colmare le lacune.",
    timelineTitle: "Cronologia del Progetto",
    startDate: "Data di Inizio",
    startDateValue: "Gennaio 2025",
    duration: "Durata",
    durationValue: "24 Mesi",
    programme: "Programma",
    programmeValue: "CERV-2024-CHAR-LITI-SPEECH",
    wpTitle: "Governance e Pacchetti di Lavoro",
    wpSubtitle: "Il progetto è organizzato in cinque pacchetti di lavoro, ognuno dei quali affronta aspetti chiave della nostra missione.",
    wps: [
      { id: "WP1", title: "Gestione e coordinamento del progetto", description: "Garantiamo una solida collaborazione tra tutti i partner, con una pianificazione chiara, una comunicazione regolare e un monitoraggio continuo della qualità durante tutto il progetto." },
      { id: "WP2", title: "Analisi e cooperazione legale", description: "Esaminiamo come vengono affrontati i discorsi d'odio e i crimini d'odio in ciascun paese, riunendo la società civile e le autorità pubbliche per identificare le lacune e sviluppare soluzioni pratiche." },
      { id: "WP3", title: "Sviluppo delle capacità", description: "Forniamo formazione e strumenti a organizzazioni della società civile, professionisti dei media, comunità rom e giovani, consentendo loro di riconoscere, prevenire e contrastare i discorsi d'odio." },
      { id: "WP4", title: "Soluzioni di intelligenza artificiale per combattere i discorsi d'odio", description: "Sviluppiamo strumenti innovativi di intelligenza artificiale per rilevare i discorsi d'odio online e generare contro-narrazioni positive, supportati da competenze umane." },
      { id: "WP5", title: "Diffusione e sensibilizzazione", description: "Sensibilizziamo l'opinione pubblica attraverso campagne, contenuti educativi e questo sito web, promuovendo l'inclusione, i diritti e il rispetto." },
    ],
    ethicsTitle: "Etica e Protezione dell'Infanzia",
    ethicsSubtitle: "RomaNET aderisce ai più alti standard etici in tutte le nostre attività.",
    ethicsCards: [
      { title: "Protezione dell'Infanzia", description: "Tutte le attività che coinvolgono minori seguono rigorosi protocolli di protezione dell'infanzia, garantendo la sicurezza e il benessere dei giovani partecipanti." },
      { title: "Protezione dei Dati", description: "La protezione dei dati è conforme al GDPR e alla legislazione nazionale pertinente, salvaguardando tutte le informazioni personali." },
      { title: "Supervisione Umana", description: "La supervisione umana garantisce che i contenuti generati dall'IA siano accurati e appropriati, mantenendo qualità e sensibilità culturale." },
      { title: "Consenso della Comunità", description: "Il consenso della comunità è prioritario in tutta la ricerca e la documentazione, rispettando le voci e i desideri delle comunità rom." },
    ],
    ctaTitle: "Mettiti in Contatto",
    ctaText: "Per maggiori informazioni sul progetto, opportunità di collaborazione o per segnalare un incidente, contattaci attraverso i nostri canali.",
    contactUs: "Contattaci",
  },
  el: {
    title: "Σχετικά με το RomaNET",
    subtitle:
      "Μια πρωτοποριακή ευρωπαϊκή πρωτοβουλία αφιερωμένη στην καταπολέμηση της ρητορικής μίσους και των εγκλημάτων μίσους κατά των κοινοτήτων Ρομά μέσω της καινοτόμου τεχνολογίας ΤΝ και της εμπλοκής της κοινότητας.",
    overviewTitle: "Επισκόπηση Έργου",
    overviewText:
      "Το RomaNET είναι ένα ευρωπαϊκό έργο που χρηματοδοτείται στο πλαίσιο του προγράμματος CERV-2024-CHAR-LITI-SPEECH, αφιερωμένο στην καταπολέμηση της ρητορικής μίσους και των εγκλημάτων μίσους κατά των κοινοτήτων Ρομά μέσω της καινοτόμου τεχνολογίας ΤΝ και της εμπλοκής της κοινότητας. Η προσέγγισή μας συνδυάζει την τεχνητή νοημοσύνη αιχμής με την κοινοτική εργασία βάσης για να δημιουργήσει διαρκή αλλαγή.",
    objectivesTitle: "Οι Στόχοι μας",
    objectives: [
      { title: "Παρακολούθηση Ρητορικής Μίσους", description: "Ανάπτυξη και υλοποίηση συστημάτων που υποστηρίζονται από ΤΝ για τον εντοπισμό και την παρακολούθηση της ρητορικής μίσους κατά των κοινοτήτων Ρομά σε ψηφιακές πλατφόρμες." },
      { title: "Δημιουργία Εναλλακτικών-Αφηγήσεων", description: "Παραγωγή θετικού και ακριβούς περιεχομένου που αμφισβητεί τα στερεότυπα και προωθεί την κατανόηση του πολιτισμού και των συνεισφορών των Ρομά." },
      { title: "Εκπαίδευση και Ενδυνάμωση", description: "Παροχή εκπαίδευσης και πόρων στις κοινότητες Ρομά και στο ευρύ κοινό για την αναγνώριση και την καταπολέμηση των διακρίσεων." },
      { title: "Υποστήριξη Θυμάτων", description: "Σύνδεση ατόμων που επηρεάζονται από τον ρητορική μίσους και τα εγκλήματα μίσους με νομικές και ψυχολογικές υπηρεσίες υποστήριξης." },
      { title: "Χτίσιμο Δικτύων", description: "Ενίσχυση της συνεργασίας μεταξύ οργανισμών στις συμμετέχουσες χώρες, δημιουργώντας μια ενωμένη ευρωπαϊκή απάντηση στον ρητορική μίσους και στις διακρίσεις κατά των κοινοτήτων Ρομά." },
    ],
    countriesTitle: "Χώρες και Πλαίσιο",
    countriesSubtitle: "Το RomaNET δραστηριοποιείται σε τρεις ευρωπαϊκές χώρες, η καθεμία φέρνοντας μοναδικές προοπτικές και προκλήσεις.",
    spain: "Ισπανία",
    spainText: "Φιλοξενώντας ένα σημαντικό πληθυσμό Ρομά, η Ισπανία αντιμετωπίζει συνεχείς προκλήσεις με διακρίσεις και ρητορική μίσους. Οι Ισπανοί εταίροι μας εργάζονται απευθείας με τις κοινότητες Ρομά για να τεκμηριώσουν περιστατικά και να παράσχουν υποστήριξη.",
    italy: "Ιταλία",
    italyText: "Οι ιταλικές κοινότητες Ρομά αντιμετωπίζουν ιδιαίτερες προκλήσεις στις αστικές περιοχές. Οι Ιταλοί εταίροι μας εστιάζουν στην εκπαίδευση των νέων και την ψηφιακή παιδεία για να ενδυναμώσουν την επόμενη γενιά.",
    greece: "Ελλάδα",
    greeceText: "Οι ελληνικές κοινότητες Ρομά συχνά βιώνουν περιθωριοποίηση. Οι Έλληνες εταίροι μας ειδικεύονται στη διαμεσολάβηση και τον κοινοτικό διάλογο για να γεφυρώσουν τα χάσματα.",
    timelineTitle: "Χρονοδιάγραμμα Έργου",
    startDate: "Ημερομηνία Έναρξης",
    startDateValue: "Ιανουάριος 2025",
    duration: "Διάρκεια",
    durationValue: "24 Μήνες",
    programme: "Πρόγραμμα",
    programmeValue: "CERV-2024-CHAR-LITI-SPEECH",
    wpTitle: "Διακυβέρνηση και Πακέτα Εργασίας",
    wpSubtitle: "Το έργο είναι οργανωμένο σε πέντε πακέτα εργασίας, το καθένα απευθυνόμενο σε βασικές πτυχές της αποστολής μας.",
    wps: [
      { id: "WP1", title: "Διαχείριση & Συντονισμός Έργου", description: "Διασφαλίζει την ομαλή λειτουργία και επικοινωνία μεταξύ όλων των εταίρων." },
      { id: "WP2", title: "Έρευνα & Παρακολούθηση", description: "Αναπτύσσει εργαλεία Τεχνητής Νοημοσύνης (AI) για τον εντοπισμό της ρητορικής μίσους και την καταγραφή περιστατικών." },
      { id: "WP3", title: "Δημιουργία Αντι-αφηγημάτων", description: "Χρησιμοποιεί την Τεχνητή Νοημοσύνη (AI) για τη δημιουργία θετικού περιεχομένου που καταρρίπτει τα στερεότυπα." },
      { id: "WP4", title: "Εκπαίδευση & Ανάπτυξη Ικανοτήτων", description: "Παρέχει εκπαίδευση και πόρους σε κοινότητες και ενδιαφερόμενους φορείς." },
      { id: "WP5", title: "Διάδοση & Επικοινωνία", description: "Μοιράζεται τα αποτελέσματα και τις βέλτιστες πρακτικές σε όλη την Ευρώπη." },
    ],
    ethicsTitle: "Ηθική και Προστασία Ανηλίκων",
    ethicsSubtitle: "Το RomaNET προσκολλάται στα υψηλότερα ηθικά πρότυπα σε όλες μας τις δραστηριότητες.",
    ethicsCards: [
      { title: "Προστασία Ανηλίκων", description: "Όλες οι δραστηριότητες που αφορούν ανηλίκους ακολουθούν αυστηρά πρωτόκολλα προστασίας ανηλίκων, διασφαλίζοντας την ασφάλεια και την ευημερία των νεαρών συμμετεχόντων." },
      { title: "Προστασία Δεδομένων", description: "Η προστασία δεδομένων συμμορφώνεται με το GDPR και την εθνική νομοθεσία, διασφαλίζοντας όλες τις προσωπικές πληροφορίες." },
      { title: "Ανθρώπινη Εποπτεία", description: "Η ανθρώπινη εποπτεία διασφαλίζει ότι το περιεχόμενο που δημιουργείται από ΤΝ είναι ακριβές και κατάλληλο, διατηρώντας την ποιότητα και την πολιτισμική ευαισθησία." },
      { title: "Κοινοτική Συναίνεση", description: "Η κοινοτική συναίνεση προτεραιοποιείται σε όλη την έρευνα και την τεκμηρίωση, σεβόμενη τις φωνές και τις επιθυμίες των κοινοτήτων Ρομά." },
    ],
    ctaTitle: "Επικοινωνήστε",
    ctaText: "Για περισσότερες πληροφορίες σχετικά με το έργο, ευκαιρίες συνεργασίας ή για να αναφέρετε ένα περιστατικό, επικοινωνήστε μαζί μας μέσω των καναλιών επικοινωνίας μας.",
    contactUs: "Επικοινωνήστε μαζί μας",
  },
}

const objectiveIcons = [Search, MessageSquareText, GraduationCap, HeartHandshake, Network]
const wpIcons = [FolderKanban, Scale, Lightbulb, Cpu, Megaphone]
const wpColors = [
  "text-primary bg-primary/10",
  "text-secondary bg-secondary/10",
  "text-accent-foreground bg-accent/20",
  "text-primary bg-primary/10",
  "text-secondary bg-secondary/10",
]
const ethicsIcons = [Baby, Lock, Eye, Heart]

export default function AboutPage() {
  const { lang } = useTranslation()
  const t = pageT[lang]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              {t.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              {t.subtitle}
            </p>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="rounded-3xl shadow-lg border-0 bg-primary/5 overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">{t.overviewTitle}</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">{t.overviewText}</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Objectives - Bento Grid */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">{t.objectivesTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.objectives.map((obj, idx) => {
                const IconComponent = objectiveIcons[idx]
                const isWide = idx === 4
                return (
                  <Card key={idx} className={`rounded-3xl shadow-md border-0 bg-card hover:shadow-lg transition-shadow ${isWide ? "md:col-span-2 lg:col-span-2" : ""}`}>
                    <CardContent className="p-8">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                        <IconComponent className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">{obj.title}</h3>
                      <p className="text-muted-foreground">{obj.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Countries & Context */}
        <section className="py-12 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.countriesTitle}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.countriesSubtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: t.spain, text: t.spainText, gradient: "from-red-500 via-yellow-400 to-red-500" },
                { name: t.italy, text: t.italyText, gradient: "from-green-600 via-white to-red-500" },
                { name: t.greece, text: t.greeceText, gradient: "from-blue-600 via-white to-blue-600" },
              ].map((c) => (
                <Card key={c.name} className="rounded-3xl shadow-md border-0 bg-card hover:shadow-lg transition-shadow overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${c.gradient}`} />
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <MapPin className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-semibold text-foreground">{c.name}</h3>
                    </div>
                    <p className="text-muted-foreground">{c.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Project Timeline */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="rounded-3xl shadow-lg border-0 bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">{t.timelineTitle}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center md:text-left">
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-2">{t.startDate}</p>
                    <p className="text-2xl font-bold text-foreground">{t.startDateValue}</p>
                  </div>
                  <div className="text-center md:text-left">
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-2">{t.duration}</p>
                    <p className="text-2xl font-bold text-foreground">{t.durationValue}</p>
                  </div>
                  <div className="text-center md:text-left">
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-2">{t.programme}</p>
                    <p className="text-2xl font-bold text-foreground">{t.programmeValue}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Work Packages - Bento Grid */}
        <section className="py-12 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.wpTitle}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.wpSubtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.wps.map((wp, idx) => {
                const IconComponent = wpIcons[idx]
                const isWide = idx === 0 || idx === 4
                return (
                  <Card key={wp.id} className={`rounded-3xl shadow-md border-0 bg-card hover:shadow-lg transition-shadow ${isWide ? "lg:col-span-2" : ""}`}>
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ${wpColors[idx]}`}>
                          <IconComponent className="h-8 w-8" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`text-sm font-bold px-3 py-1 rounded-full ${wpColors[idx]}`}>{wp.id}</span>
                          </div>
                          <h3 className="text-xl font-semibold text-foreground mb-3">{wp.title}</h3>
                          <p className="text-muted-foreground">{wp.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Ethics & Child Protection */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.ethicsTitle}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.ethicsSubtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.ethicsCards.map((card, idx) => {
                const IconComponent = ethicsIcons[idx]
                return (
                  <Card key={idx} className="rounded-3xl shadow-md border-0 bg-card hover:shadow-lg transition-shadow">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">{card.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{card.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="rounded-3xl shadow-lg border-0 bg-gradient-to-br from-primary/10 to-secondary/10">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{t.ctaTitle}</h2>
                <p className="text-lg text-muted-foreground mb-6">{t.ctaText}</p>
                <a
                  href="/report-support"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
                >
                  {t.contactUs}
                </a>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
