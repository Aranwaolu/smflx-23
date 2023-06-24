// Disrupt animation
const slideContainerWE = document.querySelector('.worship-experience--carousel-container')
const slideWE = document.querySelector('.worship-experience-slides')
const intervalWE = 3000

let slidesWE = document.querySelectorAll('.worship-experience-slide')
let indexWE = 1
let slideIdWE

const firstCloneWE = slidesWE[0].cloneNode(true)
const lastCloneWE = slidesWE[slidesWE.length - 1].cloneNode(true)

firstCloneWE.id = 'first-clone'
lastCloneWE.id = 'last-clone'

slideWE.append(firstCloneWE)
slideWE.prepend(lastCloneWE)

const slideWidthWE = slidesWE[indexWE].clientWidth

slideWE.style.transform = `translateX(${-slideWidthWE * indexWE}px)`
// console.log(slidesWE)

const startSlideWE = () => {
	slideIdWE = setInterval(() => {
		moveToNextSlideWE()
	}, intervalWE)
}

const getSlidesWE = () => document.querySelectorAll('.worship-experience-slide')

slideWE.addEventListener('transitionend', () => {
	slidesWE = getSlidesWE()
	if (slidesWE[indexWE].id === firstCloneWE.id) {
		slideWE.style.transition = 'none'
		indexWE = 1
		slideWE.style.transform = `translateX(${-slideWidthWE * indexWE}px)`
	}
	if (slidesWE[indexWE].id === lastCloneWE.id) {
		slideWE.style.transition = 'none'
		indexWE = slidesWE.length - 2
		slideWE.style.transform = `translateX(${-slideWidthWE * indexWE}px)`
	}
})

const moveToNextSlideWE = () => {
	slidesWE = getSlidesWE()
	if (indexWE >= slidesWE.length - 1) return
	indexWE++
	slideWE.style.transition = '.7s ease-in-out'
	slideWE.style.transform = `translateX(${-slideWidthWE * indexWE}px)`
}

const moveToPreviousSlideWE = () => {
	if (indexWE <= 0) return
	indexWE--
	slideWE.style.transition = '.7s ease-in-out'
	slideWE.style.transform = `translateX(${-slideWidthWE * indexWE}px)`
}

slideContainerWE.addEventListener('mouseenter', () => {
	clearInterval(slideIdWE)
})

slideContainerWE.addEventListener('mouseleave', startSlideWE)

startSlideWE()
