const helper = require('../utils/list_helper')

test('printing 1', () => {
    const blogs =[]
    const result = helper.dummy(blogs)
    expect(result).toBe(1)
})


