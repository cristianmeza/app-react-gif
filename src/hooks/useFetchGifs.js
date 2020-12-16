import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
	const [state, setState] = useState({
		data: [],
		loading: true
	})

	// setTimeout( () => {
	// 	setState({
	// 		data: [1, 2, 3, 4],
	// 		loading: false
	// 	})
	// }, 3000)

	useEffect(() => {
		getGifs( category )
			.then(gifs => {
				setState({
					data: gifs,
					loading: false
				})
			})
	}, [category])

	return state;
}