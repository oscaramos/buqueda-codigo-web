import { codesSample } from './CodesSample'
import queryString from 'querystring'

const baseurl = 'http://a3e4664b91c2.ngrok.io'

const responseCodesSample = {
	codes: codesSample
}

const searchCode = (query, numResults) => {
	if(!query)
		return Promise.resolve(responseCodesSample)
	else {
		const params = { query: query, n_results: numResults }
		const url = `${baseurl}?${queryString.stringify(params)}`
		console.log(url)
		return fetch(url)
			.then(res => res.json())
	}
}

export default searchCode
