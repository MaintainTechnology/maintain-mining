// Prove the hover reveal: crop the fleet plate at rest, hover it, crop again.
import { chromium } from "playwright";

const out = process.argv[2] ?? ".captures";
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });

const plate = page.locator(".photo-frame").nth(1); // first Domain plate (fleet)
await plate.scrollIntoViewIfNeeded();
await page.waitForTimeout(2500);

await page.mouse.move(10, 10);
await page.waitForTimeout(600);
await plate.screenshot({ path: `${out}/plate-rest.png` });

await plate.hover();
await page.waitForTimeout(600);
await plate.screenshot({ path: `${out}/plate-hover.png` });

await browser.close();
console.log("done");
