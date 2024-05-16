import { test, expect } from "@playwright/test";

test("test should fail", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright_FAILS/, { timeout: 1_000 });
});

test("passing test 1", async ({ page }) => {
  expect(true).toBe(true);
});
test("passing test 2", async ({ page }) => {
  expect(true).toBe(true);
});
test("passing test 3", async ({ page }) => {
  expect(true).toBe(true);
});
test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" })
  ).toBeVisible();
});
