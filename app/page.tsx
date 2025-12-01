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
 "شرکت SAEID4061 SP. Z O.O. یک شرکت حمل‌ونقل بین‌المللی در لهستان است که روی کریدورهای اروپا ↔ خاورمیانه ↔ آسیای میانه فعالیت می‌کند. تمام مراحل حمل از مسیر، اسناد مرزی، SENT, CMR, TIR, EPD تا تحویل نهایی زیر یک مدیریت انجام می‌شود.",
 servicesTitle: "خدمات اصلی",
 routesTitle: "مسیرهای فعال بین‌المللی",
 greyLionTag: "GREY LION – قدرت و دقت",
 greyLionTitle: "Saeid Komasi – بخش اختراعات و R&D",
 greyLionDesc:
 "در بخش Grey Lion سیستم زنجیره اهرمی، قرقره‌های مرکب و طرح نیروگاه مکانیکی ۵۰۰ مگاوات توسعه داده می‌شود. تمرکز اصلی بر نوآوری، افزایش راندمان و تولید توان است.",
 contactTitle: "ارتباط با مدیریت",
 contactText:
 "برای قرارداد حمل، همکاری یا مذاکره سرمایه‌گذاری، از طریق واتساپ یا ایمیل تماس بگیرید.",
 },
 en: {
 companyTag: "International Road Transport",
 companyTitle1: "SAEID4061 SP. Z O.O.",
 companyTitle2: "Europe – Middle East – Central Asia Freight",
 companyDesc:
 "SAEID4061 SP. Z O.O. operates EU ↔ Middle East ↔ Central Asia logistics corridors, delivering complete freight flow: route planning, customs docs, SENT/EPD, CMR/TIR & final delivery — under one management.",
 servicesTitle: "Core Services",
 routesTitle: "Active Transport Corridors",
 greyLionTag: "GREY LION – POWER & PRECISION",
 greyLionTitle: "Saeid Komasi – Engineering & Development",
 greyLionDesc:
 "Grey Lion division develops Lever-Chain mechanical amplification, Composite Pulley systems & 500MW mechanical plant architecture. Focus: R&D and industrial implementation.",
 contactTitle: "Business Contact",
 contactText:
 "For freight booking, partnership or investment inquiry — WhatsApp or email directly.",
 },
 pl: {
 companyTag: "Międzynarodowy transport drogowy",
 companyTitle1: "SAEID4061 SP. Z O.O.",
 companyTitle2: "Europa – Bliski Wschód – Azja Centralna",
 companyDesc:
 "SAEID4061 SP. Z O.O. to polski operator transportu na trasach UE ↔ ME ↔ CA. Oferujemy pełną obsługę dokumentacji SENT/EPD, CMR/TIR oraz dostawę końcową door-to-door.",
 servicesTitle: "Usługi główne",
 routesTitle: "Korytarze transportowe",
 greyLionTag: "GREY LION – SIŁA I PRECYZJA",
 greyLionTitle: "Saeid Komasi – Wynalazki i Inżynieria",
 greyLionDesc:
 "Grey Lion rozwija system dźwigniowo-łańcuchowy, kompozytowe koła linowe oraz koncepcję elektrowni mechanicznej 500MW.",
 contactTitle: "Kontakt biznesowy",
 contactText:
 "Zlecenia transportowe i współpraca — przez WhatsApp lub e-mail.",
 },
 az: {
 companyTag: "Beynəlxalq yükdaşıma",
 companyTitle1: "SAEID4061 SP. Z O.O.",
 companyTitle2: "Avropa – Yaxın Şərq – Mərkəzi Asiya",
 companyDesc:
 "SAEID4061 SP. Z O.O. Avropa ↔ Yaxın Şərq ↔ Mərkəzi Asiya yük dəhlizləri üzrə fəaliyyət göstərir. SENT/EPD, CMR/TIR və çatdırılma tam idarə olunur.",
 servicesTitle: "Əsas xidmətlər",
 routesTitle: "Aktiv marşrutlar",
 greyLionTag: "GREY LION – GÜC VƏ DƏQIQLIK",
 greyLionTitle: "Saeid Komasi – Mühəndislik və İxtira",
 greyLionDesc:
 "Grey Lion Lever-Chain güc çoxaltma sistemi və 500MW mexaniki stansiya üzərində işləyir.",
 contactTitle: "Əlaqə",
 contactText: "Daşıma və əməkdaşlıq üçün WhatsApp və e-poçt.",
 },
 ka: {
 companyTag: "საერთაშორისო ტრანსპორტი",
 companyTitle1: "SAEID4061 SP. Z O.O.",
 companyTitle2: "ევროპა – ახლო აღმოსავლეთი – ცენტრალური აზია",
 companyDesc:
 "ოპერატორი ევროკავშირი↔აღმოსავლეთი↔ცენტრალური აზიის სატრანსპორტო დერეფნებში. დოკუმენტაცია, მკაცრი კონტროლი და მიტანა ერთიანად.",
 servicesTitle: "სერვისები",
 routesTitle: "ქორიidors",
 greyLionTag: "GREY LION – ძალა და სიზუსტე",
 greyLionTitle: "Saeid Komasi – ინჟინერია და კვლევა",
 greyLionDesc:
 "Grey Lion ქმნის ლევერ-ჯაჭვის სისტემას და 500MW მექანიკურ სადგურს.",
 contactTitle: "კონტაქტი",
 contactText: "WhatsApp/ელფოსტა — პირდაპირ ხელმძღვანელზე.",
 },
 kk: {
 companyTag: "Халықаралық жүк тасымалы",
 companyTitle1: "SAEID4061 SP. Z O.O.",
 companyTitle2: "Еуропа – Таяу Шығыс – Орталық Азия",
 companyDesc:
 "SENT/EPD, CMR/TIR және толық жеткізу — бір басқаруда.",
 servicesTitle: "Қызметтер",
 routesTitle: "Бағыттар",
 greyLionTag: "GREY LION – ҚУАТ & ДӘЛДІК",
 greyLionTitle: "Saeid Komasi – Инженерия",
 greyLionDesc: "500MW механикалық генерация жобасы.",
 contactTitle: "Байланыс",
 contactText: "WhatsApp/E-mail арқылы.",
 },
 tk: {
 companyTag: "Halkara ýük daşama",
 companyTitle1: "SAEID4061 SP. Z O.O.",
 companyTitle2: "Ýewropa – Merkezi Aziýa – Gündogar",
 companyDesc:
 "SENT/EPD, CMR/TIR we eltip bermek doly gözegçilikde.",
 servicesTitle: "Hyzmatlar",
 routesTitle: "Ugrlar",
 greyLionTag: "GREY LION – GÜÇ & TAKYKLYK",
 greyLionTitle: "Saeid Komasi – Tehnologiýa",
 greyLionDesc: "500MW mehaniki güýç ulgamy.",
 contactTitle: "Habarlaşmak",
 contactText: "WhatsApp / Email → göni boss.",
 },
 mn: {
 companyTag: "Олон улсын тээвэр",
 companyTitle1: "SAEID4061 SP. Z O.O.",
 companyTitle2: "Европ – Дорнод – Төв Ази",
 companyDesc: "CMR/TIR, SENT/EPD, хүргэлт — нэг удирдлагаар.",
 servicesTitle: "Үйлчилгээ",
 routesTitle: "Зам маршрутууд",
 greyLionTag: "GREY LION – ХҮЧ НАРИЙВЧ",
 greyLionTitle: "Saeid Komasi – R&D",
 greyLionDesc: "500MW механик эрчим хүчний систем.",
 contactTitle: "Холбогдох",
 contactText: "WhatsApp + Email ашиглана уу.",
 },
 ru: {
 companyTag: "Международные автоперевозки",
 companyTitle1: "SAEID4061 SP. Z O.O.",
 companyTitle2: "Европа – Ближний Восток – Центральная Азия",
 companyDesc:
 "Полный цикл перевозок: SENT/EPD, CMR/TIR, трекинг и доставка.",
 servicesTitle: "Услуги",
 routesTitle: "Маршруты",
 greyLionTag: "GREY LION – МОЩНОСТЬ & ТОЧНОСТЬ",
 greyLionTitle: "Saeid Komasi – Инженерия & Разработка",
 greyLionDesc: "500MW механический проект энерго-генерации.",
 contactTitle: "Контакты",
 contactText: "WhatsApp или Email.",
 },
};

export default function Home() {
 const [lang, setLang] = useState<Lang>("fa");
 const t = TEXT[lang];

 return (
 <main className="min-h-screen bg-black text-white">
 <header className="border-b border-zinc-800 bg-black/80 backdrop-blur sticky top-0">
 <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
 <div className="flex items-center gap-2">
 <Image src="/saeid4061-logo.jpg" alt="logo" width={38} height={38} className="rounded-full border border-sky-400"/>
 <span className="text-xs text-sky-300 uppercase tracking-widest">SAEID4061 · Grey Lion</span>
 </div>

 <select value={lang} onChange={e=>setLang(e.target.value as Lang)}
 className="bg-zinc-900 border border-zinc-700 text-xs rounded-full px-3 py-1">
 <option value="fa">فارسی</option><option value="en">English</option><option value="pl">Polski</option>
 <option value="az">AZ</option><option value="ka">KA</option><option value="kk">KZ</option>
 <option value="tk">TM</option><option value="mn">MN</option><option value="ru">RU</option>
 </select>
 </div>
 </header>

 <section className="max-w-6xl mx-auto px-5 py-10 space-y-8">
 <h1 className="text-3xl font-bold">{t.companyTitle1}</h1>
 <h2 className="text-sky-300">{t.companyTitle2}</h2>
 <p className="text-sm text-zinc-200 leading-relaxed max-w-xl">{t.companyDesc}</p>

 <div className="grid sm:grid-cols-2 gap-5">
 <div className="border border-sky-900 p-4 rounded-xl">
 <h3 className="text-sky-300 text-sm mb-2">{t.servicesTitle}</h3>
 <ul className="text-xs space-y-1">
 <li>• International Freight CMR / TIR</li>
 <li>• SENT / EPD / EORI Docs</li>
 <li>• EU–ME–Central Asia Corridor</li>
 <li>• Transit Route Consulting</li>
 </ul>
 </div>

 <div className="border border-sky-900 p-4 rounded-xl">
 <h3 className="text-sky-300 text-sm mb-2">{t.routesTitle}</h3>
 <ul className="text-xs space-y-1">
 <li>• Poland 🇵🇱 ↔ EU</li>
 <li>• Türkiye 🇹🇷 ↔ Iran 🇮🇷</li>
 <li>• Azerbaijan 🇦🇿 · Georgia 🇬🇪</li>
 <li>• Kazakhstan 🇰🇿 · Turkmenistan 🇹🇲</li>
 <li>• Mongolia 🇲🇳</li>
 </ul>
 </div>
 </div>

 <div className="border border-amber-500 p-5 rounded-xl">
 <h3 className="text-amber-300 text-sm">{t.greyLionTag}</h3>
 <p className="font-bold text-lg">{t.greyLionTitle}</p>
 <p className="text-xs text-zinc-200">{t.greyLionDesc}</p>
 </div>

 <footer className="border-t border-zinc-800 pt-4 text-xs text-zinc-300">
 <p>{t.contactTitle}</p>
 <p>
 WhatsApp:{" "}
 <a href="https://wa.me/48881004737"
 className="text-sky-300 underline underline-offset-2">
 +48 881 004 737
 </a>{" "}

 · Email:
 <a href="mailto:saeedkomasy@gmail.com"
 className="text-sky-300 underline underline-offset-2 ml-1">
 saeedkomasy@gmail.com
 </a>
 </p>
 </footer>
 </section>
 </main>
 );
}
