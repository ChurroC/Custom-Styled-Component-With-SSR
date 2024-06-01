import { test } from "@playwright/test";

test("run actions to get web vital data", async ({ page }) => {
    // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
    await page.goto("/");
    await page.reload();
    await page.close();
});
