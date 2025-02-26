import homePage from "../pages/home-page";

describe('Navidation Menu', () => {
    it('Get the text of all menu items & assert them - using wait commands', async () => {
        // browser.pause(1000)
        
        await homePage.navigate();

        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account",

        ];

        const actualLinks = [];

        // Usando un encadenamiento para acceder a los elementos
        // const navLinks = await $('#zak-primary-menu').$$('li[id*=menu]');
        
        // Accediendo directamente a los elementos
        // await $('#zak-primary-menu').waitForDisplayed({ timeout: 1000 });

        // wait until tbe Home text is displayed on the screen
        await browser.waitUntil(async function() {
            const homeText = await homePage.navComponent.firstNavMenuList.getText()
            return homeText === 'Home';
        }, { timeoutMsg: "Could not verify the Home test from #zak-primary-menu li"});

        const navLinks = await homePage.navComponent.linkNavMenu;

        for (const link of navLinks) {
            actualLinks.push(await link.getText());
        }

        await expect(expectedLinks).toEqual(actualLinks)
    });
});