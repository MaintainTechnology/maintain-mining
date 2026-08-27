import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { RiseWords } from "@/components/RiseWords";
import { WordReveal } from "@/components/WordReveal";
import { ProcessSticky } from "@/components/ProcessSticky";

export default function Home() {
  return (
    <main>
      {/* Hero: asymmetric split. The one amber element on this surface is the primary CTA.
          The ground is the mine itself — a muted-colour dragline panorama under a
          heavy charcoal scrim, with the survey grid drawn over the top. */}
      <section className="relative overflow-hidden border-b border-white/10 bg-shaft">
        <div className="absolute inset-0" aria-hidden>
          <Image
            src="https://images.unsplash.com/photo-1654461339456-66664ede67dd?auto=format&fit=crop&w=2400&q=75"
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
        <div className="relative mx-auto grid min-h-[88dvh] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[7fr_5fr] lg:gap-14">
          <div>
            {/* The hero cascade reads in priority order: headline, supporting
                copy, then the action. Pure CSS â€” see RiseWords. */}
            <RiseWords
              text="Maintenance, ahead of failure."
              className="text-5xl md:text-6xl lg:text-7xl"
            />
            <p
              className="rise mt-6 max-w-[46ch] text-lg text-white/72"
              style={{ "--rise-delay": "320ms" } as React.CSSProperties}
            >
              Predictive maintenance for mining operations. The model surfaces
              what scheduled inspection misses across the fleet, the plant and
              the pit.
            </p>
            <div
              className="rise mt-9 flex flex-wrap items-center gap-3"
              style={{ "--rise-delay": "440ms" } as React.CSSProperties}
            >
              <Link
                href="/platform"
                className="group inline-flex items-center gap-2 rounded-brand bg-amber px-6 py-3 font-semibold text-pit transition-[box-shadow,transform] duration-200 ease-(--ease-out) hover:shadow-(--glow-amber) active:translate-y-px"
              >
                See the platform
                <Icon
                  name="i-arrow-right"
                  className="h-4 w-4 transition-transform duration-200 ease-(--ease-out) group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-brand border border-white/10 px-6 py-3 font-semibold text-white transition-colors duration-200 ease-(--ease-out) hover:border-steel hover:text-steel-bright"
              >
                Contact
              </Link>
            </div>
          </div>
          <div
            className="photo-frame rise relative hidden aspect-4/3 overflow-hidden rounded-panel border border-white/10 lg:block"
            style={{ "--rise-delay": "180ms" } as React.CSSProperties}
          >
            <Image
              src="https://images.unsplash.com/photo-1523848309072-c199db53f137?auto=format&fit=crop&w=1600&q=80"
              alt="Excavators working the benches of an open-pit mine"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 0px"
              className="photo-muted object-cover"
            />
            <div
              className="absolute inset-0 bg-linear-to-t from-shaft/70 via-transparent to-shaft/30"
              aria-hidden
            />
          </div>
        </div>
      </section>

      {/* Capabilities: bento, five items, five cells, mixed materials. */}
      <section className="border-b border-white/10 bg-pit py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <WordReveal
            text="One model across the whole operation"
            className="max-w-[22ch] text-3xl md:text-5xl"
          />
          {/* Reveal owns grid placement and the entrance transform; the inner
              div owns the hover lift. They cannot share an element â€” Motion
              leaves an inline transform behind that a CSS :hover cannot beat. */}
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <Reveal className="h-full md:col-span-2 md:row-span-2">
              <div className="card-lift relative h-full overflow-hidden rounded-panel border border-white/10">
                <Image
                  src="/brand/graphics/mountain-forms-2.jpg"
                  alt="Charcoal wireframe terrain"
                  fill
                  sizes="(min-width: 768px) 60vw, 100vw"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 bg-linear-to-t from-pit via-pit/40 to-transparent"
                  aria-hidden
                />
                <div className="relative flex h-full min-h-72 flex-col justify-end p-7">
                  <Icon name="i-speed" className="h-7 w-7 text-steel-bright" />
                  <h3 className="mt-3 text-2xl">Fleet telemetry, listened to</h3>
                  <p className="mt-2 max-w-[48ch] text-sm text-white/72">
                    Vibration, temperature and load signatures from haul trucks,
                    crushers and conveyors, read continuously instead of on an
                    inspection calendar.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.07} className="h-full">
              <div className="card-lift relative h-full rounded-panel border border-white/10 bg-pit-3 p-7">
                <Icon name="i-chart" className="h-7 w-7 text-steel-bright" />
                <h3 className="mt-3 text-xl">Site-wide risk scoring</h3>
                <p className="mt-2 text-sm text-white/72">
                  Every asset ranked by failure risk, so the next inspection
                  goes where it matters.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.14} className="h-full">
              <div className="card-lift relative h-full rounded-panel border border-white/10 bg-pit-3 p-7">
                <Icon name="i-clipboard" className="h-7 w-7 text-steel-bright" />
                <h3 className="mt-3 text-xl">Work-order handoff</h3>
                <p className="mt-2 text-sm text-white/72">
                  Findings arrive written like work orders: the asset, the
                  evidence and the recommended action.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.21} className="h-full md:col-span-2">
              <div className="card-lift relative h-full overflow-hidden rounded-panel border border-white/10 bg-shaft p-7">
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                  aria-hidden
                />
                <div className="relative">
                  <Icon name="i-network" className="h-7 w-7 text-steel-bright" />
                  <h3 className="mt-3 text-xl">Every channel, one model</h3>
                  <p className="mt-2 max-w-[52ch] text-sm text-white/72">
                    The same risk picture in the control room, in reports and
                    through the API, so planners and operators act on one truth.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.28} className="h-full">
              <div className="card-lift relative h-full rounded-panel border border-white/10 bg-pit-3 p-7">
                <Icon name="i-shield" className="h-7 w-7 text-steel-bright" />
                <h3 className="mt-3 text-xl">Severity you can trust</h3>
                <p className="mt-2 text-sm text-white/72">
                  Plain traffic-light severity, always paired with a written
                  label. Colour never carries meaning alone.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Fleet, plant and pit â€” the site's one LIGHT surface.
          DESIGN.md defines a full paper/ink language (cloud, ink, slate, the
          seam gradient, amber-tint chips) that nothing on the site was using,
          and mountain-line.jpg is a light-ground asset with nowhere to live.
          This section is where both belong. It also breaks up the long dark run
          between the bento and the pinned process scene.
          Amber budget: the tint chip, and nothing else. */}
      <section className="relative overflow-hidden border-b border-white/10 bg-cloud">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-64 opacity-20 mix-blend-multiply"
          aria-hidden
        >
          <Image
            src="/brand/graphics/mountain-line.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-bottom"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-32">
          <Reveal>
            <span className="inline-flex rounded-full bg-amber-tint px-3 py-1 text-xs font-semibold tracking-[0.14em] text-ink uppercase">
              The whole operation
            </span>
          </Reveal>
          <WordReveal
            text="Fleet, plant and pit"
            className="mt-6 max-w-[16ch] text-4xl text-ink md:text-6xl"
          />
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-[58ch] text-lg text-muted">
              One operation, three very different failure languages. The model
              reads all three and reports them the same way, so a planner does
              not have to hold three mental models at once.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            <Domain
              index="01"
              icon="i-speed"
              title="The fleet"
              body="Haul trucks, loaders and diggers, moving and rarely still. Vibration and load signatures drift long before a bearing or a drivetrain gives out."
              image="https://images.unsplash.com/photo-1622645636770-11fbf0611463?auto=format&fit=crop&w=1000&q=80"
              imageAlt="Haul truck on a dusty mine road below rocky slopes"
              delay={0}
            />
            <Domain
              index="02"
              icon="i-cpu"
              title="The plant"
              body="Crushers, mills and conveyors, running continuously. Small changes in temperature and draw are the earliest evidence that something is wearing."
              image="https://images.unsplash.com/photo-1599277186045-d95624f462f5?auto=format&fit=crop&w=1000&q=80"
              imageAlt="Heavy processing machinery in an industrial plant"
              delay={0.07}
            />
            <Domain
              index="03"
              icon="i-network"
              title="The pit"
              body="Fixed infrastructure, pumps and power. Sparse instrumentation, long access times, and the highest cost when a failure stops the face."
              image="https://images.unsplash.com/photo-1647485938389-91df46750f1b?auto=format&fit=crop&w=1000&q=80"
              imageAlt="Benched haul road cut through an open pit"
              delay={0.14}
            />
          </div>
        </div>
      </section>

      {/* Process: the one GSAP moment. Three steps pin and stack in reading order. */}
      <section className="border-b border-white/10 bg-pit">
        <div className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 md:pt-32">
          <WordReveal
            text="From sensor reading to work order"
            className="max-w-[24ch] text-3xl md:text-5xl"
          />
        </div>
        <ProcessSticky
          cards={[
            <ProcessCard
              key="listen"
              icon="i-speed"
              title="Listen"
              body="Sensors stream from the fleet and the plant. The model reads every signature as it arrives, around the clock."
              image="https://images.unsplash.com/photo-1659291457360-13ef34276765?auto=format&fit=crop&w=1400&q=80"
              imageAlt="Ore processing plant with an overhead crane"
            />,
            <ProcessCard
              key="score"
              icon="i-chart"
              title="Score"
              body="Each asset is ranked by failure risk. Drifting signatures rise to the top before they become downtime."
              image="https://images.unsplash.com/photo-1672187493247-52c3084c9785?auto=format&fit=crop&w=1400&q=80"
              imageAlt="Aerial view across a mining range"
            />,
            <ProcessCard
              key="act"
              icon="i-clipboard"
              title="Act"
              body="The finding lands as a work order: the asset, the evidence and the recommended action, ready to schedule."
              image="https://images.unsplash.com/photo-1637076988526-f7a77037845c?auto=format&fit=crop&w=1400&q=80"
              imageAlt="Loader filling a haul truck with broken rock"
            />,
          ]}
        />
      </section>

      {/* Stats band: the crawling hazard tape is this surface's amber. Figures are specimen data. */}
      <section className="border-b border-white/10 bg-shaft">
        <div className="mm-hazard conveyor h-1.5" aria-hidden />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-3">
          <Stat index="01" value="48hr" label="Signal to work order" />
          <Stat index="02" value="24/7" label="Fleet and plant coverage" />
          <Stat index="03" value="14 days" label="Typical inspection window" />
        </div>
        <p className="mx-auto max-w-7xl px-4 pb-6 text-xs text-white/55 sm:px-6">
          Illustrative figures, shown as specimen data.
        </p>
      </section>

      {/* Finding demo: what the output actually looks like. */}
      <section className="border-b border-white/10 bg-pit py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <WordReveal
              text="Findings that read like work orders"
              className="max-w-[20ch] text-3xl md:text-5xl"
            />
            <Reveal delay={0.12}>
              <p className="mt-5 max-w-[52ch] text-white/72">
                No dashboards to decode. Each finding names the asset, shows the
                evidence and recommends the action, with severity spelled out in
                words.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <article className="rounded-panel bg-white p-7 text-ink shadow-(--shadow-lg)">
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--sev-high-bg)] px-3 py-1 text-sm font-semibold text-[var(--sev-high-fg)]">
                  <Icon name="i-shield" className="h-4 w-4" />
                  High
                </span>
                <Icon name="i-network" className="h-5 w-5 text-muted" />
              </div>
              <h3 className="mt-4 text-lg text-ink">
                Vibration signature drifting on crusher 14 across three sites
              </h3>
              <p className="mt-2 text-sm text-muted">
                The model flags outliers a fixed inspection interval buries.
                Recommend bearing inspection on the top and bottom quartile
                within 14 days.
              </p>
              <p className="mt-5 font-mono text-xs text-muted">
                FINDING 03 Â· ASSET RISK Â· SPECIMEN
              </p>
            </article>
          </Reveal>
        </div>
      </section>

      {/* Questions. Native <details> on purpose: open/close, keyboard support and
          find-in-page all work with no JavaScript and no ARIA of our own.
          Answers restate what the rest of the page already claims â€” PRODUCT.md
          forbids inventing commercial facts, so there are no prices, terms,
          customers or timelines here. */}
      <section className="relative overflow-hidden border-b border-white/10 bg-pit-2 py-24 md:py-32">
        {/* .mm-glow, the design system's floodlight utility â€” a radial amber
            wash with no edge to give away. A cropped raster here read as a
            pasted grey rectangle. This is the surface's one amber element. */}
        <div className="mm-glow pointer-events-none absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <WordReveal
            text="Questions we get asked"
            className="max-w-[20ch] text-3xl md:text-5xl"
          />
          <Reveal delay={0.12} className="mt-10 max-w-3xl">
            <Faq
              q="What does the model actually watch?"
              a="Vibration, temperature and load signatures streaming from the fleet and the plant. It reads them as they arrive rather than sampling an asset when an inspection is scheduled."
            />
            <Faq
              q="How is this different from scheduled inspection?"
              a="A fixed interval samples an asset a few times a year and buries anything that drifts in between. Continuous reading surfaces the drift when it starts, so the schedule follows risk instead of the calendar."
            />
            <Faq
              q="What arrives when something is found?"
              a="A finding written like a work order: the asset, the evidence behind the flag, and the recommended action. There is no dashboard to decode before anyone can act on it."
            />
            <Faq
              q="Do we have to replace our CMMS?"
              a="No. The same findings reach the control room, the written report and your existing systems through a streaming API, so they can land wherever your crews already work."
            />
            <Faq
              q="How is severity communicated?"
              a="Plain traffic-light severity, always paired with a written label. Colour never carries the meaning on its own, so a finding still reads correctly in a printed report or to anyone with a colour vision deficiency."
            />
            <Faq
              q="Can we see it against our own site?"
              a="Yes â€” that is the usual starting point. Tell us about your fleet and your plant, and we will show you what the model sees."
            />
          </Reveal>
        </div>
      </section>

      {/* Closing call: this surface's amber is the contact action. */}
      <section className="bg-shaft">
        <div className="mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 md:py-32">
          <WordReveal
            text="Bring the model to your site"
            className="mx-auto max-w-[18ch] text-3xl md:text-5xl"
          />
          <Reveal delay={0.12}>
            <p className="mx-auto mt-5 max-w-[44ch] text-white/72">
              Tell us about your fleet and your plant. We will show you what
              the model sees.
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

function ProcessCard({
  icon,
  title,
  body,
  image,
  imageAlt,
}: {
  icon: "i-speed" | "i-chart" | "i-clipboard";
  title: string;
  body: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
      <div className="relative grid items-center gap-8 overflow-hidden rounded-panel border border-white/10 bg-shaft md:grid-cols-2">
        <div className="p-8 md:p-12">
          <Icon name={icon} className="h-8 w-8 text-steel-bright" />
          <h3 className="mt-4 text-3xl md:text-4xl">{title}</h3>
          <p className="mt-4 max-w-[46ch] text-white/72">{body}</p>
        </div>
        <div className="photo-frame relative hidden min-h-105 md:block">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(min-width: 768px) 45vw, 0px"
            className="photo-muted object-cover"
          />
          <div
            className="absolute inset-0 bg-linear-to-r from-shaft to-transparent"
            aria-hidden
          />
        </div>
        {/* ProcessSticky fades this in as the next card arrives, so a receding
            card darkens while staying opaque. See the note in that component. */}
        <div
          className="stack-scrim pointer-events-none absolute inset-0 bg-pit opacity-0"
          aria-hidden
        />
      </div>
    </div>
  );
}

function Stat({
  index,
  value,
  label,
}: {
  index: string;
  value: string;
  label: string;
}) {
  return (
    // The index marker and top rule are the technical-wireframe grammar: they
    // make the band read as a measured spec sheet rather than three loose
    // numbers. Steel, not amber â€” this surface already spends its one amber on
    // the hazard tape above.
    <div className="border-t border-white/10 pt-6 text-center md:text-left">
      <span
        aria-hidden
        className="font-mono text-xs tracking-[0.2em] text-steel"
      >
        {index}
      </span>
      <p className="mt-4 font-display text-5xl font-extrabold tracking-tight md:text-6xl">
        {value}
      </p>
      <p className="mt-2 text-sm tracking-[0.12em] text-white/72 uppercase">
        {label}
      </p>
    </div>
  );
}

// Light-surface column. Icons are graphite here â€” on the dark grounds graphite
// reads 1.15:1 and is the documented never-do, but on cloud it is the brand.
// The photo header wears .photo-muted like every image on the site, so the
// three domains read as plates from one printed survey rather than stock art.
function Domain({
  index,
  icon,
  title,
  body,
  image,
  imageAlt,
  delay,
}: {
  index: string;
  icon: "i-speed" | "i-cpu" | "i-network";
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  delay: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="border-t border-[var(--color-line-light)] pt-6">
        <div className="photo-frame relative aspect-4/3 overflow-hidden rounded-brand">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(min-width: 768px) 30vw, 100vw"
            className="photo-muted object-cover"
          />
        </div>
        <div className="mt-5 flex items-center gap-3">
          <Icon name={icon} className="h-6 w-6 text-graphite" />
          <span
            aria-hidden
            className="font-mono text-xs tracking-[0.2em] text-steel-deep"
          >
            {index}
          </span>
        </div>
        <h3 className="mt-4 text-2xl text-ink">{title}</h3>
        <p className="mt-3 text-muted">{body}</p>
      </div>
    </Reveal>
  );
}

// The mark is a plus that rotates into a cross when the row opens â€” the only
// state this needs, and CSS reads it straight off [open].
function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="group border-b border-white/10 py-5">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold text-white [&::-webkit-details-marker]:hidden">
        {q}
        <span
          aria-hidden
          className="relative h-5 w-5 shrink-0 text-steel transition-transform duration-200 ease-(--ease-out) group-open:rotate-45"
        >
          <span className="absolute top-1/2 left-0 h-px w-5 -translate-y-1/2 bg-current" />
          <span className="absolute top-0 left-1/2 h-5 w-px -translate-x-1/2 bg-current" />
        </span>
      </summary>
      <p className="mt-3 max-w-[68ch] text-white/72">{a}</p>
    </details>
  );
}
