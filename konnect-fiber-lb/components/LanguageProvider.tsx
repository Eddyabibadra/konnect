import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'ar';

interface TranslationSchema {
  nav: {
    tech: string;
    support: string;
    coverage: string;
    register: string;
  };
  hero: {
    badge: string;
    slogan: string;
    sloganAccent: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  features: {
    engineeringTitle: string;
    engineeringDesc: string;
    fiberDesc: string;
    securityTitle: string;
    securityDesc: string;
    supportTitle: string;
    supportDesc: string;
  };
  rating: {
    title: string;
    ux: string;
    reliability: string;
    latency: string;
    uxDetail: string;
    relDetail: string;
    latDetail: string;
  };
  engagement: {
    title: string;
    desc: string;
    placeholder: string;
    cta: string;
    checking: string;
    activeNode: string;
    expansion: string;
  };
  footer: {
    motto: string;
    desc: string;
    network: string;
    company: string;
    presence: string;
    residential: string;
    business: string;
    coverage: string;
    tech: string;
    privacy: string;
    hq: string;
    excellence: string;
    regional: string;
  };
  residential: {
    title: string;
    desc: string;
    plans: {
      starter: string;
      pro: string;
      elite: string;
      speed300: string;
      speed600: string;
      speed1000: string;
      select: string;
    };
    features: {
      hardware: string;
      noCaps: string;
      nights: string;
      core: string;
    };
  };
  business: {
    title: string;
    desc: string;
    quoteTitle: string;
    quoteDesc: string;
    companyName: string;
    email: string;
    cta: string;
  };
  security: {
    badge: string;
    title: string;
    desc: string;
    wpa3: string;
    wpa3Desc: string;
    edge: string;
    edgeDesc: string;
  };
  privacy: {
    title: string;
    dataTitle: string;
    dataDesc: string;
    transTitle: string;
    transDesc: string;
  };
  support: {
    title: string;
    desc: string;
    wait: string;
    emailTitle: string;
    emailDesc: string;
    status: string;
    priority: string;
    directHub: string;
    directDesc: string;
  };
}

const translations: Record<Language, TranslationSchema> = {
  en: {
    nav: { tech: 'Technology', support: 'Support', coverage: 'Coverage', register: 'Register' },
    hero: {
      badge: '1Gbps Hub',
      slogan: 'Konnectivity',
      sloganAccent: 'Perfected.',
      description: 'Konnect Fiber lb: Engineered for high-stakes performance. Gigabit speeds for those who refuse to wait. Experience Unlimited Nights.',
      ctaPrimary: 'Register',
      ctaSecondary: 'Explore Tech'
    },
    features: {
      engineeringTitle: 'Precision Engineering.',
      engineeringDesc: 'Every millisecond counts. We\'ve optimized the stack from the ocean floor to your living room.',
      fiberDesc: 'The fastest lanes on the digital highway. Speeds up to 1Gbps with Unlimited Nights included.',
      securityTitle: 'Secure Space',
      securityDesc: 'Encryption that moves at the speed of thought. Privacy by design.',
      supportTitle: 'Concierge Support',
      supportDesc: 'Premium service, 24/7 local experts ready to optimize your home network.'
    },
    rating: {
      title: 'The Gold Standard.',
      ux: 'User Experience',
      reliability: 'Reliability Core',
      latency: 'Local Latency',
      uxDetail: 'Highest in regional survey',
      relDetail: 'Zero-fault infrastructure',
      latDetail: 'Optical bypass routing'
    },
    engagement: {
      title: 'Is your neighborhood Konnected?',
      desc: 'We\'re expanding our fiber grid daily. Enter your address to view exclusive local speeds. Currently focusing on the Chekka region.',
      placeholder: 'Enter street address or city...',
      cta: 'Check Coverage',
      checking: 'Analyzing...',
      activeNode: 'Active node detected in Chekka.',
      expansion: 'Expansion protocol active for this region.'
    },
    footer: {
      motto: 'High-Speed WiFi',
      desc: 'Revolutionizing the architecture of connectivity across the North Governorate and beyond. Engineering excellence since 2026.',
      network: 'Network',
      company: 'Company',
      presence: 'Presence',
      residential: 'Residential',
      business: 'Business',
      coverage: 'The Grid Map',
      tech: 'Technology',
      privacy: 'Privacy Policy',
      hq: 'Chekka HQ',
      excellence: 'Excellence in Motion.',
      regional: 'Regional Hub: Lebanon'
    },
    residential: {
      title: 'Elite Home Networking.',
      desc: 'Bring the world\'s most advanced fiber network into your living space. Speeds up to 1Gbps that power your lifestyle with Unlimited Nights.',
      plans: {
        starter: 'Starter',
        pro: 'Pro',
        elite: 'Elite',
        speed300: 'Up to 300 Mbps',
        speed600: 'Up to 600 Mbps',
        speed1000: 'Up to 1 Gbps',
        select: 'Select Node'
      },
      features: {
        hardware: 'Free V.4 Hardware',
        noCaps: 'No Data Caps',
        nights: 'Unlimited Nights',
        core: 'Performance Core'
      }
    },
    business: {
      title: 'Enterprise Velocity.',
      desc: 'Dedicated fiber circuits, custom SLAs, and multi-cloud connectivity. Power your infrastructure with the Konnect Backbone.',
      quoteTitle: 'Request a Quote',
      quoteDesc: 'Our enterprise team will design a solution tailored to your bandwidth requirements.',
      companyName: 'Company Name',
      email: 'Business Email',
      cta: 'Connect with Sales'
    },
    security: {
      badge: 'Fortified Network',
      title: 'Secure Space.',
      desc: 'In an era of digital vulnerability, we provide a sovereign network environment. Encryption that moves at the speed of thought.',
      wpa3: 'WPA3-Elite',
      wpa3Desc: 'Next-gen wireless encryption standard enabled by default.',
      edge: 'Edge Guard',
      edgeDesc: 'Hardware-level firewall filtering malicious traffic at the port.'
    },
    privacy: {
      title: 'Privacy & Legal.',
      dataTitle: '01. Data Integrity',
      dataDesc: 'We believe your browsing history is yours alone. Konnect does not sell, trade, or monetize your traffic data.',
      transTitle: '02. Network Transparency',
      transDesc: 'Our network management practices are designed to ensure fair access for all elite members without discriminatory throttling.'
    },
    support: {
      title: 'Concierge Support.',
      desc: 'No automated menus. No outsourced scripts. Just local experts who understand elite connectivity.',
      wait: 'Average wait time: 15 seconds.',
      emailTitle: 'Customer Concierge',
      emailDesc: 'Reach out to support for prioritized assistance.',
      status: 'Operational Status',
      priority: '24/7 Priority Support for Elite Nodes',
      directHub: 'Direct Hub.',
      directDesc: 'Reach out to our elite support team in Chekka for immediate assistance.'
    }
  },
  ar: {
    nav: { tech: 'التكنولوجيا', support: 'دعم العملاء', coverage: 'التغطية', register: 'التسجيل' },
    hero: {
      badge: 'مركز 1 جيجابت',
      slogan: 'الاتصال',
      sloganAccent: 'بأبهى صوره.',
      description: 'Konnect Fiber lb: هندسة مخصصة للأداء العالي. سرعات جيجابت لمن لا يقبل الانتظار. استمتع بميزة الليالي غير المحدودة.',
      ctaPrimary: 'تسجيل',
      ctaSecondary: 'اكتشف التقنية'
    },
    features: {
      engineeringTitle: 'هندسة دقيقة.',
      engineeringDesc: 'كل جزء من الثانية يهمنا. قمنا بتحسين النظام بالكامل من تحت البحر وصولاً إلى منزلك.',
      fiberDesc: 'أسرع المسارات على الطريق الرقمي السريع. سرعات تصل إلى 1 جيجابت مع ميزة الليالي غير المحدودة.',
      securityTitle: 'مساحة آمنة',
      securityDesc: 'تشفير يتحرك بسرعة التفكير. الخصوصية هي جوهر تصميمنا.',
      supportTitle: 'دعم العملاء',
      supportDesc: 'خدمة متميزة، خبراء محليون على مدار الساعة مستعدون لتحسين شبكتك المنزلية.'
    },
    rating: {
      title: 'المعيار الذهبي.',
      ux: 'تجربة المستخدم',
      reliability: 'نواة الموثوقية',
      latency: 'الاستجابة المحلية',
      uxDetail: 'الأعلى في المسح الإقليمي',
      relDetail: 'بنية تحتية خالية من الأعطال',
      latDetail: 'توجيه ضوئي مباشر'
    },
    engagement: {
      title: 'هل منطقتك متصلة؟',
      desc: 'نحن نوسع شبكتنا يومياً. أدخل عنوانك لعرض السرعات الحصرية. نركز حالياً على منطقة شكا.',
      placeholder: 'أدخل اسم الشارع أو المدينة...',
      cta: 'تحقق من التغطية',
      checking: 'جاري التحليل...',
      activeNode: 'تم اكتشاف نقطة نشطة في شكا.',
      expansion: 'بروتوكول التوسع نشط لهذه المنطقة.'
    },
    footer: {
      motto: 'واي فاي عالي السرعة',
      desc: 'إحداث ثورة في بنية الاتصال في محافظة الشمال وما بعدها. التميز الهندسي منذ عام 2026.',
      network: 'الشبكة',
      company: 'الشركة',
      presence: 'التواجد',
      residential: 'سكني',
      business: 'أعمال',
      coverage: 'خريطة الشبكة',
      tech: 'التكنولوجيا',
      privacy: 'سياسة الخصوصية',
      hq: 'مقر شكا الرئيسي',
      excellence: 'التميز في الحركة.',
      regional: 'المركز الإقليمي: لبنان'
    },
    residential: {
      title: 'شبكة منزلية متميزة.',
      desc: 'انقل شبكة الألياف الأكثر تقدماً في العالم إلى منزلك. سرعات تصل إلى 1 جيجابت تدعم نمط حياتك مع الليالي غير المحدودة.',
      plans: {
        starter: 'البداية',
        pro: 'احترافي',
        elite: 'النخبة',
        speed300: 'تصل إلى 300 ميجابت',
        speed600: 'تصل إلى 600 ميجابت',
        speed1000: 'تصل إلى 1 جيجابت',
        select: 'اختر النقطة'
      },
      features: {
        hardware: 'أجهزة V.4 مجانية',
        noCaps: 'بدون سعة محددة',
        nights: 'ليالي غير محدودة',
        core: 'نواة الأداء'
      }
    },
    business: {
      title: 'سرعة الشركات.',
      desc: 'دوائر ألياف مخصصة، واتفاقيات مستوى خدمة، واتصال سحابي متعدد. عزز بنيتك التحتية مع Konnect Fiber lb.',
      quoteTitle: 'اطلب عرض سعر',
      quoteDesc: 'سيقوم فريق الشركات لدينا بتصميم حل مصمم خصيصاً لمتطلبات عرض النطاق الترددي الخاص بك.',
      companyName: 'اسم الشركة',
      email: 'البريد الإلكتروني للعمل',
      cta: 'تواصل مع المبيعات'
    },
    security: {
      badge: 'شبكة محصنة',
      title: 'مساحة آمنة.',
      desc: 'في عصر الضعف الرقمي، نوفر بيئة شبكة سيادية. تشفير يتحرك بسرعة التفكير.',
      wpa3: 'WPA3 النخبة',
      wpa3Desc: 'معيار تشفير لاسلكي من الجيل التالي مفعل افتراضياً.',
      edge: 'حارس الحافة',
      edgeDesc: 'جدار حماية على مستوى الأجهزة يقوم بتصفية حركة المرور الضارة.'
    },
    privacy: {
      title: 'الخصوصية والقانون.',
      dataTitle: '01. سلامة البيانات',
      dataDesc: 'نؤمن أن سجل التصفح الخاص بك ملكك وحدك. لا تبيع شركتنا بياناتك أو تتاجر بها.',
      transTitle: '02. شفافية الشبكة',
      transDesc: 'تم تصميم ممارسات إدارة الشبكة لدينا لضمان الوصول العادل لجميع الأعضاء المتميزين.'
    },
    support: {
      title: 'دعم العملاء.',
      desc: 'لا توجد قوائم آلية. لا توجد نصوص استجابة خارجية. فقط خبراء محليون يفهمون الاتصال المتميز.',
      wait: 'متوسط وقت الانتظار: 15 ثانية.',
      emailTitle: 'خدمة العملاء',
      emailDesc: 'تواصل مع الدعم للحصول على مساعدة ذات أولوية.',
      status: 'حالة التشغيل',
      priority: 'دعم عملاء ذو أولوية على مدار الساعة لنقاط النخبة',
      directHub: 'المركز المباشر.',
      directDesc: 'تواصل مع فريق دعم العملاء المتميز لدينا في شكا للحصول على مساعدة فورية.'
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationSchema;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    return (localStorage.getItem('language') as Language) || 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const isRTL = language === 'ar';

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isRTL]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language], isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useTranslation must be used within a LanguageProvider");
  return context;
};