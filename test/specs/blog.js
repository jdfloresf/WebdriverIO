import blogPage from "../pages/blog-page";

/* 
    - Get the list of Recent Post
    - Assert the text lenght of each list item > 10 characteres
    - Assert the total count of rows
*/


describe('Blog page', () => {
    var recentPost;
    it('Get the list of all Recent Post', async () => {
        await blogPage.navigate('blog');

        recentPost = await blogPage.recentPost;

        console.log(recentPost)
    });

    it('Assert the text lenght of each list item > 10 characteres', async () => {
        for (const post of recentPost) {
            // posts.push(await post.getText());
            const text = await post.getText();
            // Assert the text lenght of each list item > 10 characteres
            await expect(text.length).toBeGreaterThan(10);
        }
    });

    it('Assert the total count of rows', async () => {
        // Assert the total count of row
        await expect(recentPost.length).toEqual(5);
    });
});