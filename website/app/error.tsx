"use client";

export default function ErrorBoundary({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="grid min-h-[70dvh] place-content-center bg-shaft px-4 text-center">
      <h1 className="text-4xl md:text-5xl">Something broke on our side</h1>
      <p className="mx-auto mt-4 max-w-[40ch] text-white/72">
        The page hit an error while rendering. Try again; if it keeps
        happening, email accounts@maintain.com.au.
      </p>
      <button
        onClick={reset}
        className="mx-auto mt-8 inline-flex items-center rounded-brand bg-amber px-6 py-3 font-semibold text-pit active:translate-y-px"
      >
        Try again
      </button>
    </main>
  );
}
