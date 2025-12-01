import Image from "next/image";

const translations:any = {
  fa:{ title:"درباره شرکت", brand:"SAEID4061 SP. Z O.O.",
      desc:"شرکت بین‌المللی حمل‌ونقل جاده‌ای...",
      services:["حمل‌ونقل CMR/TIR","اسناد SENT/EPD/EORI",
                "EU ⇆ ME ⇆ Asia","Transit Consulting"] },

  en:{ title:"Company Overview", brand:"SAEID4061 SP. Z O.O.",
      desc:"International road freight & corridor logistics...",
      services:["International Freight CMR/TIR","SENT / EPD / EORI Docs",
                "EU⇆ME⇆Asia","Transit Route Consulting"] },

  pl:{ title:"O Firmie", brand:"SAEID4061 SP. Z O.O.",
      desc:"Międzynarodowy transport drogowy...",
      services:["Transport CMR/TIR","Dokumenty SENT/EPD/EORI",
                "EU⇆ME⇆Azja","Doradztwo Tranzytowe"] },

  az:{ title:"Şirkət Haqqında", brand:"SAEID4061 SP. Z O.O.",
      desc:"Beynəlxalq avtomobil daşımaları...",
      services:["CMR/TIR Daşımaları","SENT / EPD / EORI",
                "Avropa ⇆ ME ⇆ Asiya","Tranzt Məsləhət"] },

  ka:{ title:"კომპანია", brand:"SAEID4061 SP. Z O.O.",
      desc:"საერთაშორისო სატვირთო გადაზიდვები...",
      services:["CMR/TIR","SENT/EPD/EORI","EU⇆ME⇆Asia","Transit Consulting"] },

  kz:{ title:"Компания", brand:"SAEID4061 SP. Z O.O.",
      desc:"Халықаралық жүк тасымалы...",
      services:["CMR/TIR","SENT/EPD/EORI","EU⇆ME⇆Asia","Transit Кеңес"] },

  tm:{ title:"Kompaniýa", brand:"SAEID4061 SP. Z O.O.",
      desc:"Halkara ýük daşama hyzmatlary...",
      services:["CMR/TIR","SENT/EPD/EORI","EU⇆ME⇆Asia","Transit Maslahat"] },

  mn:{ title:"Компанийн Танилцуулга", brand:"SAEID4061 SP. Z O.O.",
      desc:"Олон улсын авто тээвэр...",
      services:["CMR/TIR","SENT/EPD/EORI","EU⇆ME⇆Asia","Transit Consulting"] },

  ru:{ title:"О Компании", brand:"SAEID4061 SP. Z O.O.",
      desc:"Международные автоперевозки...",
      services:["CMR/TIR","SENT/EPD/EORI","EU⇆ME⇆Азия","Транзит Консалтинг"] },

  it:{ title:"Azienda", brand:"SAEID4061 SP. Z O.O.",
      desc:"Trasporto stradale internazionale...",
      services:["CMR/TIR","Documenti SENT/EPD/EORI",
                "EU⇆ME⇆Asia","Consulenza Transito"] },

  bg:{ title:"За Компанията", brand:"SAEID4061 SP. Z O.O.",
      desc:"Международни товарни превози...",
      services:["CMR/TIR","SENT/EPD/EORI",
                "EU⇆ME⇆Азия","Транзит Консултиране"] },

  ro:{ title:"Despre Companie", brand:"SAEID4061 SP. Z O.O.",
      desc:"Transport rutier internațional...",
      services:["CMR/TIR","SENT/EPD/EORI",
                "EU⇆ME⇆Asia","Consultanță Tranzit"] },

  es:{ title:"Sobre la Empresa", brand:"SAEID4061 SP. Z O.O.",
      desc:"Transporte internacional por carretera...",
      services:["CMR/TIR","SENT/EPD/EORI",
                "EU⇆ME⇆Asia","Consultoría de Tránsito"] },

  nl:{ title:"Over het Bedrijf", brand:"SAEID4061 SP. Z O.O.",
      desc:"Internationaal wegvervoer...",
      services:["CMR/TIR","SENT/EPD/EORI",
                "EU⇆ME⇆Azië","Transit Consulting"] }
};

export default function CompanyPage(){
const lang = typeof window !== "undefined" ? 
   localStorage.getItem("lang")||"fa":"fa";
const t = translations[lang];

return(
<div style={{padding:30,color:"white"}}>
  <Image src="/saeid4061-logo.jpg" alt="logo" width={90} height={90}/>
  <h1>{t.brand}</h1>
  <h3>{t.title}</h3>
  <p>{t.desc}</p>

  <h3>Services / خدمات</h3>
  <ul>
   {t.services.map((i:any)=><li key={i}>{i}</li>)}
  </ul>

  <h3>Contact</h3>
  <p>Telegram: @Saeid4061</p>
  <p>WhatsApp: +48 881 004 737</p>
</div>
)}
