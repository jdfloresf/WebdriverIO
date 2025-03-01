import { browser, expect } from '@wdio/globals';

describe("Amazon Home Page", () => {
    beforeEach(async () => {
        // Open Home page
        await browser.url('/');
        browser.pause(5000);
    });


    it("Access URL, verify URL and title", async () => {
        await expect(browser).toHaveUrl(expect.stringContaining('amazon'));
        await expect(browser).toHaveTitle(expect.stringContaining('Amazon'));
    });

    it("Search content and verify text", async () => {

        const searchInput = $('input[type="text"]');
        const searchButton = $('input[value="Ir"]');
        const expectedSearchText = $('.a-color-state.a-text-bold');
        
        // Search macbook 
        await searchInput.setValue('macbook');
        // Click on button
        await searchButton.click();
        
        await expect(expectedSearchText).toHaveText(
            expect.stringContaining('macbook'));
    });
        
    it("Obtain the suggestion list, click the first one and assert the text", async () => {
        const searchInput = $('input[type="text"]');
        await searchInput.setValue("8bitdo");
        const expectedSearchText = $('.a-color-state.a-text-bold');

        const suggestionPane = await $('.left-pane-results-container');
        const firstSearchResult = await suggestionPane.$('div');
        browser.pause(3000);
        
        await expect(suggestionPane.isDisplayed()) 
        
        const expectedText = await firstSearchResult.getText()
        await firstSearchResult.click();

        await expect(expectedSearchText).toHaveText(
            expect.stringContaining(expectedText));

    });
});