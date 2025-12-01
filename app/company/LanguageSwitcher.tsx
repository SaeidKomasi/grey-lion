"use client";
import { useState } from "react";

export default function LanguageSwitcher() {
  const [lang, setLang] = useState("fa");

  const languages = [
    { code: "fa", label: "فارسی" },
    { code: "en", label: "English" },
    { code: "pl", label: "Polski" },
    { code: "az", label: "AZ" },
    { code: "ka", label: "KA" }, // Georgian
    { code: "kz", label: "KZ" }, // Kazakhstan
    { code: "tm", label: "TM" }, // Turkmenistan
    { code: "mn", label: "MN" }, // Mongolia
    { code: "ru", label: "RU" }, // Russia

    // 🔥 زبان‌های اضافه شده جدید
    { code: "it", label: "Italiano" }, // ایتالیایی
    { code: "es", label: "Español" }, // اسپانیایی
    { code: "nl", label: "Nederlands" }, // هلندی
    { code: "bg", label: "Български" }, // بلغاری
    { code: "ro", label: "Română" } // رومانی
  ];

  return (
    <select
      value={lang}
      onChange={(e) => setLang(e.target.value)}
      style={{
        background:"#111", color:"#fff",
        padding:"10px 18px", borderRadius:"10px",
        border:"1px solid #444", fontSize:"16px"
      }}
    >
      {languages.map(l => (
        <option key={l.code} value={l.code}>
          {l.label}
        </option>
      ))}
    </select>
  );
}
