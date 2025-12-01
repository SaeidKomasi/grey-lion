"use client";

import Image from "next/image";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

// متن‌ها برای هر زبان
const translations: Record<
  string,
  {
    tagline: string;
    description: string;
    servicesTitle: string;
    services: string[];
    contactTitle: string;
    contactLines: string[];
  }
> = {
  fa: {
    tagline: "حمل‌ونقل اروپا – خاورمیانه – آسیای مرکزی",
    description:
      "شرکت SAEID4061 SP. Z O.O. یک شرکت حمل‌ونقل بین‌المللی در لهستان است که روی کریدورهای اروپا ↔ خاورمیانه ↔ آسیای میانه فعالیت می‌کند. تمام مراحل حمل از مبدا، اسناد مرزی، SENT، CMR، TIR، EPD تا تحویل نهایی زیر یک مدیریت انجام می‌شود.",
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
      "مبدا فعالیت: لهستان – Biała Podlaska",
    ],
  },

  en: {
    tagline: "Road freight Europe – Middle East – Central Asia",
    description:
      "SAEID4061 SP. Z O.O. is an international road transport company based in Poland, operating on key corridors between the European Union, the Middle East and Central Asia. We manage the full transport chain: customs documents, SENT, CMR, TIR, EPD and final delivery under one coordination.",
    servicesTitle: "Main Services",
    services: [
      "International Road Freight (CMR / TIR)",
      "SENT / EPD / EORI documentation",
      "EU–Middle East–Central Asia transport corridors",
      "Transit route planning & consulting",
    ],
    contactTitle: "Contact",
    contactLines: [
      "WhatsApp: +48 881 004 737",
      "Telegram: @Saeid4061",
      "Head office: Poland – Biała Podlaska",
    ],
  },

  pl: {
    tagline: "Transport drogowy Europa – Bliski Wschód – Azja Centralna",
    description:
      "SAEID4061 SP. Z O.O. to firma transportu międzynarodowego z siedzibą w Polsce, działająca na korytarzach UE ↔ Bliski Wschód ↔ Azja Centralna. Prowadzimy cały proces przewozu: dokumenty celne, SENT, CMR, TIR, EPD aż do końcowej dostawy pod jedną koordynacją.",
    servicesTitle: "Główne usługi",
    services: [
      "Międzynarodowy transport drogowy (CMR / TIR)",
      "Dokumentacja SENT / EPD / EORI",
      "Korytarze transportowe UE–Bliski Wschód–Azja Centralna",
      "Planowanie i doradztwo w tranzycie",
    ],
    contactTitle: "Kontakt",
    contactLines: [
      "WhatsApp: +48 881 004 737",
      "Telegram: @Saeid4061",
      "Siedziba: Polska – Biała Podlaska",
    ],
  },

  az: {
    tagline: "Avropa – Yaxın Şərq – Mərkəzi Asiya yükdaşıma",
    description:
      "SAEID4061 SP. Z O.O. Polşada yerləşən beynəlxalq avtomobil daşıma şirkətidir. Şirkət Avropa İttifaqı, Yaxın Şərq və Mərkəzi Asiya marşrutlarında fəaliyyət göstərir. Sənədlər, SENT, CMR, TIR, EPD və son təhvil tam olaraq bir idarəetmə altında icra olunur.",
    servicesTitle: "Əsas xidmətlər",
    services: [
      "Beynəlxalq avtomobil yükdaşıması (CMR / TIR)",
      "SENT / EPD / EORI sənədləri",
      "Aİ–Yaxın Şərq–Mərkəzi Asiya dəhlizləri",
      "Tranzit marşrut məsləhəti",
    ],
    contactTitle: "Əlaqə",
    contactLines: ["WhatsApp: +48 881 004 737", "Telegram: @Saeid4061"],
  },

  ka: {
    tagline: "საბარგო გადაზიდვა ევროპა – შუა აღმოსავლეთი – ცენტრალური აზია",
    description:
      "SAEID4061 SP. Z O.O. არის პოლონეთში დაფუძნებული საერთაშორისო საავტომობილო გადამზიდავი კომპანია, რომელიც მუშაობს ევროკავშირის, შუა აღმოსავლეთისა და ცენტრალური აზიის კორიდორებზე.",
    servicesTitle: "ძირითადი სერვისები",
    services: [
      "საერთაშორისო საავტომობილო გადაზიდვა (CMR / TIR)",
      "SENT / EPD / EORI დოკუმენტაცია",
      "EU–Middle East–Central Asia კორიდორები",
      "ტრანზიტის მარშრუტების დაგეგმვა",
    ],
    contactTitle: "კონტაქტი",
    contactLines: ["WhatsApp: +48 881 004 737", "Telegram: @Saeid4061"],
  },

  kz: {
    tagline: "Еуропа – Таяу Шығыс – Орталық Азия жүк тасымалы",
    description:
      "SAEID4061 SP. Z O.O. – Польшада орналасқан халықаралық автокөлік тасымалдау компаниясы. Компания ЕО, Таяу Шығыс және Орталық Азия бағыттарында жұмыс істейді.",
    servicesTitle: "Негізгі қызметтер",
    services: [
      "Халықаралық автокөлік тасымалы (CMR / TIR)",
      "SENT / EPD / EORI құжаттары",
      "ЕО–Таяу Шығыс–Орталық Азия дәліздері",
      "Транзиттік маршруттарды жоспарлау",
    ],
    contactTitle: "Байланыс",
    contactLines: ["WhatsApp: +48 881 004 737", "Telegram: @Saeid4061"],
  },

  tm: {
    tagline: "Ýewropa – Ýakyn Gündogar – Merkezi Aziýa ýük daşaýyşlygy",
    description:
      "SAEID4061 SP. Z O.O. Polşada ýerleşýän halkara awtoulag daşaýyş kompaniýasy bolup, ÝB, Ýakyn Gündogar we Merkezi Aziýa ugurlarynda işleýär.",
    servicesTitle: "Esasy hyzmatlar",
    services: [
      "Halkara awtoulag daşaýyşlygy (CMR / TIR)",
      "SENT / EPD / EORI resminamalary",
      "ÝB–Ýakyn Gündogar–Merkezi Aziýa ugurlary",
      "Tranzit ýol meýilnamasy we konsultasiýa",
    ],
    contactTitle: "Habarlaşmak",
    contactLines: ["WhatsApp: +48 881 004 737", "Telegram: @Saeid4061"],
  },

  mn: {
    tagline: "Европ – Ойрхи Дорнод – Төв Азийн ачаа тээвэр",
    description:
      "SAEID4061 SP. Z O.O. нь Польш улсад байрлах, Европын Холбоо – Ойрхи Дорнод – Төв Азийн коридороор ажилладаг олон улсын авто тээврийн компани юм.",
    servicesTitle: "Үндсэн үйлчилгээ",
    services: [
      "Олон улсын авто тээвэр (CMR / TIR)",
      "SENT / EPD / EORI баримт бичиг",
      "EU–Middle East–Central Asia коридор",
      "Транзит замын зөвлөх үйлчилгээ",
    ],
    contactTitle: "Холбоо барих",
    contactLines: ["WhatsApp: +48 881 004 737", "Telegram: @Saeid4061"],
  },

  ru: {
    tagline: "Грузоперевозки Европа – Ближний Восток – Центральная Азия",
    description:
      "SAEID4061 SP. Z O.O. — польская компания международных автомобильных перевозок. Мы работаем на коридорах ЕС ↔ Ближний Восток ↔ Центральная Азия и ведём весь процесс: документы, SENT, CMR, TIR, EPD и финальную доставку под одним управлением.",
    servicesTitle: "Основные услуги",
    services: [
      "Международные автоперевозки (CMR / TIR)",
      "Документация SENT / EPD / EORI",
      "Транспортные коридоры ЕС–Ближний Восток–Центральная Азия",
      "Консультации по транзитным маршрутам",
    ],
    contactTitle: "Контакты",
    contactLines: [
      "WhatsApp: +48 881 004 737",
      "Telegram: @Saeid4061",
      "Офис: Польша – Biała Podlaska",
    ],
  },

  it: {
    tagline: "Trasporto stradale Europa – Medio Oriente – Asia Centrale",
    description:
      "SAEID4061 SP. Z O.O. è una società di trasporto internazionale con sede in Polonia, attiva sui corridoi tra Unione Europea, Medio Oriente e Asia Centrale.",
    servicesTitle: "Servizi principali",
    services: [
      "Trasporto stradale internazionale (CMR / TIR)",
      "Documentazione SENT / EPD / EORI",
      "Corridoi EU–Medio Oriente–Asia Centrale",
      "Consulenza per rotte di transito",
    ],
    contactTitle: "Contatti",
    contactLines: ["WhatsApp: +48 881 004 737", "Telegram: @Saeid4061"],
  },

  es: {
    tagline: "Transporte por carretera Europa – Oriente Medio – Asia Central",
    description:
      "SAEID4061 SP. Z O.O. es una empresa de transporte internacional con sede en Polonia, operando en los corredores entre la Unión Europea, Oriente Medio y Asia Central.",
    servicesTitle: "Servicios principales",
    services: [
      "Transporte internacional por carretera (CMR / TIR)",
      "Documentación SENT / EPD / EORI",
      "Corredores UE–Oriente Medio–Asia Central",
      "Asesoría en rutas de tránsito",
    ],
    contactTitle: "Contacto",
    contactLines: ["WhatsApp: +48 881 004 737", "Telegram: @Saeid4061"],
  },

  nl: {
    tagline: "Wegtransport Europa – Midden-Oosten – Centraal-Azië",
    description:
      "SAEID4061 SP. Z O.O. is een internationaal wegtransportbedrijf uit Polen, actief op corridors tussen de EU, het Midden-Oosten en Centraal-Azië.",
    servicesTitle: "Hoofddiensten",
    services: [
      "Internationaal wegtransport (CMR / TIR)",
      "SENT / EPD / EORI documentatie",
      "EU–Midden-Oosten–Centraal-Azië corridors",
      "Advies voor transitroutes",
    ],
    contactTitle: "Contact",
    contactLines: ["WhatsApp: +48 881 004 737", "Telegram: @Saeid4061"],
  },

  bg: {
    tagline: "Транспорт Европа – Близък изток – Централна Азия",
    description:
      "SAEID4061 SP. Z O.O. е международна транспортна компания от Полша, активна по коридорите между ЕС, Близкия изток и Централна Азия.",
    servicesTitle: "Основни услуги",
    services: [
      "Международен автомобилен транспорт (CMR / TIR)",
      "Документи SENT / EPD / EORI",
      "Транспортни коридори ЕС–Близък изток–Централна Азия",
      "Консултации за транзитни маршрути",
    ],
    contactTitle: "Контакти",
    contactLines: ["WhatsApp: +48 881 004 737", "Telegram: @Saeid4061"],
  },

  ro: {
    tagline: "Transport rutier Europa – Orientul Mijlociu – Asia Centrală",
    description:
      "SAEID4061 SP. Z O.O. este o companie de transport internațional din Polonia, activă pe coridoarele dintre Uniunea Europeană, Orientul Mijlociu și Asia Centrală.",
    servicesTitle: "Servicii principale",
    services: [
      "Transport rutier internațional (CMR / TIR)",
      "Documente SENT / EPD / EORI",
      "Coridoare de transport UE–Orientul Mijlociu–Asia Centrală",
      "Consultanță pentru rute de tranzit",
    ],
    contactTitle: "Contact",
    contactLines: ["WhatsApp: +48 881 004 737", "Telegram: @Saeid4061"],
  },
};

export default function CompanyPage() {
  const [lang, setLang] = useState<keyof typeof translations>("fa");
  const t = translations[lang] ?? translations["fa"];

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#000",
        color: "#fff",
        padding: "20px",
        maxWidth: "900px",
        margin: "0 auto",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {/* هدر */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
          gap: "16px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Image
            src="/saeid4061-logo.jpg"
            alt="SAEID4061 Logo"
            width={56}
            height={56}
            style={{ borderRadius: "12px", objectFit: "cover" }}
          />
          <div>
            <div
              style={{
                fontSize: "18px",
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              SAEID4061 · GREY LION
            </div>
          </div>
        </div>

        <LanguageSwitcher lang={lang} onChange={(code) => setLang(code as any)} />
      </header>

      {/* عنوان شرکت */}
      <h1
        style={{
          fontSize: "34px",
          fontWeight: 800,
          marginBottom: "10px",
          lineHeight: 1.2,
        }}
      >
        SAEID4061 SP. Z O.O.
      </h1>

      {/* تگ‌لاین */}
      <p
        style={{
          color: "#3fc1ff",
          fontSize: "20px",
          marginBottom: "24px",
        }}
      >
        {t.tagline}
      </p>

      {/* توضیحات اصلی */}
      <p
        style={{
          fontSize: "17px",
          lineHeight: 1.7,
          marginBottom: "32px",
        }}
      >
        {t.description}
      </p>

      {/* خدمات */}
      <section
        style={{
          border: "1px solid #255e8a",
          borderRadius: "18px",
          padding: "20px 22px",
          marginBottom: "22px",
        }}
      >
        <h2
          style={{
            fontSize: "20px",
            marginBottom: "12px",
            color: "#5bc0ff",
          }}
        >
          {t.servicesTitle}
        </h2>
        <ul style={{ paddingLeft: "20px", margin: 0 }}>
          {t.services.map((s, i) => (
            <li key={i} style={{ marginBottom: "4px", fontSize: "16px" }}>
              {s}
            </li>
          ))}
        </ul>
      </section>

      {/* تماس */}
      <section
        style={{
          border: "1px solid #444",
          borderRadius: "18px",
          padding: "18px 20px",
          marginBottom: "40px",
        }}
      >
        <h2
          style={{
            fontSize: "20px",
            marginBottom: "10px",
            color: "#f2f2f2",
          }}
        >
          {t.contactTitle}
        </h2>
        {t.contactLines.map((line, i) => (
          <p key={i} style={{ margin: "4px 0", fontSize: "15px" }}>
            {line}
          </p>
        ))}
      </section>
    </main>
  );
}
