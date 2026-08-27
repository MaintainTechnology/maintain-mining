import type { Metadata } from "next";
import Image from "next/image";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { RiseWords } from "@/components/RiseWords";
import { WordReveal } from "@/components/WordReveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk to the Maintain Mining team about your fleet and plant.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-shaft">
        <div className="absolute inset-0" aria-hidden>
          <Image
            src="https://images.unsplash.com/photo-1582280871722-424e91cbee8b?auto=format&fit=crop&w=2400&q=75"
            alt=""
            fill
            priority
            sizes="100vw"
            className="photo-muted object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-shaft via-shaft/85 to-shaft/45" />
          <div className="absolute inset-0 bg-linear-to-t from-shaft via-transparent to-shaft/70" />
        </div>
        <div className="relative mx-auto grid min-h-[70dvh] max-w-7xl content-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[7fr_5fr]">
          <div>
            <RiseWords
              text="Talk to the team"
              className="max-w-[14ch] text-4xl md:text-6xl"
            />
            <p
              className="rise mt-6 max-w-[48ch] text-lg text-white/72"
              style={{ "--rise-delay": "300ms" } as React.CSSProperties}
            >
              Tell us about your fleet, your plant and what keeps stopping
              them. We read every message.
            </p>
            <a
              href="mailto:accounts@maintain.com.au"
              className="rise mt-9 inline-flex items-center gap-2 rounded-brand bg-amber px-7 py-3.5 font-semibold text-pit transition-[box-shadow,transform] duration-200 ease-(--ease-out) hover:shadow-(--glow-amber) active:translate-y-px"
              style={{ "--rise-delay": "420ms" } as React.CSSProperties}
            >
              <Icon name="i-mail" className="h-4 w-4" />
              Email the team
            </a>
          </div>
          <div
            className="rise grid content-center gap-4 rounded-panel border border-white/10 bg-pit-3 p-8 text-white/72"
            style={{ "--rise-delay": "240ms" } as React.CSSProperties}
          >
            <p className="inline-flex items-center gap-3">
              <Icon name="i-mail" className="h-5 w-5 text-steel-bright" />
              accounts@maintain.com.au
            </p>
            <p className="inline-flex items-center gap-3">
              <Icon name="i-pin" className="h-5 w-5 text-steel-bright" />
              PO Box 447, Coorparoo, QLD 4151
            </p>
            <p className="mt-2 text-sm text-white/55">
              Maintain Mining, part of the Maintain group.
              {/* TODO: confirm legal entity + ABN before external use */}
            </p>
          </div>
        </div>
      </section>

      {/* What happens next. Deliberately describes the approach only — PRODUCT.md
          forbids invented commercial facts, so there are no response times,
          terms or commitments stated here. */}
      <section className="relative overflow-hidden border-t border-white/10 bg-pit py-20 md:py-28">
        <div
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-2/5 opacity-40 lg:block"
          aria-hidden
        >
          <Image
            src="/brand/graphics/gradient-portrait.jpg"
            alt=""
            fill
            sizes="40vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0 bg-linear-to-r from-pit to-transparent"
            aria-hidden
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <WordReveal
            text="What happens next"
            className="max-w-[18ch] text-3xl md:text-4xl"
          />
          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            <Step
              index="01"
              title="You describe the site"
              body="The fleet, the plant, and which machines keep stopping the operation. Rough is fine — we are listening for where the pain already is."
              delay={0}
            />
            <Step
              index="02"
              title="We look at what you record"
              body="Most sites already collect more than they read: existing sensors, historian data, and whatever your CMMS holds about past failures."
              delay={0.07}
            />
            <Step
              index="03"
              title="We show you the model"
              body="Run against your own assets, not a demo dataset, so you can judge the findings against machines your crews actually know."
              delay={0.14}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function Step({
  index,
  title,
  body,
  delay,
}: {
  index: string;
  title: string;
  body: string;
  delay: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="border-t border-white/10 pt-6">
        <span
          aria-hidden
          className="font-mono text-xs tracking-[0.2em] text-steel"
        >
          {index}
        </span>
        <h2 className="mt-4 text-2xl">{title}</h2>
        <p className="mt-3 text-white/72">{body}</p>
      </div>
    </Reveal>
  );
}
