class NavComponent {
    get linkNavMenu() {
        return $$('#zak-primary-menu li[id*=menu]');
    }

    get firstNavMenuList() {
        return $('#zak-primary-menu li');
    }
}

export default new NavComponent();