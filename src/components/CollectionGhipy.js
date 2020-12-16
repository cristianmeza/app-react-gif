import React from 'react'
import PropTypes from 'prop-types'

//Custom
import GifItem from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

const CollectionGhipy = ({ category }) => {

	const { data:images, loading } = useFetchGifs(category)
	//Renombrando data por images


	// const [count, setCount] = useState(0)
	// const [gifs, setGifs] = useState([])

	// useEffect(() => {
	// 	getGifs( category ).then(setGifs)
	// 	//Si solo se usa el primer argumento que devuelve then, en vez de usar then(response => setGifs(response)), solo se usa el nombre de la funcion (setGifs) o un console.log.
	// }, [category]) //Cuando category cambia, se renderiza el componente

	//El segundo parametro de useEffect es un array de dependencias. Si queda vacío, quiere decir que lo que está dentro de useEffect se ejecutará solo una vez o la primera vez que se ejecute el componente. En caso de poner por ejemplo count dentro de los parentesis, getGifsFromGhiphy se ejecutaría cada vez que count cambie

	return (
		<>
			<h3 className="animate__animated animate__fadeIn">{ category }</h3>
			<div className="card-grid">
				{
					loading && <p className="animate__animated animate__bounceOut">Cargando...</p>
				}
				{/*<h3>{ category } - { count }</h3>*/}
				{/*<button onClick={ () => setCount(count + 1) }>Añadir</button>*/}

				{
					images.map(img => (
						//Renombrando data por images
						<GifItem
							key={ img.id }
							{ ...img } //Enviando el objeto imagen como un objeto destructurado
						/>
					))
				}
			</div>
		</>
	)
}

CollectionGhipy.propTypes = {
	category: PropTypes.string
}

export default CollectionGhipy