"use client";

type Props = {
  lang: string;
  onChange: (code: string) => void;
};

export default function LanguageSwitcher({ lang, onChange }: Props) {
  const languages = [
    { code: "fa", label: "فارسی" },
    { code: "en", label: "English" },
    { code: "pl", label: "Polski" },
    { code: "az", label: "AZ" },          // Azerbaijan
    { code: "ka", label: "KA" },          // Georgia
    { code: "kz", label: "KZ" },          // Kazakhstan
    { code: "tm", label: "TM" },          // Turkmenistan
    { code: "mn", label: "MN" },          // Mongolia
    { code: "ru", label: "RU" },          // Russia
    { code: "it", label: "Italiano" },    // Italy
    { code: "es", label: "Español" },     // Spain
    { code: "nl", label: "Nederlands" },  // Netherlands
    { code: "bg", label: "Български" },   // Bulgaria
    { code: "ro", label: "Română" }       // Romania
  ];

  return (
    <select
      value={lang}
      onChange={(e) => onChange(e.target.value)}
      style={{
        background: "#111",
        color: "#fff",
        padding: "10px 18px",
        borderRadius: "10px",
        border: "1px solid #444",
        fontSize: "16px",
      }}
    >
      {languages.map((l) => (
        <option key={l.code} value={l.code}>
          {l.label}
        </option>
      ))}
    </select>
  );
}
