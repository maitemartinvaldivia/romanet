export type Lang = 'en' | 'es' | 'it' | 'el'

export interface CountryFramework {
  country: Record<Lang, string>
  flag: string
  gradient: string
  protection: Record<Lang, string[]>
  report: Record<Lang, string[]>
  organizations: Record<Lang, string[]>
}

export const legalFrameworks: CountryFramework[] = [
  {
    country: {
      en: 'Spain',
      es: 'España',
      it: 'Spagna',
      el: 'Ισπανία',
    },
    flag: '🇪🇸',
    gradient: 'from-rose-500/20 to-amber-500/20',
    protection: {
      en: [
        'Spanish Criminal Code Articles 510-512 (hate crimes and hate speech)',
        'Law 15/2022, July 12, comprehensive for equal treatment and non-discrimination',
      ],
      es: [
        'Artículos 510-512 del Código Penal español (delitos de odio e incitación al odio)',
        'Ley 15/2022, de 12 de julio, integral para la igualdad de trato y la no discriminación',
      ],
      it: [
        "Articoli 510-512 del Codice Penale spagnolo (reati d'odio e incitamento all'odio)",
        'Legge 15/2022, del 12 luglio, integrale per l\'uguaglianza di trattamento e la non discriminazione',
      ],
      el: [
        'Άρθρα 510-512 του Ισπανικού Ποινικού Κώδικα (εγκλήματα μίσους και ρητορική μίσους)',
        'Νόμος 15/2022, 12 Ιουλίου, ολοκληρωμένος για την ίση μεταχείριση και τη μη διάκριση',
      ],
    },
    report: {
      en: [
        'National Police (Policía Nacional): 091',
        'Civil Guard (Guardia Civil): 062',
        'Prosecutor\'s Office for Hate Crimes',
      ],
      es: [
        'Policía Nacional: 091',
        'Guardia Civil: 062',
        'Fiscalía de Delitos de Odio',
      ],
      it: [
        'Polizia Nazionale: 091',
        'Guardia Civile: 062',
        "Procura per i Reati d'Odio",
      ],
      el: [
        'Εθνική Αστυνομία: 091',
        'Πολιτοφυλακή: 062',
        'Εισαγγελία Εγκλημάτων Μίσους',
      ],
    },
    organizations: {
      en: [
        'Kamira (National Federation of Roma Women\'s Associations)',
        'Consejo Estatal del Pueblo Gitano',
      ],
      es: [
        'Kamira (Federación Nacional de Asociaciones de Mujeres Gitanas)',
        'Consejo Estatal del Pueblo Gitano',
      ],
      it: [
        'Kamira (Federazione Nazionale di Associazioni di Donne Rom)',
        'Consejo Estatal del Pueblo Gitano',
      ],
      el: [
        'Kamira (Εθνική Ομοσπονδία Συλλόγων Γυναικών Ρομά)',
        'Consejo Estatal del Pueblo Gitano',
      ],
    },
  },
  {
    country: {
      en: 'Italy',
      es: 'Italia',
      it: 'Italia',
      el: 'Ιταλία',
    },
    flag: '🇮🇹',
    gradient: 'from-emerald-500/20 to-teal-500/20',
    protection: {
      en: [
        'Italian Constitution, Article 3 (equality and non-discrimination)',
        'Italian Criminal Code, Articles 604-bis and 604-ter (hate speech, incitement to discrimination or violence, and aggravating circumstance for hate crimes)',
        'Legislative Decree No. 215/2003, implementing Directive 2000/43/EC on equal treatment regardless of race or ethnic origin',
      ],
      es: [
        'Constitución italiana, artículo 3 (igualdad y no discriminación)',
        'Código Penal italiano, artículos 604-bis y 604-ter (discurso de odio, incitación a la discriminación o violencia y circunstancia agravante para crímenes de odio)',
        'Decreto legislativo n. 215/2003, implementación de la directiva 2000/43/CE sobre igualdad de trato independientemente de la raza o el origen étnico',
      ],
      it: [
        'Costituzione italiana, articolo 3 (uguaglianza e non discriminazione)',
        "Codice penale italiano, articoli 604-bis e 604-ter (propaganda d'odio, istigazione alla discriminazione o alla violenza e circostanza aggravante per i crimini d'odio)",
        'Decreto legislativo n. 215/2003, attuazione della direttiva 2000/43/CE sulla parità di trattamento indipendentemente dalla razza o dall\'origine etnica',
      ],
      el: [
        'Ιταλικό Σύνταγμα, Άρθρο 3 (ισότητα και μη διάκριση)',
        'Ιταλικός Ποινικός Κώδικας, Άρθρα 604-bis και 604-ter (ρητορική μίσους, υποκίνηση σε διάκριση ή βία και επιβαρυντική περίσταση για εγκλήματα μίσους)',
        'Νομοθετικό Διάταγμα αριθ. 215/2003, εφαρμογή της Οδηγίας 2000/43/ΕΚ για την ίση μεταχείριση ανεξαρτήτως φυλής ή εθνικής καταγωγής',
      ],
    },
    report: {
      en: [
        'Single Emergency Number: 112',
        'State Police (Polizia di Stato): 113',
        'Carabinieri: 112',
        'OSCAD – Observatory for Security against Discriminatory Acts',
        'UNAR – National Office Against Racial Discrimination (free contact centre: 800 90 10 10)',
      ],
      es: [
        'Número único de emergencia: 112',
        'Policía de Estado (Polizia di Stato): 113',
        'Carabinieri: 112',
        'OSCAD – Observatorio para la seguridad contra actos discriminatorios',
        'UNAR – Oficina Nacional contra la Discriminación Racial (centro de contacto gratuito: 800 90 10 10)',
      ],
      it: [
        'Numero unico di emergenza: 112',
        'Polizia di Stato: 113',
        'Carabinieri: 112',
        'OSCAD – Osservatorio per la sicurezza contro gli atti discriminatori',
        'UNAR – Ufficio Nazionale Antidiscriminazioni Razziali (contact center gratuito: 800 90 10 10)',
      ],
      el: [
        'Ενιαίος Αριθμός Έκτακτης Ανάγκης: 112',
        'Κρατική Αστυνομία (Polizia di Stato): 113',
        'Carabinieri: 112',
        'OSCAD – Παρατηρητήριο για την Ασφάλεια κατά των Διακριτικών Πράξεων',
        'UNAR – Εθνικό Γραφείο κατά των Φυλετικών Διακρίσεων (δωρεάν κέντρο επικοινωνίας: 800 90 10 10)',
      ],
    },
    organizations: {
      en: [
        'UNAR (National Office Against Racial Discrimination)',
      ],
      es: [
        'UNAR (Oficina Nacional contra la Discriminación Racial)',
      ],
      it: [
        'UNAR (Ufficio Nazionale Antidiscriminazioni Razziali)',
      ],
      el: [
        'UNAR (Εθνικό Γραφείο κατά των Φυλετικών Διακρίσεων)',
      ],
    },
  },
  {
    country: {
      en: 'Greece',
      es: 'Grecia',
      it: 'Grecia',
      el: 'Ελλάδα',
    },
    flag: '🇬🇷',
    gradient: 'from-sky-500/20 to-cyan-500/20',
    protection: {
      en: [
        'Article 82A of the Penal Code: A crime with racist characteristics acts as an aggravating circumstance (when committed in conjunction with another autonomous criminal act).',
        'Law 4285/2014 (Anti-Racism Law): Adaptation of Greek legislation (amending Law 927/1979) to combat certain forms of racism and xenophobia (including hate speech) through criminal law.',
      ],
      es: [
        'Artículo 82A del Código Penal: Un delito con características racistas actúa como circunstancia agravante (cuando se comete junto con otro acto delictivo autónomo).',
        'Ley 4285/2014 (Ley Antirracismo): Adaptación de la legislación griega (modificación de la Ley 927/1979) para combatir ciertas formas de racismo y xenofobia (incluido el discurso de odio) a través del derecho penal.',
      ],
      it: [
        "Articolo 82A del Codice Penale: Un reato con caratteristiche razziste funge da circostanza aggravante (quando commesso in congiunzione con un altro atto criminoso autonomo).",
        'Legge 4285/2014 (Legge Antirazzismo): Adeguamento della legislazione greca (modifica della Legge 927/1979) per combattere certe forme di razzismo e xenofobia (inclusa la propaganda d\'odio) attraverso il diritto penale.',
      ],
      el: [
        'Άρθρο 82Α του Ποινικού Κώδικα: Το έγκλημα με ρατσιστικά χαρακτηριστικά λειτουργεί ως επιβαρυντική περίσταση (όταν τελείται σε συνδυασμό με άλλη αυτόνομη εγκληματική πράξη).',
        'Νόμος 4285/2014 (Αντιρατσιστικός Νόμος): Προσαρμογή της ελληνικής νομοθεσίας (τροποποίηση του Ν. 927/1979) για την καταπολέμηση ορισμένων μορφών ρατσισμού και ξενοφοβίας (συμπεριλαμβανομένης της ρητορικής μίσους) μέσω του ποινικού δικαίου.',
      ],
    },
    report: {
      en: [
        'Hellenic Police (Departments / Offices for Combating Racist Violence): 11414 (Special reporting hotline) or 100.',
        'Greek Ombudsman: Competent authority for investigating discrimination and defending rights.',
        'Public Prosecutor\'s Office: (Special Prosecutors for racist crimes).',
      ],
      es: [
        'Policía Helénica (Departamentos / Oficinas de Lucha contra la Violencia Racista): 11414 (línea especial de denuncia) o 100.',
        'Defensor del Pueblo Griego: Autoridad competente para investigar discriminaciones y defender derechos.',
        'Fiscalía: (Fiscales especiales para delitos racistas).',
      ],
      it: [
        'Polizia Ellenica (Dipartimenti / Uffici per la Lotta alla Violenza Razzista): 11414 (numero verde speciale) o 100.',
        'Difensore Civico Greco: Autorità competente per indagare sulle discriminazioni e difendere i diritti.',
        "Procura della Repubblica: (Procuratori speciali per i reati razzisti).",
      ],
      el: [
        'Ελληνική Αστυνομία (Τμήματα / Γραφεία Αντιμετώπισης Ρατσιστικής Βίας): 11414 (Ειδική τηλεφωνική γραμμή καταγγελιών) ή 100.',
        'Συνήγορος του Πολίτη: Αρμόδιος φορέας για τη διερεύνηση διακρίσεων και την προάσπιση δικαιωμάτων.',
        'Εισαγγελία: (Ειδικοί Εισαγγελείς για ρατσιστικά εγκλήματα).',
      ],
    },
    organizations: {
      en: [
        'Association of Greek Roma Mediators: (National body that facilitates access to services and supports victims).',
        'Racist Violence Recording Network (RVRN).',
        'Local Community Centers / Roma Branches and Legal Aid Structures.',
      ],
      es: [
        'Asociación de Mediadores Griegos Roma: (Organismo nacional que facilita el acceso a servicios y apoya a las víctimas).',
        'Red de Registro de Violencia Racista (RVRN).',
        'Centros Comunitarios Locales / Sucursales Roma y Estructuras de Ayuda Legal.',
      ],
      it: [
        'Associazione dei Mediatori Greci Rom: (Ente nazionale che facilita l\'accesso ai servizi e sostiene le vittime).',
        'Rete di Registrazione della Violenza Razzista (RVRN).',
        'Centri Comunitari Locali / Sedi Rom e Strutture di Assistenza Legale.',
      ],
      el: [
        'Σύλλογος Ελλήνων Ρομά Διαμεσολαβητών (Εθνικός φορέας που διευκολύνει την πρόσβαση σε υπηρεσίες και υποστηρίζει τα θύματα).',
        'Δίκτυο Καταγραφής Περιστατικών Ρατσιστικής Βίας (RVRN).',
        'Τοπικά Κέντρα Κοινότητας / Παραρτήματα Ρομά και Δομές Νομικής Βοήθειας.',
      ],
    },
  },
]
