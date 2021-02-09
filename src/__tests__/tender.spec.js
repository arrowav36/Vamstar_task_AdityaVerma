const puppeteer = require("puppeteer");
const selectors = require("../constants/selectors");
const constants = require("../constants/consts");

let page;
let browser

describe("Verify Tender Details", () => {
  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: false });
    page = await browser.newPage();

    await page
      .goto(constants.URL, {
        waitUntil: "networkidle0",
      })
      .catch(() => { });
  });

  afterAll(() => {
    if (!page.isClosed()) {
      browser.close();
    }
  });

  test("should verify open date field", async () => {
    await page.waitForSelector(selectors.openDateSelector);
    const openDateText = await page.$eval(selectors.openDateSelector, (el) => el.textContent);
    expect(openDateText).toEqual(constants.OPEN_DATE);
  });

  test("should verify bidding date field", async () => {
    await page.waitForSelector(selectors.biddingDateSelector);
    const biddingDateText = await page.$eval(selectors.biddingDateSelector, (el) => el.textContent);
    expect(biddingDateText).toEqual(constants.BIDDING_DATE);
  });

  test("should verify object field", async () => {
    await page.waitForSelector(selectors.objectiveSelector);
    const objectiveText = await page.$eval(selectors.objectiveSelector, (el) => el.textContent);
    expect(objectiveText).toEqual(constants.OBJECTIVE);
  });

  test("should verify the newly opened link", async () => {
    await page.waitForSelector(selectors.linkSelector);
    await page.$eval(selectors.linkSelector, (el) => el.click());
    const newPagePromise = new Promise(resolve => browser.once('targetcreated', target => resolve(target.page())));
    const newPage = await newPagePromise;
    const title = await newPage.title();
    expect(title).toEqual(constants.NEW_PAGE_TITLE);
  });
});
