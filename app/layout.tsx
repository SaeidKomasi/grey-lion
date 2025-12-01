import "./globals.css"
import Image from "next/image"

export const metadata = {
  title: "SAEID4061 SP.Z O.O. — GREY LION",
  description: "International Transport — Europe ↔ Middle East ↔ Central Asia",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa">
      <body style={{ background: "#000", color: "#fff", fontFamily: "sans-serif" }}>

        {/* 🔷 هدر سایت */}
        <header style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
          padding: "18px 30px",
          borderBottom: "1px solid rgba(255,255,255,0.15)",
        }}>

          <Image
            src="/saeid4061-logo.jpg"   // مسیر صحیح بدون public
            alt="SAEID4061 LOGO"
            width={56}
            height={56}
            style={{ borderRadius: "50%", objectFit: "cover" }}
          />

          <div>
            <h2 style={{ fontSize: "18px", margin: 0, letterSpacing: "1px" }}>
              SAEID4061 · GREY LION
            </h2>
          </div>

        </header>

        {/* 🔥 محتوا */}
        <main style={{ padding: "30px", maxWidth: "900px", margin:"auto" }}>
          {children}
        </main>

        {/* فوتر سایت */}
        <footer style={{
          marginTop: "60px",
          padding: "25px",
          textAlign: "center",
          opacity: .6,
          borderTop: "1px solid rgba(255,255,255,0.12)"
        }}>
          © {new Date().getFullYear()} SAEID4061 SP. Z O.O. | All Rights Reserved
        </footer>

      </body>
    </html>
  );
}
