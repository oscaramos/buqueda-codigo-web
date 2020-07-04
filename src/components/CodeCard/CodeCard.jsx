import React from 'react'

import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { makeStyles } from '@material-ui/core/styles'

import { formatCode } from '../../utils/prettierFormat'
import { highlightCode } from '../../utils/highlightCode'

import Skeleton from '@material-ui/lab/Skeleton/Skeleton'

const useStylesCodeItem = makeStyles(() => ({
	cardContainer: {
		width: '100%',
		fontSize: '1.10em'
	},
	card: {
		boxShadow: 'none',
		borderRadius: '6px',
		border: '1px solid #D7DAE0'
	}
}))

const LoadingCard = ( {size} ) => {
	return [...Array(size).keys()].map((key) =>
		<Skeleton key={key} variant="text" animation="wave"/>
	)
}

export default function CodeCard({ code, loading }) {
	const classes = useStylesCodeItem()
	const formattedText = formatCode(code)
	const highlightedCode = highlightCode(formattedText)

	return <Grid item className={classes.cardContainer}>
		<Card className={classes.card}>
			<CardContent>
				<pre>
					<code>
						{!loading?
							<div dangerouslySetInnerHTML={{ __html: highlightedCode.value }} />
							: <LoadingCard size={6}/>
						}
					</code>
				</pre>
			</CardContent>
		</Card>
	</Grid>
}
