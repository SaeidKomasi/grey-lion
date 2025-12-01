"use client";
import { useState, useEffect } from "react";

const languages = [
 { code:"fa",  label:"فارسی" },
 { code:"en",  label:"English" },
 { code:"pl",  label:"Polski" },
 { code:"az",  label:"Azərbaycan" },
 { code:"ka",  label:"ქართული" },
 { code:"kz",  label:"Қазақ" },
 { code:"tm",  label:"Türkmen" },
 { code:"mn",  label:"Монгол" },
 { code:"ru",  label:"Русский" },
 { code:"it",  label:"Italiano" },
 { code:"bg",  label:"Български" },
 { code:"ro",  label:"Română" },
 { code:"es",  label:"Español" },
 { code:"nl",  label:"Nederlands" }
];

export default function LanguageSwitcher(){
 const [lang,setLang]=useState("fa");

 useEffect(()=>{
   const saved = localStorage.getItem("lang");
   if(saved) setLang(saved);
 },[]);

 const changeLang = (code:string)=>{
   setLang(code);
   localStorage.setItem("lang",code);
   location.reload();
 };

 return (
   <select 
     value={lang}
     onChange={(e)=>changeLang(e.target.value)}
     style={{padding:8,borderRadius:6,marginLeft:10}}
   >
     {languages.map(l=>(
       <option key={l.code} value={l.code}>{l.label}</option>
     ))}
   </select>
 );
}
