"use client";

import { useState } from "react";
import Image from "next/image";

type Lang = "fa" | "en" | "pl" | "az" | "ka" | "kk" | "tk" | "mn" | "ru";

const TEXT: Record<
  Lang,
  {
    companyTag: string;
    companyTitle1: string;
    companyTitle2: string;
    companyDesc: string;
    servicesTitle: string;
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
    companyTitle2: "حمل‌ونقل اروپا – خاورمیانه – آسیای مرکزی",
    companyDesc:
      "شرکت SAEID4061 SP. Z O.O. یک شرکت حمل‌ونقل بین‌المللی مستقر در لهستان است که روی کریدورهای اروپا ↔ خاورمیانه ↔ آسیای میانه تمرکز دارد. از برنامه‌ریزی مسیر، تشریفات مرزی، CMR, TIR, EORI, SENT, EPD تا رهگیری و تحویل نهایی، تمام مراحل زیر یک مدیریت انجام می‌شود.",
    servicesTitle: "خدمات اصلی",
    routesTitle: "مسیرهای فعال حمل‌ونقل بین‌المللی",
    greyLionTag: "GREY LION – قدرت و دقت",
    greyLionTitle: "Saeid Komasi – اختراعات و تحقیقات مهندسی",
    greyLionDesc:
      "در بخش Grey Lion ایده‌ها و اختراعات مکانیکی شامل سیستم زنجیره اهرمی، قرقره‌های مرکب و نیروگاه مکانیکی ۵۰۰ مگاواتی معرفی می‌شوند. این بخش ماهیت پژوهشی و R&D دارد.",
    contactTitle: "ارتباط برای قرارداد و همکاری",
    contactText:
      "برای حمل‌ونقل بین‌المللی، سرمایه‌گذاری، توسعه پروژه‌های انرژی یا دریافت نمایندگی، لطفاً مستقیماً با مدیریت شرکت تماس بگیرید.",
  },
  en: {
    companyTag: "International Road Transport",
    companyTitle1: "SAEID4061 SP. Z O.O.",
    companyTitle2: "European – Middle East – Central Asia Transport",
    companyDesc:
      "SAEID4061 SP. Z O.O. is an international road transport operator based in Poland, operating EU ↔ Middle East ↔ Central Asia freight corridors. Full chain: route planning, border/customs documents, CMR/TIR, SENT, EPD, tracking and final delivery — all under one management.",
    servicesTitle: "Core Services",
    routesTitle: "Active International Transport Corridors",
    greyLionTag: "GREY LION – POWER & PRECISION",
    greyLionTitle: "Saeid Komasi – Engineering & Inventions",
    greyLionDesc:
      "The Grey Lion division presents mechanical invention concepts including Lever–Chain multiplication systems, Composite Pulley Energy Storage and 500MW Mechanical Powerplant architecture. Focus: R&D and applied industrial engineering.",
    contactTitle: "Contact for Business & Cooperation",
    contactText:
      "For freight booking, transport cooperation, technology licensing or investment inquiry — please contact company management directly.",
  },
  pl: {
    companyTag: "Międzynarodowy transport drogowy",
    companyTitle1: "SAEID4061 SP. Z O.O.",
    companyTitle2: "Transport Europa – Bliski Wschód – Azja Centralna",
    companyDesc:
      "SAEID4061 SP. Z O.O. to operator transportu drogowego z siedzibą w Polsce. Obsługujemy korytarze UE ↔ Bliski Wschód ↔ Azja Centralna. Kompleksowa obsługa: planowanie trasy, dokumenty graniczne, CMR/TIR, SENT/EPD, monitoring ładunku i finalna dostawa.",
    servicesTitle: "Główne usługi",
    routesTitle: "Aktywne międzynarodowe korytarze transportowe",
    greyLionTag: "GREY LION – MOC I PRECYZJA",
    greyLionTitle: "Saeid Komasi – Inżynieria i Wynalazki",
    greyLionDesc:
      "Grey Lion prezentuje systemy mechaniczne: dźwignie–łańcuch, złożone układy linowo–bębnowe oraz koncepcję elektrowni mechanicznej 500 MW. Obszar skoncentrowany na R&D.",
    contactTitle: "Kontakt biznesowy i współpraca",
    contactText:
      "W sprawie zleceń transportowych, inwestycji lub technologii zapraszamy do kontaktu bezpośredniego.",
  },
  az: {
    companyTag: "Beynəlxalq yükdaşıma",
    companyTitle1: "SAEID4061 SP. Z O.O.",
    companyTitle2: "Avropa – Yaxın Şərq – Mərkəzi Asiya daşımaları",
    companyDesc:
      "SAEID4061 SP. Z O.O. Polşada yerləşən beynəlxalq avtomobil daşımaları şirkətidir. Əsas koridorlar: Avropa ↔ Yaxın Şərq ↔ Mərkəzi Asiya. Marşrut planlaşdırılması, gömrük sənədləri, CMR/TIR, EPD/SENT, yüklərin izlənməsi və son təhvil vahid idarəetmə ilə aparılır.",
    servicesTitle: "Əsas xidmətlər",
    routesTitle: "Aktiv beynəlxalq marşrutlar",
    greyLionTag: "GREY LION – GÜC VƏ DƏQIQLIK",
    greyLionTitle: "Saeid Komasi – Mühəndislik və ixtiralar",
    greyLionDesc:
      "Grey Lion bölməsi mexaniki sistemlər təqdim edir: Lever-Chain güc artırma sistemi, Kompozit kasnak enerjisi və 500MW mexaniki elektrik stansiyası konsepsiyası.",
    contactTitle: "Əlaqə və əməkdaşlıq",
    contactText:
      "Daşınma, əməkdaşlıq və ya investisiya üçün birbaşa rəhbərliklə əlaqə saxlayın.",
  },
  ka: {
    companyTag: "საერთაშორისო გადაზიდვები",
    companyTitle1: "SAEID4061 SP. Z O.O.",
    companyTitle2: "ევროპა – ახლო აღმოსავლეთი – ცენტრალური აზია",
    companyDesc:
      "SAEID4061 SP. Z O.O. პოლონეთში დაფუძნებული საერთაშორისო სატრანსპორტო ოპერატორია. კორკეთორები: ევროკავშირი ↔ ახლო აღმოსავლეთი ↔ ცენტრალური აზია. სრული ციკლი: გზის დაგეგმვა, საბაჟო, CMR/TIR, SENT/EPD, მონიტორინგი და მიწოდება ერთ სისტემაში.",
    servicesTitle: "საბაზისო მომსახურებები",
    routesTitle: "აქტიური საერთაშორისო მარშრუტები",
    greyLionTag: "GREY LION – ძალა და სიზუსტე",
    greyLionTitle: "Saeid Komasi – ინჟინერია და გამოგონებები",
    greyLionDesc:
      "Grey Lion წარმოადგენს მექანიკურ ინოვაციებს: ლევერის ჯაჭვის მოდულაცია, კომპოზიტური ბლოკები და 500MW მექანიკური ენერგიის სისტემა.",
    contactTitle: "კონტაქტი და თანამშრომლობა",
    contactText:
      "გადაზიდვა, ინვესტიცია ან ტექნოლოგიური პარტნიორობა — დაუკავშირდით მენეჯმენტს პირდაპირ.",
  },
  kk: {
    companyTag: "Халықаралық жүк тасымалы",
    companyTitle1: "SAEID4061 SP. Z O.O.",
    companyTitle2: "Еуропа – Таяу Шығыс – Орталық Азия",
    companyDesc:
      "SAEID4061 SP. Z O.O. — Польшада орналасқан халықаралық автокөлік тасымалдаушысы. ЕО ↔ Таяу Шығыс ↔ Орталық Азия бағыттарына қызмет көрсетеді. Маршрут, кеден, CMR/TIR, SENT/EPD, бақылау және жеткізу — бәрі бір басқаруда.",
    servicesTitle: "Басты қызметтер",
    routesTitle: "Халықаралық бағыттар",
    greyLionTag: "GREY LION – ҚУАТ ЖӘНЕ ДӘЛДІК",
    greyLionTitle: "Saeid Komasi – Инженерлік және жаңалықтар",
    greyLionDesc:
      "Grey Lion механикалық жобаларды қамтиды: иінтірек–тізбек өсіргіш, композиттік шкив және 500МВт механикалық энергетикалық станция тұжырымдамасы.",
    contactTitle: "Байланыс және әріптестік",
    contactText:
      "Тасымал, R&D және инвестиция бойынша сұраныс — компанияға тікелей хабарласыңыз.",
  },
  tk: {
    companyTag: "Halkara ýük daşyma",
    companyTitle1: "SAEID4061 SP. Z O.O.",
    companyTitle2: "Ýewropa – Ýakyn Gündogar – Merkezi Aziýa",
    companyDesc:
      "SAEID4061 SP. Z O.O. — Polşada ýerleşýän halkara ýük daşaýan kompaniýa. Ugurlar: ÝB ↔ Ýakyn Gündogar ↔ Merkezi Aziýa. Marşrut, gümrük, CMR/TIR, SENT/EPD, gözegçilik we ýetirmek — hemmesi bir dolandyryş bilen.",
    servicesTitle: "Esasy hyzmatlar",
    routesTitle: "Halkara hereket ugurlary",
    greyLionTag: "GREY LION – GÜÇ WE TAKYKLYK",
    greyLionTitle: "Saeid Komasi – Inženerçilik we Içtira",
    greyLionDesc:
      "Grey Lion mehaniki çözgütleri görkezýär: lever–zanjyr güýji artdyryjy, toplumlaýyn kasnak energiýasy we 500MW mehaniki elektrik bekedi konsepsiýasy.",
    contactTitle: "Habarlaşmak & hyzmatdaşlyk",
    contactText:
      "Daşama, maýa goýum we tehnologiýa hyzmatdaşlygy üçin kompaniýa bilen göni habarlaşyň.",
  },
  mn: {
    companyTag: "Олон улсын авто тээвэр",
    companyTitle1: "SAEID4061 SP. Z O.O.",
    companyTitle2: "Европ – Ойрхи Дорнод – Төв Ази",
    companyDesc:
      "SAEID4061 SP. Z O.O. нь Польш улсад байрладаг олон улсын ачаа тээврийн компани юм. Европ ↔ Ойрхи Дорнод ↔ Төв Ази коридороор үйлчилдэг. Маршрут, гааль, CMR/TIR, SENT/EPD, хяналт, хүргэлт — нэг удирдлагаар.",
    servicesTitle: "Үндсэн үйлчилгээ",
    routesTitle: "Олон улсын тээврийн коридорууд",
    greyLionTag: "GREY LION – ХҮЧ & НАРИЙВЧЛАЛ",
    greyLionTitle: "Saeid Komasi – Инженерчлэл & Шинэ бүтээл",
    greyLionDesc:
      "Grey Lion — хөшүүргийн гинжин өсгөгч систем, нийлмэл дамрын энергийн нөөцлөлт, 500MW механик цахилгаан үүсгүүрийн архитектур.",
    contactTitle: "Холбоо & хамтын ажиллагаа",
    contactText:
      "Тээвэр, хөрөнгө оруулалт, лиценз — компанийн удирдлагад шууд занал уу.",
  },
  ru: {
    companyTag: "Международные автоперевозки",
    companyTitle1: "SAEID4061 SP. Z O.O.",
    companyTitle2: "Европа – Ближний Восток – Центральная Азия",
    companyDesc:
      "SAEID4061 SP. Z O.O. — международный оператор грузоперевозок, расположенный в Польше. Основные коридоры: ЕС ↔ Ближний Восток ↔ Центральная Азия. Полный цикл — маршрут, таможня, CMR/TIR, SENT/EPD, отслеживание и доставка — под единым управлением.",
    servicesTitle: "Основные услуги",
    routesTitle: "Активные международные маршруты",
    greyLionTag: "GREY LION – МОЩНОСТЬ & ТОЧНОСТЬ",
    greyLionTitle: "Saeid Komasi – Инженерия & Изобретения",
    greyLionDesc:
      "Grey Lion представляет механические разработки: Lever–Chain усилитель, композитные шкивы, а также концепцию механической электростанции мощностью 500 МВт.",
    contactTitle: "Контакты & сотрудничество",
    contactText:
      "Перевозки, партнерство, инвестиции — обращайтесь напрямую к руководству компании.",
  },
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("fa");
  const t = TEXT[lang];

  return (
    <main className="min-h-screen w-full bg-black text-white">
      <header className="sticky top-0 border-b border-zinc-800 bg-black/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="relative h-9 w-9 overflow-hidden rounded-full border border-sky-400/60">
              <Image src="/saeid4061-logo.jpg" alt="logo" fill className="object-cover"/>
            </div>
            <span className="text-xs uppercase tracking-[0.2em] text-sky-300">
              SAEID4061 · Grey Lion
            </span>
          </div>

          <select
            value={lang}
            onChange={e => setLang(e.target.value as Lang)}
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
            <option value="ru">RU 🇷🇺</option>
          </select>
        </div>
      </header>

      <section className="px-4 py-12">
        <p className="text-sky-300 text-xs uppercase tracking-[0.3em]">{t.companyTag}</p>
        <h1 className="text-3xl font-bold mt-2">{t.companyTitle1}</h1>
        <h2 className="text-sky-300 text-xl mb-6">{t.companyTitle2}</h2>
        <p className="text-zinc-200 text-sm max-w-xl leading-6">{t.companyDesc}</p>

        <div className="grid sm:grid-cols-2 gap-4 mt-8">
          <div className="border border-sky-800 p-4 rounded-xl">
            <h3 className="text-sky-300 text-sm mb-2">{t.servicesTitle}</h3>
            <ul className="text-xs text-zinc-200 space-y-1">
              <li>• CMR / TIR Freight Transport</li>
              <li>• EU–ME–CA Corridor Operations</li>
              <li>• SENT / EPD / Customs Docs</li>
              <li>• Route & Border Coordination</li>
            </ul>
          </div>

          <div className="border border-sky-800 p-4 rounded-xl">
            <h3 className="text-sky-300 text-sm mb-2">{t.routesTitle}</h3>
            <ul className="text-xs text-zinc-200 space-y-1">
              <li>• EU ↔ Poland 🇵🇱</li>
              <li>• Türkiye 🇹🇷 ↔ Iran 🇮🇷</li>
              <li>• Azerbaijan 🇦🇿 · Georgia 🇬🇪</li>
              <li>• Kazakhstan 🇰🇿 · Turkmenistan 🇹🇲</li>
              <li>• Mongolia 🇲🇳</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border border-amber-500 p-6 rounded-xl">
          <h3 className="text-amber-300 text-sm">{t.greyLionTag}</h3>
          <p className="text-lg font-bold mt-1">{t.greyLionTitle}</p>
          <p className="text-xs text-zinc-200 mt-2">{t.greyLionDesc}</p>
        </div>

        <footer className="mt-10 p-4 border-t border-zinc-800 text-xs text-zinc-400">
          <p>{t.contactTitle}</p>
          <p>{t.contactText}</p>
        </footer>
      </section>
    </main>
  );
}
