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
        <h2 className="text-3xl font-semibold text-amber-300 mb-10 text-center">
          📂 پروژه‌ها
        </h2>

        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          <div className="rounded-2xl border border-zinc-800 p-4">
            <p className="text-lg tracking-wide text-amber-400 uppercase">
              Lever Chain System
            </p>
            <p className="text-sm mt-2">
              سیستم زنجیره اهرمی برای افزایش نیرو
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 p-4">
            <p className="text-lg tracking-wide text-amber-400 uppercase">
              Composite Pulleys
            </p>
            <p className="text-sm mt-2">
              قرقره‌های مرکب – سیستم ضرب نیرو
            </p>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section id="vision" className="py-20 px-6 border-t border-zinc-800">
        <p className="text-xs tracking-widest uppercase text-amber-400 opacity-80 text-center mb-4">
          Vision
        </p>
        <p className="text-center text-sm mx-auto max-w-[90%] leading-7 md:text-lg">
          هدف: ساخت سیستم‌های مکانیکی برای ذخیره هوشمند انرژی خطی به دورانی و تولید برق پایدار
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 border-t border-zinc-800">
        <h2 className="text-3xl font-semibold text-amber-300 mb-6 text-center">
          ارتباط با من
        </h2>
        <p className="text-sm text-center text-zinc-300 mb-4">
          برای همکاری صنعتی، سرمایه‌گذاری و توسعه سیستم‌های تولید برق از ایمیل‌های زیر استفاده کنید:
        </p>

        <div className="flex flex-col gap-2 text-sm items-center">
          <a
            href="mailto:saeedkomasy@gmail.com"
            className="hover:text-amber-300"
          >
            📧 saeedkomasy@gmail.com
          </a>
          <a
            href="mailto:saeid.komasi.inventor@gmail.com"
            className="hover:text-amber-300"
          >
            📧 saeid.komasi.inventor@gmail.com
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900 py-8 text-center text-xs opacity-60">
        <p>© {new Date().getFullYear()} Saeid Komasi – Grey Lion Authority</p>
        <p>Built with Next.js, TypeScript &amp; Tailwind CSS on Vercel</p>
      </footer>
    </main>
  );
}
