import React, { useState, useEffect } from 'react'

import Card from '@material-ui/core/Card'
import AppBar from '@material-ui/core/AppBar'
import TextField from '@material-ui/core/TextField'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import InputAdornment from '@material-ui/core/InputAdornment'
import { makeStyles } from '@material-ui/core/styles'

import { ReactComponent as SearchIcon } from './icons/search.svg'

import { formatCode } from './utils/prettierFormat'
import { highlightCode } from './utils/highlightCode'

import searchCode from './api/api'

import 'highlight.js/styles/github-gist.css'
import './App.css'

const useStyles = makeStyles((theme) => ({
	'@global': {
		html: {
			backgroundColor: '#eeeeef',
			fontFamily: 'Menlo',
		}
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
	},
	appbarMargin: {
		height: '8em',
	}
}))

const useStylesSearch = makeStyles(() => ({
	root: {
		fontFamily: 'Menlo',
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
							<SearchIcon style={{width: '1.5em'}} />
						</InputAdornment> }}
				placeholder='Search for java code'
				{...props}
			/>
		</React.Fragment>)
}

const useStylesCodeItem = makeStyles(() => ({
	cardContainer: {
		width: '100%',
		maxWidth: '600px',
	},
}))

function CodeItem({ code }) {
	const classes = useStylesCodeItem()
	const formattedText = formatCode(code)
	const highlightedCode = highlightCode(formattedText)

	return <Grid item className={classes.cardContainer}>
		<Card>
			<CardContent>
				<pre>
					<code>
						<div dangerouslySetInnerHTML={{ __html: highlightedCode.value }} />
					</code>
				</pre>
			</CardContent>
		</Card>
	</Grid>
}

function App() {
	const classes = useStyles()
	const [query, setQuery] = useState('')
	const [codes, setCodes] = useState([])

	useEffect(() => {
		searchCode('string to int', 10)
			.then(codes => {
				setCodes(codes.codes)
			})
	}, [])

	const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			console.log('submit')
			searchCode(query, 10)
				.then(codes => {
					setCodes(codes.codes)
				})
		}
	}

	return (
		<div>
			<AppBar position='fixed' className={classes.appbar}>
				<SearchBar
					className={classes.searchBar}
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					onKeyPress={handleKeyPress}
				/>
			</AppBar>
			<div className={classes.appbarMargin} />
			<Container maxWidth="sm">
				<Grid container spacing={3}>
					{codes.map((code, index) => (
						<CodeItem key={index} code={code} />
					))}
				</Grid>
			</Container>
		</div>
	)
}

export default App
