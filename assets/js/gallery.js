const setDefault = () => {
	document.getElementById('photo-gallery--empty-state').style.display = 'none'
	document.getElementById('photo-gallery--list').style.display = 'none'
}

const fetchGalleryData = async () => {
	return await axios.get('https://smflx-b64a687ce7fc.herokuapp.com/api/v1/photos')
}

const initGallery = async () => {
	let isGalleryLoading = true
	setDefault()

	try {
		let response = await fetchGalleryData()
		isGalleryLoading = false

		if (response.data.data.length == 0) {
			document.getElementById('photo-gallery--empty-state').style.display = 'block'
		} else {
			document.getElementById('photo-gallery--list').style.display = 'block'

			let photoListContainer = document.getElementById('photo-gallery--list')

			function createImageNode(src) {
				var img = document.createElement('img')
				img.src = src
				return img
			}

			let images = response.data.data

			for (let i = 0; i < images.length; i++) {
				photoListContainer.appendChild(createImageNode(images[i].image_url))
			}
		}
	} catch (error) {
		document.getElementById('photo-gallery--empty-state').style.display = 'block'
		document.getElementById('photo-gallery--list').style.display = 'none'
	}
}
