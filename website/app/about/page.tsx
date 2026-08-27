import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { RiseWords } from "@/components/RiseWords";
import { WordReveal } from "@/components/WordReveal";
import { ParallaxImg } from "@/components/ParallaxImg";

export const metadata: Metadata = {
  title: "About",
  description:
    "Maintain Mining is the Maintain group's mining-sector brand: predictive maintenance built for the fleet, the plant and the pit.",
};

export default function AboutPage() {
  return (
    <main>
      {/* Arrival: the claim, plainly. The survey grid carries the brand; the
          amber on this surface is spent nowhere â€” the page saves it for the
          closing action. */}
      <section className="relative overflow-hidden border-b border-white/10 bg-shaft">
        <div className="absolute inset-0" aria-hidden>
          <Image
            src="https://images.unsplash.com/photo-1654461339621-11d5b7baa0d5?auto=format&fit=crop&w=2400&q=75"
            alt=""
            fill
            priority
            sizes="100vw"
            className="photo-muted object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-shaft via-shaft/85 to-shaft/40" />
          <div className="absolute inset-0 bg-linear-to-t from-shaft via-transparent to-shaft/70" />
        </div>
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
          <RiseWords
            text="Maintenance is a mining discipline"
            className="max-w-[16ch] text-4xl md:text-6xl"
          />
          <p
            className="rise mt-6 max-w-[54ch] text-lg text-white/72"
            style={{ "--rise-delay": "360ms" } as React.CSSProperties}
          >
            Ore moves because machines move. Maintain Mining exists so the
            machines keep moving: one model that listens to the operation and
            finds failure before failure finds the schedule.
          </p>
        </div>
      </section>

      {/* The ground itself: one wide breath of the world this is built for. */}
      <section className="border-b border-white/10 bg-pit" aria-hidden>
        <ParallaxImg
          src="https://images.unsplash.com/photo-1654461339694-128902c5c075?auto=format&fit=crop&w=2400&q=80"
          alt=""
          sizes="100vw"
          className="photo-frame h-[46dvh] min-h-72 md:h-[56dvh]"
        />
      </section>

      {/* Where the brand comes from. Product truth only: the group exists, the
          identity is documented in DESIGN.md â€” no founding dates, no invented
          history. */}
      <section className="border-b border-white/10 bg-pit py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <WordReveal
              text="Part of the Maintain group"
              className="max-w-[16ch] text-3xl md:text-5xl"
            />
            <Reveal delay={0.12}>
              <p className="mt-5 max-w-[54ch] text-white/72">
                The Maintain group builds maintenance intelligence, and
                Maintain Mining is its mining-sector brand. The same discipline
                runs through the family: read the asset continuously, write the
                finding like a work order, and let evidence set the schedule.
              </p>
              <p className="mt-4 max-w-[54ch] text-white/72">
                Even the identity comes from the machines. Graphite is the
                grayish black of the fleet; the one working accent is the
                safety amber painted on everything a crew must not miss.
              </p>
            </Reveal>
          </div>
          <Reveal
            delay={0.1}
            className="relative aspect-4/3 overflow-hidden rounded-panel border border-white/10"
          >
            <Image
              src="/brand/graphics/cover.jpg"
              alt="Wireframe terrain rendering from the Maintain Mining design system"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-linear-to-t from-pit/70 via-transparent to-transparent"
              aria-hidden
            />
          </Reveal>
        </div>
      </section>

      {/* What the work believes. Hairline columns, the site's spec-sheet grammar. */}
      <section className="border-b border-white/10 bg-shaft py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <WordReveal
            text="Three things we hold to"
            className="max-w-[18ch] text-3xl md:text-5xl"
          />
          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            <Principle
              index="01"
              icon="i-speed"
              title="Ahead of failure"
              body="A failure met early is a scheduled job. A failure met late is a stopped operation. Everything we build exists to move that meeting earlier."
              delay={0}
            />
            <Principle
              index="02"
              icon="i-clipboard"
              title="Evidence over opinion"
              body="A finding carries the asset, the signature that moved, and the recommended action. Severity is written in words, never in colour alone."
              delay={0.07}
            />
            <Principle
              index="03"
              icon="i-network"
              title="One truth per site"
              body="Control room, weekly report and CMMS read the same risk picture. When everyone sees one truth, the argument is about the work, not the data."
              delay={0.14}
            />
          </div>
        </div>
      </section>

      {/* The people the model answers to. Offset composition: photo with an
          overlapping panel â€” the one section on the page allowed to overlap. */}
      <section className="border-b border-white/10 bg-pit py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="relative">
            <Reveal className="photo-frame relative aspect-16/9 overflow-hidden rounded-panel border border-white/10 lg:mr-64">
              <Image
                src="https://images.unsplash.com/photo-1622645916455-aa13b87438ec?auto=format&fit=crop&w=1800&q=80"
                alt="Operator standing beside a haul truck"
                fill
                sizes="(min-width: 1024px) 70vw, 100vw"
                className="photo-muted object-cover"
              />
            </Reveal>
            <Reveal
              delay={0.15}
              className="mt-6 lg:absolute lg:top-1/2 lg:right-0 lg:mt-0 lg:w-96 lg:-translate-y-1/2"
            >
              <div className="rounded-panel border border-white/10 bg-pit-3 p-8 shadow-(--shadow-lg)">
                <Icon name="i-check" className="h-7 w-7 text-steel-bright" />
                <h2 className="mt-3 text-2xl">Built beside the crews</h2>
                <p className="mt-3 text-white/72">
                  The model is judged by the people who act on it. If a finding
                  does not help a fitter, a planner or a supervisor make a
                  better call, it is noise, and noise gets removed.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Closing: the page's amber, spent once, over the long way out of the
          tunnel. */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <ParallaxImg
            src="https://images.unsplash.com/photo-1736664030709-0c02b4447177?auto=format&fit=crop&w=2400&q=80"
            alt=""
            sizes="100vw"
            className="h-full"
          />
          <div className="absolute inset-0 bg-pit/80" aria-hidden />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 md:py-36">
          <WordReveal
            text="See what the model sees"
            className="mx-auto max-w-[16ch] text-3xl md:text-5xl"
          />
          <Reveal delay={0.12}>
            <p className="mx-auto mt-5 max-w-[44ch] text-white/72">
              Bring us your fleet and your plant, and judge the findings
              against machines your crews already know.
            </p>
            <Link
              href="/contact"
              className="group mt-9 inline-flex items-center gap-2 rounded-brand bg-amber px-7 py-3.5 font-semibold text-pit transition-[box-shadow,transform] duration-200 ease-(--ease-out) hover:shadow-(--glow-amber) active:translate-y-px"
            >
              Contact
              <Icon
                name="i-arrow-right"
                className="h-4 w-4 transition-transform duration-200 ease-(--ease-out) group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

function Principle({
  index,
  icon,
  title,
  body,
  delay,
}: {
  index: string;
  icon: "i-speed" | "i-clipboard" | "i-network";
  title: string;
  body: string;
  delay: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="border-t border-white/10 pt-6">
        <div className="flex items-center gap-3">
          <Icon name={icon} className="h-6 w-6 text-steel-bright" />
          <span
            aria-hidden
            className="font-mono text-xs tracking-[0.2em] text-steel"
          >
            {index}
          </span>
        </div>
        <h2 className="mt-4 text-2xl">{title}</h2>
        <p className="mt-3 text-white/72">{body}</p>
      </div>
    </Reveal>
  );
}
