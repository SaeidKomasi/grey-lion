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
          📂 Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          <div className="rounded-2xl border border-zinc-800 p-4">
            <p className="text-lg uppercase tracking-wide text-amber-400">
              Lever Chain System
            </p>
            <p className="text-sm mt-2">
              سیستم زنجیره اهرمی برای افزایش نیرو
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 p-4">
            <p className="text-lg uppercase tracking-wide text-amber-400">
              Composite Pulleys
            </p>
            <p className="text-sm mt-2">
              قرقره‌های مرکب — سیستم ضرب نیرو
            </p>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section id="vision" className="py-20 px-6 border-t border-zinc-800">
        <p className="text-xs tracking-widest uppercase text-amber-400 opacity-80 text-center">
          Vision
        </p>
        <p className="text-center text-sm mx-auto max-w-[90%] leading-7 mt-4 text-zinc-200">
          هدف ساخت سیستم‌های مکانیکی برای ذخیره انرژی هوشمند، تبدیل انرژی
          خطی به دورانی و تولید برق پایدار.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 border-t border-zinc-800">
        <h2 className="text-3xl font-semibold text-center text-amber-300">
          ارتباط مستقیم
        </h2>
        <div className="text-center mt-6 space-y-2">
          <a
            href="mailto:saeedkomasy@gmail.com"
            className="hover:text-amber-300 block"
          >
            ✉ saeedkomasy@gmail.com
          </a>
          <a
            href="mailto:saeid.komasi.inventor@gmail.com"
            className="hover:text-amber-300 block"
          >
            ✉ saeid.komasi.inventor@gmail.com
          </a>
        </div>
      </section>
    </main>
  );
}
