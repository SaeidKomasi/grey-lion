export default function Home() {
  return (
    <main className="min-h-screen w-full bg-black text-white">
      
      {/* HERO */}
      <section className="h-screen flex items-center justify-center">
        <h1 className="text-5xl md:text-6xl font-bold flex items-center gap-2">
          🦁 Grey Lion — Power & Precision
        </h1>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 px-6 border-t border-zinc-800">
        <h2 className="text-3xl font-semibold text-zinc-100 mb-10">پروژه‌ها</h2>
        
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-700 p-4">
            <p className="text-xs tracking-widest text-amber-400 uppercase">500MW Project</p>
            <p className="mt-2 text-sm">نیروگاه ۵۰۰ مگاواتی — سیستم زنجیره‌ای اهرمی برای تولید انرژی</p>
          </div>

          <div className="rounded-2xl border border-zinc-700 p-4">
            <p className="text-xs tracking-widest text-amber-400 uppercase">Composite Pulleys</p>
            <p className="mt-2 text-sm">قرقره‌های مرکب — سیستم ضرب نیرو</p>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section id="vision" className="py-20 px-6 border-t border-zinc-800">
        <p className="text-xs tracking-widest text-amber-400 uppercase opacity-80">Vision</p>
        <p className="text-sm w-full md:w-[90%] leading-7 mt-4 text-zinc-200">
          شیر خاکستری نماد یک لوگو نیست؛ یک مسیر است — ترکیب قدرت + دقت.
          آینده جاییست که انسان‌ها اشتباه را نمی‌ترسند؛ یاد می‌گیرند، بهتر می‌سازند، جلو می‌روند.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 border-t border-zinc-800">
        <h2 className="text-3xl font-semibold mb-6">ارتباط با ما</h2>
        <p className="text-sm text-zinc-300 mb-6">برای همکاری، سرمایه‌گذاری یا توسعه پروژه‌ها:</p>

        <div className="flex flex-col gap-3 text-sm">
          <a href="mailto:saeedkomasy@gmail.com" className="hover:text-amber-300">📩 saeedkomasy@gmail.com</a>
          <a href="mailto:saeid.komasi.inventor@gmail.com" className="hover:text-amber-300">📮 saeid.komasi.inventor@gmail.com</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900 py-8 text-center text-xs opacity-60">
        © {new Date().getFullYear()} Saeid Komasi — Grey Lion Authority  
        <br /> Built with Next.js + TypeScript + Tailwind CSS + Vercel
      </footer>

    </main>
  );
}
