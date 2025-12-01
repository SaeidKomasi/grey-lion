"use client";
import { useState } from "react";
import { translations } from "./translations";

export default function Home() {

  const [lang, setLang] = useState("fa");

  return (
    <div style={{color:"white", padding:"30px"}}>

      {/* انتخاب زبان */}
      <select value={lang} onChange={(e)=>setLang(e.target.value)} style={{padding:8,marginBottom:15}}>
        {Object.keys(translations).map(l=>(
          <option key={l} value={l}>{l.toUpperCase()}</option>
        ))}
      </select>

      <h1 style={{fontSize:35}}>{translations[lang].title}</h1>
      <h3 style={{color:"#36A2F5"}}>{translations[lang].slogan}</h3>

      <p style={{marginTop:15,fontSize:17,lineHeight:"30px"}}>
        {translations[lang].about}
      </p>

      <a href="https://wa.me/48881004737" style={{color:"#00ffb7",marginTop:30,display:"block",fontSize:18}}>
        📞 {translations[lang].contact}
      </a>

      <a href="https://t.me/Saeid4061" style={{color:"#00acee",marginTop:10,display:"block",fontSize:18}}>
        Telegram: @Saeid4061
      </a>

    </div>
  );
}
