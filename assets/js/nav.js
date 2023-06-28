// Mobile Navbar functions
const mobileMenuEl = document.querySelector('.mobileNavMenu')
const openEl = document.querySelector('.burger-menu')
const closeEl = document.querySelector('.close-menu')

openEl.addEventListener('click', () => {
	mobileMenuEl.classList.toggle('open')
})

closeEl.addEventListener('click', () => {
	mobileMenuEl.classList.remove('open')
})
