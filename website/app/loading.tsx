export default function Loading() {
  return (
    <main className="min-h-[70dvh] bg-shaft" aria-busy>
      <div className="mx-auto max-w-7xl animate-pulse px-4 py-24 sm:px-6">
        <div className="h-4 w-40 rounded bg-white/10" />
        <div className="mt-6 h-14 w-2/3 rounded bg-white/10" />
        <div className="mt-4 h-6 w-1/2 rounded bg-white/10" />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <div className="h-44 rounded-panel bg-white/5" />
          <div className="h-44 rounded-panel bg-white/5" />
          <div className="h-44 rounded-panel bg-white/5" />
        </div>
      </div>
    </main>
  );
}
