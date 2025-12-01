import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SAEID4061 SP. Z O.O. – International Transport & Saeid Komasi",
  description:
    "International road transportation | Europe–Asia corridor. WhatsApp: +48 881 004 737",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {/* هدر مشترک کل سایت */}
        <header className="border-b border-zinc-800">
          <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link
              href="/"
              className="font-semibold text-xs sm:text-sm tracking-wide text-sky-400"
            >
              GREY LION • SAEID4061 SP. Z O.O.
            </Link>

            <nav className="flex gap-4 text-[11px] sm:text-xs text-zinc-300">
              <Link href="/" className="hover:text-sky-300">
                Personal
              </Link>
              <Link href="/company" className="hover:text-sky-300">
                Company
              </Link>
            </nav>
          </div>
        </header>

        {/* محتوای صفحه‌ها */}
        <main className="max-w-5xl mx-auto px-4 py-8 sm:py-10">
          {children}
        </main>

        {/* فوتر مشترک */}
        <footer className="border-t border-zinc-800 text-[11px] sm:text-xs text-zinc-400 text-center py-3">
          © {new Date().getFullYear()} SAEID4061 SP. Z O.O. • WhatsApp: +48 881 004 737
        </footer>
      </body>
    </html>
  );
}
