class BlogPage {
    async navigate(path = '') {
        return path ? browser.url(`/${path}`) : browser.url('/');
    }

    get recentPost() {
        return $$('#recent-posts-3 li');
    }
}

export default new BlogPage(); 