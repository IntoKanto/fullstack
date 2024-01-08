const helper = require('../utils/list_helper')
const blogs = require('./testdata').blogs

const blog = {
    title: 'Canonical string reduction',
    author: 'Edsger W. Dijkstra',
    likes: 12}

describe('favorite', () => {
    test('most liked blog', () => {
        const result = helper.favoriteBlog(blogs)
        expect(result).toEqual(blog)
    })
})