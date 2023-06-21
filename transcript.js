// Mobile Navbar functions
const mobileMenuEl = document.querySelector('.mobileNavMenu')
const openEl = document.querySelector('.burger-menu')
const closeEl = document.querySelector('.close')
openEl.addEventListener('click', () => {
	mobileMenuEl.classList.toggle('open')
})
closeEl.addEventListener('click', () => {
	mobileMenuEl.classList.remove('open')
})

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
	// Get the search input element
	var searchInput = document.getElementById('search-input')

	// Get all the transcript items
	var transcriptItems = document.querySelectorAll('.transcript-by-pastors-container')

	// Add click event listener to the search image
	var searchImage = document.querySelector('.search-container img')
	searchImage.addEventListener('click', function () {
		// Get the search term from the input
		var searchTerm = searchInput.value.trim().toLowerCase()

		// Loop through all the transcript items
		for (var i = 0; i < transcriptItems.length; i++) {
			var transcriptItem = transcriptItems[i]

			// Get the transcript text
			var transcriptText = transcriptItem.innerText.toLowerCase()

			// Show or hide the transcript item based on the search term
			if (transcriptText.includes(searchTerm)) {
				transcriptItem.style.display = 'block'
			} else {
				transcriptItem.style.display = 'none'
			}
		}
	})
})

// Get the select element
const yearSelect = document.querySelector('select[name="Year 2023"]')

// Get all the transcript containers
const transcriptContainers = document.querySelectorAll('.transcript-by-pastors-container')

// Add event listener to the select element
yearSelect.addEventListener('change', function () {
	// Get the selected year
	const selectedYear = this.value

	// Loop through all the transcript containers
	transcriptContainers.forEach(function (container) {
		// Get the year from the transcript container
		const transcriptYear = container.querySelector('p span').textContent

		// Check if the transcript year matches the selected year
		if (transcriptYear.includes(selectedYear)) {
			// Show the transcript container
			container.style.display = 'block'
		} else {
			// Hide the transcript container
			container.style.display = 'none'
		}
	})
})

document.addEventListener('DOMContentLoaded', function () {
	// Get all the navigation buttons
	const navigationButtons = document.querySelectorAll('.navigation-button button')

	// Add click event listener to each navigation button
	navigationButtons.forEach(function (button) {
		button.addEventListener('click', function () {
			const buttonNumber = parseInt(button.textContent) // Get the number from the button

			// Find the corresponding transcript row
			const transcriptRow = document.querySelector('.transcript-by-pastors-container:nth-child(' + (buttonNumber + 3) + ')')

			// Scroll to the transcript row
			if (transcriptRow) {
				transcriptRow.scrollIntoView({ behavior: 'smooth' })
			}
		})
	})
})
