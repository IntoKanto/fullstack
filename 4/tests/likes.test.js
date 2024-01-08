const helper = require('../utils/list_helper')
const blogs = require('./testdata')

describe('likes', () => {
    test('done with example list', () => {
        const result = helper.totalLikes(blogs.blogs)
        expect(result).toBe(36)
        })
    test('no blogs at all', () => {
        const result = helper.totalLikes([])
        expect(result).toBe(0)
    })
    test('One and just one blog in case', () => {
        const result = helper.totalLikes([blogs.blogs[0]])
        expect(result).toBe(7)
    })
})