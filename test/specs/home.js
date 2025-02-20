describe("Home", () => {
    it("Get title", () => {
        // Open de URL
        browser.url("https://practice.sdetunicorns.com/");

        // Assert title
        expect(browser).toHaveTitle("Practice E-Commerce Site – SDET Unicorns");
    });
});