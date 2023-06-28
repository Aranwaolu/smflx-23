const setDefault = () => {
	document.getElementById('photo-gallery--empty-state').style.display = 'none'
	document.getElementById('photo-gallery-container').style.display = 'none'
}

const fetchGalleryData = async () => {
	return await axios.get('https://smflx-b64a687ce7fc.herokuapp.com/api/v1/galleries')
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
			// document.getElementById('photo-gallery-container').style.display = 'block'
			// loop throught the results and display
		}
	} catch (error) {}
}
