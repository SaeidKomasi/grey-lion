"use client";

import Image from "next/image";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

const translations = {
  fa: {
    companyName: "SAEID4061 SP. Z O.O.",
    tagline: "حمل‌ونقل اروپا – خاورمیانه – آسیای مرکزی",
    description:
      "شرکت SAEID4061 SP. Z O.O. یک شرکت حمل‌ونقل بین‌المللی در لهستان است که روی کریدورهای اروپا ↔ خاورمیانه ↔ آسیای میانه فعالیت می‌کند. تمام مراحل حمل از مسیر، اسناد مرزی، SENT, CMR, TIR, EPD تا تحویل نهایی زیر یک مدیریت انجام می‌شود.",
    servicesTitle: "خدمات اصلی",
    services: [
      "International Freight CMR / TIR",
      "SENT / EPD / EORI Docs",
      "EU–ME–Central Asia Corridor",
      "Transit Route Consulting",
    ],
    contactTitle: "تماس و ارتباط",
    contactText:
      "برای استعلام قیمت، برنامه‌ریزی بار و مشاوره مسیر ترانزیت می‌توانید مستقیم با مدیریت در تماس باشید.",
  },
  en: {
    companyName: "SAEID4061 SP. Z O.O.",
    tagline: "International Transport – Europe – Middle East – Central Asia",
    description:
      "SAEID4061 SP. Z O.O. is an international road freight company based in Poland, operating on the main corridors between Europe, the Middle East and Central Asia. We manage the full transport chain: routing, border documentation, SENT, CMR, TIR, EPD and final delivery under one management.",
    servicesTitle: "Core Services",
    services: [
      "International Freight CMR / TIR",
      "SENT / EPD / EORI Documentation",
      "EU–ME–Central Asia Corridor",
      "Transit Route & Customs Consulting",
    ],
    contactTitle: "Contact",
    contactText:
      "For quotations, transit corridor planning or cooperation, feel free to contact the management directly.",
  },
  pl: {
    companyName: "SAEID4061 SP. Z O.O.",
    tagline: "Transport międzynarodowy – Europa – Bliski Wschód – Azja Centralna",
    description:
      "SAEID4061 SP. Z O.O. to firma transportu międzynarodowego z siedzibą w Polsce. Obsługujemy główne korytarze między Europą, Bliskim Wschodem i Azją Centralną. Prowadzimy cały proces: plan trasy, dokumenty graniczne, SENT, CMR, TIR, EPD aż do dostawy końcowej.",
    servicesTitle: "Główne usługi",
    services: [
      "Międzynarodowy transport drogowy CMR / TIR",
      "Dokumenty SENT / EPD / EORI",
      "Korytarz UE–ME–Azja Centralna",
      "Doradztwo tranzytowe i celne",
    ],
    contactTitle: "Kontakt",
    contactText:
      "W sprawie wyceny, planowania przewozów i współpracy prosimy o bezpośredni kontakt z zarządem.",
  },
  az: {
    companyName: "SAEID4061 SP. Z O.O.",
    tagline: "Avropa – Yaxın Şərq – Mərkəzi Asiya yükdaşıma",
    description:
      "SAEID4061 SP. Z O.O. Polşada yerləşən beynəlxalq yükdaşıma şirkətidir. Avropa, Yaxın Şərq və Mərkəzi Asiya marşrutlarında tam logistika xidməti göstəririk.",
    servicesTitle: "Əsas xidmətlər",
    services: [
      "Beynəlxalq yükdaşıma CMR / TIR",
      "SENT / EPD / EORI sənədləri",
      "AB–ME–Mərkəzi Asiya dəhlizi",
      "Tranzit marşrutu konsultasiyası",
    ],
    contactTitle: "Əlaqə",
    contactText:
      "Qiymət təklifi və tranzit marşrutları üzrə məsləhət üçün birbaşa əlaqə saxlaya bilərsiniz.",
  },
  ka: {
    companyName: "SAEID4061 SP. Z O.O.",
    tagline:
      "საერთაშორისო გადაზიდვები – ევროპა – ახლო აღმოსავლეთი – ცენტრალური აზია",
    description:
      "SAEID4061 SP. Z O.O. პოლონეთში რეგისტრირებული საერთაშორისო სატვირთო კომპანიაა. ვმუშაობთ ევროპასა და ცენტრალურ აზიას შორის სატრანზიტო დერეფნებზე.",
    servicesTitle: "ძირითადი სერვისები",
    services: [
      "საერთაშორისო გადაზიდვები CMR / TIR",
      "SENT / EPD / EORI დოკუმენტები",
      "EU–ME–ცენტრალური აზიის დერეფნი",
      "ტრანზიტისა და მარშრუტების კონსულტაცია",
    ],
    contactTitle: "კონტაქტი",
    contactText:
      "ფასის მიღებისა და თანამშრომლობისთვის დაგვიკავშირდით პირდაპირ მენეჯმენტთან.",
  },
  kz: {
    companyName: "SAEID4061 SP. Z O.O.",
    tagline: "Халықаралық тасымал – Еуропа – Таяу Шығыс – Орталық Азия",
    description:
      "SAEID4061 SP. Z O.O. – Польшада тіркелген халықаралық жүк тасымалдау компаниясы. Біз Еуропа мен Орталық Азия арасындағы негізгі дәліздерде жұмыс істейміз.",
    servicesTitle: "Негізгі қызметтер",
    services: [
      "Халықаралық тасымал CMR / TIR",
      "SENT / EPD / EORI құжаттары",
      "ЕО–ТШ–Орталық Азия дәлізі",
      "Транзиттік маршрут бойынша кеңес",
    ],
    contactTitle: "Байланыс",
    contactText:
      "Баға ұсынысы және транзит туралы кеңес алу үшін тікелей хабарласыңыз.",
  },
  tm: {
    companyName: "SAEID4061 SP. Z O.O.",
    tagline: "Ýewropa – Ýakyn Gündogar – Merkezi Aziýa halkara ulag",
    description:
      "SAEID4061 SP. Z O.O. Polşada döredilen halkara ýük daşaýjy kompaniýadyr. Ýewropa bilen Merkezi Aziýanyň arasyndaky tranzit gatnawlary gurýarys.",
    servicesTitle: "Esasy hyzmatlar",
    services: [
      "Halkara ýük daşaýyş CMR / TIR",
      "SENT / EPD / EORI resminamalary",
      "AB–ME–Merkezi Aziýa koridory",
      "Tranzit ugrunyň maslahat berişi",
    ],
    contactTitle: "Habarlaşmak",
    contactText:
      "Bahalar we hyzmatdaşlyk üçin gönüden-göni menejment bilen habarlaşyp bilersiňiz.",
  },
  mn: {
    companyName: "SAEID4061 SP. Z O.O.",
    tagline:
      "Олон улсын тээвэр – Европ – Ойрхи Дорнод – Төв Ази",
    description:
      "SAEID4061 SP. Z O.O. нь Польшид бүртгэлтэй олон улсын авто тээврийн компани юм. Европоос Төв Ази хүртэлх коридороор ачаа тээвэрлэдэг.",
    servicesTitle: "Үндсэн үйлчилгээ",
    services: [
      "Олон улсын ачаа тээвэр CMR / TIR",
      "SENT / EPD / EORI баримт бичиг",
      "EU–ME–Төв Азийн коридор",
      "Транзит, чиглэлийн зөвлөгөө",
    ],
    contactTitle: "Холбоо барих",
    contactText:
      "Үнэ, тээвэрлэлт болон хамтын ажиллагааны талаар шууд удирдлагатай холбогдоно уу.",
  },
  ru: {
    companyName: "SAEID4061 SP. Z O.O.",
    tagline:
      "Международные перевозки – Европа – Ближний Восток – Центральная Азия",
    description:
      "SAEID4061 SP. Z O.O. — польская компания международных автоперевозок. Работаем на коридорах Европа ↔ Ближний Восток ↔ Центральная Азия и ведём весь процесс от маршрута и документов до финальной доставки.",
    servicesTitle: "Основные услуги",
    services: [
      "Международные перевозки CMR / TIR",
      "Документация SENT / EPD / EORI",
      "Коридор ЕС–БВ–Центральная Азия",
      "Консалтинг по транзиту и маршрутам",
    ],
    contactTitle: "Контакты",
    contactText:
      "По вопросам сотрудничества и расчёта ставок свяжитесь напрямую с руководством.",
  },
  it: {
    companyName: "SAEID4061 SP. Z O.O.",
    tagline:
      "Trasporto internazionale – Europa – Medio Oriente – Asia Centrale",
    description:
      "SAEID4061 SP. Z O.O. è un’azienda di trasporto internazionale con sede in Polonia. Operiamo sui corridoi principali tra Europa, Medio Oriente e Asia Centrale.",
    servicesTitle: "Servizi principali",
    services: [
      "Trasporto internazionale CMR / TIR",
      "Documenti SENT / EPD / EORI",
      "Corridoio UE–ME–Asia Centrale",
      "Consulenza per transito e rotte",
    ],
    contactTitle: "Contatti",
    contactText:
      "Per offerte, progetti di trasporto o cooperazione contattare direttamente la direzione.",
  },
  bg: {
    companyName: "SAEID4061 SP. Z O.O.",
    tagline:
      "Международен транспорт – Европа – Близък изток – Централна Азия",
    description:
      "SAEID4061 SP. Z O.O. е полска фирма за международен автомобилен транспорт. Работим по основните коридори между Европа и Централна Азия.",
    servicesTitle: "Основни услуги",
    services: [
      "Международен транспорт CMR / TIR",
      "Документи SENT / EPD / EORI",
      "Коридор ЕС–БИ–Централна Азия",
      "Консултации за транзитни маршрути",
    ],
    contactTitle: "Контакт",
    contactText:
      "За оферти и сътрудничество свържете се директно с управителя.",
  },
  ro: {
    companyName: "SAEID4061 SP. Z O.O.",
    tagline:
      "Transport internațional – Europa – Orientul Mijlociu – Asia Centrală",
    description:
      "SAEID4061 SP. Z O.O. este o companie de transport internațional din Polonia, activă pe coridoarele dintre Europa și Asia Centrală.",
    servicesTitle: "Servicii principale",
    services: [
      "Transport internațional CMR / TIR",
      "Documente SENT / EPD / EORI",
      "Coridor UE–ME–Asia Centrală",
      "Consultanță pentru rute de tranzit",
    ],
    contactTitle: "Contact",
    contactText:
      "Pentru oferte și colaborare contactați direct managementul.",
  },
  es: {
    companyName: "SAEID4061 SP. Z O.O.",
    tagline:
      "Transporte internacional – Europa – Oriente Medio – Asia Central",
    description:
      "SAEID4061 SP. Z O.O. es una empresa polaca de transporte internacional por carretera. Operamos en los principales corredores entre Europa y Asia Central.",
    servicesTitle: "Servicios principales",
    services: [
      "Transporte internacional CMR / TIR",
      "Documentación SENT / EPD / EORI",
      "Corredor UE–ME–Asia Central",
      "Consultoría de rutas de tránsito",
    ],
    contactTitle: "Contacto",
    contactText:
      "Para presupuestos y cooperación puede contactar directamente con la dirección.",
  },
  nl: {
    companyName: "SAEID4061 SP. Z O.O.",
    tagline:
      "Internationaal vervoer – Europa – Midden-Oosten – Centraal-Azië",
    description:
      "SAEID4061 SP. Z O.O. is een internationaal transportbedrijf uit Polen. Wij rijden op de belangrijkste corridors tussen Europa en Centraal-Azië.",
    servicesTitle: "Kernactiviteiten",
    services: [
      "Internationaal wegvervoer CMR / TIR",
      "SENT / EPD / EORI documentatie",
      "EU–ME–Centraal-Azië corridor",
      "Advies over transitroutes",
    ],
    contactTitle: "Contact",
    contactText:
      "Voor offertes en samenwerking kunt u rechtstreeks contact opnemen met het management.",
  },
} as const;

type LangCode = keyof typeof translations;

export default function HomePage() {
  const [lang, setLang] = useState<LangCode>("fa");
  const t = translations[lang];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-zinc-800">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <Image
              src="/saeid4061-logo.jpg"
              alt="SAEID4061 LOGO"
              width={52}
              height={52}
              className="rounded-full border border-zinc-800 bg-black object-cover"
            />
            <div className="leading-tight">
              <div className="text-xs uppercase tracking-[0.25em] text-sky-400">
                GREY LION
              </div>
              <div className="text-sm font-semibold">
                SAEID4061 SP. Z O.O.
              </div>
            </div>
          </div>

          <LanguageSwitcher selected={lang} onChange={setLang} />
        </div>
      </header>

      {/* Content */}
      <section className="mx-auto max-w-5xl px-4 py-10 space-y-8">
        <div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            {t.companyName}
          </h1>
          <p className="mb-4 text-lg text-sky-300">{t.tagline}</p>
          <p className="text-base leading-relaxed text-zinc-100">
            {t.description}
          </p>
        </div>

        <div className="rounded-2xl border border-sky-900 bg-sky-950/30 p-5">
          <h2 className="mb-3 text-xl font-semibold">{t.servicesTitle}</h2>
          <ul className="space-y-1 text-sm md:text-base">
            {t.services.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5">
          <h2 className="mb-3 text-xl font-semibold">{t.contactTitle}</h2>
          <p className="mb-2 text-sm md:text-base">{t.contactText}</p>
          <p className="text-sm md:text-base">
            WhatsApp:{" "}
            <a
              href="https://wa.me/48881004737"
              target="_blank"
              className="text-sky-400 underline"
            >
              +48 881 004 737
            </a>
          </p>
          <p className="text-sm md:text-base">
            Telegram:{" "}
            <a
              href="https://t.me/Saeid4061"
              target="_blank"
              className="text-sky-400 underline"
            >
              @Saeid4061
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
