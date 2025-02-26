class ContactPage {
    async navigate(path = '') {
        return path ? browser.url(`/${path}`) : browser.url('/');
    }

    async sendKeys(selector, value) {
        await $(`${selector}`).setValue(`${value}`);
    }

    async onClick() {
        await $('#evf-submit-277').click();
    }

    get alert() {
        return $('.everest-forms-notice');
    }
}

export default new ContactPage(); 