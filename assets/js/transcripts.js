const setDefault = () => {
	document.getElementById('transcripts--empty-state').style.display = 'none'
	document.getElementById('transcripts-container').style.display = 'none'
}

const fetchTranscriptsData = async () => {
	return await axios.get('https://smflx-b64a687ce7fc.herokuapp.com/api/v1/transcripts')
}

const initTranscripts = async () => {
	let isGalleryLoading = true
	setDefault()

	try {
		let response = await fetchTranscriptsData()
		isGalleryLoading = false

		if (response.data.data.length == 0) {
			document.getElementById('transcripts--empty-state').style.display = 'block'
		} else {
			// document.getElementById('transcripts-container').style.display = 'block'
			// loop throught the results and display
		}
	} catch (error) {}
}
