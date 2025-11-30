export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center">
        <h1 className="text-5xl md:text-6xl font-bold text-center">
          <span className="mr-3">🦁</span>
          Grey Lion — Power & Precision
        </h1>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="border-t border-zinc-800 py-16 px-6 max-w-4xl mx-auto space-y-6"
      >
        <h2 className="text-2xl font-semibold mb-6 text-amber-300">
          پروژه‌ها
        </h2>

        <div className="space-y-4 text-sm text-zinc-200">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4">
            <p className="text-xs uppercase tracking-[0.25em] text-amber-400/80">
              Lever Chain System
            </p>
            <p className="mt-2 text-base font-medium text-zinc-100">
              نیروگاه ۵۰۰ مگاواتی – سیستم زنجیره اهرمی برای افزایش نیرو
            </p>
            <p className="mt-1 text-xs text-zinc-400">
              طراحی برای تولید توان بالا با مصرف انرژی کنترل‌شده و فضای اشغال
              کم.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4">
            <p className="text-xs uppercase tracking-[0.25em] text-amber-400/80">
              Composite Pulleys
            </p>
            <p className="mt-2 text-base font-medium text-zinc-100">
              قرقره‌های مرکب – سیستم ضرب نیرو
            </p>
            <p className="mt-1 text-xs text-zinc-400">
              مجموعه قرقره‌ها برای چند برابر کردن نیروی ورودی و استفاده در
              سیستم‌های صنعتی سنگین.
            </p>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section
        id="vision"
        className="border-t border-zinc-800 py-16 px-6 max-w-4xl mx-auto space-y-4"
      >
        <p className="text-xs uppercase tracking-[0.25em] text-amber-400/80">
          Grey Lion — Vision
        </p>
        <p className="text-sm md:text-base text-zinc-200 leading-relaxed">
          شیر خاکستری نماد تعادل بین قدرت و دقت است؛ جایی که ایده‌های مهندسی
          تبدیل به راه‌حل‌های واقعی برای انرژی و صنعت می‌شوند.
        </p>
        <p className="text-sm md:text-base text-zinc-300/90">
          هدف، ساخت سیستم‌هایی است که هم برای انسان‌ها مفید باشند و هم از نظر
          مصرف انرژی و فضا بهینه عمل کنند.
        </p>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="border-t border-zinc-800 py-16 px-6 max-w-4xl mx-auto space-y-4 mb-10"
      >
        <h2 className="text-2xl font-semibold text-amber-300">ارتباط با من</h2>
        <p className="text-sm text-zinc-300">
          برای همکاری، سرمایه‌گذاری یا مذاکره صنعتی می‌توانید مستقیماً با من در
          تماس باشید:
        </p>

        <div className="flex flex-col gap-2 text-sm">
          <a
            href="mailto:saeedkomasy@gmail.com"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-500/60 bg-amber-500/10 px-4 py-1.5 text-xs text-amber-200 hover:bg-amber-500/20 transition"
          >
            📧 saeedkomasy@gmail.com
          </a>
          <a
            href="mailto:saeid.komasi.inventor@gmail.com"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-700 px-4 py-1.5 text-xs text-zinc-300 hover:border-amber-400 hover:text-amber-200 transition"
          >
            📨 saeid.komasi.inventor@gmail.com
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900 py-6 text-center text-[0.65rem] text-zinc-500">
        <p>
          © {new Date().getFullYear()} Saeid Komasi · Grey Lion Authority
        </p>
        <p>Built with Next.js, TypeScript & Tailwind CSS on Vercel</p>
      </footer>
    </main>
  );
}
