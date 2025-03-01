import { browser, expect, $ } from '@wdio/globals';

describe("Cart Flow", () => {
    let devicePrice;

    before(async () => {
        // Open Home page
        await browser.url('/');
        browser.pause(5000);
        const searchInput = $('input[type="text"]');
        const searchButton = $('input[value="Ir"]');

        await searchInput.moveTo();
        await searchInput.setValue('teclado 8bitdo español');
        await searchButton.click();
    });


    it("Add to cart", async () => {
        
        // Click on the first product
        await $('.s-product-image-container').click();
        // Get the device price
        devicePrice = await $('#corePriceDisplay_desktop_feature_div \
            span[class="a-price-whole"]').getText();
        // Click on add to cart button
        await $('#add-to-cart-button').click();
        await browser.pause(1000);
        
        // Waranty pane displayed
        const warantyPane = await $('#attach-warranty-pane');
        await expect(warantyPane).toBeDisplayed();
        
        // Clink on No button
        await $('.a-button-stack span[id="attachSiNoCoverage"]').click();
        browser.pause(1000);
        // Assert Text
        await expect($('#NATC_SMART_WAGON_CONF_MSG_SUCCESS h1'))
        .toHaveText('Agregado al carrito');
        // Assert the same price
        await expect($('#sw-atc-buy-box span[class="a-price-whole"]'))
        .toHaveText(devicePrice);
    });

    it("Update Cart Quantity", async () => {
        // Click on Cart button
        await $('#nav-tools a[aria-label="1 artículo en el carrito"]')
        .click()

        // add another device
        await $('.sc-quantity-stepper button[\
            aria-label="Aumentar la cantidad en uno"]').click();

        await browser.pause(2000);

        const devicesQuantity = await browser.execute(() => {
            return document.querySelector('.a-declarative \
                span[data-a-selector="value"]').textContent
        });
            
        // Assert devices quantity
        await expect(devicesQuantity).toEqual("2");

        // Assert device price is different
        await expect($('#sc-subtotal-amount-activecart span').textContent)
        .not.toEqual(devicePrice)

    });
});

