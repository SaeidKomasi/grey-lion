import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "SAEID4061 · GREY LION",
  description: "International Transport · Europe · Middle East · Central Asia",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-black text-white">

        {/* ================= HEADER ================= */}
        <header className="w-full flex items-center justify-between px-6 py-3 border-b border-gray-700">
          
          {/* ===== Logo LEFT ===== */}
          <div className="flex items-center gap-3">
            <Image
              src="/saeid4061-logo.jpg"
              width={58}
              height={58}
              alt="SAEID4061 LOGO"
              className="rounded-full border border-sky-400 shadow-lg"
              priority
            />

            <div className="text-lg font-bold leading-5">
              SAEID4061 <span className="text-sky-400">· GREY LION</span>
            </div>
          </div>

          {/* ===== LANGUAGE SWITCH ===== */}
          <select
            className="bg-gray-900 p-2 rounded-md border border-gray-600 text-sm"
            onChange={(e) => window.location.href = e.target.value}
          >
            <option value="/">فارسی</option>
            <option value="/en">English</option>
            <option value="/ru">Русский</option>
            <option value="/tr">Türkçe</option>
            <option value="/de">Deutsch</option>
            <option value="/pl">Polski</option>
            <option value="/ar">العربية</option>
            <option value="/cn">中文</option>
            <option value="/in">हिन्दी</option>
          </select>
        </header>

        {/* ================= CONTENT (MAIN PAGES) ================= */}
        <main className="px-6 py-8 max-w-5xl mx-auto">{children}</main>

        {/* ================= FOOTER ================= */}
        <footer className="mt-10 border-t border-gray-800 py-6 text-center text-sm text-gray-400">
          <p>SAEID4061 SP. Z O.O. © All Rights Reserved</p>
          <p className="mt-1">
            WhatsApp:{" "}
            <Link className="text-sky-400" href="https://wa.me/48881004737" target="_blank">
              +48 881 004 737
            </Link>
          </p>
        </footer>

      </body>
    </html>
  );
}
