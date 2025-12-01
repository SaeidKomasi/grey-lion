import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "SAEID4061 SP. Z O.O.",
  description: "International Freight & Transport Company",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa">
      <body className="bg-black text-white">

        {/* Navigation */}
        <header className="flex items-center justify-between p-4 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <Image
              src="/saeid4061-logo.jpg"
              width={60}
              height={60}
              alt="SAEID4061 LOGO"
              className="rounded-full object-cover"
            />
            <div>
              <h1 className="text-lg font-bold tracking-wide">SAEID4061 · GREY LION</h1>
            </div>
          </div>

          {/* Language Switch */}
          <select className="bg-gray-800 text-white p-2 rounded-md border border-gray-600">
            <option>فارسی</option>
            <option>English</option>
            <option>Polski</option>
            <option>Türkçe</option>
            <option>русский</option>
            <option>Deutsch</option>
            <option>العربية</option>
            <option>Italiano</option>
            <option>Français</option>
          </select>
        </header>

        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
