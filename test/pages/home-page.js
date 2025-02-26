import navComp from "./components/nav-comp";

class HomePage {
    async navigate(path = '') {
        return path ? browser.url(`/${path}`) : browser.url('/');
    }

    get btnGetStarted() {
        return $('#get-started');
    }

    get imageLogo() {
        return $('//img[@alt="Practice E-Commerce Site"]');
    }

    get hedingElement() {
        return $('.elementor-widget-container h1');
    }

    get navComponent() {
        return navComp;
    }
}

export default new HomePage();