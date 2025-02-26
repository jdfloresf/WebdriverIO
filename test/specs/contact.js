import contacPage from "../pages/contact-page";

/* 
    - Fill the inpus fields and submit form
    - Assert the seccess message
*/


describe('Fill form and submit', () => {
    it('Fill the form, submint & assert success message', async () => {
        // Navegando a la pagina Contacto
        await contacPage.navigate('contact')

        // Enviando valores al formulario
        await contacPage.sendKeys('#evf-277-field_ys0GeZISRs-1', 'Juan'); //M
        // Email fiel
        await contacPage.sendKeys('#evf-277-field_LbH5NxasXM-2', 'juan@prueba.com');
        // Phone field
        await contacPage.sendKeys('#evf-277-field_66FR384cge-3', '1234567890');
        // Message field
        await contacPage.sendKeys('#evf-277-field_yhGx3FOwr2-4', 'Hola esto es una prueba');
        
        // debug
        // browser.debug();
        
        // Submit
        await contacPage.onClick();

        // Thanks for contacting us! We will be in touch with you shortly	
        await expect(contacPage.alert).toBeDisplayed();
        await expect(contacPage.alert).toHaveText('Thanks for contacting us! We will be in touch with you shortly')
    });
});