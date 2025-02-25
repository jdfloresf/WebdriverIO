describe('IFrame', () => {
    it('Working with iframe', async () => {
        
        await browser.url('https://practice.sdetunicorns.com/iframe-sample/');

        // access the iframe
        const iframe = await $('#advanced_iframe');
        await browser.switchFrame(iframe);

        // verify logo exist
        await expect($('.hfe-site-logo')).toExist();

        // switch to parent frame
        await browser.switchToParentFrame();

        // Verify page title
        await expect($('.zak-page-header__title')).toHaveText('IFrame Sample');
    });
});