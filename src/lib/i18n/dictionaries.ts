/**
 * =====================================================================
 * MADE BY TAPWEBS (https://tapwebs.in | https://tapwebs.space)
 * ALL RIGHTS ARE OF TAPWEBS
 * 
 * Co-Owners: TAPWEBS & Dr. Vijay Kumar Binwal
 * Client Website: https://drvijaykumarbinwal.com
 * Agency Website: https://tapwebs.in
 * Portfolio Showcase: https://tapwebs.space
 * =====================================================================
 */

/**
 * i18n dictionaries — Hindi (default) and English.
 *
 * Architecture:
 * - Flat key-value pairs grouped by domain for tree-shake friendliness.
 * - Hindi is the default; English is the secondary translation.
 * - Add a new locale by extending `Locale` and providing a dictionary —
 *   the rest of the app picks it up automatically.
 *
 * Why a flat string-key dictionary instead of next-intl / i18next?
 * - Zero runtime dependency overhead.
 * - One JS chunk shared across all client components.
 * - SSR-friendly: dictionaries are static, no async loading needed.
 */

export type Locale = 'hi' | 'en'
export const DEFAULT_LOCALE: Locale = 'hi'
export const LOCALES: Locale[] = ['hi', 'en']

export const LOCALE_LABELS: Record<Locale, string> = {
  hi: 'हिन्दी',
  en: 'English',
}

export type Dictionary = Record<string, string>

// ───────────────────────────────────────────────────────────
// Hindi (default)
// ───────────────────────────────────────────────────────────
const hi: Dictionary = {
  // ── Brand
  'brand.name': 'डॉ. विजय कुमार बिनवाल',
  'brand.tagline': 'वरिष्ठ ट्रांसप्लांट एवं डायलिसिस विशेषज्ञ',

  // ── Common actions
  'common.bookAppointment': 'अपॉइंटमेंट बुक करें',
  'common.callNow': 'अभी कॉल करें',
  'common.whatsapp': 'WhatsApp',
  'common.whatsappNow': 'अभी WhatsApp करें',
  'common.learnMore': 'और जानें',
  'common.readMore': 'पढ़ें',
  'common.viewAll': 'सभी देखें',
  'common.contactForm': 'संपर्क फ़ॉर्म',
  'common.viewServices': 'सेवाएं देखें',
  'common.dietChart': 'डाइट चार्ट',
  'common.skipToContent': 'मुख्य सामग्री पर जाएं',
  'common.toggleLanguage': 'भाषा बदलें',
  'common.openMenu': 'मेन्यू खोलें',
  'common.closeMenu': 'मेन्यू बंद करें',
  'common.back': 'पीछे जाएं',
  'common.contactDoctor': 'डॉक्टर से संपर्क करें',

  // ── Navigation
  'nav.home': 'होम',
  'nav.about': 'परिचय',
  'nav.services': 'सेवाएं',
  'nav.knowYourIllness': 'अपनी बीमारी जानें',
  'nav.diet': 'डाइट प्लान',
  'nav.blog': 'ब्लॉग',
  'nav.gallery': 'गैलरी',
  'nav.contact': 'संपर्क',

  // ── Breadcrumb (used on service/blog/illness detail pages)
  'breadcrumb.home': 'होम',
  'breadcrumb.services': 'सेवाएं',
  'breadcrumb.knowYourIllness': 'अपनी बीमारी जानें',
  'breadcrumb.blog': 'ब्लॉग',

  // ── Hero
  'hero.badge': 'जयपुर के विश्वसनीय किडनी विशेषज्ञ',
  'hero.titleLine1': 'विशेषज्ञ किडनी देखभाल',
  'hero.titleLine2': 'जिस पर आप भरोसा कर सकें',
  'hero.subtitle':
    'डॉ. विजय कुमार बिनवाल — DM नेफ्रोलॉजी विशेषज्ञ, मोनिलेक हॉस्पिटल एंड रिसर्च सेंटर, जयपुर। 25+ वर्षों से करुणामय, साक्ष्य-आधारित किडनी देखभाल।',
  'hero.badgeDM': 'DM नेफ्रोलॉजी',
  'hero.badgeYears': '25+ वर्ष अनुभव',
  'hero.badgePatients': '12000+ मरीज',
  'hero.cardCredentials': 'MBBS · MD · DM नेफ्रोलॉजी',
  'hero.cardHospital': 'मोनिलेक हॉस्पिटल एंड रिसर्च सेंटर, जयपुर',

  // ── Trust bar
  'trust.label.patients': 'मरीजों का इलाज',
  'trust.label.dialysis': 'डायलिसिस',
  'trust.label.years': 'वर्षों का अनुभव',
  'trust.label.satisfaction': 'मरीज संतुष्टि',

  // ── Services section
  'services.eyebrow': 'हम क्या प्रदान करते हैं',
  'services.title': 'किडनी देखभाल सेवाएं',
  'services.subtitle':
    '6 विशेषज्ञताओं में विशेषज्ञ नेफ्रोलॉजी देखभाल — निदान से दीर्घकालिक प्रबंधन तक।',
  'services.viewAll': 'सभी सेवाएं देखें',
  'services.cta.learnMore': 'और जानें',
  'services.stat.expertise': '25+ वर्ष विशेषज्ञता',
  'services.stat.advanced': 'उन्नत डायलिसिस देखभाल',
  'services.stat.transplant': 'संपूर्ण ट्रांसप्लांट देखभाल',
  'services.stat.minimal': 'न्यूनतम आक्रामक प्रक्रियाएं',
  'services.stat.preventive': 'निवारक किडनी देखभाल',
  'services.stat.urinary': 'व्यापक मूत्र देखभाल',
  'services.kidneyFailure.title': 'किडनी फेलियर का इलाज',
  'services.kidneyFailure.desc':
    'CKD, AKI, किडनी फेलियर और अन्य किडनी विकारों का संपूर्ण मूल्यांकन और प्रबंधन — हर अवस्था के लिए व्यक्तिगत उपचार योजना।',
  'services.dialysis.title': 'डायलिसिस (हीमो एवं पेरिटोनियल)',
  'services.dialysis.desc':
    'विशेषज्ञ निगरानी और व्यक्तिगत उपचार के साथ उन्नत डायलिसिस देखभाल। हीमोडायलिसिस और पेरिटोनियल दोनों उपलब्ध।',
  'services.transplant.title': 'किडनी ट्रांसप्लांट',
  'services.transplant.desc':
    'ट्रांसप्लांट से पहले और बाद का मूल्यांकन, डोनर वर्कअप, अनुकूलता आकलन और दीर्घकालिक देखभाल।',
  'services.interventional.title': 'इंटरवेंशनल नेफ्रोलॉजी',
  'services.interventional.desc':
    'विशेष नेफ्रोलॉजी प्रक्रियाएं जैसे Permcath, AV फिस्टुला निर्माण और डायलिसिस कैथेटर।',
  'services.stoneHtn.title': 'किडनी स्टोन एवं हाइपरटेंशन क्लिनिक',
  'services.stoneHtn.desc':
    'किडनी की पथरी और उच्च रक्तचाप के लिए उन्नत उपचार और निवारक देखभाल।',
  'services.urination.title': 'मूत्र संबंधी समस्याएं',
  'services.urination.desc':
    'UTI, मूत्र में कठिनाई, प्रोस्टेट संबंधी समस्याओं और बार-बार होने वाले मूत्र विकारों का विशेषज्ञ निदान और उपचार।',

  // ── About doctor section (home)
  'about.eyebrow': 'अपने डॉक्टर से मिलें',
  'about.title': 'डॉ. विजय कुमार बिनवाल',
  'about.credentials': 'MBBS · MD · DM नेफ्रोलॉजी',
  'about.intro1':
    'डॉ. विजय कुमार बिनवाल जयपुर के सबसे विश्वसनीय नेफ्रोलॉजिस्ट में से एक हैं, 25+ वर्षों के समर्पित अनुभव के साथ। SMS मेडिकल कॉलेज, जयपुर (DM नेफ्रोलॉजी) से प्रशिक्षित।',
  'about.intro2':
    'उनका मिशन हर मरीज को उच्चतम गुणवत्ता वाली किडनी देखभाल — सहानुभूति और सम्मान के साथ — प्रदान करना है।',
  'about.cred1': 'DM नेफ्रोलॉजी — SMS मेडिकल कॉलेज, जयपुर',
  'about.cred2': 'MD आंतरिक चिकित्सा — SMS मेडिकल कॉलेज, जयपुर',
  'about.cred3': 'सदस्य, इंडियन सोसाइटी ऑफ नेफ्रोलॉजी',
  'about.cred4': 'सर्वश्रेष्ठ नेफ्रोलॉजिस्ट पुरस्कार — राजस्थान चिकित्सा संघ 2022',
  'about.readFull': 'पूरा प्रोफ़ाइल पढ़ें',
  'about.badge.dm.title': 'DM नेफ्रोलॉजी',
  'about.badge.dm.sub': 'SMS मेडिकल कॉलेज, जयपुर',
  'about.badge.exp.title': '25+ वर्ष',
  'about.badge.exp.sub': 'अनुभव',

  // ── Google reviews
  'reviews.eyebrow': 'गूगल रिव्यू',
  'reviews.title': 'मरीज गूगल पर क्या कहते हैं',
  'reviews.fallbackTitle': 'गूगल पर मरीजों द्वारा भरोसेमंद',
  'reviews.fallbackDesc':
    'देखें कि हमारे मरीज डॉ. विजय कुमार बिनवाल के साथ अपने किडनी देखभाल अनुभव के बारे में क्या कहते हैं।',
  'reviews.viewAll': 'गूगल पर सभी रिव्यू देखें',
  'reviews.viewLink': 'हमारे गूगल रिव्यू देखें',
  'reviews.viewSub': 'सत्यापित मरीज अनुभव पढ़ें',
  'reviews.totalCount': '{count} रिव्यू गूगल पर',

  // ── Blog (home)
  'blog.eyebrow': 'ज्ञान केंद्र',
  'blog.title': 'नवीनतम किडनी स्वास्थ्य लेख',
  'blog.viewAll': 'सभी लेख देखें',
  'blog.publishedOn': 'प्रकाशित: {date}',
  'blog.readingTime': '{min} मिनट पढ़ने का समय',
  'blog.relatedPosts': 'संबंधित लेख',
  'blog.backToBlog': 'सभी लेख देखें',

  // ── SEO content block
  'seo.eyebrow': 'वरिष्ठ ट्रांसप्लांट एवं डायलिसिस विशेषज्ञ · जयपुर',
  'seo.title.l1': 'साक्ष्य-आधारित किडनी देखभाल,',
  'seo.title.l2': '25+ वर्षों के विश्वास पर आधारित',
  'seo.areas.title': 'जिन क्षेत्रों में सेवा देते हैं',
  'seo.areas.sub':
    'जयपुर और राजस्थान के मरीज उन्नत नेफ्रोलॉजी देखभाल के लिए डॉ. विजय कुमार बिनवाल पर भरोसा करते हैं।',

  // ── FAQ
  'faq.eyebrow': 'सामान्य प्रश्न',
  'faq.title': 'अक्सर पूछे जाने वाले प्रश्न',

  // ── Contact CTA
  'cta.eyebrow': 'संपर्क करें',
  'cta.title': 'आज ही अपॉइंटमेंट बुक करें',
  'cta.desc':
    'लक्षणों के बिगड़ने का इंतज़ार न करें। डॉ. विजय कुमार बिनवाल से जल्दी परामर्श आपकी किडनी स्वास्थ्य को बेहतर बना सकता है।',
  'cta.phone': 'फोन और WhatsApp',
  'cta.address': 'क्लिनिक का पता',
  'cta.hours': 'क्लिनिक का समय',
  'cta.monSat': 'सोम – शनि',
  'cta.sunday': 'रविवार',

  // ── Know Your Illness
  'knowYourIllness.patientEducation': 'रोगी शिक्षा',
  'knowYourIllness.titleFallback': 'अपनी बीमारी को जानें',
  'knowYourIllness.bookAppointment': 'अपॉइंटमेंट बुक करें',
  'knowYourIllness.contactDoctor': 'डॉक्टर से संपर्क करें',
  'knowYourIllness.chooseTopic': 'एक विषय चुनें',
  'knowYourIllness.readMore': 'और पढ़ें',
  'knowYourIllness.whyKnowledgeMatters': 'ज्ञान क्यों मायने रखता है',
  'knowYourIllness.exploreTopics': 'विषय खोजें',
  'knowYourIllness.relatedConditions': 'संबंधित विषय',
  'cta.sundayClosed': 'बंद (केवल आपात स्थिति)',

  // ── Footer
  'footer.aboutDesc':
    'डॉ. विजय कुमार बिनवाल द्वारा विशेषज्ञ नेफ्रोलॉजी देखभाल — जयपुर के विश्वसनीय किडनी विशेषज्ञ।',
  'footer.ourServices': 'हमारी सेवाएं',
  'footer.quickLinks': 'त्वरित लिंक',
  'footer.locations': 'हमारे क्षेत्र',
  'footer.location.jaipur': 'जयपुर',
  'footer.location.mansarovar': 'मानसरोवर',
  'footer.location.malviyaNagar': 'मालवीय नगर',
  'footer.location.vaishaliNagar': 'वैशाली नगर',
  'footer.location.tonkRoad': 'टोंक रोड',
  'footer.location.ajmer': 'अजमेर',
  'footer.contact': 'संपर्क',
  'footer.allRights': 'सर्वाधिकार सुरक्षित। MADE BY TAPWEBS — ALL RIGHTS ARE OF TAPWEBS',
  'footer.specialist': 'DM नेफ्रोलॉजी · जयपुर के किडनी विशेषज्ञ',

  // ── About Page
  'about.page.badge': 'वरिष्ठ ट्रांसप्लांट और डायलिसिस विशेषज्ञ',
  'about.page.credentials': 'MBBS · MD (Medicine) · DM (Nephrology)',
  'about.page.para1': 'डॉ. विजय कुमार बिनवाल जयपुर के सबसे विश्वसनीय और अनुभवी नेफ्रोलॉजिस्ट में से एक हैं, जिनके पास किडनी से संबंधित जटिल विकारों के निदान और प्रबंधन में 25 से अधिक वर्षों का नैदानिक अनुभव है। उन्होंने अपना करियर उन्नत किडनी देखभाल प्रदान करने के लिए समर्पित किया है।',
  'about.page.para2': 'अपने मरीज-केंद्रित दृष्टिकोण और सटीक नैदानिक निर्णय के लिए जाने जाते हैं। परामर्श हिंदी और अंग्रेजी दोनों में उपलब्ध है।',
  'about.page.educationEyebrow': 'शिक्षा और प्रशिक्षण',
  'about.page.educationTitle': 'शैक्षणिक योग्यताएं',
  'about.page.expertiseEyebrow': 'नैदानिक ध्यान',
  'about.page.expertiseTitle': 'विशेष रुचि के क्षेत्र',
  'about.page.expertiseDesc': 'किडनी रोगों की रोकथाम, निदान और उपचार में हर चरण के लिए विशेषज्ञता।',
  'about.page.hospitalsEyebrow': 'हमें कहाँ खोजें',
  'about.page.hospitalsTitle': 'अस्पताल और क्लिनिक',
  'about.page.eventsEyebrow': 'क्लिनिक से परे',
  'about.page.eventsTitle': 'कार्यक्रम, पुरस्कार और सामुदायिक देखभाल',
  'about.page.eventsDesc': 'डॉ. बिनवाल राजस्थान भर में चिकित्सा सम्मेलनों, स्वास्थ्य शिविरों और सामुदायिक जागरूकता कार्यक्रमों में सक्रिय रूप से भाग लेते हैं।',
  'about.page.viewGallery': 'पूरी गैलरी देखें',
  'about.page.membershipsEyebrow': 'पेशेवर नेटवर्क',
  'about.page.membershipsTitle': 'पेशेवर सदस्यताएं',
  'about.page.patientCareTitle': 'मरीज-केंद्रित किडनी देखभाल',
  'about.page.patientCareDesc': 'डॉ. विजय कुमार बिनवाल अपने करुणामय दृष्टिकोण, सटीक निदान और साक्ष्य-आधारित किडनी देखभाल प्रदान करने की प्रतिबद्धता के लिए व्यापक रूप से सम्मानित हैं।',
  'about.page.missionDesc': 'उनका मिशन है सभी मरीजों को सुलभ, नैतिक और उन्नत नेफ्रोलॉजी देखभाल प्रदान करना।',
  'about.page.bookConsultation': 'परामर्श बुक करें',
  'about.page.viewServices': 'सेवाएं देखें',
  'about.page.primaryPractice': 'प्राथमिक प्रैक्टिस',
  'about.page.seniorConsultant': 'वरिष्ठ परामर्शदाता — नेफ्रोलॉजी',
  'about.page.byAppointment': 'अपॉइंटमेंट पर',
  'about.page.yearsLabel': 'वर्ष अनुभव',
  'about.page.patientsLabel': 'मरीज उपचारित',
  'about.page.ratingLabel': 'Google रेटिंग',
  'about.page.reviewsLabel': 'Google समीक्षाएं',

  // ── Gallery Page
  'gallery.eyebrow': 'दृश्य दौरा',
  'gallery.title': 'हमारे क्लिनिक के अंदर',
  'gallery.desc': 'डॉ. विजय कुमार बिनवाल की तस्वीरें, हमारी आधुनिक क्लिनिक सुविधाएं, उन्नत उपचार उपकरण और मरीज देखभाल का अन्वेषण करें।',
  'gallery.allPhotos': 'सभी फ़ोटो',
  'gallery.yearsLabel': 'वर्षों का अभ्यास',
  'gallery.patientsLabel': 'मरीज उपचारित',
  'gallery.ratingLabel': 'Google रेटिंग',
  'gallery.photosLabel': 'फ़ोटो और वीडियो',

  // ── Contact Page
  'contact.eyebrow': 'अपॉइंटमेंट बुक करें',
  'contact.heroTitle': 'आज ही विशेषज्ञ किडनी देखभाल पाएं',
  'contact.heroDesc': 'परामर्श, दूसरी राय या किसी भी किडनी स्वास्थ्य चिंता के लिए डॉ. विजय कुमार बिनवाल से संपर्क करें। हम 2 घंटे के भीतर जवाब देते हैं।',
  'contact.whatsappFastest': 'WhatsApp — सबसे तेज़ प्रतिक्रिया',
  'contact.monSatHours': 'सोमवार से शनिवार · सुबह 8:00 – शाम 8:00',
  'contact.phoneWhatsapp': 'फोन और WhatsApp',
  'contact.sameNumber': 'कॉल और WhatsApp के लिए एक ही नंबर',
  'contact.email': 'ईमेल',
  'contact.emailDesc': 'रिपोर्ट और गैर-जरूरी प्रश्नों के लिए',
  'contact.clinicLocation': 'क्लिनिक स्थान',
  'contact.clinicHours': 'क्लिनिक समय',
  'contact.sundayClosed': 'रविवार: बंद (केवल आपात स्थिति)',
  'contact.monSatOpen': 'सोम – शनि: सुबह 8 – शाम 8',
  'contact.formTitle': 'हमें संदेश भेजें',
  'contact.formDesc': 'नीचे फ़ॉर्म भरें और हम 2 घंटे के भीतर आपसे संपर्क करेंगे।',
  'contact.fieldName': 'पूरा नाम',
  'contact.fieldPhone': 'फोन नंबर',
  'contact.fieldEmail': 'ईमेल (वैकल्पिक)',
  'contact.fieldService': 'आवश्यक सेवा',
  'contact.fieldLanguage': 'पसंदीदा भाषा',
  'contact.fieldQuery': 'आपकी समस्या / लक्षण',
  'contact.fieldNamePlaceholder': 'आपका पूरा नाम',
  'contact.fieldPhonePlaceholder': '10 अंकों का मोबाइल',
  'contact.fieldEmailPlaceholder': 'your@email.com',
  'contact.fieldQueryPlaceholder': 'अपने लक्षण, चिंताएं या जो आप डॉ. बिनवाल से चर्चा करना चाहते हैं, बताएं...',
  'contact.selectService': 'सेवा चुनें',
  'contact.svcKidney': 'किडनी फेलियर उपचार',
  'contact.svcDialysis': 'डायलिसिस (हीमोडायलिसिस और पेरिटोनियल)',
  'contact.svcTransplant': 'किडनी ट्रांसप्लांट परामर्श',
  'contact.svcInterventional': 'इंटरवेंशनल नेफ्रोलॉजी',
  'contact.svcStone': 'किडनी स्टोन और हाइपरटेंशन क्लिनिक',
  'contact.svcUrination': 'मूत्र संबंधी समस्याएं',
  'contact.svcOther': 'अन्य / सामान्य प्रश्न',
  'contact.submitSend': 'संदेश भेजें',
  'contact.submitSending': 'भेज रहे हैं...',
  'contact.successTitle': 'संदेश सफलतापूर्वक भेजा गया!',
  'contact.successDesc': 'संपर्क करने के लिए धन्यवाद। डॉ. बिनवाल की टीम जल्द ही आपसे संपर्क करेगी।',
  'contact.whatsappFaster': 'तेज़ प्रतिक्रिया के लिए WhatsApp करें',
  'contact.secure': 'आपकी जानकारी सुरक्षित है और केवल आपके प्रश्न के संबंध में उपयोग की जाएगी।',
  'contact.howToReach': 'हम तक कैसे पहुंचें',
  'contact.alsoAvailableAt': 'यहां भी उपलब्ध',
  'contact.openMaps': 'Google Maps में खोलें',
  'contact.askDirections': 'दिशा-निर्देश पूछें',
  'contact.whatToExpect': 'जब आप आएं तो क्या उम्मीद करें',
  'contact.expectDesc': 'आपकी सुविधा और स्पष्टता पहली कॉल से लेकर निरंतर देखभाल तक हमारी प्राथमिकता है।',
  'contact.easyBooking': 'आसान बुकिंग',
  'contact.easyBookingDesc': 'WhatsApp, फोन या इस फ़ॉर्म के माध्यम से बुक करें। अपॉइंटमेंट 30 मिनट में पुष्टि।',
  'contact.minWait': 'कम प्रतीक्षा समय',
  'contact.minWaitDesc': 'निर्धारित अपॉइंटमेंट का मतलब है कम प्रतीक्षा और डॉक्टर के साथ अधिक समय।',
  'contact.privateConsult': 'निजी परामर्श',
  'contact.privateConsultDesc': 'डॉ. बिनवाल के साथ एकांत में परामर्श। आपकी स्वास्थ्य जानकारी गोपनीय रहती है।',
  'contact.bilingualCare': 'द्विभाषी देखभाल',
  'contact.bilingualCareDesc': 'स्पष्ट और सहज संचार के लिए हिंदी और अंग्रेजी में परामर्श उपलब्ध है।',
  'contact.bottomCtaTitle': 'देर न करें — आपकी किडनी को अभी ध्यान चाहिए',
  'contact.bottomCtaDesc': 'शुरुआती परामर्श गंभीर किडनी क्षति को रोक सकता है। आज ही विशेषज्ञ मार्गदर्शन के लिए संपर्क करें।',
  'contact.networkError': 'नेटवर्क त्रुटि। कृपया अपना कनेक्शन जांचें या WhatsApp आज़माएं।',
  'contact.sendError': 'आपका संदेश नहीं भेजा जा सका। कृपया WhatsApp आज़माएं।',
  'contact.nameRequired': 'नाम आवश्यक है',
  'contact.phoneRequired': 'फोन नंबर आवश्यक है',
  'contact.phoneInvalid': 'वैध 10 अंकों का भारतीय मोबाइल नंबर दर्ज करें',
  'contact.queryRequired': 'कृपया अपनी समस्या बताएं',

  // ── Clinic address (How to Reach Us section)
  'contact.clinicName': 'पिंकसिटी सुपरस्पेशलिटी क्लिनिक',
  'contact.clinicAddressShort': 'S36, न्यू सांगानेर रोड\nमानसरोवर, जयपुर 302020',
  'contact.clinicAddressFull.line1': 'S36, न्यू सांगानेर रोड, इंडियन ऑयल पेट्रोल पंप के पास,',
  'contact.clinicAddressFull.line2': 'वार्ड 27, मानसरोवर सेक्टर 6, मानसरोवर,',
  'contact.clinicAddressFull.line3': 'जयपुर, राजस्थान – 302020',

  // ── Also available at
  'contact.monilek.name': 'मोनिलेक हॉस्पिटल एंड रिसर्च सेंटर',
  'contact.monilek.role': 'वरिष्ठ परामर्शदाता — नेफ्रोलॉजी विभाग',
  'contact.monilek.address': 'सेक्टर 4, जवाहर नगर, जयपुर',

  // ── Language dropdown options
  'contact.langEn': 'English',
  'contact.langHi': 'हिंदी (Hindi)',
}

// ───────────────────────────────────────────────────────────
// English
// ───────────────────────────────────────────────────────────
const en: Dictionary = {
  // ── Brand
  'brand.name': 'Dr. Vijay Kumar Binwal',
  'brand.tagline': 'Senior Transplant & Dialysis Specialist',

  // ── Common actions
  'common.bookAppointment': 'Book Appointment',
  'common.callNow': 'Call Now',
  'common.whatsapp': 'WhatsApp',
  'common.whatsappNow': 'WhatsApp Now',
  'common.learnMore': 'Learn more',
  'common.readMore': 'Read',
  'common.viewAll': 'View All',
  'common.contactForm': 'Contact Form',
  'common.viewServices': 'View Services',
  'common.dietChart': 'Diet Chart',
  'common.skipToContent': 'Skip to main content',
  'common.toggleLanguage': 'Switch language',
  'common.openMenu': 'Open Menu',
  'common.closeMenu': 'Close Menu',
  'common.back': 'Back',
  'common.contactDoctor': 'Contact Doctor',

  // ── Navigation
  'nav.home': 'Home',
  'nav.about': 'About',
  'nav.services': 'Services',
  'nav.knowYourIllness': 'Know Your Illness',
  'nav.diet': 'Diet Plan',
  'nav.blog': 'Blog',
  'nav.gallery': 'Gallery',
  'nav.contact': 'Contact',

  // ── Breadcrumb (used on service/blog/illness detail pages)
  'breadcrumb.home': 'Home',
  'breadcrumb.services': 'Services',
  'breadcrumb.knowYourIllness': 'Know Your Illness',
  'breadcrumb.blog': 'Blog',

  // ── Hero
  'hero.badge': "Jaipur's Trusted Kidney Specialist",
  'hero.titleLine1': 'Expert Kidney Care',
  'hero.titleLine2': 'You Can Trust',
  'hero.subtitle':
    'Dr. Vijay Kumar Binwal — DM Nephrology specialist at Monilek Hospital & Research Centre, Jaipur. Compassionate, evidence-based kidney care for over 25 years.',
  'hero.badgeDM': 'DM Nephrology',
  'hero.badgeYears': '25+ Years Experience',
  'hero.badgePatients': '12000+ Patients',
  'hero.cardCredentials': 'MBBS · MD · DM Nephrology',
  'hero.cardHospital': 'Monilek Hospital & Research Centre, Jaipur',

  // ── Trust bar
  'trust.label.patients': 'Patients Treated',
  'trust.label.dialysis': 'Dialysis',
  'trust.label.years': 'Years Experience',
  'trust.label.satisfaction': 'Patient Satisfaction',

  // ── Services
  'services.eyebrow': 'What We Offer',
  'services.title': 'Kidney Care Services',
  'services.subtitle':
    'Expert nephrology care across 6 specialisations — from diagnosis to long-term management.',
  'services.viewAll': 'View All Services',
  'services.cta.learnMore': 'Learn more',
  'services.stat.expertise': '25+ years expertise',
  'services.stat.advanced': 'Advanced dialysis care',
  'services.stat.transplant': 'End-to-end transplant care',
  'services.stat.minimal': 'Minimally invasive procedures',
  'services.stat.preventive': 'Preventive kidney care',
  'services.stat.urinary': 'Comprehensive urinary care',
  'services.kidneyFailure.title': 'Kidney Failure Treatment',
  'services.kidneyFailure.desc':
    'Complete evaluation and management of CKD, AKI, kidney failure and other renal disorders with personalised treatment plans for every stage.',
  'services.dialysis.title': 'Dialysis (Hemodialysis & Peritoneal)',
  'services.dialysis.desc':
    'Advanced dialysis care with expert monitoring and personalised plans — for both hemodialysis and peritoneal dialysis patients.',
  'services.transplant.title': 'Kidney Transplant',
  'services.transplant.desc':
    'Pre and post-transplant evaluation, donor workup, compatibility assessment, transplant guidance, and long-term care.',
  'services.interventional.title': 'Interventional Nephrology',
  'services.interventional.desc':
    'Specialised nephrology procedures including Permcath, AV Fistula creation, dialysis catheter procedures and access evaluation.',
  'services.stoneHtn.title': 'Kidney Stone & Hypertension Clinic',
  'services.stoneHtn.desc':
    'Advanced treatment and preventive care for kidney stones and high blood pressure with long-term protection strategies.',
  'services.urination.title': 'Problems Related to Urination',
  'services.urination.desc':
    'Expert diagnosis and treatment for urinary tract infections, difficulty urinating, prostate-related issues and recurrent problems.',

  // ── About
  'about.eyebrow': 'Meet Your Doctor',
  'about.title': 'Dr. Vijay Kumar Binwal',
  'about.credentials': 'MBBS · MD · DM Nephrology',
  'about.intro1':
    "Dr. Vijay Kumar Binwal is one of Jaipur's most trusted nephrologists, with over 25 years of dedicated expertise in kidney care. Trained at SMS Medical College, Jaipur (DM Nephrology), he combines cutting-edge medical knowledge with compassionate patient care.",
  'about.intro2':
    'His mission is to provide every patient with the highest quality kidney care, delivered with empathy and respect.',
  'about.cred1': 'DM Nephrology — SMS Medical College, Jaipur',
  'about.cred2': 'MD Internal Medicine — SMS Medical College, Jaipur',
  'about.cred3': 'Member, Indian Society of Nephrology',
  'about.cred4': 'Best Nephrologist Award — Rajasthan Medical Association 2022',
  'about.readFull': 'Read Full Profile',
  'about.badge.dm.title': 'DM Nephrology',
  'about.badge.dm.sub': 'SMS Medical College, Jaipur',
  'about.badge.exp.title': '25+ years',
  'about.badge.exp.sub': 'Experience',

  // ── Reviews
  'reviews.eyebrow': 'Google Reviews',
  'reviews.title': 'What Patients Say on Google',
  'reviews.fallbackTitle': 'Trusted by Patients on Google',
  'reviews.fallbackDesc':
    'See what our patients say about their kidney care experience with Dr. Vijay Kumar Binwal.',
  'reviews.viewAll': 'View All Reviews on Google',
  'reviews.viewLink': 'View Our Google Reviews',
  'reviews.viewSub': 'Read verified patient experiences',
  'reviews.totalCount': '{count} reviews on Google',

  // ── Blog
  'blog.eyebrow': 'Knowledge Hub',
  'blog.title': 'Latest Kidney Health Articles',
  'blog.viewAll': 'View All Articles',
  'blog.publishedOn': 'Published on {date}',
  'blog.readingTime': '{min} min read',
  'blog.relatedPosts': 'Related Articles',
  'blog.backToBlog': 'Back to all articles',

  // ── SEO
  'seo.eyebrow': 'Senior Transplant & Dialysis Specialist · Jaipur',
  'seo.title.l1': 'Evidence-Based Kidney Care,',
  'seo.title.l2': 'Built on 25+ Years of Trust',
  'seo.areas.title': 'Areas We Serve',
  'seo.areas.sub':
    'Patients across Jaipur and Rajasthan trust Dr. Vijay Kumar Binwal for advanced nephrology and kidney care services.',

  // ── FAQ
  'faq.eyebrow': 'Common Questions',
  'faq.title': 'Frequently Asked Questions',

  // ── CTA
  'cta.eyebrow': 'Get In Touch',
  'cta.title': 'Book Your Appointment Today',
  'cta.desc':
    "Don't wait for symptoms to worsen. Early consultation with Dr. Vijay Kumar Binwal can make a significant difference in your kidney health outcomes.",
  'cta.phone': 'Phone & WhatsApp',
  'cta.address': 'Clinic Address',
  'cta.hours': 'Clinic Hours',
  'cta.monSat': 'Mon – Sat',
  'cta.sunday': 'Sunday',

  // ── Know Your Illness
  'knowYourIllness.patientEducation': 'Patient Education',
  'knowYourIllness.titleFallback': 'Know Your Illness',
  'knowYourIllness.bookAppointment': 'Book Appointment',
  'knowYourIllness.contactDoctor': 'Contact Doctor',
  'knowYourIllness.chooseTopic': 'Choose a Topic',
  'knowYourIllness.readMore': 'Read More',
  'knowYourIllness.whyKnowledgeMatters': 'Why Knowledge Matters',
  'knowYourIllness.exploreTopics': 'Explore Topics',
  'knowYourIllness.relatedConditions': 'Related Conditions',
  'cta.sundayClosed': 'Closed (Emergency only)',

  // ── Footer
  'footer.aboutDesc':
    "Expert nephrology care by Dr. Vijay Kumar Binwal — Jaipur's trusted kidney specialist with years of dedicated patient care.",
  'footer.ourServices': 'Our Services',
  'footer.quickLinks': 'Quick Links',
  'footer.locations': 'Areas We Serve',
  'footer.location.jaipur': 'Jaipur',
  'footer.location.mansarovar': 'Mansarovar',
  'footer.location.malviyaNagar': 'Malviya Nagar',
  'footer.location.vaishaliNagar': 'Vaishali Nagar',
  'footer.location.tonkRoad': 'Tonk Road',
  'footer.location.ajmer': 'Ajmer',
  'footer.contact': 'Contact',
  'footer.allRights': 'MADE BY TAPWEBS — ALL RIGHTS ARE OF TAPWEBS. All rights reserved.',
  'footer.specialist': 'DM Nephrology · Kidney Specialist Jaipur',

  // ── About Page
  'about.page.badge': 'Senior Transplant & Dialysis Specialist',
  'about.page.credentials': 'MBBS · MD (Medicine) · DM (Nephrology)',
  'about.page.para1': "Dr. Vijay Kumar Binwal is one of Jaipur's most trusted and experienced Nephrologists, with over 25 years of clinical experience in diagnosing and managing complex kidney-related disorders. He has dedicated his career to providing advanced kidney care.",
  'about.page.para2': "Known for his patient-centric approach and accurate clinical judgment. Consultations available in Hindi and English.",
  'about.page.educationEyebrow': 'Education & Training',
  'about.page.educationTitle': 'Academic Qualifications',
  'about.page.expertiseEyebrow': 'Clinical Focus',
  'about.page.expertiseTitle': 'Areas of Special Interest',
  'about.page.expertiseDesc': 'Specialized in the prevention, diagnosis, and treatment of kidney diseases across all stages.',
  'about.page.hospitalsEyebrow': 'Where to Find Us',
  'about.page.hospitalsTitle': 'Hospital & Clinic Associations',
  'about.page.eventsEyebrow': 'Beyond the Clinic',
  'about.page.eventsTitle': 'Events, Awards & Community Care',
  'about.page.eventsDesc': 'Dr. Binwal actively participates in medical conferences, health camps, and community awareness programs across Rajasthan.',
  'about.page.viewGallery': 'View Full Gallery',
  'about.page.membershipsEyebrow': 'Professional Network',
  'about.page.membershipsTitle': 'Professional Memberships',
  'about.page.patientCareTitle': 'Patient-Centered Kidney Care',
  'about.page.patientCareDesc': 'Dr. Vijay Kumar Binwal is widely respected for his compassionate approach, accurate diagnosis, and commitment to delivering evidence-based kidney care.',
  'about.page.missionDesc': 'His mission is to provide accessible, ethical, and advanced nephrology care while helping patients achieve better kidney health.',
  'about.page.bookConsultation': 'Book Consultation',
  'about.page.viewServices': 'View Services',
  'about.page.primaryPractice': 'Primary Practice',
  'about.page.seniorConsultant': 'Senior Consultant — Nephrology',
  'about.page.byAppointment': 'By appointment',
  'about.page.yearsLabel': 'Years Experience',
  'about.page.patientsLabel': 'Patients Treated',
  'about.page.ratingLabel': 'Google Rating',
  'about.page.reviewsLabel': 'Google Reviews',

  // ── Gallery Page
  'gallery.eyebrow': 'Visual Tour',
  'gallery.title': 'Inside Our Clinic',
  'gallery.desc': 'Explore photos of Dr. Vijay Kumar Binwal, our modern clinic facilities, advanced treatment equipment, and patient care in action.',
  'gallery.allPhotos': 'All Photos',
  'gallery.yearsLabel': 'Years of Practice',
  'gallery.patientsLabel': 'Patients Treated',
  'gallery.ratingLabel': 'Google Rating',
  'gallery.photosLabel': 'Photos & Videos',

  // ── Contact Page
  'contact.eyebrow': 'Book Your Appointment',
  'contact.heroTitle': 'Get Expert Kidney Care Today',
  'contact.heroDesc': 'Reach out to Dr. Vijay Kumar Binwal for consultation, second opinions, or any kidney health concerns. We respond within 2 hours.',
  'contact.whatsappFastest': 'WhatsApp — Fastest Response',
  'contact.monSatHours': 'Monday to Saturday · 8:00 AM – 8:00 PM',
  'contact.phoneWhatsapp': 'Phone & WhatsApp',
  'contact.sameNumber': 'Same number for calls & WhatsApp',
  'contact.email': 'Email',
  'contact.emailDesc': 'For reports & non-urgent queries',
  'contact.clinicLocation': 'Clinic Location',
  'contact.clinicHours': 'Clinic Hours',
  'contact.sundayClosed': 'Sunday: Closed (Emergency only)',
  'contact.monSatOpen': 'Mon – Sat: 8AM – 8PM',
  'contact.formTitle': 'Send Us a Message',
  'contact.formDesc': "Fill in the form below and we'll get back to you within 2 hours.",
  'contact.fieldName': 'Full Name',
  'contact.fieldPhone': 'Phone Number',
  'contact.fieldEmail': 'Email (Optional)',
  'contact.fieldService': 'Service Needed',
  'contact.fieldLanguage': 'Preferred Language',
  'contact.fieldQuery': 'Your Query / Symptoms',
  'contact.fieldNamePlaceholder': 'Your full name',
  'contact.fieldPhonePlaceholder': '10-digit mobile',
  'contact.fieldEmailPlaceholder': 'your@email.com',
  'contact.fieldQueryPlaceholder': "Describe your symptoms, concerns, or what you'd like to discuss with Dr. Binwal...",
  'contact.selectService': 'Select a service',
  'contact.svcKidney': 'Kidney Failure Treatment',
  'contact.svcDialysis': 'Dialysis (Hemodialysis & Peritoneal Dialysis)',
  'contact.svcTransplant': 'Kidney Transplant Consultation',
  'contact.svcInterventional': 'Interventional Nephrology',
  'contact.svcStone': 'Kidney Stone & Hypertension Clinic',
  'contact.svcUrination': 'Problems Related to Urination',
  'contact.svcOther': 'Other / General Query',
  'contact.submitSend': 'Send Message',
  'contact.submitSending': 'Sending...',
  'contact.successTitle': 'Message Sent Successfully!',
  'contact.successDesc': "Thank you for reaching out. Dr. Binwal's team will contact you shortly.",
  'contact.whatsappFaster': 'WhatsApp for Faster Response',
  'contact.secure': 'Your information is secure and will only be used to contact you regarding your query.',
  'contact.howToReach': 'How to Reach Us',
  'contact.alsoAvailableAt': 'Also Available At',
  'contact.openMaps': 'Open in Google Maps',
  'contact.askDirections': 'Ask for Directions',
  'contact.whatToExpect': 'What to Expect When You Visit',
  'contact.expectDesc': 'Your comfort and clarity are our priority from the first call to ongoing care.',
  'contact.easyBooking': 'Easy Booking',
  'contact.easyBookingDesc': 'Book via WhatsApp, phone, or this form. Appointments confirmed within 30 minutes.',
  'contact.minWait': 'Minimal Wait Time',
  'contact.minWaitDesc': 'Scheduled appointments mean you spend less time waiting and more time with the doctor.',
  'contact.privateConsult': 'Private Consultation',
  'contact.privateConsultDesc': 'One-on-one consultation with Dr. Binwal. Your health information stays confidential.',
  'contact.bilingualCare': 'Bilingual Care',
  'contact.bilingualCareDesc': 'Consultations available in Hindi and English for clear, comfortable communication.',
  'contact.bottomCtaTitle': "Don't Wait — Your Kidneys Need Attention Now",
  'contact.bottomCtaDesc': 'Early consultation can prevent serious kidney damage. Reach out today for expert guidance.',
  'contact.networkError': 'Network error. Please check your connection or try WhatsApp.',
  'contact.sendError': 'Could not send your message. Please try WhatsApp.',
  'contact.nameRequired': 'Name is required',
  'contact.phoneRequired': 'Phone number is required',
  'contact.phoneInvalid': 'Enter a valid 10-digit Indian mobile number',
  'contact.queryRequired': 'Please describe your query',

  // ── Clinic address (How to Reach Us section)
  'contact.clinicName': 'Pinkcity Superspeciality Clinic',
  'contact.clinicAddressShort': 'S36, New Sanganer Road\nMansarovar, Jaipur 302020',
  'contact.clinicAddressFull.line1': 'S36, New Sanganer Road, Near Indian Oil Petrol Pump,',
  'contact.clinicAddressFull.line2': 'Ward 27, Mansarovar Sector 6, Mansarovar,',
  'contact.clinicAddressFull.line3': 'Jaipur, Rajasthan – 302020',

  // ── Also available at
  'contact.monilek.name': 'Monilek Hospital & Research Centre',
  'contact.monilek.role': 'Senior Consultant — Nephrology Department',
  'contact.monilek.address': 'Sector 4, Jawahar Nagar, Jaipur',

  // ── Language dropdown options
  'contact.langEn': 'English',
  'contact.langHi': 'हिंदी (Hindi)',
}

export const dictionaries: Record<Locale, Dictionary> = { hi, en }
