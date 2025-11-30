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
        <h2 className="text-3xl font-semibold text-amber-300 mb-10 text-center">⚙ Projects</h2>

        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          <div className="rounded-2xl border border-zinc-700 p-4">
            <p className="text-lg tracking-wide text-amber-400 uppercase">Lever Chain System</p>
            <p className="mt-2 text-sm">سیستم زنجیره اهرمی برای افزایش نیرو</p>
          </div>

          <div className="rounded-2xl border border-zinc-700 p-4">
            <p className="text-lg tracking-wide text-amber-400 uppercase">Composite Pulleys</p>
            <p className="mt-2 text-sm">قرقره‌های مرکب – سیستم ضرب نیروی چند مرحله‌ای</p>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section id="vision" className="py-20 px-6 border-t border-zinc-800">
        <h2 className="text-3xl font-semibold text-amber-300 mb-10 text-center">🔭 Vision</h2>
        <p className="max-w-2xl mx-auto text-center text-zinc-300 leading-8">
          تولید نیروگاه‌ های مکانیکی با بازده بالا جهت تامین پایدار انرژی در آینده بشر.
          هدف نهایی: 500 مگاوات با سیستم اهرمی.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 border-t border-zinc-800">
        <h2 className="text-3xl font-semibold text-amber-300 mb-10 text-center">📩 Contact</h2>

        <div className="text-center space-y-3">
          <a href="mailto:saeedkomasy@gmail.com" className="hover:text-amber-300 text-lg">
            📧 saeedkomasy@gmail.com
          </a>
          <br/>
          <a href="mailto:saeid.komasi.inventor@gmail.com" className="hover:text-amber-300 text-lg">
            📨 saeid.komasi.inventor@gmail.com
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900 py-8 text-center text-xs opacity-50">
        © {new Date().getFullYear()}  Saeid Komasi — Grey Lion Authority
      </footer>
    </main>
  );
}
