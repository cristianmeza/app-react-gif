
import React, { useState } from 'react'
// import PropTypes from 'prop-types'

import AddCategory from './AddCategory'
import CollectionGhipy from './CollectionGhipy';

const GifsExpertApp = () => {

	const [categories, setCategories] = useState(['Spiderman PS4'])
	const [message, setMessage] = useState(null)

	// const handleAddCategory = () => {
	// 	if (categories.find(category => category === 'Ezio')) {
	// 		setMessage('La categoría ya fue agregada')
	// 	} else {
	// 		// setCategories([...categories, 'Ezio'])
	// 		setCategories(cats => [...cats, 'Ezio']) //cats tiene el estado de todas las categorías
	// 	}
	// }

	return (
		<div>
			<h2>GifsExpertApp</h2>
			<hr />

			<AddCategory
				setCategories={ setCategories }
				categories={ categories }
				setMessage={ setMessage }
			/>

			{/*<button onClick={ handleAddCategory }>Añadir categoría</button>*/}

			{
				message && <p><strong>La categoría ya fue agregada</strong></p>
			}

			{
				categories.map((item, i) => (
					<CollectionGhipy
						key={ item }
						category={ item }
					/>
				))
			}
		</div>
	)
}

// GifsExpertApp.propTypes = {

// }

export default GifsExpertApp