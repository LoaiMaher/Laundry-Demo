import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500 text-white text-lg font-bold">
              L
            </div>
            <span className="text-lg font-semibold">FreshFlow Laundry</span>
          </div>

          {/* Nav */}
          <nav className="hidden gap-6 text-sm font-medium md:flex">
            <button className="hover:text-blue-600">Services</button>
            <button className="hover:text-blue-600">Eco Laundry</button>
            <button className="hover:text-blue-600">Pricing</button>
            <button className="hover:text-blue-600">Contact</button>
          </nav>

          {/* CTA */}
          <button className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
            Download App
          </button>
        </div>
      </header>

      {/* Hero */}
      <main className="mx-auto max-w-6xl px-4 py-12">
        <section className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <p className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
              Eco‑friendly • Pickup & Delivery
            </p>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Laundry & dry cleaning,
              <span className="text-blue-600"> done for you.</span>
            </h1>

            <p className="text-sm text-slate-600 sm:text-base">
              Schedule a pickup in seconds and enjoy hotel‑grade cleaning with
              gentle, eco‑friendly detergents.
            </p>

            <div className="flex flex-wrap gap-3">
              <button className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">
                Book a pickup
              </button>
              <button className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 hover:border-slate-400">
                View services
              </button>
            </div>

            <div className="flex flex-wrap gap-6 pt-2 text-xs text-slate-500 sm:text-sm">
              <span>⭐ 4.8 rating from 2,500+ customers</span>
              <span>🌿 100% eco detergents</span>
            </div>
          </div>

          {/* Simple “stats card” on the right */}
          <div className="rounded-3xl bg-gradient-to-br from-blue-100 via-sky-50 to-emerald-50 p-6 shadow-lg">
            <h2 className="mb-4 text-sm font-semibold text-slate-700">
              Time saved per month
            </h2>
            <div className="flex items-end justify-between">
              <div className="space-y-3">
                <p className="text-4xl font-bold text-blue-700">+16 hrs</p>
                <p className="text-xs text-slate-600">
                  Based on an average of 3 laundry loads per week.
                </p>
              </div>
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-inner">
                <span className="text-xs font-semibold text-slate-600 text-center">
                  Turn laundry day
                  <br />
                  into free time.
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
