const buttons = document.querySelectorAll('a')

buttons.forEach(button => {

	// Single click event listener
	button.addEventListener('click', function() {
		button.classList.add('purple')
	})

	// Double click event listener
	button.addEventListener('dblclick', function() { 
		button.classList.add('cyan')
	})

	// Keydown event listener
	window.addEventListener('keydown', function(event) { 
		if (event.key === 'z') {
			button.classList.remove('purple')
			button.classList.remove('cyan')
			button.classList.remove('red')
		}
	})

	// Long press
	// Mousedown event listener
	button.addEventListener('mousedown', function() {
		const self = this
		timer = setTimeout(()=>{
			self.classList.add('red')
		}, 2000)
	})

	// Mousedown event listener
	button.addEventListener('mouseup', function() {
		clearTimeout(timer)
	})

	// Device orientation event listener
	button.addEventListener('orientationchange', function() { 
		button.classList.add('red')
		},false)
})