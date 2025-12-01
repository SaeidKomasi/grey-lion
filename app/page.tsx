// app/page.tsx
import Link from 'next/link'

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* نرم‌کنندهٔ پس‌زمینه / Glow */}
      <div className="hero-glow" />

      {/* HERO */}
      <section className="mx-auto flex min-h-[70vh] max-w-5xl flex-col justify-center px-4 py-16">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-amber-300/80">
          Engineering • Energy • Mechanics
        </p>

        <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
          <span className="inline-flex items-center gap-3">
            <span className="text-4xl sm:text-5xl">🦁</span>
            Grey Lion
          </span>
          <span className="block text-zinc-300">
            — <span className="text-white">Power &amp; Precision</span>
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-sm sm:text-base text-zinc-300 leading-relaxed">
          سیستم‌های مکانیکی با گشتاور بسیار بالا برای تولید برق و انتقال نیرو.{' '}
          طراحی و توسعه توسط{' '}
          <span className="font-semibold text-amber-300">Saeid Komasi</span>، با
          تمرکز روی زنجیرهٔ اهرم‌ها، قرقره‌های مرکب و درام‌های هوشمند که
          حرکت خطی را به دوران پیوسته تبدیل می‌کنند.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="rounded-full bg-amber-400 px-6 py-2 text-sm font-semibold text-black shadow-lg shadow-amber-500/40 hover:bg-amber-300 transition-colors"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-zinc-700 px-6 py-2 text-sm font-semibold text-zinc-100 hover:border-amber-300 hover:text-amber-200 transition-colors"
          >
            Contact &amp; Partnerships
          </Link>
        </div>

        {/* سه کارت کوتاه */}
        <div className="mt-10 grid gap-4 text-xs text-zinc-400 sm:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-4 backdrop-blur">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-amber-300">
              500 MW Concept
            </p>
            <p className="mt-1 text-xs text-zinc-200">
              Power-plant based on lever-chain system with composite pulleys و
              درام‌های هوشمند برای تولید برق پایدار.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-4 backdrop-blur">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-amber-300">
              Mechanical Multiplier
            </p>
            <p className="mt-1 text-xs text-zinc-200">
              سیستم ضرب نیرو با تلفات بسیار کم؛ مناسب برای ژنراتورها،
              پمپ‌های صنعتی و سیستم‌های کلاچ سنگین.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-4 backdrop-blur">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-amber-300">
              Patent-Ready
            </p>
            <p className="mt-1 text-xs text-zinc-200">
              ثبت اختراع در لهستان و آماده برای لایسنس بین‌المللی، همکاری
              صنعتی و جذب سرمایه‌گذار استراتژیک.
            </p>
          </div>
        </div>
      </section>

      {/* PREVIEW پروژه‌ها روی هوم */}
      <section
        id="projects"
        className="border-t border-zinc-900 bg-gradient-to-b from-black via-zinc-950 to-black"
      >
        <div className="mx-auto max-w-5xl px-4 py-12">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-white">
              Featured Projects
            </h2>
            <Link
              href="/projects"
              className="text-xs font-medium text-amber-300 hover:text-amber-200"
            >
              View all →
            </Link>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <article className="group rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 hover:border-amber-400/70 transition-colors">
              <h3 className="text-sm font-semibold text-zinc-50 group-hover:text-amber-200">
                Lever Chain System
              </h3>
              <p className="mt-2 text-xs text-zinc-300 leading-relaxed">
                سیستم زنجیره‌ای اهرم‌ها برای چند برابر کردن نیروی ورودی با
                تلفات بسیار پایین؛ مناسب برای تولید برق پیوسته و گشتاور
                فوق‌العاده بالا.
              </p>
            </article>

            <article className="group rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 hover:border-amber-400/70 transition-colors">
              <h3 className="text-sm font-semibold text-zinc-50 group-hover:text-amber-200">
                Composite Pulley Powertrain
              </h3>
              <p className="mt-2 text-xs text-zinc-300 leading-relaxed">
                قرقره‌های مرکب با کابل فولادی و درام‌های دوطرفه که حرکت خطی
                کابین را به دوران یکنواخت برای ژنراتور و گیربکس تبدیل می‌کند.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* VISION کوتاه روی هوم */}
      <section id="vision" className="border-t border-zinc-900 bg-black">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <h2 className="text-xl sm:text-2xl font-semibold text-white">
            Vision — Why Grey Lion?
          </h2>
          <p className="mt-4 text-sm text-zinc-300 leading-relaxed">
            هدف، ساخت نسل جدید نیروگاه‌های مکانیکی است که با استفاده از
            معماری اهرم‌ها و قرقره‌های مرکب، انرژی را با کمترین تلفات به برق
            پایدار تبدیل کنند. تمرکز روی کشورها و مناطقی است که مشکل تامین
            انرژی دارند، اما امکان ساخت سیستم‌های مکانیکی مقاوم برای آن‌ها
            وجود دارد.
          </p>
        </div>
      </section>
    </main>
  )
}
