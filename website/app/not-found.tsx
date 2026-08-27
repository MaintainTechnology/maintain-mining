import Link from "next/link";
import { Icon } from "@/components/Icon";

export default function NotFound() {
  return (
    <main className="grid min-h-[70dvh] place-content-center bg-shaft px-4 text-center">
      <p className="font-mono text-sm text-white/55">404</p>
      <h1 className="mt-3 text-4xl md:text-5xl">Nothing at this heading</h1>
      <p className="mx-auto mt-4 max-w-[40ch] text-white/72">
        The page you were after is not on this site. Head back to solid ground.
      </p>
      <Link
        href="/"
        className="mx-auto mt-8 inline-flex items-center gap-2 rounded-brand bg-amber px-6 py-3 font-semibold text-pit active:translate-y-px"
      >
        Back to the homepage
        <Icon name="i-arrow-right" className="h-4 w-4" />
      </Link>
    </main>
  );
}
