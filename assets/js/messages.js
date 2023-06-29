const setDefault = () => {
	document.getElementById('audio-messages--empty-state').style.display = 'none'
	document.getElementById('audio-messages-list-container').style.display = 'none'
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
		document.getElementById('messages-loader').style.display = 'none'

		if (response.data.data.length == 0) {
			document.getElementById('audio-messages--empty-state').style.display = 'block'
		} else {
			document.getElementById('audio-messages-list-container').style.display = 'block'
			// loop throught the results and display
			createMessagesList(response.data.data)
		}
	} catch (error) {}
}

const createMessagesList = (messages) => {
	const container = document.getElementById('audio-messages-body')

	// Loop through the data list
	messages.forEach((message) => {
		// Create the main div element
		const div = document.createElement('div')
		div.className = 'audio-message-component'

		// Create the image element
		const image = document.createElement('img')
		image.src = message.image_url
		image.alt = ''

		// Create the content div element
		const contentDiv = document.createElement('div')
		contentDiv.className = 'audio-message--content'

		// Create the details div element
		const detailsDiv = document.createElement('div')
		detailsDiv.className = 'audio-message--details'

		// Create the title heading element
		const titleHeading = document.createElement('h5')
		titleHeading.textContent = message.title

		// Create the minister span element
		const ministerSpan = document.createElement('span')
		ministerSpan.className = 'audio-message-minister'
		ministerSpan.textContent = message.minister

		// Create the date span element
		const dateSpan = document.createElement('span')
		dateSpan.className = 'audio-message-date'

		// Create the SMFLX heading element
		const smflxHeading = document.createElement('h6')
		smflxHeading.textContent = 'SMFLX 2023'

		// Append the minister span and date span to the details div
		detailsDiv.appendChild(titleHeading)

		const ministerDetail = document.createElement('p')
		ministerDetail.appendChild(document.createTextNode('By '))
		ministerDetail.appendChild(ministerSpan)
		dateSpan.appendChild(document.createTextNode('  on '))
		dateSpan.appendChild(document.createTextNode(`${message.date.slice(0, 10)}`)) // convert this date

		ministerDetail.appendChild(dateSpan)
		detailsDiv.appendChild(ministerDetail)
		detailsDiv.appendChild(smflxHeading)

		// Create the buttons div element
		const buttonsDiv = document.createElement('div')
		buttonsDiv.className = 'audio-message--btns'

		// Create the play button link element
		const playBtnLink = document.createElement('a')
		playBtnLink.href = '#'
		playBtnLink.className = 'audio-message--play-btn'
		playBtnLink.dataset.audioUuid = message.uuid
		playBtnLink.textContent = 'Play'

		// Create the download button element
		const downloadBtn = document.createElement('button')
		downloadBtn.className = 'audio-message--download-btn'
		downloadBtn.textContent = 'Download Transcript'

		// Append the play button link and download button to the buttons div
		buttonsDiv.appendChild(playBtnLink)
		buttonsDiv.appendChild(downloadBtn)

		// Append the image, details div, and buttons div to the content div
		contentDiv.appendChild(detailsDiv)
		contentDiv.appendChild(buttonsDiv)

		// Append the content div to the main div
		div.appendChild(image)
		div.appendChild(contentDiv)

		// Append the main div to the container element
		container.appendChild(div)
	})
}
