export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      
      {/* HERO */}
      <section className="h-[60vh] flex flex-col justify-center items-center text-center gap-4">
        <h1 className="text-4xl sm:text-6xl font-bold flex items-center gap-3">
          🦁 Grey Lion — <span className="text-amber-300">Power & Precision</span>
        </h1>
        <p className="text-sm text-zinc-300">
          Engineering Focused. Strong. Accurate.
        </p>
      </section>

      {/* PROJECTS */}
      <section className="py-12 border-t border-zinc-800" id="projects">
        <h2 className="text-3xl font-bold text-center text-amber-400 mb-8">
          ⚙ Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">

          <div className="p-5 border border-zinc-700 rounded-xl">
            <h3 className="text-xl font-semibold text-amber-300">Lever Chain System</h3>
            <p className="text-sm mt-2 text-zinc-400">
              سیستم زنجیره اهرمی برای افزایش نیرو
            </p>
          </div>

          <div className="p-5 border border-zinc-700 rounded-xl">
            <h3 className="text-xl font-semibold text-amber-300">Composite Pulley Design</h3>
            <p className="text-sm mt-2 text-zinc-400">
              قرقره‌های مرکب — سیستم ضرب نیرو
            </p>
          </div>

        </div>
      </section>

      {/* VISION */}
      <section className="py-12 border-t border-zinc-800" id="vision">
        <h2 className="text-3xl font-bold text-center text-amber-400 mb-6">🚀 Vision</h2>
        <p className="max-w-2xl mx-auto text-center text-zinc-300 leading-7">
          هدف ما ساخت سیستم‌های مکانیکی برای ذخیره انرژی هوشمند،
          تبدیل انرژی خطی به دورانی و تولید برق پایدار است.
        </p>
      </section>

      {/* CONTACT */}
      <section className="py-12 border-t border-zinc-800" id="contact">
        <h2 className="text-3xl font-bold text-center text-amber-400 mb-6">📩 Contact</h2>
        <p className="text-center text-sm text-zinc-400 mb-4">
          برای همکاری صنعتی یا سرمایه‌گذاری، از طریق ایمیل‌های زیر ارتباط بگیرید:
        </p>

        <div className="flex flex-col items-center gap-3 text-amber-300">
          <a className="hover:underline" href="mailto:saeedkomasy@gmail.com">saeedkomasy@gmail.com</a>
          <a className="hover:underline" href="mailto:saeid.komasi.inventor@gmail.com">saeid.komasi.inventor@gmail.com</a>
        </div>
      </section>

    </main>
  );
}
