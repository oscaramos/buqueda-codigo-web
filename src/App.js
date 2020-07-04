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

import searchCode from './api/api'

import { formatCode } from './utils/prettierFormat'
import { highlightCode } from './utils/highlightCode'

import 'highlight.js/styles/github.css'
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
	},
	appbarMargin: {
		height: '8em',
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

	const javaText = 'public class AddTwoIntegers { public static void main(String[] args) { int first = 10; int second = 20; System.out.println("Enter two numbers: " + first + " " + second); int sum = first + second; System.out.println("The sum is: " + sum); } }'
	const formattedText = formatCode(javaText)
	const highlightedCode = highlightCode(formattedText)

	return (
		<div>
			<AppBar position='fixed' className={classes.appbar}>
				<SearchBar className={classes.searchBar}/>
			</AppBar>
			<div className={classes.appbarMargin} />
			<Container maxWidth="sm">
				<Grid container spacing={3}>
					{codes.map((code, index) => (
						<Grid item key={index} className={classes.cardContainer}>
							<Card>
								<CardContent>
									<pre>
										<code>
											<div dangerouslySetInnerHTML={{__html: highlightedCode.value}} />
										</code>
									</pre>
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
