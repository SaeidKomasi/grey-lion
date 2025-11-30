export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-zinc-100 flex flex-col">
      {/* Top Glow */}
      <div className="pointer-events-none fixed inset-x-0 top-0 h-40 bg-gradient-to-b from-amber-500/20 via-transparent to-transparent blur-3xl" />

      {/* Header */}
      <header className="w-full border-b border-zinc-800/70 bg-black/60 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🦁</span>
            <div className="leading-tight">
              <p className="text-sm uppercase tracking-[0.25em] text-amber-400">
                Grey Lion
              </p>
              <p className="text-xs text-zinc-400">
                Power &amp; Precision by Saeid Komasi
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
            <a href="#features" className="hover:text-amber-400 transition">
              Features
            </a>
            <a href="#projects" className="hover:text-amber-400 transition">
              Projects
            </a>
            <a href="#vision" className="hover:text-amber-400 transition">
              Vision
            </a>
            <a
              href="#contact"
              className="rounded-full border border-amber-400/70 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300 hover:bg-amber-500/20 transition"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Content */}
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-16 px-4 py-10 md:py-16">
        {/* Hero Section */}
        <section className="grid gap-10 md:grid-cols-[1.2fr,1fr] md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-amber-400/80">
              ENGINEERING · ENERGY · POWER SYSTEMS
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-50 md:text-5xl">
              Grey Lion —{" "}
              <span className="bg-gradient-to-r from-amber-300 via-amber-500 to-yellow-300 bg-clip-text text-transparent">
                Power &amp; Precision
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-400 md:text-base">
              هویت جدید برند مهندسی و اختراعات{" "}
              <span className="text-zinc-200">سعید کماسی</span>. تمرکز روی
              سیستم‌های مکانیکی، نیروگاه‌های اهرمی و راه‌حل‌های قدرتمند برای
              تولید و مدیریت انرژی با بازده بالا.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-amber-400/40 bg-amber-500/10 px-4 py-1 text-xs uppercase tracking-[0.25em] text-amber-300">
                500 MW CONCEPT
              </span>
              <span className="rounded-full border border-zinc-700 bg-zinc-900/60 px-4 py-1 text-xs text-zinc-300">
                Patent · Poland · UPRP
              </span>
            </div>
          </div>

          {/* Hero Card */}
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-amber-500/10 blur-3xl" />
            <div className="rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-950 to-black px-6 py-6 shadow-[0_0_40px_rgba(0,0,0,0.8)] md:px-8 md:py-7">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
                Grey Lion – Core Statement
              </p>
              <p className="mt-4 text-sm text-zinc-200">
                ما دنبال قدرت نمی‌رویم؛{" "}
                <span className="text-amber-300">ما قدرت را می‌سازیم.</span>
              </p>
              <p className="mt-2 text-xs text-zinc-400">
                طراحی سیستم‌هایی که نیرو را چند برابر می‌کنند، نه فقط آن را
                مصرف. هر پروژه یک گام به سمت آینده‌ای است که انرژی، محدودیت
                نباشد.
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3 text-xs text-zinc-300">
                <div className="rounded-xl border border-zinc-800 bg-zinc-950/80 px-3 py-3">
                  <p className="text-[0.65rem] uppercase tracking-[0.2em] text-zinc-500">
                    Focus
                  </p>
                  <p className="mt-1 text-xs">Mechanical Power Systems</p>
                </div>
                <div className="rounded-xl border border-zinc-800 bg-zinc-950/80 px-3 py-3">
                  <p className="text-[0.65rem] uppercase tracking-[0.2em] text-zinc-500">
                    Signature
                  </p>
                  <p className="mt-1 text-xs">Lever Chain · Composite Pulleys</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="space-y-4">
          <h2 className="text-lg font-semibold text-zinc-50 md:text-xl">
            ویژگی‌های هسته‌ای برند Grey Lion
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4">
              <p className="text-xs uppercase tracking-[0.25em] text-amber-400">
                Precision
              </p>
              <p className="mt-2 text-sm text-zinc-100">
                طراحی بر اساس محاسبات دقیق مکانیکی، نه حدس و آزمایش تصادفی.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4">
              <p className="text-xs uppercase tracking-[0.25em] text-amber-400">
                Power
              </p>
              <p className="mt-2 text-sm text-zinc-100">
                تمرکز روی گشتاور بالا، چندبرابرکننده‌ها و سیستم‌های تولید برق در
                مقیاس صنعتی.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4">
              <p className="text-xs uppercase tracking-[0.25em] text-amber-400">
                Responsibility
              </p>
              <p className="mt-2 text-sm text-zinc-100">
                هدف نهایی: تأمین انرژی پایدار و استفاده از آن برای ساخت مدرسه،
                درمان و آینده‌ی بهتر انسان‌ها.
              </p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="space-y-4">
          <h2 className="text-lg font-semibold text-zinc-50 md:text-xl">
            نمونه پروژه‌ها و ایده‌ها
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4">
              <p className="text-xs uppercase tracking-[0.25em] text-amber-400">
                Project · 500 MW
              </p>
              <p className="mt-2 text-sm font-medium text-zinc-100">
                نیروگاه ۵۰۰ مگاواتی با زنجیره اهرمی
              </p>
              <p className="mt-1 text-xs text-zinc-400">
                سیستم مکانیکی برای تبدیل حرکت خطی تقویت‌شده به چرخش پیوسته
                ژنراتور، با محوریت اهرم‌ها، درام‌ها و گیربکس‌های خاص.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4">
              <p className="text-xs uppercase tracking-[0.25em] text-amber-400">
                Project · Composite Pulleys
              </p>
              <p className="mt-2 text-sm font-medium text-zinc-100">
                قرقره‌های مرکب – سیستم ضرب نیرو
              </p>
              <p className="mt-1 text-xs text-zinc-400">
                ترکیب هوشمندانه قرقره‌ها برای چندبرابر کردن نیرو، مناسب
                بالابرها، سیستم‌های صنعتی و تبدیل انرژی حرکتی.
              </p>
            </div>
          </div>
        </section>

        {/* Vision / Quote */}
        <section id="vision" className="space-y-3 border-y border-zinc-800 py-6">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-400/80">
            Grey Lion · Vision
          </p>
          <p className="text-sm text-zinc-200 md:text-base">
            «شیر خاکستری فقط یک لوگو نیست؛ یک مسیر است. قدرت، وقتی ارزش دارد که
            برای ساختن انسان‌ها استفاده شود، نه کنترل آن‌ها.»
          </p>
        </section>

        {/* Contact */}
        <section id="contact" className="mb-10 space-y-3">
          <h2 className="text-lg font-semibold text-zinc-50 md:text-xl">
            ارتباط مستقیم
          </h2>
          <p className="text-sm text-zinc-400">
            برای سرمایه‌گذاری، همکاری صنعتی یا دریافت اطلاعات بیشتر درباره
            سیستم‌های مکانیکی و نیروگاه اهرمی، از ایمیل زیر استفاده کنید:
          </p>

          <div className="flex flex-col gap-2 text-sm">
            <a
              href="mailto:saeedkomasy@gmail.com"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-500/60 bg-amber-500/10 px-4 py-2 text-xs font-medium text-amber-200 hover:bg-amber-500/20 transition"
            >
              📧 saeedkomasy@gmail.com
            </a>
            <a
              href="mailto:saeid.komasi.inventor@gmail.com"
              className="inline-flex w-fit items-center gap-2 text-xs text-zinc-300 hover:text-amber-300 transition"
            >
              🧾 saeid.komasi.inventor@gmail.com
            </a>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-zinc-900 bg-black/80 py-4">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 text-[0.7rem] text-zinc-500 md:flex-row">
          <p>© {new Date().getFullYear()} Saeid Komasi · Grey Lion Authority</p>
          <p className="text-[0.65rem]">
            Built with Next.js, TypeScript &amp; Tailwind CSS on Vercel
          </p>
        </div>
      </footer>
    </main>
  );
}
