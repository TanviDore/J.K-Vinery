import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    // Navbar
    navHome: "Home",
    navAbout: "About Farm",
    navVarieties: "Varieties",
    navExperience: "Experience",
    navLocation: "Location",
    navPlanVisit: "Plan Your Visit",

    // Hero
    heroEst: "Established Nashik Vineyard",
    heroWelcome: "Welcome to",
    heroTagline: "Premium Crimson & J.K Sugar Grapes from the fertile soils of Karanjad, Nashik",
    heroExplore: "Explore Farm",

    // About
    aboutHeritage: "Our Heritage & Passion",
    aboutHeading: "Nurturing Premium Grapes in Nashik",
    aboutDesc1: "Nestled in the famous agricultural hub of Karanjad in Nashik, Maharashtra, J.K. Farm is an estate of agricultural mastery. Spanning rich volcanic soils under temperate microclimates, our vineyard is dedicated to growing the absolute finest quality dessert grapes.",
    aboutDesc2: "Owned and personally managed by the Deore brothers, Mahendra Deore and Jitendra Deore, J.K. Farm represents generations of soil knowledge combined with modern viticulture practices. We focus heavily on cultivating two exquisite varieties: the deep crimson seedless grape and our signature sweet J.K Sugar grape.",
    aboutQuestions: "Have any questions?",
    aboutContactOwner: "Contact owners Mahendra & Jitendra Deore directly",
    aboutNatureFirst: "Nature First",
    aboutNatureDesc: "Our vineyard operates on eco-friendly, nutrient-dense organic soils in Baglan Taluka.",
    aboutStrictQuality: "Strict Quality Control",
    aboutStrictDesc: "Every cluster is handpicked and monitored for sugar concentration (Brix levels) and crispness.",
    aboutOwnerOperated: "Owner Operated",
    aboutOwnerDesc: "Direct involvement of Mahendra and Jitendra Deore at every step of cultivation.",

    // Modal
    modalTitle: "Select Language",
    modalSubtitle: "Choose your preferred language to explore the vineyards of J.K. Farm",
    modalButton: "Continue",
    modalSkip: "Skip / English",
  },
  hi: {
    // Navbar
    navHome: "होम",
    navAbout: "फ़ार्म के बारे में",
    navVarieties: "किस्में",
    navExperience: "अनुभव",
    navLocation: "स्थान",
    navPlanVisit: "यात्रा की योजना",

    // Hero
    heroEst: "स्थापित नासिक वाइनयार्ड",
    heroWelcome: "जे.के. फ़ार्म में आपका स्वागत है",
    heroTagline: "करंजद, नासिक की उपजाऊ मिट्टी से प्रीमियम क्रिमसन और जे.के. शुगर अंगूर",
    heroExplore: "फ़ार्म का अन्वेषण करें",

    // About
    aboutHeritage: "हमारी विरासत और जुनून",
    aboutHeading: "नासिक में प्रीमियम अंगूरों का पोषण",
    aboutDesc1: "महाराष्ट्र के नासिक में करंजद के प्रसिद्ध कृषि केंद्र में स्थित, जे.के. फ़ार्म कृषि विशेषज्ञता का एक अनूठा उदाहरण है। समशीतोष्ण जलवायु में समृद्ध ज्वालामुखी मिट्टी में फैला हमारा वाइनयार्ड बेहतरीन गुणवत्ता वाले अंगूर उगाने के लिए समर्पित है।",
    aboutDesc2: "देवरे बंधुओं, महेंद्र देवरे और जितेंद्र देवरे के स्वामित्व और व्यक्तिगत प्रबंधन में, जे.के. फ़ार्म आधुनिक अंगूर की खेती के तरीकों के साथ मिट्टी की पीढ़ियों के ज्ञान का प्रतिनिधित्व करता है। हम दो उत्तम किस्मों की खेती पर ध्यान केंद्रित करते हैं: गहरे लाल रंग के बीजरहित अंगूर और हमारे विशेष मीठे जे.के. शुगर अंगूर।",
    aboutQuestions: "कोई सवाल है?",
    aboutContactOwner: "मालिक महेंद्र और जितेंद्र देवरे से सीधे संपर्क करें",
    aboutNatureFirst: "प्रकृति पहले",
    aboutNatureDesc: "हमारा वाइनयार्ड बागलाण तालुका में पर्यावरण-अनुकूल, पोषक तत्वों से भरपूर जैविक मिट्टी पर काम करता है।",
    aboutStrictQuality: "सख्त गुणवत्ता नियंत्रण",
    aboutStrictDesc: "चीनी की मात्रा (ब्रिक्स स्तर) और कुरकुरेपन के लिए हर गुच्छे की बारीकी से जांच की जाती है।",
    aboutOwnerOperated: "मालिकों द्वारा संचालित",
    aboutOwnerDesc: "खेती के हर चरण में महेंद्र और जितेंद्र देवरे की सीधी भागीदारी रहती है।",

    // Modal
    modalTitle: "भाषा चुनें",
    modalSubtitle: "जे.के. फ़ार्म की अंगूर के खेतों का अनुभव करने के लिए अपनी पसंदीदा भाषा चुनें",
    modalButton: "आगे बढ़ें",
    modalSkip: "छोड़ें / English",
  },
  mr: {
    // Navbar
    navHome: "होम",
    navAbout: "फार्म बद्दल",
    navVarieties: "प्रकार",
    navExperience: "अनुभव",
    navLocation: "स्थान",
    navPlanVisit: "भेटीचे नियोजन",

    // Hero
    heroEst: "स्थापित नाशिक व्हाईनयार्ड",
    heroWelcome: "जे.के. फार्म मध्ये आपले स्वागत आहे",
    heroTagline: "करंजद, नाशिकच्या सुपीक जमिनीतील प्रीमियम क्रिमसन आणि जे.के. शुगर द्राक्षे",
    heroExplore: "फार्म एक्सप्लोर करा",

    // About
    aboutHeritage: "आमचा वारसा आणि ध्यास",
    aboutHeading: "नाशिकमध्ये प्रीमियम द्राक्षांची लागवड",
    aboutDesc1: "महाराष्ट्रातील नाशिक जिल्ह्यातील करंजद या प्रसिद्ध कृषी क्षेत्रात वसलेले, जे.के. फार्म हे कृषी कौशल्याचे एक उत्तम उदाहरण आहे. पोषक हवामानात आणि समृद्ध ज्वालामुखी जमिनीत पसरलेले आमचे द्राक्ष बागेचे क्षेत्र अत्यंत उत्कृष्ट दर्जाची खाण्याची द्राक्षे पिकवण्यासाठी समर्पित आहे.",
    aboutDesc2: "देवरे बंधू, महेंद्र देवरे आणि जितेंद्र देवरे यांच्या मालकीखाली आणि थेट मार्गदर्शनाखाली, जे.के. फार्म हे पिढ्यानपिढ्यांच्या मातीच्या ज्ञानाची आणि आधुनिक द्राक्ष लागवड पद्धतींची सांगड घालते. आम्ही प्रामुख्याने दोन उत्कृष्ट प्रकारांच्या लागवडीवर लक्ष केंद्रित करतो: गडद लाल रंगाची बिनबियांची द्राक्षे आणि आमची खास गोड जे.के. शुगर द्राक्षे.",
    aboutQuestions: "काही प्रश्न आहेत का?",
    aboutContactOwner: "मालक महेंद्र आणि जितेंद्र देवरे यांच्याशी थेट संपर्क साधा",
    aboutNatureFirst: "निसर्गाला प्राधान्य",
    aboutNatureDesc: "आमचे द्राक्ष शेती बागलाण तालुक्यातील पर्यावरण-पूरक, पोषक सेंद्रिय मातीवर आधारित आहे.",
    aboutStrictQuality: "कडक गुणवत्ता नियंत्रण",
    aboutStrictDesc: "द्राक्षांचा गोडवा (ब्रिक्स पातळी) आणि ताजेपणा टिकवण्यासाठी प्रत्येक घड हाताने तपासून निवडला जातो.",
    aboutOwnerOperated: "मालकांद्वारे संचालित",
    aboutOwnerDesc: "लागवडीच्या आणि व्यवस्थापनाच्या प्रत्येक टप्प्यात महेंद्र आणि जितेंद्र देवरे यांचा थेट सहभाग असतो.",

    // Modal
    modalTitle: "भाषा निवडा",
    modalSubtitle: "जे.के. फार्मच्या द्राक्ष बागांचा अनुभव घेण्यासाठी तुमची पसंतीची भाषा निवडा",
    modalButton: "पुढे जा",
    modalSkip: "वगळा / English",
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState('en');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('jk_vinery_lang');
    if (savedLang && translations[savedLang]) {
      setLanguageState(savedLang);
    } else {
      // Prompt modal if no language is saved
      setShowModal(true);
    }
  }, []);

  const setLanguage = (lang) => {
    if (translations[lang]) {
      setLanguageState(lang);
      localStorage.setItem('jk_vinery_lang', lang);
      setShowModal(false);
    }
  };

  const t = (key) => {
    return translations[language]?.[key] || translations['en']?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, showModal, setShowModal, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
