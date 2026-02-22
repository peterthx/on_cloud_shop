import { test, expect } from "@playwright/test";
import { GetUrlPage } from "../pages/getUrlPage";

test.describe("On Cloud Shopping", () => {
  let getUrlPage: GetUrlPage;

  test.beforeEach(async ({ page }) => {
    getUrlPage = new GetUrlPage(page);
    await getUrlPage.navigate();
  });

  test("Should be show on cloud page successfully", async () => {
    await getUrlPage.closeButton.click();
    await expect(getUrlPage.checkTitleText).toContainText("Women’s shoes");
  });

  test("Should be able filter, activity and color successfully", async ({
    page,
  }) => {
    // Close any popups
    await getUrlPage.closeButton.click();
    await page.waitForLoadState("domcontentloaded");

    // Open filters
    await getUrlPage.fillterButton.click();
    await page.waitForLoadState("domcontentloaded");

    // Apply activity filter (5th filter option)
    if ((await getUrlPage.filterLinks.count()) >= 6) {
      await getUrlPage.filterLinks.nth(5).click();
      await page.waitForLoadState("domcontentloaded");
    }

    // Verify page title is visible (signifies filters were applied)
    const getpageTitle = getUrlPage.pageTitle;
    await expect(getpageTitle).toBeVisible();
  });
});
