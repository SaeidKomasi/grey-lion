"use client";

import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="max-w-xl text-center space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-gray-700/60 bg-gray-900/60 px-4 py-1 text-xs uppercase tracking-[0.2em] text-gray-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span>Grey Lion System</span>
        </div>

        <h1 className="text-4xl font-semibold sm:text-5xl md:text-6xl">
          Power in
          <span className="block bg-gradient-to-r from-gray-100 via-gray-300 to-gray-400 bg-clip-text text-transparent">
            Perfect Silence
          </span>
        </h1>

        <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
          A force that rises silent – but strikes forward like thunder.
          Precision. Discipline. Evolution.
        </p>

        <button className="mt-2 inline-flex items-center justify-center rounded-full border border-gray-700 bg-gray-50/5 px-8 py-3 text-sm font-medium tracking-wide text-gray-100 hover:bg-gray-50/10 hover:border-gray-500 transition">
          ENTER SYSTEM
        </button>
      </div>
    </main>
  );
}
