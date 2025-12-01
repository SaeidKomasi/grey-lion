"use client";

import { useState } from "react";
import Image from "next/image";

type Lang = "fa" | "en" | "pl";

const TEXT = {
  fa: {
    companyTag: "شرکت حمل‌ونقل بین‌المللی",
    companyTitle1: "SAEID4061 SP. Z O.O.",
    companyTitle2: "حمل‌ونقل جاده‌ای اروپا – خاورمیانه",
    companyDesc:
      "شرکت SAEID4061 SP. Z O.O. یک شرکت حمل‌ونقل بین‌المللی مستقر در لهستان است که روی مسیرهای اروپا ↔ خاورمیانه تمرکز دارد. از برنامه‌ریزی مسیر و تشریفات گمرکی تا رهگیری محموله و تحویل نهایی، همه چیز زیر یک مدیریت انجام می‌شود.",
    servicesTitle: "خدمات اصلی",
    routesTitle: "مسیرهای فعال حمل‌ونقل بین‌المللی",
    greyLionTag: "GREY LION – POWER & PRECISION",
    greyLionTitle: "Saeid Komasi – Engineering & Inventions",
    greyLionDesc:
      "در بخش Grey Lion ایده‌ها و اختراعات مکانیکی معرفی می‌شوند؛ از سیستم‌های زنجیره اهرمی و قرقره‌های مرکب تا نیروگاه‌های مکانیکی ۵۰۰ مگاواتی. این قسمت بیشتر جنبهٔ شخصی، تحقیقاتی و R&D دارد.",
    contactTitle: "تماس برای همکاری و قرارداد",
    contactText:
      "برای حمل‌ونقل بین‌المللی، همکاری در پروژه‌های انرژی و یا مذاکره درباره اختراعات ثبت‌شده، مستقیماً با مدیریت شرکت در تماس باشید.",
  },
  en: {
    companyTag: "International Road Transport",
    companyTitle1: "SAEID4061 SP. Z O.O.",
    companyTitle2: "European–Middle East Road Transport",
    companyDesc:
      "SAEID4061 SP. Z O.O. is an international road transport company based in Poland, focused on EU ↔ Middle East corridors. From route planning and customs documentation to real–time tracking and final delivery, everything is coordinated under one management.",
    servicesTitle: "Core Services",
    routesTitle: "Active International Transport Corridors",
    greyLionTag: "GREY LION – POWER & PRECISION",
    greyLionTitle: "Saeid Komasi – Engineering & Inventions",
    greyLionDesc:
      "The Grey Lion section presents mechanical inventions and concepts: lever–chain systems, composite pulleys and mechanical power–plant ideas up to 500 MW. This area is focused on R&D and long–term innovation.",
    contactTitle: "Contact for Cooperation & Contracts",
    contactText:
      "For international transport, energy projects or licensing of registered inventions, please contact the company management directly.",
  },
  pl: {
    companyTag: "Międzynarodowy transport drogowy",
    companyTitle1: "SAEID4061 SP. Z O.O.",
    companyTitle2: "Transport drogowy Europa – Bliski Wschód",
    companyDesc:
      "SAEID4061 SP. Z O.O. to spółka transportu drogowego z siedzibą w Polsce, skoncentrowana na korytarzach UE ↔ Bliski Wschód. Od planowania trasy i dokumentów celnych po monitorowanie ładunku i dostawę końcową – wszystko odbywa się pod jedną kontrolą.",
    servicesTitle: "Główne usługi",
    routesTitle: "Aktywne korytarze transportu międzynarodowego",
    greyLionTag: "GREY LION – POWER & PRECISION",
    greyLionTitle: "Saeid Komasi – Inżynieria i wynalazki",
    greyLionDesc:
      "Sekcja Grey Lion prezentuje projekty i wynalazki mechaniczne: systemy dźwigniowe, złożone systemy linowo–bębnowe oraz koncepcję elektrowni mechanicznych do 500 MW. Obszar ukierunkowany na R&D i innowacje długoterminowe.",
    contactTitle: "Kontakt w sprawie współpracy i umów",
    contactText:
      "W sprawie transportu międzynarodowego, projektów energetycznych lub licencji na wynalazki prosimy o bezpośredni kontakt z zarządem spółki.",
  },
} satisfies Record<Lang, any>;

export default function Home() {
  const [lang, setLang] = useState<Lang>("fa");
  const t = TEXT[lang];

  return (
    <main className="min-h-screen w-full bg-black text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-zinc-900 bg-zinc-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9 overflow-hidden rounded-full border border-sky-500/60 bg-black">
              <Image
                src="/saeid4061-logo.png" // اگر jpg هست اینجا پسوند رو عوض کن
                alt="SAEID4061 Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-[10px] uppercase tracking-[0.18em] text-sky-400">
                SAEID4061 SP. Z O.O.
              </span>
              <span className="text-xs text-zinc-300">
                International Transport & Grey Lion Lab
              </span>
            </div>
          </div>

          {/* Language switcher */}
          <div className="flex items-center gap-2 text-xs">
            <span className="hidden text-zinc-400 sm:inline">Language:</span>
            <select
              className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-100"
              value={lang}
              onChange={(e) => setLang(e.target.value as Lang)}
            >
              <option value="fa">فارسی</option>
              <option value="en">English</option>
              <option value="pl">Polski</option>
            </select>
          </div>
        </div>
      </header>

      {/* COMPANY SECTION */}
      <section
        id="transport"
        className="border-b border-zinc-900 bg-gradient-to-b from-sky-950 via-slate-950 to-black"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 lg:flex-row lg:items-center">
          {/* Left */}
          <div className="flex-1 space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">
              {t.companyTag}
            </p>
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              {t.companyTitle1}
              <span className="block text-sky-300">{t.companyTitle2}</span>
            </h1>

            <p className="max-w-xl text-sm leading-relaxed text-zinc-200">
              {t.companyDesc}
            </p>

            <div className="grid gap-4 text-sm sm:grid-cols-2">
              {/* خدمات / Core services */}
              <div className="rounded-2xl border border-sky-900/60 bg-sky-950/40 p-4">
                <h3 className="mb-1 text-sm font-semibold text-sky-300">
                  {t.servicesTitle}
                </h3>
                <ul className="space-y-1 text-xs text-zinc-200">
                  <li>• Transport drogowy towarów – PKD 49.41.Z</li>
                  <li>• FTL / LTL – long & medium distance</li>
                  <li>• TIR / CMR, koordynacja dokumentów granicznych</li>
                  <li>• Doradztwo trasy i kosztów dla stałych klientów</li>
                </ul>
              </div>

              {/* مسیرها / Routes */}
              <div className="rounded-2xl border border-sky-900/60 bg-slate-950/60 p-4">
                <h3 className="mb-1 text-sm font-semibold text-sky-300">
                  {t.routesTitle}
                </h3>
                <ul className="space-y-1 text-xs text-zinc-200">
                  <li>• European Union 🇪🇺 ↔ Poland 🇵🇱 (central hub)</li>
                  <li>• Germany, Netherlands, Belgium, France, Italy</li>
                  <li>• Türkiye 🇹🇷 ↔ Iran 🇮🇷 (main gateway)</li>
                  <li>• Azerbaijan 🇦🇿</li>
                  <li>• Georgia 🇬🇪</li>
                  <li>• Kazakhstan 🇰🇿</li>
                  <li>• Turkmenistan 🇹🇲</li>
                  <li>• Mongolia 🇲🇳</li>
                </ul>
              </div>
            </div>

            <div className="grid gap-2 text-xs text-zinc-300">
              <div>
                KRS: <span className="font-mono">0001065392</span> · NIP:{" "}
                <span className="font-mono">5372677546</span> · REGON:{" "}
                <span className="font-mono">526744160</span>
              </div>
              <div>Adres: Orzechowa 32/1, 21-500 Biała Podlaska, Poland</div>
              <div>
                E-mail:{" "}
                <a
                  href="mailto:saeedkomasy@gmail.com"
                  className="text-sky-300 underline-offset-2 hover:underline"
                >
                  saeedkomasy@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Right – logo big */}
          <div className="flex flex-1 items-center justify-center">
            <div className="relative h-56 w-56 sm:h-72 sm:w-72 lg:h-80 lg:w-80">
              <div className="absolute -inset-4 rounded-full bg-sky-500/10 blur-2xl" />
              <div className="relative h-full w-full overflow-hidden rounded-full border border-sky-600/70 bg-black shadow-[0_0_40px_rgba(56,189,248,0.6)]">
                <Image
                  src="/saeid4061-logo.png"
                  alt="SAEID4061 Transport Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GREY LION SECTION */}
      <section
        id="grey-lion"
        className="border-b border-zinc-900 bg-gradient-to-b from-black via-zinc-950 to-black"
      >
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="mb-10 space-y-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
              {t.greyLionTag}
            </p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              {t.greyLionTitle}
            </h2>
            <p className="mx-auto max-w-3xl text-sm leading-relaxed text-zinc-300">
              {t.greyLionDesc}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-amber-500/40 bg-zinc-950/70 p-5">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
                PROJECT 01
              </p>
              <h3 className="text-lg font-semibold text-amber-300">
                Lever Chain System
              </h3>
              <p className="mt-2 text-sm text-zinc-200">
                سیستم زنجیره اهرمی برای افزایش گشتاور و تبدیل حرکت رفت و برگشتی
                به دوران پیوسته؛ طراحی شده برای استفاده در نیروگاه‌های مکانیکی
                با توان بالا.
              </p>
            </article>

            <article className="rounded-2xl border border-amber-500/40 bg-zinc-950/70 p-5">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
                PROJECT 02
              </p>
              <h3 className="text-lg font-semibold text-amber-300">
                Composite Pulley Design
              </h3>
              <p className="mt-2 text-sm text-zinc-200">
                طراحی قرقره‌های مرکب برای ضرب نیرو و تبدیل حرکت خطی به دورانی،
                مناسب برای درام‌ها، سیستم‌های بالابر و تبدیل انرژی مکانیکی.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-zinc-900 bg-black">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white">
              {t.contactTitle}
            </h3>
            <p className="mt-2 max-w-xl text-sm text-zinc-300">
              {t.contactText}
            </p>
          </div>
          <div className="space-y-1 text-sm text-zinc-200">
            <p>
              E-mail:{" "}
              <a
                href="mailto:saeid.komasi.inventor@gmail.com"
                className="text-sky-400 underline-offset-2 hover:underline"
              >
                saeid.komasi.inventor@gmail.com
              </a>
            </p>
            <p>
              Phone (PL):{" "}
              <span className="font-mono text-zinc-100">+48 881 004 737</span>
            </p>
            <p>Adres: Orzechowa 32/1, 21-500 Biała Podlaska, Poland</p>
          </div>
        </div>

        <div className="border-t border-zinc-900 py-4 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} SAEID4061 SP. Z O.O. · Grey Lion Studio
        </div>
      </section>
    </main>
  );
}
