export default function Home() {
  return (
    <main className="min-h-dvh px-6 py-16">
      <h1 className="text-4xl font-semibold">Tailwind baseline OK</h1>
      <button className="mt-6 rounded-2xl px-5 py-3 bg-primary text-white
        shadow-[var(--shadow-skin1)] transition-transform duration-fast ease-standard
        hover:-translate-y-0.5 focus-visible:outline-none focus-visible:shadow-[var(--shadow-glowAccent)]">
        Test CTA
      </button>
    </main>
  );
}
