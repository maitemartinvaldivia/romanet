"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import {
  Scan,
  BarChart3,
  MessageSquarePlus,
  Users,
  Brain,
  Globe,
  Shield,
  Search,
  CheckCircle,
  FileText,
  UserCheck,
  Send,
  BookOpen,
  Heart,
  Palette,
  Megaphone,
  Sparkles,
  Eye,
  Lock,
  Scale,
  ExternalLink,
} from "lucide-react"
import { useTranslation } from "@/components/i18n-provider"

const pageT = {
  en: {
    badge: "AI-Powered Innovation",
    title: "Innovation in Counter-Narratives",
    subtitle:
      "RomaNET pioneers the use of artificial intelligence to combat hate speech against Roma communities. Our AI-powered approach combines cutting-edge technology with human expertise to create positive, accurate counter-narratives.",
    howTitle: "How Our AI Works",
    howSubtitle: "Our three-step process combines advanced technology with human expertise",
    steps: [
      {
        num: "1",
        title: "Human-Led Monitoring & Input",
        description: "Our network of human mediators continuously monitors digital platforms to identify and report hate speech targeting Roma communities.",
        points: [
          "Expert Human Review: Experienced mediators identify and collect real instances of online hate.",
          "Multi-Language Coverage: Native-speaking mediators cover all project countries and cultural contexts.",
          "Targeted Message Selection: Specific harmful narratives are selected for deep analysis and response preparation.",
          "Community-Ground Focus: Real-time awareness driven by those working directly on the ground.",
        ],
      },
      {
        num: "2",
        title: "Analysis & Language Technologies",
        description: "Once hate speech messages are inputted by mediators, we apply advanced language technologies to analyze and deconstruct them.",
        points: [
          "Natural Language Processing (NLP): Technical analysis of the linguistic structure and intent of harmful content.",
          "Narrative Deconstruction: Identification of the core stereotypes, tropes, and patterns used in the message.",
          "Impact & Context Analysis: Understanding the specific narrative trends and how they proliferate across networks.",
          "Data-Driven Insights: Mapping common narratives over time to better target counter-narratives.",
        ],
      },
      {
        num: "3",
        title: "AI Counter-Narrative Generation & Feedback Loop",
        description: "Next-generation Large Language Models (LLMs) assist mediators by generating multiple positive and empathetic counter-narratives for human selection.",
        points: [
          "Automated Generation: The system proposes several tailored counter-narratives that challenge stereotypes with facts and storytelling.",
          "Human-in-the-Loop: Mediators review, select, and freely modify the best AI-generated response.",
          "Feedback Server Integration: Selected and approved responses are securely stored on our server to monitor feedback.",
          "Continuous Model Optimization: Human interactions, edits, and preferences are used to retrain and feed back into the models, dynamically adapting them to the mediators' needs.",
        ],
      },
    ],
    innovationTitle: "The Innovation of Our Model",
    innovationSubtitle: "What makes RomaNET different from other approaches",
    innovations: [
      {
        title: "Human-Centered AI",
        description: "Unlike fully automated systems, RomaNET places humans at the center of everything we do.",
        points: ["AI assists, humans decide", "Community voices guide content creation", "Cultural sensitivity is prioritized", "Accuracy is verified by experts"],
      },
      {
        title: "Context-Aware",
        description: "Our AI understands the full context of hate speech, not just keywords.",
        points: ["Cultural nuances across different countries", "Historical context of antigypsyism", "Language variations and dialects", "Platform-specific communication styles"],
      },
      {
        title: "Ethical Framework",
        description: "We follow strict ethical guidelines in all our AI operations.",
        points: ["Transparency in AI operations", "Data protection and privacy", "No harmful content generation", "Regular bias auditing"],
      },
    ],
    creatingTitle: "Creating Counter-Narratives",
    creatingSubtitle: "Our six-step process ensures quality, accuracy, and community involvement",
    creationSteps: [
      { title: "Identify the Narrative", description: "AI analyzes hate speech to identify the false narrative or stereotype being promoted." },
      { title: "Research & Fact-Check", description: "Our team researches accurate information to counter the false narrative with verified facts." },
      { title: "AI-Assisted Content Creation", description: "AI generates draft content that is engaging, shareable, uses appropriate tone, and includes compelling storytelling." },
      { title: "Human Review & Refinement", description: "Content experts from Roma communities review AI-generated drafts, ensure cultural authenticity, and add personal perspectives." },
      { title: "Community Approval", description: "Roma community members approve final content before publication, ensuring authentic representation." },
      { title: "Strategic Distribution", description: "Content is shared through social media channels, partner organizations, community networks, and media outlets." },
    ],
    typesTitle: "Types of Counter-Narratives",
    typesSubtitle: "We create diverse content formats to reach different audiences",
    types: [
      { title: "Educational Content", points: ["Historical facts about Roma contributions", "Cultural information", "Myth-busting infographics"] },
      { title: "Personal Stories", points: ["Profiles of Roma professionals and leaders", "Success stories", "Day-in-the-life content"] },
      { title: "Artistic Expression", points: ["Music and dance showcases", "Visual art from Roma creators", "Poetry and literature"] },
      { title: "Community Initiatives", points: ["Positive news from Roma communities", "Volunteer and activism highlights", "Cultural events and celebrations"] },
    ],
    privacyTitle: "Privacy & Ethics",
    privacySubtitle: "Our commitment to responsible AI use and data protection",
    privacyItems: [
      { title: "Public Content Only", description: "We only monitor publicly available content" },
      { title: "GDPR Compliant", description: "Personal data is protected under GDPR" },
      { title: "Anonymization", description: "Anonymization protects identities" },
      { title: "Ethical Oversight", description: "Ethical review board oversees operations" },
    ],
    ctaTitle: "Experience Our Counter-Narratives",
    ctaSubtitle: "Explore the positive content created by our AI-assisted process and join us in changing the narrative about Roma communities.",
    reportBtn: "Report Hate Speech",
    learnBtn: "Learn More About RomaNET",
    akanaiTitle: "Try AkanAI",
    akanaiSubtitle: "Generate positive counter-narratives instantly with our AI-powered platform.",
    akanaiBtn: "Launch AkanAI",
  },
  es: {
    badge: "Innovación Impulsada por IA",
    title: "Innovación en Contra-Narrativas",
    subtitle:
      "RomaNET es pionero en el uso de la inteligencia artificial para combatir el discurso de odio contra las comunidades romaníes. Nuestro enfoque basado en IA combina tecnología de vanguardia con experiencia humana para crear contra-narrativas positivas y precisas.",
    howTitle: "Cómo Funciona Nuestra IA",
    howSubtitle: "Nuestro proceso de tres pasos combina tecnología avanzada con experiencia humana",
    steps: [
      {
        num: "1",
        title: "Monitoreo e Input Dirigido por Humanos",
        description: "Nuestra red de mediadores humanos monitorea continuamente las plataformas digitales para identificar y reportar discurso de odio dirigido a las comunidades romaníes.",
        points: [
          "Revisión Humana Experta: Mediadores experimentados identifican y recopilan instancias reales de odio en línea.",
          "Cobertura Multilingüe: Mediadores nativos cubren todos los países y contextos culturales del proyecto.",
          "Selección de Mensajes Específicos: Se seleccionan narrativas dañinas específicas para análisis profundo y preparación de respuestas.",
          "Enfoque en la Comunidad: Conciencia en tiempo real impulsada por quienes trabajan directamente en el terreno.",
        ],
      },
      {
        num: "2",
        title: "Análisis y Tecnologías del Lenguaje",
        description: "Una vez que los mediadores introducen los mensajes de odio, aplicamos tecnologías avanzadas del lenguaje para analizarlos y deconstruirlos.",
        points: [
          "Procesamiento del Lenguaje Natural (PLN): Análisis técnico de la estructura lingüística y la intención del contenido dañino.",
          "Deconstrucción de Narrativas: Identificación de los estereotipos, tropos y patrones fundamentales utilizados en el mensaje.",
          "Análisis de Impacto y Contexto: Comprensión de las tendencias narrativas específicas y cómo proliferan en las redes.",
          "Información Basada en Datos: Mapeo de narrativas comunes a lo largo del tiempo para orientar mejor las contra-narrativas.",
        ],
      },
      {
        num: "3",
        title: "Generación de Contra-Narrativas con IA y Bucle de Retroalimentación",
        description: "Modelos de Lenguaje de Gran Escala (LLM) de última generación asisten a los mediadores generando múltiples contra-narrativas positivas y empáticas para selección humana.",
        points: [
          "Generación Automatizada: El sistema propone varias contra-narrativas adaptadas que desafían estereotipos con hechos y narrativas.",
          "Humano en el Circuito: Los mediadores revisan, seleccionan y modifican libremente la mejor respuesta generada por la IA.",
          "Integración con Servidor de Retroalimentación: Las respuestas seleccionadas y aprobadas se almacenan de forma segura para monitorear la retroalimentación.",
          "Optimización Continua del Modelo: Las interacciones, ediciones y preferencias humanas se utilizan para reentrenar y retroalimentar los modelos, adaptándolos dinámicamente a las necesidades de los mediadores.",
        ],
      },
    ],
    innovationTitle: "La Innovación de Nuestro Modelo",
    innovationSubtitle: "Qué hace que RomaNET sea diferente de otros enfoques",
    innovations: [
      {
        title: "IA Centrada en el Humano",
        description: "A diferencia de los sistemas completamente automatizados, RomaNET pone a los humanos en el centro de todo lo que hacemos.",
        points: ["La IA asiste, los humanos deciden", "Las voces de la comunidad guían la creación de contenido", "La sensibilidad cultural es prioritaria", "La precisión es verificada por expertos"],
      },
      {
        title: "Consciente del Contexto",
        description: "Nuestra IA comprende el contexto completo del discurso de odio, no solo palabras clave.",
        points: ["Matices culturales en diferentes países", "Contexto histórico del antigitanismo", "Variaciones lingüísticas y dialectos", "Estilos de comunicación específicos de cada plataforma"],
      },
      {
        title: "Marco Ético",
        description: "Seguimos estrictas pautas éticas en todas nuestras operaciones de IA.",
        points: ["Transparencia en las operaciones de IA", "Protección de datos y privacidad", "Sin generación de contenido dañino", "Auditorías regulares de sesgos"],
      },
    ],
    creatingTitle: "Creando Contra-Narrativas",
    creatingSubtitle: "Nuestro proceso de seis pasos garantiza calidad, precisión y participación comunitaria",
    creationSteps: [
      { title: "Identificar la Narrativa", description: "La IA analiza el discurso de odio para identificar la narrativa falsa o el estereotipo que se promueve." },
      { title: "Investigar y Verificar", description: "Nuestro equipo investiga información precisa para contrarrestar la narrativa falsa con hechos verificados." },
      { title: "Creación de Contenido Asistida por IA", description: "La IA genera borradores de contenido que sean atractivos, compartibles, con tono apropiado e incluyan narrativas convincentes." },
      { title: "Revisión y Refinamiento Humano", description: "Expertos en contenido de las comunidades romaníes revisan los borradores generados por IA, aseguran autenticidad cultural y añaden perspectivas personales." },
      { title: "Aprobación Comunitaria", description: "Los miembros de la comunidad romaní aprueban el contenido final antes de la publicación, asegurando una representación auténtica." },
      { title: "Distribución Estratégica", description: "El contenido se comparte a través de canales de redes sociales, organizaciones asociadas, redes comunitarias y medios de comunicación." },
    ],
    typesTitle: "Tipos de Contra-Narrativas",
    typesSubtitle: "Creamos diversos formatos de contenido para llegar a diferentes audiencias",
    types: [
      { title: "Contenido Educativo", points: ["Hechos históricos sobre contribuciones romaníes", "Información cultural", "Infografías que desmienten mitos"] },
      { title: "Historias Personales", points: ["Perfiles de profesionales y líderes romaníes", "Historias de éxito", "Contenido de un día en la vida"] },
      { title: "Expresión Artística", points: ["Muestras de música y danza", "Arte visual de creadores romaníes", "Poesía y literatura"] },
      { title: "Iniciativas Comunitarias", points: ["Noticias positivas de comunidades romaníes", "Destacados de voluntariado y activismo", "Eventos y celebraciones culturales"] },
    ],
    privacyTitle: "Privacidad y Ética",
    privacySubtitle: "Nuestro compromiso con el uso responsable de la IA y la protección de datos",
    privacyItems: [
      { title: "Solo Contenido Público", description: "Solo monitoreamos contenido disponible públicamente" },
      { title: "Cumplimiento GDPR", description: "Los datos personales están protegidos bajo el GDPR" },
      { title: "Anonimización", description: "La anonimización protege las identidades" },
      { title: "Supervisión Ética", description: "Un comité de revisión ética supervisa las operaciones" },
    ],
    ctaTitle: "Experimente Nuestras Contra-Narrativas",
    ctaSubtitle: "Explore el contenido positivo creado por nuestro proceso asistido por IA y únase a nosotros para cambiar la narrativa sobre las comunidades romaníes.",
    reportBtn: "Denunciar Discurso de Odio",
    learnBtn: "Conozca más sobre RomaNET",
    akanaiTitle: "Prueba AkanAI",
    akanaiSubtitle: "Genera contra-narrativas positivas al instante con nuestra plataforma impulsada por IA.",
    akanaiBtn: "Abrir AkanAI",
  },
  it: {
    badge: "Innovazione basata sull'IA",
    title: "Innovazione nelle Contro-Narrazioni",
    subtitle:
      "RomaNET è pioniere nell'utilizzo dell'intelligenza artificiale per combattere il discorso d'odio contro le comunità rom. Il nostro approccio basato sull'IA combina tecnologia all'avanguardia con competenza umana per creare contro-narrazioni positive e accurate.",
    howTitle: "Come Funziona la Nostra IA",
    howSubtitle: "Il nostro processo in tre fasi combina tecnologia avanzata con competenza umana",
    steps: [
      {
        num: "1",
        title: "Monitoraggio e Input Guidato dall'Umano",
        description: "La nostra rete di mediatori umani monitora continuamente le piattaforme digitali per identificare e segnalare il discorso d'odio rivolto alle comunità rom.",
        points: [
          "Revisione Umana Esperta: Mediatori esperti identificano e raccolgono casi reali di odio online.",
          "Copertura Multilingue: Mediatori madrelingua coprono tutti i paesi e i contesti culturali del progetto.",
          "Selezione Mirata dei Messaggi: Narrative dannose specifiche vengono selezionate per analisi approfondita e preparazione delle risposte.",
          "Focus sulla Comunità: Consapevolezza in tempo reale guidata da chi lavora direttamente sul campo.",
        ],
      },
      {
        num: "2",
        title: "Analisi e Tecnologie del Linguaggio",
        description: "Una volta inseriti i messaggi di odio dai mediatori, applichiamo tecnologie avanzate del linguaggio per analizzarli e decostruirli.",
        points: [
          "Elaborazione del Linguaggio Naturale (NLP): Analisi tecnica della struttura linguistica e dell'intento dei contenuti dannosi.",
          "Decostruzione della Narrativa: Identificazione degli stereotipi, tropi e pattern fondamentali utilizzati nel messaggio.",
          "Analisi di Impatto e Contesto: Comprensione delle tendenze narrative specifiche e di come proliferano nelle reti.",
          "Approfondimenti Basati sui Dati: Mappatura delle narrative comuni nel tempo per orientare meglio le contro-narrazioni.",
        ],
      },
      {
        num: "3",
        title: "Generazione di Contro-Narrazioni con IA e Ciclo di Feedback",
        description: "Modelli di Linguaggio di Grandi Dimensioni (LLM) di ultima generazione assistono i mediatori generando multiple contro-narrazioni positive ed empatiche per la selezione umana.",
        points: [
          "Generazione Automatica: Il sistema propone diverse contro-narrazioni su misura che sfidano gli stereotipi con fatti e narrazione.",
          "Umano nel Circuito: I mediatori revisionano, selezionano e modificano liberamente la migliore risposta generata dall'IA.",
          "Integrazione con Server di Feedback: Le risposte selezionate e approvate vengono archiviate in modo sicuro per monitorare il feedback.",
          "Ottimizzazione Continua del Modello: Le interazioni, le modifiche e le preferenze umane vengono utilizzate per riaddestrare e retroalimentare i modelli, adattandoli dinamicamente alle esigenze dei mediatori.",
        ],
      },
    ],
    innovationTitle: "L'Innovazione del Nostro Modello",
    innovationSubtitle: "Cosa rende RomaNET diverso da altri approcci",
    innovations: [
      {
        title: "IA Centrata sull'Umano",
        description: "A differenza dei sistemi completamente automatizzati, RomaNET pone gli esseri umani al centro di tutto ciò che facciamo.",
        points: ["L'IA assiste, gli umani decidono", "Le voci della comunità guidano la creazione dei contenuti", "La sensibilità culturale è prioritaria", "L'accuratezza è verificata da esperti"],
      },
      {
        title: "Consapevole del Contesto",
        description: "La nostra IA comprende il contesto completo del discorso d'odio, non solo le parole chiave.",
        points: ["Sfumature culturali tra diversi paesi", "Contesto storico dell'antiziganismo", "Variazioni linguistiche e dialetti", "Stili di comunicazione specifici della piattaforma"],
      },
      {
        title: "Quadro Etico",
        description: "Seguiamo rigorose linee guida etiche in tutte le nostre operazioni di IA.",
        points: ["Trasparenza nelle operazioni di IA", "Protezione dei dati e privacy", "Nessuna generazione di contenuti dannosi", "Audit regolari dei bias"],
      },
    ],
    creatingTitle: "Creare Contro-Narrazioni",
    creatingSubtitle: "Il nostro processo in sei fasi garantisce qualità, accuratezza e coinvolgimento della comunità",
    creationSteps: [
      { title: "Identificare la Narrativa", description: "L'IA analizza il discorso d'odio per identificare la narrativa falsa o lo stereotipo promosso." },
      { title: "Ricerca e Verifica dei Fatti", description: "Il nostro team ricerca informazioni accurate per contrastare la narrativa falsa con fatti verificati." },
      { title: "Creazione di Contenuti Assistita dall'IA", description: "L'IA genera bozze di contenuti coinvolgenti, condivisibili, con tono appropriato e narrazioni avvincenti." },
      { title: "Revisione e Affinamento Umano", description: "Esperti di contenuti delle comunità rom revisionano le bozze generate dall'IA, assicurano autenticità culturale e aggiungono prospettive personali." },
      { title: "Approvazione della Comunità", description: "I membri della comunità rom approvano i contenuti finali prima della pubblicazione, garantendo una rappresentazione autentica." },
      { title: "Distribuzione Strategica", description: "I contenuti vengono condivisi attraverso canali social, organizzazioni partner, reti comunitarie e media." },
    ],
    typesTitle: "Tipi di Contro-Narrazioni",
    typesSubtitle: "Creiamo diversi formati di contenuto per raggiungere diversi pubblici",
    types: [
      { title: "Contenuti Educativi", points: ["Fatti storici sui contributi rom", "Informazioni culturali", "Infografiche che sfatano miti"] },
      { title: "Storie Personali", points: ["Profili di professionisti e leader rom", "Storie di successo", "Contenuti di un giorno nella vita"] },
      { title: "Espressione Artistica", points: ["Spettacoli di musica e danza", "Arte visiva di creatori rom", "Poesia e letteratura"] },
      { title: "Iniziative Comunitarie", points: ["Notizie positive dalle comunità rom", "Volontariato e attivismo", "Eventi e celebrazioni culturali"] },
    ],
    privacyTitle: "Privacy ed Etica",
    privacySubtitle: "Il nostro impegno per l'uso responsabile dell'IA e la protezione dei dati",
    privacyItems: [
      { title: "Solo Contenuti Pubblici", description: "Monitoriamo solo contenuti pubblicamente disponibili" },
      { title: "Conforme al GDPR", description: "I dati personali sono protetti ai sensi del GDPR" },
      { title: "Anonimizzazione", description: "L'anonimizzazione protegge le identità" },
      { title: "Supervisione Etica", description: "Un comitato di revisione etica supervisiona le operazioni" },
    ],
    ctaTitle: "Esplora le Nostre Contro-Narrazioni",
    ctaSubtitle: "Esplora i contenuti positivi creati dal nostro processo assistito dall'IA e unisciti a noi nel cambiare la narrativa sulle comunità rom.",
    reportBtn: "Segnala Discorso di Odio",
    learnBtn: "Scopri di più su RomaNET",
    akanaiTitle: "Prova AkanAI",
    akanaiSubtitle: "Genera contro-narrazioni positive istantaneamente con la nostra piattaforma basata sull'IA.",
    akanaiBtn: "Avvia AkanAI",
  },
  el: {
    badge: "Καινοτομία με ΤΝ",
    title: "Καινοτομία στις Αντι-Αφηγήσεις",
    subtitle:
      "Το RomaNET είναι πρωτοπόρο στη χρήση της τεχνητής νοημοσύνης για την καταπολέμηση της ρητορικής μίσους κατά των κοινοτήτων Ρομά. Η προσέγγισή μας που υποστηρίζεται από ΤΝ συνδυάζει την τεχνολογία αιχμής με την ανθρώπινη εμπειρογνωμοσύνη για να δημιουργήσει θετικές και ακριβείς αντι-αφηγήσεις.",
    howTitle: "Πώς Λειτουργεί η ΤΝ μας",
    howSubtitle: "Η διαδικασία μας σε τρία βήματα συνδυάζει προηγμένη τεχνολογία με ανθρώπινη εμπειρογνωμοσύνη",
    steps: [
      {
        num: "1",
        title: "Παρακολούθηση και Εισαγωγή με Ανθρώπινη Καθοδήγηση",
        description: "Το δίκτυο των ανθρώπινων διαμεσολαβητών μας παρακολουθεί συνεχώς ψηφιακές πλατφόρμες για να εντοπίζει και να αναφέρει ρητορική μίσους κατά των κοινοτήτων Ρομά.",
        points: [
          "Ειδική Ανθρώπινη Αναθεώρηση: Έμπειροι διαμεσολαβητές εντοπίζουν και συλλέγουν πραγματικά περιστατικά διαδικτυακού μίσους.",
          "Πολυγλωσσική Κάλυψη: Γηγενείς διαμεσολαβητές καλύπτουν όλες τις χώρες και τα πολιτισμικά πλαίσια του έργου.",
          "Στοχευμένη Επιλογή Μηνυμάτων: Επιλέγονται συγκεκριμένες επιβλαβείς αφηγήσεις για βαθιά ανάλυση και προετοιμασία απάντησης.",
          "Εστίαση στην Κοινότητα: Επίγνωση σε πραγματικό χρόνο που καθοδηγείται από όσους εργάζονται απευθείας στο πεδίο.",
        ],
      },
      {
        num: "2",
        title: "Ανάλυση και Τεχνολογίες Γλώσσας",
        description: "Μόλις οι διαμεσολαβητές εισάγουν τα μηνύματα μίσους, εφαρμόζουμε προηγμένες τεχνολογίες γλώσσας για να τα αναλύσουμε και να τα αποδομήσουμε.",
        points: [
          "Επεξεργασία Φυσικής Γλώσσας (NLP): Τεχνική ανάλυση της γλωσσικής δομής και της πρόθεσης του επιβλαβούς περιεχομένου.",
          "Αποδόμηση Αφήγησης: Εντοπισμός των βασικών στερεοτύπων, τρόπων και προτύπων που χρησιμοποιούνται στο μήνυμα.",
          "Ανάλυση Επιπτώσεων και Πλαισίου: Κατανόηση των συγκεκριμένων αφηγηματικών τάσεων και του τρόπου διάδοσής τους στα δίκτυα.",
          "Πληροφορίες Βασισμένες σε Δεδομένα: Χαρτογράφηση κοινών αφηγήσεων με την πάροδο του χρόνου για καλύτερο στόχευση των αντι-αφηγήσεων.",
        ],
      },
      {
        num: "3",
        title: "Δημιουργία Αντι-Αφηγήσεων με ΤΝ και Κύκλος Ανατροφοδότησης",
        description: "Μοντέλα Μεγάλης Κλίμακας Γλώσσας (LLM) νέας γενιάς βοηθούν τους διαμεσολαβητές δημιουργώντας πολλαπλές θετικές και ενσυναισθητικές αντι-αφηγήσεις για ανθρώπινη επιλογή.",
        points: [
          "Αυτοματοποιημένη Δημιουργία: Το σύστημα προτείνει πολλές προσαρμοσμένες αντι-αφηγήσεις που αμφισβητούν στερεότυπα με γεγονότα και αφήγηση.",
          "Άνθρωπος στον Κύκλο: Οι διαμεσολαβητές αναθεωρούν, επιλέγουν και τροποποιούν ελεύθερα την καλύτερη απάντηση που δημιουργήθηκε από την ΤΝ.",
          "Ολοκλήρωση με Διακομιστή Ανατροφοδότησης: Οι επιλεγμένες και εγκεκριμένες απαντήσεις αποθηκεύονται με ασφάλεια για παρακολούθηση της ανατροφοδότησης.",
          "Συνεχής Βελτιστοποίηση Μοντέλου: Οι ανθρώπινες αλληλεπιδράσεις, επεξεργασίες και προτιμήσεις χρησιμοποιούνται για επανεκπαίδευση και ανατροφοδότηση των μοντέλων, προσαρμόζοντάς τα δυναμικά στις ανάγκες των διαμεσολαβητών.",
        ],
      },
    ],
    innovationTitle: "Η Καινοτομία του Μοντέλου μας",
    innovationSubtitle: "Τι κάνει το RomaNET διαφορετικό από άλλες προσεγγίσεις",
    innovations: [
      {
        title: "ΤΝ Κεντραρισμένη στον Άνθρωπο",
        description: "Σε αντίθεση με τα πλήρως αυτοματοποιημένα συστήματα, το RomaNET τοποθετεί τους ανθρώπους στο κέντρο όλων όσων κάνουμε.",
        points: ["Η ΤΝ υποστηρίζει, οι άνθρωποι αποφασίζουν", "Οι φωνές της κοινότητας καθοδηγούν τη δημιουργία περιεχομένου", "Η πολιτισμική ευαισθησία προτεραιοποιείται", "Η ακρίβεια επαληθεύεται από εμπειρογνώμονες"],
      },
      {
        title: "Ενσυναίσθηση του Πλαισίου",
        description: "Η ΤΝ μας κατανοεί το πλήρες πλαίσιο της ρητορικής μίσους, όχι μόνο λέξεις-κλειδιά.",
        points: ["Πολιτισμικές αποχρώσεις σε διαφορετικές χώρες", "Ιστορικό πλαίσιο του αντιτσιγγανισμού", "Γλωσσικές παραλλαγές και διάλεκτοι", "Στυλ επικοινωνίας ειδικά για κάθε πλατφόρμα"],
      },
      {
        title: "Ηθικό Πλαίσιο",
        description: "Ακολουθούμε αυστηρές ηθικές κατευθυντήριες γραμμές σε όλες μας τις λειτουργίες ΤΝ.",
        points: ["Διαφάνεια στις λειτουργίες ΤΝ", "Προστασία δεδομένων και απορρήτου", "Χωρίς δημιουργία επιβλαβούς περιεχομένου", "Τακτικοί έλεγχοι προκατάληψης"],
      },
    ],
    creatingTitle: "Δημιουργία Αντι-Αφηγήσεων",
    creatingSubtitle: "Η διαδικασία μας σε έξι βήματα διασφαλίζει ποιότητα, ακρίβεια και εμπλοκή της κοινότητας",
    creationSteps: [
      { title: "Αναγνώριση της Αφήγησης", description: "Η ΤΝ αναλύει τη ρητορική μίσους για να εντοπίσει την ψευδή αφήγηση ή το στερεότυπο που προωθείται." },
      { title: "Έρευνα και Επαλήθευση", description: "Η ομάδα μας ερευνά ακριβείς πληροφορίες για να αντιταχθεί στην ψευδή αφήγηση με επαληθευμένα γεγονότα." },
      { title: "Δημιουργία Περιεχομένου με ΤΝ", description: "Η ΤΝ παράγει προσχέδια περιεχομένου που είναι ελκυστικά, με κατάλληλο τόνο και πειστική αφήγηση." },
      { title: "Ανθρώπινη Αναθεώρηση", description: "Ειδικοί περιεχομένου από κοινότητες Ρομά αναθεωρούν τα προσχέδια, διασφαλίζουν πολιτισμική αυθεντικότητα και προσθέτουν προσωπικές προοπτικές." },
      { title: "Έγκριση Κοινότητας", description: "Μέλη της κοινότητας Ρομά εγκρίνουν το τελικό περιεχόμενο πριν τη δημοσίευση, διασφαλίζοντας αυθεντική εκπροσώπηση." },
      { title: "Στρατηγική Διανομή", description: "Το περιεχόμενο διανέμεται μέσω καναλιών κοινωνικών μέσων, εταίρων, κοινοτικών δικτύων και μέσων ενημέρωσης." },
    ],
    typesTitle: "Τύποι Αντι-Αφηγήσεων",
    typesSubtitle: "Δημιουργούμε ποικίλες μορφές περιεχομένου για να προσεγγίσουμε διαφορετικά κοινά",
    types: [
      { title: "Εκπαιδευτικό Περιεχόμενο", points: ["Ιστορικά γεγονότα για συνεισφορές Ρομά", "Πολιτισμικές πληροφορίες", "Infographics που διαψεύδουν μύθους"] },
      { title: "Προσωπικές Ιστορίες", points: ["Προφίλ επαγγελματιών και ηγετών Ρομά", "Ιστορίες επιτυχίας", "Περιεχόμενο μιας μέρας στη ζωή"] },
      { title: "Καλλιτεχνική Έκφραση", points: ["Μουσικές και χορευτικές παραστάσεις", "Εικαστική τέχνη από δημιουργούς Ρομά", "Ποίηση και λογοτεχνία"] },
      { title: "Κοινοτικές Πρωτοβουλίες", points: ["Θετικά νέα από κοινότητες Ρομά", "Εθελοντισμός και ακτιβισμός", "Πολιτισμικές εκδηλώσεις και γιορτές"] },
    ],
    privacyTitle: "Απόρρητο και Ηθική",
    privacySubtitle: "Η δέσμευσή μας για υπεύθυνη χρήση της ΤΝ και προστασία δεδομένων",
    privacyItems: [
      { title: "Μόνο Δημόσιο Περιεχόμενο", description: "Παρακολουθούμε μόνο δημόσια διαθέσιμο περιεχόμενο" },
      { title: "Συμμόρφωση GDPR", description: "Τα προσωπικά δεδομένα προστατεύονται βάσει GDPR" },
      { title: "Ανωνυμοποίηση", description: "Η ανωνυμοποίηση προστατεύει τις ταυτότητες" },
      { title: "Ηθική Εποπτεία", description: "Επιτροπή ηθικής αναθεώρησης εποπτεύει τις λειτουργίες" },
    ],
    ctaTitle: "Εξερευνήστε τις Αντι-Αφηγήσεις μας",
    ctaSubtitle: "Εξερευνήστε το θετικό περιεχόμενο που δημιουργήθηκε από τη διαδικασία μας με ΤΝ και ελάτε μαζί μας να αλλάξουμε την αφήγηση για τις κοινότητες Ρομά.",
    reportBtn: "Αναφέρετε Ρητορική Μίσους",
    learnBtn: "Μάθετε για το RomaNET",
    akanaiTitle: "Δοκιμάστε το AkanAI",
    akanaiSubtitle: "Δημιουργήστε θετικές αντι-αφηγήσεις άμεσα με την πλατφόρμα μας που υποστηρίζεται από ΤΝ.",
    akanaiBtn: "Άνοιγμα AkanAI",
  },
}

export default function AIAgainstHatePage() {
  const { lang } = useTranslation()
  const t = pageT[lang]

  const stepIcons = [Scan, BarChart3, MessageSquarePlus]
  const innovationIcons = [Users, Globe, Shield]
  const creationIcons = [Search, FileText, Brain, UserCheck, Users, Send]
  const typeIcons = [BookOpen, Heart, Palette, Megaphone]
  const privacyIcons = [Eye, Lock, Shield, Scale]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-6 md:px-12 lg:px-24 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Brain className="h-4 w-4" />
              <span className="text-sm font-medium">{t.badge}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              {t.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
              {t.subtitle}
            </p>
          </div>
        </section>

        {/* AkanAI CTA */}
        <section className="px-6 md:px-12 lg:px-24 pb-8">
          <div className="max-w-4xl mx-auto">
            <Card className="rounded-3xl border-0 shadow-xl bg-primary text-primary-foreground overflow-hidden">
              <CardContent className="p-8 md:p-12 text-center">
                <Sparkles className="h-10 w-10 mx-auto mb-4 opacity-90" />
                <h2 className="text-2xl md:text-3xl font-bold mb-3">{t.akanaiTitle}</h2>
                <p className="opacity-90 mb-6 max-w-xl mx-auto">{t.akanaiSubtitle}</p>
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="rounded-full px-8 text-primary"
                >
                  <a
                    href="https://sinai.ujaen.es/romanet/akanai/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.akanaiBtn}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How Our AI Works - 3 Step Process */}
        <section className="px-6 md:px-12 lg:px-24 py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.howTitle}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">{t.howSubtitle}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {t.steps.map((step, idx) => {
                const IconComponent = stepIcons[idx]
                const gradients = ["from-primary to-primary/60", "from-secondary to-secondary/60", "from-accent to-accent/60"]
                const badgeColors = ["bg-primary/10 text-primary", "bg-secondary/10 text-secondary", "bg-accent/10 text-accent"]
                return (
                  <Card key={idx} className="rounded-3xl border-0 shadow-lg bg-card overflow-hidden">
                    <div className={`h-2 bg-gradient-to-r ${gradients[idx]}`} />
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-12 h-12 rounded-2xl ${badgeColors[idx]} flex items-center justify-center`}>
                          <span className="text-2xl font-bold">{step.num}</span>
                        </div>
                        <div className={`w-14 h-14 rounded-2xl ${badgeColors[idx]} flex items-center justify-center`}>
                          <IconComponent className="h-7 w-7" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-semibold text-foreground mb-4">{step.title}</h3>
                      <p className="text-muted-foreground mb-6">{step.description}</p>
                      <ul className="space-y-3">
                        {step.points.map((p, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle className={`h-5 w-5 mt-0.5 shrink-0 ${badgeColors[idx].split(' ')[1]}`} />
                            <span className="text-sm text-muted-foreground">{p}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* The Innovation of Our Model */}
        <section className="px-6 md:px-12 lg:px-24 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.innovationTitle}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">{t.innovationSubtitle}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {t.innovations.map((inn, idx) => {
                const IconComponent = innovationIcons[idx]
                const colors = [
                  { bg: "bg-blue-100 dark:bg-blue-900/50", text: "text-blue-600 dark:text-blue-400", spark: "text-blue-500" },
                  { bg: "bg-emerald-100 dark:bg-emerald-900/50", text: "text-emerald-600 dark:text-emerald-400", spark: "text-emerald-500" },
                  { bg: "bg-amber-100 dark:bg-amber-900/50", text: "text-amber-600 dark:text-amber-400", spark: "text-amber-500" },
                ]
                const c = colors[idx]
                return (
                  <Card key={idx} className="rounded-3xl border-0 shadow-lg">
                    <CardContent className="p-8">
                      <div className={`w-16 h-16 rounded-2xl ${c.bg} flex items-center justify-center mb-6`}>
                        <IconComponent className={`h-8 w-8 ${c.text}`} />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">{inn.title}</h3>
                      <p className="text-muted-foreground mb-6">{inn.description}</p>
                      <ul className="space-y-2">
                        {inn.points.map((p, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Sparkles className={`h-4 w-4 ${c.spark}`} />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Creating Counter-Narratives - 6 Step Process */}
        <section className="px-6 md:px-12 lg:px-24 py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.creatingTitle}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">{t.creatingSubtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.creationSteps.map((step, idx) => {
                const IconComponent = creationIcons[idx]
                const numColors = [
                  "bg-primary text-primary-foreground",
                  "bg-primary text-primary-foreground",
                  "bg-primary text-primary-foreground",
                  "bg-secondary text-secondary-foreground",
                  "bg-secondary text-secondary-foreground",
                  "bg-accent text-accent-foreground",
                ]
                const iconColors = [
                  "text-primary", "text-primary", "text-primary",
                  "text-secondary", "text-secondary", "text-accent",
                ]
                return (
                  <Card key={idx} className="rounded-3xl border-0 shadow-md bg-card">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-10 h-10 rounded-xl ${numColors[idx]} flex items-center justify-center`}>
                          <span className="text-lg font-bold">{idx + 1}</span>
                        </div>
                        <IconComponent className={`h-6 w-6 ${iconColors[idx]}`} />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Types of Counter-Narratives */}
        <section className="px-6 md:px-12 lg:px-24 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.typesTitle}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">{t.typesSubtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.types.map((type, idx) => {
                const IconComponent = typeIcons[idx]
                const colors = [
                  { bg: "bg-violet-100 dark:bg-violet-900/50", text: "text-violet-600 dark:text-violet-400" },
                  { bg: "bg-rose-100 dark:bg-rose-900/50", text: "text-rose-600 dark:text-rose-400" },
                  { bg: "bg-cyan-100 dark:bg-cyan-900/50", text: "text-cyan-600 dark:text-cyan-400" },
                  { bg: "bg-lime-100 dark:bg-lime-900/50", text: "text-lime-600 dark:text-lime-400" },
                ]
                const c = colors[idx]
                return (
                  <Card key={idx} className="rounded-3xl border-0 shadow-lg">
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 rounded-2xl ${c.bg} flex items-center justify-center mx-auto mb-4`}>
                        <IconComponent className={`h-8 w-8 ${c.text}`} />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">{type.title}</h3>
                      <ul className="text-sm text-muted-foreground space-y-2 text-left">
                        {type.points.map((p, i) => (
                          <li key={i}>{p}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Privacy & Ethics */}
        <section className="px-6 md:px-12 lg:px-24 py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.privacyTitle}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">{t.privacySubtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.privacyItems.map((item, idx) => {
                const IconComponent = privacyIcons[idx]
                return (
                  <Card key={idx} className="rounded-3xl border-0 shadow-md bg-card">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
