module.exports = {
    posts: [
        { id: 1, title: 'Post 1', description: 'This is post 1' },
    ],

    getAll() {
        return this.posts;
    },

    newPost(title, description) {
        this.posts.push({ id: randomGenerateId(), title, description })
    },

    deletePost(id) {
        this.posts = this.posts.filter(post => post.id !== id);
    }
}

function randomGenerateId() {
    return Math.floor(Math.random() * 100);
}