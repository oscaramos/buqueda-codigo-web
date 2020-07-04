import React from 'react'

import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { makeStyles } from '@material-ui/core/styles'

import { formatCode } from '../../utils/prettierFormat'
import { highlightCode } from '../../utils/highlightCode'

const useStylesCodeItem = makeStyles(() => ({
	cardContainer: {
		width: '100%',
		maxWidth: '600px',
	},
}))

export default function CodeItem({ code }) {
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
