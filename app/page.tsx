"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState("fa");

  const translations: Record<
    string,
    {
      title: string;
      subtitle: string;
      description: string;
      services: string;
      servicesList: string[];
      contact: string;
      contactLines: string[];
    }
  > = {
    fa: {
      title: "SAEID4061 SP. Z O.O.",
      subtitle: "حمل‌ونقل اروپا – خاورمیانه – آسیای مرکزی",
      description:
        "شرکت SAEID4061 SP. Z O.O. یک شرکت حمل‌ونقل بین‌المللی در لهستان است که روی کریدورهای اروپا ↔ خاورمیانه ↔ آسیای میانه فعالیت می‌کند. تمام مراحل حمل از مسیر، اسناد مرزی، SENT, CMR, TIR, EPD تا تحویل نهایی زیر یک مدیریت انجام می‌شود.",
      services: "خدمات اصلی",
      servicesList: [
        "International Freight CMR / TIR",
        "SENT / EPD / EORI Docs",
        "EU–ME–Central Asia Corridor",
        "Transit Route Consulting",
      ],
      contact: "راه‌های ارتباطی",
      contactLines: [
        "Saeid Komasi – Managing Director",
        "WhatsApp & Telegram: +48 881 004 737  |  @Saeid4061",
      ],
    },

    en: {
      title: "SAEID4061 SP. Z O.O.",
      subtitle: "EU – Middle East – Central Asia Transport",
      description:
        "SAEID4061 SP. Z O.O. is an international transport company registered in Poland operating across EU ↔ Middle East ↔ Central Asia corridors. Full logistics service including documentation, SENT, CMR, TIR, EPD until final delivery.",
      services: "Main Services",
      servicesList: [
        "International Freight CMR / TIR",
        "SENT / EPD / EORI Documentation",
        "EU–ME–Central Asia Corridor",
        "Transit Route Consulting",
      ],
      contact: "Contact",
      contactLines: [
        "Saeid Komasi – Managing Director",
        "WhatsApp & Telegram: +48 881 004 737  |  @Saeid4061",
      ],
    },

    pl: {
      title: "SAEID4061 SP. Z O.O.",
      subtitle: "Transport UE – Bliski Wschód – Azja Centralna",
      description:
        "SAEID4061 SP. Z O.O. to międzynarodowa firma transportowa w Polsce obsługująca korytarze UE ↔ Bliski Wschód ↔ Azja Centralna. Kompleksowa obsługa SENT, CMR, TIR, EPD aż do końcowej dostawy.",
      services: "Usługi główne",
      servicesList: [
        "Międzynarodowy Transport CMR / TIR",
        "Dokumenty SENT / EPD / EORI",
        "Korytarz UE–ME–Azja Centralna",
        "Doradztwo Tranzytowe",
      ],
      contact: "Kontakt",
      contactLines: [
        "Saeid Komasi – Dyrektor",
        "WhatsApp & Telegram: +48 881 004 737  |  @Saeid4061",
      ],
    },

    ru: {
      title: "SAEID4061 SP. Z O.O.",
      subtitle: "Европа – Ближний Восток – Центральная Азия",
      description:
        "SAEID4061 SP. Z O.O. — международная транспортная компания в Польше. Маршруты ЕС ↔ Ближний Восток ↔ Центральная Азия. Полная логистика: SENT, CMR, TIR, EPD до конечной доставки.",
      services: "Основные услуги",
      servicesList: [
        "Международные перевозки CMR / TIR",
        "Документы SENT / EPD / EORI",
        "Коридор ЕС–Ближний Восток–Центральная Азия",
        "Транзитное консультирование",
      ],
      contact: "Контакты",
      contactLines: [
        "Saeid Komasi – Директор",
        "WhatsApp & Telegram: +48 881 004 737  |  @Saeid4061",
      ],
    },

    tr: {
      title: "SAEID4061 SP. Z O.O.",
      subtitle: "Avrupa – Orta Doğu – Orta Asya Taşımacılığı",
      description:
        "SAEID4061 SP. Z O.O. Polonya merkezli uluslararası taşımacılık şirketidir. EU ↔ Orta Doğu ↔ Orta Asya koridorlarında faaliyet göstermektedir. SENT, CMR, TIR, EPD süreç yönetimi tek elden.",
      services: "Ana Hizmetler",
      servicesList: [
        "Uluslararası Nakliye CMR / TIR",
        "SENT / EPD / EORI Belge Yönetimi",
        "EU–ME–Orta Asya Koridoru",
        "Transit Rota Danışmanlığı",
      ],
      contact: "İletişim",
      contactLines: [
        "Saeid Komasi – Direktör",
        "WhatsApp & Telegram: +48 881 004 737  |  @Saeid4061",
      ],
    },

    ar: {
      title: "SAEID4061 SP. Z O.O.",
      subtitle: "النقل بين أوروبا – الشرق الأوسط – آسيا الوسطى",
      description:
        "شركة SAEID4061 SP. Z O.O. تعمل في بولندا في ممرات أوروبا ↔ الشرق الأوسط ↔ آسيا الوسطى. إدارة كاملة لوثائق SENT, CMR, TIR, EPD حتى التسليم النهائي.",
      services: "الخدمات الرئيسية",
      servicesList: [
        "شحن دولي CMR / TIR",
        "وثائق SENT / EPD / EORI",
        "ممر أوروبا – الشرق الأوسط – آسيا الوسطى",
        "استشارات النقل والترانزيت",
      ],
      contact: "التواصل",
      contactLines: [
        "Saeid Komasi – المدير",
        "WhatsApp & Telegram: +48 881 004 737  |  @Saeid4061",
      ],
    },

    it: {
      title: "SAEID4061 SP. Z O.O.",
      subtitle: "Trasporto Europa – Medio Oriente – Asia Centrale",
      description:
        "SAEID4061 SP. Z O.O. è una società polacca di trasporto internazionale attiva nei corridoi UE ↔ Medio Oriente ↔ Asia Centrale. Gestione completa di SENT, CMR, TIR, EPD fino alla consegna finale.",
      services: "Servizi Principali",
      servicesList: [
        "Trasporto Internazionale CMR / TIR",
        "Documenti SENT / EPD / EORI",
        "Corridoio UE–ME–Asia Centrale",
        "Consulenza Transito e Logistica",
      ],
      contact: "Contatto",
      contactLines: [
        "Saeid Komasi – Direttore",
        "WhatsApp & Telegram: +48 881 004 737  |  @Saeid4061",
      ],
    },

    bg: {
      title: "SAEID4061 SP. Z O.O.",
      subtitle: "Транспорт Европа – Близък изток – Централна Азия",
      description:
        "SAEID4061 SP. Z O.O. е международна транспортна компания в Полша, работеща по коридорите ЕС ↔ Близък изток ↔ Централна Азия. Пълна логистична услуга – документи, SENT, CMR, TIR, EPD до крайна доставка.",
      services: "Основни услуги",
      servicesList: [
        "Международен транспорт CMR / TIR",
        "Документи SENT / EPD / EORI",
        "Коридор ЕС–Близък изток–Централна Азия",
        "Консултации за транзитни маршрути",
      ],
      contact: "Контакт",
      contactLines: [
        "Saeid Komasi – Управител",
        "WhatsApp & Telegram: +48 881 004 737  |  @Saeid4061",
      ],
    },

    ro: {
      title: "SAEID4061 SP. Z O.O.",
      subtitle: "Transport Europa – Orientul Mijlociu – Asia Centrală",
      description:
        "SAEID4061 SP. Z O.O. este o companie internațională de transport din Polonia, activă pe coridoarele UE ↔ Orientul Mijlociu ↔ Asia Centrală. Serviciu complet de logistică: documente, SENT, CMR, TIR, EPD până la livrarea finală.",
      services: "Servicii principale",
      servicesList: [
        "Transport internațional CMR / TIR",
        "Documente SENT / EPD / EORI",
        "Coridor UE–ME–Asia Centrală",
        "Consultanță pentru rute de tranzit",
      ],
      contact: "Contact",
      contactLines: [
        "Saeid Komasi – Director",
        "WhatsApp & Telegram: +48 881 004 737  |  @Saeid4061",
      ],
    },
  };

  const t = translations[lang];

  return (
    <main className="p-6 max-w-3xl mx-auto text-white">
      {/* Header with logo + language selector */}
      <header className="flex items-center justify-between mb-6">
        <Image
          src="/saeid4061-logo.jpg"
          alt="logo"
          width={70}
          height={70}
          className="rounded-full"
        />

        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          className="bg-gray-800 px-3 py-2 rounded-md text-sm"
        >
          <option value="fa">فارسی</option>
          <option value="en">English</option>
          <option value="pl">Polski</option>
          <option value="ru">Русский</option>
          <option value="tr">Türkçe</option>
          <option value="ar">العربية</option>
          <option value="it">Italiano</option>
          <option value="bg">Български</option>
          <option value="ro">Română</option>
        </select>
      </header>

      {/* Main title */}
      <h1 className="text-4xl font-bold">{t.title}</h1>
      <p className="mt-2 text-xl text-blue-400">{t.subtitle}</p>

      {/* Company description */}
      <p className="mt-6 leading-8 text-gray-300">{t.description}</p>

      {/* Services */}
      <section className="mt-8 p-5 border rounded-xl border-blue-400">
        <h2 className="text-xl font-bold mb-3">{t.services}</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-200">
          {t.servicesList.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Contact & WhatsApp / Telegram */}
      <section className="mt-8 p-5 border rounded-xl border-green-400">
        <h2 className="text-xl font-bold mb-3">{t.contact}</h2>
        {t.contactLines.map((line, i) => (
          <p key={i} className="text-gray-300">
            {line}
          </p>
        ))}

        <div className="flex gap-2 mt-4">
          <a
            href="https://wa.me/48881004737"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-green-500 px-4 py-1.5 text-xs font-semibold text-black hover:bg-green-400"
          >
            WhatsApp
          </a>

          <a
            href="https://t.me/Saeid4061"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-sky-500 px-4 py-1.5 text-xs font-semibold text-black hover:bg-sky-400"
          >
            Telegram
          </a>
        </div>
      </section>
    </main>
  );
}
