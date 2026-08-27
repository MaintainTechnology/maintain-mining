import Link from "next/link";
import { Icon } from "./Icon";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-shaft/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-4 sm:px-6">
        <Link href="/" aria-label="Maintain Mining home" className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element -- brand SVG with its own fills */}
          <img
            src="/brand/logo/wordmark-on-dark.svg"
            alt="Maintain Mining"
            className="h-7 w-auto"
          />
        </Link>
        <nav className="ml-auto flex items-center gap-6 text-sm font-medium">
          <Link
            href="/platform"
            className="nav-link text-white/72 transition-colors duration-200 ease-(--ease-out) hover:text-white"
          >
            Platform
          </Link>
          <Link
            href="/about"
            className="nav-link text-white/72 transition-colors duration-200 ease-(--ease-out) hover:text-white"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="nav-link text-white/72 transition-colors duration-200 ease-(--ease-out) hover:text-white"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-pit-2">
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "linear-gradient(180deg, rgba(14,15,16,.75), rgba(14,15,16,.97)), url('/brand/graphics/mountain-forms-1.jpg') center bottom / cover no-repeat",
        }}
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr]">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element -- brand SVG with its own fills */}
          <img
            src="/brand/logo/wordmark-on-dark.svg"
            alt="Maintain Mining"
            className="h-7 w-auto"
          />
          <p className="mt-4 max-w-[44ch] text-sm text-white/55">
            Maintain Mining, part of the Maintain group.
            {/* TODO: confirm legal entity + ABN for Maintain Mining before external use */}
          </p>
          <p className="mt-6 text-xs text-white/55">
            © 2026 Maintain group. All rights reserved.
          </p>
        </div>
        <div className="grid content-start gap-3 text-sm text-white/72">
          <nav aria-label="Footer" className="mb-2 flex flex-wrap gap-x-5 gap-y-2">
            <Link
              href="/platform"
              className="nav-link self-start transition-colors duration-200 ease-(--ease-out) hover:text-white"
            >
              Platform
            </Link>
            <Link
              href="/about"
              className="nav-link self-start transition-colors duration-200 ease-(--ease-out) hover:text-white"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="nav-link self-start transition-colors duration-200 ease-(--ease-out) hover:text-white"
            >
              Contact
            </Link>
          </nav>
          <a
            href="mailto:accounts@maintain.com.au"
            className="nav-link inline-flex items-center gap-2 self-start transition-colors duration-200 ease-(--ease-out) hover:text-white"
          >
            <Icon name="i-mail" className="h-4 w-4 text-steel-bright" />
            accounts@maintain.com.au
          </a>
          <span className="inline-flex items-center gap-2">
            <Icon name="i-pin" className="h-4 w-4 text-steel-bright" />
            PO Box 447, Coorparoo, QLD 4151
          </span>
        </div>
      </div>
    </footer>
  );
}
