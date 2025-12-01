import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SAEID4061 SP. Z O.O. – International Transport & Saeid Komasi",
  description:
    "International road transport company SAEID4061 SP. Z O.O. and personal engineering projects by Saeid Komasi.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {/* top bar */}
        <header className="border-b border-zinc-800">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
            <Link href="/" className="flex flex-col">
              <span className="text-xs text-sky-400 tracking-wide">
                INTERNATIONAL TRANSPORT
              </span>
              <span className="text-sm font-semibold">
                SAEID4061 SP. Z O.O.
              </span>
            </Link>

            <nav className="flex items-center gap-5 text-xs sm:text-sm">
              <Link href="/" className="hover:text-sky-400">
                Grey Lion – Personal
              </Link>
              <Link href="/company" className="hover:text-sky-400">
                Company
              </Link>
            </nav>
          </div>
        </header>

        {/* page content */}
        <main className="mx-auto max-w-5xl px-4 py-10">{children}</main>

        {/* footer */}
        <footer className="border-t border-zinc-800">
          <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-4 text-xs text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
            <div>
              © {new Date().getFullYear()} SAEID4061 SP. Z O.O. • Biała
              Podlaska, Poland
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <span>WhatsApp: +48 881 004 737</span>
              <span>Mail: saeedkomasy@gmail.com</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
