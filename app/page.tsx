"use client";

import { useState } from "react";
import Image from "next/image";

type LangCode =
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
  | "es"
  | "nl"
  | "bg"
  | "ro";

type Translation = {
  companyName: string;
  tagline: string;
  description: string;
  servicesTitle: string;
  services: string[];
  contactTitle: string;
  contactLines: string[];
};

const translations: Record<LangCode, Translation> = {
  fa: {
    companyName: "SAEID4061 SP. Z O.O.",
    tagline: "حمل‌ونقل اروپا – خاورمیانه – آسیای مرکزی",
    description:
      "شرکت SAEID4061 SP. Z O.O. یک شرکت حمل‌ونقل بین‌المللی در لهستان است که روی کریدورهای اروپا ↔ خاورمیانه ↔ آسیای میانه فعالیت می‌کند. تمام مراحل حمل از مبدأ تا تحویل نهایی، زیر یک مدیریت انجام می‌شود.",
    servicesTitle: "خدمات اصلی",
    services: [
      "International Freight CMR / TIR",
      "SENT / EPD / EORI Docs",
      "EU–ME–Central Asia Corridor",
      "Transit Route Consulting"
    ],
    contactTitle: "تماس و ارتباط",
    contactLines: [
      "WhatsApp: +48 881 004 737",
      "Telegram: @Saeid4061",
      "Email: روی درخواست ارائه می‌شود."
    ]
  },

  en: {
    companyName: "SAEID4061 SP. Z O.O.",
    tagline: "International Transport – Europe – Middle East – Central Asia",
    description:
      "SAEID4061 SP. Z O.O. is an international transport company based in Poland, focused on corridors between Europe, the Middle East and Central Asia. All transport stages from loading to final delivery are managed under one supervision.",
    servicesTitle: "Main Services",
    services: [
      "International Freight CMR / TIR",
      "SENT / EPD / EORI documentation",
      "EU–Middle East–Central Asia corridors",
      "Transit route consulting"
    ],
    contactTitle: "Contact & Communication",
    contactLines: [
      "WhatsApp: +48 881 004 737",
      "Telegram: @Saeid4061",
      "E-mail: available on request"
    ]
  },

  pl: {
    companyName: "SAEID4061 SP. Z O.O.",
    tagline: "Transport międzynarodowy – Europa – Bliski Wschód – Azja Centralna",
    description:
      "SAEID4061 SP. Z O.O. to firma transportu międzynarodowego z siedzibą w Polsce, obsługująca korytarze między Europą, Bliskim Wschodem i Azją Centralną. Wszystkie etapy transportu od załadunku do dostawy końcowej są prowadzone pod jednym zarządem.",
    servicesTitle: "Główne usługi",
    services: [
      "Międzynarodowy transport CMR / TIR",
      "Dokumenty SENT / EPD / EORI",
      "Korytarze UE–Bliski Wschód–Azja Centralna",
      "Doradztwo w zakresie tras tranzytowych"
    ],
    contactTitle: "Kontakt",
    contactLines: [
      "WhatsApp: +48 881 004 737",
      "Telegram: @Saeid4061",
      "E-mail: dostępny na życzenie"
    ]
  },

  az: {
    companyName: "SAEID4061 SP. Z O.O.",
    tagline: "Beynəlxalq yükdaşıma – Avropa – Yaxın Şərq – Mərkəzi Asiya",
    description:
      "Polşada yerləşən SAEID4061 SP. Z O.O. Avropa, Yaxın Şərq və Mərkəzi Asiya marşrutlarında beynəlxalq daşımalar həyata keçirir.",
    servicesTitle: "Əsas xidmətlər",
    services: [
      "Beynəlxalq yükdaşıma CMR / TIR",
      "SENT / EPD / EORI sənədləri",
      "Avropa–Yaxın Şərq–Mərkəzi Asiya dəhlizləri",
      "Tranzit marşrutu məsləhəti"
    ],
    contactTitle: "Əlaqə",
    contactLines: ["WhatsApp: +48 881 004 737", "Telegram: @Saeid4061"]
  },

  ka: {
    companyName: "SAEID4061 SP. Z O.O.",
    tagline: "საერთაშორისო გადაზიდვები – ევროპა – ახლო აღმოსავლეთი – შუა აზია",
    description:
      "კომპანია SAEID4061 SP. Z O.O. ახორციელებს საერთაშორისო გადაზიდვებს პოლონეთიდან ევროპისა და აზიის მთავარი კორიდორებით.",
    servicesTitle: "ძირითადი სერვისები",
    services: [
      "საერთაშორისო გადაზიდვები CMR / TIR",
      "SENT / EPD / EORI დოკუმენტები",
      "ევროპულ–ახლო აღმოსავლურ–ცენტრალური აზიის კორიდორები",
      "ტრანზიტული მარშრუტების კონსულტაცია"
    ],
    contactTitle: "კონტაქტი",
    contactLines: ["WhatsApp: +48 881 004 737", "Telegram: @Saeid4061"]
  },

  kz: {
    companyName: "SAEID4061 SP. Z O.O.",
    tagline: "Халықаралық тасымал – Еуропа – Таяу Шығыс – Орталық Азия",
    description:
      "SAEID4061 SP. Z O.O. компаниясы Польшада орналасқан және Еуропа мен Азия арасындағы бағыттарда жұмыс істейді.",
    servicesTitle: "Негізгі қызметтер",
    services: [
      "Халықаралық тасымал CMR / TIR",
      "SENT / EPD / EORI құжаттары",
      "ЕО–Таяу Шығыс–Орталық Азия дәліздері",
      "Транзиттік маршрут бойынша кеңес"
    ],
    contactTitle: "Байланыс",
    contactLines: ["WhatsApp: +48 881 004 737", "Telegram: @Saeid4061"]
  },

  tm: {
    companyName: "SAEID4061 SP. Z O.O.",
    tagline: "Halkara ýük daşaýan – Ýewropa – Ýakyn Gündogar – Merkezi Aziýa",
    description:
      "SAEID4061 SP. Z O.O. Polşadan Ýewropa we Aziýa ugurlary boýunça halkara daşamalary amala aşyrýar.",
    servicesTitle: "Esasy hyzmatlar",
    services: [
      "Halkara ýük daşaýan CMR / TIR",
      "SENT / EPD / EORI resminamalary",
      "ÝB–Ýakyn Gündogar–Merkezi Aziýa geçelgeleri",
      "Tranzit ýol boýunça maslahat"
    ],
    contactTitle: "Habarlaşmak üçin",
    contactLines: ["WhatsApp: +48 881 004 737", "Telegram: @Saeid4061"]
  },

  mn: {
    companyName: "SAEID4061 SP. Z O.O.",
    tagline: "Олон улсын ачаа тээвэр – Европ – Ойрхи Дорнод – Төв Ази",
    description:
      "SAEID4061 SP. Z O.O. нь Польшид байрладаг бөгөөд Европ ба Ази хоорондын гол коридороор ачаа тээвэрлэлт хийдэг.",
    servicesTitle: "Үндсэн үйлчилгээнүүд",
    services: [
      "Олон улсын CMR / TIR тээвэр",
      "SENT / EPD / EORI бичиг баримт",
      "ЕХ–Ойрхи Дорнод–Төв Азийн коридорууд",
      "Транзит замын зөвлөгөө"
    ],
    contactTitle: "Холбоо барих",
    contactLines: ["WhatsApp: +48 881 004 737", "Telegram: @Saeid4061"]
  },

  ru: {
    companyName: "SAEID4061 SP. Z O.O.",
    tagline: "Международные перевозки – Европа – Ближний Восток – Центральная Азия",
    description:
      "SAEID4061 SP. Z O.O. – польская транспортная компания, работающая на коридорах между Европой, Ближним Востоком и Центральной Азией.",
    servicesTitle: "Основные услуги",
    services: [
      "Международные перевозки CMR / TIR",
      "Документы SENT / EPD / EORI",
      "Коридоры ЕС–Ближний Восток–Центральная Азия",
      "Консалтинг по транзитным маршрутам"
    ],
    contactTitle: "Контакты",
    contactLines: ["WhatsApp: +48 881 004 737", "Telegram: @Saeid4061"]
  },

  it: {
    companyName: "SAEID4061 SP. Z O.O.",
    tagline: "Trasporto internazionale – Europa – Medio Oriente – Asia Centrale",
    description:
      "SAEID4061 SP. Z O.O. è una società di trasporto internazionale con sede in Polonia, attiva sui corridoi tra Europa, Medio Oriente e Asia Centrale.",
    servicesTitle: "Servizi principali",
    services: [
      "Trasporto internazionale CMR / TIR",
      "Documentazione SENT / EPD / EORI",
      "Corridoi UE–Medio Oriente–Asia Centrale",
      "Consulenza per rotte di transito"
    ],
    contactTitle: "Contatti",
    contactLines: ["WhatsApp: +48 881 004 737", "Telegram: @Saeid4061"]
  },

  es: {
    companyName: "SAEID4061 SP. Z O.O.",
    tagline: "Transporte internacional – Europa – Oriente Medio – Asia Central",
    description:
      "SAEID4061 SP. Z O.O. es una empresa de transporte internacional en Polonia, trabajando en los corredores entre Europa, Oriente Medio y Asia Central.",
    servicesTitle: "Servicios principales",
    services: [
      "Transporte internacional CMR / TIR",
      "Documentos SENT / EPD / EORI",
      "Corredores UE–Oriente Medio–Asia Central",
      "Consultoría de rutas de tránsito"
    ],
    contactTitle: "Contacto",
    contactLines: ["WhatsApp: +48 881 004 737", "Telegram: @Saeid4061"]
  },

  nl: {
    companyName: "SAEID4061 SP. Z O.O.",
    tagline: "Internationaal transport – Europa – Midden-Oosten – Centraal-Azië",
    description:
      "SAEID4061 SP. Z O.O. is een internationaal transportbedrijf in Polen, actief op de corridors tussen Europa, het Midden-Oosten en Centraal-Azië.",
    servicesTitle: "Hoofddiensten",
    services: [
      "Internationaal transport CMR / TIR",
      "SENT / EPD / EORI-documentatie",
      "EU–Midden-Oosten–Centraal-Azië-corridors",
      "Advies over transitotrajecten"
    ],
    contactTitle: "Contact",
    contactLines: ["WhatsApp: +48 881 004 737", "Telegram: @Saeid4061"]
  },

  bg: {
    companyName: "SAEID4061 SP. Z O.O.",
    tagline: "Международен транспорт – Европа – Близък Изток – Централна Азия",
    description:
      "SAEID4061 SP. Z O.O. е международна транспортна компания в Полша, работеща по коридорите между Европа, Близкия изток и Централна Азия.",
    servicesTitle: "Основни услуги",
    services: [
      "Международен транспорт CMR / TIR",
      "Документи SENT / EPD / EORI",
      "Коридори ЕС–Близък изток–Централна Азия",
      "Консултации за транзитни маршрути"
    ],
    contactTitle: "Контакти",
    contactLines: ["WhatsApp: +48 881 004 737", "Telegram: @Saeid4061"]
  },

  ro: {
    companyName: "SAEID4061 SP. Z O.O.",
    tagline: "Transport internațional – Europa – Orientul Mijlociu – Asia Centrală",
    description:
      "SAEID4061 SP. Z O.O. este o companie de transport internațional din Polonia, activă pe coridoarele dintre Europa, Orientul Mijlociu și Asia Centrală.",
    servicesTitle: "Servicii principale",
    services: [
      "Transport internațional CMR / TIR",
      "Documente SENT / EPD / EORI",
      "Coridoare UE–Orientul Mijlociu–Asia Centrală",
      "Consultanță pentru rute de tranzit"
    ],
    contactTitle: "Contact",
    contactLines: ["WhatsApp: +48 881 004 737", "Telegram: @Saeid4061"]
  }
};

export default function CompanyPage() {
  const [lang, setLang] = useState<LangCode>("fa");
  const t = translations[lang];

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#000",
        color: "#fff",
        fontFamily: "system-ui, sans-serif"
      }}
    >
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 20px",
          borderBottom: "1px solid #222"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Image
            src="/saeid4061-logo.jpg"
            alt="SAEID4061 Logo"
            width={56}
            height={56}
            style={{ borderRadius: "50%", objectFit: "cover" }}
          />
          <div>
            <div style={{ fontSize: 18, fontWeight: 700 }}>
              SAEID4061 · GREY LION
            </div>
          </div>
        </div>

        <select
          value={lang}
          onChange={(e) => setLang(e.target.value as LangCode)}
          style={{
            background: "#111",
            color: "#fff",
            padding: "8px 14px",
            borderRadius: 10,
            border: "1px solid #444",
            fontSize: 14
          }}
        >
          <option value="fa">فارسی</option>
          <option value="en">English</option>
          <option value="pl">Polski</option>
          <option value="az">AZ</option>
          <option value="ka">KA</option>
          <option value="kz">KZ</option>
          <option value="tm">TM</option>
          <option value="mn">MN</option>
          <option value="ru">RU</option>
          <option value="it">Italiano</option>
          <option value="es">Español</option>
          <option value="nl">Nederlands</option>
          <option value="bg">Български</option>
          <option value="ro">Română</option>
        </select>
      </header>

      <section style={{ padding: "32px 20px", maxWidth: 900, margin: "0 auto" }}>
        <h1
          style={{
            fontSize: 34,
            fontWeight: 800,
            marginBottom: 16,
            lineHeight: 1.15
          }}
        >
          {t.companyName}
        </h1>
        <h2
          style={{
            fontSize: 20,
            color: "#4fd1ff",
            marginBottom: 24
          }}
        >
          {t.tagline}
        </h2>

        <p style={{ fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
          {t.description}
        </p>

        <div
          style={{
            border: "1px solid #1f3244",
            borderRadius: 18,
            padding: 20,
            marginBottom: 24
          }}
        >
          <h3
            style={{
              fontSize: 18,
              marginBottom: 12,
              color: "#9fd3ff"
            }}
          >
            {t.servicesTitle}
          </h3>
          <ul style={{ paddingLeft: 20, fontSize: 15, lineHeight: 1.8 }}>
            {t.services.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </div>

        <div
          style={{
            border: "1px solid #1f3244",
            borderRadius: 18,
            padding: 20
          }}
        >
          <h3
            style={{
              fontSize: 18,
              marginBottom: 12,
              color: "#9fd3ff"
            }}
          >
            {t.contactTitle}
          </h3>
          <ul style={{ paddingLeft: 20, fontSize: 15, lineHeight: 1.8 }}>
            {t.contactLines.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
