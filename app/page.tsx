"use client";

import { useState } from "react";

type Lang = "fa" | "en" | "pl" | "az" | "ka" | "kk" | "tk" | "mn" | "ru";

const TEXT: Record<
  Lang,
  {
    companyTag: string;
    companyTitle1: string;
    companyTitle2: string;
    companyDesc: string;
    servicesTitle: string;
    servicesList: string[];
    routesTitle: string;
    greyLionTag: string;
    greyLionTitle: string;
    greyLionDesc: string;
    contactTitle: string;
    contactText: string;
  }
> = {
  fa: {
    companyTag: "شرکت حمل‌ونقل بین‌المللی",
    companyTitle1: "SAEID4061 SP. Z O.O.",
    companyTitle2: "حمل‌ونقل جاده‌ای اروپا – خاورمیانه – آسیای مرکزی",
    companyDesc:
      "شرکت SAEID4061 SP. Z O.O. در لهستان مستقر است و روی کریدورهای اروپا ↔ خاورمیانه ↔ آسیای میانه تمرکز دارد. از برنامه‌ریزی مسیر، اسناد CMR / TIR، تشریفات SENT / EPD / EORI تا رهگیری و تحویل نهایی، تمام مراحل زیر یک مدیریت انجام می‌شود.",
    servicesTitle: "خدمات اصلی شرکت",
    servicesList: [
      "حمل‌ونقل بین‌المللی جاده‌ای (CMR / TIR)",
      "حمل کامل (FTL) و خُرد (LTL)",
      "آماده‌سازی و هماهنگی مدارک SENT, EPD, EORI, CMR",
      "خدمات ترانزیت، Cross-border و Door-to-Door",
      "مشاوره مسیر و هزینه برای مشتریان ثابت",
    ],
    routesTitle: "مسیرها و کریدورهای فعال",
    greyLionTag: "GREY LION – بخش تحقیقات و اختراعات",
    greyLionTitle: "Saeid Komasi – سیستم‌های مکانیکی و نیروگاه ۵۰۰ مگاواتی",
    greyLionDesc:
      "در بخش Grey Lion روی سیستم‌های مکانیکی با گشتاور بالا، زنجیره اهرمی، قرقره‌های مرکب و طرح نیروگاه مکانیکی ۵۰۰ مگاواتی کار می‌شود. هدف، افزایش راندمان، سادگی مکانیکی و امکان استفاده صنعتی در مقیاس بزرگ است.",
    contactTitle: "ارتباط و همکاری",
    contactText:
      "برای استعلام قیمت حمل، قراردادهای طولانی‌مدت، سرمایه‌گذاری روی پروژه‌های انرژی یا توسعه مشترک، لطفاً از طریق واتساپ یا ایمیل مستقیم تماس بگیرید.",
  },
  en: {
    companyTag: "International Road Transport Company",
    companyTitle1: "SAEID4061 SP. Z O.O.",
    companyTitle2: "European – Middle East – Central Asia Transport Corridors",
    companyDesc:
      "SAEID4061 SP. Z O.O. is a Poland-based international road transport operator focused on EU ↔ Middle East ↔ Central Asia corridors. We handle the full chain: route planning, CMR / TIR documents, SENT / EPD / EORI procedures, transit and final delivery under one management.",
    servicesTitle: "Core Services",
    servicesList: [
      "International road freight (CMR / TIR)",
      "Full truckload (FTL) and groupage / LTL",
      "Customs & border documentation: SENT, EPD, EORI, CMR",
      "Transit, cross-border and door-to-door solutions",
      "Route & cost advisory for regular customers",
    ],
    routesTitle: "Main Corridors & Routes",
    greyLionTag: "GREY LION – R&D and Inventions",
    greyLionTitle: "Saeid Komasi – Mechanical Systems & 500MW Concept",
    greyLionDesc:
      "Grey Lion is the R&D side of the project: lever-chain mechanical multipliers, composite pulley systems and a 500MW mechanical powerplant concept. Focus on high-torque, low-speed mechanical energy transmission for industrial use.",
    contactTitle: "Business Contact & Cooperation",
    contactText:
      "For freight inquiries, long-term contracts, investment or technology cooperation, contact directly via WhatsApp or e-mail.",
  },
  pl: {
    companyTag: "Międzynarodowy transport drogowy",
    companyTitle1: "SAEID4061 SP. Z O.O.",
    companyTitle2: "Korytarze transportowe: Europa – Bliski Wschód – Azja Centralna",
    companyDesc:
      "SAEID4061 SP. Z O.O. to operator międzynarodowego transportu drogowego z siedzibą w Polsce. Obsługujemy korytarze UE ↔ Bliski Wschód ↔ Azja Centralna, zapewniając planowanie tras, dokumenty CMR / TIR, procedury SENT / EPD / EORI oraz pełen nadzór nad dostawą.",
    servicesTitle: "Główne usługi",
    servicesList: [
      "Międzynarodowy transport drogowy towarów (CMR / TIR)",
      "Ładunki całopojazdowe (FTL) i częściowe (LTL)",
      "Koordynacja dokumentów SENT, EPD, EORI, CMR",
      "Rozwiązania tranzytowe i door-to-door",
      "Doradztwo trasowe i kosztowe dla stałych klientów",
    ],
    routesTitle: "Korytarze i trasy",
    greyLionTag: "GREY LION – dział badawczo-rozwojowy",
    greyLionTitle: "Saeid Komasi – systemy mechaniczne i koncepcja 500 MW",
    greyLionDesc:
      "Grey Lion to część R&D: systemy dźwigniowo-łańcuchowe, złożone układy linowo-bębnowe oraz koncepcja elektrowni mechanicznej 500 MW, nastawione na wysoki moment obrotowy przy niskich prędkościach.",
    contactTitle: "Kontakt biznesowy",
    contactText:
      "W sprawie zleceń transportowych, długoterminowej współpracy lub inwestycji prosimy o bezpośredni kontakt przez WhatsApp lub e-mail.",
  },
  az: {
    companyTag: "Beynəlxalq avtomobil yükdaşıma şirkəti",
    companyTitle1: "SAEID4061 SP. Z O.O.",
    companyTitle2: "Avropa – Yaxın Şərq – Mərkəzi Asiya korridoarları",
    companyDesc:
      "SAEID4061 SP. Z O.O. Polşada yerləşən beynəlxalq yükdaşıma operatorudur. Şirkət Avropa ↔ Yaxın Şərq ↔ Mərkəzi Asiya korridoarlarında FTL və LTL daşımalar, CMR / TIR sənədləri və SENT / EPD / EORI prosedurlarını idarə edir.",
    servicesTitle: "Əsas xidmətlər",
    servicesList: [
      "CMR / TIR beynəlxalq avtomobil daşımaları",
      "FTL və LTL yüklərin daşınması",
      "SENT, EPD, EORI, CMR sənədlərinin hazırlanması və koordinasiyası",
      "Tranzit və door-to-door logistika həlləri",
      "Marşrut və xərclər üzrə məsləhət",
    ],
    routesTitle: "Aktiv marşrutlar",
    greyLionTag: "GREY LION – tədqiqat və ixtiralar",
    greyLionTitle: "Saeid Komasi – mexaniki sistemlər və 500MW konsepsiyası",
    greyLionDesc:
      "Grey Lion bölməsi yüksək momentli mexaniki sistemlər, Lever-Chain güc çoxaldıcıları və 500MW mexaniki elektrik stansiyası konsepsiyası üzərində işləyir.",
    contactTitle: "Əlaqə və əməkdaşlıq",
    contactText:
      "Daşınma sorğuları, uzunmüddətli müqavilələr və ya investisiya üçün birbaşa WhatsApp və e-poçt vasitəsilə əlaqə saxlayın.",
  },
  ka: {
    companyTag: "საერთაშორისო სატრანსპორტო კომპანია",
    companyTitle1: "SAEID4061 SP. Z O.O.",
    companyTitle2: "ევროპა – ახლო აღმოსავლეთი – ცენტრალური აზია",
    companyDesc:
      "SAEID4061 SP. Z O.O. პოლონეთში დაფუძნებული საერთაშორისო სატრანსპორტო ოპერატორია, რომელიც ემსახურება ევროპა ↔ ახლო აღმოსავლეთი ↔ ცენტრალური აზია მიმართულებებს. ვუზრუნველყოფთ მარშრუტის დაგეგმვას, CMR / TIR დოკუმენტებს, SENT / EPD / EORI პროცედურებსა და მიწოდების სრულ კონტროლს.",
    servicesTitle: "ძირითადი სერვისები",
    servicesList: [
      "საერთაშორისო გადაზიდვები (CMR / TIR)",
      "სრული (FTL) და ჯგუფური (LTL) გადაზიდვები",
      "SENT, EPD, EORI, CMR დოკუმენტების კოორდინაცია",
      "ტრანზიტი და door-to-door გადაწყვეტილებები",
      "მარშრუტებისა და ხარჯების კონსულტაცია",
    ],
    routesTitle: "მოქმედი მარშრუტები",
    greyLionTag: "GREY LION – კვლევა და ინოვაციები",
    greyLionTitle: "Saeid Komasi – მექანიკური სისტემები და 500MW კონცეფცია",
    greyLionDesc:
      "Grey Lion არის R&D ნაწილი, რომელიც მუშაობს ბერკეტიან-ჯაჭვურ სისტემებზე, კომპოზიტურ ბოჭკოვან მექანიზმებზე და 500 მეგავატიანი მექანიკური ელექტროსადგურის კონცეფციაზე.",
    contactTitle: "კონტაქტი და თანამშრომლობა",
    contactText:
      "ტრანსპორტის შეკვეთებისთვის, გრძელვადიანი კონტრაქტებისა და ინვესტიციებისთვის გამოიყენეთ WhatsApp ან ელ-ფოსტა.",
  },
  kk: {
    companyTag: "Халықаралық автокөлік тасымалы",
    companyTitle1: "SAEID4061 SP. Z O.O.",
    companyTitle2: "Еуропа – Таяу Шығыс – Орталық Азия бағыттары",
    companyDesc:
      "SAEID4061 SP. Z O.O. – Польшада орналасқан халықаралық тасымал операторы. Компания ЕО ↔ Таяу Шығыс ↔ Орталық Азия бағыттарында CMR / TIR, SENT / EPD / EORI құжаттарын және толық жеткізу тізбегін басқарады.",
    servicesTitle: "Негізгі қызметтер",
    servicesList: [
      "Халықаралық жол тасымалы (CMR / TIR)",
      "FTL және LTL жүктері",
      "SENT, EPD, EORI, CMR құжаттарын үйлестіру",
      "Транзит және door-to-door логистика",
      "Маршрут пен шығындар бойынша кеңес",
    ],
    routesTitle: "Маршруттар және дәліздер",
    greyLionTag: "GREY LION – ҒЗТКЖ және өнертабыстар",
    greyLionTitle: "Saeid Komasi – механикалық жүйелер және 500MW концепциясы",
    greyLionDesc:
      "Grey Lion жоғары моментті механикалық жүйелерді, Lever-Chain күшейткіштерін және 500MW механикалық электр станциясының концепциясын зерттейді.",
    contactTitle: "Байланыс және әріптестік",
    contactText:
      "Тасымалға сұраныстар, ұзақ мерзімді келісімшарттар немесе инвестициялық әріптестік үшін WhatsApp немесе e-mail арқылы байланысыңыз.",
  },
  tk: {
    companyTag: "Halkara ýük daşyma kompaniýasy",
    companyTitle1: "SAEID4061 SP. Z O.O.",
    companyTitle2: "Ýewropa – Ýakyn Gündogar – Merkezi Aziýa ugurlary",
    companyDesc:
      "SAEID4061 SP. Z O.O. Polşada ýerleşýän halkara awtoulag ýük daşyma operatorydyr. Kompaniýa ÝB ↔ Ýakyn Gündogar ↔ Merkezi Aziýa aralygynda CMR / TIR, SENT / EPD / EORI resminamalaryny we doly logistika zynjyryny dolandyrýar.",
    servicesTitle: "Esasy hyzmatlar",
    servicesList: [
      "Halkara ýol arkaly ýük daşama (CMR / TIR)",
      "FTL we LTL ýükler",
      "SENT, EPD, EORI, CMR resminamalaryny utgaşdyrmak",
      "Tranzit we door-to-door hyzmatlar",
      "Ugrlar we çykdajylar boýunça maslahat",
    ],
    routesTitle: "Ugurlar we korridorlar",
    greyLionTag: "GREY LION – R&D we oýlap tapyşlar",
    greyLionTitle: "Saeid Komasi – mehaniki ulgamlary we 500MW konsepsiýasy",
    greyLionDesc:
      "Grey Lion ýokary torkly mehaniki sistemleri, Lever-Chain güýji köpeldiji ulgamlary we 500MW mehaniki elektrik stansiýasynyň konsepsiýasy bilen meşgullanýar.",
    contactTitle: "Habarlaşmak we hyzmatdaşlyk",
    contactText:
      "Daşama, uzak möhletli şertnamalar we maýa goýum boýunça soraglar üçin göni WhatsApp ýa-da e-mail arkaly habarlaşyň.",
  },
  mn: {
    companyTag: "Олон улсын авто тээврийн компани",
    companyTitle1: "SAEID4061 SP. Z O.O.",
    companyTitle2: "Европ – Ойрхи Дорнод – Төв Азийн чиглэл",
    companyDesc:
      "SAEID4061 SP. Z O.O. нь Польш улсад байрладаг олон улсын авто тээврийн оператор бөгөөд Европ ↔ Ойрхи Дорнод ↔ Төв Азийн коридороор ачаа тээвэрлэдэг. CMR / TIR, SENT / EPD / EORI бичиг баримт болон хүргэлтийн бүх үе шатыг удирддаг.",
    servicesTitle: "Үндсэн үйлчилгээ",
    servicesList: [
      "Олон улсын авто тээвэр (CMR / TIR)",
      "FTL болон LTL ачаа",
      "SENT, EPD, EORI, CMR бичиг баримтын зохицуулалт",
      "Транзит болон door-to-door логистик",
      "Чиглэл, өртгийн зөвлөгөө",
    ],
    routesTitle: "Идэвхтэй чиглэлүүд",
    greyLionTag: "GREY LION – Судалгаа ба шинэ бүтээл",
    greyLionTitle: "Saeid Komasi – Механик систем ба 500MW концепц",
    greyLionDesc:
      "Grey Lion нь өндөр моменттай механик систем, Lever-Chain өсгөгч механизм, 500MW механик цахилгаан станцын концепцыг хөгжүүлэхэд чиглэгдсэн.",
    contactTitle: "Холбогдох ба хамтын ажиллагаа",
    contactText:
      "Тээврийн захиалга, урт хугацааны гэрээ эсвэл хөрөнгө оруулалтын хамтын ажиллагааны талаар WhatsApp эсвэл e-mail-ээр шууд холбогдоно уу.",
  },
  ru: {
    companyTag: "Международная автотранспортная компания",
    companyTitle1: "SAEID4061 SP. Z O.O.",
    companyTitle2: "Европа – Ближний Восток – Центральная Азия",
    companyDesc:
      "SAEID4061 SP. Z O.O. — оператор международных автоперевозок, базирующийся в Польше. Компания работает на коридорах Европа ↔ Ближний Восток ↔ Центральная Азия, обеспечивая планирование маршрутов, документы CMR / TIR, процедуры SENT / EPD / EORI и полный контроль поставки.",
    servicesTitle: "Основные услуги",
    servicesList: [
      "Международные автоперевозки (CMR / TIR)",
      "Полные (FTL) и сборные (LTL) грузы",
      "Координация документов SENT, EPD, EORI, CMR",
      "Транзитные и door-to-door решения",
      "Консультации по маршрутам и стоимости для постоянных клиентов",
    ],
    routesTitle: "Действующие маршруты",
    greyLionTag: "GREY LION – R&D и изобретения",
    greyLionTitle: "Saeid Komasi – механические системы и концепция 500 МВт",
    greyLionDesc:
      "Grey Lion — это исследовательское направление, включающее механические системы с высоким крутящим моментом, рычажно-цепные усилители и концепцию механической электростанции мощностью 500 МВт.",
    contactTitle: "Контакты и сотрудничество",
    contactText:
      "По вопросам перевозок, долгосрочных контрактов и инвестиций обращайтесь напрямую через WhatsApp или e-mail.",
  },
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("fa");
  const t = TEXT[lang];

  return (
    <div className="space-y-8">
      {/* زبان */}
      <div className="flex justify-between items-center">
        <div className="text-xs text-gray-400">{t.companyTag}</div>
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value as Lang)}
          className="bg-gray-900 border border-gray-600 text-xs px-2 py-1 rounded-md"
        >
          <option value="fa">فارسی</option>
          <option value="en">English</option>
          <option value="pl">Polski</option>
          <option value="az">AZE</option>
          <option value="ka">GEO</option>
          <option value="kk">KZ</option>
          <option value="tk">TM</option>
          <option value="mn">MN</option>
          <option value="ru">Русский</option>
        </select>
      </div>

      {/* عنوان شرکت */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold">{t.companyTitle1}</h1>
        <h2 className="text-sky-300 text-lg mt-1">{t.companyTitle2}</h2>
      </div>

      {/* توضیح شرکت */}
      <p className="text-sm text-gray-200 leading-6 max-w-3xl">{t.companyDesc}</p>

      {/* خدمات + مسیرها */}
      <div className="grid gap-5 md:grid-cols-2">
        <div className="border border-sky-800 bg-sky-950/30 p-4 rounded-xl">
          <h3 className="text-sky-300 text-sm mb-2">{t.servicesTitle}</h3>
          <ul className="text-xs text-gray-100 space-y-1">
            {t.servicesList.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </div>

        <div className="border border-sky-800 bg-slate-950/50 p-4 rounded-xl">
          <h3 className="text-sky-300 text-sm mb-2">{t.routesTitle}</h3>
          <ul className="text-xs text-gray-100 space-y-1">
            <li>• Poland / EU 🇵🇱🇪🇺</li>
            <li>• Türkiye 🇹🇷 ↔ Iran 🇮🇷</li>
            <li>• Azerbaijan 🇦🇿 · Georgia 🇬🇪</li>
            <li>• Kazakhstan 🇰🇿 · Turkmenistan 🇹🇲</li>
            <li>• Mongolia 🇲🇳 (long-haul corridor)</li>
          </ul>
        </div>
      </div>

      {/* Grey Lion */}
      <div className="border border-amber-500 bg-amber-900/20 p-4 rounded-xl">
        <h3 className="text-amber-300 text-sm">{t.greyLionTag}</h3>
        <p className="text-base font-semibold mt-1">{t.greyLionTitle}</p>
        <p className="text-xs text-gray-100 mt-2 leading-5">{t.greyLionDesc}</p>
      </div>

      {/* تماس */}
      <div className="border border-emerald-600 bg-emerald-900/20 p-4 rounded-xl text-xs text-gray-100">
        <p className="font-semibold mb-1">{t.contactTitle}</p>
        <p className="mb-2">{t.contactText}</p>
        <p>
          WhatsApp:{" "}
          <a
            href="https://wa.me/48881004737"
            className="text-emerald-300 underline underline-offset-2"
          >
            +48 881 004 737
          </a>{" "}
          · E-mail:{" "}
          <a
            href="mailto:saeedkomasy@gmail.com"
            className="text-emerald-300 underline underline-offset-2"
          >
            saeedkomasy@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
