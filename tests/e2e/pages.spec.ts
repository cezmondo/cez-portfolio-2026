import { test, expect, Page } from "@playwright/test";

/* ------------------------------------------------------------------ */
/*  Pages to test                                                       */
/* ------------------------------------------------------------------ */

const pages = [
  { name: "Home", path: "/" },
  { name: "Profile", path: "/profile" },
  { name: "Archive", path: "/archive" },
  { name: "Contact", path: "/contact" },
  { name: "Work index", path: "/work" },
  { name: "Boldin Withdrawal Order", path: "/work/boldin-withdrawal-order" },
  { name: "Boldin Design System", path: "/work/boldin-design-system" },
  { name: "Boldin Brand & Social", path: "/work/boldin-brand-social" },
  { name: "BlockFi", path: "/work/blockfi" },
  { name: "JetBlue", path: "/work/jetblue" },
  { name: "UBS", path: "/work/ubs" },
  { name: "Kidventure Hub", path: "/work/kidventure-hub" },
];

/* ------------------------------------------------------------------ */
/*  Helper — collect console errors                                    */
/* ------------------------------------------------------------------ */

async function collectConsoleErrors(page: Page, path: string) {
  const errors: string[] = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  page.on("pageerror", (err) => errors.push(err.message));
  await page.goto(path, { waitUntil: "networkidle" });
  return errors;
}

/* ------------------------------------------------------------------ */
/*  1. All pages load without JS errors                                */
/* ------------------------------------------------------------------ */

test.describe("No console errors", () => {
  for (const { name, path } of pages) {
    test(name, async ({ page }) => {
      const errors = await collectConsoleErrors(page, path);
      // Filter known noisy non-breaking warnings
      const blocking = errors.filter(
        (e) =>
          !e.includes("ResizeObserver") &&
          !e.includes("Non-Error promise rejection") &&
          // cdn.simpleicons.org sends CORP: same-origin headers — blocked by WebKit
          // in test context but loads fine in real browsers. TODO: self-host icons.
          !e.includes("ERR_BLOCKED_BY_RESPONSE.NotSameOrigin")
      );
      expect(blocking, `Console errors on ${path}:\n${blocking.join("\n")}`).toHaveLength(0);
    });
  }
});

/* ------------------------------------------------------------------ */
/*  2. All pages return 200 (no 404s / crashes)                       */
/* ------------------------------------------------------------------ */

test.describe("Pages load successfully", () => {
  for (const { name, path } of pages) {
    test(name, async ({ page }) => {
      const response = await page.goto(path, { waitUntil: "domcontentloaded" });
      expect(response?.status(), `${path} should return 200`).toBe(200);

      // No Next.js error overlay
      await expect(page.locator("nextjs-portal")).not.toBeVisible();
    });
  }
});

/* ------------------------------------------------------------------ */
/*  3. Screenshots at current viewport (captures per-project config)  */
/* ------------------------------------------------------------------ */

test.describe("Visual snapshots", () => {
  for (const { name, path } of pages) {
    test(name, async ({ page }) => {
      await page.goto(path, { waitUntil: "networkidle" });
      // Wait for any entrance animations to settle
      await page.waitForTimeout(800);
      await expect(page).toHaveScreenshot(`${name.replace(/[^a-z0-9]/gi, "-")}.png`, {
        fullPage: true,
        maxDiffPixelRatio: 0.02,
      });
    });
  }
});

/* ------------------------------------------------------------------ */
/*  4. Nav links exist and are visible                                 */
/* ------------------------------------------------------------------ */

test.describe("Navigation", () => {
  test("Top nav renders on home", async ({ page }) => {
    await page.goto("/");
    // Nav pill should be visible
    const nav = page.locator("ul").filter({ hasText: "Select Work" });
    await expect(nav).toBeVisible();
  });

  test("Select Work jumps to #projects without page transition", async ({ page }) => {
    await page.goto("/");
    await page.waitForTimeout(500);

    const scrollBefore = await page.evaluate(() => window.scrollY);
    await page.getByText("Select Work").click();
    await page.waitForTimeout(300);
    const scrollAfter = await page.evaluate(() => window.scrollY);

    // Should have scrolled down to projects section
    expect(scrollAfter).toBeGreaterThan(scrollBefore);

    // URL should stay on /  (no full navigation to another page)
    expect(page.url()).toMatch(/localhost:3000\/?(#projects)?$/);
  });

  test("Profile nav link navigates to /profile", async ({ page }) => {
    await page.goto("/");
    await page.getByText("Profile").click();
    await expect(page).toHaveURL(/\/profile/);
  });

  test("Archive nav link navigates to /archive", async ({ page }) => {
    await page.goto("/");
    await page.getByText("Archive").click();
    await expect(page).toHaveURL(/\/archive/);
  });
});

/* ------------------------------------------------------------------ */
/*  5. Case study sidebar nav scrolls without page transition         */
/* ------------------------------------------------------------------ */

test.describe("Case study anchor nav", () => {
  const caseStudies = [
    { name: "Boldin WO", path: "/work/boldin-withdrawal-order", firstSection: "challenge" },
    { name: "BlockFi", path: "/work/blockfi", firstSection: "challenge" },
    { name: "JetBlue", path: "/work/jetblue", firstSection: "challenge" },
    { name: "UBS", path: "/work/ubs", firstSection: "challenge" },
  ];

  for (const { name, path, firstSection } of caseStudies) {
    test(`${name} — sidebar link scrolls, no transition`, async ({ page }) => {
      await page.goto(path, { waitUntil: "networkidle" });
      await page.waitForTimeout(500);

      const scrollBefore = await page.evaluate(() => window.scrollY);

      // Click the first sidebar section link
      const link = page.locator(`a[href="#${firstSection}"]`).first();
      await link.click();
      await page.waitForTimeout(500);

      const scrollAfter = await page.evaluate(() => window.scrollY);

      // Should have scrolled (not stayed at top)
      expect(scrollAfter).toBeGreaterThan(scrollBefore);

      // URL should still be on the same case study page
      expect(page.url()).toContain(path);
    });
  }
});

/* ------------------------------------------------------------------ */
/*  6. Responsive — key layout checks at current viewport             */
/* ------------------------------------------------------------------ */

test.describe("Responsive layout", () => {
  test("Home hero headline is visible", async ({ page }) => {
    await page.goto("/");
    // SpotlightHeadline / main h1
    const headline = page.locator("h1, [class*='headline'], [class*='display']").first();
    await expect(headline).toBeVisible();
  });

  test("Project cards stack on home", async ({ page }) => {
    await page.goto("/");
    const cards = page.locator("section#projects a[href*='/work/']");
    const count = await cards.count();
    expect(count).toBeGreaterThanOrEqual(5);
  });

  test("Footer is present on home", async ({ page }) => {
    await page.goto("/");
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(300);
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();
  });

  test("Archive cursor trail section renders", async ({ page }) => {
    await page.goto("/archive");
    const heading = page.getByRole("heading", { name: "ARCHIVE" });
    await expect(heading).toBeVisible();
  });
});
