const getGifs = async (category) => {
	const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&api_key=ET99j9Ucvoe1oU7HDJvhgVbruxXKahH0&limit=10`

	const request = await fetch(url)
	const { data } = await request.json()

	return data.map(item => {
		return {
			id: item.id,
			title: item.title,
			url: item.images.downsized_medium.url
		}
	})
}

export { getGifs };