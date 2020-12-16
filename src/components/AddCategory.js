import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({ setCategories, categories, setMessage }) => {

	const [value, setValue] = useState('')

	const handleChangeInput = e => {
		setValue(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		if (categories.find(category => category === value)) {
			setMessage('La categoría ya fue ingresada')
		} else {
			setCategories(category => [value, ...category])
			setValue('')
			setMessage('')
		}
	}

	return (
		<form onSubmit={ handleSubmit }>
			<input
				type="text"
				value={ value }
				onChange={ handleChangeInput }
			/>
		</form>
	)
}

AddCategory.propTypes = {
	setCategories: PropTypes.func.isRequired
}

export default AddCategory