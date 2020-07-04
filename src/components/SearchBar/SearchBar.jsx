import React from 'react'

import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import { makeStyles } from '@material-ui/core/styles'

import { ReactComponent as SearchIcon } from '../../icons/search.svg'

const useStylesSearch = makeStyles(() => ({
	root: {
		fontFamily: 'Menlo',
	}
}))

const SearchIconAdornment = () => (
	<InputAdornment position="end">
		<SearchIcon style={{width: '1.5em'}} />
	</InputAdornment>
)

export default function SearchBar(props) {
	const classes = useStylesSearch()
	return (
		<React.Fragment>
			<TextField
				variant='outlined'
				InputProps={{classes, endAdornment: <SearchIconAdornment />}}
				placeholder='Search for java code'
				{...props}
			/>
		</React.Fragment>)
}
