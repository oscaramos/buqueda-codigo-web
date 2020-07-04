import React, { useState, useEffect } from 'react'
import searchCode from './api/api'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'

import './App.css'

const useStyles = makeStyles(() => ({
	'@global': {
		html: {
			backgroundColor: '#eeeeef',
			fontFamily: 'Menlo',
		}
	},
	cardContainer: {
		width: '100%',
		maxWidth: '600px',
	},
	searchBar: {
		width: '100%',
		borderRadius: '6px',
		border: '1px solid #D7DAE0',
		backgroundColor: '#fff',
	}
}))

const useStylesSearch = makeStyles(() => ({
	root: {
		fontFamily: 'Menlo',
	}
}))

function SearchBar(props) {
	const classes = useStylesSearch()
	return <TextField
		variant='outlined'
		InputProps={{classes}}
		placeholder='Search for java code'
		{...props}
	/>
}

function App() {
	const classes = useStyles()
	const [codes, setCodes] = useState([])

	useEffect(() => {
		searchCode('string to int', 10)
			.then(codes => {
				setCodes(codes.codes)
			})
	}, [])

	return (
		<Container maxWidth="sm">
			<SearchBar className={classes.searchBar}/>

			<Grid container spacing={3}>
				{codes.map((code, index) => (
					<Grid item key={index} className={classes.cardContainer}>
						<Card>
							<CardContent>
								{code}
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>

		</Container>
	)
}

export default App
