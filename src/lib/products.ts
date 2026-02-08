import type { Language } from './translations';
import bavariaTigra from '@/assets/images/prod-bavaria-tigra.jpg';
import bavariaTornado from '@/assets/images/prod-bavaria-tornado.jpg';
import bavariaPhoenix from '@/assets/images/prod-bavaria-phoenix.jpg';
import bavariaColt from '@/assets/images/prod-bavaria-colt.jpg';
import bavariaKitchenGuard from '@/assets/images/prod-bavaria-kitchenguard.jpg';
import bavariaCabinet from '@/assets/images/prod-bavaria-cabinet.png';
import apolloSoteria from '@/assets/images/prod-apollo-soteria.webp';
import apolloDiscovery from '@/assets/images/prod-apollo-discovery.jpg';
import apolloCallPoint from '@/assets/images/prod-apollo-callpoint.jpg';
import apolloSounder from '@/assets/images/prod-apollo-sounder.png';
import sriHose from '@/assets/images/prod-sri-hose.jpg';
import sriExt from '@/assets/images/prod-sri-ext.webp';
import sriHydrant from '@/assets/images/prod-sri-hydrant.jpg';
import sriValve from '@/assets/images/prod-sri-valve.webp';
import sriSprinkler from '@/assets/images/prod-sri-sprinkler.jpg';

export type ProductBrand = 'Bavaria' | 'Apollo' | 'SRI';
export type ProductCategory = 'Extinguishers' | 'Alarms' | 'Systems' | 'Hoses' | 'Valves' | 'Sprinklers';

export interface ProductSpec {
  key: string;
  value: string;
}

export interface Product {
  id: string;
  image: string;
  brand: ProductBrand;
  category: ProductCategory;
  title: {
    en: string;
    ar: string;
  };
  desc: {
    en: string;
    ar: string;
  };
  specs: {
    en: ProductSpec[];
    ar: ProductSpec[];
  };
}

export const products: Product[] = [
  // Bavaria Products
  {
    id: "bav-tigra",
    image: bavariaTigra,
    brand: "Bavaria",
    category: "Extinguishers",
    title: {
      en: "Bavaria Tigra Portable Powder",
      ar: "طفايات بافاريا تيجرا المحمولة",
    },
    desc: {
      en: "High-performance ABC powder extinguisher ideal for vehicles and homes. Compact, reliable, and easy to operate with one hand.",
      ar: "طفاية بودرة ABC عالية الأداء مثالية للمركبات والمنازل. مدمجة، موثوقة، وسهلة الاستخدام بيد واحدة.",
    },
    specs: {
      en: [
        { key: "Capacity", value: "1kg, 2kg, 6kg" },
        { key: "Fire Rating", value: "A, B, C" },
        { key: "Temp Range", value: "-30°C to +60°C" },
        { key: "Operation", value: "Stored Pressure" }
      ],
      ar: [
        { key: "السعة", value: "١ كجم، ٢ كجم، ٦ كجم" },
        { key: "تصنيف الحريق", value: "A, B, C" },
        { key: "درجة الحرارة", value: "-٣٠ إلى +٦٠ مئوية" },
        { key: "التشغيل", value: "ضغط مخزون" }
      ]
    }
  },
  {
    id: "bav-phoenix",
    image: bavariaPhoenix,
    brand: "Bavaria",
    category: "Extinguishers",
    title: {
      en: "Bavaria Phoenix ABC Powder",
      ar: "طفاية بافاريا فينيكس بودرة",
    },
    desc: {
      en: "Versatile dry chemical powder extinguisher with high fire rating. Suitable for industrial, commercial, and residential use.",
      ar: "طفاية بودرة كيميائية جافة متعددة الأغراض بتصنيف حريق عالي. مناسبة للاستخدام الصناعي والتجاري والسكني.",
    },
    specs: {
      en: [
        { key: "Capacity", value: "4kg, 6kg, 9kg, 12kg" },
        { key: "Fire Rating", value: "A, B, C, E" },
        { key: "Valve", value: "Chrome Plated Brass" },
        { key: "Certification", value: "ES 734" }
      ],
      ar: [
        { key: "السعة", value: "٤، ٦، ٩، ١٢ كجم" },
        { key: "تصنيف الحريق", value: "A, B, C, E" },
        { key: "الصمام", value: "نحاس مطلي بالكروم" },
        { key: "الاعتماد", value: "مواصفات قياسية مصرية ٧٣٤" }
      ]
    }
  },
  {
    id: "bav-colt",
    image: bavariaColt,
    brand: "Bavaria",
    category: "Extinguishers",
    title: {
      en: "Bavaria Colt Foam",
      ar: "طفاية بافاريا كولت رغوة",
    },
    desc: {
      en: "Cartridge-operated foam extinguisher for Class A and B fires. Internal cartridge design ensures reliability and easy maintenance.",
      ar: "طفاية رغوة تعمل بخرطوشة داخلية لحرائق الفئات A و B. يضمن التصميم موثوقية عالية وسهولة في الصيانة.",
    },
    specs: {
      en: [
        { key: "Capacity", value: "6L, 9L" },
        { key: "Fire Rating", value: "A, B" },
        { key: "Propellant", value: "CO2 Cartridge" },
        { key: "Shell", value: "Internal Coating" }
      ],
      ar: [
        { key: "السعة", value: "٦ لتر، ٩ لتر" },
        { key: "تصنيف الحريق", value: "A, B" },
        { key: "مادة الدفع", value: "خرطوشة CO2" },
        { key: "الجسم", value: "طلاء داخلي مقاوم" }
      ]
    }
  },
  {
    id: "bav-kitchen",
    image: bavariaKitchenGuard,
    brand: "Bavaria",
    category: "Extinguishers",
    title: {
      en: "Bavaria Kitchen Guard",
      ar: "طفاية بافاريا كيتشن جارد",
    },
    desc: {
      en: "Specialized wet chemical extinguisher for Class F (cooking oil) fires. Essential for commercial kitchens and restaurants.",
      ar: "طفاية كيميائية رطبة متخصصة لحرائق الزيوت (الفئة F). ضرورية للمطابخ التجارية والمطاعم.",
    },
    specs: {
      en: [
        { key: "Capacity", value: "3L, 6L, 9L" },
        { key: "Fire Rating", value: "A, F" },
        { key: "Agent", value: "Wet Chemical" },
        { key: "Application", value: "Kitchens/Fat Fryers" }
      ],
      ar: [
        { key: "السعة", value: "٣، ٦، ٩ لتر" },
        { key: "تصنيف الحريق", value: "A, F" },
        { key: "الوسيط", value: "كيماوي رطب" },
        { key: "التطبيق", value: "المطابخ وقلايات الزيت" }
      ]
    }
  },
  {
    id: "bav-tornado",
    image: bavariaTornado,
    brand: "Bavaria",
    category: "Extinguishers",
    title: {
      en: "Bavaria Tornado CO2 Wheeled",
      ar: "طفاية بافاريا تورنيدو ثاني أكسيد الكربون",
    },
    desc: {
      en: "Heavy-duty wheeled CO2 unit designed for industrial electrical fires and sensitive equipment protection. Mobile and rapid deployment.",
      ar: "وحدة ثاني أكسيد الكربون بعجلات للخدمة الشاقة مصممة للحرائق الكهربائية الصناعية وحماية المعدات الحساسة.",
    },
    specs: {
      en: [
        { key: "Capacity", value: "10kg, 20kg, 30kg" },
        { key: "Fire Rating", value: "B, C, Electrical" },
        { key: "Cylinder", value: "Seamless Steel" },
        { key: "Discharge", value: "High Pressure Hose" }
      ],
      ar: [
        { key: "السعة", value: "١٠ كجم، ٢٠ كجم، ٣٠ كجم" },
        { key: "تصنيف الحريق", value: "B، C، كهرباء" },
        { key: "الأسطوانة", value: "صلب بدون لحام" },
        { key: "التفريغ", value: "خرطوم ضغط عالي" }
      ]
    }
  },
  {
    id: "bav-cabinet",
    image: bavariaCabinet,
    brand: "Bavaria",
    category: "Systems",
    title: {
      en: "Bavaria Fire Hose Cabinet",
      ar: "كابينة خرطوم حريق بافاريا",
    },
    desc: {
      en: "Complete wall-mounted fire cabinet solution with hose reel, nozzle, and valve. Available in surface or recessed mounting options.",
      ar: "حل متكامل لكابينة الحريق المثبتة على الحائط مع بكرة خرطوم، قاذف، ومحبس. متوفرة بخيارات تركيب سطحي أو غاطس.",
    },
    specs: {
      en: [
        { key: "Material", value: "Mild Steel / Stainless" },
        { key: "Door", value: "Glass / Solid" },
        { key: "Finish", value: "Red Epoxy Powder" },
        { key: "Standard", value: "EN 671-1" }
      ],
      ar: [
        { key: "المادة", value: "صلب / ستانلس ستيل" },
        { key: "الباب", value: "زجاجي / مصمت" },
        { key: "الطلاء", value: "إيبوكسي أحمر" },
        { key: "المعيار", value: "EN 671-1" }
      ]
    }
  },

  // Apollo Products
  {
    id: "apo-soteria",
    image: apolloSoteria,
    brand: "Apollo",
    category: "Alarms",
    title: {
      en: "Soteria Optical Smoke Detector",
      ar: "كاشف الدخان البصري سوتيريا",
    },
    desc: {
      en: "Next-generation optical sensing with PureLight® technology to drastically reduce false alarms while increasing sensitivity.",
      ar: "الجيل الجديد من الاستشعار البصري بتقنية PureLight® للحد بشكل كبير من الإنذارات الكاذبة مع زيادة الحساسية.",
    },
    specs: {
      en: [
        { key: "Technology", value: "PureLight® Optical" },
        { key: "Protocol", value: "CoreProtocol" },
        { key: "Model", value: "SA5100-600APO" },
        { key: "Certification", value: "UL, LPCB" }
      ],
      ar: [
        { key: "التقنية", value: "بصري PureLight®" },
        { key: "البروتوكول", value: "CoreProtocol" },
        { key: "الموديل", value: "SA5100-600APO" },
        { key: "الشهادات", value: "UL, LPCB" }
      ]
    }
  },
  {
    id: "apo-discovery",
    image: apolloDiscovery,
    brand: "Apollo",
    category: "Alarms",
    title: {
      en: "Discovery Optical Smoke Detector",
      ar: "كاشف الدخان البصري ديسكفري",
    },
    desc: {
      en: "High-specification analogue addressable fire detector with five operating modes for diverse environments.",
      ar: "كاشف حريق تناظري معنون عالي المواصفات مع خمسة أوضاع تشغيل لبيئات متنوعة.",
    },
    specs: {
      en: [
        { key: "Operating Voltage", value: "17-28V DC" },
        { key: "Quiescent Current", value: "300µA" },
        { key: "Remote Output", value: "Digital" },
        { key: "Humidity", value: "0% to 95% RH" }
      ],
      ar: [
        { key: "جهد التشغيل", value: "١٧-٢٨ فولت تيار مستمر" },
        { key: "تيار السكون", value: "٣٠٠ ميكرو أمبير" },
        { key: "المخرج عن بعد", value: "رقمي" },
        { key: "الرطوبة", value: "٠٪ إلى ٩٥٪" }
      ]
    }
  },
  {
    id: "apo-callpoint",
    image: apolloCallPoint,
    brand: "Apollo",
    category: "Alarms",
    title: {
      en: "XP95 Manual Call Point",
      ar: "نقطة استدعاء يدوية XP95",
    },
    desc: {
      en: "Addressable manual call point designed for easy operation and fast response in emergency situations.",
      ar: "نقطة استدعاء يدوية معنونة مصممة لسهولة التشغيل والاستجابة السريعة في حالات الطوارئ.",
    },
    specs: {
      en: [
        { key: "Type", value: "Indoor / Outdoor" },
        { key: "Protocol", value: "XP95 / Discovery" },
        { key: "Rating", value: "IP44 / IP67" },
        { key: "Indicator", value: "Red Alarm LED" }
      ],
      ar: [
        { key: "النوع", value: "داخلي / خارجي" },
        { key: "البروتوكول", value: "XP95 / Discovery" },
        { key: "التصنيف", value: "IP44 / IP67" },
        { key: "المؤشر", value: "LED أحمر للإنذار" }
      ]
    }
  },
  {
    id: "apo-sounder",
    image: apolloSounder,
    brand: "Apollo",
    category: "Alarms",
    title: {
      en: "Intelligent Open Area Sounder",
      ar: "سارينة ذكية للمناطق المفتوحة",
    },
    desc: {
      en: "Loop-powered sounder with synchronized tones and adjustable volume for effective building evacuation.",
      ar: "سارينة تعمل بالطاقة من الحلقة مع نغمات متزامنة وحجم قابل للتعديل لإخلاء المبنى بفعالية.",
    },
    specs: {
      en: [
        { key: "Output", value: "100dB(A)" },
        { key: "Tones", value: "7 Selectable" },
        { key: "Loop Loading", value: "Low Current" },
        { key: "Compliance", value: "EN54-3" }
      ],
      ar: [
        { key: "الخرج", value: "١٠٠ ديسيبل" },
        { key: "النغمات", value: "٧ قابلة للاختيار" },
        { key: "تحميل الحلقة", value: "تيار منخفض" },
        { key: "الامتثال", value: "EN54-3" }
      ]
    }
  },

  // SRI Products
  {
    id: "sri-hose",
    image: sriHose,
    brand: "SRI",
    category: "Hoses",
    title: {
      en: "SRI Fire Hose Reel",
      ar: "بكرة خرطوم حريق SRI",
    },
    desc: {
      en: "EN671-1 approved swing-arm hose reel with 25mm diameter hose. Corrosion-resistant and easy to deploy in emergencies.",
      ar: "بكرة خرطوم بذراع متأرجح معتمدة EN671-1 بخرطوم قطر ٢٥ مم. مقاومة للتآكل وسهلة الاستخدام في حالات الطوارئ.",
    },
    specs: {
      en: [
        { key: "Hose Diameter", value: "25mm (1 inch)" },
        { key: "Length", value: "30 Meters" },
        { key: "Working Pressure", value: "12 Bar" },
        { key: "Material", value: "Mild Steel Drum" }
      ],
      ar: [
        { key: "قطر الخرطوم", value: "٢٥ مم (١ بوصة)" },
        { key: "الطول", value: "٣٠ متر" },
        { key: "ضغط التشغيل", value: "١٢ بار" },
        { key: "المادة", value: "أسطوانة حديد" }
      ]
    }
  },
  {
    id: "sri-ext",
    image: sriExt,
    brand: "SRI",
    category: "Extinguishers",
    title: {
      en: "SRI ABC Powder Extinguisher",
      ar: "طفاية بودرة SRI ABC",
    },
    desc: {
      en: "Versatile dry chemical extinguisher for multiple fire classes. Features high-quality valve assembly and polyester powder coating.",
      ar: "طفاية بودرة كيميائية جافة متعددة الأغراض لفئات الحريق المختلفة. تتميز بصمام عالي الجودة وطلاء بوليستر.",
    },
    specs: {
      en: [
        { key: "Capacity", value: "2kg" },
        { key: "Fire Rating", value: "13A 55B C" },
        { key: "Propellant", value: "Nitrogen" },
        { key: "Standards", value: "MS 1539 Part 1" }
      ],
      ar: [
        { key: "السعة", value: "٢ كجم" },
        { key: "تصنيف الحريق", value: "13A 55B C" },
        { key: "مادة الدفع", value: "نيتروجين" },
        { key: "المعايير", value: "MS 1539 الجزء 1" }
      ]
    }
  },
  {
    id: "sri-hydrant",
    image: sriHydrant,
    brand: "SRI",
    category: "Systems",
    title: {
      en: "SRI 2-Way Pillar Hydrant",
      ar: "عسكرة حريق عمودية ثنائية المخرج SRI",
    },
    desc: {
      en: "Robust cast iron pillar hydrant with two 2.5-inch outlets. Designed for high-pressure municipal and industrial water supply.",
      ar: "عسكرة حريق عمودية من الحديد الزهر المتين بمخرجين ٢.٥ بوصة. مصممة لإمدادات المياه البلدية والصناعية عالية الضغط.",
    },
    specs: {
      en: [
        { key: "Inlet", value: "4 inch Flange" },
        { key: "Outlets", value: "2 x 2.5 inch BS336" },
        { key: "Test Pressure", value: "20 Bar" },
        { key: "Material", value: "Cast Iron" }
      ],
      ar: [
        { key: "المدخل", value: "فلانشة ٤ بوصة" },
        { key: "المخارج", value: "٢ * ٢.٥ بوصة BS336" },
        { key: "ضغط الاختبار", value: "٢٠ بار" },
        { key: "المادة", value: "حديد زهر" }
      ]
    }
  },
  {
    id: "sri-valve",
    image: sriValve,
    brand: "SRI",
    category: "Valves",
    title: {
      en: "SRI Landing Valve",
      ar: "محبس بسطة SRI",
    },
    desc: {
      en: "Oblique type landing valve for wet riser systems. Ensures reliable water control for firefighting teams on building floors.",
      ar: "محبس بسطة من النوع المائل لأنظمة الصواعد الرطبة. يضمن تحكماً موثوقاً في المياه لفرق الإطفاء في طوابق المبنى.",
    },
    specs: {
      en: [
        { key: "Size", value: "65mm (2.5 inch)" },
        { key: "Inlet", value: "Flanged / Threaded" },
        { key: "Outlet", value: "Female Instantaneous" },
        { key: "Standard", value: "BS 5041 Part 1" }
      ],
      ar: [
        { key: "المقاس", value: "٦٥ مم (٢.٥ بوصة)" },
        { key: "المدخل", value: "فلانشة / مقلوظ" },
        { key: "المخرج", value: "أنثى سريع الربط" },
        { key: "المعيار", value: "BS 5041 الجزء 1" }
      ]
    }
  },
  {
    id: "sri-sprinkler",
    image: sriSprinkler,
    brand: "SRI",
    category: "Sprinklers",
    title: {
      en: "SRI Sprinkler Head",
      ar: "رشاش حريق SRI",
    },
    desc: {
      en: "Standard response upright sprinkler head with glass bulb thermal element. Provides wide coverage for automatic fire suppression.",
      ar: "رشاش حريق قائم قياسي الاستجابة مع عنصر حراري بصيلة زجاجية. يوفر تغطية واسعة للإخماد التلقائي للحريق.",
    },
    specs: {
      en: [
        { key: "Type", value: "Pendent / Upright" },
        { key: "K-Factor", value: "5.6 (80)" },
        { key: "Temp Rating", value: "68°C (Red Bulb)" },
        { key: "Finish", value: "Brass / Chrome" }
      ],
      ar: [
        { key: "النوع", value: "متدلي / قائم" },
        { key: "عامل K", value: "٥.٦ (٨٠)" },
        { key: "التصنيف الحراري", value: "٦٨ مئوية (بصيلة حمراء)" },
        { key: "التشطيب", value: "نحاس / كروم" }
      ]
    }
  }
];
