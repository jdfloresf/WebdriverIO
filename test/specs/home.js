describe("Home", () => {
    it("Get title", async () => {
        // Open de URL
        await browser.url("https://practice.sdetunicorns.com/");

        // Assert title
        await expect(browser).toHaveTitle("Practice E-Commerce Site – SDET Unicorns");
    });
    
    it("Open About Page & assert URL", async () => {
        // Open About page
        await browser.url("https://practice.sdetunicorns.com/about");

        // Assert URL
        await expect(browser).toHaveUrl("https://practice.sdetunicorns.com/about/");
    });
    
    it("Click get started botton & assert URL", async () => {
        // Open About page
        await browser.url("https://practice.sdetunicorns.com/");
        await $('#get-started').click();

        // Assert URL contains get-started text
        const currentUrl = await browser.getUrl();
        expect(currentUrl).toContain("get-started");
    });
  
    it("Click logo botton & assert URL DOES NOT contains get-started text", async () => {
        // Open About page
        await browser.url("https://practice.sdetunicorns.com/");
        
        await $('//img[@alt="Practice E-Commerce Site"]').click();

        // Assert URL contains get-started text
        const currentUrl = await browser.getUrl();
        expect(currentUrl).not.toContain("get-started");
    });
  
    it("Find heading element & assert the text", async () => {
        // Open About page
        await browser.url("https://practice.sdetunicorns.com/");
        
        // find heading element
        const headingElement = await $('.elementor-widget-container h1');

        // Get the text
        // const headingText = await headingElement.getText();

        //  Assert the text
        // await expect(headingText).toEqual("Think different. Make different.");
        
        // Another form is using the function toHaveText
        await expect(headingElement).toHaveText("Think different. Make different.");
        

    });
});