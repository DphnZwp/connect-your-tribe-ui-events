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
		if (event.key === 's') {
			button.classList.remove('purple')
			button.classList.remove('cyan')
		}
	})
})