import HomePage from "../pages/home-page";
import allureReporter from '@wdio/allure-reporter';

describe("Home", () => {
    beforeEach(async () => {
        // Open de URL
        await HomePage.navigate();
    });
    
    it("Get title", async () => {
        // Assert title
        await expect(browser).toHaveTitle("Practice E-Commerce Site – SDET Unicorns");
    });
    
    it("Open About Page & assert URL", async () => {
        // Open About page
        allureReporter.addSeverity("critical");
        await HomePage.navigate("about");

        // Assert URL
        await expect(browser).toHaveUrl("https://practice.sdetunicorns.com/about/");
    });
    
    it("Click get started botton & assert URL", async () => {
        // Open About page
        await HomePage.navigate();
        await HomePage.btnGetStarted.click();

        // Assert URL contains get-started text
        const currentUrl = await browser.getUrl();
        expect(currentUrl).toContain("get-started");
    });
  
    it("Click logo botton & assert URL DOES NOT contains get-started text", async () => {     
        allureReporter.addFeature("Logo verification");   
        await HomePage.imageLogo.click();

        // Assert URL contains get-started text
        const currentUrl = await browser.getUrl();
        expect(currentUrl).not.toContain("get-started");
    });
  
    it("Find heading element & assert the text", async () => {
        // find heading element
        const headingElement = await HomePage.hedingElement;

        // Get the text
        // const headingText = await headingElement.getText();

        //  Assert the text
        // await expect(headingText).toEqual("Think different. Make different.");
        
        // Another form is using the function toHaveText
        await expect(headingElement).toHaveText("Think different. Make different.");
    });
});