import searchCode from './api'

it('Given empty query then returns code samples', () => {
	const query = ''
	const numResults = 10
	expect.assertions(1)
	return searchCode(query, numResults)
		.then(codes => {
			console.log(codes)
			expect(codes.codes).toBeDefined()
		})
})

it('Given natural language query and number of results Then show code snippets', () => {
	const query = 'string to int'
	const numResults = 10
	expect.assertions(1)
	return searchCode(query, numResults)
		.then(codes => {
			console.log(codes)
			expect(codes.codes).toBeDefined()
		})
}, 60000)
