const setDefault = () => {
	document.getElementById('audio-messages--empty-state').style.display = 'none'
	document.getElementById('audio-messages-container').style.display = 'none'
}

const fetchMessagesData = async () => {
	return await axios.get('https://smflx-b64a687ce7fc.herokuapp.com/api/v1/messages')
}

const initMessages = async () => {
	let isGalleryLoading = true
	setDefault()

	try {
		let response = await fetchMessagesData()
		isGalleryLoading = false

		if (response.data.data.length == 0) {
			document.getElementById('audio-messages--empty-state').style.display = 'block'
		} else {
			// document.getElementById('audio-messages-container').style.display = 'block'
			// loop throught the results and display
		}
	} catch (error) {}
}
