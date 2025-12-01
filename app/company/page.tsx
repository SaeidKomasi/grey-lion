"use client";

import Image from "next/image";
import { useState } from "react";

type Lang =
  | "fa"
  | "en"
  | "pl"
  | "az"
  | "ka"
  | "kz"
  | "tm"
  | "mn"
  | "ru"
  | "it"
  | "bg"
  | "ro"
  | "es"
  | "nl";

type T = {
  companyName: string;
  tagline: string;
  paragraph: string;
  servicesTitle: string;
  services: string[];
  contactTitle: string;
  contactLines: string[];
};

const langLabels: Record<Lang, string> = {
  fa: "فارسی",
  en: "English",
  pl: "Polski",
  az: "AZ",
  ka: "KA",
  kz: "KZ",
  tm: "TM",
  mn: "MN",
  ru: "RU",
  it: "Italiano",
  bg: "Български",
  ro: "Română",
  es: "Español",
  nl: "Nederlands",
};

// ————————— ترجمه‌ها —————————
const translations: Record<Lang, T> = {
  fa: {
    companyName: "SAEID4061 SP. Z O.O.",
    tagline: "حمل‌ونقل اروپا – خاورمیانه – آسیای میانه – آسیای مرکزی",
    paragraph:
      "شرکت SAEID4061 SP. Z O.O. یک شرکت حمل‌ونقل بین‌المللی در لهستان است که روی کریدورهای اروپا ↔ خاورمیانه ↔ آسیای میانه و آسیای مرکزی فعالیت می‌کند. تمام مراحل حمل از مسیر، اسناد مرزی، SENT، CMR، TIR، EPD تا تحویل نهایی زیر یک مدیریت انجام می‌شود.",
    servicesTitle: "خدمات اصلی",
    services: [
      "International Freight CMR / TIR",
      "SENT / EPD / EORI Docs",
      "EU–ME–Central Asia Corridor",
      "Transit Route Consulting",
    ],
    contactTitle: "تماس و ارتباط",
    contactLines: [
      "WhatsApp: +48 881 004 737",
      "Telegram: @Saeid4061",
      "Email: info@saeid4061.com",
    ],
  },
  en: {
    companyName: "SAEID4061 SP. Z O.O.",
    tagline: "Transport Europe – Middle East – Central & Middle Asia",
    paragraph:
      "SAEID4061 SP. Z O.O. is an international road freight company based in Poland, focused on Europe ↔ Middle East ↔ Central Asia corridors. We handle the full chain from route planning and border documents to final delivery under one management: SENT, CMR, TIR, EPD and customs formalities.",
    servicesTitle: "Main Services",
    services: [
      "International Road Freight CMR / TIR",
      "SENT / EPD / EORI Documentation",
      "EU–Middle East–Central Asia Corridor",
      "Transit Route & Customs Consulting",
    ],
    contactTitle: "Contact & Communication",
    contactLines: [
      "WhatsApp: +48 881 004 737",
      "Telegram: @Saeid4061",
      "Email: info@saeid4061.com",
    ],
  },
  pl: {
    companyName: "SAEID4061 SP. Z O.O.",
    tagline: "Transport Europa – Bliski Wschód – Azja Centralna",
    paragraph:
      "SAEID4061 SP. Z O.O. to firma transportu międzynarodowego z siedzibą w Polsce. Specjalizujemy się w korytarzach Europa ↔ Bliski Wschód ↔ Azja Centralna. Prowadzimy cały proces od planowania trasy, dokumentów granicznych SENT, CMR, TIR, EPD aż do końcowego dostarczenia towaru.",
    servicesTitle: "Główne usługi",
    services: [
      "Międzynarodowy transport drogowy CMR / TIR",
      "Dokumentacja SENT / EPD / EORI",
      "Korytarz UE – Bliski Wschód – Azja Centralna",
      "Doradztwo tranzytowe i celne",
    ],
    contactTitle: "Kontakt",
    contactLines: [
      "WhatsApp: +48 881 004 737",
      "Telegram: @Saeid4061",
      "Email: info@saeid4061.com",
    ],
  },
  az: {
    companyName: "SAEID4061 SP. Z O.O.",
    tagline: "Avropa – Yaxın Şərq – Mərkəzi Asiya daşımaları",
    paragraph:
      "Polşada yerləşən SAEID4061 SP. Z O.O. şirkəti Avropa ↔ Yaxın Şərq ↔ Mərkəzi Asiya marşrutlarında beynəlxalq yükdaşıma xidmətləri göstərir. Marşrut seçimi, sərhəd sənədləri, SENT, CMR, TIR, EPD və son təhvilə qədər bütün mərhələlər tək idarəetmə altında aparılır.",
    servicesTitle: "Əsas xidmətlər",
    services: [
      "Beynəlxalq yol daşımaları CMR / TIR",
      "SENT / EPD / EORI sənədləri",
      "AB–Yaxın Şərq–Mərkəzi Asiya koridoru",
      "Tranzit marşrut məsləhəti",
    ],
    contactTitle: "Əlaqə",
    contactLines: [
      "WhatsApp: +48 881 004 737",
      "Telegram: @Saeid4061",
      "Email: info@saeid4061.com",
    ],
  },
  ka: {
    companyName: "SAEID4061 SP. Z O.O.",
    tagline: "ტრანსპორტი ევროპიდან ახლო აღმოსავლეთსა და ცენტრალურ აზიაში",
    paragraph:
      "კომპანია SAEID4061 SP. Z O.O. არის საერთაშორისო სატრანსპორტო კომპანია პოლონეთში. ვმუშაობთ ევროპა ↔ ახლო აღმოსავლეთი ↔ ცენტრალური აზიის კორიდორებზე და ვმართავთ მთელ ჯაჭვს – SENT, CMR, TIR, EPD და სასაზღვრო დოკუმენტაციით დაწყებული საბოლოო მიწოდებამდე.",
    servicesTitle: "მთავარი სერვისები",
    services: [
      "საერთაშორისო ავტომობილური გადაზიდვები CMR / TIR",
      "SENT / EPD / EORI დოკუმენტაცია",
      "EU–Middle East–Central Asia Corridor",
      "ტრანზიტული მარშრუტების კონსულტაცია",
    ],
    contactTitle: "კონტაქტი",
    contactLines: [
      "WhatsApp: +48 881 004 737",
      "Telegram: @Saeid4061",
      "Email: info@saeid4061.com",
    ],
  },
  kz: {
    companyName: "SAEID4061 SP. Z O.O.",
    tagline: "Еуропа – Таяу Шығыс – Орталық Азия тасымалдары",
    paragraph:
      "SAEID4061 SP. Z O.O. – Польшада орналасқан халықаралық автокөлік компаниясы. Біз Еуропа ↔ Таяу Шығыс ↔ Орталық Азия дәліздерінде жұмыс істейміз және SENT, CMR, TIR, EPD құжаттарынан бастап соңғы жеткізуге дейінгі барлық кезеңдерді бір басқару арқылы жүргіземіз.",
    servicesTitle: "Негізгі қызметтер",
    services: [
      "Халықаралық автотасымалдар CMR / TIR",
      "SENT / EPD / EORI құжаттары",
      "ЕО–Таяу Шығыс–Орталық Азия дәлізі",
      "Транзиттік маршруттар бойынша кеңес",
    ],
    contactTitle: "Байланыс",
    contactLines: [
      "WhatsApp: +48 881 004 737",
      "Telegram: @Saeid4061",
      "Email: info@saeid4061.com",
    ],
  },
  tm: {
    companyName: "SAEID4061 SP. Z O.O.",
    tagline: "Ýewropa – Ýakyn Gündogar – Merkezi Aziýa gatnawlary",
    paragraph:
      "SAEID4061 SP. Z O.O. Polşada ýerleşýän halkara awtoulag kompaniýasydyr. Biz Ýewropa ↔ Ýakyn Gündogar ↔ Merkezi Aziýa koridorlarynda işleýäris we SENT, CMR, TIR, EPD resminamalaryndan başlap, ahyrky gowşuryşa çenli ähli tapgyry bir dolandyryş astynda alyp barýarys.",
    servicesTitle: "Esasy hyzmatlar",
    services: [
      "Halkara ýol daşamalary CMR / TIR",
      "SENT / EPD / EORI resminamalary",
      "AB–Ýakyn Gündogar–Merkezi Aziýa koridory",
      "Tranzit ugurlary boýunça maslahat",
    ],
    contactTitle: "Habarlaşmak",
    contactLines: [
      "WhatsApp: +48 881 004 737",
      "Telegram: @Saeid4061",
      "Email: info@saeid4061.com",
    ],
  },
  mn: {
    companyName: "SAEID4061 SP. Z O.O.",
    tagline: "Европ – Ойрх Дорнод – Төв Азийн тээвэр",
    paragraph:
      "SAEID4061 SP. Z O.O. нь Польшид байрлах олон улсын авто тээврийн компани юм. Бид Европ ↔ Ойрх Дорнод ↔ Төв Азийн коридорууд дээр ажиллаж, SENT, CMR, TIR, EPD баримтуудаас эхлээд эцсийн хүргэлт хүртэл бүх шат дамжлагыг нэг удирдлагын доор зохион байгуулдаг.",
    servicesTitle: "Үндсэн үйлчилгээ",
    services: [
      "Олон улсын авто тээвэр CMR / TIR",
      "SENT / EPD / EORI баримт бичиг",
      "ЕХ–Ойрх Дорнод–Төв Азийн коридор",
      "Транзит чиглэлийн зөвлөгөө",
    ],
    contactTitle: "Холбоо барих",
    contactLines: [
      "WhatsApp: +48 881 004 737",
      "Telegram: @Saeid4061",
      "Email: info@saeid4061.com",
    ],
  },
  ru: {
    companyName: "SAEID4061 SP. Z O.O.",
    tagline: "Перевозки Европа – Ближний Восток – Центральная Азия",
    paragraph:
      "SAEID4061 SP. Z O.O. — международная транспортная компания из Польши. Мы работаем на коридорах Европа ↔ Ближний Восток ↔ Центральная Азия и ведём весь процесс под одним управлением: выбор маршрута, документы SENT, CMR, TIR, EPD и таможенное оформление до окончательной доставки.",
    servicesTitle: "Основные услуги",
    services: [
      "Международные автоперевозки CMR / TIR",
      "Документация SENT / EPD / EORI",
      "Коридор ЕС – Ближний Восток – Центральная Азия",
      "Консультации по транзитным маршрутам",
    ],
    contactTitle: "Контакты",
    contactLines: [
      "WhatsApp: +48 881 004 737",
      "Telegram: @Saeid4061",
      "Email: info@saeid4061.com",
    ],
  },
  it: {
    companyName: "SAEID4061 SP. Z O.O.",
    tagline: "Trasporto Europa – Medio Oriente – Asia Centrale",
    paragraph:
      "SAEID4061 SP. Z O.O. è un’azienda di trasporto internazionale con sede in Polonia. Operiamo sui corridoi Europa ↔ Medio Oriente ↔ Asia Centrale, gestendo l’intera catena sotto un’unica direzione: pianificazione del percorso, documenti SENT, CMR, TIR, EPD e consegna finale.",
    servicesTitle: "Servizi principali",
    services: [
      "Trasporto stradale internazionale CMR / TIR",
      "Documentazione SENT / EPD / EORI",
      "Corridoio UE–Medio Oriente–Asia Centrale",
      "Consulenza per rotte di transito",
    ],
    contactTitle: "Contatti",
    contactLines: [
      "WhatsApp: +48 881 004 737",
      "Telegram: @Saeid4061",
      "Email: info@saeid4061.com",
    ],
  },
  bg: {
    companyName: "SAEID4061 SP. Z O.O.",
    tagline: "Транспорт Европа – Близък изток – Централна Азия",
    paragraph:
      "SAEID4061 SP. Z O.O. е международна транспортна компания, базирана в Полша. Работим по коридорите Европа ↔ Близък изток ↔ Централна Азия и управляваме целия процес – от планиране на маршрута и документи SENT, CMR, TIR, EPD до окончателната доставка.",
    servicesTitle: "Основни услуги",
    services: [
      "Международен автомобилен транспорт CMR / TIR",
      "Документация SENT / EPD / EORI",
      "Коридор ЕС – Близък изток – Централна Азия",
      "Консултации за транзитни маршрути",
    ],
    contactTitle: "Контакт",
    contactLines: [
      "WhatsApp: +48 881 004 737",
      "Telegram: @Saeid4061",
      "Email: info@saeid4061.com",
    ],
  },
  ro: {
    companyName: "SAEID4061 SP. Z O.O.",
    tagline: "Transport Europa – Orientul Mijlociu – Asia Centrală",
    paragraph:
      "SAEID4061 SP. Z O.O. este o companie de transport internațional din Polonia. Operăm pe coridoarele Europa ↔ Orientul Mijlociu ↔ Asia Centrală și gestionăm întregul lanț sub o singură conducere: planificarea traseului, documente SENT, CMR, TIR, EPD și livrarea finală.",
    servicesTitle: "Servicii principale",
    services: [
      "Transport rutier internațional CMR / TIR",
      "Documentație SENT / EPD / EORI",
      "Coridor UE–Orientul Mijlociu–Asia Centrală",
      "Consultanță pentru rute de tranzit",
    ],
    contactTitle: "Contact",
    contactLines: [
      "WhatsApp: +48 881 004 737",
      "Telegram: @Saeid4061",
      "Email: info@saeid4061.com",
    ],
  },
  es: {
    companyName: "SAEID4061 SP. Z O.O.",
    tagline: "Transporte Europa – Oriente Medio – Asia Central",
    paragraph:
      "SAEID4061 SP. Z O.O. es una empresa de transporte internacional con sede en Polonia. Trabajamos en los corredores Europa ↔ Oriente Medio ↔ Asia Central y gestionamos toda la cadena bajo una sola dirección: planificación de rutas, documentos SENT, CMR, TIR, EPD y entrega final.",
    servicesTitle: "Servicios principales",
    services: [
      "Transporte internacional por carretera CMR / TIR",
      "Documentación SENT / EPD / EORI",
      "Corredor UE–Oriente Medio–Asia Central",
      "Consultoría de rutas de tránsito",
    ],
    contactTitle: "Contacto",
    contactLines: [
      "WhatsApp: +48 881 004 737",
      "Telegram: @Saeid4061",
      "Email: info@saeid4061.com",
    ],
  },
  nl: {
    companyName: "SAEID4061 SP. Z O.O.",
    tagline: "Transport Europa – Midden-Oosten – Centraal-Azië",
    paragraph:
      "SAEID4061 SP. Z O.O. is een internationaal wegtransportbedrijf gevestigd in Polen. Wij zijn actief op de corridors Europa ↔ Midden-Oosten ↔ Centraal-Azië en beheren de volledige keten onder één regie: routeplanning, SENT-, CMR-, TIR-, EPD-documenten en uiteindelijke levering.",
    servicesTitle: "Belangrijkste diensten",
    services: [
      "Internationaal wegtransport CMR / TIR",
      "SENT / EPD / EORI documentatie",
      "EU–Midden-Oosten–Centraal-Azië corridor",
      "Advies voor transitroutes",
    ],
    contactTitle: "Contact",
    contactLines: [
      "WhatsApp: +48 881 004 737",
      "Telegram: @Saeid4061",
      "Email: info@saeid4061.com",
    ],
  },
};

export default function CompanyPage() {
  const [lang, setLang] = useState<Lang>("fa");
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HEADER */}
      <header className="border-b border-gray-800">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 overflow-hidden rounded-full bg-white">
              <Image
                src="/saeid4061-logo.jpg"
                alt="SAEID4061 Logo"
                width={40}
                height={40}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-[0.25em] text-sky-400">
                GREY LION
              </span>
              <span className="text-sm font-semibold text-sky-100">
                SAEID4061
              </span>
            </div>
          </div>

          {/* Language select */}
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value as Lang)}
            className="rounded-full border border-gray-700 bg-gray-900 px-4 py-2 text-sm text-white focus:outline-none"
          >
            {(Object.keys(langLabels) as Lang[]).map((code) => (
              <option key={code} value={code}>
                {langLabels[code]}
              </option>
            ))}
          </select>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          {t.companyName}
        </h1>

        <p className="mt-4 text-lg font-semibold text-sky-300">{t.tagline}</p>

        <p className="mt-6 text-base leading-relaxed text-gray-100">
          {t.paragraph}
        </p>

        {/* خدمات */}
        <section className="mt-10 rounded-2xl border border-sky-800 bg-gradient-to-b from-gray-900 to-black p-6">
          <h2 className="text-xl font-semibold text-sky-300">
            {t.servicesTitle}
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-sm text-gray-100">
            {t.services.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </section>

        {/* تماس */}
        <section className="mt-8 rounded-2xl border border-gray-700 bg-gray-900/60 p-6">
          <h2 className="text-lg font-semibold text-sky-200">
            {t.contactTitle}
          </h2>
          <ul className="mt-3 space-y-1 text-sm text-gray-100">
            {t.contactLines.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
