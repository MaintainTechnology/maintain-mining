import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { RiseWords } from "@/components/RiseWords";
import { WordReveal } from "@/components/WordReveal";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "How Maintain Mining watches the fleet, scores risk and hands findings to planners as work orders.",
};

export default function PlatformPage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-white/10 bg-shaft">
        <div className="absolute inset-0" aria-hidden>
          <Image
            src="https://images.unsplash.com/photo-1603479147545-1ae6bc737e48?auto=format&fit=crop&w=2400&q=75"
            alt=""
            fill
            priority
            sizes="100vw"
            className="photo-muted object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-shaft via-shaft/85 to-shaft/40" />
          <div className="absolute inset-0 bg-linear-to-t from-shaft via-transparent to-shaft/70" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
          <RiseWords
            text="The platform, end to end"
            className="max-w-[18ch] text-4xl md:text-6xl"
          />
          <p
            className="rise mt-6 max-w-[54ch] text-lg text-white/72"
            style={{ "--rise-delay": "360ms" } as React.CSSProperties}
          >
            One model listens to the operation and one risk picture reaches
            every person who acts on it. Here is how the pieces fit.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10 bg-pit py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <Reveal>
              <Icon name="i-speed" className="h-8 w-8 text-steel-bright" />
            </Reveal>
            <WordReveal
              text="Condition monitoring without the calendar"
              className="mt-4 max-w-[20ch] text-3xl md:text-4xl"
            />
            <Reveal delay={0.12}>
              <p className="mt-5 max-w-[54ch] text-white/72">
                Scheduled inspection samples an asset a few times a year. The
                model reads its vibration, temperature and load signatures
                continuously, so drift shows up when it starts, not when the
                calendar comes around.
              </p>
            </Reveal>
          </div>
          <Reveal
            delay={0.1}
            className="photo-frame relative aspect-4/3 overflow-hidden rounded-panel border border-white/10"
          >
            <Image
              src="https://images.unsplash.com/photo-1766934697091-9c2c803b05d6?auto=format&fit=crop&w=1600&q=80"
              alt="Illuminated pathway through a rough-hewn mine tunnel"
              fill
              // This is the page's LCP element â€” it sits high enough to be in the
              // first viewport on a laptop, so it must not be lazy-loaded.
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="photo-muted object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="border-b border-white/10 bg-pit pb-20 md:pb-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <Reveal className="photo-frame relative order-last aspect-4/3 overflow-hidden rounded-panel border border-white/10 lg:order-first">
            <Image
              src="https://images.unsplash.com/photo-1709489662983-3674d790b224?auto=format&fit=crop&w=1600&q=80"
              alt="Haul truck working a dirt haul road"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="photo-muted object-cover"
            />
          </Reveal>
          <div>
            <Reveal>
              <Icon name="i-chart" className="h-8 w-8 text-steel-bright" />
            </Reveal>
            <WordReveal
              text="Risk scoring that sets the schedule"
              className="mt-4 max-w-[20ch] text-3xl md:text-4xl"
            />
            <Reveal delay={0.12}>
              <p className="mt-5 max-w-[54ch] text-white/72">
                Every asset on site carries a current failure-risk score. The
                maintenance plan follows the scores, so crews spend their hours
                on the machines most likely to stop the operation.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-shaft py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-[60ch]">
            <Reveal>
              <Icon name="i-network" className="h-8 w-8 text-steel-bright" />
            </Reveal>
            <WordReveal
              text="Multi-channel by design"
              className="mt-4 max-w-[22ch] text-3xl md:text-4xl"
            />
            <Reveal delay={0.12}>
              <p className="mt-5 text-white/72">
                The same findings reach the control room, the weekly report and
                your own systems through a streaming API. This site ships with
                an assistant endpoint built on that surface; it activates when
                an API key is configured.
              </p>
            </Reveal>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <ChannelCard
              icon="i-cpu"
              title="Product UI"
              body="Live risk picture for the control room and planners."
              delay={0}
            />
            <ChannelCard
              icon="i-clipboard"
              title="Reports"
              body="Branded findings and summaries, written to be scheduled."
              delay={0.07}
            />
            <ChannelCard
              icon="i-network"
              title="API"
              body="Streaming access for your CMMS and your own tooling."
              delay={0.14}
            />
          </div>
        </div>
      </section>

      <section className="bg-pit">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 md:py-28">
          <WordReveal
            text="See it against your own fleet"
            className="mx-auto max-w-[20ch] text-3xl md:text-5xl"
          />
          <Reveal delay={0.12}>
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

function ChannelCard({
  icon,
  title,
  body,
  delay,
}: {
  icon: "i-cpu" | "i-clipboard" | "i-network";
  title: string;
  body: string;
  delay: number;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="card-lift relative h-full rounded-panel border border-white/10 bg-pit-3 p-6">
        <Icon name={icon} className="h-6 w-6 text-steel-bright" />
        <h3 className="mt-3 text-lg">{title}</h3>
        <p className="mt-2 text-sm text-white/72">{body}</p>
      </div>
    </Reveal>
  );
}
