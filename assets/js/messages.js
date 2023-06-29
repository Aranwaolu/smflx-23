const setDefault = () => {
	document.getElementById('audio-messages--empty-state').style.display = 'none'
	document.getElementById('audio-messages-list-container').style.display = 'none'
}

const fetchMessagesData = async () => {
	return await axios.get('https://smflx-b64a687ce7fc.herokuapp.com/api/v1/messages')
}

const fetchASingleMessage = async (uuid) => {
	return await axios.get(`https://smflx-b64a687ce7fc.herokuapp.com/api/v1/messages/${uuid}`)
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
		playBtnLink.href = `/messages.html?id=${message.uuid}`
		// playBtnLink.href = `/messages?id=${message.uuid}` // PRODUCTION
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

const initAllMessages = async () => {
	setDefault()

	try {
		let response = await fetchMessagesData()

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

const initSingleMessage = async (uuid) => {
	let response = await fetchASingleMessage(uuid)
	console.log(response)
	setSingleMessage(response.data.data)
}

const setSingleMessage = (message) => {
	const messagePlayerContainer = document.getElementById('messages-single--player')

	// Create the content wrapper
	const contentWrapper = document.createElement('div')
	contentWrapper.classList.add('messages-single--content-wrapper')
	contentWrapper.style.backgroundImage = `url(${message.image_banner_url})`

	// Create the content div
	const content = document.createElement('div')
	content.classList.add('messages-single--content')

	// Create the details section
	const details = document.createElement('div')
	details.classList.add('messages-single--details')

	// Create the title heading
	const title = document.createElement('h5')
	title.textContent = message.title

	// Create the minister and date paragraph
	const ministerDate = document.createElement('p')
	ministerDate.innerHTML = `By ${message.minister} <span> on ${message.date.slice(0, 10)}</span>`

	// Create the SMFLX 2023 heading
	const smflx = document.createElement('h6')
	smflx.textContent = 'SMFLX 2023'

	// Create the button section
	const buttons = document.createElement('div')
	buttons.classList.add('messages-single--btns')

	// Create the download audio button
	const downloadAudioBtn = document.createElement('button')
	downloadAudioBtn.classList.add('messages-single--download-audio')
	downloadAudioBtn.textContent = 'Download'
	downloadAudioBtn.addEventListener('click', () => {
		downloadMessage(message.audio_url, `SMFLX-23_${message.date.slice(0, 10)}_${message.title}-${message.minister}.mp3`)
	})

	// Create the download transcript button
	const downloadTranscriptBtn = document.createElement('button')
	downloadTranscriptBtn.classList.add('messages-single--download-transcript')
	downloadTranscriptBtn.textContent = 'Get Transcript'

	// Create the audio element
	const audioElement = document.createElement('audio')
	audioElement.classList.add('audio-player')
	audioElement.src = message.audio_url
	audioElement.controls = true

	// Append the elements to their respective parent containers
	details.appendChild(title)
	details.appendChild(ministerDate)
	details.appendChild(smflx)

	buttons.appendChild(downloadAudioBtn)
	buttons.appendChild(downloadTranscriptBtn)

	content.appendChild(details)
	content.appendChild(buttons)

	contentWrapper.appendChild(content)

	messagePlayerContainer.appendChild(contentWrapper)
	messagePlayerContainer.appendChild(audioElement)
}

const initMessages = async () => {
	document.getElementById('messages-full-container').style.display = 'none'
	document.getElementById('messages-single-wrapper').style.display = 'none'

	const urlParams = new URLSearchParams(window.location.search)
	const id = urlParams.get('id')
	console.log('id -->> ', id)
	if (id == null) {
		document.getElementById('messages-full-container').style.display = 'block'
		document.getElementById('messages-footer').style.display = 'flex'

		setTimeout(() => {
			initAllMessages()
		}, 1500)
	} else {
		document.getElementById('messages-single-wrapper').style.display = 'flex'
		document.getElementById('messages-footer').style.display = 'flex'

		setTimeout(() => {
			initSingleMessage(id)
		}, 500)
	}
}

const downloadMessage = async (url, filename) => {
	const response = await fetch(url)
	const blob = await response.blob()
	const link = document.createElement('a')
	link.href = window.URL.createObjectURL(blob)
	link.download = filename
	link.click()
}
