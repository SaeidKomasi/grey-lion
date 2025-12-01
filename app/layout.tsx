import "./globals.css";
import LanguageSwitcher from "./company/LanguageSwitcher";

export const metadata = {
  title: "SAEID4061 • GREY LION",
  description: "International Transportation & Logistics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body style={{ background:"#000", color:"#fff", fontFamily:"sans-serif" }}>

        {/* 🔹 هدر سایت */}
        <header style={{
          display:"flex",
          justifyContent:"space-between",
          alignItems:"center",
          padding:"15px 30px",
          borderBottom:"1px solid #333"
        }}>
          <div style={{fontSize:"22px", fontWeight:"bold", color:"#66b2ff"}}>
            GREY LION • SAEID4061
          </div>

          {/* 🔴 منوی انتخاب زبان — اکنون ۱۴ زبان */}
          <LanguageSwitcher />
        </header>

        {/*  محتوای صفحات  */}
        <main style={{padding:"30px"}}>
          {children}
        </main>

      </body>
    </html>
  );
}
