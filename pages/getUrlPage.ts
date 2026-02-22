import { type Locator, type Page } from "@playwright/test";

export class GetUrlPage {
  readonly page: Page;
  readonly checkTitleText: Locator;
  readonly closeButton: Locator;
  readonly fillterButton: Locator;
  readonly filterLinks: Locator;
  readonly pageTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkTitleText = page.locator('h1[data-test-id="pageTitle"]');
    this.closeButton = page.getByRole("button", { name: "Close" });
    this.fillterButton = page.getByRole("button", { name: "Show filters (2)" });
    this.filterLinks = page.locator('[data-test-id="seo-filter-link"]');
    this.pageTitle = page.locator('[data-test-id="pageTitle"]');
  }

  async navigate() {
    await this.page.goto("https://www.on.com/en-th/shop/womens/shoes");
    await this.page.waitForLoadState("domcontentloaded");
  }
}
