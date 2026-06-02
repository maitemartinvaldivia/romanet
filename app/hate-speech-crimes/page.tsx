"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"
import {
  AlertTriangle,
  MessageSquareWarning,
  Shield,
  Scale,
  Heart,
  Users,
  TrendingDown,
  History,
  Smartphone,
  Eye,
  Target,
  Megaphone,
  BookOpen,
  HandHeart,
  Share2,
  CheckCircle2,
  XCircle,
  FileText,
  Gavel,
  UserX,
  Globe,
  Clock,
  Zap,
  ArrowRight,
} from "lucide-react"
import { useTranslation } from "@/components/i18n-provider"

const pageT = {
  en: {
    badge: "Educational Resource",
    title: "Understanding Hate Speech & Crimes",
    subtitle:
      "Knowledge is the first step to protection. Learn to recognize, report, and combat discrimination against Roma communities.",
    whatIsTitle: "What is Hate Speech?",
    whatIsDescription:
      "Hate speech is any form of communication that attacks or uses discriminatory language against a person or group based on attributes such as ethnicity, religion, disability, gender, or sexual orientation.",
    plainLanguageTitle: "In Plain Language",
    plainLanguageIntro: "Hate speech includes:",
    hateItems: [
      "Insults and slurs targeting a person's identity",
      "Threats of violence or harm",
      "Content that dehumanizes or stereotypes groups",
      "Misinformation designed to incite hatred",
      "Calls for exclusion or discrimination",
    ],
    keyConcept: "Key Concept",
    antigypsyismTitle: "Understanding Antigypsyism",
    antigypsyismDescription:
      "Antigypsyism is a specific form of racism directed at Roma people. It is characterized by centuries of discrimination and continues to manifest in modern society.",
    historicalRoots: "Historical Roots",
    historicalItems: [
      "Centuries of persecution, enslavement, and genocide",
      "Systematic exclusion from society and opportunities",
      "Forced assimilation policies",
      "Ongoing discrimination in housing, employment, and education",
    ],
    modernManifestations: "Modern Manifestations",
    modernItems: [
      "Negative stereotypes in media and popular culture",
      "Discrimination in access to services",
      "Hate speech on social media and online platforms",
      "Physical attacks and harassment",
      "Institutional discrimination",
    ],
    learnMoreHistory: "Learn more about the history of Antigypsyism",
    historyAccordion:
      "The persecution of Roma people spans over a thousand years across Europe. From medieval times through the Holocaust (Porajmos), where an estimated 500,000 Roma were killed, to modern-day discrimination, Roma communities have faced systematic oppression. Understanding this history is crucial to recognizing and combating present-day antigypsyism.",
    legalTitle: "Legal Framework",
    legalSubtitle: "Understanding the legal protections against hate speech and hate crimes",
    euFramework: "European Union Framework",
    euFrameworkDesc:
      "The EU Charter of Fundamental Rights and various directives protect against hate speech:",
    euItems: [
      "Council Framework Decision 2008/913/JHA",
      "European Convention on Human Rights Article 10",
      "National hate crime legislation in member states",
    ],
    hateCrime: "What Constitutes a Hate Crime",
    hateCrimeDesc: "A hate crime is any criminal offense motivated by bias against a person's:",
    biasItems: [
      "Race or ethnicity",
      "Religion or belief",
      "Sexual orientation",
      "Gender identity",
      "Disability",
    ],
    impactTitle: "Impact Analysis",
    impactSubtitle: "Understanding the real consequences of hate speech and hate crimes",
    immediateImpact: "Immediate Impact",
    immediateItems: [
      "Fear and anxiety",
      "Physical harm (in case of hate crimes)",
      "Social isolation",
      "Mental health challenges",
    ],
    longTerm: "Long-term Effects",
    longTermItems: [
      "Trauma and PTSD",
      "Reduced participation in public life",
      "Economic disadvantage",
      "Intergenerational trauma",
    ],
    society: "Consequences for Society",
    societyItems: [
      "Normalizing discrimination",
      "Dividing communities",
      "Undermining democratic values",
      "Reducing social cohesion",
      "Perpetuating inequality",
    ],
    targetedTitle: "Why Roma Communities Are Targeted",
    targetedSubtitle:
      "Understanding the factors that make Roma communities vulnerable to discrimination",
    targetedCards: [
      { title: "Historical Prejudice", desc: "Centuries-old stereotypes persist in modern society" },
      { title: "Visibility", desc: "Roma communities are often identifiable and marginalized" },
      { title: "Misinformation", desc: "False narratives spread easily online" },
      { title: "Lack of Representation", desc: "Limited Roma voices in media and politics" },
      { title: "Socioeconomic Factors", desc: "Poverty and exclusion make communities vulnerable" },
    ],
    checklistBadge: "Visual Checklist",
    checklistTitle: "Recognizing Hate Speech Online",
    checklistSubtitle: "Common indicators to help you identify hate speech",
    checklistItems: [
      "Use of derogatory terms or slurs",
      "Generalizations about entire groups",
      "Conspiracy theories",
      "Dehumanizing language or imagery",
      "Calls for violence or exclusion",
      '"Jokes" that stereotype or demean',
    ],
    rightsTitle: "Your Rights",
    rightsIntro: "Everyone has the right to:",
    rightsItems: [
      "Live free from discrimination",
      "Report hate speech and hate crimes",
      "Access justice and support",
      "Have their dignity respected",
      "Participate fully in society",
    ],
    whatYouCanDo: "What You Can Do",
    actionItems: [
      { title: "Educate Yourself", desc: "Learn about Roma history and culture" },
      { title: "Speak Up", desc: "Challenge hate speech when you encounter it" },
      { title: "Report", desc: "Use available channels to report incidents" },
      { title: "Support", desc: "Stand with affected communities" },
      { title: "Share", desc: "Promote positive narratives and accurate information" },
    ],
    ctaTitle: "Ready to Take Action?",
    ctaSubtitle:
      "If you've experienced or witnessed hate speech, we're here to help. Report incidents, access support services, and join our community in the fight against discrimination.",
    reportIncident: "Report an Incident",
    exploreCounter: "Explore Counter-Narratives",
  },
  es: {
    badge: "Recurso Educativo",
    title: "Comprender el Discurso de Odio y los Delitos",
    subtitle:
      "El conocimiento es el primer paso hacia la protección. Aprenda a reconocer, denunciar y combatir la discriminación contra las comunidades romaníes.",
    whatIsTitle: "¿Qué es el Discurso de Odio?",
    whatIsDescription:
      "El discurso de odio es cualquier forma de comunicación que ataca o utiliza lenguaje discriminatorio contra una persona o grupo basado en atributos como etnia, religión, discapacidad, género u orientación sexual.",
    plainLanguageTitle: "En Lenguaje Sencillo",
    plainLanguageIntro: "El discurso de odio incluye:",
    hateItems: [
      "Insultos y calificativos que atacan la identidad de una persona",
      "Amenazas de violencia o daño",
      "Contenido que deshumaniza o estereotipa grupos",
      "Desinformación diseñada para incitar al odio",
      "Llamadas a la exclusión o discriminación",
    ],
    keyConcept: "Concepto Clave",
    antigypsyismTitle: "Comprender el Antigitanismo",
    antigypsyismDescription:
      "El antigitanismo es una forma específica de racismo dirigida al pueblo romaní. Se caracteriza por siglos de discriminación y continúa manifestándose en la sociedad moderna.",
    historicalRoots: "Raíces Históricas",
    historicalItems: [
      "Siglos de persecución, esclavitud y genocidio",
      "Exclusión sistemática de la sociedad y las oportunidades",
      "Políticas de asimilación forzada",
      "Discriminación continua en vivienda, empleo y educación",
    ],
    modernManifestations: "Manifestaciones Modernas",
    modernItems: [
      "Estereotipos negativos en medios y cultura popular",
      "Discriminación en el acceso a servicios",
      "Discurso de odio en redes sociales y plataformas online",
      "Ataques físicos y acoso",
      "Discriminación institucional",
    ],
    learnMoreHistory: "Más sobre la historia del Antigitanismo",
    historyAccordion:
      "La persecución del pueblo romaní abarca más de mil años en toda Europa. Desde la época medieval hasta el Holocausto (Porajmos), donde se estima que fueron asesinadas 500.000 personas romaníes, hasta la discriminación actual, las comunidades romaníes han enfrentado opresión sistemática. Comprender esta historia es crucial para reconocer y combatir el antigitanismo actual.",
    legalTitle: "Marco Legal",
    legalSubtitle: "Comprender las protecciones legales contra el discurso de odio y los delitos de odio",
    euFramework: "Marco de la Unión Europea",
    euFrameworkDesc:
      "La Carta de los Derechos Fundamentales de la UE y diversas directivas protegen contra el discurso de odio:",
    euItems: [
      "Decisión Marco del Consejo 2008/913/JAI",
      "Artículo 10 del Convenio Europeo de Derechos Humanos",
      "Legislación nacional sobre delitos de odio en los Estados miembros",
    ],
    hateCrime: "Qué Constituye un Delito de Odio",
    hateCrimeDesc: "Un delito de odio es cualquier delito motivado por prejuicios contra:",
    biasItems: [
      "Raza o etnia",
      "Religión o creencias",
      "Orientación sexual",
      "Identidad de género",
      "Discapacidad",
    ],
    impactTitle: "Análisis de Impacto",
    impactSubtitle: "Comprender las consecuencias reales del discurso de odio y los delitos de odio",
    immediateImpact: "Impacto Inmediato",
    immediateItems: [
      "Miedo y ansiedad",
      "Daño físico (en caso de delitos de odio)",
      "Aislamiento social",
      "Problemas de salud mental",
    ],
    longTerm: "Efectos a Largo Plazo",
    longTermItems: [
      "Trauma y TEPT",
      "Menor participación en la vida pública",
      "Desventaja económica",
      "Trauma intergeneracional",
    ],
    society: "Consecuencias para la Sociedad",
    societyItems: [
      "Normalización de la discriminación",
      "División de comunidades",
      "Socavamiento de valores democráticos",
      "Reducción de la cohesión social",
      "Perpetuación de la desigualdad",
    ],
    targetedTitle: "¿Por qué se Ataca a las Comunidades Romaníes?",
    targetedSubtitle:
      "Comprender los factores que hacen vulnerables a las comunidades romaníes ante la discriminación",
    targetedCards: [
      { title: "Prejuicio Histórico", desc: "Estereotipos ancestrales persisten en la sociedad moderna" },
      { title: "Visibilidad", desc: "Las comunidades romaníes son a menudo identificables y marginadas" },
      { title: "Desinformación", desc: "Narrativas falsas se propagan fácilmente en línea" },
      { title: "Falta de Representación", desc: "Limitadas voces romaníes en medios y política" },
      { title: "Factores Socioeconómicos", desc: "La pobreza y exclusión hacen vulnerables a las comunidades" },
    ],
    checklistBadge: "Lista de Verificación",
    checklistTitle: "Reconocer el Discurso de Odio en Línea",
    checklistSubtitle: "Indicadores comunes para ayudarle a identificar el discurso de odio",
    checklistItems: [
      "Uso de términos despectivos o insultos",
      "Generalizaciones sobre grupos enteros",
      "Teorías conspirativas",
      "Lenguaje o imágenes deshumanizantes",
      "Llamadas a la violencia o exclusión",
      '"Bromas" que estereotipan o degradan',
    ],
    rightsTitle: "Sus Derechos",
    rightsIntro: "Toda persona tiene derecho a:",
    rightsItems: [
      "Vivir libre de discriminación",
      "Denunciar discurso de odio y delitos de odio",
      "Acceder a la justicia y al apoyo",
      "Tener su dignidad respetada",
      "Participar plenamente en la sociedad",
    ],
    whatYouCanDo: "Qué Puede Hacer",
    actionItems: [
      { title: "Edúquese", desc: "Aprenda sobre la historia y cultura romaní" },
      { title: "Hable", desc: "Desafíe el discurso de odio cuando lo encuentre" },
      { title: "Denuncie", desc: "Use los canales disponibles para reportar incidentes" },
      { title: "Apoye", desc: "Acompañe a las comunidades afectadas" },
      { title: "Comparta", desc: "Promueva narrativas positivas e información precisa" },
    ],
    ctaTitle: "¿Listo para Actuar?",
    ctaSubtitle:
      "Si ha experimentado o presenciado discurso de odio, estamos aquí para ayudar. Denuncie incidentes, acceda a servicios de apoyo y únase a nuestra comunidad en la lucha contra la discriminación.",
    reportIncident: "Denunciar un Incidente",
    exploreCounter: "Explorar Contra-Narrativas",
  },
  it: {
    badge: "Risorsa Educativa",
    title: "Comprendere il Discorso d'Odio e i Reati",
    subtitle:
      "La conoscenza è il primo passo verso la protezione. Impara a riconoscere, denunciare e combattere la discriminazione contro le comunità rom.",
    whatIsTitle: "Cos'è il Discorso d'Odio?",
    whatIsDescription:
      "Il discorso d'odio è qualsiasi forma di comunicazione che attacca o utilizza linguaggio discriminatorio contro una persona o un gruppo basato su attributi come etnia, religione, disabilità, genere o orientamento sessuale.",
    plainLanguageTitle: "In Linguaggio Semplice",
    plainLanguageIntro: "Il discorso d'odio include:",
    hateItems: [
      "Insulti e epiteti che colpiscono l'identità di una persona",
      "Minacce di violenza o danno",
      "Contenuti che disumanizzano o stereotipano gruppi",
      "Disinformazione volta ad incitare all'odio",
      "Appelli all'esclusione o alla discriminazione",
    ],
    keyConcept: "Concetto Chiave",
    antigypsyismTitle: "Comprendere l'Antiziganismo",
    antigypsyismDescription:
      "L'antiziganismo è una forma specifica di razzismo diretta contro il popolo rom. È caratterizzato da secoli di discriminazione e continua a manifestarsi nella società moderna.",
    historicalRoots: "Radici Storiche",
    historicalItems: [
      "Secoli di persecuzione, schiavitù e genocidio",
      "Esclusione sistematica dalla società e dalle opportunità",
      "Politiche di assimilazione forzata",
      "Discriminazione continua in alloggi, impiego e istruzione",
    ],
    modernManifestations: "Manifestazioni Moderne",
    modernItems: [
      "Stereotipi negativi nei media e nella cultura popolare",
      "Discriminazione nell'accesso ai servizi",
      "Discorso d'odio sui social media e piattaforme online",
      "Attacchi fisici e molestie",
      "Discriminazione istituzionale",
    ],
    learnMoreHistory: "Scopri di più sulla storia dell'Antiziganismo",
    historyAccordion:
      "La persecuzione del popolo rom si estende per oltre mille anni in tutta Europa. Dal Medioevo attraverso l'Olocausto (Porajmos), dove si stima che siano stati uccisi 500.000 rom, fino alla discriminazione odierna, le comunità rom hanno affrontato un'oppressione sistematica. Comprendere questa storia è fondamentale per riconoscere e combattere l'antiziganismo attuale.",
    legalTitle: "Quadro Legale",
    legalSubtitle: "Comprendere le protezioni legali contro il discorso d'odio e i reati d'odio",
    euFramework: "Quadro dell'Unione Europea",
    euFrameworkDesc:
      "La Carta dei Diritti Fondamentali dell'UE e varie direttive proteggono contro il discorso d'odio:",
    euItems: [
      "Decisione Quadro del Consiglio 2008/913/GAI",
      "Articolo 10 della Convenzione Europea dei Diritti Umani",
      "Legislazione nazionale sui reati d'odio negli Stati membri",
    ],
    hateCrime: "Cosa Costituisce un Reato d'Odio",
    hateCrimeDesc: "Un reato d'odio è qualsiasi reato motivato da pregiudizi contro:",
    biasItems: [
      "Razza o etnia",
      "Religione o credenze",
      "Orientamento sessuale",
      "Identità di genere",
      "Disabilità",
    ],
    impactTitle: "Analisi d'Impatto",
    impactSubtitle: "Comprendere le conseguenze reali del discorso d'odio e dei reati d'odio",
    immediateImpact: "Impatto Immediato",
    immediateItems: [
      "Paura e ansia",
      "Danno fisico (in caso di reati d'odio)",
      "Isolamento sociale",
      "Sfide alla salute mentale",
    ],
    longTerm: "Effetti a Lungo Termine",
    longTermItems: [
      "Trauma e PTSD",
      "Ridotta partecipazione alla vita pubblica",
      "Svantaggio economico",
      "Trauma intergenerazionale",
    ],
    society: "Conseguenze per la Società",
    societyItems: [
      "Normalizzazione della discriminazione",
      "Divisione delle comunità",
      "Minaccia ai valori democratici",
      "Riduzione della coesione sociale",
      "Perpetuazione della disuguaglianza",
    ],
    targetedTitle: "Perché le Comunità Rom Sono Prese di Mira",
    targetedSubtitle:
      "Comprendere i fattori che rendono vulnerabili le comunità rom alla discriminazione",
    targetedCards: [
      { title: "Pregiudizio Storico", desc: "Stereotipi secolari persistono nella società moderna" },
      { title: "Visibilità", desc: "Le comunità rom sono spesso identificabili e emarginate" },
      { title: "Disinformazione", desc: "Narrative false si diffondono facilmente online" },
      { title: "Mancanza di Rappresentanza", desc: "Voci rom limitate nei media e nella politica" },
      { title: "Fattori Socioeconomici", desc: "Povertà ed esclusione rendono vulnerabili le comunità" },
    ],
    checklistBadge: "Lista di Controllo",
    checklistTitle: "Riconoscere il Discorso d'Odio Online",
    checklistSubtitle: "Indicatori comuni per aiutarti a identificare il discorso d'odio",
    checklistItems: [
      "Uso di termini sprezzanti o insulti",
      "Generalizzazioni su interi gruppi",
      "Teorie del complotto",
      "Linguaggio o immagini disumanizzanti",
      "Appelli alla violenza o esclusione",
      '"Scherzi" che stereotipano o umiliano',
    ],
    rightsTitle: "I Tuoi Diritti",
    rightsIntro: "Ogni persona ha il diritto di:",
    rightsItems: [
      "Vivere libero da discriminazione",
      "Denunciare discorso d'odio e reati d'odio",
      "Accedere alla giustizia e al supporto",
      "Avere la propria dignità rispettata",
      "Partecipare pienamente alla società",
    ],
    whatYouCanDo: "Cosa Puoi Fare",
    actionItems: [
      { title: "Istruisciti", desc: "Impara la storia e la cultura rom" },
      { title: "Parla", desc: "Sfida il discorso d'odio quando lo incontri" },
      { title: "Denuncia", desc: "Usa i canali disponibili per segnalare incidenti" },
      { title: "Sostieni", desc: "Stai al fianco delle comunità colpite" },
      { title: "Condividi", desc: "Promuovi narrazioni positive e informazioni accurate" },
    ],
    ctaTitle: "Pronto ad Agire?",
    ctaSubtitle:
      "Se hai sperimentato o testimoniato discorso d'odio, siamo qui per aiutarti. Segnala incidenti, accedi ai servizi di supporto e unisciti alla nostra comunità nella lotta contro la discriminazione.",
    reportIncident: "Segnala un Incidente",
    exploreCounter: "Esplora le Contro-Narrazioni",
  },
  el: {
    badge: "Εκπαιδευτικό Υλικό",
    title: "Κατανόηση της Ρητορικής Μίσους και των Εγκλημάτων",
    subtitle:
      "Η γνώση είναι το πρώτο βήμα για την προστασία. Μάθετε να αναγνωρίζετε, να αναφέρετε και να καταπολεμάτε τη διάκριση κατά των κοινοτήτων Ρομά.",
    whatIsTitle: "Τι είναι η Ρητορική Μίσους;",
    whatIsDescription:
      "Η ρητορική μίσους είναι οποιαδήποτε μορφή επικοινωνίας (προφορικός ή γραπτός λόγος, εικόνες, σύμβολα) που επιτίθεται ή χρησιμοποιεί διακριτική, προσβλητική και υποτιμητική γλώσσα με βάση τα ιδιαίτερα χαρακτηριστικά (την ταυτότητα) ενός ατόμου ή μιας ομάδας",
    plainLanguageTitle: "Απλά Λόγια",
    plainLanguageIntro: "Η ρητορική μίσους περιλαμβάνει:",
    hateItems: [
      "Προσβολές και υβριστικοί χαρακτηρισμοί που στοχεύουν την ταυτότητα ενός ατόμου",
      "Απειλές βίας ή βλάβης",
      "Περιεχόμενο που απανθρωποιεί ή στερεοτυπεί ομάδες",
      "Παραπληροφόρηση σχεδιασμένη για να υποδαυλίσει το μίσος",
      "Κλήσεις για αποκλεισμό ή διάκριση",
    ],
    keyConcept: "Βασική Έννοια",
    antigypsyismTitle: "Κατανόηση του Αντιτσιγγανισμού",
    antigypsyismDescription:
      "Ο αντιτσιγγανισμός είναι μια συγκεκριμένη μορφή ρατσισμού κατά των Ρομά. Χαρακτηρίζεται από αιώνες διακρίσεων και συνεχίζει να εκδηλώνεται στη σύγχρονη κοινωνία.",
    historicalRoots: "Ιστορικές Ρίζες",
    historicalItems: [
      "Αιώνες διώξεων, δουλείας και γενοκτονίας",
      "Συστηματικός αποκλεισμός από την κοινωνία και τις ευκαιρίες",
      "Πολιτικές εξαναγκασμένης αφομοίωσης",
      "Συνεχιζόμενη διάκριση σε στέγαση, απασχόληση και εκπαίδευση",
    ],
    modernManifestations: "Σύγχρονες Εκδηλώσεις",
    modernItems: [
      "Αρνητικά στερεότυπα στα μέσα και τη λαϊκή κουλτούρα",
      "Διάκριση στην πρόσβαση σε υπηρεσίες",
      "Ρητορική μίσους στα μέσα κοινωνικής δικτύωσης και διαδικτυακές πλατφόρμες",
      "Σωματικές επιθέσεις και παρενοχλήσεις",
      "Θεσμική διάκριση",
    ],
    learnMoreHistory: "Μάθετε περισσότερα για την ιστορία του Αντιτσιγγανισμού",
    historyAccordion:
      "Η δίωξη του λαού των Ρομά εκτείνεται πάνω από χίλια χρόνια σε όλη την Ευρώπη. Από τον Μεσαίωνα μέχρι το Ολοκαύτωμα (Porajmos), όπου εκτιμάται ότι δολοφονήθηκαν 500.000 Ρομά, μέχρι τη σύγχρονη διάκριση, οι κοινότητες Ρομά έχουν αντιμετωπίσει συστηματική καταπίεση. Η κατανόηση αυτής της ιστορίας είναι ζωτικής σημασίας για την αναγνώριση και την καταπολέμηση του σημερινού αντιτσιγγανισμού.",
    legalTitle: "Νομικό Πλαίσιο",
    legalSubtitle: "Κατανόηση των νομικών προστασιών κατά της ρητορικής μίσους και των εγκλημάτων μίσους",
    euFramework: "Πλαίσιο της Ευρωπαϊκής Ένωσης",
    euFrameworkDesc:
      "Ο Χάρτης των Θεμελιωδών Δικαιωμάτων της ΕΕ και διάφορες οδηγίες προστατεύουν κατά της ρητορικής μίσους:",
    euItems: [
      "Απόφαση-Πλαίσιο του Συμβουλίου 2008/913/ΔΕΥ",
      "Άρθρο 10 της Ευρωπαϊκής Σύμβασης Δικαιωμάτων του Ανθρώπου",
      "Εθνική νομοθεσία για εγκλήματα μίσους στα κράτη μέλη",
    ],
    hateCrime: "Τι Συνιστά Έγκλημα Μίσους",
    hateCrimeDesc: "Έγκλημα μίσους είναι οποιοδήποτε εγκληματική πράξη υποκινούμενη από προκατάληψη κατά:",
    biasItems: [
      "Φυλής ή εθνικότητας",
      "Θρησκείας ή πεποιθήσεων",
      "Σεξουαλικού προσανατολισμού",
      "Έμφυλης ταυτότητας",
      "Αναπηρίας",
    ],
    impactTitle: "Ανάλυση Επιπτώσεων",
    impactSubtitle: "Κατανόηση των πραγματικών συνεπειών της ρητορικής μίσους και των εγκλημάτων μίσους",
    immediateImpact: "Άμεση Επίπτωση",
    immediateItems: [
      "Φόβος και άγχος",
      "Σωματική βλάβη (σε περίπτωση εγκλημάτων μίσους)",
      "Κοινωνική απομόνωση",
      "Προκλήσεις ψυχικής υγείας",
    ],
    longTerm: "Μακροπρόθεσμες Επιπτώσεις",
    longTermItems: [
      "Τραύμα και PTSD",
      "Μειωμένη συμμετοχή στη δημόσια ζωή",
      "Οικονομικό μειονέκτημα",
      "Διαγενεακό τραύμα",
    ],
    society: "Συνέπειες για την Κοινωνία",
    societyItems: [
      "Κανονικοποίηση της διάκρισης",
      "Διαίρεση κοινοτήτων",
      "Υπονόμευση δημοκρατικών αξιών",
      "Μείωση κοινωνικής συνοχής",
      "Διαιώνιση ανισότητας",
    ],
    targetedTitle: "Γιατί Στοχεύονται οι Κοινότητες Ρομά",
    targetedSubtitle:
      "Κατανόηση των παραγόντων που καθιστούν ευάλωτες τις κοινότητες Ρομά στη διάκριση",
    targetedCards: [
      { title: "Ιστορική Προκατάληψη", desc: "Στερεότυπα αιώνων επιμένουν στη σύγχρονη κοινωνία" },
      { title: "Ορατότητα", desc: "Οι κοινότητες Ρομά είναι συχνά αναγνωρίσιμες και περιθωριοποιημένες" },
      { title: "Παραπληροφόρηση", desc: "Ψευδείς αφηγήσεις εξαπλώνονται εύκολα στο διαδίκτυο" },
      { title: "Έλλειψη Εκπροσώπησης", desc: "Περιορισμένες φωνές Ρομά στα μέσα και την πολιτική" },
      { title: "Κοινωνικοοικονομικοί Παράγοντες", desc: "Η φτώχεια και ο αποκλεισμός καθιστούν ευάλωτες τις κοινότητες" },
    ],
    checklistBadge: "Οπτικός Έλεγχος",
    checklistTitle: "Αναγνώριση Ρητορικής Μίσους Διαδικτυακά",
    checklistSubtitle: "Κοινά δείγματα για να σας βοηθήσουν να αναγνωρίσετε τη ρητορική μίσους",
    checklistItems: [
      "Χρήση υποτιμητικών όρων ή υβριστικών χαρακτηρισμών",
      "Γενικεύσεις για ολόκληρες ομάδες",
      "Θεωρίες συνωμοσίας",
      "Απανθρωποποιητική γλώσσα ή εικόνες",
      "Κλήσεις για βία ή αποκλεισμό",
      '"Αστεία" που στερεοτυποποιούν ή υποτιμούν',
    ],
    rightsTitle: "Τα Δικαιώματά σας",
    rightsIntro: "Κάθε άτομο έχει δικαίωμα:",
    rightsItems: [
      "Να ζει ελεύθερο από διάκριση",
      "Να αναφέρει ρητορική μίσους και εγκλήματα μίσους",
      "Να έχει πρόσβαση στη δικαιοσύνη και την υποστήριξη",
      "Να έχει την αξιοπρέπειά του σεβαστή",
      "Να συμμετέχει πλήρως στην κοινωνία",
    ],
    whatYouCanDo: "Τι Μπορείτε να Κάνετε",
    actionItems: [
      { title: "Εκπαιδευτείτε", desc: "Μάθετε για την ιστορία και τον πολιτισμό των Ρομά" },
      { title: "Μιλήστε", desc: "Αμφισβητήστε τη ρητορική μίσους όταν τον συναντήσετε" },
      { title: "Αναφέρετε", desc: "Χρησιμοποιήστε διαθέσιμα κανάλια για αναφορά περιστατικών" },
      { title: "Υποστηρίξτε", desc: "Σταθείτε στο πλευρό των πληγέντων κοινοτήτων" },
      { title: "Μοιραστείτε", desc: "Προωθήστε θετικές αφηγήσεις και ακριβείς πληροφορίες" },
    ],
    ctaTitle: "Έτοιμοι να Δράσετε;",
    ctaSubtitle:
      "Αν έχετε βιώσει ή παρακολουθήσει ρητορική μίσους, είμαστε εδώ για να βοηθήσουμε. Αναφέρετε περιστατικά, αποκτήστε πρόσβαση σε υπηρεσίες υποστήριξης και ενταχθείτε στην κοινότητά μας στον αγώνα κατά της διάκρισης.",
    reportIncident: "Αναφορά Περιστατικού",
    exploreCounter: "Εξερευνήστε Αντι-Αφηγήσεις",
  },
}

const hateColors = [
  "bg-rose-100 text-rose-600",
  "bg-orange-100 text-orange-600",
  "bg-amber-100 text-amber-600",
  "bg-red-100 text-red-600",
  "bg-pink-100 text-pink-600",
]

const targetedMeta = [
  { icon: History, color: "bg-amber-100 text-amber-600" },
  { icon: Eye, color: "bg-sky-100 text-sky-600" },
  { icon: Megaphone, color: "bg-rose-100 text-rose-600" },
  { icon: UserX, color: "bg-indigo-100 text-indigo-600" },
  { icon: TrendingDown, color: "bg-emerald-100 text-emerald-600" },
]

const actionIcons = [BookOpen, Megaphone, FileText, HandHeart, Share2]

export default function HateSpeechCrimesPage() {
  const { lang } = useTranslation()
  const t = pageT[lang]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-background to-amber-50" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 text-rose-700 text-sm font-medium mb-6">
                <AlertTriangle className="h-4 w-4" />
                {t.badge}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                {t.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                {t.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* What is Hate Speech Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {t.whatIsTitle}
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  {t.whatIsDescription}
                </p>
              </div>

              <Card className="rounded-3xl shadow-lg border-0 bg-gradient-to-br from-rose-50 to-amber-50 p-2">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                    <MessageSquareWarning className="h-6 w-6 text-rose-500" />
                    {t.plainLanguageTitle}
                  </h3>
                  <p className="text-muted-foreground mb-6">{t.plainLanguageIntro}</p>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {t.hateItems.map((text, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-4 bg-white/80 rounded-2xl"
                      >
                        <div className={`p-2 rounded-xl ${hateColors[index]}`}>
                          {index === 0 ? <XCircle className="h-5 w-5" /> :
                           index === 1 ? <AlertTriangle className="h-5 w-5" /> :
                           index === 2 ? <UserX className="h-5 w-5" /> :
                           index === 3 ? <Megaphone className="h-5 w-5" /> :
                           <Users className="h-5 w-5" />}
                        </div>
                        <p className="text-sm text-foreground font-medium">{text}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Understanding Antigypsyism Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-sky-50/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 text-sky-700 text-sm font-medium mb-4">
                  <BookOpen className="h-4 w-4" />
                  {t.keyConcept}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {t.antigypsyismTitle}
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  {t.antigypsyismDescription}
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                <Card className="rounded-3xl shadow-lg border-0 overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-amber-400 to-orange-500" />
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-2xl bg-amber-100">
                        <History className="h-7 w-7 text-amber-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">{t.historicalRoots}</h3>
                    </div>
                    <ul className="space-y-4">
                      {t.historicalItems.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="mt-1 p-1 rounded-full bg-amber-100">
                            <Clock className="h-4 w-4 text-amber-600" />
                          </div>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="rounded-3xl shadow-lg border-0 overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-rose-400 to-pink-500" />
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-2xl bg-rose-100">
                        <Smartphone className="h-7 w-7 text-rose-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">{t.modernManifestations}</h3>
                    </div>
                    <ul className="space-y-4">
                      {t.modernItems.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="mt-1 p-1 rounded-full bg-rose-100">
                            <Zap className="h-4 w-4 text-rose-600" />
                          </div>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8">
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="history" className="border-0">
                    <Card className="rounded-3xl shadow-md border-0">
                      <AccordionTrigger className="px-8 py-6 hover:no-underline">
                        <span className="text-lg font-semibold text-foreground">{t.learnMoreHistory}</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-8 pb-6">
                        <p className="text-muted-foreground leading-relaxed">
                          {t.historyAccordion}
                        </p>
                      </AccordionContent>
                    </Card>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Framework Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {t.legalTitle}
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  {t.legalSubtitle}
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                <Card className="rounded-3xl shadow-lg border-0 bg-gradient-to-br from-sky-50 to-indigo-50 p-2">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-2xl bg-sky-100">
                        <Globe className="h-7 w-7 text-sky-600" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{t.euFramework}</h3>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      {t.euFrameworkDesc}
                    </p>
                    <div className="space-y-3">
                      {t.euItems.map((item, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-white/80 rounded-xl">
                          <FileText className="h-5 w-5 text-sky-600" />
                          <span className="text-sm font-medium text-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="rounded-3xl shadow-lg border-0 bg-gradient-to-br from-emerald-50 to-teal-50 p-2">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-2xl bg-emerald-100">
                        <Gavel className="h-7 w-7 text-emerald-600" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{t.hateCrime}</h3>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      {t.hateCrimeDesc}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {t.biasItems.map((item, index) => (
                        <div key={index} className="flex items-center gap-2 p-3 bg-white/80 rounded-xl">
                          <Scale className="h-4 w-4 text-emerald-600" />
                          <span className="text-sm font-medium text-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Analysis - Bento Grid */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-rose-50/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {t.impactTitle}
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  {t.impactSubtitle}
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                <Card className="rounded-3xl shadow-lg border-0 overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-orange-400 to-red-500" />
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-xl bg-orange-100">
                        <Zap className="h-6 w-6 text-orange-600" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground">{t.immediateImpact}</h3>
                    </div>
                    <ul className="space-y-3">
                      {t.immediateItems.map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="rounded-3xl shadow-lg border-0 overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-rose-400 to-pink-500" />
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-xl bg-rose-100">
                        <Clock className="h-6 w-6 text-rose-600" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground">{t.longTerm}</h3>
                    </div>
                    <ul className="space-y-3">
                      {t.longTermItems.map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="rounded-3xl shadow-lg border-0 overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-purple-400 to-indigo-500" />
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-xl bg-purple-100">
                        <Users className="h-6 w-6 text-purple-600" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground">{t.society}</h3>
                    </div>
                    <ul className="space-y-3">
                      {t.societyItems.map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Why Roma Communities Are Targeted */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {t.targetedTitle}
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  {t.targetedSubtitle}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {t.targetedCards.map((item, index) => {
                  const IconComponent = targetedMeta[index].icon
                  return (
                    <Card key={index} className="rounded-3xl shadow-lg border-0 hover:shadow-xl transition-shadow">
                      <CardContent className="p-6">
                        <div className={`w-12 h-12 rounded-2xl ${targetedMeta[index].color} flex items-center justify-center mb-4`}>
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Recognizing Hate Speech Online - Checklist */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-amber-50/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-4">
                  <Target className="h-4 w-4" />
                  {t.checklistBadge}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {t.checklistTitle}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {t.checklistSubtitle}
                </p>
              </div>

              <Card className="rounded-3xl shadow-lg border-0 bg-gradient-to-br from-amber-50 to-orange-50 p-2">
                <CardContent className="p-8">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {t.checklistItems.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-4 bg-white/80 rounded-2xl"
                      >
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center">
                          <AlertTriangle className="h-4 w-4 text-rose-600" />
                        </div>
                        <span className="text-foreground font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Your Rights & What You Can Do */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="rounded-3xl shadow-lg border-0 bg-gradient-to-br from-emerald-50 to-teal-50 p-2 overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-2xl bg-emerald-100">
                        <Shield className="h-7 w-7 text-emerald-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">{t.rightsTitle}</h3>
                    </div>
                    <p className="text-muted-foreground mb-6">{t.rightsIntro}</p>
                    <div className="space-y-3">
                      {t.rightsItems.map((item, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-white/80 rounded-xl">
                          <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                          <span className="text-foreground font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="rounded-3xl shadow-lg border-0 bg-gradient-to-br from-sky-50 to-indigo-50 p-2 overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-2xl bg-sky-100">
                        <Heart className="h-7 w-7 text-sky-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">{t.whatYouCanDo}</h3>
                    </div>
                    <div className="space-y-4">
                      {t.actionItems.map((item, index) => {
                        const IconComponent = actionIcons[index]
                        return (
                          <div key={index} className="flex items-start gap-4 p-3 bg-white/80 rounded-xl">
                            <div className="p-2 rounded-lg bg-sky-100">
                              <IconComponent className="h-4 w-4 text-sky-600" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground">{item.title}</h4>
                              <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-sky-50/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="rounded-3xl shadow-xl border-0 bg-gradient-to-br from-primary/90 to-sky-600 text-white overflow-hidden">
                <CardContent className="p-8 lg:p-12 text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                    {t.ctaTitle}
                  </h2>
                  <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto text-pretty">
                    {t.ctaSubtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      asChild
                      size="lg"
                      className="rounded-full bg-destructive text-destructive-foreground hover:bg-destructive/90 px-8"
                    >
                      <Link href="/report-support">
                        {t.reportIncident}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      className="rounded-full bg-emerald-600 text-white hover:bg-emerald-700 px-8"
                    >
                      <Link href="/ai-against-hate">
                        {t.exploreCounter}
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
