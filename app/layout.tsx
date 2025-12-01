// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Grey Lion — Power & Precision',
  description:
    'High-torque mechanical energy systems by Saeid Komasi — lever chains, composite pulleys, and smart drums.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-zinc-100 antialiased">
        <div className="min-h-screen flex flex-col">
          {/* HEADER / NAVBAR */}
          <header className="border-b border-zinc-800/80 bg-gradient-to-r from-zinc-950 via-black to-zinc-950">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl">🦁</span>
                <div className="leading-tight">
                  <div className="text-sm sm:text-base font-semibold tracking-tight">
                    Grey Lion
                  </div>
                  <div className="text-[11px] text-zinc-400">
                    Power &amp; Precision
                  </div>
                </div>
              </Link>

              {/* Nav links */}
              <nav className="flex items-center gap-4 text-xs sm:text-sm text-zinc-300">
                <Link
                  href="/projects"
                  className="hover:text-amber-300 transition-colors"
                >
                  Projects
                </Link>
                <Link
                  href="/vision"
                  className="hover:text-amber-300 transition-colors"
                >
                  Vision
                </Link>
                <Link
                  href="/contact"
                  className="hover:text-amber-300 transition-colors"
                >
                  Contact
                </Link>
              </nav>
            </div>
          </header>

          {/* MAIN CONTENT */}
          <main className="flex-1">{children}</main>

          {/* FOOTER */}
          <footer className="border-t border-zinc-900 bg-black">
            <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-4 text-[11px] text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
              <div>
                © {new Date().getFullYear()} Saeid Komasi — Grey Lion Authority
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <span>Built with Next.js + TypeScript + TailwindCSS</span>
                <span className="hidden sm:inline">•</span>
                <span>Engineering Focused, Strong, Accurate.</span>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
