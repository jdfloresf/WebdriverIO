describe('Navidation Menu', () => {
    it('Get the text of all menu items & assert them', async () => {
        await browser.url('/');

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
        const navLinks = await $$('#zak-primary-menu li[id*=menu]');

        for (const link of navLinks) {
            actualLinks.push(await link.getText());
        }

        await expect(expectedLinks).toEqual(actualLinks)
    });
});