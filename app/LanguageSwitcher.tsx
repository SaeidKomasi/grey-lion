"use client";

type Props = {
  selected: string;
  onChange: (code: any) => void;
};

const languages = [
  { code: "fa", label: "فارسی" },
  { code: "en", label: "English" },
  { code: "pl", label: "Polski" },
  { code: "az", label: "AZ" },
  { code: "ka", label: "KA" },
  { code: "kz", label: "KZ" },
  { code: "tm", label: "TM" },
  { code: "mn", label: "MN" },
  { code: "ru", label: "RU" },
  { code: "it", label: "Italiano" },
  { code: "bg", label: "Български" },
  { code: "ro", label: "Română" },
  { code: "es", label: "Español" },
  { code: "nl", label: "Nederlands" },
];

export default function LanguageSwitcher({ selected, onChange }: Props) {
  return (
    <select
      className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-sm outline-none"
      value={selected}
      onChange={(e) => onChange(e.target.value)}
    >
      {languages.map((lng) => (
        <option key={lng.code} value={lng.code}>
          {lng.label}
        </option>
      ))}
    </select>
  );
}
