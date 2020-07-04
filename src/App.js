import React, { useState, useEffect } from 'react'

import Card from '@material-ui/core/Card'
import AppBar from '@material-ui/core/AppBar'
import TextField from '@material-ui/core/TextField'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import { makeStyles } from '@material-ui/core/styles'

import searchCode from './api/api'

import { ReactComponent as SearchIcon } from './icons/search.svg'

import './App.css'

const useStyles = makeStyles((theme) => ({
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
		borderRadius: '6px',
		border: '1px solid #D7DAE0',
		backgroundColor: '#fff',
		width: '35em',
		margin: 'auto',
	},
	appbar: {
		height: '6em',
		backgroundColor: '#fff',
		boxShadow: 'none',
	}
}))

const useStylesSearch = makeStyles(() => ({
	root: {
		fontFamily: 'Menlo',
	},
	icon: {
		width: '1.5em'
	}
}))

function SearchBar(props) {
	const classes = useStylesSearch()
	return (
		<React.Fragment>
			<TextField
				variant='outlined'
				InputProps={{classes,
					endAdornment:
						<InputAdornment position="end">
							<SearchIcon className={classes.icon} />
						</InputAdornment> }}
				placeholder='Search for java code'
				{...props}
			/>
		</React.Fragment>)
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
		<div>
			<div>
				<AppBar position='fixed' className={classes.appbar}>
					<SearchBar className={classes.searchBar}/>
				</AppBar>
			</div>
			<Container maxWidth="sm">
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
		</div>
	)
}

export default App
