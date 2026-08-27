// Verification captures: scroll each page end to end (fires whileInView
// reveals, lazy images and ScrollTrigger pins), wait for images, then shoot a
// full-page frame. Usage: node scripts/capture.mjs <outDir>
import { chromium } from "playwright";

const out = process.argv[2] ?? ".captures";
const pages = [
  ["home", "http://localhost:3000/"],
  ["about", "http://localhost:3000/about"],
  ["platform", "http://localhost:3000/platform"],
  ["contact", "http://localhost:3000/contact"],
];

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();

for (const [name, url] of pages) {
  await page.goto(url, { waitUntil: "networkidle" });
  await page.evaluate(async () => {
    const h = document.body.scrollHeight;
    for (let y = 0; y < h; y += 300) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 90));
    }
  });
  await page.waitForTimeout(2500);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(600);
  const imgs = await page.evaluate(() => {
    const all = [...document.querySelectorAll("img")];
    return {
      total: all.length,
      loaded: all.filter((i) => i.complete && i.naturalWidth > 0).length,
    };
  });
  console.log(name, "images", `${imgs.loaded}/${imgs.total}`);
  await page.screenshot({ path: `${out}/${name}.png`, fullPage: true });
}

await browser.close();
