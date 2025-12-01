"use client";

import { useState } from "react";
import Image from "next/image";

type Lang = "fa" | "en" | "pl" | "az" | "ka" | "kk" | "tk" | "mn" | "ru";

const TEXT: Record<
  Lang,
  {
    pageTitle: string;
    subtitle: string;
    overview: string;
    servicesTitle: string;
    servicesList: string[];
    corridorsTitle: string;
    corridorsIntro: string;
    contactNote: string;
  }
> = {
  fa: {
    pageTitle: "SAEID4061 SP. Z O.O. – شرکت حمل‌ونقل بین‌المللی",
    subtitle: "European – Middle East – Central Asia Transport Operator",
    overview:
      "شرکت SAEID4061 SP. Z O.O. به عنوان یک اپراتور حمل‌ونقل بین‌المللی مستقر در لهستان، روی کریدورهای اروپا، خاورمیانه و آسیای مرکزی تمرکز دارد. ما با ترکیب تجربه رانندگی بین‌المللی، آشنایی مستقیم با مرزها و تسلط بر تشریفات گمرکی، حمل‌ونقل مطمئن و قابل پیگیری را برای مشتریان فراهم می‌کنیم.",
    servicesTitle: "خدمات اصلی شرکت",
    servicesList: [
      "حمل‌ونقل جاده‌ای بین‌المللی کالا (CMR / TIR)",
      "حمل کامل (FTL) و خرد (LTL) در مسیرهای طولانی و میان‌برد",
      "هماهنگی و آماده‌سازی اسناد SENT, EPD, EORI, CMR",
      "مشاوره مسیر و هزینه برای مشتریان ثابت",
      "همکاری نزدیک با شرکت‌های لجستیک در اروپا، ترکیه و ایران",
    ],
    corridorsTitle: "مسیرها و کریدورهای فعال",
    corridorsIntro:
      "کریدورهای اصلی ما به‌گونه‌ای انتخاب شده‌اند که پلی امن و پایدار میان اتحادیه اروپا، خاورمیانه و کشورهای آسیای مرکزی ایجاد کنند:",
    contactNote:
      "برای استعلام قیمت، برنامه‌ریزی حمل بار یا مذاکره در مورد قراردادهای بلندمدت، لطفاً از طریق ایمیل یا تلفن ثبت‌شده در صفحه اصلی با مدیریت شرکت تماس بگیرید.",
  },
  en: {
    pageTitle: "SAEID4061 SP. Z O.O. – International Road Transport",
    subtitle: "European – Middle East – Central Asia Transport Operator",
    overview:
      "SAEID4061 SP. Z O.O. is an international road transport operator based in Poland, dedicated to EU–Middle East–Central Asia freight corridors. Combining on-road experience, border know-how and customs/documentation expertise, we provide reliable, traceable international transport for industrial partners.",
    servicesTitle: "Core Company Services",
    servicesList: [
      "International road freight (CMR / TIR)",
      "FTL & LTL operations on long and medium distance routes",
      "Customs and border documentation: SENT, EPD, EORI, CMR",
      "Route and cost advisory for regular clients",
      "Cooperation with logistics partners across EU, Türkiye and Iran",
    ],
    corridorsTitle: "Main Corridors & Routes",
    corridorsIntro:
      "Our corridor strategy is focused on connecting EU production and logistics hubs with Middle Eastern and Central Asian markets:",
    contactNote:
      "For rate requests, contract proposals or strategic cooperation, please contact company management via the official e-mail or phone number shown on the main page.",
  },
  pl: {
    pageTitle: "SAEID4061 SP. Z O.O. – Międzynarodowy transport drogowy",
    subtitle: "Operator korytarzy Europa – Bliski Wschód – Azja Centralna",
    overview:
      "SAEID4061 SP. Z O.O. to operator międzynarodowego transportu drogowego z siedzibą w Polsce. Specjalizujemy się w obsłudze korytarzy UE–Bliski Wschód–Azja Centralna, łącząc doświadczenie kierowcy międzynarodowego, znajomość przejść granicznych oraz procedur celnych.",
    servicesTitle: "Główne usługi spółki",
    servicesList: [
      "Międzynarodowy transport drogowy towarów (CMR / TIR)",
      "Obsługa FTL i LTL na trasach długich i średnich",
      "Koordynacja dokumentów SENT, EPD, EORI, CMR",
      "Doradztwo trasowe i kosztowe dla stałych klientów",
      "Współpraca z operatorami logistycznymi w UE, Turcji i Iranie",
    ],
    corridorsTitle: "Korytarze i trasy",
    corridorsIntro:
      "Nasze główne korytarze transportowe budują stabilne połączenie między UE, Bliskim Wschodem i Azją Centralną:",
    contactNote:
      "W sprawie ofert cenowych, umów długoterminowych i współpracy prosimy o kontakt z zarządem spółki poprzez dane z strony głównej.",
  },
  az: {
    pageTitle: "SAEID4061 SP. Z O.O. – Beynəlxalq avtomobil daşımaları",
    subtitle: "Avropa – Yaxın Şərq – Mərkəzi Asiya marşrut operatoru",
    overview:
      "SAEID4061 SP. Z O.O. Polşada yerləşən beynəlxalq yükdaşıma operatorudur. Şirkət Avropa, Yaxın Şərq və Mərkəzi Asiya korridoarlarına fokuslanır və sərhəd, gömrük və sənədləşmə təcrübəsi ilə etibarlı logistika həlli təqdim edir.",
    servicesTitle: "Şirkətin əsas xidmətləri",
    servicesList: [
      "CMR / TIR beynəlxalq avtomobil daşımaları",
      "FTL və LTL daşımalar (uzun və orta məsafələr)",
      "SENT, EPD, EORI, CMR sənədlərinin hazırlanması",
      "Daimi müştərilər üçün marşrut və xərc məsləhəti",
      "Aİ, Türkiyə və İran logistik tərəfdaşlarla əməkdaşlıq",
    ],
    corridorsTitle: "Korridorlar və marşrutlar",
    corridorsIntro:
      "Əsas marşrutlarımız Avropa istehsal mərkəzlərini Yaxın Şərq və Mərkəzi Asiya bazarları ilə birləşdirir:",
    contactNote:
      "Qiymət təklifi, daşıma planlaması və uzunmüddətli əməkdaşlıq üçün rəsmi e-poçt və telefon vasitəsilə əlaqə saxlayın.",
  },
  ka: {
    pageTitle: "SAEID4061 SP. Z O.O. – საერთაშორისო სატრანსპორტო კომპანია",
    subtitle: "ევროპა – ახლო აღმოსავლეთი – ცენტრალური აზია",
    overview:
      "SAEID4061 SP. Z O.O. პოლონეთში დაფუძნებული საერთაშორისო სატრანსპორტო ოპერატორია, რომელიც ემსახურება ევროკავშირის, ახლო აღმოსავლეთის და ცენტრალური აზიის მარშრუტებს. გამოცდილება, საბაჟო პროცედურები და საზღვრის ცოდნა უზრუნველყოფს საიმედო ლოჯისტიკას პარტნიორებისთვის.",
    servicesTitle: "კომპანიის ძირითადი სერვისები",
    servicesList: [
      "CMR / TIR საერთაშორისო გადაზიდვები",
      "FTL და LTL გადაზიდვები გრძელ და საშუალო დిస్టანციებზე",
      "SENT, EPD, EORI, CMR დოკუმენტაციის კოორდინაცია",
      "ტრასის და ღირებულების კონსულტაცია რეგულარული კლიენტებისთვის",
      "თანამშრომლობა ლოჯისტიკურ კომპანიებთან ევროკავშირში, თურქეთსა და ირანში",
    ],
    corridorsTitle: "კორუდორები და მარშრუტები",
    corridorsIntro:
      "ჩვენი კორუდორები აკავშირებს ევროკავშირის წარმოებით ცენტრებს ახლო აღმოსავლეთსა და ცენტრალურ აზიასთან:",
    contactNote:
      "ღირებულების შეთავაზებისთვის ან გრძელვადიანი კონტრაქტების დასაგეგმად, გამოიყენეთ მთავარი გვერდზე მოცემული საკონტაქტო ინფორმაცია.",
  },
  kk: {
    pageTitle: "SAEID4061 SP. Z O.O. – Халықаралық тасымал операторы",
    subtitle: "Еуропа – Таяу Шығыс – Орталық Азия",
    overview:
      "SAEID4061 SP. Z O.O. – Польшада орналасқан халықаралық автокөлік тасымалы операторы. Компания Еуропа, Таяу Шығыс және Орталық Азия бағыттарында жүктерді сенімді түрде жеткізуді қамтамасыз етеді.",
    servicesTitle: "Компанияның негізгі қызметтері",
    servicesList: [
      "CMR / TIR халықаралық тасымалдары",
      "FTL және LTL тасымалдары (ұзақ және орта қашықтық)",
      "SENT, EPD, EORI, CMR құжаттарын үйлестіру",
      "Тұрақты клиенттер үшін маршрут пен шығындар бойынша кеңес",
      "ЕО, Түркия және Иран логистикалық серіктестерімен жұмыс",
    ],
    corridorsTitle: "Көлік дәліздері мен бағыттар",
    corridorsIntro:
      "Біздің дәліздер Еуропа өндіріс орталықтарын Таяу Шығыс және Орталық Азия нарықтарымен байланыстырады:",
    contactNote:
      "Баға ұсыныстары мен ұзақ мерзімді келісімшарттар үшін компания басшылығына тікелей хабарласыңыз.",
  },
  tk: {
    pageTitle: "SAEID4061 SP. Z O.O. – Halkara ýük daşyma operatory",
    subtitle: "Ýewropa – Ýakyn Gündogar – Merkezi Aziýa",
    overview:
      "SAEID4061 SP. Z O.O. Polşada ýerleşýän halkara awtoulag ýük daşyma operatorydyr. Kompaniýa Ýewropa, Ýakyn Gündogar we Merkezi Aziýa ugurlarynda ygtybarly we doly dolandyrylan logistika hödürleýär.",
    servicesTitle: "Kompaniýanyň esasy hyzmatlary",
    servicesList: [
      "Halkara ýol arkaly ýük daşamak (CMR / TIR)",
      "FTL we LTL (uzak we orta aralyklar)",
      "SENT, EPD, EORI, CMR resminamalaryny utgaşdyrmak",
      "Müşderiler üçin ýol we çykdajy boýunça maslahat",
      "ÝB, Türkiýe we Eýran logistika hyzmatdaşlary bilen işleşmek",
    ],
    corridorsTitle: "Korridorlar we ugurlar",
    corridorsIntro:
      "Esasy ugurlar Ýewropanyň önümçilik merkezlerini Ýakyn Gündogar we Merkezi Aziýa bilen baglanyşdyrýar:",
    contactNote:
      "Bahalar, şertnamalar we hyzmatdaşlyk barada maglumat almak üçin kompaniýanyň resmi e-mail we telefonlary arkaly habarlaşyň.",
  },
  mn: {
    pageTitle: "SAEID4061 SP. Z O.O. – Олон улсын тээвэр",
    subtitle: "Европ – Ойрхи Дорнод – Төв Азийн оператор",
    overview:
      "SAEID4061 SP. Z O.O. нь Польш улсад байрладаг олон улсын авто тээврийн оператор юм. Европ, Ойрхи Дорнод, Төв Азийн коридороор дамжуулан найдвартай тээврийн үйлчилгээ үзүүлдэг.",
    servicesTitle: "Компаний үндсэн үйлчилгээ",
    servicesList: [
      "CMR / TIR олон улсын авто тээвэр",
      "FTL ба LTL (урт болон дундаж зай)",
      "SENT, EPD, EORI, CMR бичиг баримтын зохицуулалт",
      "Тогтмол захиалагчдад чиглэл ба өртгийн зөвлөгөө",
      "ЕХ, Турк, Ираны логистикийн түншүүдтэй хамтран ажиллах",
    ],
    corridorsTitle: "Коридорууд ба чиглэлүүд",
    corridorsIntro:
      "Манай үндсэн коридорууд Европын үйлдвэрлэлийн төвүүдийг Ойрхи Дорнод болон Төв Азийн зах зээлтэй холбодог:",
    contactNote:
      "Үнийн санал авах, урт хугацааны гэрээ байгуулахын тулд нүүр хуудасны албан ёсны холбоо барих мэдээллийг ашиглана уу.",
  },
  ru: {
    pageTitle: "SAEID4061 SP. Z O.O. – Международный автоперевозчик",
    subtitle: "Оператор коридоров Европа – Ближний Восток – Центральная Азия",
    overview:
      "SAEID4061 SP. Z O.O. — международный оператор автоперевозок, базирующийся в Польше. Компания специализируется на коридорах Европа–Ближний Восток–Центральная Азия, сочетая практический опыт вождения, знание границ и таможенных процедур.",
    servicesTitle: "Ключевые услуги компании",
    servicesList: [
      "Международные автоперевозки грузов (CMR / TIR)",
      "FTL и LTL перевозки на средние и большие расстояния",
      "Координация документов SENT, EPD, EORI, CMR",
      "Консультации по маршрутам и стоимости для постоянных клиентов",
      "Сотрудничество с логистическими операторами в ЕС, Турции и Иране",
    ],
    corridorsTitle: "Коридоры и маршруты",
    corridorsIntro:
      "Основные транспортные коридоры компании соединяют производственные центры ЕС с рынками Ближнего Востока и Центральной Азии:",
    contactNote:
      "Для запросов по ставкам и долгосрочным контрактам свяжитесь с руководством компании через контакты, указанные на главной странице.",
  },
};

export default function CompanyPage() {
  const [lang, setLang] = useState<Lang>("fa");
  const t = TEXT[lang];

  return (
    <main className="min-h-screen w-full bg-black text-white">
      {/* HEADER */}
      <header className="sticky top-0 border-b border-zinc-800 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="relative h-9 w-9 overflow-hidden rounded-full border border-sky-400/60">
              <Image
                src="/saeid4061-logo.jpg"
                alt="SAEID4061 Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold tracking-[0.18em] text-sky-300 uppercase">
                SAEID4061 SP. Z O.O.
              </span>
              <span className="text-[11px] text-zinc-400">
                International Transport · /company
              </span>
            </div>
          </div>

          <select
            value={lang}
            onChange={(e) => setLang(e.target.value as Lang)}
            className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs"
          >
            <option value="fa">فارسی</option>
            <option value="en">English</option>
            <option value="pl">Polski</option>
            <option value="az">AZ</option>
            <option value="ka">KA</option>
            <option value="kk">KZ</option>
            <option value="tk">TM</option>
            <option value="mn">MN</option>
            <option value="ru">RU</option>
          </select>
        </div>
      </header>

      {/* BODY */}
      <section className="mx-auto max-w-6xl px-4 py-10 space-y-8">
        <header className="space-y-3">
          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            {t.pageTitle}
          </h1>
          <p className="text-sm text-sky-300">{t.subtitle}</p>
          <p className="text-sm text-zinc-200 leading-relaxed max-w-3xl">
            {t.overview}
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-sky-800 bg-sky-950/40 p-5">
            <h2 className="text-sky-300 text-sm font-semibold mb-2">
              {t.servicesTitle}
            </h2>
            <ul className="space-y-1.5 text-xs text-zinc-100">
              {t.servicesList.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-sky-800 bg-slate-950/60 p-5">
            <h2 className="text-sky-300 text-sm font-semibold mb-2">
              {t.corridorsTitle}
            </h2>
            <p className="text-xs text-zinc-200 mb-3">{t.corridorsIntro}</p>
            <ul className="space-y-1 text-xs text-zinc-100">
              <li>• EU 🇪🇺 ↔ Poland 🇵🇱 (Biała Podlaska hub)</li>
              <li>• Germany, Netherlands, Belgium, France, Italy</li>
              <li>• Türkiye 🇹🇷 ↔ Iran 🇮🇷 – main gateway</li>
              <li>• Azerbaijan 🇦🇿 · Georgia 🇬🇪 – Caucasus corridor</li>
              <li>• Kazakhstan 🇰🇿 · Turkmenistan 🇹🇲 – Central Asia</li>
              <li>• Mongolia 🇲🇳 – long distance strategic route</li>
            </ul>
          </article>
        </div>

        <article className="rounded-2xl border border-emerald-700 bg-emerald-950/30 p-5">
          <h2 className="text-emerald-300 text-sm font-semibold mb-2">
            KRS / NIP / REGON
          </h2>
          <p className="text-xs text-zinc-100 space-y-1">
            <span className="block">
              KRS: <span className="font-mono">0001065392</span>
            </span>
            <span className="block">
              NIP: <span className="font-mono">5372677546</span> · REGON:{" "}
              <span className="font-mono">526744160</span>
            </span>
            <span className="block">
              Address: Orzechowa 32/1, 21-500 Biała Podlaska, Poland
            </span>
          </p>
        </article>

        <footer className="border-t border-zinc-800 pt-4 text-xs text-zinc-300 space-y-2">
          <p>{t.contactNote}</p>
          <p>
            E-mail:{" "}
            <a
              href="mailto:saeedkomasy@gmail.com"
              className="text-sky-300 underline-offset-2 hover:underline"
            >
              saeedkomasy@gmail.com
            </a>{" "}
            · Phone (PL):{" "}
            <span className="font-mono text-zinc-100">+48 881 004 737</span>
          </p>
        </footer>
      </section>
    </main>
  );
}
