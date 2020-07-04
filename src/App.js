import React, { useState, useEffect } from 'react'
import searchCode from './api/api'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

function App() {
	const [codes, setCodes] = useState([])

	useEffect(() => {
		searchCode('string to int', 10)
			.then(codes => {
				setCodes(codes.codes)
			})
	}, [])

	return (
		<div>
			{codes.map(code => (
				<Card>
					<CardContent>
						{code}
					</CardContent>
				</Card>
			))}

		</div>
	)
}

export default App
