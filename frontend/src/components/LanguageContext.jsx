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
    heroTagline: "Premium Crimson & J.K Sugar Grapes from the fertile soils of करंजाड, Nashik",
    heroExplore: "Explore Farm",

    // About
    aboutHeritage: "Our Heritage & Passion",
    aboutHeading: "Nurturing Premium Grapes in Nashik",
    aboutDesc1: "Nestled in the famous agricultural hub of करंजाड in Nashik, Maharashtra, J.K. Farm is an estate of agricultural mastery. Spanning rich soil under temperate microclimates, our vineyard is dedicated to growing the absolute finest quality dessert grapes.",
    aboutDesc2: "Owned and personally managed by the Deore brothers, Mahendra Deore and Jitendra Deore, J.K. Farm represents generations of soil knowledge combined with modern viticulture practices. We focus heavily on cultivating two exquisite varieties: the deep crimson seedless grape and our signature sweet J.K Sugar grape.",
    aboutQuestions: "Have any questions?",
    aboutContactOwner: "Contact owners Mahendra & Jitendra Deore directly",
    aboutNatureFirst: "Nature First",
    aboutNatureDesc: "Our vineyard operates on eco-friendly, nutrient-dense organic soils in Baglan Taluka.",
    aboutStrictQuality: "Strict Quality Control",
    aboutStrictDesc: "Every cluster is handpicked and monitored for sugar concentration (Brix levels) and crispness.",
    aboutOwnerOperated: "Owner Operated",
    aboutOwnerDesc: "Direct involvement of Mahendra and Jitendra Deore at every step of cultivation.",

    // Varieties
    varSpecialties: "Our Specialties",
    varHeading: "Premium Grape Varieties",
    varDesc: "Carefully cultivated to deliver rich flavor, crunch, and nutritional benefits to grape lovers.",
    varCharacteristics: "Key Characteristics",
    
    // Crimson Grapes
    varCrimsonName: "Crimson Grapes",
    varCrimsonSubtitle: "Vibrant, Sweet & Seedless",
    varCrimsonDesc: "Our Crimson Grapes are celebrated for their gorgeous bright red hue and crisp, firm texture. They offer a perfect sugar-to-acid ratio, resulting in a sweet and highly refreshing flavor profile that lingers delightfully.",
    varCrimsonF1: "Vibrant deep crimson-red skin coloring",
    varCrimsonF2: "Extremely crisp texture with high snap",
    varCrimsonF3: "Seedless dessert grape with extended shelf life",
    varCrimsonF4: "Average sugar brix level: 18-20%",

    // J.K Sugar Grapes
    varSugarName: "J.K Sugar Grapes",
    varSugarSubtitle: "Extra Sweet & Juicy Golden-Greens",
    varSugarDesc: "A specialty selection of our farm, the J.K Sugar Grape is cultivated to maximize its sugar concentration. With a thin, translucent pale green skin, these grapes are loaded with high water content and exceptional honeyed sweetness.",
    varSugarF1: "Translucent green-gold premium appearance",
    varSugarF2: "Intense honey-like sweet juice profile",
    varSugarF3: "Thin skin yielding an easy, crisp bite",
    varSugarF4: "High sugar brix level exceeding 21%",

    // ExperienceGrid
    expLife: "Life at the Vineyard",
    expHeading: "The Farm Experience",
    expDesc: "A visual journey into our daily operations, harvest rituals, and the raw natural beauty that goes into every grape.",
    expEnlarge: "Click to enlarge",
    expPhoto1Title: "Rustic Harvest",
    expPhoto1Caption: "Freshly harvested dark purple and green grapes nested in a woven basket.",
    expPhoto2Title: "Vineyard Trails",
    expPhoto2Caption: "Serene paths running parallel to green trellises stretching towards Baglan's horizon.",
    expPhoto3Title: "Quality Care & Sorting",
    expPhoto3Caption: "Careful grading and boxing process ensuring only flawless grapes ship to markets.",
    expPhoto4Title: "Morning Glistening",
    expPhoto4Caption: "Glistening morning dew clinging to organic grape clusters under early dawn sunlight.",
    expPhoto5Title: "Valley Agriculture",
    expPhoto5Caption: "Panoramic vistas across the Nashik grape cultivating valleys and farms.",

    // Location
    locFindUs: "Where to Find Us",
    locVisitHeading: "Visit J.K. Farm",
    locDesc: "We are situated in the fertile and picturesque agricultural belt of Nashik district, well-known as the wine and grape capital of India. Visitors are welcome to schedule guided walks.",
    locFarmTitle: "Farm Location",
    locAddressLine1: "At Post करंजाड,",
    locAddressLine2: "Taluka Baglan, District Nashik,",
    locAddressLine3: "Maharashtra, India",
    locCopyBtn: "Copy Address",
    locCopiedBtn: "Copied!",
    locDirectionsBtn: "Get Directions",
    locCallUs: "Call Us",
    locEmail: "Email",
    locMapTitle: "Google Maps - J.K. Farm Location in करंजाड, Nashik",

    // VisitRequestForm
    formSubTitle: "Visit J.K. Farm",
    formTitle: "Request a Farm Visit",
    formDesc: "Experience the vineyard beauty, smell the sweet aroma of grapevines, and meet the owners. Plan your custom visit today.",
    formSuccessTitle: "Thank You!",
    formErrorTitle: "Submission Failed",
    formLabelName: "Full Name",
    formLabelPhone: "Contact Number",
    formLabelEmail: "Email Address",
    formOptional: "(Optional)",
    formLabelAddress: "Your Address",
    formLabelPurpose: "Purpose of Visit",
    formLabelDate: "Preferred Visit Date",
    formPlaceholderName: "e.g. Ramesh Patil",
    formPlaceholderPhone: "e.g. 9876543210",
    formPlaceholderEmail: "e.g. user@example.com",
    formPlaceholderAddress: "e.g. Shivajinagar, Pune",
    formPlaceholderPurpose: "e.g. Grape buying, farm tourism, photography, educational visit",
    formBtnSubmitting: "Submitting Request...",
    formBtnSubmit: "Submit Visit Request",
    formErrName: "Full name is required",
    formErrPhoneReq: "Contact number is required",
    formErrPhoneVal: "Please enter a valid 10-digit phone number",
    formErrEmailVal: "Please enter a valid email address",
    formErrAddress: "Your address is required",
    formErrPurpose: "Purpose of visit is required",
    formErrDateReq: "Please select a preferred visit date",
    formErrDatePast: "Visit date cannot be in the past",
    formSuccessMsg: "Your farm visit request has been successfully submitted! We will contact you soon.",
    formErrorMsg: "Failed to connect to the backend server. Please make sure the server is running.",

    // Footer
    footerDesc: "Cultivating the finest premium Crimson & J.K Sugar grapes in Nashik. Our dedication to soil nutrition and harvesting methods guarantees unmatched taste and crispness.",
    footerFounders: "Our Founders",
    footerSubText: "Nashik Agriculture Excellence",
    footerQuickLinks: "Quick Navigation",
    footerContact: "Contact Details",
    footerMadeWith: "Made with",
    footerInIndia: "in India",
    footerAllRights: "All rights reserved.",

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
    heroTagline: "करंजाड, नासिक की उपजाऊ मिट्टी से प्रीमियम क्रिमसन और जे.के. शुगर अंगूर",
    heroExplore: "फ़ार्म का अन्वेषण करें",

    // About
    aboutHeritage: "हमारी विरासत और जुनून",
    aboutHeading: "नासिक में प्रीमियम अंगूरों का पोषण",
    aboutDesc1: "महाराष्ट्र के नासिक में करंजाड के प्रसिद्ध कृषि केंद्र में स्थित, जे.के. फ़ार्म कृषि विशेषज्ञता का एक अनूठा उदाहरण है। समशीतोष्ण जलवायु में समृद्ध उपजाऊ मिट्टी में फैला हमारा वाइनयार्ड बेहतरीन गुणवत्ता वाले अंगूर उगाने के लिए समर्पित है।",
    aboutDesc2: "देवरे बंधुओं, महेंद्र देवरे और जितेंद्र देवरे के स्वामित्व और व्यक्तिगत प्रबंधन में, जे.के. फ़ार्म आधुनिक अंगूर की खेती के तरीकों के साथ मिट्टी की पीढ़ियों के ज्ञान का प्रतिनिधित्व करता है। हम दो उत्तम किस्मों की खेती पर ध्यान केंद्रित करते हैं: गहरे लाल रंग के बीजरहित अंगूर और हमारे विशेष मीठे जे.के. शुगर अंगूर।",
    aboutQuestions: "कोई सवाल है?",
    aboutContactOwner: "मालिक महेंद्र और जितेंद्र देवरे से सीधे संपर्क करें",
    aboutNatureFirst: "प्रकृति पहले",
    aboutNatureDesc: "हमारा वाइनयार्ड बागलाण तालुका में पर्यावरण-अनुकूल, पोषक तत्वों से भरपूर जैविक मिट्टी पर काम करता है।",
    aboutStrictQuality: "सख्त गुणवत्ता नियंत्रण",
    aboutStrictDesc: "चीनी की मात्रा (ब्रिक्स स्तर) और कुरकुरेपन के लिए हर गुच्छे की बारीकी से जांच की जाती है।",
    aboutOwnerOperated: "मालिकों द्वारा संचालित",
    aboutOwnerDesc: "खेती के हर चरण में महेंद्र और जितेंद्र देवरे की सीधी भागीदारी रहती है।",

    // Varieties
    varSpecialties: "हमारी विशेषताएँ",
    varHeading: "प्रीमियम अंगूर की किस्में",
    varDesc: "अंगूर प्रेमियों को समृद्ध स्वाद, कुरकुरापन और पोषण संबंधी लाभ प्रदान करने के लिए सावधानीपूर्वक खेती की जाती है।",
    varCharacteristics: "मुख्य विशेषताएँ",

    // Crimson Grapes
    varCrimsonName: "क्रिमसन अंगूर",
    varCrimsonSubtitle: "जीवंत, मीठा और बीजरहित",
    varCrimsonDesc: "हमारे क्रिमसन अंगूर अपने भव्य चमकीले लाल रंग और कुरकुरी, दृढ़ बनावट के लिए प्रसिद्ध हैं। वे एक आदर्श शर्करा-से-अम्ल अनुपात प्रदान करते हैं, जिसके परिणामस्वरूप एक मीठा और अत्यधिक ताज़ा स्वाद प्रोफ़ाइल प्राप्त होती है।",
    varCrimsonF1: "जीवंत गहरे लाल रंग का छिलका",
    varCrimsonF2: "अत्यंत कुरकुरी बनावट",
    varCrimsonF3: "लंबे समय तक चलने वाले बीजरहित मीठे अंगूर",
    varCrimsonF4: "औसत चीनी ब्रिक्स स्तर: 18-20%",

    // J.K Sugar Grapes
    varSugarName: "जे.के. शुगर अंगूर",
    varSugarSubtitle: "अतिरिक्त मीठे और रसीले सुनहरे-हरे अंगूर",
    varSugarDesc: "हमारे फ़ार्म का एक विशेष चयन, जे.के. शुगर अंगूर की खेती चीनी की मात्रा को अधिकतम करने के लिए की जाती है। पतले, पारदर्शी हल्के हरे रंग के छिलके के साथ, ये अंगूर पानी की उच्च मात्रा और असाधारण शहद जैसी मिठास से भरपूर होते हैं।",
    varSugarF1: "पारभासी हरे-सुनहरे रंग का प्रीमियम रूप",
    varSugarF2: "शहद जैसा मीठा और गाढ़ा रस",
    varSugarF3: "पतला छिलका जिससे आसानी से कुरकुरी बाइट मिलती है",
    varSugarF4: "21% से अधिक का उच्च चीनी ब्रिक्स स्तर",

    // ExperienceGrid
    expLife: "वाइनयार्ड का जीवन",
    expHeading: "फ़ार्म का अनुभव",
    expDesc: "हमारे दैनिक कार्यों, फसल की रस्मों और हर अंगूर में समाई प्राकृतिक सुंदरता की एक दृश्य यात्रा।",
    expEnlarge: "बड़ा करने के लिए क्लिक करें",
    expPhoto1Title: "ताजी फसल",
    expPhoto1Caption: "एक बुनी हुई टोकरी में रखे ताजे तोड़े गए गहरे बैंगनी और हरे अंगूर।",
    expPhoto2Title: "वाइनयार्ड के रास्ते",
    expPhoto2Caption: "बागलाण के क्षितिज की ओर फैले हरे मचानों के समानांतर चलने वाले शांत रास्ते।",
    expPhoto3Title: "गुणवत्ता देखभाल और छंटनी",
    expPhoto3Caption: "सावधानीपूर्वक ग्रेडिंग और पैकेजिंग प्रक्रिया यह सुनिश्चित करती है कि केवल सर्वोत्तम अंगूर ही बाजारों में जाएं।",
    expPhoto4Title: "सुबह की चमक",
    expPhoto4Caption: "सुबह की धूप में जैविक अंगूरों के गुच्छों पर चमकती ओस की बूंदें।",
    expPhoto5Title: "घाटी की कृषि",
    expPhoto5Caption: "नासिक की अंगूर उत्पादक घाटियों और खेतों के मनोरम दृश्य।",

    // Location
    locFindUs: "हम कहाँ हैं",
    locVisitHeading: "जे.के. फ़ार्म पर आएं",
    locDesc: "हम नासिक जिले के उपजाऊ और सुंदर कृषि बेल्ट में स्थित हैं, जिसे भारत की वाइन और अंगूर की राजधानी के रूप में जाना जाता है। आगंतुकों का मार्गदर्शन के साथ घूमने के लिए स्वागत है।",
    locFarmTitle: "फ़ार्म का स्थान",
    locAddressLine1: "मु. पो. करंजाड,",
    locAddressLine2: "तालुका बागलाण, जिला नासिक,",
    locAddressLine3: "महाराष्ट्र, भारत",
    locCopyBtn: "पता कॉपी करें",
    locCopiedBtn: "कॉपी किया गया!",
    locDirectionsBtn: "दिशा-निर्देश प्राप्त करें",
    locCallUs: "हमें कॉल करें",
    locEmail: "ईमेल",
    locMapTitle: "Google Maps - जे.के. फ़ार्म स्थान करंजाड, नासिक",

    // VisitRequestForm
    formSubTitle: "जे.के. फ़ार्म पर आएं",
    formTitle: "फ़ार्म यात्रा का अनुरोध करें",
    formDesc: "अंगूर के बाग की सुंदरता का अनुभव करें, लताओं की मीठी सुगंध महसूस करें और मालिकों से मिलें। आज ही अपनी यात्रा की योजना बनाएं।",
    formSuccessTitle: "धन्यवाद!",
    formErrorTitle: "जमा करना विफल रहा",
    formLabelName: "पूरा नाम",
    formLabelPhone: "संपर्क नंबर",
    formLabelEmail: "ईमेल पता",
    formOptional: "(वैकल्पिक)",
    formLabelAddress: "आपका पता",
    formLabelPurpose: "यात्रा का उद्देश्य",
    formLabelDate: "पसंद की तारीख",
    formPlaceholderName: "जैसे: रमेश पाटिल",
    formPlaceholderPhone: "जैसे: 9876543210",
    formPlaceholderEmail: "जैसे: user@example.com",
    formPlaceholderAddress: "जैसे: शिवाजीनगर, पुणे",
    formPlaceholderPurpose: "जैसे: अंगूर खरीदना, कृषि पर्यटन, शैक्षिक यात्रा",
    formBtnSubmitting: "अनुरोध जमा किया जा रहा है...",
    formBtnSubmit: "यात्रा अनुरोध जमा करें",
    formErrName: "पूरा नाम आवश्यक है",
    formErrPhoneReq: "संपर्क नंबर आवश्यक है",
    formErrPhoneVal: "कृपया एक वैध 10-अंकीय फोन नंबर दर्ज करें",
    formErrEmailVal: "कृपया एक वैध ईमेल पता दर्ज करें",
    formErrAddress: "आपका पता आवश्यक है",
    formErrPurpose: "यात्रा का उद्देश्य आवश्यक है",
    formErrDateReq: "कृपया पसंद की तारीख चुनें",
    formErrDatePast: "यात्रा की तारीख अतीत में नहीं हो सकती",

    // Footer
    footerDesc: "नासिक में बेहतरीन प्रीमियम क्रिमसन और जे.के. शुगर अंगूर की खेती। मिट्टी के पोषण और कटाई के तरीकों के प्रति हमारा समर्पण बेजोड़ स्वाद और कुरकुरेपन की गारंटी देता है।",
    footerFounders: "हमारे संस्थापक",
    footerSubText: "नासिक कृषि उत्कृष्टता",
    footerQuickLinks: "त्वरित नेविगेशन",
    footerContact: "संपर्क सूत्र",
    footerMadeWith: "बनाया गया है",
    footerInIndia: "भारत में",
    footerAllRights: "सर्वाधिकार सुरक्षित।",

    // VisitRequestForm Messages
    formSuccessMsg: "आपका फ़ार्म यात्रा अनुरोध सफलतापूर्वक सबमिट कर दिया गया है! हम आपसे जल्द ही संपर्क करेंगे।",
    formErrorMsg: "बैकएंड सर्वर से कनेक्ट करने में विफल। कृपया सुनिश्चित करें कि सर्वर चल रहा है।",

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
    heroTagline: "करंजाड, नाशिकच्या सुपीक जमिनीतील प्रीमियम क्रिमसन आणि जे.के. शुगर द्राक्षे",
    heroExplore: "फार्म एक्सप्लोर करा",

    // About
    aboutHeritage: "आमचा वारसा आणि ध्यास",
    aboutHeading: "नाशिकमध्ये प्रीमियम द्राक्षांची लागवड",
    aboutDesc1: "महाराष्ट्रातील नाशिक जिल्ह्यातील करंजाड या प्रसिद्ध कृषी क्षेत्रात वसलेले, जे.के. फार्म हे कृषी कौशल्याचे एक उत्तम उदाहरण आहे। पोषक हवामानात आणि समृद्ध सुपीक जमिनीत पसरलेले आमचे द्राक्ष बागेचे क्षेत्र अत्यंत उत्कृष्ट दर्जाची खाण्याची द्राक्षे पिकवण्यासाठी समर्पित आहे।",
    aboutDesc2: "देवरे बंधू, महेंद्र देवरे आणि जितेंद्र देवरे यांच्या मालकीखाली आणि थेट मार्गदर्शनाखाली, जे.के. फार्म हे पिढ्यानपिढ्यांच्या मातीच्या ज्ञानाची आणि आधुनिक द्राक्ष लागवड पद्धतींची सांगड घालते। आम्ही प्रामुख्याने दोन उत्कृष्ट प्रकारांच्या लागवडीवर लक्ष केंद्रित करतो: गडद लाल रंगाची बिनबियांची द्राक्षे आणि आमची खास गोड जे.के. शुगर द्राक्षे।",
    aboutQuestions: "काही प्रश्न आहेत का?",
    aboutContactOwner: "मालक महेंद्र आणि जितेंद्र देवरे यांच्याशी थेट संपर्क साधा",
    aboutNatureFirst: "निसर्गाला प्राधान्य",
    aboutNatureDesc: "आमचे द्राक्ष शेती बागलाण तालुक्यातील पर्यावरण-पूरक, पोषक सेंद्रिय मातीवर आधारित आहे।",
    aboutStrictQuality: "कडक गुणवत्ता नियंत्रण",
    aboutStrictDesc: "द्राक्षांचा गोडवा (ब्रिक्स पातळी) आणि ताजेपणा टिकवण्यासाठी प्रत्येक घड हाताने तपासून निवडला जातो।",
    aboutOwnerOperated: "मालकांद्वारे संचालित",
    aboutOwnerDesc: "लागवडीच्या आणि व्यवस्थापनाच्या प्रत्येक टप्प्यात महेंद्र आणि जितेंद्र देवरे यांचा थेट सहभाग असतो।",

    // Varieties
    varSpecialties: "आमची वैशिष्ट्ये",
    varHeading: "प्रीमियम द्राक्षांचे प्रकार",
    varDesc: "द्राक्ष प्रेमींना समृद्ध चव, कुरकुरीतपणा आणि पौष्टिक लाभ देण्यासाठी काळजीपूर्वक लागवड केली जाते।",
    varCharacteristics: "प्रमुख वैशिष्ट्ये",

    // Crimson Grapes
    varCrimsonName: "क्रिमसन द्राक्षे",
    varCrimsonSubtitle: "गडद लाल, गोड आणि बिनबियांची",
    varCrimsonDesc: "आमची क्रिमसन द्राक्षे त्यांच्या सुंदर गडद लाल रंग आणि कुरकुरीत, घट्ट पोत यासाठी प्रसिद्ध आहेत। साखर आणि आंबटपणाचे अचूक प्रमाण असल्याने ही द्राक्षे गोड आणि अत्यंत ताजी चव देतात।",
    varCrimsonF1: "गडद लाल रंगाचे आकर्षक साल",
    varCrimsonF2: "अत्यंत कुरकुरीत आणि खाण्यास उत्कृष्ट",
    varCrimsonF3: "लांब टिकणारी बिनबियांची गोड द्राक्षे",
    varCrimsonF4: "सरासरी साखर ब्रिक्स पातळी: १८-२०%",

    // J.K Sugar Grapes
    varSugarName: "जे.के. शुगर द्राक्षे",
    varSugarSubtitle: "अतिशय गोड आणि रसीली सोनेरी-हिरवी द्राक्षे",
    varSugarDesc: "आमच्या शेतीचे एक विशेष उत्पादन, जे.के. शुगर द्राक्ष बागेत साखरेचे प्रमाण वाढवण्यासाठी खास पिकवले जाते। पातळ, अर्धपारदर्शक फिकट हिरव्या सालीसह, ही द्राक्षे भरपूर रसाळ आणि मधासारख्या गोड चवीने परिपूर्ण असतात।",
    varSugarF1: "अर्धपारदर्शक हिरव्या-सोनेरी रंगाचा प्रीमियम लूक",
    varSugarF2: "मधासारखा गोड आणि रसाळ स्वाद",
    varSugarF3: "पातळ साल असल्याने सहज कुरकुरीत बाईट",
    varSugarF4: "२१% पेक्षा जास्त उच्च साखर ब्रिक्स पातळी",

    // ExperienceGrid
    expLife: "द्राक्ष बागेतील जीवन",
    expHeading: "फार्मचा अनुभव",
    expDesc: "आमचे दैनंदिन काम, द्राक्ष काढणी आणि प्रत्येक द्राक्षामागील नैसर्गिक सौंदर्याचा प्रवास दर्शवणारी झलक।",
    expEnlarge: "मोठे करण्यासाठी क्लिक करा",
    expPhoto1Title: "नुकतीच झालेली काढणी",
    expPhoto1Caption: "टोपलीमध्ये ठेवलेली नुकतीच काढलेली गडद जांभळी आणि हिरवी द्राक्षे।",
    expPhoto2Title: "बागेतील रस्ते",
    expPhoto2Caption: "बागलाणच्या क्षितिजाकडे जाणाऱ्या हिरव्या वेलींच्या समांतर शांत रस्ते।",
    expPhoto3Title: "गुणवत्ता नियंत्रण आणि वर्गीकरण",
    expPhoto3Caption: "दर्जेदार प्रतवारी आणि पॅकिंग प्रक्रिया, ज्यामुळे फक्त उत्कृष्ट द्राक्षे बाजारात पाठवली जातात।",
    expPhoto4Title: "सकाळचे सौंदर्य",
    expPhoto4Caption: "सकाळच्या कोवळ्या उन्हात द्राक्षांच्या घडांवर चकाकणारे दवबिंदू।",
    expPhoto5Title: "घाटीतील शेती",
    expPhoto5Caption: "नाशिकमधील द्राक्ष लागवडीच्या खोऱ्यांचे आणि शेतीचे विहंगम दृश्य।",

    // Location
    locFindUs: "आम्हाला येथे शोधा",
    locVisitHeading: "जे.के. फार्मला भेट द्या",
    locDesc: "आम्ही नाशिक जिल्ह्यातील सुपीक आणि नयनरम्य कृषी पट्ट्यात स्थित आहोत, ज्याला भारताची द्राक्ष राजधानी म्हणून ओळखले जाते। बागेची सफर करण्यासाठी भेट देणाऱ्यांचे स्वागत आहे।",
    locFarmTitle: "फार्मचे ठिकाण",
    locAddressLine1: "मु. पो. करंजाड,",
    locAddressLine2: "तालुका बागलाण, जिल्हा नाशिक,",
    locAddressLine3: "महाराष्ट्र, भारत",
    locCopyBtn: "पत्ता कॉपी करा",
    locCopiedBtn: "कॉपी केले!",
    locDirectionsBtn: "मार्गदर्शन मिळवा",
    locCallUs: "संपर्क करा",
    locEmail: "ईमेल",
    locMapTitle: "Google Maps - जे.के. फार्मचे ठिकाण करंजाड, नासिक",

    // VisitRequestForm
    formSubTitle: "जे.के. फार्मला भेट द्या",
    formTitle: "फार्म भेटीसाठी विनंती करा",
    formDesc: "द्राक्ष बागेचे सौंदर्य अनुभवा, वेलींचा सुगंध घ्या आणि मालकांना भेटा। आजच आपल्या भेटीचे नियोजन करा।",
    formSuccessTitle: "धन्यवाद!",
    formErrorTitle: "अर्ज सादर करणे अयशस्वी",
    formLabelName: "पूर्ण नाव",
    formLabelPhone: "संपर्क क्रमांक",
    formLabelEmail: "ईमेल पत्ता",
    formOptional: "(पर्यायी)",
    formLabelAddress: "तुमचा पत्ता",
    formLabelPurpose: "भेटीचा उद्देश",
    formLabelDate: "भेटीची तारीख",
    formPlaceholderName: "उदा. रमेश पाटील",
    formPlaceholderPhone: "उदा. 9876543210",
    formPlaceholderEmail: "उदा. user@example.com",
    formPlaceholderAddress: "उदा. शिवाजीनगर, पुणे",
    formPlaceholderPurpose: "उदा. द्राक्षे खरेदी, कृषी पर्यटन, शैक्षणिक भेट",
    formBtnSubmitting: "विनंती पाठवत आहे...",
    formBtnSubmit: "भेटीची विनंती पाठवा",
    formErrName: "पूर्ण नाव आवश्यक आहे",
    formErrPhoneReq: "संपर्क क्रमांक आवश्यक आहे",
    formErrPhoneVal: "कृपया वैध १०-अंकी फोन नंबर प्रविष्ट करा",
    formErrEmailVal: "कृपया वैध ईमेल पत्ता प्रविष्ट करा",
    formErrAddress: "तुमचा पत्ता आवश्यक आहे",
    formErrPurpose: "भेटीचा उद्देश आवश्यक आहे",
    formErrDateReq: "कृपया भेटीची तारीख निवडा",
    formErrDatePast: "भेटीची तारीख भूतकाळातील नसावी",

    // Footer
    footerDesc: "नाशिकमधील सर्वोत्तम क्रिमसन आणि जे.के. शुगर द्राक्षांची लागवड। मातीचे पोषण आणि आधुनिक मशागत पद्धती यांमुळे उत्कृष्ट चव आणि ताजेपणा मिळतो।",
    footerFounders: "आमचे संस्थापक",
    footerSubText: "नाशिक कृषी उत्कृष्टता",
    footerQuickLinks: "जलद नेव्हिगेशन",
    footerContact: "संपर्क तपशील",
    footerMadeWith: "बनवले आहे",
    footerInIndia: "भारतात",
    footerAllRights: "सर्व हक्क राखीव.",

    // VisitRequestForm Messages
    formSuccessMsg: "तुमची फार्म भेटीची विनंती यशस्वीरित्या सादर केली गेली आहे! आम्ही लवकरच तुमच्याशी संपर्क साधू.",
    formErrorMsg: "बॅकएंड सर्व्हरशी कनेक्ट करण्यात अयशस्वी. कृपया सर्व्हर चालू असल्याची खात्री करा.",

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
