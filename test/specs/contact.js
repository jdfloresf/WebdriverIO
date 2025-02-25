/* 
    - Fill the inpus fields and submit form
    - Assert the seccess message
*/


describe('Fill form and submit', () => {
    it('Fill the form, submint & assert success message', async () => {
        await browser.url('/');

        // Navegando a la pagina Contacto
        await $('#menu-item-493').click()

        // Enviando valores al formulario
        // Name field
        await $('#evf-277-field_ys0GeZISRs-1').setValue("Juan")
        // Email fiel
        await $('#evf-277-field_LbH5NxasXM-2').setValue("juan@prueba.com")
        // Phone field
        await $('#evf-277-field_66FR384cge-3').setValue("1234567890")
        // Message field
        await $('#evf-277-field_yhGx3FOwr2-4').setValue("Hola esto es una prueba")
        
        // debug
        // browser.debug();
        
        // Submit
        await $('#evf-submit-277').click();

        // Thanks for contacting us! We will be in touch with you shortly	
        await expect($('.everest-forms-notice')).toBeDisplayed();
        await expect($('.everest-forms-notice')).toHaveText('Thanks for contacting us! We will be in touch with you shortly')
    });
});