const buttons = document.querySelectorAll('a')
const menu = document.querySelector("nav");
const menuButton = document.querySelector("#help");
const closeButton = document.querySelector("#close")

// Show menu
document.addEventListener('keydown', function(event) {
	if (event.code === 'Space') {
		menu.classList.toggle("hide");
	}
})

// Show and close menu with buttons
menuButton.addEventListener('click', function() {
	menu.classList.remove("hide");
})

closeButton.addEventListener('click', function() {
	menu.classList.add("hide");
})

buttons.forEach(button => {

	// Single click event listener
	button.addEventListener('click', function() {
		button.classList.add('purple')
	})

	// Double click event listener
	button.addEventListener('dblclick', function() { 
		button.classList.add('green')
	})

	// Keydown event listener
	window.addEventListener('keydown', function(event) { 
		if (event.key === 'z') {
			button.classList.remove('purple')
			button.classList.remove('green')
			button.classList.remove('orange')
		}
	})

	// Long press
	// Mousedown event listener
	button.addEventListener('mousedown', function() {
		const self = this
		timer = setTimeout(()=>{
			self.classList.add('orange')
		}, 2000)
	})

	// Mousedown event listener
	button.addEventListener('mouseup', function() {
		clearTimeout(timer)
	})

	// Device orientation event listener
	button.addEventListener('orientationchange', function() { 
		button.classList.add('yellow')
		},false)
})